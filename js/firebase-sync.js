/**
 * 🕉️ Hindi Vedabase - Firebase Cloud Suggestion & Live Sync Engine
 * 
 * Flow:
 * 1. Readers submit verse improvement suggestions.
 * 2. Only the DELTA (the exact changed field & text) is stored in Firebase Firestore under 'vedabase_suggestions'.
 * 3. The contributor's local view remains unchanged (authentic original text remains until approved).
 * 4. You (Admin) review the change directly in Firebase Console.
 *    - To approve: simply change `status` from 'pending' to 'approved' in Firestore!
 * 5. As soon as you set status to 'approved', all users worldwide receive the update in real time!
 */

(function () {
  'use strict';

  // Firebase Configuration (Directly connected to your Hindi-Vedabase project)
  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAW5pU19QlwbPvGyRpCb4xkAj_t2-1nohE",
    authDomain: "hindi-vedabase.firebaseapp.com",
    projectId: "hindi-vedabase",
    storageBucket: "hindi-vedabase.firebasestorage.app",
    messagingSenderId: "589040941127",
    appId: "1:589040941127:web:74d8c5281d7eb3c0ab5962",
    measurementId: "G-D6JC6DZZVB"
  };

  class FirebaseSyncService {
    constructor() {
      this.isInitialized = false;
      this.db = null;
      this.approvedOverrides = new Map(); // verseKey/id -> { field: newText }
      this.listeners = [];
    }

    // Initialize Firebase
    async init() {
      if (this.isInitialized) return true;

      try {
        if (typeof firebase === 'undefined') {
          console.warn('[Firebase] Firebase SDK not loaded in browser yet.');
          return false;
        }

        if (!firebase.apps.length) {
          firebase.initializeApp(FIREBASE_CONFIG);
        }

        this.db = firebase.firestore();
        this.isInitialized = true;
        console.log('✅ [Firebase] Connected to Firestore: hindi-vedabase');

        // Load cached approved overrides for offline resilience
        this.loadCachedOverrides();

        // Listen for approved suggestions in real time
        this.startApprovedSuggestionsListener();

        return true;
      } catch (err) {
        console.warn('[Firebase] Initialization error (running offline mode):', err);
        return false;
      }
    }

    // Normalize verse key for lookup
    normalizeKey(k) {
      if (!k) return '';
      return String(k).trim().toLowerCase().replace(/\s+/g, ' ');
    }

    // Load cached approved overrides from localStorage
    loadCachedOverrides() {
      try {
        const raw = localStorage.getItem('vedabase_cloud_approved_overrides');
        if (raw) {
          const map = JSON.parse(raw);
          for (const [k, fields] of Object.entries(map)) {
            this.approvedOverrides.set(this.normalizeKey(k), fields);
          }
        }
      } catch (e) {
        console.warn('[Firebase] Error loading cached overrides:', e);
      }
    }

    // Listen to approved suggestions from Firestore in real-time
    // Listen to approved suggestions from Firestore in real-time
    startApprovedSuggestionsListener() {
      if (!this.db) return;
      try {
        this.db.collection('vedabase_suggestions')
          .where('status', '==', 'approved')
          .onSnapshot(
            (snapshot) => {
              const cacheObj = {};
              this.approvedOverrides.clear();

              snapshot.forEach((doc) => {
                const data = doc.data();

                const fieldUpdates = {};

                // 1. Clean minimal schema (sloka, fieldKey, newText)
                if (data.fieldKey && data.newText !== undefined) {
                  if (data.fieldKey === 'wordToWord' && data.parsedWords && Array.isArray(data.parsedWords)) {
                    fieldUpdates['wordToWord'] = data.parsedWords;
                  } else {
                    fieldUpdates[data.fieldKey] = data.newText;
                  }
                }
                // 2. Legacy / multi-field schema (changes array)
                else if (Array.isArray(data.changes)) {
                  data.changes.forEach(ch => {
                    if (ch && ch.field) {
                      if (ch.field === 'wordToWord' && ch.parsedWords && Array.isArray(ch.parsedWords) && ch.parsedWords.length > 0) {
                        fieldUpdates['wordToWord'] = ch.parsedWords;
                      } else {
                        fieldUpdates[ch.field] = ch.newText;
                      }
                    }
                  });
                }

                if (Object.keys(fieldUpdates).length > 0) {
                  const slokaRef = data.sloka || data.verseReference || '';
                  const rawNumber = slokaRef.replace(/^[A-Za-z]+\s*/, '');
                  const dashKey = slokaRef.toLowerCase().replace(/[\s\.]+/g, '-');

                  const keys = [
                    slokaRef,
                    rawNumber,
                    dashKey,
                    data.verseKey,
                    data.verseId,
                    data.slokaNumber ? `${data.book || ''} ${data.slokaNumber}` : null,
                    data.slokaNumber,
                    (data.canto && data.chapter && data.verse) ? `${data.canto}.${data.chapter}.${data.verse}` : null,
                    (data.canto && data.chapter && data.verse) ? `${data.book || 'sb'} ${data.canto}.${data.chapter}.${data.verse}` : null,
                    data.songNumber ? `vs ${data.songNumber}` : null,
                    data.songNumber ? `vs-${data.songNumber}` : null
                  ].filter(Boolean);

                  keys.forEach(k => {
                    const norm = this.normalizeKey(k);
                    if (norm) {
                      const existing = this.approvedOverrides.get(norm) || {};
                      const merged = { ...existing, ...fieldUpdates };
                      this.approvedOverrides.set(norm, merged);
                      cacheObj[norm] = merged;
                    }
                  });
                }
              });

              // Save to offline cache
              try {
                localStorage.setItem('vedabase_cloud_approved_overrides', JSON.stringify(cacheObj));
              } catch (e) {}

              console.log(`📡 [Firebase] Synced ${snapshot.size} approved edits globally (${this.approvedOverrides.size} unique keys).`);
              this.notifyListeners();
            },
            (err) => {
              console.warn('[Firebase] Listener notice (using cached data):', err.message);
            }
          );
      } catch (e) {
        console.warn('[Firebase] Failed to attach realtime listener:', e);
      }
    }

    onApprovedOverridesChange(cb) {
      if (typeof cb === 'function') this.listeners.push(cb);
    }

    notifyListeners() {
      this.listeners.forEach(cb => {
        try { cb(this.approvedOverrides); } catch (e) { console.error(e); }
      });
    }

    // Get any active cloud approved override for a given sloka object
    getOverrideForSloka(sloka) {
      if (!sloka || this.approvedOverrides.size === 0) return null;
      const b = (sloka.book || (sloka.id && String(sloka.id).startsWith('sb-') ? 'SB' : (sloka.id && String(sloka.id).startsWith('bg-') ? 'BG' : ''))).toUpperCase();
      const candidates = [
        sloka.verseKey,
        sloka.id,
        b && sloka.verseKey ? `${b} ${sloka.verseKey}` : null,
        sloka.songNumber ? `vs ${sloka.songNumber}` : null,
        sloka.songNumber ? `vs-${sloka.songNumber}` : null,
        (sloka.canto && sloka.chapter && sloka.verse) ? `${sloka.canto}.${sloka.chapter}.${sloka.verse}` : null,
        (sloka.canto && sloka.chapter && sloka.verse) ? `${b || 'SB'} ${sloka.canto}.${sloka.chapter}.${sloka.verse}` : null,
        (sloka.chapter && sloka.verse && !sloka.canto) ? `BG ${sloka.chapter}.${sloka.verse}` : null,
        (sloka.chapter && sloka.verse && !sloka.canto) ? `${sloka.chapter}.${sloka.verse}` : null
      ];
      for (const c of candidates) {
        if (!c) continue;
        const ov = this.approvedOverrides.get(this.normalizeKey(c));
        if (ov) return ov;
      }
      return null;
    }

    // Apply approved cloud overrides to a sloka or sloka list
    applyApprovedOverrides(slokas) {
      if (!slokas) return slokas;
      if (this.approvedOverrides.size === 0) return slokas;

      if (Array.isArray(slokas)) {
        return slokas.map(s => {
          const override = this.getOverrideForSloka(s);
          if (override) {
            return {
              ...s,
              ...override,
              isCloudApproved: true
            };
          }
          return s;
        });
      } else {
        const override = this.getOverrideForSloka(slokas);
        if (override) {
          return {
            ...slokas,
            ...override,
            isCloudApproved: true
          };
        }
        return slokas;
      }
    }

    // Submit ONLY THE CLEAN DELTA to Firestore (Minimal schema: sloka, field, oldText, newText, name, reason, status)
    async submitDeltaSuggestion(payload) {
      if (!this.db) {
        const inited = await this.init();
        if (!inited) throw new Error('Firebase कनेक्ट नहीं हो सका। कृपया इंटरनेट जांचें।');
      }

      const slokaRef = payload.verseReference || payload.slokaNumber || 'verse';
      const suggesterName = (payload.suggesterName || '').trim() || 'जिज्ञासु पाठक';
      const reason = (payload.notes || '').trim() || 'सुधार';
      const changes = payload.changes || [];

      // Save each changed field cleanly without clutter
      for (let i = 0; i < changes.length; i++) {
        const ch = changes[i];
        const safeRef = String(slokaRef).replace(/[\/\.\s#\$\[\]\-–—:]+/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
        const fieldSuffix = ch.field ? `_${ch.field}` : '';
        const docId = `PENDING__${safeRef}${fieldSuffix}_${Date.now()}`;
        const docRef = this.db.collection('vedabase_suggestions').doc(docId);

        const now = new Date();
        const submittedIso = payload.submittedAt || payload.createdAt || now.toISOString();
        const submittedFormatted = payload.submittedAtFormatted || now.toLocaleString('en-IN', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });

        const record = {
          sloka: slokaRef,
          verseReference: payload.verseReference || slokaRef,
          verseKey: payload.verseKey || '',
          verseId: payload.verseId || '',
          book: payload.book || '',
          canto: payload.canto !== undefined ? payload.canto : null,
          chapter: payload.chapter !== undefined ? payload.chapter : null,
          verse: payload.verse !== undefined ? payload.verse : null,
          songNumber: payload.songNumber || null,
          slokaNumber: payload.slokaNumber || '',
          field: ch.label || ch.field,
          fieldKey: ch.field,
          oldText: ch.oldText || '',
          newText: ch.newText || '',
          name: suggesterName,
          phone: (payload.phone || '').trim(),
          whatChanged: reason,
          status: 'pending',
          createdAt: submittedIso,
          submittedAt: submittedIso,
          submittedAtFormatted: submittedFormatted,
          timestamp: payload.timestamp || now.getTime()
        };

        if (ch.field === 'wordToWord' && ch.parsedWords) {
          record.parsedWords = ch.parsedWords;
        }

        await docRef.set(record);
      }

      return true;
    }
  }

  // Global instance
  window.vedabaseFirebase = new FirebaseSyncService();

  document.addEventListener('DOMContentLoaded', () => {
    window.vedabaseFirebase.init();
  });
})();
