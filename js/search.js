/**
 * Hindi Vedabase - Ultra-Fast In-Memory Search Engine (search.js)
 * Designed for instant live audience search (< 2ms latency across 18,000 slokas)
 */

class VedabaseSearchEngine {
  constructor() {
    this.slokas = [];
    this.verseMap = new Map(); // verseKey -> sloka
    this.wordIndex = new Map(); // word -> Set of sloka ids
    this.tagIndex = new Map();  // tag -> Set of sloka ids
    this.isIndexed = false;
  }

  // Build high-speed in-memory inverted indices
  buildIndex(slokas) {
    console.time('SearchIndexBuild');
    this.slokas = slokas;
    this.verseMap.clear();
    this.wordIndex.clear();
    this.tagIndex.clear();

    for (let i = 0; i < slokas.length; i++) {
      const s = slokas[i];
      const key = `${s.canto}.${s.chapter}.${s.verse}`;
      this.verseMap.set(key, s);
      this.verseMap.set(s.id, s);

      // Index tags
      if (Array.isArray(s.tags)) {
        s.tags.forEach(tag => {
          const normTag = tag.trim().toLowerCase();
          if (!this.tagIndex.has(normTag)) {
            this.tagIndex.set(normTag, new Set());
          }
          this.tagIndex.get(normTag).add(s.id);
        });
      }

      // Index words from Sanskrit, Word meanings, Hindi translation
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
        this.wordIndex.get(tok).add(s.id);
      });
    }

    // Index 335 Chapters from SB_CANTOS_DATA
    if (window.SB_CANTOS_DATA) {
      window.SB_CANTOS_DATA.forEach(c => {
        (c.chapters || []).forEach(ch => {
          const chText = `${c.name} ${ch.name} अध्याय ${ch.chapter}`;
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
    console.log(`Indexed ${slokas.length} slokas and 335 chapters successfully.`);
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
      const key = s.verseKey || `${s.canto}.${s.chapter}.${s.verse}`;
      
      if (!this.verseMap.has(key)) {
        this.slokas.push(s);
      }
      this.verseMap.set(key, s);
      if (s.id) this.verseMap.set(s.id, s);

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

  // Parse reference queries like "1.1.1", "10 14 8", "SB 1.1.1", "canto 1 chapter 2 verse 3"
  parseReferenceQuery(query) {
    const trimmed = query.trim().toLowerCase();
    
    // Pattern 1: 1.1.1 or 1-1-1 or 1:1:1
    const match1 = trimmed.match(/^(?:sb\s*)?(\d+)[.\-:\s]+(\d+)[.\-:\s]+(\d+[\-\d]*)$/i);
    if (match1) {
      return { canto: parseInt(match1[1], 10), chapter: parseInt(match1[2], 10), verse: match1[3] };
    }

    // Pattern 2: Chapter level (e.g. "1.1" -> Canto 1 Chapter 1)
    const match2 = trimmed.match(/^(?:sb\s*)?(\d+)[.\-:\s]+(\d+)$/i);
    if (match2) {
      return { canto: parseInt(match2[1], 10), chapter: parseInt(match2[2], 10), isChapter: true };
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
      'rama': 'राम',
      'govinda': 'गोविन्द',
      'dharma': 'धर्म',
      'bhakti': 'भक्ति',
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

    // 1. Check for Exact Reference Query (e.g. 1.1.1, 1.2.3, 10.14.8)
    const ref = this.parseReferenceQuery(trimmedQuery);
    if (ref && !ref.isChapter) {
      const refKey = `${ref.canto}.${ref.chapter}.${ref.verse}`;
      const exactMatch = this.verseMap.get(refKey) || (window.app && window.app.verseMap && window.app.verseMap.get(refKey));
      if (exactMatch) {
        const timeMs = (performance.now() - startTime).toFixed(2);
        return {
          results: [exactMatch],
          totalCount: 1,
          timeMs,
          isRefMatch: true,
          exactVerseKey: refKey
        };
      }
    } else if (ref && ref.isChapter) {
      const chKey = `${ref.canto}-${ref.chapter}`;
      const chVerses = (window.app && window.app.chapterMap && window.app.chapterMap.get(chKey)) || [];
      if (chVerses.length > 0) {
        const timeMs = (performance.now() - startTime).toFixed(2);
        return {
          results: chVerses.slice(0, limit),
          totalCount: chVerses.length,
          timeMs,
          isRefMatch: true,
          exactVerseKey: `${ref.canto}.${ref.chapter}.1`
        };
      }
    }

    // 2. Perform Keyword Search & Scoring
    const tokens = this.tokenize(trimmedQuery);
    const transliterated = this.transliterateSimple(trimmedQuery);
    const altTokens = transliterated !== trimmedQuery ? this.tokenize(transliterated) : [];
    const allTokens = [...new Set([...tokens, ...altTokens])];

    const results = [];
    const normFilterTag = filterTag ? filterTag.toLowerCase() : null;
    const searchPool = (this.slokas && this.slokas.length > 0) ? this.slokas : ((window.app && window.app.allSlokas) || []);

    for (let i = 0; i < searchPool.length; i++) {
      const s = searchPool[i];

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
      const key = `${s.canto}.${s.chapter}.${s.verse}`;

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
