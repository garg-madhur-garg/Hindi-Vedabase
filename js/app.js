/**
 * Hindi Vedabase - Main Application Controller (app.js)
 * High-performance state management, instant search rendering, presentation mode, sloka editing & backup
 * Fully integrated with:
 *  - Srimad Bhagavad Gita (18 Chapters, 700 Verses)
 *  - Sri Isopanisad (Invocation + 18 Mantras)
 *  - Srimad Bhagavatam (12 Cantos, 335 Chapters, 18,000 Verses)
 *  - Sri Caitanya-caritamrta (3 Lilas, 62 Chapters, 11,546 Verses)
 */

function getCantoStructure() {
  return window.SB_CANTOS_DATA || [];
}

function getBgChapters() {
  return window.BG_CHAPTERS_DATA || [];
}

function getIsoData() {
  return window.ISO_DATA || { mantras: [] };
}

function getCcLilas() {
  return window.CC_LILAS_DATA || [];
}

class VedabaseApp {
  constructor() {
    this.currentBook = 'BG';    // 'BG', 'ISO', 'CC', or 'SB'
    this.currentSloka = null;
    this.currentCanto = 1;      // for SB
    this.currentLila = 1;       // for CC (1=Adi, 2=Madhya, 3=Antya)
    this.currentChapter = 1;    // for BG, SB, or CC
    this.chapterSlokas = [];
    this.allSlokas = [];
    this.verseMap = new Map();
    this.chapterMap = new Map();     // key: "canto-chapter" for SB
    this.bgChapterMap = new Map();   // key: chapter (number) for BG
    this.isoMap = new Map();         // key: "inv", "1" to "18" for ISO
    this.isoSlokas = [];
    this.ccMap = new Map();          // key: "adi.1.1", "madhya.20.108" for CC
    this.ccChapterMap = new Map();   // key: "adi-1", "madhya-20" for CC
    this.ccSlokas = [];
    this.vsMap = new Map();          // key: "vs-1", "vs 1", song titles
    this.vsAuthorMap = new Map();    // key: author name -> song array
    this.vsBookMap = new Map();      // key: book name -> song array
    this.vsSlokas = [];
    this.loadedCantos = new Set();
    this.isBgLoaded = false;
    this.isIsoLoaded = false;
    this.isCcLoaded = false;
    this.isVsLoaded = false;
    this.loadingCantos = new Map();
    this.loadingBg = null;
    this.loadingIso = null;
    this.loadingCc = null;
    this.loadingVs = null;
    this.currentVsFilterType = 'all';
    this.currentVsFilterVal = '';
    this.currentTheme = 'dark';
    this.currentHighlightWord = null;
    this.highlightFadeTimer = null;
    this.isPreloading = false;
    this.isPresentationOpen = false;
    this.presFontScale = parseFloat(localStorage.getItem('vedabase_pres_font_scale')) || 1;
    this.isPresDetailsVisible = localStorage.getItem('vedabase_pres_show_details') !== 'false';
    this.presSections = {
      sanskrit: true,
      words: true,
      translation: true,
      purport: true
    };
  }

  // Helper to get lila string key
  getLilaKey(lila) {
    if (typeof lila === 'string') {
      const l = lila.toLowerCase();
      if (l.startsWith('a') && !l.startsWith('an')) return 'adi';
      if (l.startsWith('m')) return 'madhya';
      if (l.startsWith('an')) return 'antya';
    }
    const num = Number(lila);
    if (num === 1) return 'adi';
    if (num === 2) return 'madhya';
    if (num === 3) return 'antya';
    return 'adi';
  }

  // Get all user custom edited slokas from localStorage
  getUserCustomEdits() {
    try {
      const raw = localStorage.getItem('vedabase_user_custom_edits');
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      console.warn('Error reading custom edits:', e);
      return {};
    }
  }

  // Save a user custom edited sloka to permanent storage (localStorage)
  async saveUserCustomEdit(sloka) {
    sloka.isUserEdited = true;
    sloka.lastEditedAt = new Date().toISOString();

    const isCC = sloka.book === 'CC' || (sloka.id && sloka.id.startsWith('cc-'));
    const isISO = !isCC && (sloka.book === 'ISO' || (sloka.id && sloka.id.startsWith('iso-')));
    const isBG = !isCC && !isISO && (sloka.book === 'BG' || (sloka.id && sloka.id.startsWith('bg-')));

    let key;
    if (isCC) {
      const lilaKey = this.getLilaKey(sloka.lila || sloka.canto || 1);
      key = `cc-${lilaKey}-${sloka.chapter}-${sloka.verse}`;
    } else if (isISO) {
      key = `iso-${sloka.verseKey || sloka.verse}`;
    } else if (isBG) {
      key = `bg-${sloka.chapter}-${sloka.verse}`;
    } else {
      key = sloka.verseKey || `${sloka.canto}.${sloka.chapter}.${sloka.verse}`;
    }

    // 1. Save to permanent localStorage backup
    try {
      const edits = this.getUserCustomEdits();
      edits[key] = sloka;
      if (sloka.verseKey) edits[sloka.verseKey] = sloka;
      if (sloka.id) edits[sloka.id] = sloka;
      localStorage.setItem('vedabase_user_custom_edits', JSON.stringify(edits));
    } catch (e) {
      console.warn('LocalStorage save warning:', e);
    }

    // 2. Update in-memory structures
    this.verseMap.set(sloka.verseKey, sloka);
    this.verseMap.set(sloka.id, sloka);

    if (isCC) {
      const lilaKey = this.getLilaKey(sloka.lila || sloka.canto || 1);
      const chKey = `${lilaKey}-${sloka.chapter}`;
      this.ccMap.set(`${lilaKey}.${sloka.chapter}.${sloka.verse}`, sloka);
      this.verseMap.set(`cc ${lilaKey} ${sloka.chapter}.${sloka.verse}`, sloka);
      this.verseMap.set(`cc-${lilaKey}-${sloka.chapter}-${sloka.verse}`, sloka);

      if (!this.ccChapterMap.has(chKey)) {
        this.ccChapterMap.set(chKey, []);
      }
      const chList = this.ccChapterMap.get(chKey);
      const chIdx = chList.findIndex(s => s.id === sloka.id || s.verseKey === sloka.verseKey);
      if (chIdx >= 0) chList[chIdx] = sloka;
      else chList.push(sloka);

      const ccIdx = this.ccSlokas.findIndex(s => s.id === sloka.id || s.verseKey === sloka.verseKey);
      if (ccIdx >= 0) this.ccSlokas[ccIdx] = sloka;
      else this.ccSlokas.push(sloka);
    } else if (isISO) {
      const vK = String(sloka.verseKey || sloka.verse).toLowerCase();
      this.isoMap.set(vK, sloka);
      this.verseMap.set(`iso ${vK}`, sloka);
      this.verseMap.set(`iso-${vK}`, sloka);
      const isoIdx = this.isoSlokas.findIndex(s => s.id === sloka.id || s.verseKey === sloka.verseKey);
      if (isoIdx >= 0) this.isoSlokas[isoIdx] = sloka;
      else this.isoSlokas.push(sloka);
    } else if (isBG) {
      this.verseMap.set(`bg-${sloka.chapter}-${sloka.verse}`, sloka);
      this.verseMap.set(`bg ${sloka.chapter}.${sloka.verse}`, sloka);
      const chNum = Number(sloka.chapter);
      if (this.bgChapterMap.has(chNum)) {
        const chList = this.bgChapterMap.get(chNum);
        const chIdx = chList.findIndex(s => s.verseKey === sloka.verseKey || s.verse == sloka.verse);
        if (chIdx >= 0) chList[chIdx] = sloka;
        else chList.push(sloka);
      }
    } else {
      const chKey = `${sloka.canto}-${sloka.chapter}`;
      if (this.chapterMap.has(chKey)) {
        const chList = this.chapterMap.get(chKey);
        const chIdx = chList.findIndex(s => s.verseKey === sloka.verseKey);
        if (chIdx >= 0) chList[chIdx] = sloka;
        else chList.push(sloka);
      }
    }

    const idx = this.allSlokas.findIndex(s => s.id === sloka.id || s.verseKey === sloka.verseKey);
    if (idx >= 0) {
      this.allSlokas[idx] = sloka;
    } else {
      this.allSlokas.push(sloka);
    }

    if (window.searchEngine && window.searchEngine.isIndexed) {
      window.searchEngine.appendIndex([sloka]);
    }

    this.updateCustomEditsCountBadge();
  }

  // Revert a single verse back to its authentic original JSON data
  async revertCurrentVerseToOriginal() {
    if (!this.currentSloka) return;
    const isCC = this.currentBook === 'CC' || this.currentSloka.book === 'CC' || this.currentSloka.id?.startsWith('cc-');
    const isISO = !isCC && (this.currentBook === 'ISO' || this.currentSloka.book === 'ISO' || this.currentSloka.id?.startsWith('iso-'));
    const isBG = !isCC && !isISO && (this.currentBook === 'BG' || this.currentSloka.book === 'BG' || this.currentSloka.id?.startsWith('bg-'));
    const verseKey = this.currentSloka.verseKey;

    // Remove from localStorage
    const edits = this.getUserCustomEdits();
    let editKey;
    if (isCC) {
      const lilaKey = this.getLilaKey(this.currentSloka.lila || this.currentSloka.canto || 1);
      editKey = `cc-${lilaKey}-${this.currentSloka.chapter}-${this.currentSloka.verse}`;
    } else if (isISO) {
      editKey = `iso-${this.currentSloka.verseKey || this.currentSloka.verse}`;
    } else if (isBG) {
      editKey = `bg-${this.currentSloka.chapter}-${this.currentSloka.verse}`;
    } else {
      editKey = verseKey;
    }

    if (edits[editKey] || edits[verseKey] || edits[this.currentSloka.id]) {
      delete edits[editKey];
      delete edits[verseKey];
      delete edits[this.currentSloka.id];
      localStorage.setItem('vedabase_user_custom_edits', JSON.stringify(edits));
    }

    try {
      if (isCC) {
        const resp = await fetch(`data/chaitanya-charitamrita/chaitanya-charitamrita.json?v=${Date.now()}`);
        if (resp.ok) {
          const freshSlokas = await resp.json();
          const orig = freshSlokas.find(s => s.verseKey === verseKey || s.id === this.currentSloka.id);
          if (orig) {
            delete orig.isUserEdited;
            delete orig.lastEditedAt;

            const lilaKey = this.getLilaKey(orig.lila || orig.canto || 1);
            this.ccMap.set(`${lilaKey}.${orig.chapter}.${orig.verse}`, orig);
            this.verseMap.set(`cc ${lilaKey} ${orig.chapter}.${orig.verse}`, orig);
            this.verseMap.set(orig.id, orig);

            const idx = this.allSlokas.findIndex(s => s.id === orig.id);
            if (idx >= 0) this.allSlokas[idx] = orig;

            const ccIdx = this.ccSlokas.findIndex(s => s.id === orig.id);
            if (ccIdx >= 0) this.ccSlokas[ccIdx] = orig;

            if (window.searchEngine) window.searchEngine.appendIndex([orig]);

            this.updateCustomEditsCountBadge();
            await this.displaySloka(orig);
            this.closeAllModals();
            this.showToast(`✅ पयार CC ${verseKey} मूल JSON डेटा में रीसेट हो गया!`);
            return;
          }
        }
      } else if (isISO) {
        const resp = await fetch(`data/isopanisad/isopanisad.json?v=${Date.now()}`);
        if (resp.ok) {
          const freshSlokas = await resp.json();
          const orig = freshSlokas.find(s => s.verseKey === verseKey || s.id === this.currentSloka.id);
          if (orig) {
            delete orig.isUserEdited;
            delete orig.lastEditedAt;

            this.isoMap.set(String(orig.verseKey), orig);
            this.verseMap.set(`iso ${orig.verseKey}`, orig);
            this.verseMap.set(`iso-${orig.verseKey}`, orig);
            this.verseMap.set(orig.id, orig);

            const idx = this.allSlokas.findIndex(s => s.id === orig.id);
            if (idx >= 0) this.allSlokas[idx] = orig;

            const isoIdx = this.isoSlokas.findIndex(s => s.id === orig.id);
            if (isoIdx >= 0) this.isoSlokas[isoIdx] = orig;

            if (window.searchEngine) window.searchEngine.appendIndex([orig]);

            this.updateCustomEditsCountBadge();
            await this.displaySloka(orig);
            this.closeAllModals();
            this.showToast(`✅ ईशोपनिषद् मंत्र ${verseKey} मूल JSON डेटा में रीसेट हो गया!`);
            return;
          }
        }
      } else if (isBG) {
        const resp = await fetch(`data/bhagavad-gita/bhagavad-gita.json?v=${Date.now()}`);
        if (resp.ok) {
          const freshSlokas = await resp.json();
          const orig = freshSlokas.find(s => s.verseKey === verseKey || (s.chapter == this.currentSloka.chapter && s.verse == this.currentSloka.verse));
          if (orig) {
            delete orig.isUserEdited;
            delete orig.lastEditedAt;

            this.verseMap.set(verseKey, orig);
            this.verseMap.set(orig.id, orig);
            this.verseMap.set(`bg-${orig.chapter}-${orig.verse}`, orig);

            const idx = this.allSlokas.findIndex(s => s.id === orig.id);
            if (idx >= 0) this.allSlokas[idx] = orig;

            const chNum = Number(orig.chapter);
            if (this.bgChapterMap.has(chNum)) {
              const chList = this.bgChapterMap.get(chNum);
              const chIdx = chList.findIndex(s => s.id === orig.id);
              if (chIdx >= 0) chList[chIdx] = orig;
            }

            if (window.searchEngine) window.searchEngine.appendIndex([orig]);

            this.updateCustomEditsCountBadge();
            await this.displaySloka(orig);
            this.closeAllModals();
            this.showToast(`✅ श्लोक BG ${verseKey} मूल JSON डेटा में रीसेट हो गया है!`);
            return;
          }
        }
      } else {
        const cantoNum = Number(this.currentSloka.canto);
        const resp = await fetch(`data/srimad-bhagavatam/canto-${cantoNum}.json?v=${Date.now()}`);
        if (resp.ok) {
          const freshSlokas = await resp.json();
          const orig = freshSlokas.find(s => (s.verseKey || `${s.canto}.${s.chapter}.${s.verse}`) === verseKey);
          if (orig) {
            delete orig.isUserEdited;
            delete orig.lastEditedAt;

            this.verseMap.set(verseKey, orig);
            this.verseMap.set(orig.id, orig);

            const idx = this.allSlokas.findIndex(s => s.verseKey === verseKey);
            if (idx >= 0) this.allSlokas[idx] = orig;

            const chKey = `${orig.canto}-${orig.chapter}`;
            if (this.chapterMap.has(chKey)) {
              const chList = this.chapterMap.get(chKey);
              const chIdx = chList.findIndex(s => s.verseKey === verseKey);
              if (chIdx >= 0) chList[chIdx] = orig;
            }

            if (window.searchEngine) window.searchEngine.appendIndex([orig]);

            this.updateCustomEditsCountBadge();
            await this.displaySloka(orig);
            this.closeAllModals();
            this.showToast(`✅ श्लोक SB ${verseKey} मूल JSON डेटा में रीसेट हो गया है!`);
            return;
          }
        }
      }
    } catch (e) {
      console.error('Error reverting verse to original JSON:', e);
    }
    this.showToast('श्लोक रीसेट नहीं हो सका।');
  }

  // Clear ALL user custom edits and reload entire database strictly from JSON files
  async clearAllCustomEdits() {
    const edits = this.getUserCustomEdits();
    const count = Object.keys(edits).length;
    if (count === 0) {
      this.showToast('कोई सम्पादित श्लोक मौजूद नहीं है। समस्त डेटा पहले से मूल JSON फाइलों से लोड है।');
      return;
    }

    if (!confirm(`क्या आप सभी ${count} सम्पादित श्लोकों को हटाकर मूल JSON डेटा वापस लाना चाहते हैं?`)) {
      return;
    }

    localStorage.removeItem('vedabase_user_custom_edits');
    this.verseMap.clear();
    this.chapterMap.clear();
    this.bgChapterMap.clear();
    this.isoMap.clear();
    this.isoSlokas = [];
    this.ccMap.clear();
    this.ccChapterMap.clear();
    this.ccSlokas = [];
    this.allSlokas = [];
    this.loadedCantos.clear();
    this.isBgLoaded = false;
    this.isIsoLoaded = false;
    this.isCcLoaded = false;

    if (window.searchEngine) {
      window.searchEngine.clearIndex();
    }

    this.showToast('⏳ समस्त डेटा JSON फाइलों से पुनः लोड हो रहा है...');

    await this.ensureBgLoaded();
    await this.ensureIsoLoaded();
    await this.ensureCcLoaded();
    const curKey = this.currentSloka ? this.currentSloka.verseKey : '1.1';
    await this.loadVerseByKey(curKey);
    this.updateCustomEditsCountBadge();
    this.closeAllModals();

    setTimeout(() => {
      this.preloadAllCantosInBackground();
    }, 100);

    this.showToast('✅ सभी श्लोक मूल JSON फाइलों से सफलतापूर्वक रीसेट हो गए!');
  }

  // Merge user custom edits onto any incoming slokas array
  applyUserCustomEdits(slokas) {
    if (!slokas || slokas.length === 0) return slokas;
    const userEdits = this.getUserCustomEdits();
    return slokas.map(s => {
      const isCC = s.book === 'CC' || (s.id && s.id.startsWith('cc-'));
      const isISO = !isCC && (s.book === 'ISO' || (s.id && s.id.startsWith('iso-')));
      const isBG = !isCC && !isISO && (s.book === 'BG' || (s.id && s.id.startsWith('bg-')));

      let editKey;
      if (isCC) {
        const lilaKey = this.getLilaKey(s.lila || s.canto || 1);
        editKey = `cc-${lilaKey}-${s.chapter}-${s.verse}`;
      } else if (isISO) {
        editKey = `iso-${s.verseKey || s.verse}`;
      } else if (isBG) {
        editKey = `bg-${s.chapter}-${s.verse}`;
      } else {
        editKey = s.verseKey || `${s.canto}.${s.chapter}.${s.verse}`;
      }

      if (editKey && userEdits[editKey]) return { ...userEdits[editKey] };
      if (s.verseKey && userEdits[s.verseKey]) return { ...userEdits[s.verseKey] };
      if (s.id && userEdits[s.id]) return { ...userEdits[s.id] };
      return s;
    });
  }

  // Update count badge in manager modal
  updateCustomEditsCountBadge() {
    const badge = document.getElementById('customEditsCountBadge');
    if (badge) {
      const count = Object.keys(this.getUserCustomEdits()).length;
      badge.textContent = `${count} सम्पादित`;
    }
  }

