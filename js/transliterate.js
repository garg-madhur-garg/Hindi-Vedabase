/**
 * High-Precision IAST / Bengali Romanized to Hindi (Devanagari) Transliteration Engine
 * Complete support for all Vaishnava Songs, pranama mantras, and bhajans.
 */
(function (global) {
  'use strict';

  const VOWELS = {
    'ai': 'ऐ', 'au': 'औ', 'ā': 'आ', 'a': 'अ',
    'ī': 'ई', 'i': 'इ', 'ū': 'ऊ', 'u': 'उ',
    'ṛ': 'ऋ', 'ṝ': 'ॠ', 'ḷ': 'ऌ', 'ḹ': 'ॡ',
    'e': 'ए', 'o': 'ओ'
  };

  const MATRAS = {
    'ai': 'ै', 'au': 'ौ', 'ā': 'ा', 'a': '',
    'ī': 'ी', 'i': 'ि', 'ū': 'ू', 'u': 'ु',
    'ṛ': 'ृ', 'ṝ': 'ॄ', 'ḷ': 'ॢ', 'ḹ': 'ॣ',
    'e': 'े', 'o': 'ो'
  };

  const CONSONANTS = {
    'kh': 'ख', 'k': 'क',
    'gh': 'घ', 'g': 'ग',
    'ṅ': 'ङ',
    'ch': 'छ', 'c': 'च',
    'jh': 'झ', 'j': 'ज',
    'ñ': 'ञ',
    'ṭh': 'ठ', 'ṭ': 'ट',
    'ḍh': 'ढ', 'ḍ': 'ड',
    'ṇ': 'ण',
    'th': 'थ', 't': 'त',
    'dh': 'ध', 'd': 'द',
    'n': 'न',
    'ph': 'फ', 'p': 'प',
    'bh': 'भ', 'b': 'ब',
    'm': 'म',
    'y': 'य', 'r': 'र', 'l': 'ल', 'v': 'व', 'w': 'व',
    'ś': 'श', 'ṣ': 'ष', 's': 'स', 'h': 'ह',
    'ẏ': 'य'
  };

  const SPECIAL = {
    'ṁ': 'ं', 'ṃ': 'ं', 'm̐': 'ँ',
    'ḥ': 'ः',
    "'": 'ऽ', '’': 'ऽ', '`': 'ऽ',
    '|': '।', '||': '॥'
  };

  function transliterateWord(word) {
    if (!word) return '';
    let res = '';
    let i = 0;
    const len = word.length;
    let prevWasConsonant = false;

    while (i < len) {
      const c1 = word[i];
      const c2 = i + 1 < len ? word.substr(i, 2) : '';

      // Special characters
      if (SPECIAL[c1]) {
        res += SPECIAL[c1];
        prevWasConsonant = false;
        i++;
        continue;
      }

      // 2-letter vowels
      if (c2 && (c2 === 'ai' || c2 === 'au')) {
        if (prevWasConsonant) {
          res += MATRAS[c2];
        } else {
          res += VOWELS[c2];
        }
        prevWasConsonant = false;
        i += 2;
        continue;
      }

      // 2-letter consonants
      if (c2 && CONSONANTS[c2]) {
        if (prevWasConsonant) {
          res += '्';
        }
        res += CONSONANTS[c2];
        prevWasConsonant = true;
        i += 2;
        continue;
      }

      // 1-letter vowels
      if (VOWELS[c1]) {
        if (prevWasConsonant) {
          res += MATRAS[c1];
        } else {
          res += VOWELS[c1];
        }
        prevWasConsonant = false;
        i++;
        continue;
      }

      // 1-letter consonants
      if (CONSONANTS[c1]) {
        if (prevWasConsonant) {
          res += '्';
        }
        res += CONSONANTS[c1];
        prevWasConsonant = true;
        i++;
        continue;
      }

      // Any other char (hyphens, spaces, digits, punctuation)
      res += c1;
      prevWasConsonant = false;
      i++;
    }

    return res;
  }

  function toDevanagari(text) {
    if (!text) return '';
    // Process text line by line and token by token
    return text.replace(/([a-zA-Zāīūṛṝḷḹṅñṭḍṇśṣṁṃḥẏ'’`]+)/g, (match) => {
      return transliterateWord(match.toLowerCase());
    });
  }

  global.IastTransliteration = {
    toDevanagari: toDevanagari
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { toDevanagari };
  }
})(typeof window !== 'undefined' ? window : globalThis);
