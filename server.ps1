# Lightweight, Zero-Dependency Local Web Server for Windows
# Uses built-in .NET HttpListener - 100% Offline, Zero Downloads Needed

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

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawPath = [System.Uri]::UnescapeDataString($request.Url.AbsolutePath)
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
