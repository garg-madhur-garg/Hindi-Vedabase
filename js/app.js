/**
 * Hindi Vedabase - Main Application Controller (app.js)
 * High-performance state management, instant search rendering, presentation mode, sloka editing & backup
 * Fully integrated with:
 *  - Srimad Bhagavad Gita (18 Chapters, 700 Verses)
 *  - Srimad Bhagavatam (12 Cantos, 335 Chapters, 18,000 Verses)
 */

function getCantoStructure() {
  return window.SB_CANTOS_DATA || [];
}

function getBgChapters() {
  return window.BG_CHAPTERS_DATA || [];
}

class VedabaseApp {
  constructor() {
    this.currentBook = 'BG'; // 'BG' or 'SB'
    this.currentSloka = null;
    this.currentCanto = 1;      // for SB
    this.currentChapter = 1;    // for BG or SB
    this.chapterSlokas = [];
    this.allSlokas = [];
    this.verseMap = new Map();
    this.chapterMap = new Map();   // key: "canto-chapter" for SB
    this.bgChapterMap = new Map(); // key: chapter (number) for BG
    this.loadedCantos = new Set();
    this.isBgLoaded = false;
    this.loadingCantos = new Map();
    this.loadingBg = null;
    this.currentTheme = 'dark';
    this.currentHighlightWord = null;
    this.highlightFadeTimer = null;
    this.isPreloading = false;
    this.isPresentationOpen = false;
    this.presFontScale = 1;
    this.presSections = {
      sanskrit: true,
      words: true,
      translation: true,
      purport: true
    };
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

    const isBG = sloka.book === 'BG' || (sloka.id && sloka.id.startsWith('bg-')) || !sloka.canto;
    const key = isBG ? `bg-${sloka.chapter}-${sloka.verse}` : (sloka.verseKey || `${sloka.canto}.${sloka.chapter}.${sloka.verse}`);

    // 1. Save to permanent localStorage backup
    try {
      const edits = this.getUserCustomEdits();
      edits[key] = sloka;
      localStorage.setItem('vedabase_user_custom_edits', JSON.stringify(edits));
    } catch (e) {
      console.warn('LocalStorage save warning:', e);
    }

    // 2. Update in-memory structures
    this.verseMap.set(sloka.verseKey, sloka);
    this.verseMap.set(sloka.id, sloka);
    if (isBG) {
      this.verseMap.set(`bg-${sloka.chapter}-${sloka.verse}`, sloka);
      this.verseMap.set(`bg ${sloka.chapter}.${sloka.verse}`, sloka);
    }

    const idx = this.allSlokas.findIndex(s => s.id === sloka.id || s.verseKey === sloka.verseKey);
    if (idx >= 0) {
      this.allSlokas[idx] = sloka;
    } else {
      this.allSlokas.push(sloka);
    }

    if (isBG) {
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

    if (window.searchEngine && window.searchEngine.isIndexed) {
      window.searchEngine.appendIndex([sloka]);
    }

    this.updateCustomEditsCountBadge();
  }

  // Revert a single verse back to its authentic original JSON data
  async revertCurrentVerseToOriginal() {
    if (!this.currentSloka) return;
    const isBG = this.currentBook === 'BG' || this.currentSloka.book === 'BG' || this.currentSloka.id?.startsWith('bg-');
    const verseKey = this.currentSloka.verseKey;

    // Remove from localStorage
    const edits = this.getUserCustomEdits();
    const editKey = isBG ? `bg-${this.currentSloka.chapter}-${this.currentSloka.verse}` : verseKey;
    if (edits[editKey] || edits[verseKey]) {
      delete edits[editKey];
      delete edits[verseKey];
      localStorage.setItem('vedabase_user_custom_edits', JSON.stringify(edits));
    }

    try {
      if (isBG) {
        const resp = await fetch(`data/bhagavad-gita.json?v=${Date.now()}`);
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
        const resp = await fetch(`data/canto-${cantoNum}.json?v=${Date.now()}`);
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
    this.allSlokas = [];
    this.loadedCantos.clear();
    this.isBgLoaded = false;

    if (window.searchEngine) {
      window.searchEngine.clearIndex();
    }

    this.showToast('⏳ समस्त डेटा JSON फाइलों से पुनः लोड हो रहा है...');

    await this.ensureBgLoaded();
    const curKey = this.currentSloka ? this.currentSloka.verseKey : (this.currentBook === 'BG' ? '1.1' : '1.1.1');
    await this.loadVerseByKey(curKey);
    this.updateCustomEditsCountBadge();
    this.closeAllModals();

    setTimeout(() => {
      this.preloadAllCantosInBackground();
    }, 100);

    this.showToast('✅ सभी श्लोक मूल JSON फाइलों से सफलतापूर्वक रीसेट हो गए!');
  }

  // Merge user custom edits onto any incoming slokas array so user edits ALWAYS win
  applyUserCustomEdits(slokas) {
    if (!slokas || slokas.length === 0) return slokas;
    const userEdits = this.getUserCustomEdits();
    return slokas.map(s => {
      const isBG = s.book === 'BG' || (s.id && s.id.startsWith('bg-')) || !s.canto;
      const vKey = s.verseKey || (isBG ? `${s.chapter}.${s.verse}` : `${s.canto}.${s.chapter}.${s.verse}`);
      const bgKey = isBG ? `bg-${s.chapter}-${s.verse}` : null;

      if (bgKey && userEdits[bgKey]) return { ...userEdits[bgKey] };
      if (userEdits[vKey]) return { ...userEdits[vKey] };
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

    const cleanEdits = slokas.map(s => {
      const isBG = s.book === 'BG' || (s.id && s.id.startsWith('bg-')) || !s.canto;
      return {
        id: s.id || (isBG ? `bg-${s.chapter}-${s.verse}` : `sb-${s.canto}-${s.chapter}-${s.verse}`),
        book: isBG ? "BG" : "SB",
        ...(isBG ? {} : { canto: Number(s.canto) }),
        chapter: Number(s.chapter),
        verse: isNaN(Number(s.verse)) ? s.verse : Number(s.verse),
        verseKey: s.verseKey || (isBG ? `${s.chapter}.${s.verse}` : `${s.canto}.${s.chapter}.${s.verse}`),
        sanskritDevanagari: s.sanskritDevanagari || '',
        sanskritIAST: s.sanskritIAST || '',
        wordToWord: Array.isArray(s.wordToWord) ? s.wordToWord : [],
        hindiTranslation: s.hindiTranslation || '',
        hindiPurport: s.hindiPurport || '',
        category: s.category || {
          book: isBG ? "श्रीमद्भगवद्गीता" : "श्रीमद्भागवतम्",
          cantoTitleHindi: isBG ? "श्रीमद्भगवद्गीता यथारूप" : `स्कन्ध ${s.canto}`,
          chapterTitleHindi: `अध्याय ${s.chapter}`
        },
        tags: s.tags || (isBG ? ["श्रीमद्भगवद्गीता", `अध्याय ${s.chapter}`] : [`स्कन्ध ${s.canto}`, `अध्याय ${s.chapter}`, "श्रीमद्भागवतम्"]),
        isUserEdited: true,
        lastEditedAt: s.lastEditedAt || new Date().toISOString()
      };
    });

    const blob = new Blob([JSON.stringify(cleanEdits, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Vedabase_My_Custom_Edits_${cleanEdits.length}_Verses.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.showToast(`📥 ${cleanEdits.length} सम्पादित श्लोक बैकअप डाउनलोड हुआ!`);
  }

  // Ensure Srimad Bhagavad Gita JSON is loaded
  async ensureBgLoaded() {
    if (this.isBgLoaded) return true;
    if (this.loadingBg) return await this.loadingBg;

    this.loadingBg = (async () => {
      try {
        const resp = await fetch('data/bhagavad-gita.json');
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
        const resp = await fetch(`data/canto-${cNum}.json`);
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
      // Could be BG (ch.v)
      await this.ensureBgLoaded();
      const bgKey = `${parts[0]}.${parts[1]}`;
      if (this.verseMap.has(bgKey)) return this.verseMap.get(bgKey);
      if (this.verseMap.has(`bg-${parts[0]}-${parts[1]}`)) return this.verseMap.get(`bg-${parts[0]}-${parts[1]}`);
    }

    return null;
  }

  // Initialize Application
  async init() {
    console.log('Initializing Hindi Vedabase (Direct JSON Multi-Scripture Architecture)...');

    // Auto-clean stale localStorage overrides if needed
    if (!localStorage.getItem('vedabase_v3_clean_json_synced')) {
      localStorage.removeItem('vedabase_user_custom_edits');
      localStorage.setItem('vedabase_v3_clean_json_synced', 'true');
    }

    this.setupTheme();
    this.bindEvents();
    this.renderSidebar();

    // 1. Always load Bhagavad Gita initially
    await this.ensureBgLoaded();

    // 2. Determine initial verse (from localStorage or default BG 1.1)
    let initialVerseKey = 'bg 1.1';
    try {
      const savedKey = localStorage.getItem('vedabase_last_verse');
      if (savedKey) initialVerseKey = savedKey;
    } catch (e) {}

    // 3. Load initial verse
    await this.loadVerseByKey(initialVerseKey);

    // 4. Preload all remaining Cantos (1-12) from JSON in background for instant search across all verses
    setTimeout(() => {
      this.preloadAllCantosInBackground();
    }, 100);
  }

  // Render Sidebar with both Bhagavad Gita (18 Chapters) & Srimad Bhagavatam (12 Cantos / 335 Chapters)
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

    // 2. Render Srimad Bhagavatam Cantos (1 to 12)
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
  }

  // Accordion toggle: Toggles entire scripture open/close
  toggleScriptureAccordion(scriptureId) {
    const target = document.getElementById(scriptureId);
    if (target) {
      target.classList.toggle('expanded');
    }
  }

  // Accordion toggle: Toggles canto open/close
  toggleCantoAccordion(canto) {
    const targetItem = document.getElementById(`canto-item-${canto}`);
    if (targetItem) {
      targetItem.classList.toggle('expanded');
    }
  }

  // Helper to sanitize Sanskrit text
  cleanSanskritText(text) {
    if (!text) return '';
    return text
      .replace(/^॥\s*(?:श्रीमद्भागवतम्|श्रीमद्भगवद्गीता)[^॥\n]*॥\s*\n?/gi, '')
      .replace(/॥\s*(?:श्रीमद्भागवतम्|श्रीमद्भगवद्गीता)[^॥\n]*॥/gi, '')
      .trim();
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

  // Load verse by VerseKey (e.g. "bg 2.13", "2.13", "1.1.1", "10.14.8")
  async loadVerseByKey(verseKey, highlightWord = null) {
    if (!verseKey) return;
    const cleanKey = verseKey.trim();
    this.currentHighlightWord = (highlightWord && highlightWord.trim().length >= 2) ? highlightWord.trim() : null;

    // Check if BG key
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

    // Otherwise SB query (3 parts: Canto.Chapter.Verse)
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

  // Highlight active Scripture, Canto & Chapter in Sidebar
  highlightActiveSidebar() {
    const isBG = this.currentBook === 'BG';

    const groupBG = document.getElementById('scriptureGroupBG');
    const groupSB = document.getElementById('scriptureGroupSB');

    if (isBG) {
      if (groupBG) {
        groupBG.classList.add('active', 'expanded');
      }
      document.querySelectorAll('#bgChapterListContainer .chapter-btn').forEach(btn => btn.classList.remove('active'));
      const activeBgBtn = document.getElementById(`bg-chap-btn-${this.currentChapter}`);
      if (activeBgBtn) activeBgBtn.classList.add('active');
    } else {
      if (groupSB) {
        groupSB.classList.add('active', 'expanded');
      }
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
    const isBG = sloka.book === 'BG' || (sloka.id && sloka.id.startsWith('bg-')) || !sloka.canto;
    this.currentBook = isBG ? 'BG' : 'SB';

    try {
      localStorage.setItem('vedabase_last_verse', isBG ? `bg ${sloka.verseKey}` : sloka.verseKey);
    } catch (e) {}

    // 1. Badges & Titles
    const keyBadge = document.getElementById('currentVerseKeyBadge');
    if (keyBadge) {
      keyBadge.textContent = isBG ? `BG ${sloka.verseKey}` : `SB ${sloka.verseKey}`;
    }

    const userEditBadge = document.getElementById('userEditedBadge');
    if (userEditBadge) {
      userEditBadge.style.display = sloka.isUserEdited ? 'inline-flex' : 'none';
    }

    const chTitle = document.getElementById('currentChapterName');
    if (chTitle) {
      if (isBG) {
        const bgChapters = getBgChapters();
        const chObj = bgChapters.find(ch => ch.chapter === Number(sloka.chapter));
        chTitle.textContent = chObj ? `अध्याय ${sloka.chapter} - ${chObj.name}` : (sloka.category?.chapterTitleHindi || `अध्याय ${sloka.chapter}`);
      } else {
        chTitle.textContent = sloka.category?.chapterTitleHindi || `अध्याय ${sloka.chapter}`;
      }
    }

    // 2. Render Interactive Horizontal Verse Strip (1, 2, 3... N)
    this.renderVerseSelectorStrip();

    // 3. Sanskrit Verse & IAST
    const sanskritEl = document.getElementById('sanskritDevanagari');
    if (sanskritEl) {
      sanskritEl.innerHTML = this.highlightInText(this.cleanSanskritText(sloka.sanskritDevanagari), this.currentHighlightWord) || 'श्लोक उपलब्ध नहीं है';
    }

    const iastEl = document.getElementById('sanskritIAST');
    if (iastEl) {
      iastEl.innerHTML = this.highlightInText(this.cleanSanskritText(sloka.sanskritIAST), this.currentHighlightWord) || '';
      iastEl.style.display = sloka.sanskritIAST ? 'block' : 'none';
    }

    // 4. Word-to-Word Chips
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

    // 5. Hindi Translation
    const transEl = document.getElementById('hindiTranslation');
    if (transEl) {
      transEl.innerHTML = this.highlightInHtml(this.renderParagraphs(sloka.hindiTranslation), this.currentHighlightWord) || 'हिन्दी अनुवाद उपलब्ध नहीं है।';
    }

    // 6. Hindi Purport / Tatparya
    const purportBox = document.getElementById('purportContainer');
    const purportEl = document.getElementById('hindiPurport');
    if (purportBox && purportEl) {
      if (sloka.hindiPurport && sloka.hindiPurport.trim()) {
        purportEl.innerHTML = this.highlightInHtml(this.renderParagraphs(sloka.hindiPurport), this.currentHighlightWord);
        purportBox.style.display = 'block';
      } else {
        purportBox.style.display = 'none';
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

  // Render the interactive horizontal verse numbers: [1] [2] [3]... [N]
  renderVerseSelectorStrip() {
    const scrollContainer = document.getElementById('verseStripScroll');
    if (!scrollContainer || !this.currentSloka) return;

    const isBG = this.currentBook === 'BG';
    let totalVerses = 1;

    if (isBG) {
      const bgChapters = getBgChapters();
      const chObj = bgChapters.find(ch => ch.chapter === Number(this.currentChapter));
      totalVerses = chObj ? chObj.totalVerses : Math.max(this.chapterSlokas.length, 1);
    } else {
      const cantos = getCantoStructure();
      const cantoObj = cantos.find(c => c.canto === this.currentCanto);
      const chapterObj = cantoObj?.chapters?.find(ch => ch.chapter === this.currentChapter);
      totalVerses = chapterObj ? chapterObj.totalVerses : Math.max(this.chapterSlokas.length, 1);
    }

    const existingMap = new Map();
    this.chapterSlokas.forEach(s => existingMap.set(parseInt(s.verse, 10), s));

    const currentVNum = parseInt(this.currentSloka.verse, 10);
    const buttons = [];

    for (let v = 1; v <= totalVerses; v++) {
      const isCurrent = currentVNum === v;
      const isLoaded = existingMap.has(v);
      const loadKey = isBG ? `bg ${this.currentChapter}.${v}` : `${this.currentCanto}.${this.currentChapter}.${v}`;

      buttons.push(`
        <button class="verse-strip-btn ${isCurrent ? 'active' : ''} ${isLoaded ? 'has-data' : ''}"
          onclick="window.app.loadVerseByKey('${loadKey}')"
          title="श्लोक ${v} ${isLoaded ? '(डेटा उपलब्ध)' : ''}">
          ${v}
        </button>
      `);
    }

    scrollContainer.innerHTML = buttons.join('');

    const activeBtn = scrollContainer.querySelector('.verse-strip-btn.active');
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  // Update verse navigation counter (e.g. 1 / 46 or 1 / 23)
  updateNavCounter() {
    const counter = document.getElementById('verseCounterStatus');
    if (!counter) return;

    const isBG = this.currentBook === 'BG';
    let totalV = 1;

    if (isBG) {
      const bgChapters = getBgChapters();
      const chObj = bgChapters.find(ch => ch.chapter === Number(this.currentChapter));
      totalV = chObj ? chObj.totalVerses : Math.max(this.chapterSlokas.length, 1);
    } else {
      const cantos = getCantoStructure();
      const cantoObj = cantos.find(c => c.canto === this.currentCanto);
      const chapterObj = cantoObj?.chapters?.find(ch => ch.chapter === this.currentChapter);
      totalV = chapterObj ? chapterObj.totalVerses : Math.max(this.chapterSlokas.length, 1);
    }

    const vNum = parseInt(this.currentSloka?.verse, 10) || 1;
    counter.textContent = `${vNum} / ${totalV}`;
  }

  // Next Verse
  async nextVerse() {
    const isBG = this.currentBook === 'BG';

    if (isBG) {
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
    const isBG = this.currentBook === 'BG';

    if (isBG) {
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

  // Directly search any Sanskrit / Hindi word
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
    const isBG = this.currentBook === 'BG' || s.book === 'BG' || s.id?.startsWith('bg-');
    const wordMeaningsText = (s.wordToWord || []).map(w => `${w.sanskrit} — ${w.hindi}`).join('; ');

    const titlePrefix = isBG ? `🕉️ *श्रीमद्भगवद्गीता ${s.verseKey} (BG ${s.verseKey})* 🕉️` : `🕉️ *श्रीमद्भागवतम् SB ${s.verseKey}* 🕉️`;

    const formatted = `${titlePrefix}\n\n` +
      `📜 *संस्कृत श्लोक:*\n${s.sanskritDevanagari}\n\n` +
      (wordMeaningsText ? `✨ *शब्दार्थ:*\n${wordMeaningsText}\n\n` : '') +
      `📖 *अनुवाद:*\n${s.hindiTranslation}\n\n` +
      (s.hindiPurport ? `🪔 *तात्पर्य:*\n${s.hindiPurport.substring(0, 400)}...\n\n` : '');

    navigator.clipboard.writeText(formatted).then(() => {
      this.showToast('📋 श्लोक क्लिपबोर्ड में कॉपी हो गया!');
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

    // Ensure BG is loaded if search term seems related
    await this.ensureBgLoaded();

    const res = window.searchEngine ? window.searchEngine.search(trimmed) : { results: [], timeMs: 0 };

    if (speedBadge) {
      speedBadge.textContent = `${res.timeMs} ms`;
    }

    if (!res.results || res.results.length === 0) {
      list.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 2rem;">'${this.escapeHtml(trimmed || '')}' के लिए कोई श्लोक नहीं मिला।</div>`;
      return;
    }

    const highlightWord = trimmed;

    list.innerHTML = res.results.map(s => {
      const isBG = s.book === 'BG' || s.id?.startsWith('bg-') || !s.canto;
      const prefix = isBG ? 'BG' : 'SB';
      const sanskritFirstLine = this.cleanSanskritText(s.sanskritDevanagari || '').split('\n')[0];
      const targetKey = isBG ? `bg ${s.verseKey}` : s.verseKey;

      return `
        <div class="search-result-item" onclick="window.app.selectVerseFromSearch('${targetKey}', '${this.escapeHtml(highlightWord)}')">
          <div class="search-res-header">
            <span class="search-res-key" style="${isBG ? 'background: rgba(245, 158, 11, 0.2); color: var(--accent-gold);' : ''}">${prefix} ${s.verseKey}</span>
            <span style="font-size: 0.8rem; color: var(--accent-gold); font-weight: 600;">${this.escapeHtml(s.category?.chapterTitleHindi || '')}</span>
          </div>
          <div class="search-res-sanskrit">${this.highlightInText(sanskritFirstLine, highlightWord)}</div>
          <div class="search-res-translation">${this.highlightInText(s.hindiTranslation || '', highlightWord)}</div>
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
    this.presFontScale = Math.max(0.8, Math.min(1.8, (this.presFontScale || 1) + delta));
    const sanskritEl = document.getElementById('presSanskrit');
    const transEl = document.getElementById('presTranslation');
    if (sanskritEl) sanskritEl.style.fontSize = `${2.35 * this.presFontScale}rem`;
    if (transEl) transEl.style.fontSize = `${1.4 * this.presFontScale}rem`;
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
    const isBG = this.currentBook === 'BG' || s.book === 'BG' || s.id?.startsWith('bg-');

    const presVerseKey = document.getElementById('presVerseKey');
    if (presVerseKey) presVerseKey.textContent = isBG ? `BG ${s.verseKey}` : `SB ${s.verseKey}`;

    const presChapterTitle = document.getElementById('presChapterTitle');
    if (presChapterTitle) {
      if (isBG) {
        presChapterTitle.textContent = `श्रीमद्भगवद्गीता • अध्याय ${s.chapter}`;
      } else {
        presChapterTitle.textContent = s.category?.chapterTitleHindi || `स्कन्ध ${s.canto} • अध्याय ${s.chapter}`;
      }
    }

    let totalV = 1;
    if (isBG) {
      const bgChapters = getBgChapters();
      const chObj = bgChapters.find(ch => ch.chapter === Number(s.chapter));
      totalV = chObj ? chObj.totalVerses : Math.max(this.chapterSlokas.length, 1);
    } else {
      const cantos = getCantoStructure();
      const cantoObj = cantos.find(c => c.canto === this.currentCanto);
      const chapterObj = cantoObj?.chapters?.find(ch => ch.chapter === this.currentChapter);
      totalV = chapterObj ? chapterObj.totalVerses : Math.max(this.chapterSlokas.length, 1);
    }

    const presCounter = document.getElementById('presCounter');
    if (presCounter) presCounter.textContent = `श्लोक ${s.verse} / ${totalV}`;

    const presSanskrit = document.getElementById('presSanskrit');
    if (presSanskrit) {
      presSanskrit.innerHTML = this.highlightInText(this.cleanSanskritText(s.sanskritDevanagari), this.currentHighlightWord) || 'श्लोक उपलब्ध नहीं है';
    }

    const presTranslation = document.getElementById('presTranslation');
    if (presTranslation) {
      presTranslation.innerHTML = this.highlightInHtml(this.renderParagraphs(s.hindiTranslation), this.currentHighlightWord) || 'अनुवाद उपलब्ध नहीं है';
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
      this.showToast('सम्पादित करने के लिए कोई श्लोक चयनित नहीं है।');
      return;
    }

    const sloka = this.currentSloka;
    const isBG = this.currentBook === 'BG' || sloka.book === 'BG' || sloka.id?.startsWith('bg-');

    const titleEl = document.getElementById('editModalTitle');
    if (titleEl) {
      titleEl.textContent = `✏️ श्लोक सम्पादन (${isBG ? 'BG' : 'SB'} ${sloka.verseKey})`;
    }

    document.getElementById('editVerseKey').value = sloka.verseKey || '';
    document.getElementById('editCanto').value = isBG ? 0 : (sloka.canto || 1);
    document.getElementById('editChapter').value = sloka.chapter || 1;
    document.getElementById('editVerse').value = sloka.verse || 1;

    const cantoChipBox = document.getElementById('editCantoChipBox');
    const cantoBadge = document.getElementById('editCantoBadge');
    const chapBadge = document.getElementById('editChapterBadge');
    const verseBadge = document.getElementById('editVerseBadge');

    if (cantoChipBox) {
      cantoChipBox.style.display = isBG ? 'none' : 'block';
    }
    if (cantoBadge) cantoBadge.textContent = sloka.canto || 1;
    if (chapBadge) chapBadge.textContent = sloka.chapter || 1;
    if (verseBadge) verseBadge.textContent = sloka.verse || 1;

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

    const isBG = canto === 0 || this.currentBook === 'BG';

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
    if (isBG) {
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

    // 1. Send update directly to server API to write into data/canto-X.json or data/bhagavad-gita.json
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
    if (isBG) {
      this.verseMap.set(`bg-${sloka.chapter}-${sloka.verse}`, sloka);
      this.verseMap.set(`bg ${sloka.chapter}.${sloka.verse}`, sloka);
    }

    const idx = this.allSlokas.findIndex(s => s.id === sloka.id);
    if (idx >= 0) this.allSlokas[idx] = sloka;
    else this.allSlokas.push(sloka);

    if (isBG) {
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

    if (window.searchEngine) window.searchEngine.appendIndex([sloka]);

    // 3. Remove localStorage override if disk write was successful
    if (diskSaved) {
      const edits = this.getUserCustomEdits();
      const saveKey = isBG ? `bg-${chapter}-${verse}` : verseKey;
      if (edits[saveKey]) {
        delete edits[saveKey];
        localStorage.setItem('vedabase_user_custom_edits', JSON.stringify(edits));
      }
      this.updateCustomEditsCountBadge();
      this.showToast(`💾 श्लोक ${isBG ? 'BG' : 'SB'} ${verseKey} सीधे JSON फ़ाइल में सुरक्षित हो गया!`);
    } else {
      await this.saveUserCustomEdit(sloka);
      this.showToast(`✅ श्लोक ${isBG ? 'BG' : 'SB'} ${verseKey} सुरक्षित हुआ (Local Storage)`);
    }

    this.closeAllModals();
    await this.displaySloka(sloka);
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

  // Export JSON Backup of entire database
  async exportJSONBackup() {
    this.showToast('⏳ सम्पूर्ण बैकअप तैयार किया जा रहा है...');

    await this.ensureBgLoaded();
    for (let c = 1; c <= 12; c++) {
      await this.ensureCantoLoaded(c);
    }

    let slokas = this.allSlokas || [];
    slokas = this.applyUserCustomEdits(slokas);

    const blob = new Blob([JSON.stringify(slokas, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Hindi_Vedabase_Master_Backup_${slokas.length}_Slokas.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.showToast(`📥 समस्त ${slokas.length} श्लोकों का JSON बैकअप डाउनलोड हुआ!`);
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
            const isBG = first.book === 'BG' || first.id?.startsWith('bg-');
            this.selectVerseFromSearch(isBG ? `bg ${first.verseKey}` : first.verseKey, query);
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
    document.getElementById('btnExportBgJSON')?.addEventListener('click', () => this.exportBgJSON());
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