  // Export only user custom edits as a JSON array
  exportCustomEdits() {
    const edits = this.getUserCustomEdits();
    const slokas = Object.values(edits);
    if (slokas.length === 0) {
      this.showToast('आपने अभी तक कोई श्लोक सम्पादित नहीं किया है।');
      return;
    }

    const blob = new Blob([JSON.stringify(slokas, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Vedabase_My_Custom_Edits_${slokas.length}_Verses.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.showToast(`📥 ${slokas.length} सम्पादित श्लोक बैकअप डाउनलोड हुआ!`);
  }

  // Ensure Sri Caitanya-caritamrta JSON is loaded
  async ensureCcLoaded() {
    if (this.isCcLoaded) return true;
    if (this.loadingCc) return await this.loadingCc;

    this.loadingCc = (async () => {
      try {
        const resp = await fetch('data/chaitanya-charitamrita/chaitanya-charitamrita.json');
        if (resp.ok) {
          let verses = await resp.json();
          verses = this.applyUserCustomEdits(verses);
          this.ccSlokas = verses;

          for (let i = 0; i < verses.length; i++) {
            const s = verses[i];
            s.book = 'CC';
            const lilaKey = this.getLilaKey(s.lila || s.canto || 1);
            const lilaNum = lilaKey === 'adi' ? 1 : (lilaKey === 'madhya' ? 2 : 3);
            s.lila = lilaNum;

            const key = `${lilaKey}.${s.chapter}.${s.verse}`;
            const id = s.id || `cc-${lilaKey}-${s.chapter}-${s.verse}`;
            const chKey = `${lilaKey}-${s.chapter}`;

            this.ccMap.set(key, s);
            this.verseMap.set(key, s);
            this.verseMap.set(id, s);
            this.verseMap.set(`cc ${key}`, s);
            this.verseMap.set(`cc ${lilaKey} ${s.chapter}.${s.verse}`, s);
            this.verseMap.set(`cc-${lilaKey}-${s.chapter}-${s.verse}`, s);

            if (!this.ccChapterMap.has(chKey)) {
              this.ccChapterMap.set(chKey, []);
            }
            this.ccChapterMap.get(chKey).push(s);

            const existsIdx = this.allSlokas.findIndex(x => x.id === id);
            if (existsIdx >= 0) this.allSlokas[existsIdx] = s;
            else this.allSlokas.push(s);
          }

          if (window.searchEngine) {
            window.searchEngine.appendIndex(verses);
          }

          this.isCcLoaded = true;
          return true;
        }
      } catch (e) {
        console.warn('Notice: Failed to load chaitanya-charitamrita.json:', e);
      }
      return false;
    })();

    const result = await this.loadingCc;
    this.loadingCc = null;
    return result;
  }

  // Ensure Sri Isopanisad JSON is loaded
  async ensureIsoLoaded() {
    if (this.isIsoLoaded) return true;
    if (this.loadingIso) return await this.loadingIso;

    this.loadingIso = (async () => {
      try {
        const resp = await fetch('data/isopanisad/isopanisad.json');
        if (resp.ok) {
          let mantras = await resp.json();
          mantras = this.applyUserCustomEdits(mantras);
          this.isoSlokas = mantras;

          for (let i = 0; i < mantras.length; i++) {
            const m = mantras[i];
            m.book = 'ISO';
            const vK = String(m.verseKey || m.verse).toLowerCase();
            const id = m.id || `iso-${vK}`;

            this.isoMap.set(vK, m);
            this.verseMap.set(`iso ${vK}`, m);
            this.verseMap.set(`iso-${vK}`, m);
            this.verseMap.set(id, m);

            if (vK === 'inv' || vK === '0') {
              this.isoMap.set('inv', m);
              this.isoMap.set('0', m);
              this.verseMap.set('iso 0', m);
              this.verseMap.set('iso inv', m);
            }

            const existsIdx = this.allSlokas.findIndex(x => x.id === id);
            if (existsIdx >= 0) this.allSlokas[existsIdx] = m;
            else this.allSlokas.push(m);
          }

          if (window.searchEngine) {
            window.searchEngine.appendIndex(mantras);
          }

          this.isIsoLoaded = true;
          return true;
        }
      } catch (e) {
        console.warn('Notice: Failed to load isopanisad.json:', e);
      }
      return false;
    })();

    const result = await this.loadingIso;
    this.loadingIso = null;
    return result;
  }

  // Parse raw Vaishnava song text into compact stanzas with collapsible arrow toggles
  parseSongBody(song) {
    if (!song || !song.body) return song;
    if (song.parsed) return song;

    const raw = song.body;
    let rawLyrics = '';
    let rawTranslation = '';
    let rawPurport = '';

    const transIdx = raw.search(/\bTRANSLATION\b/i);
    const purportIdx = raw.search(/\bPURPORT\b/i);

    if (transIdx >= 0) {
      rawLyrics = raw.substring(0, transIdx).trim();
      if (purportIdx > transIdx) {
        rawTranslation = raw.substring(transIdx + 11, purportIdx).trim();
        rawPurport = raw.substring(purportIdx + 7).trim();
      } else {
        rawTranslation = raw.substring(transIdx + 11).trim();
      }
    } else {
      rawLyrics = raw.trim();
    }

    // Split lyrics into stanzas
    const normLyrics = rawLyrics.replace(/\r\n/g, '\n');
    const stanzas = [];

    if (normLyrics.match(/(?:^|\n)\s*\(?\d+\)?\s*(?:\n|$)/)) {
      const parts = normLyrics.split(/(?:^|\n)\s*\(?(\d+)\)?\s*(?:\n|$)/);
      for (let i = 1; i < parts.length; i += 2) {
        const num = parts[i];
        const txt = (parts[i + 1] || '').trim();
        if (txt) {
          stanzas.push({ num, text: txt });
        }
      }
    }

    // Fallback if no numbered stanzas
    if (stanzas.length === 0) {
      const paras = normLyrics.split(/\n\s*\n+/);
      paras.forEach((p, idx) => {
        const pt = p.trim();
        if (pt) {
          stanzas.push({ num: String(idx + 1), text: pt });
        }
      });
    }

    // Split translations into numbered items map
    const normTrans = rawTranslation.replace(/\r\n/g, '\n');
    const transMap = new Map();
    const transList = [];

    if (normTrans.match(/(?:^|\n)\s*\(?\d+\)?[\.\)]\s*/)) {
      const tParts = normTrans.split(/(?:^|\n)\s*\(?(\d+)\)?[\.\)]\s*/);
      for (let i = 1; i < tParts.length; i += 2) {
        const num = tParts[i];
        const txt = (tParts[i + 1] || '').trim();
        if (txt) {
          transMap.set(num, txt);
          transList.push({ num, text: txt });
        }
      }
    } else if (normTrans) {
      const tParas = normTrans.split(/\n\s*\n+/);
      tParas.forEach((p, idx) => {
        const pt = p.trim();
        if (pt) {
          transMap.set(String(idx + 1), pt);
          transList.push({ num: String(idx + 1), text: pt });
        }
      });
    }

    // Extract word-to-word pairs if present
    const wordList = [];
    const dashMatches = [...raw.matchAll(/([a-zA-Z\u00C0-\u024F\-]+)--([^;,\n]+)/g)];
    dashMatches.forEach(m => {
      wordList.push({
        sanskrit: m[1].trim(),
        hindi: m[2].trim()
      });
    });

    const hasAnyWords = wordList.length > 0;
    const hasPurport = Boolean(rawPurport && rawPurport.trim());

    // Build Ultra-Compact Stanzas Flow with 3 Arrow Toggles (Slokas only by default)
    const flowHtml = `
      <div class="vs-song-flow">
        <!-- Master Control Toolbar -->
        <div class="vs-global-bar">
          <button type="button" class="vs-master-btn" id="vsMasterTransBtn" onclick="window.app.toggleAllVsTranslations(this)">
            <span>📖 सभी अनुवाद</span>
            <span class="vs-arrow-icon" id="vsMasterTransArrow">▾</span>
          </button>
          ${hasAnyWords ? `
            <button type="button" class="vs-master-btn" id="vsMasterWordsBtn" onclick="window.app.toggleAllVsWords(this)">
              <span>✨ सभी शब्दार्थ</span>
              <span class="vs-arrow-icon" id="vsMasterWordsArrow">▾</span>
            </button>
          ` : ''}
          ${hasPurport ? `
            <button type="button" class="vs-master-btn" id="vsMasterPurportBtn" onclick="window.app.toggleVsPurportDirect()">
              <span>🪔 तात्पर्य</span>
              <span class="vs-arrow-icon" id="vsMasterPurportArrow">▾</span>
            </button>
          ` : ''}
        </div>

        <!-- Stanzas Flow (Clean, compact slokas) -->
        ${stanzas.map((st, idx) => {
          const transText = transMap.get(st.num) || (transList[idx]?.text) || '';
          const hasTrans = Boolean(transText && transText.trim());

          // Match words to stanza if any
          const stanzaWords = wordList.filter(w => st.text.toLowerCase().includes(w.sanskrit.toLowerCase()));
          const effectiveWords = (stanzaWords.length > 0) ? stanzaWords : (idx === 0 && wordList.length > 0 ? wordList : []);
          const hasWords = effectiveWords.length > 0;

          const lyricsHtml = this.escapeHtml(st.text).replace(/\n/g, '<br>');

          return `
            <div class="vs-stanza-unit" id="vs-stanza-${st.num}">
              <div class="vs-stanza-header-row">
                <span class="vs-stanza-badge">पद ${st.num}</span>
              </div>

              <div class="vs-stanza-lyrics">${lyricsHtml}</div>

              ${hasWords ? `
                <div class="vs-stanza-words-drawer" id="drawer-vs-words-${st.num}" style="display: none;">
                  <div class="vs-words-inline-list">
                    ${effectiveWords.map(w => `
                      <div class="word-chip" onclick="window.app.searchWordDirectly('${this.escapeHtml(w.sanskrit)}')">
                        <span class="chip-sanskrit">${this.escapeHtml(w.sanskrit)}</span>
                        <span class="chip-sep">:</span>
                        <span class="chip-hindi">${this.escapeHtml(w.hindi)}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

              ${hasTrans ? `
                <div class="vs-stanza-trans-drawer" id="drawer-vs-trans-${st.num}" style="display: none;">
                  <div class="vs-trans-inline-text">
                    <span class="vs-trans-label">अनुवाद:</span>
                    ${this.escapeHtml(transText).replace(/\n/g, '<br>')}
                  </div>
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}

        <!-- Purport Unit with 3rd Arrow Toggle -->
        ${hasPurport ? `
          <div class="vs-purport-unit" id="vsSongPurportUnit">
            <button type="button" class="vs-purport-header-btn" onclick="window.app.toggleVsPurport()">
              <span style="display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>🪔</span>
                <span>भावार्थ एवं तात्पर्य (Purport)</span>
              </span>
              <span class="vs-arrow-icon" id="vsPurportMainArrow">▾</span>
            </button>
            <div class="vs-purport-content" id="vsPurportMainDrawer" style="display: none;">
              ${this.renderParagraphs(rawPurport)}
            </div>
          </div>
        ` : ''}
      </div>
    `;

    song.stanzas = stanzas;
    song.translations = transList;
    song.formattedStanzasHtml = flowHtml;
    song.sanskritDevanagari = flowHtml;
    song.sanskritIAST = ''; // Never duplicate!
    song.hindiTranslation = '';
    song.hindiPurport = rawPurport;
    if (wordList.length > 0) {
      song.wordToWord = wordList;
    }
    song.parsed = true;
    return song;
  }

  // Toggle all translations in the Vaishnava song
  toggleAllVsTranslations(masterBtn) {
    const drawers = document.querySelectorAll('.vs-stanza-trans-drawer');
    if (drawers.length === 0) return;

    let anyOpen = false;
    drawers.forEach(d => {
      if (d.style.display !== 'none') anyOpen = true;
    });

    const newDisplay = anyOpen ? 'none' : 'block';
    const newArrow = anyOpen ? '▾' : '▴';
    const newActive = !anyOpen;

    drawers.forEach(d => {
      d.style.display = newDisplay;
    });

    const mArrow = document.getElementById('vsMasterTransArrow') || masterBtn?.querySelector('.vs-arrow-icon');
    if (mArrow) mArrow.textContent = newArrow;
    const mBtn = document.getElementById('vsMasterTransBtn') || masterBtn;
    if (mBtn) {
      if (newActive) mBtn.classList.add('active');
      else mBtn.classList.remove('active');
    }
  }

  // Toggle all word-to-word meanings in the Vaishnava song
  toggleAllVsWords(masterBtn) {
    const drawers = document.querySelectorAll('.vs-stanza-words-drawer');
    if (drawers.length === 0) return;

    let anyOpen = false;
    drawers.forEach(d => {
      if (d.style.display !== 'none') anyOpen = true;
    });

    const newDisplay = anyOpen ? 'none' : 'block';
    const newArrow = anyOpen ? '▾' : '▴';
    const newActive = !anyOpen;

    drawers.forEach(d => {
      d.style.display = newDisplay;
    });

    const mArrow = document.getElementById('vsMasterWordsArrow') || masterBtn?.querySelector('.vs-arrow-icon');
    if (mArrow) mArrow.textContent = newArrow;
    const mBtn = document.getElementById('vsMasterWordsBtn') || masterBtn;
    if (mBtn) {
      if (newActive) mBtn.classList.add('active');
      else mBtn.classList.remove('active');
    }
  }

  // Toggle 3rd arrow for Song Purport
  toggleVsPurport() {
    const drawer = document.getElementById('vsPurportMainDrawer');
    const arrow = document.getElementById('vsPurportMainArrow');
    const masterArrow = document.getElementById('vsMasterPurportArrow');
    if (!drawer) return;

    const isHidden = drawer.style.display === 'none' || !drawer.style.display;
    if (isHidden) {
      drawer.style.display = 'block';
      if (arrow) arrow.textContent = '▴';
      if (masterArrow) masterArrow.textContent = '▴';
    } else {
      drawer.style.display = 'none';
      if (arrow) arrow.textContent = '▾';
      if (masterArrow) masterArrow.textContent = '▾';
    }
  }

  // Direct toggle purport from top master button
  toggleVsPurportDirect() {
    const unit = document.getElementById('vsSongPurportUnit');
    if (!unit) return;
    this.toggleVsPurport();
    unit.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Ensure Vaishnava Songs JSON is loaded
  async ensureVsLoaded() {
    if (this.isVsLoaded) return true;
    if (this.loadingVs) return await this.loadingVs;

    this.loadingVs = (async () => {
      try {
        const resp = await fetch('data/vaishnava-songs/vaishnava-songs.json');
        if (resp.ok) {
          let songs = await resp.json();
          songs = this.applyUserCustomEdits(songs);
          this.vsSlokas = songs;

          for (let i = 0; i < songs.length; i++) {
            const s = songs[i];
            s.book = 'VS';
            const num = s.songNumber || (i + 1);
            const id = s.id || `vs-${num}`;
            s.id = id;
            s.verseKey = `VS ${num}`;

            this.parseSongBody(s);

            this.vsMap.set(id, s);
            this.vsMap.set(String(num), s);
            this.vsMap.set(`vs ${num}`, s);
            this.vsMap.set(`vs-${num}`, s);
            this.verseMap.set(id, s);
            this.verseMap.set(`vs ${num}`, s);
            this.verseMap.set(`vs-${num}`, s);

            if (s.title) {
              const cleanT = s.title.toLowerCase().trim();
              this.vsMap.set(cleanT, s);
              this.verseMap.set(cleanT, s);
            }

            const auth = s.author || 'Various Acharyas';
            if (!this.vsAuthorMap.has(auth)) this.vsAuthorMap.set(auth, []);
            this.vsAuthorMap.get(auth).push(s);

            const bk = s.book || 'Vaishnava Songs';
            if (!this.vsBookMap.has(bk)) this.vsBookMap.set(bk, []);
            this.vsBookMap.get(bk).push(s);

            const existsIdx = this.allSlokas.findIndex(x => x.id === id);
            if (existsIdx >= 0) this.allSlokas[existsIdx] = s;
            else this.allSlokas.push(s);
          }

          if (window.searchEngine) {
            window.searchEngine.appendIndex(songs);
          }

          this.isVsLoaded = true;
          return true;
        }
      } catch (e) {
        console.warn('Notice: Failed to load vaishnava-songs.json:', e);
      }
      return false;
    })();

    const result = await this.loadingVs;
    this.loadingVs = null;
    return result;
  }

  // Ensure Srimad Bhagavad Gita JSON is loaded
  async ensureBgLoaded() {
    if (this.isBgLoaded) return true;
    if (this.loadingBg) return await this.loadingBg;

    this.loadingBg = (async () => {
      try {
        const resp = await fetch('data/bhagavad-gita/bhagavad-gita.json');
        if (resp.ok) {
          let slokas = await resp.json();
          slokas = this.applyUserCustomEdits(slokas);

          for (let i = 0; i < slokas.length; i++) {
            const s = slokas[i];
            s.book = 'BG';
            const key = s.verseKey || `${s.chapter}.${s.verse}`;
            const id = s.id || `bg-${s.chapter}-${s.verse}`;

            this.verseMap.set(key, s);
            this.verseMap.set(id, s);
            this.verseMap.set(`bg-${s.chapter}-${s.verse}`, s);
            this.verseMap.set(`bg.${s.chapter}.${s.verse}`, s);
            this.verseMap.set(`bg ${s.chapter}.${s.verse}`, s);

            const chNum = Number(s.chapter);
            if (!this.bgChapterMap.has(chNum)) {
              this.bgChapterMap.set(chNum, []);
            }
            this.bgChapterMap.get(chNum).push(s);

            const existsIdx = this.allSlokas.findIndex(x => x.id === id);
            if (existsIdx >= 0) this.allSlokas[existsIdx] = s;
            else this.allSlokas.push(s);
          }

          if (window.searchEngine) {
            window.searchEngine.appendIndex(slokas);
          }

          this.isBgLoaded = true;
          return true;
        }
      } catch (e) {
        console.warn('Notice: Failed to load bhagavad-gita.json:', e);
      }
      return false;
    })();

    const result = await this.loadingBg;
    this.loadingBg = null;
    return result;
  }

  // Ensure a specific canto is loaded directly from its JSON file
  async ensureCantoLoaded(canto) {
    const cNum = Number(canto);
    if (!cNum || cNum < 1 || cNum > 12) return false;
    if (this.loadedCantos.has(cNum)) return true;

    if (this.loadingCantos.has(cNum)) {
      return await this.loadingCantos.get(cNum);
    }

    const loadPromise = (async () => {
      try {
        const resp = await fetch(`data/srimad-bhagavatam/canto-${cNum}.json`);
        if (resp.ok) {
          let slokas = await resp.json();
          slokas = this.applyUserCustomEdits(slokas);

          const newSlokas = [];
          for (let i = 0; i < slokas.length; i++) {
            const s = slokas[i];
            s.book = 'SB';
            const key = `${s.canto}.${s.chapter}.${s.verse}`;
            const id = s.id || `sb-${s.canto}-${s.chapter}-${s.verse}`;

            if (!this.verseMap.has(key)) {
              this.allSlokas.push(s);
              newSlokas.push(s);
              this.verseMap.set(key, s);
              this.verseMap.set(id, s);
              this.verseMap.set(`sb-${s.canto}-${s.chapter}-${s.verse}`, s);
              this.verseMap.set(`sb.${s.canto}.${s.chapter}.${s.verse}`, s);
              this.verseMap.set(`sb ${s.canto}.${s.chapter}.${s.verse}`, s);

              const chKey = `${s.canto}-${s.chapter}`;
              if (!this.chapterMap.has(chKey)) {
                this.chapterMap.set(chKey, []);
              }
              this.chapterMap.get(chKey).push(s);
            }
          }

          this.loadedCantos.add(cNum);
          if (window.searchEngine && newSlokas.length > 0) {
            window.searchEngine.appendIndex(newSlokas);
          }
          return true;
        }
      } catch (e) {
        console.warn(`Notice: Failed to load JSON for Canto ${cNum}:`, e);
      }
      return false;
    })();

    this.loadingCantos.set(cNum, loadPromise);
    const result = await loadPromise;
    this.loadingCantos.delete(cNum);
    return result;
  }

  // Preload all Cantos (1 to 12) seamlessly in the background directly from JSON
  async preloadAllCantosInBackground() {
    if (this.isPreloading) return;
    this.isPreloading = true;

    for (let c = 1; c <= 12; c++) {
      if (!this.loadedCantos.has(c)) {
        await this.ensureCantoLoaded(c);
        await new Promise(r => setTimeout(r, 60));
      }
    }

    this.isPreloading = false;
    console.log(`All scriptures loaded (${this.allSlokas.length.toLocaleString()} total verses in memory)!`);
  }

  // Fast verse lookup
  async getSlokaData(verseKey) {
    if (!verseKey) return null;
    const cleanKey = verseKey.trim();

    if (this.verseMap.has(cleanKey)) {
      return this.verseMap.get(cleanKey);
    }

    // Check CC keys
    if (cleanKey.toLowerCase().startsWith('cc') || cleanKey.toLowerCase().startsWith('adi') || cleanKey.toLowerCase().startsWith('madhya') || cleanKey.toLowerCase().startsWith('antya')) {
      await this.ensureCcLoaded();
      if (this.verseMap.has(cleanKey)) return this.verseMap.get(cleanKey);
    }

    // Check VS keys
    if (cleanKey.toLowerCase().startsWith('vs') || cleanKey.toLowerCase().startsWith('song')) {
      await this.ensureVsLoaded();
      if (this.verseMap.has(cleanKey)) return this.verseMap.get(cleanKey);
      const numPart = cleanKey.replace(/^(?:vs|song)[\s.\-:]*/i, '').trim();
      if (numPart && this.vsMap.has(numPart)) return this.vsMap.get(numPart);
      if (numPart && this.vsMap.has(`vs-${numPart}`)) return this.vsMap.get(`vs-${numPart}`);
    }

    // Check ISO keys
    if (cleanKey.toLowerCase().startsWith('iso')) {
      await this.ensureIsoLoaded();
      if (this.verseMap.has(cleanKey)) return this.verseMap.get(cleanKey);
    }

    // Check BG keys
    if (cleanKey.toLowerCase().startsWith('bg')) {
      await this.ensureBgLoaded();
      if (this.verseMap.has(cleanKey)) return this.verseMap.get(cleanKey);
    }

    // Check SB keys
    const parts = cleanKey.replace(/^sb\s*/i, '').split('.');
    if (parts.length >= 3) {
      const c = parseInt(parts[0], 10);
      if (!isNaN(c) && c >= 1 && c <= 12) {
        await this.ensureCantoLoaded(c);
        if (this.verseMap.has(cleanKey)) return this.verseMap.get(cleanKey);
        const sbKey = `${parts[0]}.${parts[1]}.${parts[2]}`;
        if (this.verseMap.has(sbKey)) return this.verseMap.get(sbKey);
      }
    } else if (parts.length === 2) {
      await this.ensureBgLoaded();
      const bgKey = `${parts[0]}.${parts[1]}`;
      if (this.verseMap.has(bgKey)) return this.verseMap.get(bgKey);
      if (this.verseMap.has(`bg-${parts[0]}-${parts[1]}`)) return this.verseMap.get(`bg-${parts[0]}-${parts[1]}`);
    }

    return null;
  }

  // Initialize Application
  async init() {
    console.log('Initializing Hindi Vedabase (BG, ISO, CC, SB & VS Architecture)...');

    if (!localStorage.getItem('vedabase_v3_clean_json_synced')) {
      localStorage.removeItem('vedabase_user_custom_edits');
      localStorage.setItem('vedabase_v3_clean_json_synced', 'true');
    }

    this.setupTheme();
    this.bindEvents();
    this.setupAudioPlayer();
    this.renderSidebar();

    // 1. Load Bhagavad Gita, Sri Isopanisad, Sri Caitanya-caritamrta & Vaishnava Songs initially
    await this.ensureBgLoaded();
    await this.ensureIsoLoaded();
    await this.ensureCcLoaded();
    await this.ensureVsLoaded();

    // 2. Determine initial verse
    let initialVerseKey = 'bg 1.1';
    try {
      const savedKey = localStorage.getItem('vedabase_last_verse');
      if (savedKey) initialVerseKey = savedKey;
    } catch (e) {}

    // 3. Load initial verse
    await this.loadVerseByKey(initialVerseKey);

    // 4. Preload all Cantos (1-12) from JSON in background
    setTimeout(() => {
      this.preloadAllCantosInBackground();
    }, 100);
  }

  // Render Sidebar with BG, ISO, CC & SB
  renderSidebar() {
    // 1. Render Bhagavad Gita Chapters (1 to 18)
    const bgContainer = document.getElementById('bgChapterListContainer');
    if (bgContainer) {
      const bgChapters = getBgChapters();
      bgContainer.innerHTML = bgChapters.map(ch => `
        <li>
          <button class="chapter-btn ${this.currentBook === 'BG' && ch.chapter === this.currentChapter ? 'active' : ''}"
            id="bg-chap-btn-${ch.chapter}"
            onclick="window.app.loadBgChapter(${ch.chapter})"
            title="${ch.name} (${ch.totalVerses} श्लोक)">
            <div style="font-weight: 600;">अध्याय ${ch.chapter}: ${ch.name}</div>
            <div style="font-size: 0.725rem; color: var(--accent-gold);">${ch.totalVerses} श्लोक</div>
          </button>
        </li>
      `).join('');
    }

    // 2. Render Sri Isopanisad Mantras
    const isoContainer = document.getElementById('isoMantraListContainer');
    if (isoContainer) {
      const isoData = getIsoData();
      isoContainer.innerHTML = (isoData.mantras || []).map(m => `
        <li>
          <button class="chapter-btn ${this.currentBook === 'ISO' && String(this.currentSloka?.verseKey) === String(m.key) ? 'active' : ''}"
            id="iso-mantra-btn-${m.key}"
            onclick="window.app.loadIsoMantra('${m.key}')"
            title="${m.label} - ${m.name}">
            <div style="font-weight: 600;">${m.label}</div>
            <div style="font-size: 0.725rem; color: var(--accent-gold);">${m.name}</div>
          </button>
        </li>
      `).join('');
    }

    // 3. Render Sri Caitanya-caritamrta (3 Lilas & 62 Chapters)
    const ccContainer = document.getElementById('ccLilaListContainer');
    if (ccContainer) {
      const ccLilas = getCcLilas();
      ccContainer.innerHTML = ccLilas.map(l => `
        <li class="canto-item ${this.currentBook === 'CC' && l.lila === this.currentLila ? 'expanded active' : ''}" id="cc-lila-item-${l.key}">
          <button class="canto-header-btn" onclick="window.app.toggleCcLilaAccordion('${l.key}')">
            <span style="font-weight: 700;">${l.name}</span>
            <span style="font-size: 0.75rem; opacity: 0.7;">▾</span>
          </button>
          <ul class="chapter-sublist" id="cc-chapter-list-${l.key}">
            ${(l.chapters || []).map(ch => `
              <li>
                <button class="chapter-btn ${this.currentBook === 'CC' && l.lila === this.currentLila && ch.chapter === this.currentChapter ? 'active' : ''}" 
                  id="cc-chap-btn-${l.key}-${ch.chapter}"
                  onclick="window.app.loadCcChapter('${l.key}', ${ch.chapter})"
                  title="${ch.name} (${ch.totalVerses} पयार)">
                  <div style="font-weight: 600;">अध्याय ${ch.chapter}: ${ch.name}</div>
                  <div style="font-size: 0.725rem; color: var(--accent-gold);">${ch.totalVerses} पयार</div>
                </button>
              </li>
            `).join('')}
          </ul>
        </li>
      `).join('');
    }

    // 4. Render Srimad Bhagavatam Cantos (1 to 12)
    const sbContainer = document.getElementById('cantoListContainer');
    if (sbContainer) {
      const cantos = getCantoStructure();
      sbContainer.innerHTML = cantos.map(c => `
        <li class="canto-item ${this.currentBook === 'SB' && c.canto === this.currentCanto ? 'expanded active' : ''}" id="canto-item-${c.canto}">
          <button class="canto-header-btn" onclick="window.app.toggleCantoAccordion(${c.canto})">
            <span style="font-weight: 700;">${c.name}</span>
            <span style="font-size: 0.75rem; opacity: 0.7;">▾</span>
          </button>
          <ul class="chapter-sublist" id="chapter-list-${c.canto}">
            ${(c.chapters || []).map(ch => `
              <li>
                <button class="chapter-btn ${this.currentBook === 'SB' && c.canto === this.currentCanto && ch.chapter === this.currentChapter ? 'active' : ''}" 
                  id="chap-btn-${c.canto}-${ch.chapter}"
                  onclick="window.app.loadChapter(${c.canto}, ${ch.chapter})"
                  title="${ch.name} (${ch.totalVerses} श्लोक)">
                  <div style="font-weight: 600;">अध्याय ${ch.chapter}: ${ch.name}</div>
                  <div style="font-size: 0.725rem; color: var(--accent-gold);">${ch.totalVerses} श्लोक</div>
                </button>
              </li>
            `).join('')}
          </ul>
        </li>
      `).join('');
    }

    // 5. Render Vaishnava Songs (Daily Prayers, Top Authors, Songbooks)
    this.renderVsSidebar();
  }

  // Accordion toggle: Toggles entire scripture open/close
  toggleScriptureAccordion(scriptureId) {
    const target = document.getElementById(scriptureId);
    if (target) {
      target.classList.toggle('expanded');
    }
  }

  // Accordion toggle: Toggles CC Lila open/close
  toggleCcLilaAccordion(lilaKey) {
    const targetItem = document.getElementById(`cc-lila-item-${lilaKey}`);
    if (targetItem) {
      targetItem.classList.toggle('expanded');
    }
  }

  // Accordion toggle: Toggles canto open/close
  toggleCantoAccordion(canto) {
    const targetItem = document.getElementById(`canto-item-${canto}`);
    if (targetItem) {
      targetItem.classList.toggle('expanded');
    }
  }

  // Toggle Vaishnava Songs subgroup
  toggleVsSubgroup(subgroupId) {
    const target = document.getElementById(`vs-subgroup-${subgroupId}`);
    const sublist = document.getElementById(`vs-sublist-${subgroupId}`);
    if (target) target.classList.toggle('expanded');
    if (sublist) {
      sublist.style.display = (sublist.style.display === 'none' || !sublist.style.display) ? 'block' : (target.classList.contains('expanded') ? 'block' : 'none');
    }
  }

  // Render Vaishnava Songs Sidebar
  renderVsSidebar() {
    const vsContainer = document.getElementById('vsSongListContainer');
    if (!vsContainer) return;

    const manifest = window.VS_MANIFEST || {};
    const dailyPrayers = manifest.dailyPrayers || [
      { id: 'vs-210', songNumber: 210, titleHindi: 'श्री श्री गुरु-अष्टक (मंगला आरती)', authorHindi: 'श्रील विश्वनाथ चक्रवर्ती ठाकुर', icon: '🪔' },
      { id: 'vs-159', songNumber: 159, titleHindi: 'नरसिंह आरती व प्रार्थना', authorHindi: 'श्रील व्यासदेव', icon: '🦁' },
      { id: 'vs-160', songNumber: 160, titleHindi: 'तुलसी आरती व प्रणाम', authorHindi: 'कृष्ण दास', icon: '🌿' },
      { id: 'vs-161', songNumber: 161, titleHindi: 'तुलसी महारानी वंदना', authorHindi: 'चन्द्रशेखर कवि', icon: '🍃' },
      { id: 'vs-94', songNumber: 94, titleHindi: 'गौर आरती (भोग/संध्या आरती)', authorHindi: 'श्रील भक्तिविनोद ठाकुर', icon: '✨' },
      { id: 'vs-158', songNumber: 158, titleHindi: 'दामोदराष्टकम्', authorHindi: 'सत्यव्रत मुनि', icon: '🪔' },
      { id: 'vs-45', songNumber: 45, titleHindi: 'शिक्षाष्टकम्', authorHindi: 'श्री चैतन्य महाप्रभु', icon: '📜' },
      { id: 'vs-92', songNumber: 92, titleHindi: 'ब्रह्म-संहिता (गोविन्दम् आदि-पुरुषम्)', authorHindi: 'भगवान् ब्रह्मा', icon: '🦚' },
      { id: 'vs-102', songNumber: 102, titleHindi: 'जय राधा माधव', authorHindi: 'श्रील भक्तिविनोद ठाकुर', icon: '🌸' },
      { id: 'vs-136', songNumber: 136, titleHindi: 'षड्-गोस्वाम्यष्टकम्', authorHindi: 'श्रील श्रीनिवास आचार्य', icon: '🙏' },
      { id: 'vs-116', songNumber: 116, titleHindi: 'जगन्नाथाष्टकम्', authorHindi: 'श्रील आदि शंकराचार्य', icon: '👁️' },
      { id: 'vs-262', songNumber: 262, titleHindi: 'विभावरी शेष (प्रातःकालीन कीर्तन)', authorHindi: 'श्रील भक्तिविनोद ठाकुर', icon: '🌅' },
      { id: 'vs-67', songNumber: 67, titleHindi: 'गौराङ्गेर दुटि पद', authorHindi: 'श्रील नरोत्तम दास ठाकुर', icon: '👣' },
      { id: 'vs-182', songNumber: 182, titleHindi: 'ओहे वैष्णव ठाकुर', authorHindi: 'श्रील भक्तिविनोद ठाकुर', icon: '💐' },
      { id: 'vs-29', songNumber: 29, titleHindi: 'भोग आरती (भज भकत-वत्सल)', authorHindi: 'श्रील भक्तिविनोद ठाकुर', icon: '🥣' }
    ];

    const authors = manifest.authors ? manifest.authors.slice(0, 12) : [
      { name: 'Bhaktivinoda Thakura', nameHindi: 'श्रील भक्तिविनोद ठाकुर', songCount: 76 },
      { name: 'Narottama Dasa Thakura', nameHindi: 'श्रील नरोत्तम दास ठाकुर', songCount: 26 },
      { name: 'A.C. Bhaktivedanta Swami', nameHindi: 'श्रील ए.सी. भक्तिवेदान्त स्वामी प्रभुपाद', songCount: 13 },
      { name: 'Locana Dasa Thakura', nameHindi: 'श्रील लोचन दास ठाकुर', songCount: 7 },
      { name: 'Govinda Dasa Kaviraja', nameHindi: 'श्रील गोविन्द दास कविराज', songCount: 2 },
      { name: 'Krsnadasa Kaviraja Goswami', nameHindi: 'श्रील कृष्णदास कविराज गोस्वामी', songCount: 4 },
      { name: 'Jayadeva Goswami', nameHindi: 'श्रील जयदेव गोस्वामी', songCount: 3 },
      { name: 'Rupa Goswami', nameHindi: 'श्रील रूप गोस्वामी', songCount: 5 },
      { name: 'Visvanatha Cakravarti Thakura', nameHindi: 'श्रील विश्वनाथ चक्रवर्ती ठाकुर', songCount: 4 },
      { name: 'Various Acharyas', nameHindi: 'अन्य विविध वैष्णव आचार्य', songCount: 2031 }
    ];

    const songbooks = manifest.songbooks || [
      { name: 'Saranagati', songCount: 16 },
      { name: 'Gitavali', songCount: 15 },
      { name: 'Prarthana', songCount: 11 },
      { name: 'Kalyana Kalpataru', songCount: 11 },
      { name: 'Gitamala', songCount: 2 },
      { name: 'Songs of Vaishnava Acaryas', songCount: 69 },
      { name: 'More Songs of the Vaisnava Acaryas', songCount: 41 },
      { name: 'Vaishnava Songs', songCount: 2065 }
    ];

    vsContainer.innerHTML = `
      <!-- Sub-section 1: Daily Temple Prayers -->
      <li class="canto-item expanded active" id="vs-subgroup-daily">
        <button class="canto-header-btn" onclick="window.app.toggleVsSubgroup('daily')">
          <span style="font-weight: 700; color: var(--accent-gold);">⭐ नित्य मन्दिर आरतियाँ (15)</span>
          <span style="font-size: 0.75rem; opacity: 0.7;">▾</span>
        </button>
        <ul class="chapter-sublist" id="vs-sublist-daily" style="display: block;">
          ${dailyPrayers.map((dp, idx) => {
            const isCur = this.currentBook === 'VS' && this.currentVsFilterType === 'daily' && this.currentVsDailyIndex === idx;
            return `
              <li>
                <button class="chapter-btn ${isCur ? 'active' : ''}"
                  id="vs-daily-btn-${idx}"
                  onclick="window.app.loadVsDailyPrayer(${idx})"
                  title="${dp.titleHindi || dp.title}">
                  <div style="font-weight: 600;">${dp.icon || '🪔'} ${dp.titleHindi || dp.title}</div>
                  <div style="font-size: 0.725rem; color: var(--text-muted);">${dp.authorHindi || dp.author || ''} • #${dp.songNumber || ''}</div>
                </button>
              </li>
            `;
          }).join('')}
        </ul>
      </li>

      <!-- Sub-section 2: Acharya Authors -->
      <li class="canto-item" id="vs-subgroup-authors">
        <button class="canto-header-btn" onclick="window.app.toggleVsSubgroup('authors')">
          <span style="font-weight: 700;">👤 रचयिता आचार्य (Authors)</span>
          <span style="font-size: 0.75rem; opacity: 0.7;">▾</span>
        </button>
        <ul class="chapter-sublist" id="vs-sublist-authors" style="display: none;">
          ${authors.map(a => `
            <li>
              <button class="chapter-btn ${this.currentBook === 'VS' && this.currentVsFilterType === 'author' && this.currentVsFilterVal === a.name ? 'active' : ''}"
                onclick="window.app.loadVsByAuthor('${this.escapeHtml(a.name)}')"
                title="${a.nameHindi || a.name} (${a.songCount} भजन)">
                <div style="font-weight: 600;">${a.nameHindi || a.name}</div>
                <div style="font-size: 0.725rem; color: var(--accent-gold);">${a.songCount} भजन</div>
              </button>
            </li>
          `).join('')}
        </ul>
      </li>

      <!-- Sub-section 3: Songbooks -->
      <li class="canto-item" id="vs-subgroup-books">
        <button class="canto-header-btn" onclick="window.app.toggleVsSubgroup('books')">
          <span style="font-weight: 700;">📚 गीत ग्रन्थ (Songbooks)</span>
          <span style="font-size: 0.75rem; opacity: 0.7;">▾</span>
        </button>
        <ul class="chapter-sublist" id="vs-sublist-books" style="display: none;">
          ${songbooks.map(b => `
            <li>
              <button class="chapter-btn ${this.currentBook === 'VS' && this.currentVsFilterType === 'book' && this.currentVsFilterVal === b.name ? 'active' : ''}"
                onclick="window.app.loadVsByBook('${this.escapeHtml(b.name)}')"
                title="${b.name} (${b.songCount} भजन)">
                <div style="font-weight: 600;">${b.name}</div>
                <div style="font-size: 0.725rem; color: var(--accent-gold);">${b.songCount} भजन</div>
              </button>
            </li>
          `).join('')}
        </ul>
      </li>
    `;
  }

  // Load a daily prayer by its index in the daily prayers list (0 to 14)
  async loadVsDailyPrayer(index) {
    await this.ensureVsLoaded();
    const manifest = window.VS_MANIFEST || {};
    const list = manifest.dailyPrayers || [];
    const dp = list[index];
    if (!dp) return;

    let song = this.vsSlokas.find(s => s.songNumber === dp.songNumber || s.id === dp.id);
    if (!song && dp.songNumber) {
      song = this.vsSlokas[dp.songNumber - 1];
    }

    if (song) {
      this.currentBook = 'VS';
      this.currentVsFilterType = 'daily';
      this.currentVsFilterVal = dp.titleHindi || dp.title;
      this.currentVsDailyIndex = index;
      this.chapterSlokas = this.vsSlokas;
      await this.displaySloka(song);
      this.highlightActiveSidebar();
    }
  }

  // Load song by index in currently active filtered list (author / book)
  async loadVsFilteredSongIndex(index) {
    await this.ensureVsLoaded();
    if (this.chapterSlokas && this.chapterSlokas[index]) {
      this.currentBook = 'VS';
      await this.displaySloka(this.chapterSlokas[index]);
      this.highlightActiveSidebar();
    }
  }

  // Load a specific prayer by query string
  async loadVsPrayer(query) {
    await this.ensureVsLoaded();
    const qLower = query.toLowerCase();
    const song = this.vsSlokas.find(s => (s.title && s.title.toLowerCase().includes(qLower)) || (s.body && s.body.toLowerCase().includes(qLower)));
    if (song) {
      this.currentBook = 'VS';
      this.currentVsFilterType = 'daily';
      this.currentVsFilterVal = query;
      this.chapterSlokas = this.vsSlokas;
      await this.displaySloka(song);
      this.highlightActiveSidebar();
    }
  }

  // Load songs by Author
  async loadVsByAuthor(authorName) {
    await this.ensureVsLoaded();
    const songs = this.vsAuthorMap.get(authorName) || this.vsSlokas.filter(s => s.author === authorName);
    if (songs && songs.length > 0) {
      this.currentBook = 'VS';
      this.currentVsFilterType = 'author';
      this.currentVsFilterVal = authorName;
      this.chapterSlokas = songs;
      await this.displaySloka(songs[0]);
      this.highlightActiveSidebar();
    }
  }

  // Load songs by Songbook
  async loadVsByBook(bookName) {
    await this.ensureVsLoaded();
    const songs = this.vsBookMap.get(bookName) || this.vsSlokas.filter(s => s.book === bookName);
    if (songs && songs.length > 0) {
      this.currentBook = 'VS';
      this.currentVsFilterType = 'book';
      this.currentVsFilterVal = bookName;
      this.chapterSlokas = songs;
      await this.displaySloka(songs[0]);
      this.highlightActiveSidebar();
    }
  }

  // Load a Vaishnava song by number or ID
  async loadVsSong(songIdOrNum) {
    await this.ensureVsLoaded();
    let song = null;
    if (typeof songIdOrNum === 'number' || !isNaN(Number(songIdOrNum))) {
      const num = Number(songIdOrNum);
      song = this.vsSlokas.find(s => s.songNumber === num) || this.vsSlokas[num - 1];
    } else {
      const sId = String(songIdOrNum).toLowerCase();
      song = this.vsMap.get(sId) || this.vsSlokas.find(s => s.id === sId || s.title?.toLowerCase() === sId);
    }

    if (song) {
      this.currentBook = 'VS';
      this.chapterSlokas = (this.chapterSlokas && this.chapterSlokas.length > 0 && this.chapterSlokas.includes(song)) ? this.chapterSlokas : this.vsSlokas;
      await this.displaySloka(song);
      this.highlightActiveSidebar();
    }
  }

  // Audio Player Event Setup
  setupAudioPlayer() {
    const audioEl = document.getElementById('vsNativeAudio');
    const btnPlay = document.getElementById('vsBtnAudioPlay');
    const playIcon = document.getElementById('vsPlayIcon');
    const slider = document.getElementById('vsAudioSeekSlider');
    const timeCur = document.getElementById('vsAudioCurrentTime');
    const timeDur = document.getElementById('vsAudioDuration');
    const volSlider = document.getElementById('vsAudioVolSlider');
    const btnMute = document.getElementById('vsBtnAudioMute');
    const trackSelect = document.getElementById('vsAudioTrackSelect');

    if (!audioEl) return;

    if (btnPlay) {
      btnPlay.onclick = () => {
        if (audioEl.paused) {
          audioEl.play().catch(e => console.warn('Audio play error:', e));
        } else {
          audioEl.pause();
        }
      };
    }

    audioEl.onplay = () => { if (playIcon) playIcon.textContent = '⏸️'; };
    audioEl.onpause = () => { if (playIcon) playIcon.textContent = '▶️'; };
    audioEl.onended = () => { if (playIcon) playIcon.textContent = '▶️'; };

    audioEl.ontimeupdate = () => {
      if (!audioEl.duration) return;
      const cur = audioEl.currentTime;
      const dur = audioEl.duration;
      if (slider) slider.value = (cur / dur) * 100;
      if (timeCur) timeCur.textContent = this.formatTime(cur);
      if (timeDur) timeDur.textContent = this.formatTime(dur);
    };

    if (slider) {
      slider.oninput = () => {
        if (!audioEl.duration) return;
        audioEl.currentTime = (slider.value / 100) * audioEl.duration;
      };
    }

    if (volSlider) {
      volSlider.oninput = () => {
        audioEl.volume = parseFloat(volSlider.value);
        if (audioEl.volume === 0) {
          if (btnMute) btnMute.textContent = '🔇';
        } else {
          if (btnMute) btnMute.textContent = '🔊';
        }
      };
    }

    if (btnMute) {
      btnMute.onclick = () => {
        audioEl.muted = !audioEl.muted;
        btnMute.textContent = audioEl.muted ? '🔇' : '🔊';
      };
    }

    if (trackSelect) {
      trackSelect.onchange = () => {
        const url = trackSelect.value;
        if (url) {
          audioEl.src = url;
          audioEl.play().catch(e => console.warn('Track switch play error:', e));
        }
      };
    }
  }

  formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  // Helper to sanitize Sanskrit text
  cleanSanskritText(text) {
    if (!text) return '';
    return text
      .replace(/^॥\s*(?:श्रीमद्भागवतम्|श्रीमद्भगवद्गीता|श्री ईशोपनिषद्|श्री चैतन्य-चरितामृत)[^॥\n]*॥\s*\n?/gi, '')
      .replace(/॥\s*(?:श्रीमद्भागवतम्|श्रीमद्भगवद्गीता|श्री ईशोपनिषद्|श्री चैतन्य-चरितामृत)[^॥\n]*॥/gi, '')
      .trim();
  }

  // Load Sri Caitanya-caritamrta Chapter
  async loadCcChapter(lila, chapter) {
    const lilaKey = this.getLilaKey(lila);
    const lilaNum = lilaKey === 'adi' ? 1 : (lilaKey === 'madhya' ? 2 : 3);
    const chNum = Number(chapter) || 1;

    this.currentBook = 'CC';
    this.currentLila = lilaNum;
    this.currentChapter = chNum;

    await this.ensureCcLoaded();

    const chKey = `${lilaKey}-${chNum}`;
    const chVerses = this.ccChapterMap.get(chKey) || [];
    this.chapterSlokas = chVerses;

    if (chVerses.length > 0) {
      await this.displaySloka(chVerses[0]);
    } else {
      const ccLilas = getCcLilas();
      const lilaObj = ccLilas.find(l => l.lila === lilaNum);
      const chObj = lilaObj?.chapters?.find(ch => ch.chapter === chNum);
      const chTitle = chObj ? `अध्याय ${chNum} - ${chObj.name}` : `अध्याय ${chNum}`;
      const totalV = chObj ? chObj.totalVerses : 1;

      const placeholder = {
        id: `cc-${lilaKey}-${chNum}-1`,
        book: "CC",
        lila: lilaNum,
        canto: lilaNum,
        chapter: chNum,
        verse: 1,
        verseKey: `${lilaKey}.${chNum}.1`,
        sanskritDevanagari: `पयार लोड हो रहा है...`,
        sanskritIAST: '',
        wordToWord: [],
        hindiTranslation: `यह श्री चैतन्य-चरितामृत, ${lilaObj?.name || lilaKey}, ${chTitle} का पयार 1 है। (कुल ${totalV} पयार)।`,
        hindiPurport: ``,
        category: {
          book: "श्री चैतन्य-चरितामृत",
          cantoTitleHindi: lilaObj?.name || lilaKey,
          chapterTitleHindi: chTitle
        },
        tags: ["श्री चैतन्य-चरितामृत", lilaObj?.name || lilaKey, `अध्याय ${chNum}`]
      };
      await this.displaySloka(placeholder);
    }

    this.highlightActiveSidebar();
  }

  // Load Sri Isopanisad Mantra
  async loadIsoMantra(mantraKey) {
    this.currentBook = 'ISO';
    await this.ensureIsoLoaded();

    const cleanK = String(mantraKey || 'inv').toLowerCase();
    const mantra = this.isoMap.get(cleanK) || this.isoSlokas[0];

    if (mantra) {
      await this.displaySloka(mantra);
    }
    this.highlightActiveSidebar();
  }

  // Load Bhagavad Gita Chapter
  async loadBgChapter(chapter) {
    const chNum = Number(chapter) || 1;
    this.currentBook = 'BG';
    this.currentChapter = chNum;

    await this.ensureBgLoaded();

    const chVerses = this.bgChapterMap.get(chNum) || [];
    this.chapterSlokas = chVerses;

    if (chVerses.length > 0) {
      await this.displaySloka(chVerses[0]);
    } else {
      const bgChapters = getBgChapters();
      const chObj = bgChapters.find(ch => ch.chapter === chNum);
      const chTitle = chObj ? `अध्याय ${chNum} - ${chObj.name}` : `अध्याय ${chNum}`;
      const totalV = chObj ? chObj.totalVerses : 1;

      const placeholder = {
        id: `bg-${chNum}-1`,
        book: "BG",
        chapter: chNum,
        verse: 1,
        verseKey: `${chNum}.1`,
        sanskritDevanagari: `श्लोक लोड हो रहा है...`,
        sanskritIAST: '',
        wordToWord: [],
        hindiTranslation: `यह श्रीमद्भगवद्गीता, ${chTitle} का श्लोक 1 है। (कुल ${totalV} श्लोक)।`,
        hindiPurport: ``,
        category: {
          book: "श्रीमद्भगवद्गीता",
          cantoTitleHindi: "श्रीमद्भगवद्गीता यथारूप",
          chapterTitleHindi: chTitle
        },
        tags: ["श्रीमद्भगवद्गीता", `अध्याय ${chNum}`]
      };
      await this.displaySloka(placeholder);
    }

    this.highlightActiveSidebar();
  }

  // Load Srimad Bhagavatam Chapter
  async loadChapter(canto, chapter) {
    const cNum = Number(canto);
    const chNum = Number(chapter);
    this.currentBook = 'SB';
    this.currentCanto = cNum;
    this.currentChapter = chNum;

    await this.ensureCantoLoaded(cNum);

    const chKey = `${cNum}-${chNum}`;
    this.chapterSlokas = this.chapterMap.get(chKey) || [];

    if (this.chapterSlokas.length > 0) {
      await this.displaySloka(this.chapterSlokas[0]);
    } else {
      const cantos = getCantoStructure();
      const cantoObj = cantos.find(c => c.canto === this.currentCanto);
      const chapterObj = cantoObj?.chapters?.find(ch => ch.chapter === this.currentChapter);
      const chapterTitle = chapterObj ? `अध्याय ${chapter} - ${chapterObj.name}` : `अध्याय ${chapter}`;
      const totalV = chapterObj ? chapterObj.totalVerses : 1;

      const placeholderSloka = {
        id: `sb-${canto}-${chapter}-1`,
        book: "SB",
        canto: canto,
        chapter: chapter,
        verse: 1,
        verseKey: `${canto}.${chapter}.1`,
        sanskritDevanagari: `श्लोक लोड हो रहा है...`,
        sanskritIAST: '',
        wordToWord: [],
        hindiTranslation: `यह ${cantoObj?.name || `स्कन्ध ${canto}`}, ${chapterTitle} का श्लोक 1 है। (कुल ${totalV} श्लोक)।`,
        hindiPurport: ``,
        category: {
          book: "श्रीमद्भागवतम्",
          cantoTitleHindi: cantoObj?.name || `स्कन्ध ${canto}`,
          chapterTitleHindi: chapterTitle
        },
        tags: ["श्रीमद्भागवतम्", cantoObj?.name?.split(' - ')[0] || `स्कन्ध ${canto}`]
      };
      await this.displaySloka(placeholderSloka);
    }

    this.highlightActiveSidebar();
  }

  // Highlight helpers for keyword search
  highlightInText(text, keyword) {
    if (!text) return '';
    const safeText = this.escapeHtml(text);
    if (!keyword || keyword.length < 2) return safeText;
    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    return safeText.replace(regex, '<mark class="search-highlight">$1</mark>');
  }

  highlightInHtml(htmlContent, keyword) {
    if (!htmlContent) return '';
    if (!keyword || keyword.length < 2) return htmlContent;
    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(?![^<]*>)(${escaped})`, 'gi');
    return htmlContent.replace(regex, '<mark class="search-highlight">$1</mark>');
  }

  triggerHighlightFadeTimer() {
    if (this.currentHighlightWord) {
      clearTimeout(this.highlightFadeTimer);
      this.highlightFadeTimer = setTimeout(() => {
        document.querySelectorAll('.search-highlight').forEach(el => {
          el.classList.remove('search-highlight');
        });
        this.currentHighlightWord = null;
      }, 6000);
    }
  }

  // Load verse by VerseKey (e.g. "cc adi 1.1", "cc madhya 20.108", "iso 1", "bg 2.13", "1.1.1")
  async loadVerseByKey(verseKey, highlightWord = null) {
    if (!verseKey) return;
    const cleanKey = verseKey.trim();
    this.currentHighlightWord = (highlightWord && highlightWord.trim().length >= 2) ? highlightWord.trim() : null;

    // 1. Check if CC query
    const isCcQuery = cleanKey.toLowerCase().startsWith('cc') ||
                     cleanKey.toLowerCase().startsWith('adi') ||
                     cleanKey.toLowerCase().startsWith('madhya') ||
                     cleanKey.toLowerCase().startsWith('antya') ||
                     cleanKey.toLowerCase().startsWith('चैतन्य') ||
                     (this.currentBook === 'CC' && cleanKey.split('.').length >= 2);

    if (isCcQuery) {
      await this.ensureCcLoaded();
      const cleanCc = cleanKey.replace(/^cc[\s.\-:]*/i, '');
      const parts = cleanCc.split(/[.\-:\s]+/);

      let lilaKey = 'adi';
      let ch = 1;
      let v = '1';

      if (parts[0].toLowerCase().startsWith('m') || parts[0].includes('मध्य')) {
        lilaKey = 'madhya';
        ch = parseInt(parts[1], 10) || 1;
        v = parts[2] || '1';
      } else if (parts[0].toLowerCase().startsWith('an') || parts[0].includes('अन्त्य')) {
        lilaKey = 'antya';
        ch = parseInt(parts[1], 10) || 1;
        v = parts[2] || '1';
      } else if (parts[0].toLowerCase().startsWith('a') || parts[0].includes('आदि')) {
        lilaKey = 'adi';
        ch = parseInt(parts[1], 10) || 1;
        v = parts[2] || '1';
      } else if (parts.length === 3 && parseInt(parts[0], 10) <= 3) {
        const lNum = parseInt(parts[0], 10);
        lilaKey = lNum === 1 ? 'adi' : (lNum === 2 ? 'madhya' : 'antya');
        ch = parseInt(parts[1], 10) || 1;
        v = parts[2] || '1';
      } else if (this.currentBook === 'CC') {
        lilaKey = this.getLilaKey(this.currentLila);
        ch = parseInt(parts[0], 10) || 1;
        v = parts[1] || '1';
      }

      const exactKey = `${lilaKey}.${ch}.${v}`;
      const sloka = await this.getSlokaData(exactKey) || await this.getSlokaData(`cc ${exactKey}`);

      this.currentBook = 'CC';
      this.currentLila = lilaKey === 'adi' ? 1 : (lilaKey === 'madhya' ? 2 : 3);
      this.currentChapter = ch;
      const chKey = `${lilaKey}-${ch}`;
      this.chapterSlokas = this.ccChapterMap.get(chKey) || [];

      if (sloka) {
        await this.displaySloka(sloka);
      } else {
        await this.loadCcChapter(lilaKey, ch);
        const found = this.chapterSlokas.find(s => String(s.verse) === String(v));
        if (found) await this.displaySloka(found);
      }
      this.highlightActiveSidebar();
      return;
    }

    // 2. Check if VS (Vaishnava Songs) query
    const isVsQuery = cleanKey.toLowerCase().startsWith('vs') ||
                      cleanKey.toLowerCase().startsWith('song') ||
                      cleanKey.toLowerCase().startsWith('वैष्णव') ||
                      (this.currentBook === 'VS' && (!cleanKey.includes('.') || !isNaN(Number(cleanKey))));

    if (isVsQuery) {
      await this.ensureVsLoaded();
      const numMatch = cleanKey.match(/\d+/);
      if (numMatch) {
        const num = parseInt(numMatch[0], 10);
        await this.loadVsSong(num);
      } else {
        const cleanT = cleanKey.replace(/^(?:vs|song|वैष्णव\s*गीत)[\s.\-:]*/i, '').trim();
        if (cleanT) {
          await this.loadVsPrayer(cleanT);
        } else {
          await this.loadVsSong(1);
        }
      }
      return;
    }

    // 3. Check if ISO query
    const isIsoQuery = cleanKey.toLowerCase().startsWith('iso') ||
                       cleanKey.toLowerCase().startsWith('ईशोपनिषद्') ||
                       (this.currentBook === 'ISO' && (!cleanKey.includes('.') || cleanKey.toLowerCase() === 'inv'));

    if (isIsoQuery) {
      await this.ensureIsoLoaded();
      const cleanMantraKey = cleanKey.replace(/^(?:iso|isopanisad|ईशोपनिषद्)[\s.\-:]*/i, '').trim() || 'inv';
      await this.loadIsoMantra(cleanMantraKey);
      return;
    }

    // 3. Check if BG query
    const isBgQuery = cleanKey.toLowerCase().startsWith('bg') ||
                     (this.currentBook === 'BG' && cleanKey.split('.').length === 2) ||
                     (!cleanKey.toLowerCase().startsWith('sb') && cleanKey.split('.').length === 2 && parseInt(cleanKey.split('.')[0], 10) > 12);

    if (isBgQuery) {
      await this.ensureBgLoaded();
      const cleanNumKey = cleanKey.replace(/^bg[\s.\-:]*/i, '');
      const sloka = await this.getSlokaData(cleanNumKey) || await this.getSlokaData(`bg-${cleanNumKey.replace('.', '-')}`);

      if (sloka) {
        this.currentBook = 'BG';
        this.currentChapter = Number(sloka.chapter);
        this.chapterSlokas = this.bgChapterMap.get(this.currentChapter) || [];
        await this.displaySloka(sloka);
      } else {
        const parts = cleanNumKey.split(/[.\-:\s]+/);
        if (parts.length >= 1) {
          const ch = parseInt(parts[0], 10) || 1;
          const v = parts[1] || '1';
          await this.loadBgChapter(ch);
          const found = this.chapterSlokas.find(s => String(s.verse) === String(v));
          if (found) await this.displaySloka(found);
        }
      }
      this.highlightActiveSidebar();
      return;
    }

    // 4. Otherwise SB query (3 parts: Canto.Chapter.Verse)
    const cleanSbKey = cleanKey.replace(/^sb[\s.\-:]*/i, '');
    const parts = cleanSbKey.split(/[.\-:\s]+/);

    if (parts.length >= 1) {
      const c = parseInt(parts[0], 10);
      if (!isNaN(c) && c >= 1 && c <= 12) {
        await this.ensureCantoLoaded(c);
      }
    }

    const sloka = await this.getSlokaData(cleanSbKey) || await this.getSlokaData(cleanKey);

    if (sloka) {
      this.currentBook = 'SB';
      this.currentCanto = Number(sloka.canto);
      this.currentChapter = Number(sloka.chapter);
      const chKey = `${sloka.canto}-${sloka.chapter}`;
      this.chapterSlokas = this.chapterMap.get(chKey) || [];
      await this.displaySloka(sloka);
    } else {
      if (parts.length >= 2) {
        const c = parseInt(parts[0], 10);
        const ch = parseInt(parts[1], 10);
        const v = parts[2] || '1';

        this.currentBook = 'SB';
        this.currentCanto = c;
        this.currentChapter = ch;
        await this.loadChapter(c, ch);
        const existing = this.chapterSlokas.find(s => String(s.verse) === String(v));
        if (existing) await this.displaySloka(existing);
      } else {
        this.showToast(`श्लोक '${cleanKey}' नहीं मिला।`);
      }
    }

    this.highlightActiveSidebar();
  }

  // Highlight active Scripture, Canto/Lila & Chapter in Sidebar
  highlightActiveSidebar() {
    const isCC = this.currentBook === 'CC';
    const isISO = this.currentBook === 'ISO';
    const isVS = this.currentBook === 'VS';
    const isBG = this.currentBook === 'BG';

    const groupBG = document.getElementById('scriptureGroupBG');
    const groupISO = document.getElementById('scriptureGroupISO');
    const groupCC = document.getElementById('scriptureGroupCC');
    const groupSB = document.getElementById('scriptureGroupSB');
    const groupVS = document.getElementById('scriptureGroupVS');

    if (isVS) {
      if (groupVS) groupVS.classList.add('active', 'expanded');
      if (groupBG) groupBG.classList.remove('active', 'expanded');
      if (groupISO) groupISO.classList.remove('active', 'expanded');
      if (groupCC) groupCC.classList.remove('active', 'expanded');
      if (groupSB) groupSB.classList.remove('active', 'expanded');
      return;
    }

    if (isCC) {
      if (groupCC) groupCC.classList.add('active', 'expanded');
      if (groupVS) groupVS.classList.remove('active', 'expanded');
      const lilaKey = this.getLilaKey(this.currentLila);
      document.querySelectorAll('#ccLilaListContainer .canto-item').forEach(el => {
        if (el.id === `cc-lila-item-${lilaKey}`) {
          el.classList.add('active', 'expanded');
        } else {
          el.classList.remove('active', 'expanded');
        }
      });
      document.querySelectorAll('#ccLilaListContainer .chapter-btn').forEach(btn => btn.classList.remove('active'));
      const activeCcBtn = document.getElementById(`cc-chap-btn-${lilaKey}-${this.currentChapter}`);
      if (activeCcBtn) activeCcBtn.classList.add('active');
    } else if (isISO) {
      if (groupISO) groupISO.classList.add('active', 'expanded');
      if (groupVS) groupVS.classList.remove('active', 'expanded');
      document.querySelectorAll('#isoMantraListContainer .chapter-btn').forEach(btn => btn.classList.remove('active'));
      const activeIsoBtn = document.getElementById(`iso-mantra-btn-${this.currentSloka?.verseKey || 'inv'}`);
      if (activeIsoBtn) activeIsoBtn.classList.add('active');
    } else if (isBG) {
      if (groupBG) groupBG.classList.add('active', 'expanded');
      if (groupVS) groupVS.classList.remove('active', 'expanded');
      document.querySelectorAll('#bgChapterListContainer .chapter-btn').forEach(btn => btn.classList.remove('active'));
      const activeBgBtn = document.getElementById(`bg-chap-btn-${this.currentChapter}`);
      if (activeBgBtn) activeBgBtn.classList.add('active');
    } else {
      if (groupSB) groupSB.classList.add('active', 'expanded');
      if (groupVS) groupVS.classList.remove('active', 'expanded');
      document.querySelectorAll('.canto-item').forEach(el => {
        if (el.id === `canto-item-${this.currentCanto}`) {
          el.classList.add('active', 'expanded');
        } else {
          el.classList.remove('active', 'expanded');
        }
      });
      document.querySelectorAll('#cantoListContainer .chapter-btn').forEach(btn => btn.classList.remove('active'));
      const activeChapBtn = document.getElementById(`chap-btn-${this.currentCanto}-${this.currentChapter}`);
      if (activeChapBtn) activeChapBtn.classList.add('active');
    }
  }

  // Display a Sloka in the main reader area
  async displaySloka(sloka) {
    this.currentSloka = sloka;
    const isCC = sloka.book === 'CC' || (sloka.id && sloka.id.startsWith('cc-'));
    const isISO = !isCC && (sloka.book === 'ISO' || (sloka.id && sloka.id.startsWith('iso-')));
    const isVS = !isCC && !isISO && (sloka.book === 'VS' || (sloka.id && sloka.id.startsWith('vs-')));
    const isBG = !isCC && !isISO && !isVS && (sloka.book === 'BG' || (sloka.id && sloka.id.startsWith('bg-')) || (!sloka.canto && !sloka.lila));

    if (isCC) this.currentBook = 'CC';
    else if (isISO) this.currentBook = 'ISO';
    else if (isVS) this.currentBook = 'VS';
    else if (isBG) this.currentBook = 'BG';
    else this.currentBook = 'SB';

    if (isVS) {
      this.parseSongBody(sloka);
    }

    try {
      if (isCC) localStorage.setItem('vedabase_last_verse', `cc ${sloka.verseKey}`);
      else if (isISO) localStorage.setItem('vedabase_last_verse', `iso ${sloka.verseKey}`);
      else if (isVS) localStorage.setItem('vedabase_last_verse', `vs ${sloka.songNumber || sloka.id}`);
      else if (isBG) localStorage.setItem('vedabase_last_verse', `bg ${sloka.verseKey}`);
      else localStorage.setItem('vedabase_last_verse', sloka.verseKey);
    } catch (e) {}

    // 1. Badges & Titles
    const keyBadge = document.getElementById('currentVerseKeyBadge');
    if (keyBadge) {
      if (isCC) {
        const lKey = this.getLilaKey(sloka.lila || sloka.canto || 1).toUpperCase();
        keyBadge.textContent = `CC ${lKey} ${sloka.chapter}.${sloka.verse}`;
      } else if (isISO) {
        keyBadge.textContent = `ISO ${sloka.verseKey === 'inv' ? 'मंगलाचरण' : 'मंत्र ' + sloka.verseKey}`;
      } else if (isVS) {
        keyBadge.textContent = `VS ${sloka.songNumber || sloka.id?.replace('vs-', '') || ''}`;
      } else if (isBG) {
        keyBadge.textContent = `BG ${sloka.verseKey}`;
      } else {
        keyBadge.textContent = `SB ${sloka.verseKey}`;
      }
    }

    const userEditBadge = document.getElementById('userEditedBadge');
    if (userEditBadge) {
      userEditBadge.style.display = sloka.isUserEdited ? 'inline-flex' : 'none';
    }

    const chTitle = document.getElementById('currentChapterName');
    if (chTitle) {
      if (isCC) {
        const ccLilas = getCcLilas();
        const lilaObj = ccLilas.find(l => l.lila === (sloka.lila || 1));
        const chObj = lilaObj?.chapters?.find(ch => ch.chapter === Number(sloka.chapter));
        chTitle.textContent = `${lilaObj?.name || 'आदि-लीला'} • ${chObj ? `अध्याय ${sloka.chapter} - ${chObj.name}` : (sloka.category?.chapterTitleHindi || `अध्याय ${sloka.chapter}`)}`;
      } else if (isISO) {
        chTitle.textContent = sloka.category?.chapterTitleHindi || `मंत्र ${sloka.verseKey}`;
      } else if (isVS) {
        chTitle.textContent = `${sloka.title || 'वैष्णव गीत'} (रचयिता: ${sloka.authorHindi || sloka.author || 'वैष्णव आचार्य'} • ग्रन्थ: ${sloka.book || 'वैष्णव भजन'})`;
      } else if (isBG) {
        const bgChapters = getBgChapters();
        const chObj = bgChapters.find(ch => ch.chapter === Number(sloka.chapter));
        chTitle.textContent = chObj ? `अध्याय ${sloka.chapter} - ${chObj.name}` : (sloka.category?.chapterTitleHindi || `अध्याय ${sloka.chapter}`);
      } else {
        chTitle.textContent = sloka.category?.chapterTitleHindi || `अध्याय ${sloka.chapter}`;
      }
    }

    // Audio Player Bar for Vaishnava Songs
    const audioBox = document.getElementById('vsAudioPlayerBox');
    const trackSelect = document.getElementById('vsAudioTrackSelect');
    const nativeAudio = document.getElementById('vsNativeAudio');
    const audioTitle = document.getElementById('vsAudioCurrentTrackTitle');

    if (audioBox) {
      if (isVS && Array.isArray(sloka.audioLinks) && sloka.audioLinks.length > 0) {
        audioBox.style.display = 'block';
        if (trackSelect) {
          trackSelect.innerHTML = sloka.audioLinks.map((al, idx) => `
            <option value="${this.escapeHtml(al.url)}">🎙️ ${this.escapeHtml(al.singer || `रिकॉर्डिंग ${idx + 1}`)}</option>
          `).join('');
        }
        if (nativeAudio) {
          nativeAudio.src = sloka.audioLinks[0].url;
        }
        if (audioTitle) {
          audioTitle.textContent = `ऑडियो: ${sloka.title || 'भजन'}`;
        }
      } else {
        audioBox.style.display = 'none';
        if (nativeAudio && !nativeAudio.paused) {
          nativeAudio.pause();
        }
      }
    }

    // 2. Render Interactive Horizontal Verse Strip
    this.renderVerseSelectorStrip();

    // 3. Sanskrit / Bengali Verse & IAST
    const sanskritEl = document.getElementById('sanskritDevanagari');
    if (sanskritEl) {
      if (isVS) {
        sanskritEl.innerHTML = this.highlightInHtml(sloka.sanskritDevanagari, this.currentHighlightWord) || 'गीत पद उपलब्ध नहीं हैं।';
      } else {
        sanskritEl.innerHTML = this.highlightInText(this.cleanSanskritText(sloka.sanskritDevanagari), this.currentHighlightWord) || 'श्लोक उपलब्ध नहीं है';
      }
    }

    const iastEl = document.getElementById('sanskritIAST');
    if (iastEl) {
      if (isVS) {
        iastEl.innerHTML = '';
        iastEl.style.display = 'none'; // NEVER DUPLICATE SONG TEXT!
      } else {
        iastEl.innerHTML = this.highlightInText(this.cleanSanskritText(sloka.sanskritIAST), this.currentHighlightWord) || '';
        iastEl.style.display = sloka.sanskritIAST ? 'block' : 'none';
      }
    }

    // 4. Word-to-Word, Translation & Purport visibility for VS vs Scriptures
    const wordContainer = document.querySelector('.word-to-word-container');
    const transContainer = document.querySelector('.translation-box');
    const purportBox = document.getElementById('purportContainer');
    const purportEl = document.getElementById('hindiPurport');

    if (isVS) {
      // In Vaishnava Songs, words, translations, and purports are rendered compactly inside each stanza with arrow toggles
      if (wordContainer) wordContainer.style.display = 'none';
      if (transContainer) transContainer.style.display = 'none';
      if (purportBox) purportBox.style.display = 'none';
    } else {
      if (wordContainer) wordContainer.style.display = 'block';
      if (transContainer) transContainer.style.display = 'block';

      // Word-to-Word Chips
      const wordGrid = document.getElementById('wordChipsGrid');
      if (wordGrid) {
        if (Array.isArray(sloka.wordToWord) && sloka.wordToWord.length > 0) {
          wordGrid.innerHTML = sloka.wordToWord.map(w => {
            const isMatch = this.currentHighlightWord && (
              w.sanskrit.toLowerCase().includes(this.currentHighlightWord.toLowerCase()) ||
              w.hindi.toLowerCase().includes(this.currentHighlightWord.toLowerCase())
            );
            return `
              <div class="word-chip ${isMatch ? 'search-highlight' : ''}" onclick="window.app.searchWordDirectly('${this.escapeHtml(w.sanskrit)}')">
                <span class="chip-sanskrit">${this.escapeHtml(w.sanskrit)}</span>
                <span class="chip-sep">:</span>
                <span class="chip-hindi">${this.escapeHtml(w.hindi)}</span>
              </div>
            `;
          }).join('');
        } else {
          wordGrid.innerHTML = '<span style="color: var(--text-muted); font-size: 0.9rem;">पदच्छेद शब्दार्थ उपलब्ध नहीं है।</span>';
        }
      }

      // Hindi Translation
      const transEl = document.getElementById('hindiTranslation');
      if (transEl) {
        transEl.innerHTML = this.highlightInHtml(this.renderParagraphs(sloka.hindiTranslation), this.currentHighlightWord) || 'हिन्दी अनुवाद उपलब्ध नहीं है।';
      }

      // Hindi Purport / Tatparya
      if (purportBox && purportEl) {
        if (sloka.hindiPurport && sloka.hindiPurport.trim()) {
          purportEl.innerHTML = this.highlightInHtml(this.renderParagraphs(sloka.hindiPurport), this.currentHighlightWord);
          purportBox.style.display = 'block';
        } else {
          purportBox.style.display = 'none';
        }
      }
    }

    // 7. Update Counter & Navigation status
    this.updateNavCounter();

    // 8. Update Presentation Slide if open
    if (this.isPresentationOpen) {
      this.renderPresentationSlide();
    }

    // Trigger auto fade of search highlight
    this.triggerHighlightFadeTimer();

    // Scroll reader card to view
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Render the interactive horizontal verse selector strip
  renderVerseSelectorStrip() {
    const scrollContainer = document.getElementById('verseStripScroll');
    if (!scrollContainer || !this.currentSloka) return;

    const isCC = this.currentBook === 'CC';
    const isISO = this.currentBook === 'ISO';
    const isBG = this.currentBook === 'BG';
    const buttons = [];

    if (isCC) {
      const ccLilas = getCcLilas();
      const lilaObj = ccLilas.find(l => l.lila === (this.currentLila || 1));
      const chObj = lilaObj?.chapters?.find(ch => ch.chapter === Number(this.currentChapter));
      const totalVerses = chObj ? chObj.totalVerses : Math.max(this.chapterSlokas.length, 1);
      const lilaKey = this.getLilaKey(this.currentLila);

      const existingMap = new Map();
      this.chapterSlokas.forEach(s => existingMap.set(parseInt(s.verse, 10), s));
      const currentVNum = parseInt(this.currentSloka.verse, 10);

      for (let v = 1; v <= totalVerses; v++) {
        const isCurrent = currentVNum === v;
        const isLoaded = existingMap.has(v);
        buttons.push(`
          <button class="verse-strip-btn ${isCurrent ? 'active' : ''} ${isLoaded ? 'has-data' : ''}"
            onclick="window.app.loadVerseByKey('cc ${lilaKey} ${this.currentChapter}.${v}')"
            title="पयार ${v} ${isLoaded ? '(डेटा उपलब्ध)' : ''}">
            ${v}
          </button>
        `);
      }
    } else if (isISO) {
      const isoData = getIsoData();
      const currentVK = String(this.currentSloka?.verseKey || 'inv').toLowerCase();

      (isoData.mantras || []).forEach(m => {
        const isCurrent = currentVK === String(m.key).toLowerCase() || (currentVK === '0' && m.key === 'inv');
        const btnLabel = m.key === 'inv' ? 'मंगलाचरण' : m.key;

        buttons.push(`
          <button class="verse-strip-btn has-data ${isCurrent ? 'active' : ''}"
            onclick="window.app.loadIsoMantra('${m.key}')"
            title="${m.label} (${m.name})">
            ${btnLabel}
          </button>
        `);
      });
    } else if (isBG) {
      const bgChapters = getBgChapters();
      const chObj = bgChapters.find(ch => ch.chapter === Number(this.currentChapter));
      const totalVerses = chObj ? chObj.totalVerses : Math.max(this.chapterSlokas.length, 1);
      const existingMap = new Map();
      this.chapterSlokas.forEach(s => existingMap.set(parseInt(s.verse, 10), s));
      const currentVNum = parseInt(this.currentSloka.verse, 10);

      for (let v = 1; v <= totalVerses; v++) {
        const isCurrent = currentVNum === v;
        const isLoaded = existingMap.has(v);
        buttons.push(`
          <button class="verse-strip-btn ${isCurrent ? 'active' : ''} ${isLoaded ? 'has-data' : ''}"
            onclick="window.app.loadVerseByKey('bg ${this.currentChapter}.${v}')"
            title="श्लोक ${v} ${isLoaded ? '(डेटा उपलब्ध)' : ''}">
            ${v}
          </button>
        `);
      }
    } else if (this.currentBook === 'VS') {
      if (this.currentVsFilterType === 'daily') {
        const dailyList = (window.VS_MANIFEST && window.VS_MANIFEST.dailyPrayers) ? window.VS_MANIFEST.dailyPrayers : [];
        dailyList.forEach((dp, idx) => {
          const isCurrent = (this.currentSloka?.songNumber === dp.songNumber) || (this.currentSloka?.id === dp.id) || (this.currentVsDailyIndex === idx);
          buttons.push(`
            <button class="verse-strip-btn has-data ${isCurrent ? 'active' : ''}"
              onclick="window.app.loadVsDailyPrayer(${idx})"
              title="${this.escapeHtml(dp.titleHindi || dp.title)} (${this.escapeHtml(dp.authorHindi || dp.author || '')})">
              ${idx + 1}
            </button>
          `);
        });
      } else if (this.currentVsFilterType === 'author' || this.currentVsFilterType === 'book') {
        const list = (this.chapterSlokas && this.chapterSlokas.length > 0) ? this.chapterSlokas : (this.vsSlokas || []);
        list.forEach((s, idx) => {
          const isCurrent = (s.id === this.currentSloka?.id) || (s.songNumber === this.currentSloka?.songNumber);
          buttons.push(`
            <button class="verse-strip-btn has-data ${isCurrent ? 'active' : ''}"
              onclick="window.app.loadVsFilteredSongIndex(${idx})"
              title="${this.escapeHtml(s.title || '')} (${this.escapeHtml(s.authorHindi || s.author || '')})">
              ${idx + 1}
            </button>
          `);
        });
      } else {
        const stanzas = this.currentSloka?.stanzas || [];
        if (stanzas.length > 1) {
          stanzas.forEach(st => {
            buttons.push(`
              <button class="verse-strip-btn has-data"
                onclick="document.getElementById('vs-stanza-${st.num}')?.scrollIntoView({ behavior: 'smooth', block: 'center' })"
                title="पद (Stanza) ${st.num}">
                ${st.num}
              </button>
            `);
          });
        } else {
          const curNum = this.currentSloka?.songNumber || 1;
          const startNum = Math.max(1, curNum - 15);
          const endNum = Math.min(this.vsSlokas?.length || 2257, curNum + 15);
          for (let n = startNum; n <= endNum; n++) {
            const isCurrent = n === curNum;
            buttons.push(`
              <button class="verse-strip-btn has-data ${isCurrent ? 'active' : ''}"
                onclick="window.app.loadVsSong(${n})"
                title="भजन संख्या ${n}">
                ${n}
              </button>
            `);
          }
        }
      }
    } else {
      const cantos = getCantoStructure();
      const cantoObj = cantos.find(c => c.canto === this.currentCanto);
      const chapterObj = cantoObj?.chapters?.find(ch => ch.chapter === this.currentChapter);
      const totalVerses = chapterObj ? chapterObj.totalVerses : Math.max(this.chapterSlokas.length, 1);
      const existingMap = new Map();
      this.chapterSlokas.forEach(s => existingMap.set(parseInt(s.verse, 10), s));
      const currentVNum = parseInt(this.currentSloka.verse, 10);

      for (let v = 1; v <= totalVerses; v++) {
        const isCurrent = currentVNum === v;
        const isLoaded = existingMap.has(v);
        buttons.push(`
          <button class="verse-strip-btn ${isCurrent ? 'active' : ''} ${isLoaded ? 'has-data' : ''}"
            onclick="window.app.loadVerseByKey('${this.currentCanto}.${this.currentChapter}.${v}')"
            title="श्लोक ${v} ${isLoaded ? '(डेटा उपलब्ध)' : ''}">
            ${v}
          </button>
        `);
      }
    }

    scrollContainer.innerHTML = buttons.join('');

    const activeBtn = scrollContainer.querySelector('.verse-strip-btn.active');
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  // Update verse navigation counter
  updateNavCounter() {
    const counter = document.getElementById('verseCounterStatus');
    if (!counter || !this.currentSloka) return;

    const isCC = this.currentBook === 'CC';
    const isISO = this.currentBook === 'ISO';
    const isVS = this.currentBook === 'VS';
    const isBG = this.currentBook === 'BG';

    if (isVS) {
      if (this.currentVsFilterType === 'daily') {
        const totalDaily = (window.VS_MANIFEST?.dailyPrayers?.length) || 15;
        counter.textContent = `नित्य आरती ${this.currentVsDailyIndex + 1} / ${totalDaily}`;
      } else if (this.currentVsFilterType === 'author' || this.currentVsFilterType === 'book') {
        const curIdx = this.chapterSlokas.findIndex(s => s.id === this.currentSloka.id || s.songNumber === this.currentSloka.songNumber);
        const pos = curIdx >= 0 ? curIdx + 1 : 1;
        counter.textContent = `गीत ${pos} / ${this.chapterSlokas.length}`;
      } else {
        const totalV = this.vsSlokas?.length || 2257;
        const vNum = this.currentSloka?.songNumber || 1;
        counter.textContent = `गीत ${vNum} / ${totalV}`;
      }
    } else if (isCC) {
      const ccLilas = getCcLilas();
      const lilaObj = ccLilas.find(l => l.lila === (this.currentLila || 1));
      const chObj = lilaObj?.chapters?.find(ch => ch.chapter === Number(this.currentChapter));
      const totalV = chObj ? chObj.totalVerses : Math.max(this.chapterSlokas.length, 1);
      const vNum = parseInt(this.currentSloka?.verse, 10) || 1;
      counter.textContent = `${vNum} / ${totalV}`;
    } else if (isISO) {
      const currentVK = String(this.currentSloka?.verseKey || 'inv');
      counter.textContent = currentVK === 'inv' ? 'मंगलाचरण / 18' : `${currentVK} / 18`;
    } else if (isBG) {
      const bgChapters = getBgChapters();
      const chObj = bgChapters.find(ch => ch.chapter === Number(this.currentChapter));
      const totalV = chObj ? chObj.totalVerses : Math.max(this.chapterSlokas.length, 1);
      const vNum = parseInt(this.currentSloka?.verse, 10) || 1;
      counter.textContent = `${vNum} / ${totalV}`;
    } else {
      const cantos = getCantoStructure();
      const cantoObj = cantos.find(c => c.canto === this.currentCanto);
      const chapterObj = cantoObj?.chapters?.find(ch => ch.chapter === this.currentChapter);
      const totalV = chapterObj ? chapterObj.totalVerses : Math.max(this.chapterSlokas.length, 1);
      const vNum = parseInt(this.currentSloka?.verse, 10) || 1;
      counter.textContent = `${vNum} / ${totalV}`;
    }
  }

  // Next Verse
  async nextVerse() {
    const isCC = this.currentBook === 'CC';
    const isISO = this.currentBook === 'ISO';
    const isVS = this.currentBook === 'VS';
    const isBG = this.currentBook === 'BG';

    if (isVS) {
      if (this.currentVsFilterType === 'daily') {
        const totalDaily = (window.VS_MANIFEST?.dailyPrayers?.length) || 15;
        if (this.currentVsDailyIndex + 1 < totalDaily) {
          await this.loadVsDailyPrayer(this.currentVsDailyIndex + 1);
        } else {
          this.showToast('नित्य आरतियों की अन्तिम आरती!');
        }
      } else if (this.currentVsFilterType === 'author' || this.currentVsFilterType === 'book') {
        const curIdx = this.chapterSlokas.findIndex(s => s.id === this.currentSloka?.id || s.songNumber === this.currentSloka?.songNumber);
        if (curIdx >= 0 && curIdx + 1 < this.chapterSlokas.length) {
          await this.loadVsFilteredSongIndex(curIdx + 1);
        } else {
          this.showToast('इस संग्रह का अन्तिम गीत!');
        }
      } else {
        const currentNum = this.currentSloka?.songNumber || 1;
        if (currentNum < (this.vsSlokas?.length || 2257)) {
          await this.loadVsSong(currentNum + 1);
        } else {
          this.showToast('वैष्णव गीतों का अन्तिम भजन!');
        }
      }
      return;
    }

    if (isCC) {
      const lilaKey = this.getLilaKey(this.currentLila);
      const ccLilas = getCcLilas();
      const lilaObj = ccLilas.find(l => l.lila === this.currentLila);
      const chObj = lilaObj?.chapters?.find(ch => ch.chapter === this.currentChapter);
      const maxVerses = chObj ? chObj.totalVerses : Math.max(this.chapterSlokas.length, 1);
      const currentVNum = parseInt(this.currentSloka?.verse, 10) || 1;

      if (currentVNum < maxVerses) {
        await this.loadVerseByKey(`cc ${lilaKey} ${this.currentChapter}.${currentVNum + 1}`);
      } else {
        if (lilaObj && this.currentChapter < lilaObj.totalChapters) {
          await this.loadCcChapter(lilaKey, this.currentChapter + 1);
        } else if (this.currentLila < 3) {
          const nextLilaKey = this.currentLila === 1 ? 'madhya' : 'antya';
          await this.loadCcChapter(nextLilaKey, 1);
        } else {
          this.showToast('श्री चैतन्य-चरितामृत का अन्तिम पयार!');
        }
      }
    } else if (isISO) {
      const currentVK = String(this.currentSloka?.verseKey || 'inv').toLowerCase();
      if (currentVK === 'inv' || currentVK === '0') {
        await this.loadIsoMantra('1');
      } else {
        const vNum = parseInt(currentVK, 10) || 1;
        if (vNum < 18) {
          await this.loadIsoMantra(String(vNum + 1));
        } else {
          this.showToast('श्री ईशोपनिषद् का अन्तिम मंत्र!');
        }
      }
    } else if (isBG) {
      const bgChapters = getBgChapters();
      const chObj = bgChapters.find(ch => ch.chapter === Number(this.currentChapter));
      const maxVerses = chObj ? chObj.totalVerses : Math.max(this.chapterSlokas.length, 1);
      const currentVNum = parseInt(this.currentSloka?.verse, 10) || 1;

      if (currentVNum < maxVerses) {
        await this.loadVerseByKey(`bg ${this.currentChapter}.${currentVNum + 1}`);
      } else {
        if (this.currentChapter < 18) {
          await this.loadBgChapter(this.currentChapter + 1);
        } else {
          this.showToast('श्रीमद्भगवद्गीता का अन्तिम श्लोक!');
        }
      }
    } else {
      const cantos = getCantoStructure();
      const cantoObj = cantos.find(c => c.canto === this.currentCanto);
      const chapterObj = cantoObj?.chapters?.find(ch => ch.chapter === this.currentChapter);
      const maxVerses = chapterObj ? chapterObj.totalVerses : (this.chapterSlokas.length || 1);
      const currentVNum = parseInt(this.currentSloka?.verse, 10) || 1;

      if (currentVNum < maxVerses) {
        await this.loadVerseByKey(`${this.currentCanto}.${this.currentChapter}.${currentVNum + 1}`);
      } else {
        const nextChapter = this.currentChapter + 1;
        if (cantoObj && nextChapter <= cantoObj.totalChapters) {
          await this.loadChapter(this.currentCanto, nextChapter);
        } else if (this.currentCanto < 12) {
          await this.loadChapter(this.currentCanto + 1, 1);
        } else {
          this.showToast('श्रीमद्भागवतम् का अन्तिम श्लोक!');
        }
      }
    }
  }

  // Previous Verse
  async prevVerse() {
    const isCC = this.currentBook === 'CC';
    const isISO = this.currentBook === 'ISO';
    const isVS = this.currentBook === 'VS';
    const isBG = this.currentBook === 'BG';

    if (isVS) {
      if (this.currentVsFilterType === 'daily') {
        if (this.currentVsDailyIndex > 0) {
          await this.loadVsDailyPrayer(this.currentVsDailyIndex - 1);
        } else {
          this.showToast('नित्य आरतियों की प्रथम आरती!');
        }
      } else if (this.currentVsFilterType === 'author' || this.currentVsFilterType === 'book') {
        const curIdx = this.chapterSlokas.findIndex(s => s.id === this.currentSloka?.id || s.songNumber === this.currentSloka?.songNumber);
        if (curIdx > 0) {
          await this.loadVsFilteredSongIndex(curIdx - 1);
        } else {
          this.showToast('इस संग्रह का प्रथम गीत!');
        }
      } else {
        const currentNum = this.currentSloka?.songNumber || 1;
        if (currentNum > 1) {
          await this.loadVsSong(currentNum - 1);
        } else {
          this.showToast('वैष्णव गीतों का प्रथम भजन!');
        }
      }
      return;
    }

    if (isCC) {
      const lilaKey = this.getLilaKey(this.currentLila);
      const currentVNum = parseInt(this.currentSloka?.verse, 10) || 1;
      if (currentVNum > 1) {
        await this.loadVerseByKey(`cc ${lilaKey} ${this.currentChapter}.${currentVNum - 1}`);
      } else {
        if (this.currentChapter > 1) {
          const prevChap = this.currentChapter - 1;
          const ccLilas = getCcLilas();
          const lilaObj = ccLilas.find(l => l.lila === this.currentLila);
          const prevChObj = lilaObj?.chapters?.find(ch => ch.chapter === prevChap);
          const lastVerse = prevChObj ? prevChObj.totalVerses : 1;
          await this.loadCcChapter(lilaKey, prevChap);
          await this.loadVerseByKey(`cc ${lilaKey} ${prevChap}.${lastVerse}`);
        } else if (this.currentLila > 1) {
          const prevLilaNum = this.currentLila - 1;
          const prevLilaKey = prevLilaNum === 1 ? 'adi' : 'madhya';
          const ccLilas = getCcLilas();
          const prevLilaObj = ccLilas.find(l => l.lila === prevLilaNum);
          const lastChap = prevLilaObj ? prevLilaObj.totalChapters : 1;
          await this.loadCcChapter(prevLilaKey, lastChap);
        } else {
          this.showToast('श्री चैतन्य-चरितामृत का प्रथम पयार!');
        }
      }
    } else if (isISO) {
      const currentVK = String(this.currentSloka?.verseKey || 'inv').toLowerCase();
      if (currentVK === 'inv' || currentVK === '0') {
        this.showToast('श्री ईशोपनिषद् का मंगलाचरण!');
      } else if (currentVK === '1') {
        await this.loadIsoMantra('inv');
      } else {
        const vNum = parseInt(currentVK, 10) || 2;
        await this.loadIsoMantra(String(vNum - 1));
      }
    } else if (isBG) {
      const currentVNum = parseInt(this.currentSloka?.verse, 10) || 1;
      if (currentVNum > 1) {
        await this.loadVerseByKey(`bg ${this.currentChapter}.${currentVNum - 1}`);
      } else {
        if (this.currentChapter > 1) {
          const prevChap = this.currentChapter - 1;
          const bgChapters = getBgChapters();
          const prevChObj = bgChapters.find(ch => ch.chapter === prevChap);
          const lastVerse = prevChObj ? prevChObj.totalVerses : 1;
          await this.loadBgChapter(prevChap);
          await this.loadVerseByKey(`bg ${prevChap}.${lastVerse}`);
        } else {
          this.showToast('श्रीमद्भगवद्गीता का प्रथम श्लोक!');
        }
      }
    } else {
      const currentVNum = parseInt(this.currentSloka?.verse, 10) || 1;
      if (currentVNum > 1) {
        await this.loadVerseByKey(`${this.currentCanto}.${this.currentChapter}.${currentVNum - 1}`);
      } else {
        if (this.currentChapter > 1) {
          const prevChapter = this.currentChapter - 1;
          await this.loadChapter(this.currentCanto, prevChapter);
        } else if (this.currentCanto > 1) {
          const prevCanto = this.currentCanto - 1;
          const cantos = getCantoStructure();
          const prevCantoObj = cantos.find(c => c.canto === prevCanto);
          const lastChap = prevCantoObj ? prevCantoObj.totalChapters : 1;
          await this.loadChapter(prevCanto, lastChap);
        } else {
          this.showToast('श्रीमद्भागवतम् का प्रथम श्लोक!');
        }
      }
    }
  }

  // Directly search any Sanskrit / Bengali word
  searchWordDirectly(sanskritWord) {
    if (!sanskritWord) return;
    const cleanWord = sanskritWord.replace(/[।,;:\-\—\–\(\)\[\]\{\}\"\'\?\!\/\\\|\*\+\=\>\<]/g, ' ').trim();
    if (!cleanWord) return;

    this.closeAllModals();
    this.openModal('searchModal');
    const input = document.getElementById('modalSearchInput');
    if (input) {
      input.value = cleanWord;
      setTimeout(() => {
        input.focus();
        try { input.setSelectionRange(cleanWord.length, cleanWord.length); } catch (e) {}
      }, 60);
    }
    this.executeSearch(cleanWord);
  }

  // Copy formatted verse for WhatsApp / Notes
  copyFormattedVerse() {
    if (!this.currentSloka) return;
    const s = this.currentSloka;
    const isCC = this.currentBook === 'CC' || s.book === 'CC' || s.id?.startsWith('cc-');
    const isISO = !isCC && (this.currentBook === 'ISO' || s.book === 'ISO' || s.id?.startsWith('iso-'));
    const isVS = !isCC && !isISO && (this.currentBook === 'VS' || s.book === 'VS' || s.id?.startsWith('vs-'));
    const isBG = !isCC && !isISO && !isVS && (this.currentBook === 'BG' || s.book === 'BG' || s.id?.startsWith('bg-'));
    const wordMeaningsText = (s.wordToWord || []).map(w => `${w.sanskrit} — ${w.hindi}`).join('; ');

    let titlePrefix;
    if (isCC) {
      const lKey = this.getLilaKey(s.lila || s.canto || 1).toUpperCase();
      titlePrefix = `🌺 *श्री चैतन्य-चरितामृत (CC ${lKey} ${s.chapter}.${s.verse})* 🌺`;
    } else if (isISO) {
      titlePrefix = `🪔 *श्री ईशोपनिषद् (ISO ${s.verseKey === 'inv' ? 'मंगलाचरण' : 'मंत्र ' + s.verseKey})* 🪔`;
    } else if (isVS) {
      titlePrefix = `🎵 *वैष्णव गीत: ${s.title || ''} (रचयिता: ${s.authorHindi || s.author || ''})* 🎵`;
    } else if (isBG) {
      titlePrefix = `🕉️ *श्रीमद्भगवद्गीता ${s.verseKey} (BG ${s.verseKey})* 🕉️`;
    } else {
      titlePrefix = `🕉️ *श्रीमद्भागवतम् SB ${s.verseKey}* 🕉️`;
    }

    const formatted = `${titlePrefix}\n\n` +
      `📜 *श्लोक / गीत:*\n${s.sanskritDevanagari || s.body || ''}\n\n` +
      (wordMeaningsText ? `✨ *शब्दार्थ:*\n${wordMeaningsText}\n\n` : '') +
      `📖 *अनुवाद:*\n${s.hindiTranslation || ''}\n\n` +
      (s.hindiPurport ? `🪔 *तात्पर्य:*\n${s.hindiPurport.substring(0, 400)}...\n\n` : '');

    navigator.clipboard.writeText(formatted).then(() => {
      this.showToast('📋 पयार/श्लोक/गीत क्लिपबोर्ड में कॉपी हो गया!');
    }).catch(() => {
      this.showToast('कॉपी करने में असमर्थ।');
    });
  }

  // Live Instant Search Execution (< 2ms)
  async executeSearch(query) {
    const list = document.getElementById('searchResultsList');
    const speedBadge = document.getElementById('searchSpeedBadge');
    if (!list) return;

    const trimmed = (query || '').trim();

    await this.ensureBgLoaded();
    await this.ensureIsoLoaded();
    await this.ensureCcLoaded();
    await this.ensureVsLoaded();

    const res = window.searchEngine ? window.searchEngine.search(trimmed) : { results: [], timeMs: 0 };

    if (speedBadge) {
      speedBadge.textContent = `${res.timeMs} ms`;
    }

    if (!res.results || res.results.length === 0) {
      list.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 2rem;">'${this.escapeHtml(trimmed || '')}' के लिए कोई श्लोक/पयार/गीत नहीं मिला।</div>`;
      return;
    }

    const highlightWord = trimmed;

    list.innerHTML = res.results.map(s => {
      const isCC = s.book === 'CC' || s.id?.startsWith('cc-');
      const isISO = !isCC && (s.book === 'ISO' || s.id?.startsWith('iso-'));
      const isVS = !isCC && !isISO && (s.book === 'VS' || s.id?.startsWith('vs-'));
      const isBG = !isCC && !isISO && !isVS && (s.book === 'BG' || s.id?.startsWith('bg-') || !s.canto);

      let prefix = 'SB';
      let badgeStyle = '';
      let displayKey = s.verseKey;
      let targetKey = s.verseKey;

      if (isCC) {
        const lKey = this.getLilaKey(s.lila || s.canto || 1).toUpperCase();
        prefix = 'CC';
        badgeStyle = 'background: rgba(236, 72, 153, 0.2); color: #f472b6;';
        displayKey = `${lKey} ${s.chapter}.${s.verse}`;
        targetKey = `cc ${s.verseKey || `${lKey.toLowerCase()}.${s.chapter}.${s.verse}`}`;
      } else if (isISO) {
        prefix = 'ISO';
        badgeStyle = 'background: rgba(16, 185, 129, 0.2); color: #34d399;';
        displayKey = s.verseKey === 'inv' ? 'मंगलाचरण' : `मंत्र ${s.verseKey}`;
        targetKey = `iso ${s.verseKey}`;
      } else if (isVS) {
        prefix = 'VS';
        badgeStyle = 'background: rgba(168, 85, 247, 0.2); color: #c084fc;';
        displayKey = `${s.songNumber || s.num || ''} - ${s.title || ''}`;
        targetKey = `vs ${s.songNumber || s.num || s.id}`;
      } else if (isBG) {
        prefix = 'BG';
        badgeStyle = 'background: rgba(245, 158, 11, 0.2); color: var(--accent-gold);';
        displayKey = s.verseKey;
        targetKey = `bg ${s.verseKey}`;
      }

      const sanskritFirstLine = this.cleanSanskritText(s.sanskritDevanagari || s.title || s.firstLine || '').split('\n')[0];
      const subtitleText = isVS ? `${s.authorHindi || s.author || ''} • ${s.book || ''}` : (s.category?.chapterTitleHindi || '');

      return `
        <div class="search-result-item" onclick="window.app.selectVerseFromSearch('${targetKey}', '${this.escapeHtml(highlightWord)}')">
          <div class="search-res-header">
            <span class="search-res-key" style="${badgeStyle}">${prefix} ${displayKey}</span>
            <span style="font-size: 0.8rem; color: var(--accent-gold); font-weight: 600;">${this.escapeHtml(subtitleText)}</span>
          </div>
          <div class="search-res-sanskrit">${this.highlightInText(sanskritFirstLine, highlightWord)}</div>
          <div class="search-res-translation">${this.highlightInText(s.hindiTranslation || s.firstLine || '', highlightWord)}</div>
        </div>
      `;
    }).join('');
  }

  selectVerseFromSearch(verseKey, highlightWord = null) {
    this.closeAllModals();
    this.loadVerseByKey(verseKey, highlightWord);
  }

  // =========================================================================
  // PRESENTATION / SLIDE SHOW MODE CONTROLLER
  // =========================================================================

  openPresentationMode() {
    this.isPresentationOpen = true;
    const overlay = document.getElementById('presentationOverlay');
    if (overlay) {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    this.applyPresSectionVisibility();
    this.applyPresSlideDetailsVisibility();
    this.applyPresFontSize();
    this.renderPresentationSlide();
    this.hidePresMenu();
    this.showToast('📽️ प्रेजेंटेशन मोड सक्रिय (नियंत्रण मेनू हेतु ☰ या M दबाएँ)');
  }

  closePresentationMode() {
    this.isPresentationOpen = false;
    this.hidePresMenu();
    const overlay = document.getElementById('presentationOverlay');
    if (overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  }

  togglePresMenu() {
    const header = document.getElementById('presHeader');
    if (!header) return;
    if (header.classList.contains('pres-hidden')) this.showPresMenu();
    else this.hidePresMenu();
  }

  showPresMenu() {
    const header = document.getElementById('presHeader');
    const trigger = document.getElementById('btnPresMenuToggle');
    const icon = document.getElementById('presMenuIcon');
    if (header) header.classList.remove('pres-hidden');
    if (trigger) trigger.classList.add('active');
    if (icon) icon.textContent = '✕';
  }

  hidePresMenu() {
    const header = document.getElementById('presHeader');
    const trigger = document.getElementById('btnPresMenuToggle');
    const icon = document.getElementById('presMenuIcon');
    if (header) header.classList.add('pres-hidden');
    if (trigger) trigger.classList.remove('active');
    if (icon) icon.textContent = '☰';
  }

  togglePresentationMode() {
    if (this.isPresentationOpen) this.closePresentationMode();
    else this.openPresentationMode();
  }

  togglePresSlideDetails() {
    this.isPresDetailsVisible = !this.isPresDetailsVisible;
    try {
      localStorage.setItem('vedabase_pres_show_details', this.isPresDetailsVisible ? 'true' : 'false');
    } catch (e) {}
    this.applyPresSlideDetailsVisibility();
  }

  applyPresSlideDetailsVisibility() {
    const container = document.getElementById('presSlideDetailsContainer');
    const toggleBtn = document.getElementById('btnTogglePresDetails');
    const toggleIcon = document.getElementById('presDetailsToggleIcon');
    const headerChip = document.getElementById('togglePresHeaderDetails');

    if (container) {
      container.classList.toggle('hidden', !this.isPresDetailsVisible);
    }
    if (toggleBtn) {
      toggleBtn.classList.toggle('details-hidden', !this.isPresDetailsVisible);
      toggleBtn.title = this.isPresDetailsVisible 
        ? 'ग्रन्थ एवं अध्याय विवरण छुपाएँ (Hide Details)' 
        : 'ग्रन्थ एवं अध्याय विवरण दिखाएँ (Show Details)';
    }
    if (toggleIcon) {
      toggleIcon.textContent = this.isPresDetailsVisible ? '▴' : '▾';
    }
    if (headerChip) {
      headerChip.classList.toggle('active', this.isPresDetailsVisible);
    }
  }

  togglePresSection(sectionName) {
    if (this.presSections.hasOwnProperty(sectionName)) {
      this.presSections[sectionName] = !this.presSections[sectionName];
      this.applyPresSectionVisibility();
    }
  }

  applyPresSectionVisibility() {
    const chipMap = {
      sanskrit: 'togglePresSanskrit',
      words: 'togglePresWords',
      translation: 'togglePresTranslation',
      purport: 'togglePresPurport'
    };
    const boxMap = {
      sanskrit: 'presSanskritBox',
      words: 'presWordsBox',
      translation: 'presTranslationBox',
      purport: 'presPurportBox'
    };

    for (const [sec, isVisible] of Object.entries(this.presSections)) {
      const chip = document.getElementById(chipMap[sec]);
      const box = document.getElementById(boxMap[sec]);
      if (chip) chip.classList.toggle('active', !!isVisible);
      if (box) box.style.display = isVisible ? 'block' : 'none';
    }
  }

  adjustPresFontSize(delta) {
    this.presFontScale = Math.max(0.65, Math.min(2.5, Math.round(((this.presFontScale || 1) + delta) * 100) / 100));
    try {
      localStorage.setItem('vedabase_pres_font_scale', String(this.presFontScale));
    } catch (e) {}
    this.applyPresFontSize();
    this.showToast(`🔍 फॉन्ट आकार: ${Math.round(this.presFontScale * 100)}%`);
  }

  applyPresFontSize() {
    const scale = this.presFontScale || 1;
    const stage = document.getElementById('presentationStage');
    const overlay = document.getElementById('presentationOverlay');
    if (stage) stage.style.setProperty('--pres-font-scale', scale);
    if (overlay) overlay.style.setProperty('--pres-font-scale', scale);

    const sanskritEl = document.getElementById('presSanskrit');
    const transEl = document.getElementById('presTranslation');
    const purportEl = document.getElementById('presPurport');
    const slideBadge = document.getElementById('presSlideBadge');
    const slideTitle = document.getElementById('presSlideTitle');
    const wordsTitle = document.querySelector('.pres-words-title');
    const transLabel = document.querySelector('.pres-translation-label');
    const purportLabel = document.querySelector('.pres-purport-label');

    if (sanskritEl) sanskritEl.style.fontSize = `${2.35 * scale}rem`;
    if (transEl) transEl.style.fontSize = `${1.45 * scale}rem`;
    if (purportEl) purportEl.style.fontSize = `${1.3 * scale}rem`;
    if (slideBadge) {
      slideBadge.style.fontSize = `${1.55 * scale}rem`;
      slideBadge.style.padding = `${0.45 * scale}rem ${1.45 * scale}rem`;
    }
    if (slideTitle) slideTitle.style.fontSize = `${1.2 * scale}rem`;
    if (wordsTitle) wordsTitle.style.fontSize = `${1.05 * scale}rem`;
    if (transLabel) transLabel.style.fontSize = `${1.1 * scale}rem`;
    if (purportLabel) purportLabel.style.fontSize = `${1.1 * scale}rem`;

    const wordChips = document.querySelectorAll('#presWordsGrid .word-chip');
    wordChips.forEach(chip => {
      chip.style.fontSize = `${1.05 * scale}rem`;
    });
  }

  togglePresFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.warn(err));
    } else {
      if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
    }
  }

  renderPresentationSlide() {
    if (!this.currentSloka) return;
    const s = this.currentSloka;
    const isCC = s.book === 'CC' || s.id?.startsWith('cc-');
    const isISO = !isCC && (s.book === 'ISO' || s.id?.startsWith('iso-'));
    const isVS = !isCC && !isISO && (s.book === 'VS' || s.id?.startsWith('vs-'));
    const isBG = !isCC && !isISO && !isVS && (s.book === 'BG' || s.id?.startsWith('bg-'));

    const presVerseKey = document.getElementById('presVerseKey');
    if (presVerseKey) {
      if (isCC) {
        const lKey = this.getLilaKey(s.lila || s.canto || 1).toUpperCase();
        presVerseKey.textContent = `CC ${lKey} ${s.chapter}.${s.verse}`;
      } else if (isISO) {
        presVerseKey.textContent = `ISO ${s.verseKey === 'inv' ? 'मंगलाचरण' : 'मंत्र ' + s.verseKey}`;
      } else if (isVS) {
        presVerseKey.textContent = `VS ${s.songNumber || s.id?.replace('vs-', '') || ''}`;
      } else if (isBG) {
        presVerseKey.textContent = `BG ${s.verseKey}`;
      } else {
        presVerseKey.textContent = `SB ${s.verseKey}`;
      }
    }

    const presChapterTitle = document.getElementById('presChapterTitle');
    if (presChapterTitle) {
      if (isCC) {
        const ccLilas = getCcLilas();
        const lilaObj = ccLilas.find(l => l.lila === (s.lila || 1));
        presChapterTitle.textContent = `श्री चैतन्य-चरितामृत • ${lilaObj?.name || 'आदि-लीला'} • अध्याय ${s.chapter}`;
      } else if (isISO) {
        presChapterTitle.textContent = `श्री ईशोपनिषद् • ${s.category?.chapterTitleHindi || 'मंत्र ' + s.verseKey}`;
      } else if (isVS) {
        presChapterTitle.textContent = `${s.title} (रचयिता: ${s.authorHindi || s.author || 'वैष्णव आचार्य'})`;
      } else if (isBG) {
        presChapterTitle.textContent = `श्रीमद्भगवद्गीता • अध्याय ${s.chapter}`;
      } else {
        presChapterTitle.textContent = s.category?.chapterTitleHindi || `स्कन्ध ${s.canto} • अध्याय ${s.chapter}`;
      }
    }

    const presCounter = document.getElementById('presCounter');
    if (presCounter) {
      if (isVS) {
        const totalV = this.vsSlokas?.length || 1602;
        presCounter.textContent = `गीत ${s.songNumber || 1} / ${totalV}`;
      } else if (isCC) {
        const ccLilas = getCcLilas();
        const lilaObj = ccLilas.find(l => l.lila === (s.lila || 1));
        const chObj = lilaObj?.chapters?.find(ch => ch.chapter === Number(s.chapter));
        const totalV = chObj ? chObj.totalVerses : Math.max(this.chapterSlokas.length, 1);
        presCounter.textContent = `पयार ${s.verse} / ${totalV}`;
      } else if (isISO) {
        presCounter.textContent = s.verseKey === 'inv' ? 'मंगलाचरण / 18' : `मंत्र ${s.verseKey} / 18`;
      } else if (isBG) {
        const bgChapters = getBgChapters();
        const chObj = bgChapters.find(ch => ch.chapter === Number(s.chapter));
        const totalV = chObj ? chObj.totalVerses : Math.max(this.chapterSlokas.length, 1);
        presCounter.textContent = `श्लोक ${s.verse} / ${totalV}`;
      } else {
        const cantos = getCantoStructure();
        const cantoObj = cantos.find(c => c.canto === this.currentCanto);
        const chapterObj = cantoObj?.chapters?.find(ch => ch.chapter === this.currentChapter);
        const totalV = chapterObj ? chapterObj.totalVerses : Math.max(this.chapterSlokas.length, 1);
        presCounter.textContent = `श्लोक ${s.verse} / ${totalV}`;
      }
    }

    // Update Slide Top Header Line (Prominently displayed at top of projector/presentation slide)
    const presSlideBadge = document.getElementById('presSlideBadge');
    const presSlideTitle = document.getElementById('presSlideTitle');
    let badgeText = '';
    let titleHtml = '';

    if (isCC) {
      const lKey = this.getLilaKey(s.lila || s.canto || 1).toUpperCase();
      const ccLilas = getCcLilas();
      const lilaObj = ccLilas.find(l => l.lila === (s.lila || 1));
      const chObj = lilaObj?.chapters?.find(ch => ch.chapter === Number(s.chapter));
      const lilaName = lilaObj?.name || 'आदि-लीला';
      const chName = chObj?.name ? ` (${chObj.name})` : '';

      badgeText = `CC ${lKey} ${s.chapter}.${s.verse}`;
      titleHtml = `<span class="pres-title-book">श्री चैतन्य-चरितामृत</span> <span class="pres-title-sep">•</span> <span class="pres-title-lila">${lilaName}</span> <span class="pres-title-sep">•</span> <span class="pres-title-chap">अध्याय ${s.chapter}${chName}</span> <span class="pres-title-sep">•</span> <span class="pres-title-verse">पयार ${s.verse}</span>`;
    } else if (isISO) {
      const isInv = s.verseKey === 'inv' || s.verseKey === '0';
      badgeText = isInv ? 'ISO मंगलाचरण' : `ISO ${s.verseKey}`;
      const chTitle = s.category?.chapterTitleHindi || '';
      const chPart = chTitle ? ` <span class="pres-title-sep">•</span> <span class="pres-title-chap">${chTitle}</span>` : '';

      titleHtml = `<span class="pres-title-book">श्री ईशोपनिषद्</span> <span class="pres-title-sep">•</span> <span class="pres-title-verse">${isInv ? 'मंगलाचरण (Invocation)' : 'मंत्र ' + s.verseKey}</span>${chPart}`;
    } else if (isVS) {
      badgeText = `VS ${s.songNumber || s.id?.replace('vs-', '') || ''}`;
      titleHtml = `<span class="pres-title-book">🎵 ${this.escapeHtml(s.title || 'वैष्णव गीत')}</span> <span class="pres-title-sep">•</span> <span class="pres-title-chap">${this.escapeHtml(s.authorHindi || s.author || 'वैष्णव आचार्य')}</span> <span class="pres-title-sep">•</span> <span class="pres-title-verse">${this.escapeHtml(s.book || 'वैष्णव भजन')}</span>`;
    } else if (isBG) {
      const bgChapters = getBgChapters();
      const chObj = bgChapters.find(ch => ch.chapter === Number(s.chapter));
      const chName = chObj?.name ? ` (${chObj.name})` : '';

      badgeText = `BG ${s.verseKey}`;
      titleHtml = `<span class="pres-title-book">श्रीमद्भगवद्गीता</span> <span class="pres-title-sep">•</span> <span class="pres-title-chap">अध्याय ${s.chapter}${chName}</span> <span class="pres-title-sep">•</span> <span class="pres-title-verse">श्लोक ${s.verse}</span>`;
    } else {
      const cantos = getCantoStructure();
      const cantoObj = cantos.find(c => c.canto === (s.canto || this.currentCanto));
      const chapterObj = cantoObj?.chapters?.find(ch => ch.chapter === Number(s.chapter));
      const chName = chapterObj?.name ? ` (${chapterObj.name})` : (s.category?.chapterTitleHindi ? ` (${s.category.chapterTitleHindi})` : '');

      badgeText = `SB ${s.verseKey}`;
      titleHtml = `<span class="pres-title-book">श्रीमद्भागवतम्</span> <span class="pres-title-sep">•</span> <span class="pres-title-canto">स्कन्ध ${s.canto}</span> <span class="pres-title-sep">•</span> <span class="pres-title-chap">अध्याय ${s.chapter}${chName}</span> <span class="pres-title-sep">•</span> <span class="pres-title-verse">श्लोक ${s.verse}</span>`;
    }

    if (presSlideBadge) presSlideBadge.textContent = badgeText;
    if (presSlideTitle) presSlideTitle.innerHTML = titleHtml;

    const presSanskrit = document.getElementById('presSanskrit');
    if (presSanskrit) {
      if (isVS) {
        presSanskrit.innerHTML = this.highlightInHtml(s.sanskritDevanagari, this.currentHighlightWord) || 'गीत उपलब्ध नहीं है';
      } else {
        presSanskrit.innerHTML = this.highlightInText(this.cleanSanskritText(s.sanskritDevanagari), this.currentHighlightWord) || 'श्लोक उपलब्ध नहीं है';
      }
    }

    const presTranslation = document.getElementById('presTranslation');
    if (presTranslation) {
      if (isVS) {
        presTranslation.innerHTML = this.highlightInHtml(s.formattedTransHtml || s.hindiTranslation, this.currentHighlightWord) || 'अनुवाद उपलब्ध नहीं है';
      } else {
        presTranslation.innerHTML = this.highlightInHtml(this.renderParagraphs(s.hindiTranslation), this.currentHighlightWord) || 'अनुवाद उपलब्ध नहीं है';
      }
    }

    const presWordsGrid = document.getElementById('presWordsGrid');
    if (presWordsGrid) {
      if (Array.isArray(s.wordToWord) && s.wordToWord.length > 0) {
        presWordsGrid.innerHTML = s.wordToWord.map(w => {
          const isMatch = this.currentHighlightWord && (
            w.sanskrit.toLowerCase().includes(this.currentHighlightWord.toLowerCase()) ||
            w.hindi.toLowerCase().includes(this.currentHighlightWord.toLowerCase())
          );
          return `
            <div class="word-chip ${isMatch ? 'search-highlight' : ''}" onclick="window.app.searchWordDirectly('${this.escapeHtml(w.sanskrit)}')">
              <span class="chip-sanskrit">${this.escapeHtml(w.sanskrit)}</span>
              <span class="chip-sep">—</span>
              <span class="chip-hindi">${this.escapeHtml(w.hindi)}</span>
            </div>
          `;
        }).join('');
      } else {
        presWordsGrid.innerHTML = '<div style="color: var(--text-muted); font-size: 0.9rem;">शब्दार्थ उपलब्ध नहीं है</div>';
      }
    }

    const presPurport = document.getElementById('presPurport');
    if (presPurport) {
      presPurport.innerHTML = s.hindiPurport ? this.highlightInHtml(this.renderParagraphs(s.hindiPurport), this.currentHighlightWord) : '<p style="color: var(--text-muted);">तात्पर्य उपलब्ध नहीं है</p>';
    }

    this.applyPresSectionVisibility();
    this.applyPresSlideDetailsVisibility();
    this.applyPresFontSize();
    this.triggerHighlightFadeTimer();

    const stage = document.getElementById('presentationStage');
    if (stage) stage.scrollTop = 0;
  }

  // Theme Management
  setupTheme() {
    const saved = localStorage.getItem('vedabase_theme') || 'dark';
    this.setTheme(saved);
  }

  setTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vedabase_theme', theme);

    const icon = document.getElementById('themeIcon');
    if (icon) icon.textContent = '🌓';
  }

  toggleNextTheme() {
    const themes = ['dark', 'light', 'sepia'];
    const nextIdx = (themes.indexOf(this.currentTheme) + 1) % themes.length;
    this.setTheme(themes[nextIdx]);
  }

  // Open Edit Modal for current verse
  openEditCurrentVerseModal() {
    if (!this.currentSloka) {
      this.showToast('सम्पादित करने के लिए कोई श्लोक/पयार चयनित नहीं है।');
      return;
    }

    const sloka = this.currentSloka;
    const isCC = this.currentBook === 'CC' || sloka.book === 'CC' || sloka.id?.startsWith('cc-');
    const isISO = !isCC && (this.currentBook === 'ISO' || sloka.book === 'ISO' || sloka.id?.startsWith('iso-'));
    const isBG = !isCC && !isISO && (this.currentBook === 'BG' || sloka.book === 'BG' || sloka.id?.startsWith('bg-'));

    const titleEl = document.getElementById('editModalTitle');
    if (titleEl) {
      if (isCC) {
        const lKey = this.getLilaKey(sloka.lila || sloka.canto || 1).toUpperCase();
        titleEl.textContent = `✏️ श्री चैतन्य-चरितामृत सम्पादन (CC ${lKey} ${sloka.chapter}.${sloka.verse})`;
      } else if (isISO) {
        titleEl.textContent = `✏️ श्री ईशोपनिषद् सम्पादन (${sloka.verseKey === 'inv' ? 'मंगलाचरण' : 'मंत्र ' + sloka.verseKey})`;
      } else if (isBG) {
        titleEl.textContent = `✏️ श्लोक सम्पादन (BG ${sloka.verseKey})`;
      } else {
        titleEl.textContent = `✏️ श्लोक सम्पादन (SB ${sloka.verseKey})`;
      }
    }

    document.getElementById('editVerseKey').value = sloka.verseKey || '';
    document.getElementById('editCanto').value = isCC ? -2 : (isISO ? -1 : (isBG ? 0 : (sloka.canto || 1)));
    document.getElementById('editChapter').value = sloka.chapter || 1;
    document.getElementById('editVerse').value = sloka.verse !== undefined ? sloka.verse : sloka.verseKey;

    const cantoChipBox = document.getElementById('editCantoChipBox');
    const cantoBadge = document.getElementById('editCantoBadge');
    const chapBadge = document.getElementById('editChapterBadge');
    const verseBadge = document.getElementById('editVerseBadge');

    if (cantoChipBox) {
      cantoChipBox.style.display = (isBG || isISO || isCC) ? 'none' : 'block';
    }
    if (cantoBadge) cantoBadge.textContent = sloka.canto || 1;
    if (chapBadge) chapBadge.textContent = isCC ? `लीला ${sloka.lila || 1} • अध्याय ${sloka.chapter || 1}` : (isISO ? 'ईशोपनिषद्' : (sloka.chapter || 1));
    if (verseBadge) verseBadge.textContent = sloka.verseKey === 'inv' ? 'मंगलाचरण' : sloka.verse;

    document.getElementById('editSanskrit').value = sloka.sanskritDevanagari || '';

    let wordsStr = '';
    if (Array.isArray(sloka.wordToWord) && sloka.wordToWord.length > 0) {
      wordsStr = sloka.wordToWord.map(w => `${w.sanskrit} — ${w.hindi}`).join(';\n');
    }
    document.getElementById('editWordToWord').value = wordsStr;
    document.getElementById('editTranslation').value = sloka.hindiTranslation || '';
    document.getElementById('editPurport').value = sloka.hindiPurport || '';

    this.openModal('editVerseModal');
  }

  // Save changes from Edit Sloka Modal
  async saveEditedVerse() {
    const verseKey = document.getElementById('editVerseKey').value;
    const canto = parseInt(document.getElementById('editCanto').value, 10);
    const chapter = parseInt(document.getElementById('editChapter').value, 10);
    const verse = document.getElementById('editVerse').value;
    const sanskrit = document.getElementById('editSanskrit').value.trim();
    const wordsRaw = document.getElementById('editWordToWord').value.trim();
    const translation = document.getElementById('editTranslation').value.trim();
    const purport = document.getElementById('editPurport').value.trim();

    const isCC = canto === -2 || this.currentBook === 'CC';
    const isISO = !isCC && (canto === -1 || this.currentBook === 'ISO');
    const isBG = !isCC && !isISO && (canto === 0 || this.currentBook === 'BG');

    const wordToWord = [];
    if (wordsRaw) {
      const parts = wordsRaw.split(/[;\n]+/).map(p => p.trim()).filter(p => p.length > 0);
      parts.forEach(part => {
        const pair = part.split(/[—\-–:]/).map(s => s.trim());
        if (pair.length >= 2) {
          wordToWord.push({ sanskrit: pair[0], hindi: pair.slice(1).join(' - ') });
        } else if (pair.length === 1 && pair[0]) {
          wordToWord.push({ sanskrit: pair[0], hindi: '' });
        }
      });
    }

    let sloka;
    if (isCC) {
      const lilaNum = this.currentLila || 1;
      const lilaKey = this.getLilaKey(lilaNum);
      const ccLilas = getCcLilas();
      const lilaObj = ccLilas.find(l => l.lila === lilaNum);
      const chObj = lilaObj?.chapters?.find(ch => ch.chapter === chapter);

      sloka = {
        id: `cc-${lilaKey}-${chapter}-${verse}`,
        book: "CC",
        lila: lilaNum,
        canto: lilaNum,
        chapter,
        verse: parseInt(verse, 10) || verse,
        verseKey: `${lilaKey}.${chapter}.${verse}`,
        sanskritDevanagari: sanskrit,
        sanskritIAST: this.currentSloka?.sanskritIAST || '',
        wordToWord,
        hindiTranslation: translation,
        hindiPurport: purport,
        category: {
          book: "श्री चैतन्य-चरितामृत",
          cantoTitleHindi: lilaObj?.name || lilaKey,
          chapterTitleHindi: chObj ? `अध्याय ${chapter} - ${chObj.name}` : `अध्याय ${chapter}`
        },
        tags: ["श्री चैतन्य-चरितामृत", lilaObj?.name || lilaKey, `अध्याय ${chapter}`]
      };
    } else if (isISO) {
      const isInv = verseKey === 'inv' || verseKey === '0';
      sloka = {
        id: `iso-${verseKey}`,
        book: "ISO",
        chapter: 1,
        verse: isInv ? 0 : parseInt(verseKey, 10),
        verseKey,
        sanskritDevanagari: sanskrit,
        sanskritIAST: this.currentSloka?.sanskritIAST || '',
        wordToWord,
        hindiTranslation: translation,
        hindiPurport: purport,
        category: {
          book: "श्री ईशोपनिषद्",
          cantoTitleHindi: "श्री ईशोपनिषद्",
          chapterTitleHindi: isInv ? "मंगलाचरण (Invocation)" : `मंत्र ${verseKey}`
        },
        tags: ["श्री ईशोपनिषद्", isInv ? "मंगलाचरण" : `मंत्र ${verseKey}`]
      };
    } else if (isBG) {
      const bgChapters = getBgChapters();
      const chObj = bgChapters.find(ch => ch.chapter === chapter);
      sloka = {
        id: `bg-${chapter}-${verse}`,
        book: "BG",
        chapter,
        verse,
        verseKey,
        sanskritDevanagari: sanskrit,
        sanskritIAST: this.currentSloka?.sanskritIAST || '',
        wordToWord,
        hindiTranslation: translation,
        hindiPurport: purport,
        category: {
          book: "श्रीमद्भगवद्गीता",
          cantoTitleHindi: "श्रीमद्भगवद्गीता यथारूप",
          chapterTitleHindi: chObj ? `अध्याय ${chapter} - ${chObj.name}` : `अध्याय ${chapter}`
        },
        tags: ["श्रीमद्भगवद्गीता", `अध्याय ${chapter}`]
      };
    } else {
      const cantos = getCantoStructure();
      const cantoObj = cantos.find(c => c.canto === canto);
      const chapterObj = cantoObj?.chapters?.find(ch => ch.chapter === chapter);
      sloka = {
        id: `sb-${canto}-${chapter}-${verse}`,
        book: "SB",
        canto,
        chapter,
        verse,
        verseKey,
        sanskritDevanagari: sanskrit,
        sanskritIAST: this.currentSloka?.sanskritIAST || '',
        wordToWord,
        hindiTranslation: translation,
        hindiPurport: purport,
        category: {
          book: "श्रीमद्भागवतम्",
          cantoTitleHindi: cantoObj?.name || `स्कन्ध ${canto}`,
          chapterTitleHindi: chapterObj ? `अध्याय ${chapter} - ${chapterObj.name}` : `अध्याय ${chapter}`
        },
        tags: this.currentSloka?.tags || [`स्कन्ध ${canto}`, `अध्याय ${chapter}`]
      };
    }

    // 1. Send update directly to server API
    let diskSaved = false;
    try {
      const resp = await fetch('/api/save-verse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sloka)
      });
      if (resp.ok) {
        const result = await resp.json();
        if (result.success) diskSaved = true;
      }
    } catch (e) {
      console.warn('Server direct file-save notice:', e);
    }

    // 2. Update in-memory structures
    this.verseMap.set(sloka.verseKey, sloka);
    this.verseMap.set(sloka.id, sloka);

    if (isCC) {
      const lilaKey = this.getLilaKey(sloka.lila || sloka.canto || 1);
      const chKey = `${lilaKey}-${sloka.chapter}`;
      this.ccMap.set(`${lilaKey}.${sloka.chapter}.${sloka.verse}`, sloka);
      this.verseMap.set(`cc ${lilaKey} ${sloka.chapter}.${sloka.verse}`, sloka);
      this.verseMap.set(`cc-${lilaKey}-${sloka.chapter}-${sloka.verse}`, sloka);

      if (!this.ccChapterMap.has(chKey)) {
        this.ccChapterMap.set(chKey, []);
      }
      const chList = this.ccChapterMap.get(chKey);
      const chIdx = chList.findIndex(s => s.id === sloka.id);
      if (chIdx >= 0) chList[chIdx] = sloka;
      else chList.push(sloka);

      const ccIdx = this.ccSlokas.findIndex(s => s.id === sloka.id);
      if (ccIdx >= 0) this.ccSlokas[ccIdx] = sloka;
      else this.ccSlokas.push(sloka);
    } else if (isISO) {
      const vK = String(sloka.verseKey).toLowerCase();
      this.isoMap.set(vK, sloka);
      this.verseMap.set(`iso ${vK}`, sloka);
      this.verseMap.set(`iso-${vK}`, sloka);
      const isoIdx = this.isoSlokas.findIndex(s => s.id === sloka.id);
      if (isoIdx >= 0) this.isoSlokas[isoIdx] = sloka;
      else this.isoSlokas.push(sloka);
    } else if (isBG) {
      this.verseMap.set(`bg-${sloka.chapter}-${sloka.verse}`, sloka);
      this.verseMap.set(`bg ${sloka.chapter}.${sloka.verse}`, sloka);
      const chList = this.bgChapterMap.get(chapter);
      if (chList) {
        const chIdx = chList.findIndex(s => s.id === sloka.id);
        if (chIdx >= 0) chList[chIdx] = sloka;
        else chList.push(sloka);
      }
    } else {
      const chKey = `${sloka.canto}-${sloka.chapter}`;
      const chList = this.chapterMap.get(chKey);
      if (chList) {
        const chIdx = chList.findIndex(s => s.id === sloka.id);
        if (chIdx >= 0) chList[chIdx] = sloka;
        else chList.push(sloka);
      }
    }

    const idx = this.allSlokas.findIndex(s => s.id === sloka.id);
    if (idx >= 0) this.allSlokas[idx] = sloka;
    else this.allSlokas.push(sloka);

    if (window.searchEngine) window.searchEngine.appendIndex([sloka]);

    // 3. Remove localStorage override if disk write was successful
    if (diskSaved) {
      const edits = this.getUserCustomEdits();
      const saveKey = isCC ? `cc-${this.getLilaKey(sloka.lila)}-${chapter}-${verse}` : (isISO ? `iso-${verseKey}` : (isBG ? `bg-${chapter}-${verse}` : verseKey));
      if (edits[saveKey]) {
        delete edits[saveKey];
        localStorage.setItem('vedabase_user_custom_edits', JSON.stringify(edits));
      }
      this.updateCustomEditsCountBadge();
      const prefix = isCC ? 'CC' : (isISO ? 'ISO' : (isBG ? 'BG' : 'SB'));
      this.showToast(`💾 ${prefix} ${verseKey} सीधे JSON फ़ाइल में सुरक्षित हो गया!`);
    } else {
      await this.saveUserCustomEdit(sloka);
      const prefix = isCC ? 'CC' : (isISO ? 'ISO' : (isBG ? 'BG' : 'SB'));
      this.showToast(`✅ ${prefix} ${verseKey} सुरक्षित हुआ (Local Storage)`);
    }

    this.closeAllModals();
    await this.displaySloka(sloka);
  }

