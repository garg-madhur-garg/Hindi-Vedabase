/**
 * Hindi Vedabase - Ultra-Fast In-Memory Search Engine (search.js)
 * Designed for instant live audience search (< 2ms latency across all slokas)
 * Full support for both Srimad Bhagavatam (18,000 verses) & Srimad Bhagavad Gita (700 verses)
 */

class VedabaseSearchEngine {
  constructor() {
    this.slokas = [];
    this.verseMap = new Map(); // verseKey or ID -> sloka
    this.wordIndex = new Map(); // word -> Set of sloka ids
    this.tagIndex = new Map();  // tag -> Set of sloka ids
    this.isIndexed = false;
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
      const isBG = s.book === 'BG' || (s.id && s.id.startsWith('bg-'));
      const key = s.verseKey || (isBG ? `${s.chapter}.${s.verse}` : `${s.canto}.${s.chapter}.${s.verse}`);

      this.verseMap.set(key, s);
      if (s.id) this.verseMap.set(s.id, s);
      if (isBG) {
        this.verseMap.set(`bg-${s.chapter}-${s.verse}`, s);
        this.verseMap.set(`bg.${s.chapter}.${s.verse}`, s);
        this.verseMap.set(`bg ${s.chapter}.${s.verse}`, s);
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

      // Index words from Sanskrit, Word meanings, Hindi translation, Purport
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
    console.log(`Indexed ${this.slokas.length} slokas, 18 BG chapters & 335 SB chapters successfully.`);
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
      const isBG = s.book === 'BG' || (s.id && s.id.startsWith('bg-'));
      const key = s.verseKey || (isBG ? `${s.chapter}.${s.verse}` : `${s.canto}.${s.chapter}.${s.verse}`);

      if (!this.verseMap.has(key)) {
        this.slokas.push(s);
      }
      this.verseMap.set(key, s);
      if (s.id) this.verseMap.set(s.id, s);
      if (isBG) {
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

  // Devanagari & Latin text normalization and tokenization
  tokenize(text) {
    if (!text) return [];
    return text
      .toLowerCase()
      .replace(/[।,;:\-\—\–\(\)\[\]\{\}\"\'\?\!\/\\\|\*\+\=\>\<]/g, ' ')
      .split(/\s+/)
      .filter(t => t.length >= 1);
  }

  // Parse reference queries like "BG 2.13", "18.66", "1.1.1", "10 14 8", "SB 1.1.1"
  parseReferenceQuery(query) {
    const trimmed = query.trim().toLowerCase();

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
    // Could be BG chapter.verse OR SB canto.chapter
    const twoPartMatch = trimmed.match(/^(\d+)[.\-:\s]+(\d+[\-\d]*)$/);
    if (twoPartMatch) {
      const p1 = parseInt(twoPartMatch[1], 10);
      const p2 = twoPartMatch[2];
      const p2Num = parseInt(p2, 10);

      // If p1 is 1..18 and current view is BG or p2 > 30, it's overwhelmingly Bhagavad Gita verse!
      if (window.app && window.app.currentBook === 'BG') {
        return { book: 'BG', chapter: p1, verse: p2 };
      }

      // Check if p1 is a valid BG chapter (1..18)
      if (p1 >= 1 && p1 <= 18) {
        return { book: 'BG', chapter: p1, verse: p2, alsoSBChapter: (p1 <= 12) ? { canto: p1, chapter: p2Num } : null };
      }

      // Fallback for SB Chapter
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
      'arjuna': 'अर्जुन',
      'arjun': 'अर्जुन',
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
      'narayana': 'नारायण',
      'brahma': 'ब्रह्म',
      'shloka': 'श्लोक',
      'sloka': 'श्लोक'
    };
    return map[roman.toLowerCase()] || roman;
  }

  // Main high-speed Search Method
  search(query, filterTag = null, limit = 50) {
    const startTime = performance.now();
    if (!query && !filterTag) {
      return { results: this.slokas.slice(0, limit), totalCount: this.slokas.length, timeMs: 0, isRefMatch: false };
    }

    const trimmedQuery = (query || '').trim();

    // 1. Check for Exact Reference Query (e.g. BG 2.13, 18.66, SB 1.1.1, 10.14.8)
    const ref = this.parseReferenceQuery(trimmedQuery);
    if (ref) {
      if (ref.book === 'BG' && !ref.isChapter) {
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
        if (ref.book === 'BG') {
          const chKey = `bg-${ref.chapter}`;
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
      const isBG = s.book === 'BG' || (s.id && s.id.startsWith('bg-'));

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
      const key = s.verseKey || (isBG ? `${s.chapter}.${s.verse}` : `${s.canto}.${s.chapter}.${s.verse}`);

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

  // Find all occurrences of a specific Sanskrit word across all verses (Concordance)
  findSanskritWordConcordance(sanskritWord) {
    if (!sanskritWord) return [];
    const cleanWord = sanskritWord.trim().toLowerCase();
    const matches = [];

    for (const s of this.slokas) {
      const wList = s.wordToWord || [];
      const foundWord = wList.find(w => w.sanskrit && w.sanskrit.toLowerCase().includes(cleanWord));
      if (foundWord) {
        matches.push({
          sloka: s,
          sanskrit: foundWord.sanskrit,
          hindi: foundWord.hindi
        });
      }
    }
    return matches;
  }

  // Get all unique tags with count
  getAllTagsWithCount() {
    const counts = {};
    for (const s of this.slokas) {
      if (Array.isArray(s.tags)) {
        s.tags.forEach(t => {
          const tag = t.trim();
          if (tag) {
            counts[tag] = (counts[tag] || 0) + 1;
          }
        });
      }
    }
    return Object.entries(counts)
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => b.count - a.count);
  }
}

// Global search engine instance
window.searchEngine = new VedabaseSearchEngine();
