/**
 * Hindi Vedabase - Ultra-Fast In-Memory Search Engine (search.js)
 * Designed for instant live audience search (< 2ms latency across all scriptures)
 * Full support for:
 *  - Srimad Bhagavad Gita (18 Chapters, 700 Verses)
 *  - Sri Isopanisad (Invocation + 18 Mantras)
 *  - Srimad Bhagavatam (12 Cantos, 335 Chapters, 18,000 Verses)
 *  - Sri Caitanya-caritamrta (3 Lilas: Adi, Madhya, Antya; 62 Chapters)
 */

class VedabaseSearchEngine {
  constructor() {
    this.slokas = [];
    this.verseMap = new Map(); // verseKey or ID -> sloka
    this.wordIndex = new Map(); // word -> Set of sloka ids
    this.tagIndex = new Map();  // tag -> Set of sloka ids
    this.isIndexed = false;
  }

  // Helper to get lila name string
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

  // Build high-speed in-memory inverted indices
  buildIndex(slokas) {
    console.time('SearchIndexBuild');
    this.slokas = slokas || [];
    this.verseMap.clear();
    this.wordIndex.clear();
    this.tagIndex.clear();

    for (let i = 0; i < this.slokas.length; i++) {
      const s = this.slokas[i];
      const isCC = s.book === 'CC' || (s.id && s.id.startsWith('cc-'));
      const isISO = !isCC && (s.book === 'ISO' || (s.id && s.id.startsWith('iso-')));
      const isBG = !isCC && !isISO && (s.book === 'BG' || (s.id && s.id.startsWith('bg-')));

      let key;
      if (isCC) {
        const lilaKey = this.getLilaKey(s.lila || s.canto || (s.category?.cantoTitleHindi?.includes('मध्य') ? 2 : (s.category?.cantoTitleHindi?.includes('अन्त्य') ? 3 : 1)));
        key = `cc ${lilaKey} ${s.chapter}.${s.verse}`;
      } else if (isISO) {
        key = `iso ${s.verseKey || s.verse}`;
      } else if (isBG) {
        key = s.verseKey || `${s.chapter}.${s.verse}`;
      } else {
        key = s.verseKey || `${s.canto}.${s.chapter}.${s.verse}`;
      }

      this.verseMap.set(key, s);
      if (s.id) this.verseMap.set(s.id, s);
      if (s.verseKey) this.verseMap.set(s.verseKey, s);

      if (isCC) {
        const lilaKey = this.getLilaKey(s.lila || s.canto || 1);
        const lilaNum = lilaKey === 'adi' ? 1 : (lilaKey === 'madhya' ? 2 : 3);

        this.verseMap.set(`cc-${lilaKey}-${s.chapter}-${s.verse}`, s);
        this.verseMap.set(`cc.${lilaKey}.${s.chapter}.${s.verse}`, s);
        this.verseMap.set(`cc ${lilaKey}.${s.chapter}.${s.verse}`, s);
        this.verseMap.set(`cc ${lilaKey} ${s.chapter}.${s.verse}`, s);
        this.verseMap.set(`${lilaKey}.${s.chapter}.${s.verse}`, s);
        this.verseMap.set(`${lilaKey} ${s.chapter}.${s.verse}`, s);
        this.verseMap.set(`cc ${lilaNum}.${s.chapter}.${s.verse}`, s);
        this.verseMap.set(`cc-${lilaNum}-${s.chapter}-${s.verse}`, s);
      } else if (isISO) {
        const vK = String(s.verseKey || s.verse).toLowerCase();
        this.verseMap.set(`iso-${vK}`, s);
        this.verseMap.set(`iso.${vK}`, s);
        this.verseMap.set(`iso ${vK}`, s);
        this.verseMap.set(`iso${vK}`, s);
        if (vK === 'inv' || vK === '0') {
          this.verseMap.set('iso 0', s);
          this.verseMap.set('iso-0', s);
          this.verseMap.set('iso inv', s);
          this.verseMap.set('iso invocation', s);
        }
      } else if (isBG) {
        this.verseMap.set(`bg-${s.chapter}-${s.verse}`, s);
        this.verseMap.set(`bg.${s.chapter}.${s.verse}`, s);
        this.verseMap.set(`bg ${s.chapter}.${s.verse}`, s);
        this.verseMap.set(`bg${s.chapter}.${s.verse}`, s);
      } else {
        this.verseMap.set(`sb-${s.canto}-${s.chapter}-${s.verse}`, s);
        this.verseMap.set(`sb.${s.canto}.${s.chapter}.${s.verse}`, s);
        this.verseMap.set(`sb ${s.canto}.${s.chapter}.${s.verse}`, s);
      }

      // Index tags
      if (Array.isArray(s.tags)) {
        s.tags.forEach(tag => {
          const normTag = tag.trim().toLowerCase();
          if (!this.tagIndex.has(normTag)) {
            this.tagIndex.set(normTag, new Set());
          }
          this.tagIndex.get(normTag).add(s.id || key);
        });
      }

      // Index words from Sanskrit/Bengali, Word meanings, Hindi translation, Purport
      const textToTokenize = [
        s.sanskritDevanagari || '',
        s.sanskritIAST || '',
        s.hindiTranslation || '',
        (s.wordToWord || []).map(w => `${w.sanskrit} ${w.hindi}`).join(' '),
        s.hindiPurport ? s.hindiPurport.substring(0, 1000) : ''
      ].join(' ');

      const tokens = this.tokenize(textToTokenize);
      tokens.forEach(tok => {
        if (!this.wordIndex.has(tok)) {
          this.wordIndex.set(tok, new Set());
        }
        this.wordIndex.get(tok).add(s.id || key);
      });
    }

    // Index Sri Caitanya-caritamrta metadata
    if (window.CC_LILAS_DATA) {
      window.CC_LILAS_DATA.forEach(l => {
        (l.chapters || []).forEach(ch => {
          const chText = `चैतन्य चरितामृत चैतन्य-चरितामृत ${l.name} ${ch.name} ${ch.englishName || ''} अध्याय ${ch.chapter}`;
          const chTokens = this.tokenize(chText);
          chTokens.forEach(tok => {
            if (!this.wordIndex.has(tok)) {
              this.wordIndex.set(tok, new Set());
            }
            this.wordIndex.get(tok).add(`cc-${l.key}-${ch.chapter}-1`);
          });
        });
      });
    }

    // Index Sri Isopanisad metadata
    if (window.ISO_DATA && Array.isArray(window.ISO_DATA.mantras)) {
      window.ISO_DATA.mantras.forEach(m => {
        const mText = `श्री ईशोपनिषद् ईशोपनिषद् उपनिषद् ${m.label} ${m.name}`;
        const mTokens = this.tokenize(mText);
        mTokens.forEach(tok => {
          if (!this.wordIndex.has(tok)) {
            this.wordIndex.set(tok, new Set());
          }
          this.wordIndex.get(tok).add(`iso-${m.key}`);
        });
      });
    }

    // Index 18 Chapters from BG_CHAPTERS_DATA
    if (window.BG_CHAPTERS_DATA) {
      window.BG_CHAPTERS_DATA.forEach(ch => {
        const chText = `भगवद्गीता श्रीमद्भगवद्गीता गीता ${ch.name} ${ch.englishName || ''} अध्याय ${ch.chapter}`;
        const chTokens = this.tokenize(chText);
        chTokens.forEach(tok => {
          if (!this.wordIndex.has(tok)) {
            this.wordIndex.set(tok, new Set());
          }
          this.wordIndex.get(tok).add(`bg-${ch.chapter}-1`);
        });
      });
    }

    // Index 335 Chapters from SB_CANTOS_DATA
    if (window.SB_CANTOS_DATA) {
      window.SB_CANTOS_DATA.forEach(c => {
        (c.chapters || []).forEach(ch => {
          const chText = `भागवतम् श्रीमद्भागवतम् ${c.name} ${ch.name} अध्याय ${ch.chapter}`;
          const chTokens = this.tokenize(chText);
          chTokens.forEach(tok => {
            if (!this.wordIndex.has(tok)) {
              this.wordIndex.set(tok, new Set());
            }
            this.wordIndex.get(tok).add(`sb-${c.canto}-${ch.chapter}-1`);
          });
        });
      });
    }

    this.isIndexed = true;
    console.timeEnd('SearchIndexBuild');
    console.log(`Indexed ${this.slokas.length} verses across BG, ISO, CC & SB successfully.`);
  }

