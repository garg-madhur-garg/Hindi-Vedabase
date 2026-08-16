/**
 * Hindi Vedabase - Main Application Controller (app.js)
 * High-performance state management, instant search rendering, presentation mode, sloka editing & backup
 * Fully integrated with Srimad Bhagavatam 12 Cantos & 335 Chapters (English Numbering)
 */

function getCantoStructure() {
  return window.SB_CANTOS_DATA || [];
}

class VedabaseApp {
  constructor() {
    this.currentSloka = null;
    this.currentCanto = 1;
    this.currentChapter = 1;
    this.chapterSlokas = [];
    this.allSlokas = [];
    this.verseMap = new Map();
    this.chapterMap = new Map();
    this.loadedCantos = new Set();
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

  // Save a user custom edited sloka to permanent storage (localStorage + IndexedDB)
  async saveUserCustomEdit(sloka) {
    sloka.isUserEdited = true;
    sloka.lastEditedAt = new Date().toISOString();

    // 1. Save to permanent localStorage backup (Survives any schema / static file reloads)
    try {
      const edits = this.getUserCustomEdits();
      edits[sloka.verseKey] = sloka;
      localStorage.setItem('vedabase_user_custom_edits', JSON.stringify(edits));
    } catch (e) {
      console.warn('LocalStorage save warning:', e);
    }

    // 2. Save to IndexedDB
    if (window.vdb && window.vdb.db) {
      await window.vdb.saveSloka(sloka);
    }

    // 3. Update in-memory structures
    this.verseMap.set(sloka.verseKey, sloka);
    this.verseMap.set(sloka.id, sloka);

    const idx = this.allSlokas.findIndex(s => s.verseKey === sloka.verseKey);
    if (idx >= 0) {
      this.allSlokas[idx] = sloka;
    } else {
      this.allSlokas.push(sloka);
    }

    const chKey = `${sloka.canto}-${sloka.chapter}`;
    if (this.chapterMap.has(chKey)) {
      const chList = this.chapterMap.get(chKey);
      const chIdx = chList.findIndex(s => s.verseKey === sloka.verseKey);
      if (chIdx >= 0) {
        chList[chIdx] = sloka;
      } else {
        chList.push(sloka);
      }
    }

    if (window.searchEngine && window.searchEngine.isIndexed) {
      window.searchEngine.appendIndex([sloka]);
    }

    this.updateCustomEditsCountBadge();
  }

  // Merge user custom edits onto any incoming slokas array so user edits ALWAYS win
  applyUserCustomEdits(slokas) {
    if (!slokas || slokas.length === 0) return slokas;
    const userEdits = this.getUserCustomEdits();
    return slokas.map(s => {
      const vKey = s.verseKey || `${s.canto}.${s.chapter}.${s.verse}`;
      if (userEdits[vKey]) {
        return { ...userEdits[vKey] };
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

  // Export only user custom edits as a JSON file
  exportCustomEdits() {
    const edits = this.getUserCustomEdits();
    const slokas = Object.values(edits);
    if (slokas.length === 0) {
      this.showToast('आपने अभी तक कोई श्लोक सम्पादित नहीं किया है।');
      return;
    }
    const exportData = {
      title: "Hindi Vedabase - My Custom Edited Slokas",
      total_edits: slokas.length,
      export_date: new Date().toISOString(),
      edits: edits
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
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

  // Build high-speed in-memory lookup maps
  buildMemoryMap(slokas) {
    if (!slokas || slokas.length === 0) return;
    this.verseMap.clear();
    this.chapterMap.clear();
    this.allSlokas = [];
    this.loadedCantos.clear();
    this.addSlokasToMemory(slokas);
  }

  // Add a batch/canto of slokas into in-memory maps and list (preserves user edits)
  addSlokasToMemory(slokas) {
    if (!slokas || slokas.length === 0) return;
    const processedSlokas = this.applyUserCustomEdits(slokas);

    const newSlokas = [];
    for (let i = 0; i < processedSlokas.length; i++) {
      const s = processedSlokas[i];
      const key = `${s.canto}.${s.chapter}.${s.verse}`;
      if (!this.verseMap.has(key)) {
        this.allSlokas.push(s);
        newSlokas.push(s);
        this.verseMap.set(key, s);
        this.verseMap.set(s.id, s);

        const chKey = `${s.canto}-${s.chapter}`;
        if (!this.chapterMap.has(chKey)) {
          this.chapterMap.set(chKey, []);
        }
        this.chapterMap.get(chKey).push(s);
        this.loadedCantos.add(Number(s.canto));
      }
    }

    if (window.searchEngine && window.searchEngine.isIndexed && newSlokas.length > 0) {
      window.searchEngine.appendIndex(newSlokas);
    }
  }

  // Ensure a specific canto is loaded in memory
  async ensureCantoLoaded(canto) {
    const cNum = Number(canto);
    if (this.loadedCantos.has(cNum)) return true;

    try {
      // 1. Check if DB has verses for this canto (preserves all edits and custom entries)
      if (window.vdb && window.vdb.db) {
        let dbVerses = await window.vdb.getSlokasByCanto(cNum);
        if (dbVerses && dbVerses.length > 0) {
          dbVerses = this.applyUserCustomEdits(dbVerses);
          this.addSlokasToMemory(dbVerses);
          this.loadedCantos.add(cNum);
          return true;
        }
      }

      // 2. Fetch from static JSON if NOT already in DB
      const resp = await fetch(`data/canto-${cNum}.json`);
      if (resp.ok) {
        let slokas = await resp.json();
        slokas = this.applyUserCustomEdits(slokas);
        this.addSlokasToMemory(slokas);
        this.loadedCantos.add(cNum);

        // Save into IndexedDB in background
        if (window.vdb && window.vdb.db) {
          window.vdb.bulkSaveSlokas(slokas).catch(console.warn);
        }
        return true;
      }
    } catch (e) {
      console.warn(`Notice: Dynamic load for Canto ${cNum}:`, e);
    }
    return false;
  }

  // Preload all remaining Cantos (2 to 12) seamlessly in the background
  async preloadAllCantosInBackground() {
    if (this.isPreloading) return;
    this.isPreloading = true;

    for (let c = 2; c <= 12; c++) {
      if (!this.loadedCantos.has(c)) {
        await this.ensureCantoLoaded(c);
        // Small yield so browser UI remains 100% fluid
        await new Promise(r => setTimeout(r, 60));
      }
    }

    this.isPreloading = false;
    console.log(`All 12 Cantos (${this.allSlokas.length.toLocaleString()} verses) loaded into memory!`);
  }

  // Fast verse lookup (memory first, fallback to DB)
  async getSlokaData(verseKey) {
    if (!verseKey) return null;
    const cleanKey = verseKey.trim();
    if (this.verseMap.has(cleanKey)) {
      return this.verseMap.get(cleanKey);
    }
    if (window.vdb && window.vdb.db) {
      try {
        const dbSloka = await window.vdb.getSlokaByVerseKey(cleanKey);
        if (dbSloka) {
          this.verseMap.set(cleanKey, dbSloka);
          return dbSloka;
        }
      } catch (e) {}
    }
    return null;
  }

  // Fast chapter verses lookup (memory first, fallback to DB)
  async getChapterVerses(canto, chapter) {
    const chKey = `${Number(canto)}-${Number(chapter)}`;
    if (this.chapterMap.has(chKey) && this.chapterMap.get(chKey).length > 0) {
      return this.chapterMap.get(chKey);
    }
    if (window.vdb && window.vdb.db) {
      try {
        const dbVerses = await window.vdb.getSlokasByChapter(canto, chapter);
        if (dbVerses && dbVerses.length > 0) {
          this.chapterMap.set(chKey, dbVerses);
          return dbVerses;
        }
      } catch (e) {}
    }
    return [];
  }

  // Initialize Application (Instant DB/Memory Load with 100% Edit Persistence)
  async init() {
    console.log('Initializing Vedabase (Cantos 1 to 12 Complete - 14,090 Verses)...');
    this.setupTheme();
    this.bindEvents();

    try {
      await window.vdb.init();
      // 1. Check if DB has stored slokas (which contains all edits and custom entries)
      const dbSlokas = await window.vdb.getAllSlokas();
      if (dbSlokas && dbSlokas.length > 0) {
        console.log(`Loaded ${dbSlokas.length} slokas directly from IndexedDB.`);
        this.buildMemoryMap(dbSlokas);
        for (let c = 1; c <= 12; c++) {
          if (dbSlokas.some(s => Number(s.canto) === c)) {
            this.loadedCantos.add(c);
          }
        }
      } else {
        // First run only: load seed slokas
        if (window.SEED_SLOKAS && window.SEED_SLOKAS.length > 0) {
          this.buildMemoryMap(window.SEED_SLOKAS);
          this.loadedCantos.add(1);
          await window.vdb.bulkSaveSlokas(window.SEED_SLOKAS);
        }
      }
    } catch (err) {
      console.warn('Database initialization fallback:', err);
      if (window.SEED_SLOKAS && window.SEED_SLOKAS.length > 0) {
        this.buildMemoryMap(window.SEED_SLOKAS);
        this.loadedCantos.add(1);
      }
    }

    // 2. Render Sidebar & Initial Verse IMMEDIATELY
    this.renderSidebar();

    let initialVerseKey = '1.1.1';
    try {
      const savedKey = await window.vdb.getSetting('lastVerseKey', '1.1.1');
      if (savedKey) initialVerseKey = savedKey;
    } catch (e) {}

    await this.loadVerseByKey(initialVerseKey);

    // 3. Build search index
    setTimeout(() => {
      try {
        if (window.searchEngine && this.allSlokas.length > 0) {
          window.searchEngine.buildIndex(this.allSlokas);
        }
      } catch (err) {
        console.warn('Search index build notice:', err);
      }
    }, 50);

    // 4. Background preload for any unpopulated cantos
    setTimeout(() => {
      this.preloadAllCantosInBackground();
    }, 150);
  }

  // Reload data from DB and update In-Memory Search Engine
  async reloadAllSlokasAndIndex() {
    try {
      if (window.vdb && window.vdb.db) {
        const dbSlokas = await window.vdb.getAllSlokas();
        if (dbSlokas && dbSlokas.length > 0) {
          this.buildMemoryMap(dbSlokas);
        }
      }
    } catch (e) {}
    
    if (window.searchEngine) {
      window.searchEngine.buildIndex(this.allSlokas);
    }
  }

  // Render Sidebar Cantos and all 335 Chapters with authentic Hindi names (English Numbering)
  renderSidebar() {
    const container = document.getElementById('cantoListContainer');
    if (!container) return;

    const cantos = getCantoStructure();
    container.innerHTML = cantos.map(c => `
      <li class="canto-item ${c.canto === this.currentCanto ? 'expanded active' : ''}" id="canto-item-${c.canto}">
        <button class="canto-header-btn" onclick="window.app.toggleCantoAccordion(${c.canto})">
          <span style="font-weight: 700;">${c.name}</span>
          <span style="font-size: 0.75rem; opacity: 0.7;">▾</span>
        </button>
        <ul class="chapter-sublist" id="chapter-list-${c.canto}">
          ${(c.chapters || []).map(ch => `
            <li>
              <button class="chapter-btn ${c.canto === this.currentCanto && ch.chapter === this.currentChapter ? 'active' : ''}" 
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

  // Accordion toggle: Toggles entire scripture open/close
  toggleScriptureAccordion(scriptureId) {
    const target = document.getElementById(scriptureId);
    if (target) {
      target.classList.toggle('expanded');
    }
  }

  // Accordion toggle: Toggles canto open/close without layout jump
  toggleCantoAccordion(canto) {
    const targetItem = document.getElementById(`canto-item-${canto}`);
    if (targetItem) {
      targetItem.classList.toggle('expanded');
    }
  }

  // Helper to sanitize Sanskrit text (remove any embedded titles like ॥ श्रीमद्भागवतम्... ॥)
  cleanSanskritText(text) {
    if (!text) return '';
    return text
      .replace(/^॥\s*श्रीमद्भागवतम्[^॥\n]*॥\s*\n?/gi, '')
      .replace(/॥\s*श्रीमद्भागवतम्[^॥\n]*॥/gi, '')
      .trim();
  }

  // Load a Chapter and its first verse
  async loadChapter(canto, chapter) {
    const cNum = Number(canto);
    const chNum = Number(chapter);
    this.currentCanto = cNum;
    this.currentChapter = chNum;

    // Ensure the canto is loaded
    await this.ensureCantoLoaded(cNum);

    // Fetch chapter verses
    this.chapterSlokas = await this.getChapterVerses(cNum, chNum);

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

  // Load verse by VerseKey (e.g. "1.1.1", "10.14.8" or "12.13.23")
  async loadVerseByKey(verseKey, highlightWord = null) {
    if (!verseKey) return;
    const cleanKey = verseKey.trim();
    this.currentHighlightWord = (highlightWord && highlightWord.trim().length >= 2) ? highlightWord.trim() : null;

    // Check if target canto needs on-demand load
    const parts = cleanKey.split('.');
    if (parts.length >= 1) {
      const c = parseInt(parts[0], 10);
      if (!isNaN(c) && c >= 1 && c <= 12) {
        await this.ensureCantoLoaded(c);
      }
    }

    const sloka = await this.getSlokaData(cleanKey);

    if (sloka) {
      this.currentCanto = Number(sloka.canto);
      this.currentChapter = Number(sloka.chapter);
      this.chapterSlokas = await this.getChapterVerses(sloka.canto, sloka.chapter);
      await this.displaySloka(sloka);
    } else {
      if (parts.length >= 2) {
        const c = parseInt(parts[0], 10);
        const ch = parseInt(parts[1], 10);
        const v = parts[2] ? (isNaN(parseInt(parts[2], 10)) ? parts[2] : parseInt(parts[2], 10)) : 1;

        this.currentCanto = c;
        this.currentChapter = ch;
        this.chapterSlokas = await this.getChapterVerses(c, ch);

        const existing = this.chapterSlokas.find(s => s.verse == v);
        if (existing) {
          await this.displaySloka(existing);
        } else {
          const cantos = getCantoStructure();
          const cantoObj = cantos.find(co => co.canto === c);
          const chapterObj = cantoObj?.chapters?.find(cho => cho.chapter === ch);
          const chapterTitle = chapterObj ? `अध्याय ${ch} - ${chapterObj.name}` : `अध्याय ${ch}`;
          const totalV = chapterObj ? chapterObj.totalVerses : 1;

          const placeholderSloka = {
            id: `sb-${c}-${ch}-${v}`,
            canto: c,
            chapter: ch,
            verse: v,
            verseKey: `${c}.${ch}.${v}`,
            sanskritDevanagari: `श्लोक लोड हो रहा है...`,
            sanskritIAST: '',
            wordToWord: [],
            hindiTranslation: `यह ${cantoObj?.name || `स्कन्ध ${c}`}, ${chapterTitle} का श्लोक ${v} है। (कुल ${totalV} श्लोक)।`,
            hindiPurport: ``,
            category: {
              book: "श्रीमद्भागवतम्",
              cantoTitleHindi: cantoObj?.name || `स्कन्ध ${c}`,
              chapterTitleHindi: chapterTitle
            },
            tags: ["श्रीमद्भागवतम्", cantoObj?.name?.split(' - ')[0] || `स्कन्ध ${c}`]
          };
          await this.displaySloka(placeholderSloka);
        }
      } else {
        this.showToast(`श्लोक '${cleanKey}' नहीं मिला।`);
      }
    }

    this.highlightActiveSidebar();
  }

  // Highlight active Canto & Chapter in Sidebar (Accordion Aware)
  highlightActiveSidebar() {
    document.querySelectorAll('.canto-item').forEach(el => {
      if (el.id === `canto-item-${this.currentCanto}`) {
        el.classList.add('active', 'expanded');
      } else {
        el.classList.remove('active', 'expanded');
      }
    });

    document.querySelectorAll('.chapter-btn').forEach(btn => btn.classList.remove('active'));
    const activeChapBtn = document.getElementById(`chap-btn-${this.currentCanto}-${this.currentChapter}`);
    if (activeChapBtn) {
      activeChapBtn.classList.add('active');
    }
  }

  // Display a Sloka in the main reader area (English Numbering)
  async displaySloka(sloka) {
    this.currentSloka = sloka;
    window.vdb.setSetting('lastVerseKey', sloka.verseKey);

    // 1. Badges & Titles
    const keyBadge = document.getElementById('currentVerseKeyBadge');
    if (keyBadge) keyBadge.textContent = `SB ${sloka.verseKey}`;

    const userEditBadge = document.getElementById('userEditedBadge');
    if (userEditBadge) {
      userEditBadge.style.display = sloka.isUserEdited ? 'inline-flex' : 'none';
    }

    const chTitle = document.getElementById('currentChapterName');
    if (chTitle) {
      chTitle.textContent = sloka.category?.chapterTitleHindi || `अध्याय ${sloka.chapter}`;
    }

    // 2. Render Interactive Horizontal Verse Strip (1, 2, 3... N)
    this.renderVerseSelectorStrip();

    // 3. Sanskrit Verse & IAST (Clean pure Sanskrit without embedded chapter headers)
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

    const cantos = getCantoStructure();
    const cantoObj = cantos.find(c => c.canto === this.currentCanto);
    const chapterObj = cantoObj?.chapters?.find(ch => ch.chapter === this.currentChapter);
    const totalVerses = chapterObj ? chapterObj.totalVerses : Math.max(this.chapterSlokas.length, 1);

    const existingMap = new Map();
    this.chapterSlokas.forEach(s => existingMap.set(parseInt(s.verse, 10), s));

    const currentVNum = parseInt(this.currentSloka.verse, 10);

    const buttons = [];
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

    scrollContainer.innerHTML = buttons.join('');

    // Auto-scroll active verse into view in the strip
    const activeBtn = scrollContainer.querySelector('.verse-strip-btn.active');
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  // Update verse navigation counter (e.g. 1 / 23)
  updateNavCounter() {
    const counter = document.getElementById('verseCounterStatus');
    if (!counter) return;

    const cantos = getCantoStructure();
    const cantoObj = cantos.find(c => c.canto === this.currentCanto);
    const chapterObj = cantoObj?.chapters?.find(ch => ch.chapter === this.currentChapter);
    const totalV = chapterObj ? chapterObj.totalVerses : Math.max(this.chapterSlokas.length, 1);

    const vNum = parseInt(this.currentSloka?.verse, 10) || 1;
    counter.textContent = `${vNum} / ${totalV}`;
  }

  // Next Verse
  async nextVerse() {
    const cantos = getCantoStructure();
    const cantoObj = cantos.find(c => c.canto === this.currentCanto);
    const chapterObj = cantoObj?.chapters?.find(ch => ch.chapter === this.currentChapter);
    const maxVerses = chapterObj ? chapterObj.totalVerses : (this.chapterSlokas.length || 1);

    const currentVNum = parseInt(this.currentSloka?.verse, 10) || 1;

    if (currentVNum < maxVerses) {
      const nextV = currentVNum + 1;
      await this.loadVerseByKey(`${this.currentCanto}.${this.currentChapter}.${nextV}`);
    } else {
      // Go to next chapter
      const nextChapter = this.currentChapter + 1;
      if (cantoObj && nextChapter <= cantoObj.totalChapters) {
        await this.loadChapter(this.currentCanto, nextChapter);
      } else if (this.currentCanto < 12) {
        // Go to next canto
        await this.loadChapter(this.currentCanto + 1, 1);
      } else {
        this.showToast('श्रीमद्भागवतम् का अन्तिम श्लोक!');
      }
    }
  }

  // Previous Verse
  async prevVerse() {
    const currentVNum = parseInt(this.currentSloka?.verse, 10) || 1;

    if (currentVNum > 1) {
      const prevV = currentVNum - 1;
      await this.loadVerseByKey(`${this.currentCanto}.${this.currentChapter}.${prevV}`);
    } else {
      // Go to previous chapter
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

  // Directly search any Sanskrit / Hindi word in the global Search Dialog Modal
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
    const wordMeaningsText = (s.wordToWord || []).map(w => `${w.sanskrit} — ${w.hindi}`).join('; ');

    const formatted = `🕉️ *श्रीमद्भागवतम् ${s.verseKey}* 🕉️\n\n` +
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
  executeSearch(query) {
    const list = document.getElementById('searchResultsList');
    const speedBadge = document.getElementById('searchSpeedBadge');
    if (!list) return;

    const res = window.searchEngine.search(query);

    if (speedBadge) {
      speedBadge.textContent = `${res.timeMs} ms`;
    }

    if (res.results.length === 0) {
      list.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 2rem;">'${query || ''}' के लिए कोई श्लोक नहीं मिला।</div>`;
      return;
    }

    const highlightWord = query ? query.trim() : '';

    list.innerHTML = res.results.map(s => {
      const sanskritFirstLine = this.cleanSanskritText(s.sanskritDevanagari || '').split('\n')[0];
      return `
        <div class="search-result-item" onclick="window.app.selectVerseFromSearch('${s.verseKey}', '${this.escapeHtml(highlightWord)}')">
          <div class="search-res-header">
            <span class="search-res-key">SB ${s.verseKey}</span>
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

  // Toggle floating control menu in presentation mode
  togglePresMenu() {
    const header = document.getElementById('presHeader');
    if (!header) return;

    const isCurrentlyHidden = header.classList.contains('pres-hidden');
    if (isCurrentlyHidden) {
      this.showPresMenu();
    } else {
      this.hidePresMenu();
    }
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
    if (this.isPresentationOpen) {
      this.closePresentationMode();
    } else {
      this.openPresentationMode();
    }
  }

  // Toggle individual section visibility in presentation mode
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

  // Adjust Slide Font Scale for Projector View
  adjustPresFontSize(delta) {
    this.presFontScale = Math.max(0.8, Math.min(1.8, (this.presFontScale || 1) + delta));
    const sanskritEl = document.getElementById('presSanskrit');
    const transEl = document.getElementById('presTranslation');
    if (sanskritEl) sanskritEl.style.fontSize = `${2.35 * this.presFontScale}rem`;
    if (transEl) transEl.style.fontSize = `${1.4 * this.presFontScale}rem`;
  }

  // Toggle Browser Fullscreen (F11)
  togglePresFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn('Fullscreen notice:', err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }

  // Render Current Slide in Presentation Mode
  renderPresentationSlide() {
    if (!this.currentSloka) return;
    const s = this.currentSloka;

    const presVerseKey = document.getElementById('presVerseKey');
    if (presVerseKey) presVerseKey.textContent = `SB ${s.verseKey}`;

    const presChapterTitle = document.getElementById('presChapterTitle');
    if (presChapterTitle) {
      presChapterTitle.textContent = s.category?.chapterTitleHindi || `स्कन्ध ${s.canto} • अध्याय ${s.chapter}`;
    }

    const cantos = getCantoStructure();
    const cantoObj = cantos.find(c => c.canto === this.currentCanto);
    const chapterObj = cantoObj?.chapters?.find(ch => ch.chapter === this.currentChapter);
    const totalV = chapterObj ? chapterObj.totalVerses : Math.max(this.chapterSlokas.length, 1);

    const presCounter = document.getElementById('presCounter');
    if (presCounter) {
      presCounter.textContent = `श्लोक ${s.verse} / ${totalV}`;
    }

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

    // Apply visibility of active sections
    this.applyPresSectionVisibility();

    // Trigger auto fade of search highlight
    this.triggerHighlightFadeTimer();

    // Reset slide scroll position to top
    const stage = document.getElementById('presentationStage');
    if (stage) stage.scrollTop = 0;
  }

  // Theme Management (Dark / Light / Sepia)
  setupTheme() {
    const saved = localStorage.getItem('vedabase_theme') || 'dark';
    this.setTheme(saved);
  }

  setTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vedabase_theme', theme);

    const icon = document.getElementById('themeIcon');
    if (icon) {
      icon.textContent = '🌓';
    }
  }

  toggleNextTheme() {
    const themes = ['dark', 'light', 'sepia'];
    const nextIdx = (themes.indexOf(this.currentTheme) + 1) % themes.length;
    this.setTheme(themes[nextIdx]);
  }

  // Open Edit Modal for the current verse
  openEditCurrentVerseModal() {
    if (!this.currentSloka) {
      this.showToast('सम्पादित करने के लिए कोई श्लोक चयनित नहीं है।');
      return;
    }

    const sloka = this.currentSloka;
    const titleEl = document.getElementById('editModalTitle');
    if (titleEl) titleEl.textContent = `✏️ श्लोक सम्पादन (SB ${sloka.verseKey})`;

    document.getElementById('editVerseKey').value = sloka.verseKey || '';
    document.getElementById('editCanto').value = sloka.canto || 1;
    document.getElementById('editChapter').value = sloka.chapter || 1;
    document.getElementById('editVerse').value = sloka.verse || 1;

    const cantoBadge = document.getElementById('editCantoBadge');
    const chapBadge = document.getElementById('editChapterBadge');
    const verseBadge = document.getElementById('editVerseBadge');
    if (cantoBadge) cantoBadge.textContent = sloka.canto || 1;
    if (chapBadge) chapBadge.textContent = sloka.chapter || 1;
    if (verseBadge) verseBadge.textContent = sloka.verse || 1;

    document.getElementById('editSanskrit').value = sloka.sanskritDevanagari || '';

    // Format wordToWord array into editable text lines
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

    // Parse words string back to array of {sanskrit, hindi}
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

    const cantos = getCantoStructure();
    const cantoObj = cantos.find(c => c.canto === canto);
    const chapterObj = cantoObj?.chapters?.find(ch => ch.chapter === chapter);

    const sloka = {
      id: `sb-${canto}-${chapter}-${verse}`,
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

    await this.saveUserCustomEdit(sloka);
    await this.reloadAllSlokasAndIndex();

    this.showToast(`✅ श्लोक SB ${verseKey} स्थायी रूप से सुरक्षित (Saved Permanently)!`);
    this.closeAllModals();
    await this.loadVerseByKey(verseKey);
  }

  // Export JSON Backup to Laptop (Includes all slokas in Master JSON format)
  async exportJSONBackup() {
    this.showToast('⏳ बैकअप तैयार किया जा रहा है...');

    let slokas = await window.vdb.getAllSlokas();
    if (!slokas || slokas.length === 0) {
      slokas = this.allSlokas || [];
    }

    if (slokas.length === 0) {
      this.showToast('डेटाबेस में कोई श्लोक नहीं है।');
      return;
    }

    // Sort by canto, chapter, verse
    slokas.sort((a, b) => {
      if (a.canto !== b.canto) return (a.canto || 0) - (b.canto || 0);
      if (a.chapter !== b.chapter) return (a.chapter || 0) - (b.chapter || 0);
      const vA = parseInt(a.verse, 10) || 0;
      const vB = parseInt(b.verse, 10) || 0;
      return vA - vB;
    });

    const exportData = {
      title: "Hindi Srimad Bhagavatam - Complete Database Backup",
      total_slokas: slokas.length,
      export_date: new Date().toISOString(),
      verses: slokas.map(s => {
        let wMeaningsStr = '';
        if (Array.isArray(s.wordToWord) && s.wordToWord.length > 0) {
          wMeaningsStr = s.wordToWord.map(w => `${w.sanskrit}—${w.hindi}`).join('; ');
        }
        return {
          sloka_number: s.verseKey || `${s.canto}.${s.chapter}.${s.verse}`,
          canto: s.canto,
          chapter: s.chapter,
          verse_number: s.verse,
          sloka: s.sanskritDevanagari || '',
          word_to_word_meaning: wMeaningsStr,
          wordToWord: s.wordToWord || [],
          translation: s.hindiTranslation || '',
          purport: s.hindiPurport || '',
          category: s.category || {
            book: "श्रीमद्भागवतम्",
            cantoTitleHindi: `स्कन्ध ${s.canto}`,
            chapterTitleHindi: `अध्याय ${s.chapter}`
          },
          tags: s.tags || [`स्कन्ध ${s.canto}`, `अध्याय ${s.chapter}`, "श्रीमद्भागवतम्"]
        };
      })
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Hindi_Vedabase_Master_Backup_${slokas.length}_Slokas_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.showToast(`📥 समस्त ${slokas.length} श्लोकों का JSON बैकअप डाउनलोड हुआ!`);
  }

  // Normalize JSON data (supports standard backup JSON, master JSON, array of verses, or chapters)
  normalizeJsonToSlokas(data) {
    if (!data) return [];
    const results = [];
    const cantos = getCantoStructure();

    let rawList = [];
    if (Array.isArray(data)) {
      rawList = data;
    } else if (typeof data === 'object' && data !== null) {
      if (Array.isArray(data.verses)) {
        rawList = data.verses;
      } else if (Array.isArray(data.slokas)) {
        rawList = data.slokas;
      } else if (data.verseKey || (data.canto && data.chapter)) {
        rawList = [data];
      }
    }

    const parseChapterObj = (chap) => {
      const cantoNum = parseInt(chap.canto, 10) || 1;
      const chapNum = parseInt(chap.chapter, 10) || 1;
      const cantoObj = cantos.find(c => c.canto === cantoNum);
      const chapterObj = cantoObj?.chapters?.find(ch => ch.chapter === chapNum);
      const chapTitle = chap.chapter_name || (chapterObj ? chapterObj.name : `अध्याय ${chapNum}`);

      (chap.verses || []).forEach(v => {
        const vNum = parseInt(v.verse_number || v.verse || 1, 10);
        const verseKey = `${cantoNum}.${chapNum}.${vNum}`;
        
        const wordToWord = [];
        const rawW = v.word_to_word_meaning || v.word_meanings || v.wordToWord;
        if (typeof rawW === 'string') {
          const parts = rawW.split(/[;\n]+/).map(p => p.trim()).filter(p => p.length > 0);
          parts.forEach(part => {
            const pair = part.split(/[—\-–:]/).map(s => s.trim());
            if (pair.length >= 2) {
              wordToWord.push({ sanskrit: pair[0], hindi: pair.slice(1).join(' - ') });
            } else if (pair.length === 1 && pair[0]) {
              wordToWord.push({ sanskrit: pair[0], hindi: '' });
            }
          });
        } else if (Array.isArray(rawW)) {
          rawW.forEach(w => wordToWord.push(w));
        }

        results.push({
          id: `sb-${cantoNum}-${chapNum}-${vNum}`,
          canto: cantoNum,
          chapter: chapNum,
          verse: vNum,
          verseKey,
          sanskritDevanagari: v.sloka || v.sanskrit || v.sanskritDevanagari || '',
          sanskritIAST: v.iast || v.sanskritIAST || '',
          wordToWord,
          hindiTranslation: v.translation || v.hindiTranslation || '',
          hindiPurport: v.purport || v.hindiPurport || '',
          category: {
            book: "श्रीमद्भागवतम्",
            cantoTitleHindi: cantoObj?.name || `स्कन्ध ${cantoNum}`,
            chapterTitleHindi: `अध्याय ${chapNum} - ${chapTitle}`
          },
          tags: [`स्कन्ध ${cantoNum}`, `अध्याय ${chapNum}`, "श्रीमद्भागवतम्"]
        });
      });
    };

    rawList.forEach(item => {
      if (item.verses && Array.isArray(item.verses)) {
        parseChapterObj(item);
        return;
      }

      // If item already has verseKey and standard fields
      if (item.verseKey && item.sanskritDevanagari !== undefined) {
        results.push({
          id: item.id || `sb-${item.canto}-${item.chapter}-${item.verse}`,
          canto: parseInt(item.canto, 10) || 1,
          chapter: parseInt(item.chapter, 10) || 1,
          verse: item.verse,
          verseKey: item.verseKey,
          sanskritDevanagari: item.sanskritDevanagari || '',
          sanskritIAST: item.sanskritIAST || '',
          wordToWord: Array.isArray(item.wordToWord) ? item.wordToWord : [],
          hindiTranslation: item.hindiTranslation || '',
          hindiPurport: item.hindiPurport || '',
          category: item.category || {
            book: "श्रीमद्भागवतम्",
            cantoTitleHindi: `स्कन्ध ${item.canto}`,
            chapterTitleHindi: `अध्याय ${item.chapter}`
          },
          tags: Array.isArray(item.tags) ? item.tags : [`स्कन्ध ${item.canto}`, `अध्याय ${item.chapter}`]
        });
        return;
      }

      let cNum = 1, chNum = 1, vNum = 1;
      if (item.sloka_number) {
        const parts = String(item.sloka_number).split('.').map(n => parseInt(n, 10));
        if (parts.length >= 3) {
          cNum = parts[0]; chNum = parts[1]; vNum = parts[2];
        }
      } else {
        cNum = parseInt(item.canto, 10) || 1;
        chNum = parseInt(item.chapter, 10) || 1;
        vNum = parseInt(item.verse_number || item.verse || 1, 10);
      }

      const verseKey = `${cNum}.${chNum}.${vNum}`;
      const cantoObj = cantos.find(c => c.canto === cNum);
      const chapterObj = cantoObj?.chapters?.find(ch => ch.chapter === chNum);
      const chapTitle = chapterObj ? chapterObj.name : `अध्याय ${chNum}`;

      const wordToWord = [];
      const rawMeanings = item.word_to_word_meaning || item.word_meanings || item.wordToWord;
      if (typeof rawMeanings === 'string') {
        const parts = rawMeanings.split(/[;\n]+/).map(p => p.trim()).filter(p => p.length > 0);
        parts.forEach(part => {
          const pair = part.split(/[—\-–:]/).map(s => s.trim());
          if (pair.length >= 2) {
            wordToWord.push({ sanskrit: pair[0], hindi: pair.slice(1).join(' - ') });
          } else if (pair.length === 1 && pair[0]) {
            wordToWord.push({ sanskrit: pair[0], hindi: '' });
          }
        });
      } else if (Array.isArray(rawMeanings)) {
        rawMeanings.forEach(w => wordToWord.push(w));
      }

      results.push({
        id: `sb-${cNum}-${chNum}-${vNum}`,
        canto: cNum,
        chapter: chNum,
        verse: vNum,
        verseKey,
        sanskritDevanagari: item.sloka || item.sanskrit || item.sanskritDevanagari || '',
        sanskritIAST: item.iast || item.sanskritIAST || '',
        wordToWord,
        hindiTranslation: item.translation || item.hindiTranslation || '',
        hindiPurport: item.purport || item.hindiPurport || '',
        category: {
          book: "श्रीमद्भागवतम्",
          cantoTitleHindi: cantoObj?.name || `स्कन्ध ${cNum}`,
          chapterTitleHindi: `अध्याय ${chNum} - ${chapTitle}`
        },
        tags: [`स्कन्ध ${cNum}`, `अध्याय ${chNum}`, "श्रीमद्भागवतम्"]
      });
    });

    return results;
  }

  // Import JSON Backup from Laptop
  async importJSONBackup(file) {
    if (!file) return;
    const progressEl = document.getElementById('importProgressText');
    if (progressEl) progressEl.textContent = '⏳ फाइल पढ़ी जा रही है...';

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const rawJson = JSON.parse(e.target.result);
        const slokas = this.normalizeJsonToSlokas(rawJson);

        if (slokas.length > 0) {
          if (progressEl) progressEl.textContent = `⏳ ${slokas.length} श्लोक आयात हो रहे हैं...`;
          await window.vdb.clearAllSlokas();
          await window.vdb.bulkSaveSlokas(slokas);
          this.buildMemoryMap(slokas);
          for (let c = 1; c <= 12; c++) this.loadedCantos.add(c);

          if (window.searchEngine) {
            window.searchEngine.buildIndex(slokas);
          }

          if (progressEl) progressEl.textContent = `✅ ${slokas.length} श्लोक सफलतापूर्वक रीस्टोर हुए!`;
          this.showToast(`✅ ${slokas.length} श्लोक JSON से सफलतापूर्वक रीस्टोर हुए!`);
          this.closeAllModals();
          await this.loadVerseByKey(slokas[0].verseKey || '1.1.1');
        } else {
          if (progressEl) progressEl.textContent = '❌ कोई श्लोक नहीं मिला।';
          this.showToast('अमान्य JSON प्रारूप।');
        }
      } catch (err) {
        if (progressEl) progressEl.textContent = '❌ त्रुटि: ' + err.message;
        this.showToast('JSON पार्स करने में त्रुटि: ' + err.message);
      }
    };
    reader.readAsText(file);
  }

  // Helper to format prose into clean paragraphs (<p class="para-block">) and quotes
  renderParagraphs(text) {
    if (!text) return '';
    const rawParagraphs = text.split(/(?:\r?\n\s*){2,}/);
    const htmlBlocks = [];

    for (let para of rawParagraphs) {
      let p = para.trim();
      if (!p) continue;

      const lines = p.split(/\r?\n/);
      // Check if it's a verse quote block (contains ॥ and <= 6 lines)
      if (p.includes('॥') && lines.length <= 6 && p.length < 400) {
        const cleanedLines = lines.map(l => this.escapeHtml(l.trim())).filter(Boolean).join('<br>');
        htmlBlocks.push(`<div class="verse-quote-block">${cleanedLines}</div>`);
      } else {
        // Normal paragraph: unwrap single newlines into spaces so text flows edge-to-edge
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
    // Quick Search Button & Shortcuts
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

      // Enter key selects the single/first result or jumps to exact verse
      modalSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const query = e.target.value.trim();
          if (!query) return;

          // 1. Direct verse number match (e.g. "1.1.1", "10.2.4")
          const verseMatch = query.replace(/^SB\s*/i, '').match(/^(\d{1,2})\.(\d{1,3})\.(\d{1,3})$/);
          if (verseMatch) {
            const verseKey = `${parseInt(verseMatch[1], 10)}.${parseInt(verseMatch[2], 10)}.${parseInt(verseMatch[3], 10)}`;
            this.selectVerseFromSearch(verseKey);
            return;
          }

          // 2. Select first search result
          const res = window.searchEngine ? window.searchEngine.search(query) : { results: [] };
          if (res.results && res.results.length > 0) {
            this.selectVerseFromSearch(res.results[0].verseKey, query);
          }
        }
      });
    }

    // Header Actions
    document.getElementById('logoHome')?.addEventListener('click', () => this.loadVerseByKey('1.1.1'));
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
    
    // Clicking anywhere on presentation stage closes the open floating menu
    document.getElementById('presentationStage')?.addEventListener('click', () => {
      if (this.isPresentationOpen) {
        this.hidePresMenu();
      }
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
        this.openModal('managerModal');
      });
    }

    document.getElementById('btnExportJSON')?.addEventListener('click', () => this.exportJSONBackup());
    document.getElementById('btnExportCustomEdits')?.addEventListener('click', () => this.exportCustomEdits());
    document.getElementById('importJSONFile')?.addEventListener('change', (e) => this.importJSONBackup(e.target.files[0]));

    // Global Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      // 1. Ctrl+K opens search anywhere (both regular mode & presentation mode)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        this.openModal('searchModal');
        this.executeSearch('');
        return;
      }

      // 2. Escape closes active modal first; if menu open in presentation, closes menu; else exits presentation
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

      // 3. 'M' key toggles presentation floating menu
      if (this.isPresentationOpen && (e.key === 'm' || e.key === 'M') && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        this.togglePresMenu();
        return;
      }

      // 4. Arrow & Space navigation (when not typing in an input or textarea)
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
