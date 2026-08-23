$csharp = @'
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

public class SongParser {
    public class SongItem {
        public string Name { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Book { get; set; }
        public string RawBook { get; set; }
        public string Category { get; set; }
        public string Body { get; set; }
        public List<AudioLink> Links { get; set; }
        public SongItem() { Links = new List<AudioLink>(); }
    }

    public class AudioLink {
        public string Singer { get; set; }
        public string Url { get; set; }
    }

    public static List<SongItem> ParseBundle(string code) {
        var list = new List<SongItem>();
        
        int pos = 0;
        string target = "name:`";
        while (pos < code.Length) {
            int idx = code.IndexOf(target, pos, StringComparison.Ordinal);
            if (idx < 0) break;

            int braceStart = code.LastIndexOf('{', idx);
            if (braceStart < 0) { pos = idx + 6; continue; }

            int nameStart = idx + 6;
            int nameEnd = code.IndexOf('`', nameStart);
            if (nameEnd < 0) { pos = idx + 6; continue; }
            string name = code.Substring(nameStart, nameEnd - nameStart).Trim();

            int bodyTagIdx = code.IndexOf("body:`", nameEnd, StringComparison.Ordinal);
            if (bodyTagIdx < 0 || (bodyTagIdx - idx) > 80000) { pos = idx + 6; continue; }

            int bodyStart = bodyTagIdx + 6;
            int bodyEnd = code.IndexOf('`', bodyStart);
            if (bodyEnd < 0) { pos = idx + 6; continue; }
            string body = code.Substring(bodyStart, bodyEnd - bodyStart).Trim();

            int braceEnd = code.IndexOf('}', bodyEnd);
            if (braceEnd < 0) braceEnd = bodyEnd + 1;

            string meta = code.Substring(nameEnd, bodyTagIdx - nameEnd);

            string author = "";
            var aMatch = Regex.Match(meta, @"author:\`([^\`]*)\`");
            if (aMatch.Success) author = aMatch.Groups[1].Value.Trim();

            string offical = "";
            var oMatch = Regex.Match(meta, @"offical:\`([^\`]*)\`");
            if (oMatch.Success) offical = oMatch.Groups[1].Value.Trim();

            string book = "";
            var bMatch = Regex.Match(meta, @"book:\`([^\`]*)\`");
            if (bMatch.Success) book = bMatch.Groups[1].Value.Trim();

            string category = "";
            var cMatch = Regex.Match(meta, @"category:\`([^\`]*)\`");
            if (cMatch.Success) category = cMatch.Groups[1].Value.Trim();

            string title = !string.IsNullOrEmpty(offical) ? offical : name;
            title = Regex.Replace(title, @"^\d+\.\s*", "");

            string cleanBook = book;
            var bkMatch = Regex.Match(book, @"^([A-Za-z\s]+)_");
            if (bkMatch.Success) cleanBook = bkMatch.Groups[1].Value.Trim();
            if (string.IsNullOrEmpty(cleanBook)) cleanBook = "Vaishnava Songs";
            if (cleanBook == "Kalyanakalpataru") cleanBook = "Kalyana Kalpataru";

            if (string.IsNullOrEmpty(author)) author = "Various Acharyas";

            var song = new SongItem {
                Name = name,
                Title = title,
                Author = author,
                Book = cleanBook,
                RawBook = book,
                Category = category,
                Body = body
            };

            var linkMatches = Regex.Matches(meta, @"\{linkname:\`([^\`]*)\`,linkaddress:\`([^\`]*)\`\}");
            foreach (Match lm in linkMatches) {
                string sName = lm.Groups[1].Value.Trim();
                string sUrl = lm.Groups[2].Value.Trim();
                if (!string.IsNullOrEmpty(sUrl)) {
                    song.Links.Add(new AudioLink {
                        Singer = sName,
                        Url = sUrl
                    });
                }
            }

            list.Add(song);
            pos = braceEnd + 1;
        }

        return list;
    }
}
'@

Add-Type -TypeDefinition $csharp -Language CSharp

$bundlePath = "C:\Users\madhu\.gemini\antigravity-ide\brain\369db650-6ba7-4e97-b8f6-08050aa79950\scratch\vs_bundle.js"
$code = [System.IO.File]::ReadAllText($bundlePath, [System.Text.Encoding]::UTF8)

$parsedSongs = [SongParser]::ParseBundle($code)
Write-Host ("Parsed " + $parsedSongs.Count + " raw songs from bundle.")

$authorHiJson = '{
  "Bhaktivinoda Thakura": "\u0936\u094d\u0930\u0940\u0932 \u092d\u0915\u094d\u0924\u093f\u0935\u093f\u0928\u094b\u0926 \u0920\u093e\u0915\u0941\u0930",
  "Narottama Dasa Thakura": "\u0936\u094d\u0930\u0940\u0932 \u0928\u0930\u094b\u0924\u094d\u0924\u092e \u0926\u093e\u0938 \u0920\u093e\u0915\u0941\u0930",
  "Locana Dasa Thakura": "\u0936\u094d\u0930\u0940\u0932 \u0932\u094b\u091a\u0928 \u0926\u093e\u0938 \u0920\u093e\u0915\u0941\u0930",
  "Vrndavana Dasa Thakura": "\u0936\u094d\u0930\u0940\u0932 \u0935\u0943\u0928\u094d\u0926\u093e\u0935\u0928 \u0926\u093e\u0938 \u0920\u093e\u0915\u0941\u0930",
  "Jayadeva Goswami": "\u0936\u094d\u0930\u0940\u0932 \u091c\u092f\u0926\u0947\u0935 \u0917\u094b\u0938\u094d\u0935\u093e\u092e\u0940",
  "Rupa Goswami": "\u0936\u094d\u0930\u0940\u0932 \u0930\u0942\u092a \u0917\u094b\u0938\u094d\u0935\u093e\u092e\u0940",
  "Sanatana Goswami": "\u0936\u094d\u0930\u0940\u0932 \u0938\u0928\u093e\u0924\u0928 \u0917\u094b\u0938\u094d\u0935\u093e\u092e\u0940",
  "Jiva Goswami": "\u0936\u094d\u0930\u0940\u0932 \u091c\u0940\u0935 \u0917\u094b\u0938\u094d\u0935\u093e\u092e\u0940",
  "Raghunatha Dasa Goswami": "\u0936\u094d\u0930\u0940\u0932 \u0930\u0918\u0941\u0928\u093e\u0925 \u0926\u093e\u0938 \u0917\u094b\u0938\u094d\u0935\u093e\u092e\u0940",
  "Krsnadasa Kaviraja Goswami": "\u0936\u094d\u0930\u0940\u0932 \u0915\u0943\u0937\u094d\u0923\u0926\u093e\u0938 \u0915\u0935\u093f\u0930\u093e\u091c \u0917\u094b\u0938\u094d\u0935\u093e\u092e\u0940",
  "Govinda Dasa Kaviraja": "\u0936\u094d\u0930\u0940\u0932 \u0917\u094b\u0935\u093f\u0928\u094d\u0926 \u0926\u093e\u0938 \u0915\u0935\u093f\u0930\u093e\u091c",
  "A.C. Bhaktivedanta Swami": "\u0936\u094d\u0930\u0940\u0932 \u090f.\u0938\u0940. \u092d\u0915\u094d\u0924\u093f\u0935\u0947\u0926\u093e\u0928\u094d\u0924 \u0938\u094d\u0935\u093e\u092e\u0940 \u092a\u094d\u0930\u092d\u0941\u092a\u093e\u0926",
  "Lord Sri Caitanya Mahaprabhu": "\u0936\u094d\u0930\u0940 \u091a\u0948\u0924\u0928\u094d\u092f \u092e\u0939\u093e\u092a\u094d\u0930\u092d\u0941",
  "Vidyapati": "\u0936\u094d\u0930\u0940\u0932 \u0935\u093f\u0926\u094d\u092f\u093e\u092a\u0924\u093f",
  "Madhvacharya": "\u0936\u094d\u0930\u0940\u0932 \u092e\u0927\u094d\u0935\u093e\u091a\u093e\u0930\u094d\u092f",
  "Sura Dasa": "\u0938\u0942\u0930\u0926\u093e\u0938",
  "Mira Bhai": "\u092e\u0940\u0930\u093e\u092c\u093e\u0908",
  "Vyasadeva": "\u0936\u094d\u0930\u0940\u0932 \u0935\u094d\u092f\u093e\u0938\u0926\u0947\u0935",
  "Lord Brahma": "\u092d\u0917\u0935\u093e\u0928\u094d \u092c\u094d\u0930\u0939\u094d\u092e\u093e",
  "Bhishma Deva": "\u092d\u0940\u0937\u094d\u092e\u0926\u0947\u0935",
  "Vasudeva Ghosha": "\u0935\u093e\u0938\u0941\u0926\u0947\u0935 \u0918\u094b\u0937",
  "Narahari Sarakara": "\u0928\u0930\u0939\u0930\u093f \u0938\u0930\u0915\u093e\u0930",
  "Bhakti Caru Swami": "\u092d\u0915\u094d\u0924\u093f \u091a\u093e\u0930\u0941 \u0938\u094d\u0935\u093e\u092e\u0940",
  "Jayapataka Swami": "\u091c\u092f\u092a\u0924\u093e\u0915\u093e \u0938\u094d\u0935\u093e\u092e\u0940",
  "B.R.Sridhara Deva Goswami": "\u092c\u0940.\u0906\u0930. \u0936\u094d\u0930\u0940\u0927\u0930 \u0926\u0947\u0935 \u0917\u094b\u0938\u094d\u0935\u093e\u092e\u0940",
  "Jagannatha Dasa": "\u091c\u0917\u0928\u094d\u0928\u093e\u0925 \u0926\u093e\u0938",
  "Vadiraja Tirtha": "\u0935\u093e\u0926\u0940\u0930\u093e\u091c \u0924\u0940\u0930\u094d\u0925",
  "Vedanta Desika": "\u0935\u0947\u0926\u093e\u0928\u094d\u0924 \u0926\u093e\u0936\u093f\u0915",
  "Bhakta Salabega": "\u092d\u0915\u094d\u0924 \u0938\u093e\u0932\u092c\u0947\u0917",
  "Kanu Ramadasa Thakura": "\u0915\u093e\u0928\u0942 \u0930\u093e\u092e\u0926\u093e\u0938 \u0920\u093e\u0915\u0941\u0930",
  "Radha Mohana Dasa": "\u0930\u093e\u0927\u093e \u092e\u094b\u0939\u0928 \u0926\u093e\u0938",
  "Candrasekhara Kavi": "\u091a\u0928\u094d\u0926\u094d\u0930\u0936\u0947\u0916\u0930 \u0915\u0935\u093f",
  "Hari Vyasa Devacarya": "\u0939\u0930\u093f \u0935\u094d\u092f\u093e\u0938 \u0926\u0947\u0935\u093e\u091a\u093e\u0930\u094d\u092f",
  "Krsna Dasa": "\u0915\u0943\u0937\u094d\u0923 \u0926\u093e\u0938",
  "Satyavrata Muni": "\u0938\u0924\u094d\u092f\u0935\u094d\u0930\u0924 \u092e\u0941\u0928\u093f",
  "Visvanatha Cakravarti Thakura": "\u0936\u094d\u0930\u0940\u0932 \u0935\u093f\u0936\u094d\u0935\u0928\u093e\u0925 \u091a\u0915\u094d\u0930\u0935\u0930\u094d\u0924\u0940 \u0920\u093e\u0915\u0941\u0930",
  "Srinivasa Acarya": "\u0936\u094d\u0930\u0940\u0932 \u0936\u094d\u0930\u0940\u0928\u093f\u0935\u093e\u0938 \u0906\u091a\u093e\u0930\u094d\u092f",
  "Adi Sankaracarya": "\u0936\u094d\u0930\u0940\u0932 \u0906\u0926\u093f \u0936\u0902\u0915\u0930\u093e\u091a\u093e\u0930\u094d\u092f",
  "Sarvabhauma Bhattacarya": "\u0938\u093e\u0930\u094d\u0935\u092d\u094c\u092e \u092d\u091f\u094d\u091f\u093e\u091a\u093e\u0930\u094d\u092f",
  "Prahalad Maharaj": "\u092d\u0915\u094d\u0924 \u092a\u094d\u0930\u0939\u094d\u0932\u093e\u0926 \u092e\u0939\u093e\u0930\u093e\u091c",
  "Shani Deva": "\u0936\u0928\u093f\u0926\u0947\u0935"
}'
$authorHiMap = $authorHiJson | ConvertFrom-Json