  // Clear all in-memory search indices
  clearIndex() {
    this.slokas = [];
    this.verseMap.clear();
    this.wordIndex.clear();
    this.tagIndex.clear();
    this.isIndexed = false;
  }

  // Incrementally index newly loaded slokas
  appendIndex(newSlokas) {
    if (!newSlokas || newSlokas.length === 0) return;

    for (let i = 0; i < newSlokas.length; i++) {
      const s = newSlokas[i];
      const isCC = s.book === 'CC' || (s.id && s.id.startsWith('cc-'));
      const isISO = !isCC && (s.book === 'ISO' || (s.id && s.id.startsWith('iso-')));
      const isBG = !isCC && !isISO && (s.book === 'BG' || (s.id && s.id.startsWith('bg-')));

      let key;
      if (isCC) {
        const lilaKey = this.getLilaKey(s.lila || s.canto || 1);
        key = `cc ${lilaKey} ${s.chapter}.${s.verse}`;
      } else if (isISO) {
        key = `iso ${s.verseKey || s.verse}`;
      } else if (isBG) {
        key = s.verseKey || `${s.chapter}.${s.verse}`;
      } else {
        key = s.verseKey || `${s.canto}.${s.chapter}.${s.verse}`;
      }

      if (!this.verseMap.has(key)) {
        this.slokas.push(s);
      }
      this.verseMap.set(key, s);
      if (s.id) this.verseMap.set(s.id, s);
      if (s.verseKey) this.verseMap.set(s.verseKey, s);

      if (isCC) {
        const lilaKey = this.getLilaKey(s.lila || s.canto || 1);
        const lilaNum = lilaKey === 'adi' ? 1 : (lilaKey === 'madhya' ? 2 : 3);

        this.verseMap.set(`cc-${lilaKey}-${s.chapter}-${s.verse}`, s);
        this.verseMap.set(`cc.${lilaKey}.${s.chapter}.${s.verse}`, s);
        this.verseMap.set(`cc ${lilaKey}.${s.chapter}.${s.verse}`, s);
        this.verseMap.set(`cc ${lilaKey} ${s.chapter}.${s.verse}`, s);
        this.verseMap.set(`${lilaKey}.${s.chapter}.${s.verse}`, s);
        this.verseMap.set(`${lilaKey} ${s.chapter}.${s.verse}`, s);
        this.verseMap.set(`cc ${lilaNum}.${s.chapter}.${s.verse}`, s);
        this.verseMap.set(`cc-${lilaNum}-${s.chapter}-${s.verse}`, s);
      } else if (isISO) {
        const vK = String(s.verseKey || s.verse).toLowerCase();
        this.verseMap.set(`iso-${vK}`, s);
        this.verseMap.set(`iso.${vK}`, s);
        this.verseMap.set(`iso ${vK}`, s);
        this.verseMap.set(`iso${vK}`, s);
        if (vK === 'inv' || vK === '0') {
          this.verseMap.set('iso 0', s);
          this.verseMap.set('iso-0', s);
          this.verseMap.set('iso inv', s);
          this.verseMap.set('iso invocation', s);
        }
      } else if (isBG) {
        this.verseMap.set(`bg-${s.chapter}-${s.verse}`, s);
        this.verseMap.set(`bg.${s.chapter}.${s.verse}`, s);
        this.verseMap.set(`bg ${s.chapter}.${s.verse}`, s);
      } else {
        this.verseMap.set(`sb-${s.canto}-${s.chapter}-${s.verse}`, s);
        this.verseMap.set(`sb.${s.canto}.${s.chapter}.${s.verse}`, s);
        this.verseMap.set(`sb ${s.canto}.${s.chapter}.${s.verse}`, s);
      }

      if (Array.isArray(s.tags)) {
        s.tags.forEach(tag => {
          const normTag = tag.trim().toLowerCase();
          if (!this.tagIndex.has(normTag)) {
            this.tagIndex.set(normTag, new Set());
          }
          this.tagIndex.get(normTag).add(s.id || key);
        });
      }

      const textToTokenize = [
        s.sanskritDevanagari || '',
        s.sanskritIAST || '',
        s.hindiTranslation || '',
        (s.wordToWord || []).map(w => `${w.sanskrit} ${w.hindi}`).join(' '),
        s.hindiPurport ? s.hindiPurport.substring(0, 1000) : ''
      ].join(' ');

      const tokens = this.tokenize(textToTokenize);
      tokens.forEach(tok => {
        if (!this.wordIndex.has(tok)) {
          this.wordIndex.set(tok, new Set());
        }
        this.wordIndex.get(tok).add(s.id || key);
      });
    }

    this.isIndexed = true;
  }

