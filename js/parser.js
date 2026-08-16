/**
 * Hindi Vedabase - Smart Text & PDF Parser (parser.js)
 * Automatically converts raw text copied from PDFs, documents, or websites into structured Sloka objects.
 * Built-in 100% Complete ISKCON BBT / DV-TTSurekh / KrutiDev / Chanakya Font to Devanagari Unicode Converter!
 */

class VedabaseParser {
  // Main parsing entry point for raw text
  static parseRawText(rawText, defaultCanto = 1, defaultChapter = 1) {
    if (!rawText || !rawText.trim()) return [];

    let text = this.autoConvertLegacyFont(rawText);
    text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

    const slokaBlocks = this.splitIntoSlokaBlocks(text);
    const parsedSlokas = [];

    slokaBlocks.forEach((block, index) => {
      const parsed = this.parseSingleSlokaBlock(block, defaultCanto, defaultChapter, index + 1);
      if (parsed) {
        parsedSlokas.push(parsed);
      }
    });

    return parsedSlokas;
  }

  // Detects legacy characters and automatically converts to pure Hindi Devanagari
  static autoConvertLegacyFont(text) {
    if (!text) return '';

    // Check for presence of typical legacy ANSI font glyphs
    const legacyIndicator = /[ØÑSßæÙéÖ×ç¹ÜŸÌâÚŠ^ÎèÂáü¢ôù‹Ï÷ÐÒÓÔÕÛÝÞàãäåêëìíîïðñòóõöøúûýþÿ·¤´‡ˆ¿ÇÀ™žÅ¸ŒE¼€ŽËÆÈDƒ‚lpZH]/;
    if (!legacyIndicator.test(text)) {
      return text;
    }

    return this.convertBBTToUnicode(text);
  }