$dailyPrayerQueries = @(
    @{ titleHi = [System.Text.RegularExpressions.Regex]::Unescape("\u0936\u094d\u0930\u0940 \u0936\u094d\u0930\u0940 \u0917\u0941\u0930\u0941-\u0905\u0937\u094d\u091f\u0915 (\u092e\u0902\u0917\u0932\u093e \u0906\u0930\u0924\u0940)"); query = "Gurvastak"; nameQuery = "Samsara Davanala"; defaultAuthor = [System.Text.RegularExpressions.Regex]::Unescape("\u0936\u094d\u0930\u0940\u0932 \u0935\u093f\u0936\u094d\u0935\u0928\u093e\u0925 \u091a\u0915\u094d\u0930\u0935\u0930\u094d\u0924\u0940 \u0920\u093e\u0915\u0941\u0930") },
    @{ titleHi = [System.Text.RegularExpressions.Regex]::Unescape("\u0928\u0930\u0938\u093f\u0902\u0939 \u0906\u0930\u0924\u0940 \u0935 \u092a\u094d\u0930\u093e\u0930\u094d\u0925\u0928\u093e"); query = "Sri Nrsimha Arati"; nameQuery = "Namaste Narasimhaya"; defaultAuthor = [System.Text.RegularExpressions.Regex]::Unescape("\u0936\u094d\u0930\u0940\u0932 \u0935\u094d\u092f\u093e\u0938\u0926\u0947\u0935") },
    @{ titleHi = [System.Text.RegularExpressions.Regex]::Unescape("\u0924\u0941\u0932\u0938\u0940 \u0906\u0930\u0924\u0940 \u0935 \u092a\u094d\u0930\u0923\u093e\u092e"); query = "Sri Tulasi Arati"; nameQuery = "Namo Namah Tulasi Krsna"; defaultAuthor = [System.Text.RegularExpressions.Regex]::Unescape("\u0915\u0943\u0937\u094d\u0923 \u0926\u093e\u0938") },
    @{ titleHi = [System.Text.RegularExpressions.Regex]::Unescape("\u0924\u0941\u0932\u0938\u0940 \u092e\u0939\u093e\u0930\u093e\u0928\u0940 \u0935\u0902\u0926\u0928\u093e"); query = "Namo Namah Tulasi Maharani"; nameQuery = "Tulasi Maharani"; defaultAuthor = [System.Text.RegularExpressions.Regex]::Unescape("\u091a\u0928\u094d\u0926\u094d\u0930\u0936\u0947\u0916\u0930 \u0915\u0935\u093f") },
    @{ titleHi = [System.Text.RegularExpressions.Regex]::Unescape("\u0917\u094c\u0930 \u0906\u0930\u0924\u0940 (\u092d\u094b\u0917/\u0938\u0902\u0927\u094d\u092f\u093e \u0906\u0930\u0924\u0940)"); query = "Sri Gaura Arati"; nameQuery = "Jaya Jaya Goracander"; defaultAuthor = [System.Text.RegularExpressions.Regex]::Unescape("\u0936\u094d\u0930\u0940\u0932 \u092d\u0915\u094d\u0924\u093f\u0935\u093f\u0928\u094b\u0926 \u0920\u093e\u0915\u0941\u0930") },
    @{ titleHi = [System.Text.RegularExpressions.Regex]::Unescape("\u0926\u093e\u092e\u094b\u0926\u0930\u093e\u0937\u094d\u091f\u0915\u092e\u094d"); query = "Sri Sri Damodarastakam"; nameQuery = "Namamisvaram Saccidananda Rupam"; defaultAuthor = [System.Text.RegularExpressions.Regex]::Unescape("\u0938\u0924\u094d\u092f\u0935\u094d\u0930\u0924 \u092e\u0941\u0928\u093f") },
    @{ titleHi = [System.Text.RegularExpressions.Regex]::Unescape("\u0936\u093f\u0915\u094d\u0937\u093e\u0937\u094d\u091f\u0915\u092e\u094d"); query = "Sri Sri Sikshastakam"; nameQuery = "Ceto Darpana Marjanam"; defaultAuthor = [System.Text.RegularExpressions.Regex]::Unescape("\u0936\u094d\u0930\u0940 \u091a\u0948\u0924\u0928\u094d\u092f \u092e\u0939\u093e\u092a\u094d\u0930\u092d\u0941") },
    @{ titleHi = [System.Text.RegularExpressions.Regex]::Unescape("\u092c\u094d\u0930\u0939\u094d\u092e-\u0938\u0902\u0939\u093f\u0924\u093e (\u0917\u094b\u0935\u093f\u0928\u094d\u0926\u092e\u094d \u0906\u0926\u093f-\u092a\u0941\u0930\u0941\u0937\u092e\u094d)"); query = "Brahma Samhita"; nameQuery = "isvara"; defaultAuthor = [System.Text.RegularExpressions.Regex]::Unescape("\u092d\u0917\u0935\u093e\u0928\u094d \u092c\u094d\u0930\u0939\u094d\u092e\u093e") },
    @{ titleHi = [System.Text.RegularExpressions.Regex]::Unescape("\u091c\u092f \u0930\u093e\u0927\u093e \u092e\u093e\u0927\u0935"); query = "Jaya Radha Madhava"; nameQuery = "Jaya Radha Madhava"; defaultAuthor = [System.Text.RegularExpressions.Regex]::Unescape("\u0936\u094d\u0930\u0940\u0932 \u092d\u0915\u094d\u0924\u093f\u0935\u093f\u0928\u094b\u0926 \u0920\u093e\u0915\u0941\u0930") },
    @{ titleHi = [System.Text.RegularExpressions.Regex]::Unescape("\u0937\u0921\u094d-\u0917\u094b\u0938\u094d\u0935\u093e\u092e\u094d\u092f\u0937\u094d\u091f\u0915\u092e\u094d"); query = "Shad Goswami"; nameQuery = "Krsnotkirtana"; defaultAuthor = [System.Text.RegularExpressions.Regex]::Unescape("\u0936\u094d\u0930\u0940\u0932 \u0936\u094d\u0930\u0940\u0928\u093f\u0935\u093e\u0938 \u0906\u091a\u093e\u0930\u094d\u092f") },
    @{ titleHi = [System.Text.RegularExpressions.Regex]::Unescape("\u091c\u0917\u0928\u094d\u0928\u093e\u0925\u093e\u0937\u094d\u091f\u0915\u092e\u094d"); query = "Sri Sri Jagannathastakam"; nameQuery = "Kadacit Kalindi"; defaultAuthor = [System.Text.RegularExpressions.Regex]::Unescape("\u0936\u094d\u0930\u0940\u0932 \u0906\u0926\u093f \u0936\u0902\u0915\u0930\u093e\u091a\u093e\u0930\u094d\u092f") },
    @{ titleHi = [System.Text.RegularExpressions.Regex]::Unescape("\u0935\u093f\u092d\u093e\u0935\u0930\u0940 \u0936\u0947\u0937 (\u092a\u094d\u0930\u093e\u0924\u0903\u0915\u093e\u0932\u0940\u0928 \u0915\u0940\u0930\u094d\u0924\u0928)"); query = "Vibhavari Sesa"; nameQuery = "Vibhavari Sesa"; defaultAuthor = [System.Text.RegularExpressions.Regex]::Unescape("\u0936\u094d\u0930\u0940\u0932 \u092d\u0915\u094d\u0924\u093f\u0935\u093f\u0928\u094b\u0926 \u0920\u093e\u0915\u0941\u0930") },
    @{ titleHi = [System.Text.RegularExpressions.Regex]::Unescape("\u0917\u094c\u0930\u093e\u0919\u094d\u0917\u0947\u0930 \u0926\u0941\u091f\u093f \u092a\u0926"); query = "Gaurangera Duti Pada"; nameQuery = "Gaurangera Duti Pada"; defaultAuthor = [System.Text.RegularExpressions.Regex]::Unescape("\u0936\u094d\u0930\u0940\u0932 \u0928\u0930\u094b\u0924\u094d\u0924\u092e \u0926\u093e\u0938 \u0920\u093e\u0915\u0941\u0930") },
    @{ titleHi = [System.Text.RegularExpressions.Regex]::Unescape("\u0913\u0939\u0947 \u0935\u0948\u0937\u094d\u0923\u0935 \u0920\u093e\u0915\u0941\u0930"); query = "Ohe Vaisnava Thakura"; nameQuery = "Ohe Vaisnava Thakura"; defaultAuthor = [System.Text.RegularExpressions.Regex]::Unescape("\u0936\u094d\u0930\u0940\u0932 \u092d\u0915\u094d\u0924\u093f\u0935\u093f\u0928\u094b\u0926 \u0920\u093e\u0915\u0941\u0930") },
    @{ titleHi = [System.Text.RegularExpressions.Regex]::Unescape("\u092d\u094b\u0917 \u0906\u0930\u0924\u0940 (\u092d\u091c \u092d\u0915\u0924-\u0935\u0924\u094d\u0938\u0932)"); query = "Bhoga Arati"; nameQuery = "Bhaja Bhakata Vatsala"; defaultAuthor = [System.Text.RegularExpressions.Regex]::Unescape("\u0936\u094d\u0930\u0940\u0932 \u092d\u0915\u094d\u0924\u093f\u0935\u093f\u0928\u094b\u0926 \u0920\u093e\u0915\u0941\u0930") }
)

