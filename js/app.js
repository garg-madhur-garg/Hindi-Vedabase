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
    this.vsScriptMode = localStorage.getItem('vedabase_vs_script') || 'devanagari';
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

    const isVS = sloka.book === 'VS' || (sloka.id && String(sloka.id).startsWith('vs-')) || Boolean(sloka.songNumber) || sloka.scripture === 'VS' || (this.currentBook === 'VS');
    const isCC = !isVS && (sloka.book === 'CC' || (sloka.id && sloka.id.startsWith('cc-')));
    const isISO = !isVS && !isCC && (sloka.book === 'ISO' || (sloka.id && sloka.id.startsWith('iso-')));
    const isBG = !isVS && !isCC && !isISO && (sloka.book === 'BG' || (sloka.id && sloka.id.startsWith('bg-')));

    let key;
    if (isVS) {
      key = sloka.id || `vs-${sloka.songNumber}`;
    } else if (isCC) {
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
      if (isVS && sloka.songNumber) {
        edits[`vs-${sloka.songNumber}`] = sloka;
        edits[String(sloka.songNumber)] = sloka;
      }
      localStorage.setItem('vedabase_user_custom_edits', JSON.stringify(edits));
    } catch (e) {
      console.warn('LocalStorage save warning:', e);
    }

    // 2. Update in-memory structures
    if (sloka.verseKey) this.verseMap.set(sloka.verseKey, sloka);
    if (sloka.id) this.verseMap.set(sloka.id, sloka);

    if (isVS) {
      const songNumber = sloka.songNumber;
      const songId = sloka.id || `vs-${songNumber}`;
      if (this.vsMap) {
        this.vsMap.set(songId, sloka);
        if (songNumber) {
          this.vsMap.set(String(songNumber), sloka);
          this.vsMap.set(`vs ${songNumber}`, sloka);
          this.vsMap.set(`vs-${songNumber}`, sloka);
        }
        if (sloka.title) this.vsMap.set(sloka.title.toLowerCase().trim(), sloka);
      }
      if (this.verseMap) {
        this.verseMap.set(songId, sloka);
        if (songNumber) {
          this.verseMap.set(`vs ${songNumber}`, sloka);
          this.verseMap.set(`vs-${songNumber}`, sloka);
        }
      }
      if (Array.isArray(this.vsSlokas)) {
        const vsIdx = this.vsSlokas.findIndex(s => s.id === songId || (songNumber && s.songNumber === songNumber));
        if (vsIdx >= 0) this.vsSlokas[vsIdx] = sloka;
        else this.vsSlokas.push(sloka);
      }
    } else if (isCC) {
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

    const idx = this.allSlokas.findIndex(s => s.id === sloka.id || (sloka.verseKey && s.verseKey === sloka.verseKey));
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
    const isVS = this.currentBook === 'VS' || this.currentBook === 'VAISHNAVA_SONGS' || this.currentSloka.book === 'VS' || this.currentSloka.id?.startsWith('vs-') || Boolean(this.currentSloka.songNumber);
    const isCC = !isVS && (this.currentBook === 'CC' || this.currentSloka.book === 'CC' || this.currentSloka.id?.startsWith('cc-'));
    const isISO = !isVS && !isCC && (this.currentBook === 'ISO' || this.currentSloka.book === 'ISO' || this.currentSloka.id?.startsWith('iso-'));
    const isBG = !isVS && !isCC && !isISO && (this.currentBook === 'BG' || this.currentSloka.book === 'BG' || this.currentSloka.id?.startsWith('bg-'));
    const verseKey = this.currentSloka.verseKey;

    // Remove from localStorage
    const edits = this.getUserCustomEdits();
    let editKey;
    if (isVS) {
      editKey = this.currentSloka.id || `vs-${this.currentSloka.songNumber}`;
    } else if (isCC) {
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
      if (isVS && this.currentSloka.songNumber) {
        delete edits[`vs-${this.currentSloka.songNumber}`];
        delete edits[String(this.currentSloka.songNumber)];
      }
      localStorage.setItem('vedabase_user_custom_edits', JSON.stringify(edits));
    }

    try {
      if (isVS) {
        const resp = await fetch(`data/vaishnava-songs/vaishnava-songs.json?v=${Date.now()}`);
        if (resp.ok) {
          const freshSongs = await resp.json();
          const orig = freshSongs.find(s => s.id === this.currentSloka.id || s.songNumber === this.currentSloka.songNumber);
          if (orig) {
            delete orig.isUserEdited;
            delete orig.lastEditedAt;
            orig.parsed = false;
            
            if (window.VsTranslationsHindi && window.VsTranslationsHindi.resetCustom) {
              window.VsTranslationsHindi.resetCustom(orig.songNumber);
            }

            this.parseSongBody(orig);

            const songId = orig.id || `vs-${orig.songNumber}`;
            this.vsMap.set(songId, orig);
            this.vsMap.set(String(orig.songNumber), orig);
            this.vsMap.set(orig.title, orig);
            this.verseMap.set(songId, orig);

            const idx = this.allSlokas.findIndex(s => s.id === orig.id);
            if (idx >= 0) this.allSlokas[idx] = orig;

            const vsIdx = this.vsSlokas.findIndex(s => s.id === orig.id || s.songNumber === orig.songNumber);
            if (vsIdx >= 0) this.vsSlokas[vsIdx] = orig;

            if (window.searchEngine) window.searchEngine.appendIndex([orig]);

            this.updateCustomEditsCountBadge();
            this.closeAllModals();
            this.currentSloka = orig;
            await this.displaySloka(orig);
            this.showToast(`✅ वैष्णव गीत #${orig.songNumber} मूल JSON डेटा में रीसेट हो गया!`);
            return;
          }
        }
      } else if (isCC) {
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
    this.vsMap.clear();
    this.vsAuthorMap.clear();
    this.vsBookMap.clear();
    this.vsSlokas = [];
    this.allSlokas = [];
    this.loadedCantos.clear();
    this.isBgLoaded = false;
    this.isIsoLoaded = false;
    this.isCcLoaded = false;
    this.isVsLoaded = false;

    if (window.VsTranslationsHindi && window.VsTranslationsHindi.resetCustom) {
      window.VsTranslationsHindi.resetCustom();
    }

    if (window.searchEngine) {
      window.searchEngine.clearIndex();
    }

    this.showToast('⏳ समस्त डेटा JSON फाइलों से पुनः लोड हो रहा है...');

    await this.ensureBgLoaded();
    await this.ensureIsoLoaded();
    await this.ensureCcLoaded();
    await this.ensureVsLoaded();
    const curKey = this.currentSloka ? this.currentSloka.verseKey : '1.1';
    await this.loadVerseByKey(curKey);
    this.updateCustomEditsCountBadge();
    this.closeAllModals();

    setTimeout(() => {
      this.preloadAllCantosInBackground();
    }, 100);

    this.showToast('✅ सभी श्लोक व गीत मूल JSON फाइलों से सफलतापूर्वक रीसेट हो गए!');
  }

  // Merge user custom edits onto any incoming slokas array
  applyUserCustomEdits(slokas) {
    if (!slokas || slokas.length === 0) return slokas;

    // 1. First apply cloud approved overrides if active
    if (window.vedabaseFirebase && typeof window.vedabaseFirebase.applyApprovedOverrides === 'function') {
      slokas = window.vedabaseFirebase.applyApprovedOverrides(slokas);
    }

    // 2. Then apply local user edits (if any)
    const userEdits = this.getUserCustomEdits();
    return slokas.map(s => {
      const isVS = s.book === 'VS' || (s.id && String(s.id).startsWith('vs-')) || Boolean(s.songNumber) || s.scripture === 'VS';
      const isCC = !isVS && (s.book === 'CC' || (s.id && String(s.id).startsWith('cc-')));
      const isISO = !isVS && !isCC && (s.book === 'ISO' || (s.id && String(s.id).startsWith('iso-')));
      const isBG = !isVS && !isCC && !isISO && (s.book === 'BG' || (s.id && String(s.id).startsWith('bg-')));

      let editKey;
      if (isVS) {
        editKey = s.id || `vs-${s.songNumber}`;
      } else if (isCC) {
        const lilaKey = this.getLilaKey(s.lila || s.canto || 1);
        editKey = `cc-${lilaKey}-${s.chapter}-${s.verse}`;
      } else if (isISO) {
        editKey = `iso-${s.verseKey || s.verse}`;
      } else if (isBG) {
        editKey = `bg-${s.chapter}-${s.verse}`;
      } else {
        editKey = s.verseKey || `${s.canto}.${s.chapter}.${s.verse}`;
      }

      const editObj = (editKey && userEdits[editKey]) || (s.verseKey && userEdits[s.verseKey]) || (s.id && userEdits[s.id]) || (isVS && s.songNumber && (userEdits[`vs-${s.songNumber}`] || userEdits[String(s.songNumber)]));
      if (editObj) {
        return { ...s, ...editObj, isUserEdited: true };
      }
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
    let rawPurport = song.hindiPurport || song.englishTranslation || '';

    // Match TRANSLATION and PURPORT as line headers (not word mentions inside sentences)
    const transMatch = raw.match(/(?:^|\n)\s*TRANSLATION(?:S)?\s*(?:\n|:|$)/i);
    const transIdx = transMatch ? transMatch.index : -1;
    const transLen = transMatch ? transMatch[0].length : 11;

    const purportMatch = raw.match(/(?:^|\n)\s*PURPORT(?:S)?\s*(?:\n|:|$)/i);
    const purportIdx = purportMatch ? purportMatch.index : -1;
    const purportLen = purportMatch ? purportMatch[0].length : 7;

    if (transIdx >= 0) {
      rawLyrics = raw.substring(0, transIdx).trim();
      if (purportIdx > transIdx) {
        rawTranslation = raw.substring(transIdx + transLen, purportIdx).trim();
        rawPurport = song.hindiPurport || song.englishTranslation || raw.substring(purportIdx + purportLen).trim();
      } else {
        rawTranslation = raw.substring(transIdx + transLen).trim();
      }
    } else {
      if (purportIdx >= 0) {
        rawLyrics = raw.substring(0, purportIdx).trim();
        rawPurport = song.hindiPurport || song.englishTranslation || raw.substring(purportIdx + purportLen).trim();
      } else {
        rawLyrics = raw.trim();
      }
    }

    // Split lyrics into stanzas
    const normLyrics = rawLyrics.replace(/\r\n/g, '\n');
    let stanzas = [];

    // Check if transliterations dataset has explicit authentic stanzas
    const hindiMeta = (!song.isUserEdited && window.VsTranslationsHindi && window.VsTranslationsHindi.getHindiMetadata)
      ? (window.VsTranslationsHindi.getHindiMetadata(song) || window.VsTranslationsHindi.getHindiMetadata(song.id) || window.VsTranslationsHindi.getHindiMetadata(song.songNumber) || window.VsTranslationsHindi.getHindiMetadata(song.verseKey) || window.VsTranslationsHindi.getHindiMetadata(song.title))
      : null;

    if (normLyrics.match(/(?:^|\n)\s*\(?\d+\)?\s*(?:\n|$)/)) {
      const parts = normLyrics.split(/(?:^|\n)\s*\(?(\d+)\)?\s*(?:\n|$)/);
      const prefixText = (parts[0] || '').replace(/\(refrain\)|\(chorus\)|\(ध्रुवपद\)/ig, '').trim();
      if (prefixText && prefixText !== '\\') {
        stanzas.push({ num: '1', text: prefixText });
      }
      for (let i = 1; i < parts.length; i += 2) {
        const num = prefixText ? String(stanzas.length + 1) : parts[i];
        const txt = (parts[i + 1] || '').trim();
        if (txt && txt !== '\\') {
          stanzas.push({ num, text: txt });
        }
      }
    }

    // Fallback if no numbered stanzas
    if (stanzas.length === 0) {
      const paras = normLyrics.split(/\n\s*\n+/);
      paras.forEach((p, idx) => {
        const pt = p.trim();
        if (pt && pt !== '\\') {
          stanzas.push({ num: String(idx + 1), text: pt });
        }
      });
    }

    // Match or expand stanzas from authentic transliterations metadata if available (for unedited songs)
    if (!song.isUserEdited && hindiMeta && Array.isArray(hindiMeta.transliterations) && hindiMeta.transliterations.length > 0) {
      if (stanzas.length === 0 || hindiMeta.transliterations.length > stanzas.length) {
        stanzas = hindiMeta.transliterations.map((t, idx) => ({
          num: String(idx + 1),
          text: (stanzas[idx]?.text && stanzas[idx].text.trim()) ? stanzas[idx].text : t
        }));
      }
    } else if (song.isUserEdited && Array.isArray(song.hindiDevanagariStanzas) && song.hindiDevanagariStanzas.length > stanzas.length) {
      stanzas = song.hindiDevanagariStanzas.map((t, idx) => ({
        num: String(idx + 1),
        text: (stanzas[idx]?.text && stanzas[idx].text.trim()) ? stanzas[idx].text : t
      }));
    }

    let validStanzas = stanzas.filter(s => s && s.text && s.text.trim() && s.text.trim() !== '\\');
    stanzas = validStanzas;
    song.stanzas = validStanzas;

    // Determine whether rawTranslation is in Hindi (Devanagari) or English
    const isTransHindi = /[\u0900-\u097F]/.test(rawTranslation);

    // Split translations into numbered items map
    const normTrans = rawTranslation.replace(/\r\n/g, '\n');
    const transMap = new Map();
    const transList = [];

    if (normTrans.match(/(?:^|\n)\s*(?:Refrain|Chorus|ध्रुवपद|\(?\d+\)?[\.\)])\s*/i)) {
      const tParts = normTrans.split(/(?:^|\n)\s*(?:Refrain|Chorus|ध्रुवपद|\(?(\d+)\)?[\.\)])\s*:?\s*/i);
      let tCount = 1;
      for (let i = 1; i < tParts.length; i += 2) {
        const num = String(tCount++);
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

    // Parse Hindi translations if present directly on song object
    const hindiTransMap = new Map();
    const rawHindiTrans = (typeof song.hindiTranslation === 'string' && !song.hindiTranslation.includes('<div')) ? song.hindiTranslation : '';
    if (rawHindiTrans) {
      const normHT = rawHindiTrans.replace(/\r\n/g, '\n');
      if (normHT.match(/(?:^|\n)\s*\(?\d+\)?[\.\)]\s*/)) {
        const hParts = normHT.split(/(?:^|\n)\s*\(?(\d+)\)?[\.\)]\s*/);
        for (let i = 1; i < hParts.length; i += 2) {
          const num = hParts[i];
          const txt = (hParts[i + 1] || '').trim();
          if (txt) hindiTransMap.set(num, txt);
        }
      } else {
        const hParas = normHT.split(/\n\s*\n+/);
        hParas.forEach((p, idx) => {
          const pt = p.trim();
          if (pt) hindiTransMap.set(String(idx + 1), pt);
        });
      }
    }

    // If rawTranslation is in Hindi, also populate hindiTransMap
    if (isTransHindi && transMap.size > 0) {
      for (const [k, v] of transMap.entries()) {
        if (!hindiTransMap.has(k)) {
          hindiTransMap.set(k, v);
        }
      }
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

    // Build Ultra-Compact Stanzas Flow with Script Switcher (Devanagari by default)
    const flowHtml = `
      <div class="vs-song-flow">
        <!-- Master Control Toolbar with Script Switcher -->
        <div class="vs-global-bar">
          <div class="vs-script-toggle-group">
            <button type="button" class="vs-script-btn ${this.vsScriptMode === 'devanagari' ? 'active' : ''}" data-script="devanagari" onclick="window.app.setVsScriptMode('devanagari')" title="देवनागरी (हिन्दी) लिपि में देखें">
              🕉️ हिन्दी (देवनागरी)
            </button>
            <button type="button" class="vs-script-btn ${this.vsScriptMode === 'iast' ? 'active' : ''}" data-script="iast" onclick="window.app.setVsScriptMode('iast')" title="English / IAST Roman script">
              🔤 English (IAST)
            </button>
          </div>

          <div class="vs-global-actions">
            <button type="button" class="vs-master-btn" id="vsMasterTransBtn" onclick="window.app.toggleAllVsTranslations(this)" title="सभी अनुवाद दिखाएँ / छुपाएँ">
              <span class="chip-dot">●</span>
              <span>अनुवाद</span>
            </button>
            ${hasAnyWords ? `
              <button type="button" class="vs-master-btn" id="vsMasterWordsBtn" onclick="window.app.toggleAllVsWords(this)" title="सभी शब्दार्थ दिखाएँ / छुपाएँ">
                <span class="chip-dot">●</span>
                <span>शब्दार्थ</span>
              </button>
            ` : ''}
            ${hasPurport ? `
              <button type="button" class="vs-master-btn" id="vsMasterPurportBtn" onclick="window.app.toggleVsPurportDirect()" title="तात्पर्य दिखाएँ / छुपाएँ">
                <span class="chip-dot">●</span>
                <span>तात्पर्य</span>
              </button>
            ` : ''}
          </div>
        </div>

        <!-- Stanzas Flow (Clean, compact slokas) -->
        ${stanzas.map((st, idx) => {
          let transEn = '';
          if (!isTransHindi) {
            transEn = transMap.get(st.num) || (transList[idx]?.text) || (song.englishTranslation && stanzas.length === 1 ? song.englishTranslation : '');
          }
          const hasTransEn = Boolean(transEn && transEn.trim());

          let transHi = null;
          if (song.isUserEdited) {
            if (Array.isArray(song.hindiTranslations)) {
              transHi = song.hindiTranslations[idx] || null;
            } else if (typeof song.hindiTranslation === 'string' && song.hindiTranslation.trim() && !song.hindiTranslation.includes('<div')) {
              transHi = hindiTransMap.get(st.num) || (stanzas.length === 1 ? song.hindiTranslation.trim() : null);
            } else {
              transHi = null;
            }
          } else {
            if (hindiTransMap.has(st.num)) {
              transHi = hindiTransMap.get(st.num);
            } else if (isTransHindi && (transMap.get(st.num) || transList[idx]?.text)) {
              transHi = transMap.get(st.num) || transList[idx]?.text;
            } else if (Array.isArray(song.hindiTranslations) && song.hindiTranslations[idx]) {
              transHi = song.hindiTranslations[idx];
            } else if (window.VsTranslationsHindi && window.VsTranslationsHindi.getHindiTranslation) {
              transHi = window.VsTranslationsHindi.getHindiTranslation(song, idx) ||
                        window.VsTranslationsHindi.getHindiTranslation(song.id, idx) ||
                        window.VsTranslationsHindi.getHindiTranslation(song.songNumber, idx) ||
                        window.VsTranslationsHindi.getHindiTranslation(song.verseKey, idx) ||
                        window.VsTranslationsHindi.getHindiTranslation(song.title, idx);
            }
            if (!transHi && rawHindiTrans && stanzas.length === 1) {
              transHi = rawHindiTrans;
            }
          }
          const hasTransHi = Boolean(transHi && transHi.trim());

          // Match words to stanza if any
          const stanzaWords = wordList.filter(w => st.text.toLowerCase().includes(w.sanskrit.toLowerCase()));
          const effectiveWords = (stanzaWords.length > 0) ? stanzaWords : (idx === 0 && wordList.length > 0 ? wordList : []);
          const hasWords = effectiveWords.length > 0;

          const iastHtml = this.escapeHtml(st.text).replace(/\n/g, '<br>');
          
          let devaText = '';
          if (song.isUserEdited) {
            if (Array.isArray(song.hindiDevanagariStanzas) && song.hindiDevanagariStanzas[idx]) {
              devaText = song.hindiDevanagariStanzas[idx];
            } else if (song.sanskritDevanagari && !song.sanskritDevanagari.includes('<div') && stanzas.length === 1) {
              devaText = song.sanskritDevanagari;
            } else {
              devaText = (window.IastTransliteration && window.IastTransliteration.toDevanagari)
                ? window.IastTransliteration.toDevanagari(st.text)
                : st.text;
            }
          } else {
            const authenticDeva = hindiMeta?.transliterations?.[idx];
            devaText = authenticDeva || ((window.IastTransliteration && window.IastTransliteration.toDevanagari)
              ? window.IastTransliteration.toDevanagari(st.text)
              : st.text);
          }
          const devaHtml = this.escapeHtml(devaText).replace(/\n/g, '<br>');

          const hasAnyTrans = hasTransHi || hasTransEn;

          return `
            <div class="vs-stanza-unit" id="vs-stanza-${st.num}">
              <div class="vs-stanza-header-row">
                <span class="vs-stanza-badge">— ${st.num} —</span>
              </div>

              <div class="vs-stanza-lyrics">
                <div class="vs-lyrics-deva" style="display: ${this.vsScriptMode === 'devanagari' ? 'block' : 'none'};">${devaHtml}</div>
                <div class="vs-lyrics-iast" style="display: ${this.vsScriptMode === 'iast' ? 'block' : 'none'};">${iastHtml}</div>
              </div>

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

              ${hasAnyTrans ? `
                <div class="vs-stanza-trans-drawer" id="drawer-vs-trans-${st.num}" data-has-hi="${hasTransHi ? '1' : '0'}" data-has-en="${hasTransEn ? '1' : '0'}" style="display: none;">
                  <div class="vs-stanza-trans-box">
                    <span class="vs-trans-book-icon">📖</span>
                    <div class="vs-trans-text-wrap">
                      <span class="vs-trans-hindi" style="display: ${this.vsScriptMode === 'devanagari' ? 'inline' : 'none'};">
                        ${hasTransHi ? this.escapeHtml(transHi).replace(/\n/g, '<br>') : '<span style="color: var(--text-muted); font-style: italic;">(इस पद का हिन्दी अनुवाद उपलब्ध नहीं है)</span>'}
                      </span>
                      <span class="vs-trans-en" style="display: ${this.vsScriptMode === 'iast' ? 'inline' : 'none'};">
                        ${hasTransEn ? this.escapeHtml(transEn).replace(/\n/g, '<br>') : '<span style="color: var(--text-muted); font-style: italic;">(English translation not available)</span>'}
                      </span>
                    </div>
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
    if (!song.sanskritDevanagari || song.sanskritDevanagari.includes('<div')) {
      song.sanskritDevanagari = (Array.isArray(song.hindiDevanagariStanzas) && song.hindiDevanagariStanzas.length > 0)
        ? song.hindiDevanagariStanzas.map((t, idx) => `(${idx + 1})\n${t}`).join('\n\n')
        : (stanzas.map(st => `(${st.num})\n${st.text}`).join('\n\n'));
    }
    song.sanskritIAST = ''; // Never duplicate!
    if (!song.isUserEdited) {
      song.hindiPurport = rawPurport;
    }
    if (wordList.length > 0) {
      song.wordToWord = wordList;
    }
    song.parsed = true;
    return song;
  }

  // Set Vaishnava Song Script Mode (Devanagari vs English IAST)
  setVsScriptMode(mode) {
    this.vsScriptMode = mode;
    localStorage.setItem('vedabase_vs_script', mode);

    document.querySelectorAll('.vs-lyrics-deva').forEach(el => {
      el.style.display = (mode === 'devanagari') ? 'block' : 'none';
    });
    document.querySelectorAll('.vs-lyrics-iast').forEach(el => {
      el.style.display = (mode === 'iast') ? 'block' : 'none';
    });

    document.querySelectorAll('.vs-stanza-trans-drawer').forEach(d => {
      const hiEl = d.querySelector('.vs-trans-hindi');
      const enEl = d.querySelector('.vs-trans-en');
      if (hiEl) hiEl.style.display = (mode === 'devanagari') ? 'inline' : 'none';
      if (enEl) enEl.style.display = (mode === 'iast') ? 'inline' : 'none';
    });

    document.querySelectorAll('.vs-script-btn').forEach(btn => {
      if ((mode === 'devanagari' && btn.dataset.script === 'devanagari') || (mode === 'iast' && btn.dataset.script === 'iast')) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const presDeva = document.getElementById('presVsScriptDeva');
    const presIast = document.getElementById('presVsScriptIast');
    if (presDeva) presDeva.classList.toggle('active', mode === 'devanagari');
    if (presIast) presIast.classList.toggle('active', mode === 'iast');

    if (this.isPresentationOpen && this.currentBook === 'VS') {
      this.renderPresentationSlide(true);
    }
  }

  // Toggle Mini Popover Menu for Vaishnava Songs Script & Translation in Presentation Mode
  togglePresVsLangPopover() {
    const pop = document.getElementById('presVsLangPopover');
    const btn = document.getElementById('btnPresVsLangToggle');
    if (!pop) return;

    const isHidden = pop.style.display === 'none' || !pop.style.display;
    pop.style.display = isHidden ? 'flex' : 'none';
    if (btn) btn.classList.toggle('active', isHidden);

    if (isHidden) {
      const closeHandler = (e) => {
        if (!pop.contains(e.target) && !btn?.contains(e.target)) {
          pop.style.display = 'none';
          if (btn) btn.classList.remove('active');
          document.removeEventListener('click', closeHandler);
        }
      };
      setTimeout(() => {
        document.addEventListener('click', closeHandler);
      }, 50);
    }
  }

  // Toggle all translations in the Vaishnava song
  toggleAllVsTranslations(masterBtn) {
    if (this.isPresentationOpen && this.currentBook === 'VS') {
      const s = this.currentSloka;
      const isDeva = (this.vsScriptMode !== 'iast');
      const hasAnyHi = s?.stanzas?.some((_, idx) => Boolean(window.VsTranslationsHindi?.getHindiTranslation(s, idx)));
      const hasAnyEn = Boolean(s?.translations && s.translations.length > 0);

      if (isDeva && !hasAnyHi && !hasAnyEn) {
        this.showToast('ℹ️ इस भजन का अनुवाद उपलब्ध नहीं है');
        return;
      }
      if (!isDeva && !hasAnyEn && !hasAnyHi) {
        this.showToast('ℹ️ Translation is not available for this song');
        return;
      }

      this.presVsShowTrans = !this.presVsShowTrans;
      this.renderPresentationSlide(true);
      return;
    }

    const drawers = document.querySelectorAll('.vs-stanza-trans-drawer');
    if (drawers.length === 0) {
      this.showToast('ℹ️ इस भजन का अनुवाद उपलब्ध नहीं है');
      return;
    }

    const matchingDrawers = Array.from(drawers).filter(d => {
      return (this.vsScriptMode === 'devanagari') ? (d.dataset.hasHi === '1' || d.dataset.hasEn === '1') : (d.dataset.hasEn === '1' || d.dataset.hasHi === '1');
    });

    if (matchingDrawers.length === 0) {
      this.showToast('ℹ️ इस भजन का अनुवाद उपलब्ध नहीं है');
      return;
    }

    let anyOpen = matchingDrawers.some(d => d.style.display !== 'none');
    const newDisplay = anyOpen ? 'none' : 'block';
    const newActive = !anyOpen;

    matchingDrawers.forEach(d => {
      d.style.display = newDisplay;
    });

    const mBtn = document.getElementById('vsMasterTransBtn');
    if (mBtn) mBtn.classList.toggle('active', newActive);
    const presBtn = document.getElementById('presVsTransBtn');
    if (presBtn) presBtn.classList.toggle('active', newActive);
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
    const newActive = !anyOpen;

    drawers.forEach(d => {
      d.style.display = newDisplay;
    });

    const mBtn = document.getElementById('vsMasterWordsBtn');
    if (mBtn) mBtn.classList.toggle('active', newActive);
    const presBtn = document.getElementById('presVsWordsBtn');
    if (presBtn) presBtn.classList.toggle('active', newActive);
  }

  // Toggle 3rd arrow for Song Purport
  toggleVsPurport() {
    const drawer = document.getElementById('vsPurportMainDrawer');
    const arrow = document.getElementById('vsPurportMainArrow');
    if (!drawer) return;

    const isHidden = drawer.style.display === 'none' || !drawer.style.display;
    drawer.style.display = isHidden ? 'block' : 'none';
    if (arrow) arrow.textContent = isHidden ? '▴' : '▾';

    const mBtn = document.getElementById('vsMasterPurportBtn');
    if (mBtn) mBtn.classList.toggle('active', isHidden);
    const presBtn = document.getElementById('presVsPurportBtn');
    if (presBtn) presBtn.classList.toggle('active', isHidden);
  }

  // Direct toggle purport from top master button
  toggleVsPurportDirect() {
    const unit = document.getElementById('vsSongPurportUnit');
    this.toggleVsPurport();
    if (unit) unit.scrollIntoView({ behavior: 'smooth', block: 'center' });
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

          // Clear maps to prevent ANY duplicate entries
          this.vsMap.clear();
          this.vsAuthorMap.clear();
          this.vsBookMap.clear();

          for (let i = 0; i < songs.length; i++) {
            const s = songs[i];
            const originalSongbook = s.book || 'Vaishnava Songs';
            s.songbook = originalSongbook;
            s.book = originalSongbook; // Preserve real songbook
            s.scripture = 'VS';
            const num = s.songNumber || (i + 1);
            const id = s.id || `vs-${num}`;
            s.id = id;
            s.verseKey = `VS ${num}`;

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

            const bk = originalSongbook;
            if (!this.vsBookMap.has(bk)) this.vsBookMap.set(bk, []);
            this.vsBookMap.get(bk).push(s);

            const existsIdx = this.allSlokas.findIndex(x => x.id === id);
            if (existsIdx >= 0) this.allSlokas[existsIdx] = s;
            else this.allSlokas.push(s);
          }

          if (window.searchEngine) {
            window.searchEngine.appendIndex(songs);
          }

          // Initialize local authentic 343+ Hindi songs translations dataset
          if (window.VsTranslationsHindi && window.VsTranslationsHindi.init) {
            window.VsTranslationsHindi.init();
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

            const existsIdx = this.allSlokas.findIndex(x => x.id === id);
            if (existsIdx >= 0) {
              this.allSlokas[existsIdx] = s;
            } else {
              this.allSlokas.push(s);
              newSlokas.push(s);
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

    // Sanitize any broken localStorage edits
    try {
      const edits = this.getUserCustomEdits();
      let changed = false;
      for (const k of Object.keys(edits)) {
        if (k.startsWith('vs-') || k.startsWith('vs ') || !isNaN(Number(k))) {
          const item = edits[k];
          if (!item || !item.body || item.body.trim().startsWith('TRANSLATION') || item.body.trim().startsWith('\nTRANSLATION') || item.body.includes('<div class="vs-song-flow">')) {
            delete edits[k];
            changed = true;
          }
        }
      }
      if (changed) {
        localStorage.setItem('vedabase_user_custom_edits', JSON.stringify(edits));
      }
    } catch (e) {}

    this.setupTheme();
    this.bindEvents();
    this.initFirebaseIntegration();
    this.setupAudioPlayer();
    this.renderSidebar();

    // 1. Determine initial verse
    let initialVerseKey = 'bg 1.1';
    try {
      const savedKey = localStorage.getItem('vedabase_last_verse');
      if (savedKey) initialVerseKey = savedKey;
    } catch (e) {}

    // 2. Load the requested initial verse immediately (instant startup < 30ms)
    try {
      await this.loadVerseByKey(initialVerseKey);
    } catch (e) {
      console.warn('Initial verse load error, falling back to bg 1.1:', e);
      await this.loadVerseByKey('bg 1.1');
    }

    // 3. Preload all other scriptures and cantos in background without blocking UI
    setTimeout(async () => {
      try {
        if (!this.isBgLoaded) await this.ensureBgLoaded();
        if (!this.isIsoLoaded) await this.ensureIsoLoaded();
        if (!this.isCcLoaded) await this.ensureCcLoaded();
        if (!this.isVsLoaded) await this.ensureVsLoaded();
        this.preloadAllCantosInBackground();
      } catch (e) {
        console.warn('Background preload:', e);
      }
    }, 50);
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
            title="${ch.name} (${ch.totalVerses} Verses)">
            <div style="font-weight: 600;">अध्याय ${ch.chapter}: ${ch.name}</div>
            <div style="font-size: 0.725rem; color: var(--accent-gold);">${ch.totalVerses} Verses</div>
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
                  title="${ch.name} (${ch.totalVerses} Verses)">
                  <div style="font-weight: 600;">अध्याय ${ch.chapter}: ${ch.name}</div>
                  <div style="font-size: 0.725rem; color: var(--accent-gold);">${ch.totalVerses} Verses</div>
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
                  title="${ch.name} (${ch.totalVerses} Verses)">
                  <div style="font-weight: 600;">अध्याय ${ch.chapter}: ${ch.name}</div>
                  <div style="font-size: 0.725rem; color: var(--accent-gold);">${ch.totalVerses} Verses</div>
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
      const isOpening = !target.classList.contains('expanded');
      target.classList.toggle('expanded');
      
      if (scriptureId === 'scriptureGroupVS' && isOpening) {
        this.renderVsSidebar();
        if (this.currentBook !== 'VS') {
          this.loadVsSong(this.currentSloka?.songNumber || 1);
        }
      }
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
  // Fast filter for Vaishnava Songs sidebar list
  filterVsSidebar(query) {
    const listEl = document.getElementById('vsAllSongsList');
    if (!listEl) return;
    const q = (query || '').toLowerCase().trim();
    const items = listEl.querySelectorAll('li');
    items.forEach(li => {
      if (!q) {
        li.style.display = '';
        return;
      }
      const text = (li.textContent || '').toLowerCase();
      li.style.display = text.includes(q) ? '' : 'none';
    });
  }

  // Render Vaishnava Songs Sidebar: Direct list of all songs from 1 to end
  renderVsSidebar() {
    const vsContainer = document.getElementById('vsSongListContainer');
    if (!vsContainer) return;

    const songsIndex = window.VS_SONGS_INDEX || [];
    const totalCount = songsIndex.length || 271;

    const songsHtml = songsIndex.map(s => {
      const isCur = this.currentBook === 'VS' && (this.currentSloka?.songNumber === s.num || this.currentSloka?.id === s.id);
      return `
        <li data-song-num="${s.num}">
          <button class="chapter-btn ${isCur ? 'active' : ''}"
            id="vs-song-btn-${s.num}"
            onclick="window.app.loadVsSong(${s.num})"
            title="${this.escapeHtml(s.title)} (${this.escapeHtml(s.authorHi || s.author || '')})">
            <div style="font-weight: 600; font-size: 0.825rem; line-height: 1.35;">
              <span style="color: var(--accent-gold); font-weight: 700; margin-right: 0.35rem;">#${s.num}</span>
              <span>${this.escapeHtml(s.title)}</span>
            </div>
            <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.2rem; display: flex; justify-content: space-between;">
              <span>${this.escapeHtml(s.authorHi || s.author || '')}</span>
              <span style="opacity: 0.8;">${this.escapeHtml(s.book || 'Vaishnava Songs')}</span>
            </div>
          </button>
        </li>
      `;
    }).join('');

    vsContainer.innerHTML = `
      <div style="padding: 0.4rem 0.25rem 0.6rem; position: sticky; top: 0; background: var(--bg-sidebar, #fff); z-index: 5;">
        <input type="text" id="vsSidebarSearchInput"
          placeholder="🔍 Search song title or number (1 - ${totalCount})..."
          oninput="window.app.filterVsSidebar(this.value)"
          class="form-control"
          style="font-size: 0.8rem; padding: 0.45rem 0.65rem; border-radius: 6px; width: 100%; border: 1px solid var(--border-color); background: var(--bg-card); color: var(--text-color); box-sizing: border-box;">
      </div>
      <ul class="chapter-sublist" id="vsAllSongsList" style="display: block; padding-right: 0.25rem;">
        ${songsHtml}
      </ul>
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

  // Load Author by manifest index
  async loadVsAuthorIndex(idx) {
    await this.ensureVsLoaded();
    const manifest = window.VS_MANIFEST || {};
    const authors = manifest.authors || [];
    const a = authors[idx];
    if (a) {
      await this.loadVsByAuthor(a.name, a.nameHindi);
    }
  }

  // Load Songbook by manifest index
  async loadVsBookIndex(idx) {
    await this.ensureVsLoaded();
    const manifest = window.VS_MANIFEST || {};
    const songbooks = manifest.songbooks || [];
    const b = songbooks[idx];
    if (b) {
      await this.loadVsByBook(b.name);
    }
  }

  // Load songs by Author
  async loadVsByAuthor(authorName, authorHindi) {
    await this.ensureVsLoaded();
    let songs = [];
    if (authorName && this.vsAuthorMap.has(authorName)) {
      songs = this.vsAuthorMap.get(authorName);
    }
    if (!songs || songs.length === 0) {
      const qLower = String(authorName || '').toLowerCase().trim();
      const hLower = String(authorHindi || '').trim();
      songs = this.vsSlokas.filter(s => {
        const sAuth = String(s.author || '').toLowerCase().trim();
        const sAuthHi = String(s.authorHindi || '').trim();
        return (qLower && sAuth === qLower) ||
               (hLower && sAuthHi === hLower) ||
               (qLower && sAuth.includes(qLower)) ||
               (hLower && sAuthHi.includes(hLower)) ||
               (qLower && qLower.includes(sAuth)) ||
               (hLower && hLower.includes(sAuthHi));
      });
    }

    if (songs && songs.length > 0) {
      this.currentBook = 'VS';
      this.currentVsFilterType = 'author';
      this.currentVsFilterVal = authorName || songs[0].author;
      this.chapterSlokas = songs;
      songs[0].parsed = false;
      await this.displaySloka(songs[0]);
      this.highlightActiveSidebar();
    } else {
      this.showToast(`'${authorHindi || authorName}' के भजन उपलब्ध नहीं हैं।`);
    }
  }

  // Load songs by Songbook
  async loadVsByBook(bookName) {
    await this.ensureVsLoaded();
    let songs = [];
    if (bookName && this.vsBookMap.has(bookName)) {
      songs = this.vsBookMap.get(bookName);
    }
    if (!songs || songs.length === 0) {
      const qLower = String(bookName || '').toLowerCase().trim();
      songs = this.vsSlokas.filter(s => {
        const sBook = String(s.songbook || s.book || s.rawBook || '').toLowerCase().trim();
        return (qLower && sBook === qLower) ||
               (qLower && sBook.includes(qLower)) ||
               (qLower && qLower.includes(sBook));
      });
    }

    if (songs && songs.length > 0) {
      this.currentBook = 'VS';
      this.currentVsFilterType = 'book';
      this.currentVsFilterVal = bookName || songs[0].book;
      this.chapterSlokas = songs;
      songs[0].parsed = false;
      await this.displaySloka(songs[0]);
      this.highlightActiveSidebar();
    } else {
      this.showToast(`'${bookName}' के भजन उपलब्ध नहीं हैं।`);
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
      song = this.vsMap.get(sId) || this.vsSlokas.find(s => s.id?.toLowerCase() === sId || s.title?.toLowerCase() === sId);
    }

    if (song) {
      this.currentBook = 'VS';
      this.chapterSlokas = this.vsSlokas;
      this.currentVsFilterType = null;
      this.currentVsFilterVal = null;
      song.parsed = false;
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
    try {
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

        const curNum = this.currentSloka?.songNumber;
        const vsContainer = document.getElementById('vsSongListContainer');
        if (vsContainer) {
          const activeBtns = vsContainer.querySelectorAll('.chapter-btn.active');
          activeBtns.forEach(btn => btn.classList.remove('active'));

          if (curNum) {
            const songBtn = document.getElementById(`vs-song-btn-${curNum}`);
            if (songBtn) {
              songBtn.classList.add('active');
              songBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
          }
        }
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
        document.querySelectorAll('#cantoListContainer .canto-item').forEach(el => {
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
    } catch (e) {
      console.warn('highlightActiveSidebar error:', e);
    }
  }

  // Display a Sloka in the main reader area
  async displaySloka(sloka) {
    if (window.vedabaseFirebase && typeof window.vedabaseFirebase.getOverrideForSloka === 'function') {
      const ov = window.vedabaseFirebase.getOverrideForSloka(sloka);
      if (ov) {
        Object.assign(sloka, ov, { isCloudApproved: true });
      }
    }
    this.currentSloka = sloka;
    const isCC = sloka.book === 'CC' || (sloka.id && String(sloka.id).startsWith('cc-'));
    const isISO = !isCC && (sloka.book === 'ISO' || (sloka.id && String(sloka.id).startsWith('iso-')));
    const isVS = !isCC && !isISO && (sloka.scripture === 'VS' || sloka.book === 'VS' || (sloka.id && String(sloka.id).startsWith('vs-')) || Boolean(sloka.songNumber) || Boolean(sloka.songbook));
    const isBG = !isCC && !isISO && !isVS && (sloka.book === 'BG' || (sloka.id && String(sloka.id).startsWith('bg-')) || (!sloka.canto && !sloka.lila));

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
        if (!sloka.parsed || !sloka.formattedStanzasHtml) {
          this.parseSongBody(sloka);
        }
        sanskritEl.innerHTML = this.highlightInHtml(sloka.formattedStanzasHtml || sloka.sanskritDevanagari, this.currentHighlightWord) || 'Song text not available.';
      } else {
        sanskritEl.innerHTML = this.highlightInText(this.cleanSanskritText(sloka.sanskritDevanagari), this.currentHighlightWord) || 'Verse text not available';
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
          wordGrid.innerHTML = '<span style="color: var(--text-muted); font-size: 0.9rem;">Word-for-word meanings not available.</span>';
        }
      }

      // Hindi Translation
      const transEl = document.getElementById('hindiTranslation');
      if (transEl) {
        transEl.innerHTML = this.highlightInHtml(this.renderParagraphs(sloka.hindiTranslation), this.currentHighlightWord) || 'Translation not available.';
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

    const labelEl = document.getElementById('verseSelectorLabel');
    if (labelEl) {
      if (this.currentBook === 'VS') {
        if (this.currentVsFilterType === 'daily' || this.currentVsFilterType === 'author' || this.currentVsFilterType === 'book') {
          labelEl.textContent = 'गीत (Songs):';
        } else {
          labelEl.textContent = 'पद (Stanzas):';
        }
      } else if (this.currentBook === 'ISO') {
        labelEl.textContent = 'मंत्र (Mantras):';
      } else if (this.currentBook === 'CC') {
        labelEl.textContent = 'पयार (Verses):';
      } else {
        labelEl.textContent = 'श्लोक (Verses):';
      }
    }

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
              onclick="window.app.loadVsSong('${s.id}')"
              title="${this.escapeHtml(s.titleHindi || s.title || '')} (${this.escapeHtml(s.authorHindi || s.author || '')})">
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
          const endNum = Math.min(this.vsSlokas?.length || 271, curNum + 15);
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
        counter.textContent = `नित्य आरती ${(this.currentVsDailyIndex !== null && this.currentVsDailyIndex !== undefined) ? this.currentVsDailyIndex + 1 : 1} / ${totalDaily}`;
      } else if (this.currentVsFilterType === 'author' || this.currentVsFilterType === 'book') {
        const list = Array.isArray(this.chapterSlokas) && this.chapterSlokas.length > 0 ? this.chapterSlokas : (this.vsSlokas || []);
        const curIdx = list.findIndex(s => s && ((s.id && s.id === this.currentSloka?.id) || (s.songNumber && s.songNumber === this.currentSloka?.songNumber)));
        const pos = curIdx >= 0 ? curIdx + 1 : 1;
        counter.textContent = `गीत ${pos} / ${list.length}`;
      } else {
        const totalV = this.vsSlokas?.length || 271;
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
        if (currentNum < (this.vsSlokas?.length || 271)) {
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
      this.showToast('📋 Verse copied to clipboard!');
    }).catch(() => {
      this.showToast('Failed to copy to clipboard.');
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
      list.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 2rem;">No verses or songs found for "${this.escapeHtml(trimmed || '')}".</div>`;
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
    this.showToast('📽️ Presentation Mode Active (Press ☰ or M for controls)');
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
    const s = this.currentSloka;
    const isVS = Boolean(s && (s.book === 'VS' || s.id?.startsWith('vs-') || this.currentBook === 'VS'));

    const presWordsBox = document.getElementById('presWordsBox');
    const presTranslationBox = document.getElementById('presTranslationBox');
    const presPurportBox = document.getElementById('presPurportBox');
    const togglePresWords = document.getElementById('togglePresWords');
    const togglePresTranslation = document.getElementById('togglePresTranslation');
    const togglePresPurport = document.getElementById('togglePresPurport');

    if (isVS) {
      if (presWordsBox) presWordsBox.style.display = 'none';
      if (presTranslationBox) presTranslationBox.style.display = 'none';
      if (presPurportBox) presPurportBox.style.display = 'none';
      if (togglePresWords) togglePresWords.style.display = 'none';
      if (togglePresTranslation) togglePresTranslation.style.display = 'none';
      if (togglePresPurport) togglePresPurport.style.display = 'none';
      return;
    } else {
      if (togglePresWords) togglePresWords.style.display = 'inline-flex';
      if (togglePresTranslation) togglePresTranslation.style.display = 'inline-flex';
      if (togglePresPurport) togglePresPurport.style.display = 'inline-flex';
    }

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

  renderPresentationSlide(keepScroll = false) {
    if (!this.currentSloka) return;
    const s = this.currentSloka;
    const isCC = s.book === 'CC' || s.id?.startsWith('cc-');
    const isISO = !isCC && (s.book === 'ISO' || s.id?.startsWith('iso-'));
    const isVS = !isCC && !isISO && (s.book === 'VS' || s.id?.startsWith('vs-'));
    const isBG = !isCC && !isISO && !isVS && (s.book === 'BG' || s.id?.startsWith('bg-'));

    const overlay = document.getElementById('presentationOverlay');
    if (overlay) overlay.classList.toggle('is-vs', !!isVS);

    const stage = document.getElementById('presentationStage');
    const prevScroll = (stage && keepScroll) ? stage.scrollTop : 0;

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
        const totalV = this.vsSlokas?.length || 271;
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
        presSanskrit.innerHTML = this.renderVsPresentationSlide(s);
      } else {
        presSanskrit.innerHTML = this.highlightInText(this.cleanSanskritText(s.sanskritDevanagari), this.currentHighlightWord) || 'Verse text not available';
      }
    }

    const presTranslation = document.getElementById('presTranslation');
    if (presTranslation) {
      if (isVS) {
        presTranslation.innerHTML = '';
      } else {
        presTranslation.innerHTML = this.highlightInHtml(this.renderParagraphs(s.hindiTranslation), this.currentHighlightWord) || 'Translation not available';
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
        presWordsGrid.innerHTML = '<div style="color: var(--text-muted); font-size: 0.9rem;">Word-for-word meanings not available</div>';
      }
    }

    const presPurport = document.getElementById('presPurport');
    if (presPurport) {
      presPurport.innerHTML = s.hindiPurport ? this.highlightInHtml(this.renderParagraphs(s.hindiPurport), this.currentHighlightWord) : '<p style="color: var(--text-muted);">Purport not available</p>';
    }

    const presVsFloatingBar = document.getElementById('presVsFloatingBar');
    const presWordsBox = document.getElementById('presWordsBox');
    const presTranslationBox = document.getElementById('presTranslationBox');
    const presPurportBox = document.getElementById('presPurportBox');

    if (isVS) {
      const langTrigger = document.getElementById('btnPresVsLangToggle');
      if (langTrigger) langTrigger.style.display = 'flex';

      const btnDeva = document.getElementById('presVsScriptDeva');
      const btnIast = document.getElementById('presVsScriptIast');
      if (btnDeva) btnDeva.classList.toggle('active', this.vsScriptMode === 'devanagari');
      if (btnIast) btnIast.classList.toggle('active', this.vsScriptMode === 'iast');

      const presTransBtn = document.getElementById('presVsTransBtn');
      const presTransBtnLabel = document.getElementById('presVsTransBtnLabel');
      if (presTransBtn) presTransBtn.classList.toggle('active', !!this.presVsShowTrans);
      if (presTransBtnLabel) presTransBtnLabel.textContent = this.presVsShowTrans ? 'अनुवाद छुपाएँ (Hide)' : 'अनुवाद दिखाएँ (Show)';

      // Hide separate outer presentation boxes for VS (everything is compact inline inside stanzas)
      if (presWordsBox) presWordsBox.style.display = 'none';
      if (presTranslationBox) presTranslationBox.style.display = 'none';
      if (presPurportBox) presPurportBox.style.display = 'none';
    } else {
      const langTrigger = document.getElementById('btnPresVsLangToggle');
      const popover = document.getElementById('presVsLangPopover');
      if (langTrigger) langTrigger.style.display = 'none';
      if (popover) popover.style.display = 'none';
      this.applyPresSectionVisibility();
    }

    this.applyPresSlideDetailsVisibility();
    this.applyPresFontSize();
    this.triggerHighlightFadeTimer();

    if (stage) {
      if (keepScroll && prevScroll > 0) {
        stage.scrollTop = prevScroll;
      } else if (!keepScroll) {
        stage.scrollTop = 0;
      }
    }
  }

  // Render dedicated majestic slide typography for Vaishnava Songs
  renderVsPresentationSlide(s) {
    if (!s) return '';
    let stanzas = s.stanzas || [];
    let validStanzas = stanzas.filter(st => st && st.text && st.text.trim() && st.text.trim() !== '\\');
    if (validStanzas.length === 0) {
      if (s.isUserEdited && Array.isArray(s.hindiDevanagariStanzas) && s.hindiDevanagariStanzas.length > 0) {
        validStanzas = s.hindiDevanagariStanzas.map((t, idx) => ({
          num: String(idx + 1),
          text: t
        }));
        s.stanzas = validStanzas;
      } else {
        const hindiMeta = (window.VsTranslationsHindi && window.VsTranslationsHindi.getHindiMetadata)
          ? (window.VsTranslationsHindi.getHindiMetadata(s.id) || window.VsTranslationsHindi.getHindiMetadata(s.songNumber) || window.VsTranslationsHindi.getHindiMetadata(s.verseKey))
          : null;
        if (hindiMeta && Array.isArray(hindiMeta.transliterations) && hindiMeta.transliterations.length > 0) {
          validStanzas = hindiMeta.transliterations.map((t, idx) => ({
            num: String(idx + 1),
            text: t
          }));
          s.stanzas = validStanzas;
        }
      }
    }
    stanzas = validStanzas;

    const transList = s.translations || [];
    const isDeva = (this.vsScriptMode !== 'iast');
    const showTrans = Boolean(this.presVsShowTrans);

    return `
      <div class="pres-vs-slide-container">
        ${stanzas.map((st, idx) => {
          const iastText = st.text;
          let devaText = '';
          if (s.isUserEdited) {
            if (Array.isArray(s.hindiDevanagariStanzas) && s.hindiDevanagariStanzas[idx]) {
              devaText = s.hindiDevanagariStanzas[idx];
            } else if (s.sanskritDevanagari && !s.sanskritDevanagari.includes('<div') && stanzas.length === 1) {
              devaText = s.sanskritDevanagari;
            } else {
              devaText = (window.IastTransliteration && window.IastTransliteration.toDevanagari)
                ? window.IastTransliteration.toDevanagari(iastText)
                : iastText;
            }
          } else {
            const hindiMeta = (window.VsTranslationsHindi && window.VsTranslationsHindi.getHindiMetadata) ? window.VsTranslationsHindi.getHindiMetadata(s) : null;
            const authenticDeva = hindiMeta?.transliterations?.[idx];
            devaText = authenticDeva || ((window.IastTransliteration && window.IastTransliteration.toDevanagari)
              ? window.IastTransliteration.toDevanagari(iastText)
              : iastText);
          }
          const lyricsText = isDeva ? devaText : iastText;
          const lyricsHtml = this.highlightInHtml(this.escapeHtml(lyricsText).replace(/\n/g, '<br>'), this.currentHighlightWord);

          const transEn = transList[idx]?.text || (s.englishTranslation && stanzas.length === 1 ? s.englishTranslation : '');
          let transHi = null;
          if (s.isUserEdited) {
            if (Array.isArray(s.hindiTranslations)) {
              transHi = s.hindiTranslations[idx] || null;
            } else if (typeof s.hindiTranslation === 'string' && s.hindiTranslation.trim() && !s.hindiTranslation.includes('<div')) {
              transHi = idx === 0 ? s.hindiTranslation.trim() : null;
            } else {
              transHi = null;
            }
          } else {
            transHi = (window.VsTranslationsHindi && window.VsTranslationsHindi.getHindiTranslation)
              ? (window.VsTranslationsHindi.getHindiTranslation(s, idx) || window.VsTranslationsHindi.getHindiTranslation(s.id, idx) || window.VsTranslationsHindi.getHindiTranslation(s.songNumber, idx) || window.VsTranslationsHindi.getHindiTranslation(s.verseKey, idx) || window.VsTranslationsHindi.getHindiTranslation(s.title, idx))
              : null;
          }
          const activeTrans = isDeva ? transHi : transEn;
          const hasActiveTrans = Boolean(activeTrans && activeTrans.trim());

          const stanzaLabel = `— ${st.num} —`;

          return `
            <div class="pres-vs-stanza-block" id="pres-vs-st-${st.num}">
              <div class="pres-vs-stanza-num">${stanzaLabel}</div>
              <div class="pres-vs-stanza-lyrics">${lyricsHtml}</div>
              ${(showTrans && hasActiveTrans) ? `
                <div class="pres-vs-stanza-trans">
                  <span>📖</span>
                  <span>${this.escapeHtml(activeTrans).replace(/\n/g, '<br>')}</span>
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;
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

  // Open Edit Modal for current verse / song
  openEditCurrentVerseModal() {
    if (!this.currentSloka) {
      this.showToast('सम्पादित करने के लिए कोई श्लोक/गीत चयनित नहीं है।');
      return;
    }

    const sloka = this.currentSloka;
    const isVS = this.currentBook === 'VS' || this.currentBook === 'VAISHNAVA_SONGS' || sloka.book === 'VS' || sloka.id?.startsWith('vs-') || (sloka.songNumber !== undefined && !sloka.canto);
    const isCC = !isVS && (this.currentBook === 'CC' || sloka.book === 'CC' || sloka.id?.startsWith('cc-'));
    const isISO = !isVS && !isCC && (this.currentBook === 'ISO' || sloka.book === 'ISO' || sloka.id?.startsWith('iso-'));
    const isBG = !isVS && !isCC && !isISO && (this.currentBook === 'BG' || sloka.book === 'BG' || sloka.id?.startsWith('bg-'));

    const titleEl = document.getElementById('editModalTitle');
    const slokaChips = document.getElementById('editSlokaChips');
    const songChips = document.getElementById('editSongChips');
    const vsMetaFields = document.getElementById('editVsMetaFields');
    const wordGroup = document.getElementById('editWordToWordGroup');
    const sanskritLabel = document.getElementById('editSanskritLabel');
    const transLabel = document.getElementById('editTranslationLabel');
    const purportLabel = document.getElementById('editPurportLabel');

    if (isVS) {
      const sNum = sloka.songNumber || sloka.id?.replace(/^vs-/, '') || '';
      if (titleEl) titleEl.textContent = `✏️ Edit Song (#${sNum} - ${sloka.title || ''})`;

      if (slokaChips) slokaChips.style.display = 'none';
      if (songChips) songChips.style.display = 'flex';
      if (vsMetaFields) vsMetaFields.style.display = 'block';

      const sNumBadge = document.getElementById('editSongNumBadge');
      const sAuthorBadge = document.getElementById('editSongAuthorBadge');
      const sBookBadge = document.getElementById('editSongBookBadge');
      if (sNumBadge) sNumBadge.textContent = `#${sNum}`;
      if (sAuthorBadge) sAuthorBadge.textContent = sloka.authorHindi || sloka.author || 'वैष्णव';
      if (sBookBadge) sBookBadge.textContent = sloka.book || 'वैष्णव पदावली';

      document.getElementById('editVsTitle').value = sloka.title || '';
      document.getElementById('editVsAuthor').value = sloka.authorHindi || sloka.author || '';
      document.getElementById('editVsBook').value = sloka.book || '';
      document.getElementById('editSongNumber').value = sNum;
      document.getElementById('editSongId').value = sloka.id || `vs-${sNum}`;
      document.getElementById('editCanto').value = -3; // Indicator for VS
      document.getElementById('editChapter').value = 1;
      document.getElementById('editVerse').value = sNum;
      document.getElementById('editVerseKey').value = `vs-${sNum}`;

      const vsIastGroup = document.getElementById('editVsIastGroup');
      if (vsIastGroup) vsIastGroup.style.display = 'block';

      if (sanskritLabel) sanskritLabel.innerHTML = `<span>🕉️ Devanagari Song Lyrics / Verse:</span>`;
      if (transLabel) transLabel.innerHTML = `<span>📖 Hindi Translation (Stanza-wise):</span>`;
      if (purportLabel) purportLabel.innerHTML = `<span>🔤 English Translation / Purport:</span>`;

      // Extract Clean Lyrics & Translations
      let lyrics = '';
      let englishTrans = '';
      let hindiTrans = '';
      let purportText = '';
      if (sloka.body) {
        const transMatch = sloka.body.match(/(?:^|\n)\s*TRANSLATION(?:S)?\s*(?:\n|:|$)/i);
        const transIdx = transMatch ? transMatch.index : -1;
        const transLen = transMatch ? transMatch[0].length : 11;

        const purportMatch = sloka.body.match(/(?:^|\n)\s*PURPORT(?:S)?\s*(?:\n|:|$)/i);
        const purportIdx = purportMatch ? purportMatch.index : -1;
        const purportLen = purportMatch ? purportMatch[0].length : 7;

        if (transIdx >= 0) {
          lyrics = sloka.body.substring(0, transIdx).trim();
          let rawTrans = '';
          if (purportIdx > transIdx) {
            rawTrans = sloka.body.substring(transIdx + transLen, purportIdx).trim();
            purportText = sloka.body.substring(purportIdx + purportLen).trim();
          } else {
            rawTrans = sloka.body.substring(transIdx + transLen).trim();
          }
          if (/[\u0900-\u097F]/.test(rawTrans)) {
            hindiTrans = rawTrans;
          } else {
            englishTrans = rawTrans;
          }
        } else {
          lyrics = sloka.body.trim();
        }
      }

      if (!lyrics || lyrics.includes('<') || lyrics === '\\') {
        if (Array.isArray(sloka.stanzas) && sloka.stanzas.length > 0) {
          lyrics = sloka.stanzas.map(st => `(${st.num})\n${st.text}`).join('\n\n');
        }
      }
      if (lyrics && lyrics.includes('<')) {
        lyrics = '';
      }

      // Check if we have transliterations from Hindi dataset
      const hindiMeta = (!sloka.isUserEdited && window.VsTranslationsHindi && window.VsTranslationsHindi.getHindiMetadata)
        ? (window.VsTranslationsHindi.getHindiMetadata(sloka) || window.VsTranslationsHindi.getHindiMetadata(sloka.id) || window.VsTranslationsHindi.getHindiMetadata(sNum) || window.VsTranslationsHindi.getHindiMetadata(sloka.title))
        : null;

      let devaLyrics = '';
      if (sloka.isUserEdited) {
        if (sloka.sanskritDevanagari && !sloka.sanskritDevanagari.includes('<div')) {
          devaLyrics = sloka.sanskritDevanagari;
        } else if (Array.isArray(sloka.hindiDevanagariStanzas) && sloka.hindiDevanagariStanzas.length > 0) {
          devaLyrics = sloka.hindiDevanagariStanzas.map((t, idx) => `(${idx + 1})\n${t}`).join('\n\n');
        } else {
          devaLyrics = '';
        }
      } else {
        if (Array.isArray(sloka.hindiDevanagariStanzas) && sloka.hindiDevanagariStanzas.length > 0) {
          devaLyrics = sloka.hindiDevanagariStanzas.map((t, idx) => `(${idx + 1})\n${t}`).join('\n\n');
        } else if (hindiMeta && Array.isArray(hindiMeta.transliterations) && hindiMeta.transliterations.length > 0) {
          devaLyrics = hindiMeta.transliterations.map((t, idx) => {
            const trimmed = String(t).trim();
            if (trimmed.startsWith('(') || trimmed.startsWith('—')) return trimmed;
            return `(${idx + 1})\n${trimmed}`;
          }).join('\n\n');
        } else if (Array.isArray(sloka.stanzas) && sloka.stanzas.length > 0) {
          devaLyrics = sloka.stanzas.map((st, idx) => {
            const authDeva = hindiMeta?.transliterations?.[idx];
            const dText = authDeva || ((window.IastTransliteration && window.IastTransliteration.toDevanagari)
              ? window.IastTransliteration.toDevanagari(st.text)
              : st.text);
            return `(${st.num})\n${dText}`;
          }).join('\n\n');
        } else if (lyrics && !lyrics.includes('<')) {
          devaLyrics = (window.IastTransliteration && window.IastTransliteration.toDevanagari)
            ? window.IastTransliteration.toDevanagari(lyrics)
            : lyrics;
        } else if (sloka.sanskritDevanagari && !sloka.sanskritDevanagari.includes('<')) {
          devaLyrics = sloka.sanskritDevanagari.trim();
        }
      }

      document.getElementById('editSanskrit').value = devaLyrics;
      const vsIastEl = document.getElementById('editVsIast');
      if (vsIastEl) vsIastEl.value = lyrics;

      // Extract Hindi Translation
      let finalHindiTrans = '';
      if (sloka.isUserEdited) {
        if (typeof sloka.hindiTranslation === 'string' && !sloka.hindiTranslation.includes('<div')) {
          finalHindiTrans = sloka.hindiTranslation;
        } else if (Array.isArray(sloka.hindiTranslations) && sloka.hindiTranslations.length > 0) {
          finalHindiTrans = sloka.hindiTranslations.map((t, idx) => `${idx + 1}) ${t}`).join('\n\n');
        } else {
          finalHindiTrans = '';
        }
      } else {
        if (sloka.hindiTranslation && typeof sloka.hindiTranslation === 'string' && sloka.hindiTranslation.trim() && !sloka.hindiTranslation.includes('<')) {
          finalHindiTrans = sloka.hindiTranslation.trim();
        } else if (Array.isArray(sloka.hindiTranslations) && sloka.hindiTranslations.length > 0) {
          finalHindiTrans = sloka.hindiTranslations.map((t, idx) => `${idx + 1}) ${t}`).join('\n\n');
        } else if (hindiMeta && Array.isArray(hindiMeta.translations) && hindiMeta.translations.length > 0) {
          finalHindiTrans = hindiMeta.translations.map((t, idx) => `${idx + 1}) ${t}`).join('\n\n');
        } else {
          finalHindiTrans = hindiTrans;
        }
      }
      document.getElementById('editTranslation').value = finalHindiTrans;

      // English Translation & Purport
      document.getElementById('editPurport').value = sloka.englishTranslation || sloka.hindiPurport || englishTrans || purportText || '';

      // Word to word
      if (Array.isArray(sloka.wordToWord) && sloka.wordToWord.length > 0) {
        if (wordGroup) wordGroup.style.display = 'block';
        document.getElementById('editWordToWord').value = sloka.wordToWord.map(w => `${w.sanskrit} — ${w.hindi}`).join(';\n');
      } else {
        if (wordGroup) wordGroup.style.display = 'none';
        document.getElementById('editWordToWord').value = '';
      }

    } else {
      // Standard Sloka Flow for SB, CC, ISO, BG
      const vsIastGroup = document.getElementById('editVsIastGroup');
      if (vsIastGroup) vsIastGroup.style.display = 'none';

      if (slokaChips) slokaChips.style.display = 'flex';
      if (songChips) songChips.style.display = 'none';
      if (vsMetaFields) vsMetaFields.style.display = 'none';
      if (wordGroup) wordGroup.style.display = 'block';

      if (sanskritLabel) sanskritLabel.innerHTML = `<span>📜 Sanskrit Devanagari / Verse Text:</span>`;
      if (transLabel) transLabel.innerHTML = `<span>📖 Hindi Translation:</span>`;
      if (purportLabel) purportLabel.innerHTML = `<span>🪔 Srila Prabhupada Purport:</span>`;

      if (titleEl) {
        if (isCC) {
          const lKey = this.getLilaKey(sloka.lila || sloka.canto || 1).toUpperCase();
          titleEl.textContent = `✏️ Edit Verse (CC ${lKey} ${sloka.chapter}.${sloka.verse})`;
        } else if (isISO) {
          titleEl.textContent = `✏️ Edit Mantra (ISO ${sloka.verseKey === 'inv' ? 'Invocation' : 'Mantra ' + sloka.verseKey})`;
        } else if (isBG) {
          titleEl.textContent = `✏️ Edit Verse (BG ${sloka.verseKey})`;
        } else {
          titleEl.textContent = `✏️ Edit Verse (SB ${sloka.verseKey})`;
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
    }

    // Configure Modal UI for suggestion submission
    const submitBtn = document.getElementById('btnSaveEditedVerse');
    if (submitBtn) {
      submitBtn.textContent = '🙏 सुझाव सबमिट करें (Submit Suggestion)';
    }

    const suggNameInput = document.getElementById('editSuggesterName');
    const suggPhoneInput = document.getElementById('editSuggesterPhone');
    const suggNotesInput = document.getElementById('editSuggesterNotes');
    if (suggNotesInput) suggNotesInput.value = '';
    if (suggPhoneInput) suggPhoneInput.value = '';
    if (suggNameInput && !suggNameInput.value) {
      suggNameInput.value = '';
    }

    this.openModal('editVerseModal');
  }

  // Save changes from Edit Sloka / Song Modal - Clean DELTA Suggestion to Firebase
  async saveEditedVerse() {
    if (!this.currentSloka) {
      this.closeAllModals();
      return;
    }

    const suggesterName = document.getElementById('editSuggesterName')?.value?.trim() || 'जिज्ञासु पाठक';
    const suggesterPhone = document.getElementById('editSuggesterPhone')?.value?.trim() || '';
    const suggesterNotes = document.getElementById('editSuggesterNotes')?.value?.trim() || '';

    const verseKey = document.getElementById('editVerseKey')?.value || this.currentSloka.verseKey || '';
    const cantoVal = parseInt(document.getElementById('editCanto')?.value, 10);
    const chapterVal = parseInt(document.getElementById('editChapter')?.value, 10);
    const verseVal = document.getElementById('editVerse')?.value || this.currentSloka.verse || '';

    const newSanskrit = (document.getElementById('editSanskrit')?.value || '').trim();
    const newWordsRaw = (document.getElementById('editWordToWord')?.value || '').trim();
    const newTranslation = (document.getElementById('editTranslation')?.value || '').trim();
    const newPurport = (document.getElementById('editPurport')?.value || '').trim();

    const isVS = cantoVal === -3 || this.currentBook === 'VS' || this.currentBook === 'VAISHNAVA_SONGS';
    const isCC = !isVS && (cantoVal === -2 || this.currentBook === 'CC');
    const isISO = !isVS && !isCC && (cantoVal === -1 || this.currentBook === 'ISO');
    const isBG = !isVS && !isCC && !isISO && (cantoVal === 0 || this.currentBook === 'BG');

    // 1. Direct Sloka Identification for verification in Firebase Console
    let slokaNumber = '';
    let verseReference = '';
    let fullReferenceHindi = '';
    let directSlokaUrl = '';
    let scripture = 'श्रीमद्भागवतम्';
    let book = 'SB';
    let canto = this.currentSloka.canto !== undefined ? this.currentSloka.canto : cantoVal;
    let chapter = this.currentSloka.chapter !== undefined ? this.currentSloka.chapter : chapterVal;
    let verse = this.currentSloka.verse !== undefined ? this.currentSloka.verse : verseVal;
    let songNumber = null;
    let songTitle = '';

    if (isVS) {
      book = 'VS';
      scripture = 'वैष्णव पदावली';
      songNumber = parseInt(document.getElementById('editSongNumber')?.value, 10) || this.currentSloka.songNumber || 1;
      songTitle = document.getElementById('editVsTitle')?.value?.trim() || this.currentSloka.title || '';
      slokaNumber = `गीत #${songNumber}`;
      verseReference = `VS ${songNumber}`;
      fullReferenceHindi = `वैष्णव पदावली गीत #${songNumber}${songTitle ? ' - ' + songTitle : ''} (VS ${songNumber})`;
      directSlokaUrl = `#vs/${songNumber}`;
    } else if (isCC) {
      book = 'CC';
      scripture = 'श्री चैतन्य-चरितामृत';
      const lilaNum = this.currentSloka.lila || this.currentSloka.canto || 1;
      const lilaKey = this.getLilaKey(lilaNum);
      const lilaName = lilaNum === 1 ? 'आदि-लीला' : (lilaNum === 2 ? 'मध्य-लीला' : 'अन्त्य-लीला');
      slokaNumber = `${lilaName} ${chapter}.${verse}`;
      verseReference = `CC ${lilaKey.toUpperCase()} ${chapter}.${verse}`;
      fullReferenceHindi = `श्री चैतन्य-चरितामृत ${lilaName} अध्याय ${chapter} श्लोक ${verse} (${verseReference})`;
      directSlokaUrl = `#cc/${lilaKey}/${chapter}/${verse}`;
    } else if (isISO) {
      book = 'ISO';
      scripture = 'श्री ईशोपनिषद्';
      slokaNumber = verseKey === 'inv' ? 'मंगलाचरण' : `मंत्र ${verseKey}`;
      verseReference = `ISO ${verseKey === 'inv' ? 'Invocation' : verseKey}`;
      fullReferenceHindi = `श्री ईशोपनिषद् ${slokaNumber} (${verseReference})`;
      directSlokaUrl = `#iso/${verseKey}`;
    } else if (isBG) {
      book = 'BG';
      scripture = 'श्रीमद्भगवद्गीता';
      slokaNumber = `${chapter}.${verse}`;
      verseReference = `BG ${chapter}.${verse}`;
      fullReferenceHindi = `श्रीमद्भगवद्गीता अध्याय ${chapter} श्लोक ${verse} (BG ${chapter}.${verse})`;
      directSlokaUrl = `#bg/${chapter}/${verse}`;
    } else {
      book = 'SB';
      scripture = 'श्रीमद्भागवतम्';
      slokaNumber = `${canto}.${chapter}.${verse}`;
      verseReference = `SB ${canto}.${chapter}.${verse}`;
      fullReferenceHindi = `श्रीमद्भागवतम् स्कन्ध ${canto} अध्याय ${chapter} श्लोक ${verse} (SB ${canto}.${chapter}.${verse})`;
      directSlokaUrl = `#sb/${canto}/${chapter}/${verse}`;
    }

    // 2. Compute DELTA (only fields that were genuinely changed)
    const changes = [];
    const changedFieldsNames = [];

    // Helper to format original word-to-word string for fair comparison
    const origWordsRaw = Array.isArray(this.currentSloka.wordToWord) && this.currentSloka.wordToWord.length > 0
      ? this.currentSloka.wordToWord.map(w => `${w.sanskrit} — ${w.hindi}`).join(';\n')
      : '';

    const origSanskrit = (this.currentSloka.sanskritDevanagari || '').trim();
    const origTranslation = (this.currentSloka.hindiTranslation || '').trim();
    const origPurport = (this.currentSloka.hindiPurport || this.currentSloka.englishTranslation || '').trim();

    // Sanskrit / Devanagari text
    if (newSanskrit !== origSanskrit) {
      changes.push({
        field: 'sanskritDevanagari',
        label: isVS ? 'मूल भजन पद (Lyrics)' : 'मूल संस्कृत श्लोक (Sanskrit)',
        oldText: origSanskrit,
        newText: newSanskrit
      });
      changedFieldsNames.push(isVS ? 'भजन पद' : 'संस्कृत श्लोक');
    }

    // Word-to-word meanings
    if (!isVS && newWordsRaw !== origWordsRaw) {
      const parsedWords = [];
      if (newWordsRaw) {
        const parts = newWordsRaw.split(/[;\n]+/).map(p => p.trim()).filter(p => p.length > 0);
        parts.forEach(part => {
          const pair = part.split(/[—\-–:]/).map(s => s.trim());
          if (pair.length >= 2) {
            parsedWords.push({ sanskrit: pair[0], hindi: pair.slice(1).join(' - ') });
          } else if (pair.length === 1 && pair[0]) {
            parsedWords.push({ sanskrit: pair[0], hindi: '' });
          }
        });
      }

      changes.push({
        field: 'wordToWord',
        label: 'पदच्छेद एवं शब्दार्थ (Word-to-Word)',
        oldText: origWordsRaw,
        newText: newWordsRaw,
        parsedWords: parsedWords
      });
      changedFieldsNames.push('शब्दार्थ');
    }

    // Hindi translation
    if (newTranslation !== origTranslation) {
      changes.push({
        field: 'hindiTranslation',
        label: 'हिन्दी अनुवाद (Translation)',
        oldText: origTranslation,
        newText: newTranslation
      });
      changedFieldsNames.push('हिन्दी अनुवाद');
    }

    // Purport / English translation
    if (newPurport !== origPurport) {
      changes.push({
        field: 'hindiPurport',
        label: isVS ? 'अंग्रेजी अनुवाद (English Translation)' : 'श्रील प्रभुपाद तात्पर्य (Purport)',
        oldText: origPurport,
        newText: newPurport
      });
      changedFieldsNames.push(isVS ? 'अंग्रेजी अनुवाद' : 'तात्पर्य');
    }

    // Vaishnava Song Title & Author changes
    if (isVS) {
      const origTitle = (this.currentSloka.title || '').trim();
      const newTitle = (document.getElementById('editVsTitle')?.value || '').trim();
      if (newTitle && newTitle !== origTitle) {
        changes.push({
          field: 'title',
          label: 'गीत शीर्षक (Song Title)',
          oldText: origTitle,
          newText: newTitle
        });
        changedFieldsNames.push('गीत शीर्षक');
      }

      const origAuthor = (this.currentSloka.authorHindi || this.currentSloka.author || '').trim();
      const newAuthor = (document.getElementById('editVsAuthor')?.value || '').trim();
      if (newAuthor && newAuthor !== origAuthor) {
        changes.push({
          field: 'author',
          label: 'रचयिता (Author)',
          oldText: origAuthor,
          newText: newAuthor
        });
        changedFieldsNames.push('रचयिता');
      }
    }

    // If nothing was modified, alert user and do not spam Firebase
    if (changes.length === 0) {
      this.showToast('ℹ️ कोई बदलाव नहीं पाया गया।');
      return;
    }

    // 3. Assemble clean DELTA suggestion payload
    const payload = {
      slokaNumber,
      verseReference,
      fullReferenceHindi,
      directSlokaUrl,
      scripture,
      book,
      canto: canto !== undefined ? canto : null,
      chapter: chapter !== undefined ? chapter : null,
      verse: verse !== undefined ? verse : null,
      songNumber: songNumber || null,
      songTitle: songTitle || '',
      verseKey: this.currentSloka.verseKey || `${canto}.${chapter}.${verse}`,
      verseId: this.currentSloka.id || `${book.toLowerCase()}-${canto}-${chapter}-${verse}`,
      changes,
      changedFieldsSummary: changedFieldsNames.join(', '),
      suggesterName,
      phone: suggesterPhone,
      notes: suggesterNotes
    };

    try {
      this.showToast('⏳ Submitting suggestion to cloud...');
      if (!window.vedabaseFirebase) {
        throw new Error('Firebase service not loaded. Please check internet connection.');
      }

      await window.vedabaseFirebase.submitDeltaSuggestion(payload);

      // Close modal - Notice: Contributor's local view and localStorage are NOT modified!
      this.closeAllModals();

      // Show clear confirmation toast
      this.showToast(`🙏 Thank you! Suggestion for ${verseReference} submitted for review. It will go live once approved by admin.`);
    } catch (err) {
      console.error('Error submitting suggestion:', err);
      this.showToast(`⚠️ Error: ${err.message || 'Could not submit suggestion.'}`);
    }
  }

  // =========================================================================
  // FIREBASE CLOUD REAL-TIME LIVE SYNC
  // =========================================================================

  initFirebaseIntegration() {
    if (!window.vedabaseFirebase) return;

    // Listen to real-time approved overrides from Firestore
    window.vedabaseFirebase.onApprovedOverridesChange(() => {
      this.applyCloudApprovedOverrides();
    });
  }

  // Apply cloud approved overrides across all loaded collections & active view
  applyCloudApprovedOverrides() {
    if (!window.vedabaseFirebase) return;

    // Apply to all loaded slokas in memory
    if (this.verseMap && this.verseMap.size > 0) {
      for (const sloka of this.verseMap.values()) {
        const ov = window.vedabaseFirebase.getOverrideForSloka(sloka);
        if (ov) {
          Object.assign(sloka, ov, { isCloudApproved: true });
        }
      }
    }

    // If current sloka has an approved override, refresh active view
    if (this.currentSloka) {
      const ov = window.vedabaseFirebase.getOverrideForSloka(this.currentSloka);
      if (ov) {
        Object.assign(this.currentSloka, ov, { isCloudApproved: true });
        this.displaySloka(this.currentSloka);
      }
    }
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
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
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

    // Horizontal mouse wheel scrolling for verse selector strip
    const stripScroll = document.getElementById('verseStripScroll');
    if (stripScroll) {
      stripScroll.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          stripScroll.scrollLeft += e.deltaY;
        }
      }, { passive: false });
    }
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
    document.getElementById('btnSaveEditedVerse')?.addEventListener('click', (e) => {
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