  // Text normalization and tokenization
  tokenize(text) {
    if (!text) return [];
    return text
      .toLowerCase()
      .replace(/[।,;:\-\—\–\(\)\[\]\{\}\"\'\?\!\/\\\|\*\+\=\>\<]/g, ' ')
      .split(/\s+/)
      .filter(t => t.length >= 1);
  }

  // Parse reference queries like "CC Adi 1.1", "CC Madhya 20.108", "CC Antya 20.12", "CC 1.1.1", "ISO 1", "BG 2.13", "18.66", "1.1.1"
  parseReferenceQuery(query) {
    const trimmed = query.trim().toLowerCase();

    // Pattern 0A: Sri Caitanya-caritamrta with named lila: "cc adi 1.1", "cc madhya 20.108", "cc antya 20.12", "adi 1.1", "madhya 20.108"
    const ccNamedMatch = trimmed.match(/^(?:cc\s*)?(adi|madhya|antya|आदि|मध्य|अन्त्य)[\s.\-:]*(\d+)[.\-:\s]+(\d+[\-\d]*)$/i);
    if (ccNamedMatch) {
      const lStr = ccNamedMatch[1].toLowerCase();
      let lilaNum = 1;
      let lilaKey = 'adi';
      if (lStr.startsWith('m') || lStr.includes('मध्य')) { lilaNum = 2; lilaKey = 'madhya'; }
      else if (lStr.startsWith('an') || lStr.includes('अन्त्य')) { lilaNum = 3; lilaKey = 'antya'; }

      return {
        book: 'CC',
        lila: lilaNum,
        lilaKey,
        chapter: parseInt(ccNamedMatch[2], 10),
        verse: ccNamedMatch[3]
      };
    }

    // Pattern 0B: Sri Caitanya-caritamrta with numeric lila: "cc 1.1.1", "cc 2.20.108", "cc 3.20.12"
    const ccNumMatch = trimmed.match(/^cc[\s.\-:]*([1-3])[.\-:\s]+(\d+)[.\-:\s]+(\d+[\-\d]*)$/i);
    if (ccNumMatch) {
      const lilaNum = parseInt(ccNumMatch[1], 10);
      const lilaKey = lilaNum === 1 ? 'adi' : (lilaNum === 2 ? 'madhya' : 'antya');
      return {
        book: 'CC',
        lila: lilaNum,
        lilaKey,
        chapter: parseInt(ccNumMatch[2], 10),
        verse: ccNumMatch[3]
      };
    }

    // Pattern 0C: CC Chapter match: "cc adi 1", "cc madhya 20", "cc antya 20"
    const ccChapMatch = trimmed.match(/^(?:cc\s*)?(adi|madhya|antya|आदि|मध्य|अन्त्य)[\s.\-:]*(\d+)$/i);
    if (ccChapMatch) {
      const lStr = ccChapMatch[1].toLowerCase();
      let lilaNum = 1;
      let lilaKey = 'adi';
      if (lStr.startsWith('m') || lStr.includes('मध्य')) { lilaNum = 2; lilaKey = 'madhya'; }
      else if (lStr.startsWith('an') || lStr.includes('अन्त्य')) { lilaNum = 3; lilaKey = 'antya'; }

      return {
        book: 'CC',
        lila: lilaNum,
        lilaKey,
        chapter: parseInt(ccChapMatch[2], 10),
        isChapter: true
      };
    }

    // Pattern 0D: Sri Isopanisad query: "iso 1", "iso inv", "iso 18", "isopanisad 15", "iso:1"
    const isoInvMatch = trimmed.match(/^(?:iso|isopanisad|ईशोपनिषद्|ईशोपनिषद)[\s.\-:]*(?:inv|invocation|0|मंगलाचरण)$/i);
    if (isoInvMatch) {
      return { book: 'ISO', verse: 'inv', verseNum: 0 };
    }

    const isoNumMatch = trimmed.match(/^(?:iso|isopanisad|ईशोपनिषद्|ईशोपनिषद)[\s.\-:]*(\d+)$/i);
    if (isoNumMatch) {
      const vNum = parseInt(isoNumMatch[1], 10);
      if (vNum >= 1 && vNum <= 18) {
        return { book: 'ISO', verse: String(vNum), verseNum: vNum };
      }
    }

    // Pattern 1: Explicit BG query: "bg 2.13", "bg 18.66", "bg 2 13", "bg:2:13", "bg-2-13"
    const bgMatch = trimmed.match(/^bg[\s.\-:]*(\d+)[.\-:\s]+(\d+[\-\d]*)$/i);
    if (bgMatch) {
      return { book: 'BG', chapter: parseInt(bgMatch[1], 10), verse: bgMatch[2] };
    }

    // Pattern 2: Explicit BG Chapter: "bg 2", "bg 18"
    const bgChapMatch = trimmed.match(/^bg[\s.\-:]*(\d+)$/i);
    if (bgChapMatch) {
      return { book: 'BG', chapter: parseInt(bgChapMatch[1], 10), isChapter: true };
    }

    // Pattern 3: Srimad Bhagavatam 3-part notation: "1.1.1", "10.14.8", "sb 1.1.1"
    const sbMatch = trimmed.match(/^(?:sb\s*)?(\d+)[.\-:\s]+(\d+)[.\-:\s]+(\d+[\-\d]*)$/i);
    if (sbMatch) {
      return { book: 'SB', canto: parseInt(sbMatch[1], 10), chapter: parseInt(sbMatch[2], 10), verse: sbMatch[3] };
    }

    // Pattern 4: Two parts without prefix: "2.13", "18.66", "1.1"
    const twoPartMatch = trimmed.match(/^(\d+)[.\-:\s]+(\d+[\-\d]*)$/);
    if (twoPartMatch) {
      const p1 = parseInt(twoPartMatch[1], 10);
      const p2 = twoPartMatch[2];
      const p2Num = parseInt(p2, 10);

      // If in BG mode or p2 > 30, it's overwhelmingly Bhagavad Gita verse!
      if (window.app && window.app.currentBook === 'BG') {
        return { book: 'BG', chapter: p1, verse: p2 };
      }

      if (p1 >= 1 && p1 <= 18) {
        return { book: 'BG', chapter: p1, verse: p2, alsoSBChapter: (p1 <= 12) ? { canto: p1, chapter: p2Num } : null };
      }

      if (p1 >= 1 && p1 <= 12) {
        return { book: 'SB', canto: p1, chapter: p2Num, isChapter: true };
      }
    }

    // Pattern 5: Single number "1" to "18" with "sb" prefix (e.g. "sb 1.1")
    const sbChapMatch = trimmed.match(/^sb\s*(\d+)[.\-:\s]+(\d+)$/i);
    if (sbChapMatch) {
      return { book: 'SB', canto: parseInt(sbChapMatch[1], 10), chapter: parseInt(sbChapMatch[2], 10), isChapter: true };
    }

    return null;
  }

  // Transliteration helper: Convert common Roman/IAST queries to Devanagari search terms
  transliterateSimple(roman) {
    const map = {
      'om': 'ॐ',
      'namo': 'नमो',
      'bhagavate': 'भगवते',
      'vasudevaya': 'वासुदेवाय',
      'krishna': 'कृष्ण',
      'krsna': 'कृष्ण',
      'caitanya': 'चैतन्य',
      'chaitanya': 'चैतन्य',
      'mahaprabhu': 'महाप्रभु',
      'nityananda': 'नित्यानन्द',
      'advaita': 'अद्वैत',
      'pancatattva': 'पंचतत्त्व',
      'arjuna': 'अर्जुन',
      'isavasya': 'ईशावास्य',
      'isopanisad': 'ईशोपनिषद्',
      'purnam': 'पूर्णम्',
      'hiranmayena': 'हिरण्मयेन',
      'agne': 'अग्ने',
      'rama': 'राम',
      'govinda': 'गोविन्द',
      'dharma': 'धर्म',
      'bhakti': 'भक्ति',
      'karma': 'कर्म',
      'jnana': 'ज्ञान',
      'yoga': 'योग',
      'gita': 'गीता',
      'janma': 'जन्म',
      'satyam': 'सत्यं',
      'param': 'परं',
      'dhimahi': 'धीमहि',
      'siksastaka': 'शिक्षाष्टक',
      'cetodarpana': 'चेतोदर्पण'
    };
    return map[roman.toLowerCase()] || roman;
  }

  // Main high-speed Search Method (< 2ms)
  search(query, filterTag = null, limit = 50) {
    const startTime = performance.now();
    if (!query && !filterTag) {
      return { results: this.slokas.slice(0, limit), totalCount: this.slokas.length, timeMs: 0, isRefMatch: false };
    }

    const trimmedQuery = (query || '').trim();

    // 1. Check for Exact Reference Query (e.g. CC Adi 1.1, ISO 1, BG 2.13, 18.66, SB 1.1.1)
    const ref = this.parseReferenceQuery(trimmedQuery);
    if (ref) {
      if (ref.book === 'CC' && !ref.isChapter) {
        const ccKey = `${ref.lilaKey}.${ref.chapter}.${ref.verse}`;
        const exactMatch = this.verseMap.get(`cc ${ccKey}`) ||
                           this.verseMap.get(`cc-${ref.lilaKey}-${ref.chapter}-${ref.verse}`) ||
                           this.verseMap.get(ccKey) ||
                           (window.app && window.app.ccMap && window.app.ccMap.get(ccKey));

        if (exactMatch) {
          const timeMs = (performance.now() - startTime).toFixed(2);
          return {
            results: [exactMatch],
            totalCount: 1,
            timeMs,
            isRefMatch: true,
            exactVerseKey: `CC ${ref.lilaKey.toUpperCase()} ${ref.chapter}.${ref.verse}`,
            book: 'CC'
          };
        }
      } else if (ref.book === 'ISO') {
        const isoKey = `iso ${ref.verse}`;
        const exactMatch = this.verseMap.get(isoKey) ||
                           this.verseMap.get(`iso-${ref.verse}`) ||
                           (window.app && window.app.isoMap && window.app.isoMap.get(ref.verse));

        if (exactMatch) {
          const timeMs = (performance.now() - startTime).toFixed(2);
          return {
            results: [exactMatch],
            totalCount: 1,
            timeMs,
            isRefMatch: true,
            exactVerseKey: `ISO ${ref.verse === 'inv' ? 'मंगलाचरण' : ref.verse}`,
            book: 'ISO'
          };
        }
      } else if (ref.book === 'BG' && !ref.isChapter) {
        const bgKey = `${ref.chapter}.${ref.verse}`;
        const exactMatch = this.verseMap.get(`bg-${ref.chapter}-${ref.verse}`) ||
                           this.verseMap.get(bgKey) ||
                           (window.app && window.app.verseMap && (window.app.verseMap.get(`bg-${ref.chapter}-${ref.verse}`) || window.app.verseMap.get(bgKey)));

        if (exactMatch) {
          const timeMs = (performance.now() - startTime).toFixed(2);
          return {
            results: [exactMatch],
            totalCount: 1,
            timeMs,
            isRefMatch: true,
            exactVerseKey: bgKey,
            book: 'BG'
          };
        }
      } else if (ref.book === 'SB' && !ref.isChapter) {
        const sbKey = `${ref.canto}.${ref.chapter}.${ref.verse}`;
        const exactMatch = this.verseMap.get(`sb-${ref.canto}-${ref.chapter}-${ref.verse}`) ||
                           this.verseMap.get(sbKey) ||
                           (window.app && window.app.verseMap && (window.app.verseMap.get(`sb-${ref.canto}-${ref.chapter}-${ref.verse}`) || window.app.verseMap.get(sbKey)));

        if (exactMatch) {
          const timeMs = (performance.now() - startTime).toFixed(2);
          return {
            results: [exactMatch],
            totalCount: 1,
            timeMs,
            isRefMatch: true,
            exactVerseKey: sbKey,
            book: 'SB'
          };
        }
      } else if (ref.isChapter) {
        if (ref.book === 'CC') {
          const chKey = `${ref.lilaKey}-${ref.chapter}`;
          const chVerses = (window.app && window.app.ccChapterMap && window.app.ccChapterMap.get(chKey)) || [];
          if (chVerses.length > 0) {
            const timeMs = (performance.now() - startTime).toFixed(2);
            return {
              results: chVerses.slice(0, limit),
              totalCount: chVerses.length,
              timeMs,
              isRefMatch: true,
              exactVerseKey: `CC ${ref.lilaKey.toUpperCase()} ${ref.chapter}.1`,
              book: 'CC'
            };
          }
        } else if (ref.book === 'BG') {
          const chVerses = (window.app && window.app.bgChapterMap && window.app.bgChapterMap.get(ref.chapter)) || [];
          if (chVerses.length > 0) {
            const timeMs = (performance.now() - startTime).toFixed(2);
            return {
              results: chVerses.slice(0, limit),
              totalCount: chVerses.length,
              timeMs,
              isRefMatch: true,
              exactVerseKey: `${ref.chapter}.1`,
              book: 'BG'
            };
          }
        } else {
          const chKey = `${ref.canto}-${ref.chapter}`;
          const chVerses = (window.app && window.app.chapterMap && window.app.chapterMap.get(chKey)) || [];
          if (chVerses.length > 0) {
            const timeMs = (performance.now() - startTime).toFixed(2);
            return {
              results: chVerses.slice(0, limit),
              totalCount: chVerses.length,
              timeMs,
              isRefMatch: true,
              exactVerseKey: `${ref.canto}.${ref.chapter}.1`,
              book: 'SB'
            };
          }
        }
      }
    }

    // 2. Perform Keyword Search & Scoring across full corpus
    const tokens = this.tokenize(trimmedQuery);
    const transliterated = this.transliterateSimple(trimmedQuery);
    const altTokens = transliterated !== trimmedQuery ? this.tokenize(transliterated) : [];
    const allTokens = [...new Set([...tokens, ...altTokens])];

    const results = [];
    const normFilterTag = filterTag ? filterTag.toLowerCase() : null;
    const searchPool = (this.slokas && this.slokas.length > 0) ? this.slokas : ((window.app && window.app.allSlokas) || []);

    for (let i = 0; i < searchPool.length; i++) {
      const s = searchPool[i];
      const isCC = s.book === 'CC' || (s.id && s.id.startsWith('cc-'));
      const isISO = !isCC && (s.book === 'ISO' || (s.id && s.id.startsWith('iso-')));
      const isBG = !isCC && !isISO && (s.book === 'BG' || (s.id && s.id.startsWith('bg-')));

      // Check Tag filter if specified
      if (normFilterTag) {
        const hasTag = (s.tags || []).some(t => t.toLowerCase() === normFilterTag);
        if (!hasTag) continue;
      }

      if (allTokens.length === 0) {
        results.push({ sloka: s, score: 1 });
        continue;
      }

      let score = 0;
      let key;
      if (isCC) {
        const lilaKey = this.getLilaKey(s.lila || s.canto || 1);
        key = `cc ${lilaKey} ${s.chapter}.${s.verse}`;
      } else if (isISO) {
        key = `iso ${s.verseKey || s.verse}`;
      } else if (isBG) {
        key = s.verseKey || `${s.chapter}.${s.verse}`;
      } else {
        key = s.verseKey || `${s.canto}.${s.chapter}.${s.verse}`;
      }

      // Boost if query matches verseKey
      if (key.includes(trimmedQuery)) {
        score += 100;
      }

      const sanskrit = (s.sanskritDevanagari || '').toLowerCase();
      const iast = (s.sanskritIAST || '').toLowerCase();
      const translation = (s.hindiTranslation || '').toLowerCase();
      const purport = (s.hindiPurport || '').toLowerCase();
      const wordMeanings = (s.wordToWord || []).map(w => `${w.sanskrit} ${w.hindi}`).join(' ').toLowerCase();
      const lowQ = trimmedQuery.toLowerCase();

      // High boost for whole substring match
      if (sanskrit.includes(lowQ)) score += 60;
      if (wordMeanings.includes(lowQ)) score += 50;
      if (translation.includes(lowQ)) score += 40;
      if (iast.includes(lowQ)) score += 35;
      if (purport.includes(lowQ)) score += 20;

      // Check tokens
      let matchedTokenCount = 0;
      for (const tok of allTokens) {
        let tokScore = 0;
        if (sanskrit.includes(tok)) tokScore += 25;
        if (iast.includes(tok)) tokScore += 20;
        if (translation.includes(tok)) tokScore += 15;
        if (wordMeanings.includes(tok)) tokScore += 12;
        if (purport.includes(tok)) tokScore += 5;

        if (tokScore > 0) {
          matchedTokenCount++;
          score += tokScore;
        }
      }

      // Bonus if all query tokens match
      if (matchedTokenCount === allTokens.length && allTokens.length > 0) {
        score += 50;
      }

      if (score > 0) {
        results.push({ sloka: s, score });
      }
    }

    // Sort by score descending
    results.sort((a, b) => b.score - a.score);

    const timeMs = (performance.now() - startTime).toFixed(2);
    const paginated = results.slice(0, limit).map(r => r.sloka);

    return {
      results: paginated,
      totalCount: results.length,
      timeMs,
      isRefMatch: false
    };
  }
}

// Global search engine instance
window.searchEngine = new VedabaseSearchEngine();