$songsList = [System.Collections.Generic.List[PSObject]]::new()
$authorsCount = @{}
$songbooksCount = @{}
$seenTitles = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)

$idCounter = 1

foreach ($s in $parsedSongs) {
    if ([string]::IsNullOrEmpty($s.Name) -or [string]::IsNullOrEmpty($s.Body)) { continue }

    $author = if (-not [string]::IsNullOrEmpty($s.Author)) { $s.Author } else { "Various Acharyas" }
    $authorProp = $authorHiMap.PSObject.Properties[$author]
    $authorHindi = if ($authorProp) { $authorProp.Value } else { $author }

    $rawLines = $s.Body -split "`r?`n"
    $firstLine = $s.Title
    foreach ($rl in $rawLines) {
        $trimmed = $rl.Trim()
        if ($trimmed -ne '' -and -not $trimmed.StartsWith('Song ') -and -not $trimmed.StartsWith('Text ') -and -not $trimmed.StartsWith('(1)') -and -not $trimmed.StartsWith('1)')) {
            $firstLine = $trimmed
            break
        }
    }

    $bodyPrefix = if ($s.Body.Length -gt 40) { $s.Body.Substring(0, 40) } else { $s.Body }
    $uniqueKey = $s.Title + "###" + $author + "###" + $bodyPrefix
    if ($seenTitles.Contains($uniqueKey)) {
        continue
    }
    $seenTitles.Add($uniqueKey) | Out-Null

    $links = @()
    foreach ($al in $s.Links) {
        $links += @{
            singer = $al.Singer
            url = $al.Url
        }
    }

    $songObj = [PSCustomObject]@{
        id = ("vs-" + $idCounter)
        songNumber = $idCounter
        title = $s.Title
        author = $author
        authorHindi = $authorHindi
        book = $s.Book
        rawBook = $s.RawBook
        category = $s.Category
        firstLine = $firstLine
        body = $s.Body
        audioLinks = $links
    }

    $songsList.Add($songObj)

    if (-not $authorsCount.ContainsKey($author)) { $authorsCount[$author] = 0 }
    $authorsCount[$author]++

    if (-not $songbooksCount.ContainsKey($s.Book)) { $songbooksCount[$s.Book] = 0 }
    $songbooksCount[$s.Book]++

    $idCounter++
}

