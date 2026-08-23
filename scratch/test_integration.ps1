Write-Host "=== TEST 1: HTTP Server Accessibility ==="
try {
  $resp = Invoke-WebRequest -Uri "http://localhost:8899/index.html" -UseBasicParsing
  Write-Host "index.html Status: $($resp.StatusCode) OK (Length: $($resp.Content.Length) bytes)"
} catch {
  Write-Host "Error fetching index.html: $_"
}

try {
  $respJs = Invoke-WebRequest -Uri "http://localhost:8899/js/vs-chapters-data.js" -UseBasicParsing
  Write-Host "js/vs-chapters-data.js Status: $($respJs.StatusCode) OK (Length: $($respJs.Content.Length) bytes)"
} catch {
  Write-Host "Error fetching js/vs-chapters-data.js: $_"
}

try {
  $respApp = Invoke-WebRequest -Uri "http://localhost:8899/js/app.js" -UseBasicParsing
  Write-Host "js/app.js Status: $($respApp.StatusCode) OK (Length: $($respApp.Content.Length) bytes)"
} catch {
  Write-Host "Error fetching js/app.js: $_"
}

Write-Host "`n=== TEST 2: Validating Song Parsing for Top 5 Daily Prayers ==="
$vs = Get-Content 'data/vaishnava-songs/vaishnava-songs.json' -Raw -Encoding UTF8 | ConvertFrom-Json

$testPrayers = @(
  ($vs | Where-Object { $_.title -like '*Gurvastak*' } | Select-Object -First 1),
  ($vs | Where-Object { $_.title -like '*Damodarastak*' } | Select-Object -First 1),
  ($vs | Where-Object { $_.title -like '*Siksha*' } | Select-Object -First 1),
  ($vs | Where-Object { $_.title -like '*Nrsimha*' } | Select-Object -First 1),
  ($vs | Where-Object { $_.title -like '*Jaya Radha Madhava*' } | Select-Object -First 1)
)

foreach ($song in $testPrayers) {
  $raw = $song.body
  $transIdx = $raw.IndexOf('TRANSLATION', [System.StringComparison]::OrdinalIgnoreCase)
  $purportIdx = $raw.IndexOf('PURPORT', [System.StringComparison]::OrdinalIgnoreCase)

  $lyrics = if ($transIdx -ge 0) { $raw.Substring(0, $transIdx).Trim() } else { $raw.Trim() }
  $trans = if ($transIdx -ge 0) {
    if ($purportIdx -gt $transIdx) { $raw.Substring($transIdx + 11, $purportIdx - $transIdx - 11).Trim() }
    else { $raw.Substring($transIdx + 11).Trim() }
  } else { "" }

  $lyricsNorm = $lyrics -replace "`r`n", "`n"
  $stanzas = @()
  if ($lyricsNorm -match '(?m)^\s*\(?\d+\)?\s*$') {
    $parts = [regex]::Split($lyricsNorm, '(?m)^\s*\(?(\d+)\)?\s*$')
    for ($i = 1; $i -lt $parts.Length; $i += 2) {
      $num = $parts[$i]
      $txt = $parts[$i + 1].Trim()
      if ($txt) { $stanzas += @{ num = $num; text = $txt } }
    }
  } else {
    $paras = $lyricsNorm -split "\n\s*\n+"
    $idx = 1
    foreach ($p in $paras) {
      if ($p.Trim()) { $stanzas += @{ num = "$idx"; text = $p.Trim() }; $idx++ }
    }
  }

  $transNorm = $trans -replace "`r`n", "`n"
  $translations = @()
  if ($transNorm -match '(?m)^\s*\(?\d+\)?[\.\)]\s*') {
    $tParts = [regex]::Split($transNorm, '(?m)^\s*\(?(\d+)\)?[\.\)]\s*')
    for ($i = 1; $i -lt $tParts.Length; $i += 2) {
      $num = $tParts[$i]
      $txt = $tParts[$i + 1].Trim()
      if ($txt) { $translations += @{ num = $num; text = $txt } }
    }
  } else {
    $tParas = $transNorm -split "\n\s*\n+"
    $tidx = 1
    foreach ($tp in $tParas) {
      if ($tp.Trim()) { $translations += @{ num = "$tidx"; text = $tp.Trim() }; $tidx++ }
    }
  }

  Write-Host "Song #$($song.songNumber): '$($song.title)' ($($song.authorHindi))"
  Write-Host "  -> Stanzas Count: $($stanzas.Count)"
  Write-Host "  -> Translation Items: $($translations.Count)"
  Write-Host "  -> Stanza 1 preview: $($stanzas[0].text.Replace("`n", " / ").Substring(0, [Math]::Min(60, $stanzas[0].text.Length)))"
  if ($translations.Count -gt 0) {
    Write-Host "  -> Trans 1 preview:  $($translations[0].text.Substring(0, [Math]::Min(70, $translations[0].text.Length)))"
  }
  Write-Host "--------------------------------------------------------"
}