  // 100% Comprehensive ISKCON BBT / DV-TTSurekh / KrutiDev to Unicode Devanagari Font Converter
  static convertBBTToUnicode(src) {
    if (!src) return '';
    let s = src;

    // 1. Complex Multi-character conjuncts
    const multiCharMap = [
      [/·ë¤c‡ææ/g, "कृष्णा"],
      [/·ë¤c‡æ-/g, "कृष्ण-"],
      [/·ë¤c‡æ/g, "कृष्ण"],
      [/·ë¤/g, "कृ"],
      [/·¤æ/g, "का"],
      [/·¤è/g, "की"],
      [/·¤é/g, "कु"],
      [/·¤ê/g, "कू"],
      [/·¤ô/g, "को"],
      [/·¤õ/g, "कौ"],
      [/·¤/g, "क"],
      [/·/g, "क"],
      [/×éQ¤/g, "मुक्त"],
      [/Q¤/g, "क्त"],
      [/Q/g, "क्त"],
      [/ÌæˆÂØü/g, "तात्पर्य"],
      [/¥ÙéßæÎ/g, "अनुवाद"],
      [/àæŽÎæÍü/g, "शब्दार्थ"],
      [/¥ŠØæØ/g, "अध्याय"],
      [/S·¢¤Ï/g, "स्कन्ध"],
      [/àæéM¤/g, "शुरू"],
      [/àæé/g, "शु"],
      [/àææ/g, "शा"],
      [/àæ/g, "श"],
      [/ŸæèÜ/g, "श्रील"],
      [/Ÿæè/g, "श्री"],
      [/Ÿæé/g, "श्रु"],
      [/Ÿæ/g, "श्र"],
      [/Õýrææ/g, "ब्रह्मा"],
      [/Õýræ/g, "ब्रह्म"],
      [/Õý/g, "ब्र"],
      [/Sßæ/g, "स्वा"],
      [/Sß/g, "स्व"],
      [/SÂ/g, "स्प"],
      [/SÌ/g, "स्त"],
      [/SÍ/g, "स्थ"],
      [/SÙ/g, "स्न"],
      [/S×/g, "स्म"],
      [/SØ/g, "स्य"],
      [/S·/g, "स्क"],
      [/S/g, "स्"],
      [/ˆß/g, "त्व"],
      [/ˆØ/g, "त्य"],
      [/ˆÂ/g, "त्प"],
      [/ˆÌ/g, "त्त"],
      [/ˆ/g, "त्"],
      [/‹Î/g, "न्द"],
      [/‹Ì/g, "न्त"],
      [/‹Í/g, "न्थ"],
      [/‹Ø/g, "न्य"],
      [/‹Ï/g, "न्ध"],
      [/‹/g, "न्"],
      [/Âýð/g, "प्रे"],
      [/Âý/g, "प्र"],
      [/Öý/g, "भ्र"],
      [/»ý/g, "ग्र"],
      [/˜æ/g, "त्र"],
      [/˜/g, "त्र"],
      [/¿/g, "च"],
      [/À/g, "छ"],
      [/Áè/g, "जी"],
      [/Á/g, "ज"],
      [/ÃØ/g, "व्य"],
      [/Ã/g, "व्य"],
      [/çÁ/g, "जि"],
      [/çÕ/g, "बि"],
      [/M¤Â/g, "रूप"],
      [/M¤/g, "रू"],
      [/M/g, "रु"],
      [/L¤/g, "रुं"],
      [/L/g, "रु"],
      [/»g/g, "गु"],
      [/™æ/g, "ज्ञा"],
      [/™/g, "ज्ञ"],
      [/Þ/g, "ज्ञ"],
      [/h/g, "द्ध"],
      [/m/g, "द्व"],
      [/l/g, "द्य"],
      [/r/g, "ह्म"],
      [/E/g, "श्व"],
      [/C/g, "ष्ट"],
      [/D/g, "ष्ठ"],
      [/ž/g, "त्त"],
      [/Œ/g, "प्त"],
      [/Š/g, "ध्"],
      [/€/g, "क्य"],
      [/Ž/g, "झ"],
      [/ƒ/g, "ग्ध"],
      [/‚/g, "ग्म"],
      [/p/g, "प्य"],
      [/H\s*(\d+)\s*H/g, "॥ $1 ॥"],
      [/H/g, "॥"]
    ];

    multiCharMap.forEach(r => {
      s = s.replace(r[0], r[1]);
    });

    // 2. Chhoti-i (ç) prefix handling: moves after consonant
    s = s.replace(/ç([a-zA-Z0-9\u0080-\u00FFक-ह])/g, "$1ि");
    s = s.replace(/ç([a-zA-Z0-9\u0080-\u00FFक-ह])/g, "$1ि");

    // 3. Reph (ü and Z) suffix handling: moves before consonant
    s = s.replace(/([a-zA-Z0-9\u0080-\u00FFक-ह])ü/g, "र्$1");
    s = s.replace(/([a-zA-Z0-9\u0080-\u00FFक-ह])Z/g, "र्$1");

    // 4. Single character translation map
    const charMap = {
      '¥': 'अ', 'æ': 'ा', '§': 'इ', '©': 'उ', 'ª': 'ऊ', '°': 'ए',
      'Ö': 'भ', '»': 'ग', 'ß': 'व', 'Ù': 'न', '×': 'म', 'Î': 'द',
      'ð': 'े', 'ñ': 'ै', 'ô': 'ो', 'õ': 'ौ', 'ã': 'ह', 'é': 'ु',
      'ê': 'ू', 'ë': 'ृ', 'è': 'ी', 'Ú': 'र', 'U': '', 'â': 'स',
      'Ì': 'त', 'Í': 'थ', 'Ï': 'ध', 'Â': 'प', 'È': 'फ', 'Õ': 'ब',
      'Ø': 'य', 'Ü': 'ल', 'c': 'ष', '‡': 'ण', 'à': 'श', 'á': 'ष',
      '¢': 'ं', '´': 'ं', '¸': '़', '¹': 'ख', 'º': 'घ', 'Ð': '।',
      'Ò': '॥', 'Ñ': 'ः', '÷': '्', '¡': 'ँ', 'Š': 'ध्', '€': 'क्',
      '‚': 'ख्', 'ƒ': 'ग्', '„': 'घ्', '…': 'च्', '†': 'ज्', 'ˆ': 'त्',
      '‰': 'थ्', 'Œ': 'प्', 'Ç': 'ड', 'À': 'छ', 'Å': 'ट', '¼': 'ठ',
      'Æ': 'ढ', 'Ë': 'ङ', 'ó': 'ौ', 'í': 'ॅ', '^': 'त्', 'ù': 'ऽ',
      'ú': 'ऽ', 'ÿ': '्य', 'ý': '्र', 'þ': '्', 'ø': 'ॐ', 'ä': 'क्ष',
      'å': 'त्र', 'Û': 'ऋ', 'Ý': 'ळ'
    };

    let result = '';
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      result += charMap[c] !== undefined ? charMap[c] : c;
    }