Write-Host ("Processed " + $songsList.Count + " unique songs.")

# Resolve Daily Prayers
$dailyResolved = @()
foreach ($dp in $dailyPrayerQueries) {
    $q = $dp.query
    $nq = $dp.nameQuery
    $matchedSong = $songsList | Where-Object { 
        $_.title -like "*$q*" -or $_.title -like "*$nq*" -or $_.body -like "*$q*" -or $_.body -like "*$nq*" 
    } | Select-Object -First 1

    if ($matchedSong) {
        $dailyResolved += @{
            id = $matchedSong.id
            songNumber = $matchedSong.songNumber
            titleHindi = $dp.titleHi
            title = $matchedSong.title
            author = $matchedSong.author
            authorHindi = if ($matchedSong.authorHindi -ne "Various Acharyas") { $matchedSong.authorHindi } else { $dp.defaultAuthor }
            hasAudio = ($matchedSong.audioLinks.Count -gt 0)
            audioCount = $matchedSong.audioLinks.Count
        }
        Write-Host ("Resolved: " + $dp.query + " -> #" + $matchedSong.songNumber + " '" + $matchedSong.title + "' (Audios: " + $matchedSong.audioLinks.Count + ")")
    } else {
        Write-Host ("WARNING: Daily Prayer not resolved: " + $dp.query)
    }
}

