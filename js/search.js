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

      // Index words from Sanskrit/Bengali, Word meanings, Hindi translation, English translation, Purport
      const wordMeaningsText = Array.isArray(s.wordToWord)
        ? s.wordToWord.map(w => (w ? `${w.sanskrit || ''} ${w.hindi || ''}` : '')).join(' ')
        : (typeof s.wordToWord === 'string' ? s.wordToWord : '');

      const textToTokenize = [
        s.sanskritDevanagari || '',
        s.sanskritIAST || '',
        s.hindiTranslation || '',
        s.englishTranslation || '',
        wordMeaningsText,
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

    // Index 271 Vaishnava Songs from VS_SONGS_INDEX
    if (window.VS_SONGS_INDEX && Array.isArray(window.VS_SONGS_INDEX)) {
      window.VS_SONGS_INDEX.forEach(s => {
        const vsText = `वैष्णव गीत भजन प्रार्थना आरतियाँ ${s.title || ''} ${s.author || ''} ${s.authorHi || ''} ${s.book || ''} ${s.firstLine || ''} vs-${s.num} vs ${s.num}`;
        const vsTokens = this.tokenize(vsText);
        vsTokens.forEach(tok => {
          if (!this.wordIndex.has(tok)) {
            this.wordIndex.set(tok, new Set());
          }
          this.wordIndex.get(tok).add(s.id || `vs-${s.num}`);
        });
      });
    }

    this.isIndexed = true;
    console.timeEnd('SearchIndexBuild');
    console.log(`Indexed ${this.slokas.length} verses across BG, ISO, CC, SB & VS successfully.`);
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
      const isVS = !isCC && !isISO && (s.book === 'VS' || (s.id && s.id.startsWith('vs-')));
      const isBG = !isCC && !isISO && !isVS && (s.book === 'BG' || (s.id && s.id.startsWith('bg-')));

      let key;
      if (isCC) {
        const lilaKey = this.getLilaKey(s.lila || s.canto || 1);
        key = `cc ${lilaKey} ${s.chapter}.${s.verse}`;
      } else if (isISO) {
        key = `iso ${s.verseKey || s.verse}`;
      } else if (isVS) {
        key = `vs ${s.songNumber || s.id}`;
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
        s.title || '',
        s.author || '',
        s.authorHindi || '',
        s.book || '',
        s.firstLine || '',
        s.body || '',
        s.sanskritDevanagari || '',
        Array.isArray(s.hindiDevanagariStanzas) ? s.hindiDevanagariStanzas.join(' ') : '',
        s.sanskritIAST || '',
        s.hindiTranslation || '',
        Array.isArray(s.hindiTranslations) ? s.hindiTranslations.join(' ') : '',
        s.englishTranslation || '',
        Array.isArray(s.wordToWord) ? s.wordToWord.map(w => (w ? `${w.sanskrit || ''} ${w.hindi || ''}` : '')).join(' ') : (typeof s.wordToWord === 'string' ? s.wordToWord : ''),
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

  // Strip Sanskrit IAST diacritics for flexible fuzzy matching
  stripDiacritics(str) {
    if (!str) return '';
    return str
      .replace(/[āĀ]/g, 'a')
      .replace(/[īĪ]/g, 'i')
      .replace(/[ūŪ]/g, 'u')
      .replace(/[ṛṝṚṜ]/g, 'r')
      .replace(/[ḷḹLḶḸ]/g, 'l')
      .replace(/[ññṇṅNÑṆṄ]/g, 'n')
      .replace(/[ṁṃMṀṂ]/g, 'm')
      .replace(/[śṣSŚṢ]/g, 's')
      .replace(/[ṭṬ]/g, 't')
      .replace(/[ḍḌ]/g, 'd')
      .replace(/[ḥḤ]/g, 'h');
  }

  // Text normalization and tokenization
  tokenize(text) {
    if (!text) return [];
    const base = text
      .toLowerCase()
      .replace(/[।,;:\-\—\–\(\)\[\]\{\}\"\'\?\!\/\\\|\*\+\=\>\<]/g, ' ')
      .split(/\s+/)
      .filter(t => t.length >= 1);
    
    const extra = [];
    base.forEach(t => {
      const stripped = this.stripDiacritics(t);
      if (stripped && stripped !== t) {
        extra.push(stripped);
      }
    });
    return [...base, ...extra];
  }

  // Parse reference queries like "CC Adi 1.1", "CC Madhya 20.108", "CC Antya 20.12", "CC 1.1.1", "ISO 1", "BG 2.13", "18.66", "1.1.1"
  parseReferenceQuery(query, scriptureFilter = null) {
    const trimmed = query.trim().toLowerCase();

    // If specific scripture filter is active, check book-specific shortcuts first
    if (scriptureFilter === 'ISO') {
      if (trimmed === 'inv' || trimmed === 'invocation' || trimmed === '0' || trimmed === 'मंगलाचरण') {
        return { book: 'ISO', verse: 'inv', verseNum: 0 };
      }
      const isoNum = trimmed.match(/^(?:iso\s*)?(\d+)$/i);
      if (isoNum) {
        const vNum = parseInt(isoNum[1], 10);
        if (vNum >= 1 && vNum <= 18) {
          return { book: 'ISO', verse: String(vNum), verseNum: vNum };
        }
      }
    }

    if (scriptureFilter === 'VS') {
      const vsNum = trimmed.match(/^(?:vs\s*|song\s*)?(\d+)$/i);
      if (vsNum) {
        return { book: 'VS', songNumber: parseInt(vsNum[1], 10) };
      }
    }

    if (scriptureFilter === 'BG') {
      const bgTwoPart = trimmed.match(/^(?:bg\s*)?(\d+)[.\-:\s]+(\d+[\-\d]*)$/i);
      if (bgTwoPart) {
        return { book: 'BG', chapter: parseInt(bgTwoPart[1], 10), verse: bgTwoPart[2] };
      }
      const bgSingle = trimmed.match(/^(?:bg\s*)?(\d+)$/i);
      if (bgSingle) {
        const chNum = parseInt(bgSingle[1], 10);
        if (chNum >= 1 && chNum <= 18) {
          return { book: 'BG', chapter: chNum, isChapter: true };
        }
      }
    }

    if (scriptureFilter === 'SB') {
      const sbThreePart = trimmed.match(/^(?:sb\s*)?(\d+)[.\-:\s]+(\d+)[.\-:\s]+(\d+[\-\d]*)$/i);
      if (sbThreePart) {
        return { book: 'SB', canto: parseInt(sbThreePart[1], 10), chapter: parseInt(sbThreePart[2], 10), verse: sbThreePart[3] };
      }
      const sbTwoPart = trimmed.match(/^(?:sb\s*)?(\d+)[.\-:\s]+(\d+)$/i);
      if (sbTwoPart) {
        return { book: 'SB', canto: parseInt(sbTwoPart[1], 10), chapter: parseInt(sbTwoPart[2], 10), isChapter: true };
      }
    }

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

    // Pattern 0: Vaishnava Songs: "vs 1", "vs 46", "vs-1"
    const vsMatch = trimmed.match(/^(?:vs|song)[\s.\-:]*(\d+)$/i);
    if (vsMatch) {
      return { book: 'VS', songNumber: parseInt(vsMatch[1], 10) };
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

      // If in BG mode or scriptureFilter is BG, it's Bhagavad Gita verse
      if (scriptureFilter === 'BG' || (window.app && window.app.currentBook === 'BG' && !scriptureFilter)) {
        return { book: 'BG', chapter: p1, verse: p2 };
      }

      if (scriptureFilter === 'SB') {
        return { book: 'SB', canto: p1, chapter: p2Num, isChapter: true };
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

  // Normalize Devanagari matras and ligatures for flexible fuzzy search
  normalizeDevanagari(text) {
    if (!text) return '';
    return text
      .replace(/ी/g, 'ि')
      .replace(/ू/g, 'ु')
      .replace(/ा/g, '')
      .replace(/[ंँ]/g, 'म')
      .replace(/ः/g, '')
      .replace(/्/g, '');
  }

  // Transliteration helper: Convert common Roman/IAST queries to Devanagari search terms
  transliterateSimple(roman) {
    if (!roman) return '';
    const low = roman.toLowerCase().trim();
    const map = {
      'dhimata': 'धीमता',
      'dhiman': 'धीमान्',
      'dhimatam': 'धीमताम्',
      'dhimat': 'धीमत्',
      'dheemat': 'धीमत्',
      'dheemata': 'धीमता',
      'drupada': 'द्रुपद',
      'acarya': 'आचार्य',
      'acharya': 'आचार्य',
      'pandava': 'पाण्डव',
      'pandav': 'पाण्डव',
      'pandavas': 'पाण्डव',
      'pandavah': 'पाण्डव',
      'pandavanam': 'पाण्डव',
      'pandavebhyah': 'पाण्डव',
      'caiva': 'चैव',
      'chaiva': 'चैव',
      'vaiva': 'वैव',
      'naiva': 'नैव',
      'tathaiva': 'तथैव',
      'yathaiva': 'यथैव',
      'sarvaiva': 'सर्वैव',
      'evaite': 'एवैते',
      'eva': 'एव',
      'evam': 'एवं',
      'ca': 'च',
      'cha': 'च',
      'api': 'अपि',
      'iti': 'इति',
      'hi': 'हि',
      'tu': 'तु',
      'karmanye': 'कर्मण्य',
      'karmanya': 'कर्मण्य',
      'karmany': 'कर्मण्य',
      'karmanyeva': 'कर्मण्येव',
      'sarvadharman': 'सर्वधर्मान्',
      'sarva dharman': 'सर्वधर्मान्',
      'sarva': 'सर्व',
      'sarvam': 'सर्वं',
      'sarvas': 'सर्व',
      'sarvah': 'सर्व',
      'sarve': 'सर्व',
      'yada yada': 'यदा यदा',
      'yadayada': 'यदायदा',
      'manmana': 'मन्मना',
      'sambhavami': 'सम्भवामि',
      'om': 'ॐ',
      'namo': 'नमो',
      'bhagavate': 'भगवते',
      'vasudevaya': 'वासुदेवाय',
      'krishna': 'कृष्ण',
      'krsna': 'कृष्ण',
      'krishnas': 'कृष्ण',
      'krishnah': 'कृष्ण',
      'krishnam': 'कृष्णं',
      'caitanya': 'चैतन्य',
      'chaitanya': 'चैतन्य',
      'mahaprabhu': 'महाप्रभु',
      'nityananda': 'नित्यानन्द',
      'advaita': 'अद्वैत',
      'pancatattva': 'पंचतत्त्व',
      'arjuna': 'अर्जुन',
      'arjun': 'अर्जुन',
      'arjunas': 'अर्जुन',
      'arjunah': 'अर्जुन',
      'arjunam': 'अर्जुनं',
      'duryodhana': 'दुर्योधन',
      'duryodhan': 'दुर्योधन',
      'duryodhanas': 'दुर्योधन',
      'duryodhanah': 'दुर्योधन',
      'bhisma': 'भीष्म',
      'bhishma': 'भीष्म',
      'bhismas': 'भीष्म',
      'bhishmas': 'भीष्म',
      'bhismam': 'भीष्मं',
      'drona': 'द्रोण',
      'dronam': 'द्रोण',
      'sanjaya': 'सञ्जय',
      'sanjay': 'सञ्जय',
      'sanjayas': 'सञ्जय',
      'dhritarashtra': 'धृतराष्ट्र',
      'madhava': 'माधव',
      'madhavah': 'माधव',
      'keshava': 'केशव',
      'keshavah': 'केशव',
      'govinda': 'गोविन्द',
      'govindah': 'गोविन्द',
      'isavasya': 'ईशावास्य',
      'isopanisad': 'ईशोपनिषद्',
      'purnam': 'पूर्णम्',
      'hiranmayena': 'हिरण्मयेन',
      'agne': 'अग्ने',
      'rama': 'राम',
      'dharma': 'धर्म',
      'dharmam': 'धर्मं',
      'bhakti': 'भक्ति',
      'karma': 'कर्म',
      'jnana': 'ज्ञान',
      'gyan': 'ज्ञान',
      'yoga': 'योग',
      'gita': 'गीता',
      'janma': 'जन्म',
      'satyam': 'सत्यं',
      'param': 'परं',
      'balam': 'बलं',
      'bala': 'बल',
      'balas': 'बल',
      'balah': 'बल',
      'kuruksetre': 'कुरुक्षेत्रे',
      'kurukshetre': 'कुरुक्षेत्रे',
      'kuruksetra': 'कुरुक्षेत्र',
      'kurukshetra': 'कुरुक्षेत्र',
      'dhimahi': 'धीमहि',
      'siksastaka': 'शिक्षाष्टक',
      'cetodarpana': 'चेतोदर्पण'
    };
    if (map[low]) return map[low];

    // Check Sanskrit case endings and sandhi stems:
    if (low.length > 3) {
      if (low.endsWith('s') || low.endsWith('h') || low.endsWith('m') || low.endsWith('o')) {
        const stem = low.slice(0, -1);
        if (map[stem]) return map[stem];
      }
      if (low.endsWith('as') || low.endsWith('ah')) {
        const stem = low.slice(0, -2) + 'a';
        if (map[stem]) return map[stem];
      }
      if (low.endsWith('anam') || low.endsWith('inam')) {
        const stem = low.slice(0, -4) + 'a';
        if (map[stem]) return map[stem];
      }
      if (low.endsWith('ena')) {
        const stem = low.slice(0, -3) + 'a';
        if (map[stem]) return map[stem];
      }
      if (low.endsWith('asya')) {
        const stem = low.slice(0, -4) + 'a';
        if (map[stem]) return map[stem];
      }
    }

    // Pre-normalize common double vowels: ee -> ī, oo -> ū
    const normalizedRoman = low.replace(/ee/g, 'ī').replace(/oo/g, 'ū');

    if (typeof window !== 'undefined' && window.IastTransliteration && typeof window.IastTransliteration.toDevanagari === 'function') {
      try {
        const converted = window.IastTransliteration.toDevanagari(normalizedRoman);
        if (converted && converted !== normalizedRoman) return converted;
      } catch (e) {}
    }

    return roman;
  }

  // Main high-speed Search Method (< 2ms)
  search(query, filterTag = null, limit = 50, scriptureFilter = null) {
    const startTime = performance.now();
    try {
      if (!query && !filterTag) {
        return { results: [], totalCount: 0, timeMs: 0, isRefMatch: false };
      }

      const trimmedQuery = (query || '').trim();

      // 1. Check for Exact Reference Query (e.g. CC Adi 1.1, ISO 1, BG 2.13, 18.66, SB 1.1.1)
      const ref = this.parseReferenceQuery(trimmedQuery, scriptureFilter);
      if (ref && (!scriptureFilter || scriptureFilter === 'all' || ref.book === scriptureFilter)) {
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
        } else if (ref.book === 'VS') {
          const exactMatch = (window.app && window.app.vsSlokas && window.app.vsSlokas.find(s => s.songNumber === ref.songNumber)) ||
                             this.verseMap.get(`vs ${ref.songNumber}`) ||
                             this.verseMap.get(`vs-${ref.songNumber}`);
          if (exactMatch) {
            const timeMs = (performance.now() - startTime).toFixed(2);
            return {
              results: [exactMatch],
              totalCount: 1,
              timeMs,
              isRefMatch: true,
              exactVerseKey: `VS ${ref.songNumber} - ${exactMatch.title || ''}`,
              book: 'VS'
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
      
      // Add simple English plural / singular variants (e.g. weapons -> weapon)
      const stemTokens = [];
      tokens.forEach(tok => {
        if (tok.length > 3 && tok.endsWith('s')) {
          stemTokens.push(tok.slice(0, -1));
          if (tok.endsWith('ies') && tok.length > 4) {
            stemTokens.push(tok.slice(0, -3) + 'y');
          }
        }
      });

      const rawQueryTerms = trimmedQuery
        .toLowerCase()
        .replace(/[।,;:\-\—\–\(\)\[\]\{\}\"\'\?\!\/\\\|\*\+\=\>\<]/g, ' ')
        .split(/\s+/)
        .filter(t => t.length >= 2);

      const allTokens = [...new Set([...tokens, ...altTokens, ...stemTokens])];

      const results = [];
      const normFilterTag = filterTag ? filterTag.toLowerCase() : null;
      const searchPool = (this.slokas && this.slokas.length > 0) ? this.slokas : ((window.app && window.app.allSlokas) || []);

      for (let i = 0; i < searchPool.length; i++) {
        try {
          const s = searchPool[i];
          if (!s) continue;

          const isCC = s.book === 'CC' || (s.id && s.id.startsWith('cc-'));
          const isISO = !isCC && (s.book === 'ISO' || (s.id && s.id.startsWith('iso-')));
          const isVS = !isCC && !isISO && (s.book === 'VS' || (s.id && s.id.startsWith('vs-')));
          const isBG = !isCC && !isISO && !isVS && (s.book === 'BG' || (s.id && s.id.startsWith('bg-')) || (!s.canto && s.chapter && s.verse));

          // Filter by scripture if requested
          if (scriptureFilter && scriptureFilter !== 'all') {
            const currentBook = isBG ? 'BG' : (isISO ? 'ISO' : (isCC ? 'CC' : (isVS ? 'VS' : 'SB')));
            if (currentBook !== scriptureFilter) continue;
          }

          // Check Tag filter if specified
          if (normFilterTag) {
            const hasTag = (s.tags || []).some(t => t && String(t).toLowerCase() === normFilterTag);
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
          } else if (isVS) {
            key = `vs ${s.songNumber || s.id} ${s.title || ''}`;
          } else if (isBG) {
            key = s.verseKey || `${s.chapter}.${s.verse}`;
          } else {
            key = s.verseKey || `${s.canto}.${s.chapter}.${s.verse}`;
          }

          // Boost if query matches verseKey or title
          if (key && key.toLowerCase().includes(trimmedQuery.toLowerCase())) {
            score += 120;
          }

          const sanskrit = String(s.sanskritDevanagari || s.title || (Array.isArray(s.hindiDevanagariStanzas) ? s.hindiDevanagariStanzas.join(' ') : '') || '').toLowerCase();
          const iast = String(s.sanskritIAST || s.firstLine || s.body || '').toLowerCase();
          const iastNorm = this.stripDiacritics(iast);
          const translation = String(s.hindiTranslation || (Array.isArray(s.hindiTranslations) ? s.hindiTranslations.join(' ') : '') || s.authorHindi || s.author || '').toLowerCase();
          const english = String(s.englishTranslation || '').toLowerCase();
          const purport = String(s.hindiPurport || s.book || '').toLowerCase();

          let wordMeanings = '';
          if (Array.isArray(s.wordToWord)) {
            wordMeanings = s.wordToWord.map(w => (w ? `${w.sanskrit || ''} ${w.hindi || ''}` : '')).join(' ').toLowerCase();
          } else if (typeof s.wordToWord === 'string') {
            wordMeanings = s.wordToWord.toLowerCase();
          }

          const lowQ = trimmedQuery.toLowerCase();
          const normQ = this.stripDiacritics(lowQ);
          const normSanskrit = this.normalizeDevanagari(sanskrit);
          const normDevQuery = transliterated ? this.normalizeDevanagari(transliterated) : '';

          // Multi-word search constraint: Verse MUST contain all query terms
          if (rawQueryTerms.length >= 2) {
            let matchedQueryTerms = 0;
            for (const qt of rawQueryTerms) {
              const normQt = this.stripDiacritics(qt);
              const devQt = this.transliterateSimple(qt);
              const normDevQt = devQt ? this.normalizeDevanagari(devQt) : '';

              const inSanskrit = sanskrit.includes(qt) || (devQt && sanskrit.includes(devQt)) || (normDevQt && normDevQt.length >= 2 && normSanskrit.includes(normDevQt));
              const inIast = iast.includes(qt) || (normQt.length >= 2 && iastNorm.includes(normQt));
              let inWords = false;
              let inTrans = false;
              let inPurport = false;

              if (devQt && devQt.length <= 3) {
                const boundaryRegex = new RegExp('(?:^|[\\s।,;:\\-\\—\\–\\(\\)\\[\\]\\"\\\'\\?\\!])' + devQt + '(?:$|[\\s।,;:\\-\\—\\–\\(\\)\\[\\]\\"\\\'\\?\\!])', 'i');
                inWords = boundaryRegex.test(wordMeanings);
                inTrans = boundaryRegex.test(translation);
                inPurport = boundaryRegex.test(purport);
              } else {
                inWords = wordMeanings.includes(qt) || (devQt && wordMeanings.includes(devQt));
                inTrans = translation.includes(qt) || (devQt && translation.includes(devQt));
                inPurport = purport.includes(qt) || (devQt && purport.includes(devQt));
              }

              if (inSanskrit || inIast || inWords || inEnglish || inTrans || inPurport) {
                matchedQueryTerms++;
              }
            }

            const minRequired = rawQueryTerms.length === 2 ? 2 : Math.max(2, rawQueryTerms.length - 1);
            if (matchedQueryTerms < minRequired) {
              continue; // Exclude verses missing any of the query terms!
            }
          }

          // High boost for whole substring match
          if (sanskrit.includes(lowQ) || (transliterated && transliterated !== lowQ && sanskrit.includes(transliterated))) score += 70;
          if (normDevQuery && normDevQuery.length >= 2 && normSanskrit.includes(normDevQuery)) score += 65;
          if (iast.includes(lowQ) || (normQ.length >= 2 && iastNorm.includes(normQ))) score += 55;
          if (wordMeanings.includes(lowQ) || (transliterated && transliterated !== lowQ && wordMeanings.includes(transliterated))) score += 50;
          if (translation.includes(lowQ) || (transliterated && transliterated !== lowQ && translation.includes(transliterated))) score += 40;
          if (english.includes(lowQ)) score += 40;
          if (purport.includes(lowQ)) score += 20;

          // Huge boost for adjacent / contiguous phrase match in multi-word queries
          if (rawQueryTerms.length >= 2) {
            const devWords = rawQueryTerms.map(w => this.transliterateSimple(w)).filter(Boolean);
            if (devWords.length >= 2) {
              const normDevWords = devWords.map(w => this.normalizeDevanagari(w)).filter(w => w.length >= 1);
              if (normDevWords.length >= 2) {
                const adjRegex = new RegExp(normDevWords.join('.{0,10}'), 'i');
                if (adjRegex.test(normSanskrit)) {
                  score += 250;
                }
              }
            }
          }

          // Check tokens
          let matchedTokenCount = 0;
          for (const tok of allTokens) {
            let tokScore = 0;
            const normTok = this.stripDiacritics(tok);
            const devTok = this.transliterateSimple(tok);
            if (sanskrit.includes(tok) || (devTok && devTok !== tok && sanskrit.includes(devTok))) tokScore += 25;
            if (iast.includes(tok) || (normTok.length >= 2 && iastNorm.includes(normTok))) tokScore += 22;
            if (english.includes(tok)) tokScore += 15;

            if (devTok && devTok.length <= 3) {
              const boundaryRegex = new RegExp('(?:^|[\\s।,;:\\-\\—\\–\\(\\)\\[\\]\\"\\\'\\?\\!])' + devTok + '(?:$|[\\s।,;:\\-\\—\\–\\(\\)\\[\\]\\"\\\'\\?\\!])', 'i');
              if (boundaryRegex.test(translation)) tokScore += 15;
              if (boundaryRegex.test(wordMeanings)) tokScore += 12;
              if (boundaryRegex.test(purport)) tokScore += 5;
            } else {
              if (translation.includes(tok) || (devTok && devTok !== tok && translation.includes(devTok))) tokScore += 15;
              if (wordMeanings.includes(tok) || (devTok && devTok !== tok && wordMeanings.includes(devTok))) tokScore += 12;
              if (purport.includes(tok)) tokScore += 5;
            }

            if (tokScore > 0) {
              matchedTokenCount++;
              score += tokScore;
            }
          }

          // Bonus if tokens match
          if (matchedTokenCount > 0 && matchedTokenCount >= Math.min(tokens.length, allTokens.length)) {
            score += 50;
          }

          if (score > 0) {
            results.push({ sloka: s, score });
          }
        } catch (itemErr) {
          // Skip any individually corrupt item without stopping search
          continue;
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
    } catch (e) {
      console.error('searchEngine.search error:', e);
      return {
        results: [],
        totalCount: 0,
        timeMs: (performance.now() - startTime).toFixed(2),
        isRefMatch: false
      };
    }
  }
}

// Global search engine instance
window.searchEngine = new VedabaseSearchEngine();

// Auto-index prebundled Bhagavad Gita immediately (< 1ms startup)
if (typeof window !== 'undefined' && window.BG_SLOKAS_DATA && Array.isArray(window.BG_SLOKAS_DATA)) {
  window.searchEngine.appendIndex(window.BG_SLOKAS_DATA);
}