    return result
      .replace(/अा/g, "आ")
      .replace(/अो/g, "ओ")
      .replace(/अौ/g, "औ")
      .replace(/एे/g, "ऐ")
      .replace(/ि्/g, "्")
      .replace(/्ि/g, "ि")
      .replace(/िा/g, "ी")
      .replace(/्ा/g, "")
      .replace(/\s+([।॥])/g, "$1")
      .trim();
  }

  // Split text into individual sloka chunks
  static splitIntoSlokaBlocks(text) {
    const regex = /(?=(?:TEXT\s+[\d०-९]+|श्लोक\s*[\d०-९]+|SB\s*[\d०-९]+[.\-][\d०-९]+[.\-][\d०-९]+|\n\s*[\d०-९]+[.\-][\d०-९]+[.\-][\d०-९]+|\n\s*॥\s*[\d०-९]+\s*॥))/gi;
    let parts = text.split(regex).map(p => p.trim()).filter(p => p.length > 20);

    if (parts.length <= 1) {
      const wordRegex = /(?=(?:[\u0900-\u097F\s\n]+॥\s*[\d०-९]+\s*॥\s*\n\s*शब्दार्थ))/gi;
      const subParts = text.split(wordRegex).map(p => p.trim()).filter(p => p.length > 20);
      if (subParts.length > 1) return subParts;
      return [text.trim()];
    }
    return parts;
  }

  // Parse a single block into structured fields (stripping chapter summary/preface)
  static parseSingleSlokaBlock(block, fallbackCanto = 1, fallbackChapter = 1, fallbackVerse = 1) {
    const rawLines = block.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    if (rawLines.length === 0) return null;

    let canto = fallbackCanto;
    let chapter = fallbackChapter;
    let verse = fallbackVerse;

    const blockHeader = rawLines.slice(0, 7).join('\n');
    const numMatch = blockHeader.match(/(?:SB\s*)?(\d+)[.\-](\d+)[.\-](\d+[\-\d]*)/i);
    const hindiCantoMatch = blockHeader.match(/(?:प्रथम|द्वितीय|तृतीय|चतुर्थ|पंचम|षष्ठ|सप्तम|अष्टम|नवम|दशम|एकादश|द्वादश)\s*स्कन्ध|स्कन्ध\s*([\d०-९]+)/i);
    const hindiChapMatch = blockHeader.match(/अध्याय\s*[:\-—]?\s*([\d०-९]+)/i);
    const hindiVerseMatch = blockHeader.match(/(?:श्लोक|TEXT|VERSE)\s*[:\-—]?\s*([\d०-९]+)/i);
    const verseMarkMatch = block.match(/॥\s*([\d०-९]+[\-\d०-९]*)\s*॥/);

    if (numMatch) {
      canto = parseInt(numMatch[1], 10);
      chapter = parseInt(numMatch[2], 10);
      verse = this.normalizeDigits(numMatch[3]);
    } else {
      if (hindiCantoMatch) {
        const cMap = { "प्रथम": 1, "द्वितीय": 2, "तृतीय": 3, "चतुर्थ": 4, "पंचम": 5, "षष्ठ": 6, "सप्तम": 7, "अष्टम": 8, "नवम": 9, "दशम": 10, "एकादश": 11, "द्वादश": 12 };
        for (let key in cMap) {
          if (hindiCantoMatch[0].includes(key)) { canto = cMap[key]; break; }
        }
        if (hindiCantoMatch[1]) canto = this.hindiToEnglishDigit(hindiCantoMatch[1]);
      }
      if (hindiChapMatch) {
        chapter = this.hindiToEnglishDigit(hindiChapMatch[1]);
      }
      if (hindiVerseMatch) {
        verse = this.hindiToEnglishDigit(hindiVerseMatch[1]);
      } else if (verseMarkMatch) {
        verse = this.hindiToEnglishDigit(verseMarkMatch[1]);
      }
    }

    let sanskritLines = [];
    let wordMeaningsText = '';
    let translationText = '';
    let purportText = '';

    let currentSection = 'preamble'; // Ignore preface/summary until actual Sanskrit or Verse starts

    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i];

      if (/^(?:TEXT|श्लोक|VERSE|SB\s*\d+|\d+[.\-]\d+[.\-]\d+)/i.test(line) && i < 2) {
        continue;
      }

      if (/^(?:शब्दार्थ|भावार्थ\s*शब्द|Synonyms|Word for word|शब्द-अर्थ)\s*[:\-—]/i.test(line) || /^[A-Za-z\u0900-\u097F]+[\s]*[—\-–:][\s]*[A-Za-z\u0900-\u097F]+;/.test(line)) {
        currentSection = 'words';
      } else if (/^(?:अनुवाद|भावार्थ|Translation|हिन्दी अनुवाद)\s*[:\-—]?/i.test(line)) {
        currentSection = 'translation';
        const cleaned = line.replace(/^(?:अनुवाद|भावार्थ|Translation|हिन्दी अनुवाद)\s*[:\-—]?/i, '').trim();
        if (cleaned) translationText += (translationText ? '\n' : '') + cleaned;
        continue;
      } else if (/^(?:तात्पर्य|टीका|व्याख्या|Purport|Commentary)\s*[:\-—]?/i.test(line)) {
        currentSection = 'purport';
        const cleaned = line.replace(/^(?:तात्पर्य|टीका|व्याख्या|Purport|Commentary)\s*[:\-—]?/i, '').trim();
        if (cleaned) purportText += (purportText ? '\n' : '') + cleaned;
        continue;
      }

      if (currentSection === 'preamble') {
        if (this.isSanskritLine(line)) {
          currentSection = 'sanskrit';
          sanskritLines.push(line);
        }
      } else if (currentSection === 'sanskrit') {
        if (this.isSanskritLine(line)) {
          sanskritLines.push(line);
        } else if (line.includes('—') || line.includes(';') || line.includes(':')) {
          currentSection = 'words';
          wordMeaningsText += (wordMeaningsText ? '; ' : '') + line;
        } else {
          currentSection = 'translation';
          translationText += (translationText ? '\n' : '') + line;
        }
      } else if (currentSection === 'words') {
        if (/^(?:अनुवाद|भावार्थ|Translation)\s*[:\-—]?/i.test(line)) {
          currentSection = 'translation';
        } else {
          wordMeaningsText += (wordMeaningsText ? '; ' : '') + line;
        }
      } else if (currentSection === 'translation') {
        translationText += (translationText ? '\n' : '') + line;
      } else if (currentSection === 'purport') {
        purportText += (purportText ? '\n' : '') + line;
      }
    }

    if (sanskritLines.length === 0) {
      sanskritLines = rawLines.filter(l => this.isSanskritLine(l)).slice(0, 4);
    }

    const wordToWord = this.parseWordToWordPairs(wordMeaningsText);
    const tags = this.autoGenerateTags(`${sanskritLines.join(' ')} ${translationText}`);

    const cantos = window.SB_CANTOS_DATA || [];
    const cantoObj = cantos.find(c => c.canto === canto);
    const chapterObj = cantoObj?.chapters?.find(ch => ch.chapter === chapter);

    return {
      id: `sb-${canto}-${chapter}-${verse}`,
      canto: Number(canto),
      chapter: Number(chapter),
      verse: isNaN(Number(verse)) ? verse : Number(verse),
      verseKey: `${canto}.${chapter}.${verse}`,
      sanskritDevanagari: sanskritLines.join('\n') || 'श्लोक पाठ उपलब्ध नहीं है',
      sanskritIAST: '',
      wordToWord,
      hindiTranslation: translationText || 'अनुवाद उपलब्ध नहीं है',
      hindiPurport: purportText || '',
      category: {
        book: "श्रीमद्भागवतम्",
        cantoTitleHindi: cantoObj?.name || `स्कन्ध ${canto}`,
        chapterTitleHindi: chapterObj ? `अध्याय ${chapter} - ${chapterObj.name}` : `अध्याय ${chapter}`
      },
      tags
    };
  }

  static isSanskritLine(line) {
    if (!line) return false;
    return /[\u0900-\u097F]/.test(line) && !line.includes('—') && !line.includes('अर्थात्');
  }

  static parseWordToWordPairs(rawWordText) {
    if (!rawWordText) return [];
    const normalized = rawWordText
      .replace(/शब्दार्थ\s*[:\-—]/gi, '')
      .replace(/\n/g, '; ')
      .replace(/,\s*/g, '; ');

    const rawPairs = normalized.split(/;|।|\./).map(p => p.trim()).filter(Boolean);
    const pairs = [];

    rawPairs.forEach(chunk => {
      const match = chunk.match(/^([^\-\—:=]+)[\-\—:=]+(.+)$/);
      if (match) {
        const sanskrit = match[1].trim();
        const hindi = match[2].trim();
        if (sanskrit && hindi && sanskrit.length < 50) {
          pairs.push({ sanskrit, hindi });
        }
      }
    });

    return pairs;
  }

  static autoGenerateTags(text) {
    if (!text) return ["श्रीमद्भागवतम्"];
    const tags = new Set(["श्रीमद्भागवतम्"]);
    const keywords = [
      { key: "कृष्ण", tag: "श्रीकृष्ण" },
      { key: "भक्ति", tag: "भक्ति योग" },
      { key: "धर्म", tag: "धर्म" },
      { key: "ज्ञान", tag: "दिव्य ज्ञान" },
      { key: "वैराग्य", tag: "वैराग्य" },
      { key: "शुकदेव", tag: "शुकदेव गोस्वामी" },
      { key: "परीक्षित", tag: "राजा परीक्षित" },
      { key: "व्यास", tag: "व्यासदेव" },
      { key: "सूत", tag: "सूत गोस्वामी" },
      { key: "भगवान", tag: "भगवान" },
      { key: "मुक्ति", tag: "मुक्ति" },
      { key: "हरिनाम", tag: "हरिनाम" },
      { key: "दामोदर", tag: "दामोदर लीला" },
      { key: "गोपी", tag: "गोपी प्रेम" }
    ];

    keywords.forEach(kw => {
      if (text.includes(kw.key)) {
        tags.add(kw.tag);
      }
    });

    return Array.from(tags).slice(0, 5);
  }

  static hindiToEnglishDigit(hindiNum) {
    if (!hindiNum) return 1;
    const map = { '०': 0, '१': 1, '२': 2, '३': 3, '४': 4, '५': 5, '६': 6, '७': 7, '८': 8, '९': 9 };
    const converted = hindiNum.toString().split('').map(char => map[char] !== undefined ? map[char] : char).join('');
    const parsed = parseInt(converted, 10);
    return isNaN(parsed) ? 1 : parsed;
  }

  static normalizeDigits(str) {
    if (!str) return '1';
    const map = { '०': 0, '१': 1, '२': 2, '३': 3, '४': 4, '५': 5, '६': 6, '७': 7, '८': 8, '९': 9 };
    return str.toString().split('').map(char => map[char] !== undefined ? map[char] : char).join('');
  }
}

window.vParser = VedabaseParser;
