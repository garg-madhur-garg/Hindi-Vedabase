$vs = Get-Content 'data/vaishnava-songs/vaishnava-songs.json' -Raw -Encoding UTF8 | ConvertFrom-Json

function Test-CompactStanzas($song) {
  $raw = $song.body
  $transIdx = $raw.IndexOf('TRANSLATION', [System.StringComparison]::OrdinalIgnoreCase)
  $purportIdx = $raw.IndexOf('PURPORT', [System.StringComparison]::OrdinalIgnoreCase)

  $lyrics = if ($transIdx -ge 0) { $raw.Substring(0, $transIdx).Trim() } else { $raw.Trim() }
  $trans = if ($transIdx -ge 0) {
    if ($purportIdx -gt $transIdx) { $raw.Substring($transIdx + 11, $purportIdx - $transIdx - 11).Trim() }
    else { $raw.Substring($transIdx + 11).Trim() }
  } else { "" }
  $purport = if ($purportIdx -ge 0) { $raw.Substring($purportIdx + 7).Trim() } else { "" }

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
  $translations = @{}
  if ($transNorm -match '(?m)^\s*\(?\d+\)?[\.\)]\s*') {
    $tParts = [regex]::Split($transNorm, '(?m)^\s*\(?(\d+)\)?[\.\)]\s*')
    for ($i = 1; $i -lt $tParts.Length; $i += 2) {
      $num = $tParts[$i]
      $txt = $tParts[$i + 1].Trim()
      if ($txt) { $translations[$num] = $txt }
    }
  } elseif ($transNorm) {
    $tParas = $transNorm -split "\n\s*\n+"
    $tidx = 1
    foreach ($tp in $tParas) {
      if ($tp.Trim()) { $translations["$tidx"] = $tp.Trim(); $tidx++ }
    }
  }

  Write-Host "=========================================="
  Write-Host "Song #$($song.songNumber): '$($song.title)'"
  Write-Host "Total Stanzas: $($stanzas.Count) | Matched Translations: $($translations.Count) | Has Purport: $($purport.Length -gt 0)"
  
  for ($i = 0; $i -lt [Math]::Min(3, $stanzas.Count); $i++) {
    $st = $stanzas[$i]
    $num = $st.num
    $stTrans = if ($translations.ContainsKey($num)) { $translations[$num] } elseif ($translations.ContainsKey("$($i+1)")) { $translations["$($i+1)"] } else { "" }
    Write-Host "  [Stanza $num] Lyrics (lines: $(($st.text -split "`n").Count)) | Trans: $($stTrans.Length) chars"
  }
}

$sampleTitles = @('Gurvastakam', 'Damodarastakam', 'Sikshastakam', 'Nrsimha', 'Jaya Radha Madhava', 'Bhoga Arati', 'Markine')
foreach ($st in $sampleTitles) {
  $s = $vs | Where-Object { $_.title -like "*$st*" } | Select-Object -First 1
  if ($s) { Test-CompactStanzas $s }
}
