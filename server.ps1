# Lightweight, Zero-Dependency Local Web Server for Windows
# Uses built-in .NET HttpListener - 100% Offline, Zero Downloads Needed
# Supports Direct Disk JSON File Saving (/api/save-verse)

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

$baseDir = $PSScriptRoot
if (-not $baseDir -or -not (Test-Path $baseDir)) {
    $baseDir = (Get-Location).Path
}

# Try ports from 8080 to 8090
$ports = 8080..8090
$listener = $null
$boundPort = $null

foreach ($p in $ports) {
    try {
        $tempListener = New-Object System.Net.HttpListener
        $prefix = "http://localhost:$p/"
        $tempListener.Prefixes.Add($prefix)
        $tempListener.Start()
        $listener = $tempListener
        $boundPort = $p
        break
    } catch {
        if ($tempListener) {
            try { $tempListener.Close() } catch {}
        }
    }
}

if (-not $listener) {
    Write-Host "त्रुटि: पोर्ट 8080-8090 में से कोई भी पोर्ट उपलब्ध नहीं हो सका।" -ForegroundColor Red
    Write-Host "Error: Could not bind to any port between 8080 and 8090." -ForegroundColor Red
    Read-Host "जारी रखने के लिए Enter दबाएँ..."
    exit 1
}

$url = "http://localhost:$boundPort/"
Write-Host "===================================================" -ForegroundColor Yellow
Write-Host "   🕉️ हिन्दी वेदबेस (Hindi Vedabase) सर्वर प्रारम्भ" -ForegroundColor Cyan
Write-Host "   URL: $url" -ForegroundColor Green
Write-Host "   फ़ाइल सेविंग API: सक्रिय (/api/save-verse)" -ForegroundColor Magenta
Write-Host "===================================================" -ForegroundColor Yellow
Write-Host "ऐप आपके ब्राउज़र में खुल रहा है... (सर्वर बन्द करने के लिए यह विंडो बन्द करें)"
Write-Host ""