# Build Manifest
$authorItems = @()
foreach ($a in ($authorsCount.Keys | Sort-Object)) {
    $aProp = $authorHiMap.PSObject.Properties[$a]
    $aHi = if ($aProp) { $aProp.Value } else { $a }
    $authorItems += @{
        name = $a
        nameHindi = $aHi
        songCount = $authorsCount[$a]
    }
}

$songbookItems = @()
foreach ($b in ($songbooksCount.Keys | Sort-Object)) {
    $songbookItems += @{
        name = $b
        songCount = $songbooksCount[$b]
    }
}

$manifestObj = [PSCustomObject]@{
    title = [System.Text.RegularExpressions.Regex]::Unescape("\u0935\u0948\u0937\u094d\u0923\u0935 \u0917\u0940\u0924, \u092d\u091c\u0928 \u090f\u0935\u0902 \u0906\u0930\u0924\u093f\u092f\u093e\u0901 (Vaishnava Songs & Prayers)")
    totalSongs = $songsList.Count
    totalAuthors = $authorItems.Count
    totalSongbooks = $songbookItems.Count
    dailyPrayers = $dailyResolved
    authors = $authorItems
    songbooks = $songbookItems
}

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

# 1. Save data/vaishnava-songs/vaishnava-songs.json
$jsonFull = $songsList | ConvertTo-Json -Depth 10
[System.IO.File]::WriteAllText("data/vaishnava-songs/vaishnava-songs.json", $jsonFull, $utf8NoBom)
Write-Host ("Saved data/vaishnava-songs/vaishnava-songs.json (" + [math]::Round($jsonFull.Length / 1MB, 2) + " MB)")