  // Export Sri Caitanya-caritamrta JSON
  async exportCcJSON() {
    this.showToast('⏳ श्री चैतन्य-चरितामृत का JSON तैयार किया जा रहा है...');
    await this.ensureCcLoaded();

    let verses = this.ccSlokas || [];
    verses = this.applyUserCustomEdits(verses);

    const blob = new Blob([JSON.stringify(verses, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chaitanya-charitamrita.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.showToast(`📥 chaitanya-charitamrita.json (${verses.length} पयार) डाउनलोड हुआ!`);
  }

  // Export Sri Isopanisad JSON
  async exportIsoJSON() {
    this.showToast('⏳ श्री ईशोपनिषद् का JSON तैयार किया जा रहा है...');
    await this.ensureIsoLoaded();

    let mantras = this.isoSlokas || [];
    mantras = this.applyUserCustomEdits(mantras);

    const blob = new Blob([JSON.stringify(mantras, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `isopanisad.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.showToast(`📥 isopanisad.json (${mantras.length} मंत्र) डाउनलोड हुआ!`);
  }

  // Export Bhagavad Gita JSON
  async exportBgJSON() {
    this.showToast('⏳ भगवद्गीता का JSON तैयार किया जा रहा है...');
    await this.ensureBgLoaded();

    let slokas = this.allSlokas.filter(s => s.book === 'BG' || s.id?.startsWith('bg-'));
    slokas = this.applyUserCustomEdits(slokas);

    slokas.sort((a, b) => {
      if (a.chapter !== b.chapter) return (a.chapter || 0) - (b.chapter || 0);
      const vA = parseInt(a.verse, 10) || 0;
      const vB = parseInt(b.verse, 10) || 0;
      return vA - vB;
    });

    const blob = new Blob([JSON.stringify(slokas, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bhagavad-gita.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.showToast(`📥 bhagavad-gita.json (${slokas.length} श्लोक) डाउनलोड हुआ!`);
  }

  // Export Vaishnava Songs JSON
  async exportVsJSON() {
    this.showToast('⏳ वैष्णव गीतों का JSON तैयार किया जा रहा है...');
    await this.ensureVsLoaded();

    let songs = this.vsSlokas || [];
    songs = this.applyUserCustomEdits(songs);

    const blob = new Blob([JSON.stringify(songs, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vaishnava-songs.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.showToast(`📥 vaishnava-songs.json (${songs.length} भजन व गीत) डाउनलोड हुआ!`);
  }

  // Export JSON Backup of entire database
  async exportJSONBackup() {
    this.showToast('⏳ सम्पूर्ण बैकअप तैयार किया जा रहा है...');

    await this.ensureBgLoaded();
    await this.ensureIsoLoaded();
    await this.ensureCcLoaded();
    for (let c = 1; c <= 12; c++) {
      await this.ensureCantoLoaded(c);
    }

    let slokas = this.allSlokas || [];
    slokas = this.applyUserCustomEdits(slokas);

    const blob = new Blob([JSON.stringify(slokas, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Hindi_Vedabase_Master_Backup_${slokas.length}_Verses.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.showToast(`📥 समस्त ${slokas.length} श्लोकों/मंत्रों/पयारों का JSON बैकअप डाउनलोड हुआ!`);
  }

  // Export a specific Canto as canto-X.json
  async exportCantoJSON(cantoNum) {
    const cNum = Number(cantoNum) || this.currentCanto || 1;
    this.showToast(`⏳ स्कन्ध ${cNum} का JSON तैयार किया जा रहा है...`);

    await this.ensureCantoLoaded(cNum);

    let slokas = this.allSlokas.filter(s => s.book === 'SB' && Number(s.canto) === cNum);
    slokas = this.applyUserCustomEdits(slokas);

    slokas.sort((a, b) => {
      if (a.chapter !== b.chapter) return (a.chapter || 0) - (b.chapter || 0);
      const vA = parseInt(a.verse, 10) || 0;
      const vB = parseInt(b.verse, 10) || 0;
      return vA - vB;
    });

    const blob = new Blob([JSON.stringify(slokas, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `canto-${cNum}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.showToast(`📥 canto-${cNum}.json (${slokas.length} श्लोक) डाउनलोड हुआ!`);
  }

  // Helper to format prose into clean paragraphs
  renderParagraphs(text) {
    if (!text) return '';
    const rawParagraphs = text.split(/(?:\r?\n\s*){2,}/);
    const htmlBlocks = [];

    for (let para of rawParagraphs) {
      let p = para.trim();
      if (!p) continue;

      const lines = p.split(/\r?\n/);
      if (p.includes('॥') && lines.length <= 6 && p.length < 400) {
        const cleanedLines = lines.map(l => this.escapeHtml(l.trim())).filter(Boolean).join('<br>');
        htmlBlocks.push(`<div class="verse-quote-block">${cleanedLines}</div>`);
      } else {
        const unwrapped = p.replace(/\r?\n+/g, ' ').replace(/\s+/g, ' ').trim();
        htmlBlocks.push(`<p class="para-block">${this.escapeHtml(unwrapped)}</p>`);
      }
    }

    return htmlBlocks.join('');
  }

  // Modal Helpers
  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      const firstInput = modal.querySelector('input, textarea');
      if (firstInput) setTimeout(() => firstInput.focus(), 50);
    }
  }

  closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    document.body.style.overflow = '';
  }

  // Toast Notification Helper
  showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // Bind all event listeners & keyboard shortcuts
  bindEvents() {
    const btnOpenSearch = document.getElementById('btnOpenSearch');
    if (btnOpenSearch) {
      btnOpenSearch.addEventListener('click', () => {
        this.openModal('searchModal');
        this.executeSearch('');
      });
    }

    const modalSearchInput = document.getElementById('modalSearchInput');
    if (modalSearchInput) {
      modalSearchInput.addEventListener('input', (e) => {
        this.executeSearch(e.target.value);
      });

      modalSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const query = e.target.value.trim();
          if (!query) return;

          const res = window.searchEngine ? window.searchEngine.search(query) : { results: [] };
          if (res.results && res.results.length > 0) {
            const first = res.results[0];
            const isCC = first.book === 'CC' || first.id?.startsWith('cc-');
            const isISO = !isCC && (first.book === 'ISO' || first.id?.startsWith('iso-'));
            const isBG = !isCC && !isISO && (first.book === 'BG' || first.id?.startsWith('bg-'));

            let targetKey = first.verseKey;
            if (isCC) targetKey = `cc ${first.verseKey}`;
            else if (isISO) targetKey = `iso ${first.verseKey}`;
            else if (isBG) targetKey = `bg ${first.verseKey}`;

            this.selectVerseFromSearch(targetKey, query);
          }
        }
      });
    }

    // Header Actions
    document.getElementById('logoHome')?.addEventListener('click', () => this.loadVerseByKey('bg 1.1'));
    document.getElementById('btnPresentationMode')?.addEventListener('click', () => this.openPresentationMode());
    document.getElementById('btnOpenManager')?.addEventListener('click', () => this.openModal('managerModal'));
    document.getElementById('btnThemeToggle')?.addEventListener('click', () => this.toggleNextTheme());

    // Presentation Mode Controls
    document.getElementById('btnPresMenuToggle')?.addEventListener('click', () => this.togglePresMenu());
    document.getElementById('btnClosePresentation')?.addEventListener('click', () => this.closePresentationMode());
    document.getElementById('btnPresSearch')?.addEventListener('click', () => {
      this.openModal('searchModal');
      this.executeSearch('');
    });

    document.getElementById('presentationStage')?.addEventListener('click', () => {
      if (this.isPresentationOpen) this.hidePresMenu();
    });

    document.getElementById('btnPresTheme')?.addEventListener('click', () => this.toggleNextTheme());
    document.getElementById('btnPresFullscreen')?.addEventListener('click', () => this.togglePresFullscreen());
    document.getElementById('btnPresFontDec')?.addEventListener('click', () => this.adjustPresFontSize(-0.1));
    document.getElementById('btnPresFontInc')?.addEventListener('click', () => this.adjustPresFontSize(0.1));
    document.getElementById('btnTogglePresDetails')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.togglePresSlideDetails();
    });
    document.getElementById('presSlideBadge')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.togglePresSlideDetails();
    });
    document.getElementById('togglePresHeaderDetails')?.addEventListener('click', () => this.togglePresSlideDetails());
    document.getElementById('togglePresSanskrit')?.addEventListener('click', () => this.togglePresSection('sanskrit'));
    document.getElementById('togglePresWords')?.addEventListener('click', () => this.togglePresSection('words'));
    document.getElementById('togglePresTranslation')?.addEventListener('click', () => this.togglePresSection('translation'));
    document.getElementById('togglePresPurport')?.addEventListener('click', () => this.togglePresSection('purport'));

    // Sloka Card Tools
    document.getElementById('btnCopyVerse')?.addEventListener('click', () => this.copyFormattedVerse());
    document.getElementById('btnEditCurrentVerse')?.addEventListener('click', () => this.openEditCurrentVerseModal());
    document.getElementById('btnBadgeRevert')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.revertCurrentVerseToOriginal();
    });
    document.getElementById('btnRevertSingleVerse')?.addEventListener('click', () => this.revertCurrentVerseToOriginal());
    document.getElementById('btnClearAllCustomEdits')?.addEventListener('click', () => this.clearAllCustomEdits());

    // Navigation Buttons
    document.getElementById('btnNextVerse')?.addEventListener('click', () => this.nextVerse());
    document.getElementById('btnPrevVerse')?.addEventListener('click', () => this.prevVerse());

    // Modal Close Buttons
    document.getElementById('btnCloseSearch')?.addEventListener('click', () => this.closeAllModals());
    document.getElementById('btnCloseManager')?.addEventListener('click', () => this.closeAllModals());
    document.getElementById('btnCloseEditModal')?.addEventListener('click', () => this.closeAllModals());
    document.getElementById('btnCancelEdit')?.addEventListener('click', () => this.closeAllModals());

    // Edit Verse Form Submission
    document.getElementById('editVerseForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.saveEditedVerse();
    });

    // Backup & Restore
    const btnOpenManager = document.getElementById('btnOpenManager');
    if (btnOpenManager) {
      btnOpenManager.addEventListener('click', () => {
        this.updateCustomEditsCountBadge();
        const sel = document.getElementById('exportCantoSelect');
        if (sel) sel.value = String(this.currentCanto || 1);
        this.openModal('managerModal');
      });
    }

    document.getElementById('btnExportJSON')?.addEventListener('click', () => this.exportJSONBackup());
    document.getElementById('btnExportCustomEdits')?.addEventListener('click', () => this.exportCustomEdits());
    document.getElementById('btnExportCcJSON')?.addEventListener('click', () => this.exportCcJSON());
    document.getElementById('btnExportIsoJSON')?.addEventListener('click', () => this.exportIsoJSON());
    document.getElementById('btnExportBgJSON')?.addEventListener('click', () => this.exportBgJSON());
    document.getElementById('btnExportVsJSON')?.addEventListener('click', () => this.exportVsJSON());
    document.getElementById('btnExportCantoJSON')?.addEventListener('click', () => {
      const sel = document.getElementById('exportCantoSelect');
      const cNum = sel ? parseInt(sel.value, 10) : (this.currentCanto || 1);
      this.exportCantoJSON(cNum);
    });

    // Global Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        this.openModal('searchModal');
        this.executeSearch('');
        return;
      }

      if (e.key === 'Escape') {
        if (document.querySelector('.modal-overlay.active')) {
          this.closeAllModals();
          return;
        }
        if (this.isPresentationOpen) {
          const header = document.getElementById('presHeader');
          if (header && !header.classList.contains('pres-hidden')) {
            this.hidePresMenu();
            return;
          }
          this.closePresentationMode();
          return;
        }
      }

      if (this.isPresentationOpen && (e.key === 'm' || e.key === 'M') && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        this.togglePresMenu();
        return;
      }

      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        if (e.key === 'ArrowRight' || (this.isPresentationOpen && e.key === ' ')) {
          e.preventDefault();
          this.nextVerse();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.prevVerse();
        }
      }
    });
  }
}

// Instantiate and start app on page load
document.addEventListener('DOMContentLoaded', () => {
  window.app = new VedabaseApp();
  window.app.init();
});