Start-Process $url

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".svg"  = "image/svg+xml"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".ico"  = "image/x-icon"
    ".pdf"  = "application/pdf"
}

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawPath = [System.Uri]::UnescapeDataString($request.Url.AbsolutePath)

        # 1. Handle CORS Preflight OPTIONS
        if ($request.HttpMethod -eq "OPTIONS") {
            $response.Headers.Add("Access-Control-Allow-Origin", "*")
            $response.Headers.Add("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
            $response.Headers.Add("Access-Control-Allow-Headers", "Content-Type")
            $response.StatusCode = 204
            $response.OutputStream.Close()
            continue
        }

        # 2. Handle POST /api/save-verse (Direct Hard Disk JSON Update)
        if ($request.HttpMethod -eq "POST" -and $rawPath -eq "/api/save-verse") {
            $reader = New-Object System.IO.StreamReader($request.InputStream, [System.Text.Encoding]::UTF8)
            $body = $reader.ReadToEnd()
            $reader.Close()

            $resObj = @{ success = $false; message = "अमान्य अनुरोध (Invalid Request)" }
            $statusCode = 400

            try {
                $slokaData = $body | ConvertFrom-Json
                if ($slokaData -is [Array]) {
                    $slokaData = $slokaData[0]
                }
                $cantoNum = [int]$slokaData.canto
                $verseKey = [string]$slokaData.verseKey
                $isBG = ($slokaData.book -eq "BG") -or ([string]$slokaData.id -like "bg-*") -or ($cantoNum -eq 0)

                if ($isBG -and -not [string]::IsNullOrEmpty($verseKey)) {
                    $bgFilePath = Join-Path $baseDir "data\bhagavad-gita.json"
                    if (Test-Path $bgFilePath) {
                        $jsonRaw = [System.IO.File]::ReadAllText($bgFilePath, [System.Text.Encoding]::UTF8)
                        $bgSlokas = $jsonRaw | ConvertFrom-Json

                        $found = $false
                        for ($i = 0; $i -lt $bgSlokas.Count; $i++) {
                            $s = $bgSlokas[$i]
                            $vKey = if ($s.verseKey) { [string]$s.verseKey } else { "$($s.chapter).$($s.verse)" }
                            if ($vKey -eq $verseKey -or [string]$s.id -eq [string]$slokaData.id) {
                                if ($slokaData.sanskritDevanagari -ne $null) { $s.sanskritDevanagari = [string]$slokaData.sanskritDevanagari }
                                if ($slokaData.sanskritIAST -ne $null) { $s.sanskritIAST = [string]$slokaData.sanskritIAST }
                                if ($slokaData.wordToWord -ne $null) { $s.wordToWord = $slokaData.wordToWord }
                                if ($slokaData.hindiTranslation -ne $null) { $s.hindiTranslation = [string]$slokaData.hindiTranslation }
                                if ($slokaData.hindiPurport -ne $null) { $s.hindiPurport = [string]$slokaData.hindiPurport }
                                $found = $true
                                break
                            }
                        }

                        if ($found) {
                            $newJson = $bgSlokas | ConvertTo-Json -Depth 10
                            [System.IO.File]::WriteAllText($bgFilePath, $newJson, $utf8NoBom)
                            Write-Host "✅ [SAVED DIRECTLY TO DISK] श्लोक BG $verseKey -> data/bhagavad-gita.json" -ForegroundColor Green

                            $resObj = @{
                                success = $true
                                message = "श्लोक BG $verseKey सीधे data/bhagavad-gita.json में सुरक्षित हो गया!"
                                verseKey = $verseKey
                                book = "BG"
                            }
                            $statusCode = 200
                        } else {
                            $resObj = @{ success = $false; message = "श्लोक BG $verseKey फ़ाइल में नहीं मिला।" }
                            $statusCode = 404
                        }
                    } else {
                        $resObj = @{ success = $false; message = "data/bhagavad-gita.json फ़ाइल नहीं मिली।" }
                        $statusCode = 404
                    }
                } elseif ($cantoNum -ge 1 -and $cantoNum -le 12 -and -not [string]::IsNullOrEmpty($verseKey)) {
                    $cantoFilePath = Join-Path $baseDir "data\canto-$cantoNum.json"
                    if (Test-Path $cantoFilePath) {
                        $jsonRaw = [System.IO.File]::ReadAllText($cantoFilePath, [System.Text.Encoding]::UTF8)
                        $cantoSlokas = $jsonRaw | ConvertFrom-Json

                        $found = $false
                        for ($i = 0; $i -lt $cantoSlokas.Count; $i++) {
                            $s = $cantoSlokas[$i]
                            $vKey = if ($s.verseKey) { [string]$s.verseKey } else { "$($s.canto).$($s.chapter).$($s.verse)" }
                            if ($vKey -eq $verseKey -or [string]$s.id -eq [string]$slokaData.id) {
                                # Update fields
                                if ($slokaData.sanskritDevanagari -ne $null) { $s.sanskritDevanagari = [string]$slokaData.sanskritDevanagari }
                                if ($slokaData.sanskritIAST -ne $null) { $s.sanskritIAST = [string]$slokaData.sanskritIAST }
                                if ($slokaData.wordToWord -ne $null) { $s.wordToWord = $slokaData.wordToWord }
                                if ($slokaData.hindiTranslation -ne $null) { $s.hindiTranslation = [string]$slokaData.hindiTranslation }
                                if ($slokaData.hindiPurport -ne $null) { $s.hindiPurport = [string]$slokaData.hindiPurport }
                                $found = $true
                                break
                            }
                        }

                        if ($found) {
                            # Convert to clean formatted JSON and save directly to disk
                            $newJson = $cantoSlokas | ConvertTo-Json -Depth 10
                            [System.IO.File]::WriteAllText($cantoFilePath, $newJson, $utf8NoBom)

                            Write-Host "✅ [SAVED DIRECTLY TO DISK] श्लोक SB $verseKey -> data/canto-$cantoNum.json" -ForegroundColor Green

                            $resObj = @{
                                success = $true
                                message = "श्लोक SB $verseKey सीधे data/canto-$cantoNum.json में सुरक्षित हो गया!"
                                verseKey = $verseKey
                                canto = $cantoNum
                                book = "SB"
                            }
                            $statusCode = 200
                        } else {
                            $resObj = @{ success = $false; message = "श्लोक SB $verseKey फ़ाइल में नहीं मिला।" }
                            $statusCode = 404
                        }
                    } else {
                        $resObj = @{ success = $false; message = "data/canto-$cantoNum.json फ़ाइल नहीं मिली।" }
                        $statusCode = 404
                    }
                }
            } catch {
                $resObj = @{ success = $false; message = "सेव करने में त्रुटि: " + $_.Exception.Message }
                $statusCode = 500
            }

            $resJson = $resObj | ConvertTo-Json
            $resBytes = [System.Text.Encoding]::UTF8.GetBytes($resJson)

            $response.ContentType = "application/json; charset=utf-8"
            $response.Headers.Add("Access-Control-Allow-Origin", "*")
            $response.Headers.Add("Cache-Control", "no-cache, no-store, must-revalidate")
            $response.StatusCode = $statusCode
            $response.ContentLength64 = $resBytes.Length
            $response.OutputStream.Write($resBytes, 0, $resBytes.Length)
            $response.OutputStream.Close()
            continue
        }

        # 3. Handle Static File Serving (GET)
        if ($rawPath -eq "/" -or [string]::IsNullOrWhiteSpace($rawPath)) {
            $rawPath = "/index.html"
        }

        $relPath = $rawPath.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar)
        $filePath = Join-Path $baseDir $relPath

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = $mimeTypes[$ext]
            if (-not $mime) { $mime = "application/octet-stream" }

            $response.ContentType = $mime
            $response.Headers.Add("Access-Control-Allow-Origin", "*")
            $response.Headers.Add("Cache-Control", "no-cache, no-store, must-revalidate")
            $response.StatusCode = 200

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $notFoundBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.OutputStream.Write($notFoundBytes, 0, $notFoundBytes.Length)
        }
        $response.OutputStream.Close()
    } catch {
        # continue listening on client aborts or transient errors
    }
}