# 2. Save data/vaishnava-songs/vaishnava-songs-manifest.json
$jsonManifest = $manifestObj | ConvertTo-Json -Depth 10
[System.IO.File]::WriteAllText("data/vaishnava-songs/vaishnava-songs-manifest.json", $jsonManifest, $utf8NoBom)
Write-Host "Saved data/vaishnava-songs/vaishnava-songs-manifest.json"

# 3. Build fast in-memory index js/vs-chapters-data.js
$songsIndexList = @()
foreach ($s in $songsList) {
    $songsIndexList += @{
        id = $s.id
        num = $s.songNumber
        title = $s.title
        author = $s.author
        authorHi = $s.authorHindi
        book = $s.book
        firstLine = $s.firstLine
        hasAudio = ($s.audioLinks.Count -gt 0)
        audioCount = $s.audioLinks.Count
    }
}

$jsIndexJson = $songsIndexList | ConvertTo-Json -Depth 5 -Compress
$manifestJsonCompact = $manifestObj | ConvertTo-Json -Depth 5 -Compress

$jsContent = @"
/**
 * Vaishnava Songs & Prayers Directory & Metadata (js/vs-chapters-data.js)
 * Total Songs: $($songsList.Count)
 */
window.VS_MANIFEST = $manifestJsonCompact;
window.VS_SONGS_INDEX = $jsIndexJson;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    manifest: window.VS_MANIFEST,
    songsIndex: window.VS_SONGS_INDEX
  };
}
"@

[System.IO.File]::WriteAllText("js/vs-chapters-data.js", $jsContent, $utf8NoBom)
Write-Host "Saved js/vs-chapters-data.js"
