$vs = Get-Content 'data/vaishnava-songs/vaishnava-songs.json' -Raw -Encoding UTF8 | ConvertFrom-Json

function Format-SongStanzasHtml($body) {
  $raw = $body
  $transIdx = $raw.IndexOf('TRANSLATION', [System.StringComparison]::OrdinalIgnoreCase)
  $purportIdx = $raw.IndexOf('PURPORT', [System.StringComparison]::OrdinalIgnoreCase)

  $lyrics = if ($transIdx -ge 0) { $raw.Substring(0, $transIdx).Trim() } else { $raw.Trim() }
  $trans = if ($transIdx -ge 0) {
    if ($purportIdx -gt $transIdx) { $raw.Substring($transIdx + 11, $purportIdx - $transIdx - 11).Trim() }
    else { $raw.Substring($transIdx + 11).Trim() }
  } else { "" }

  # Split lyrics into stanzas
  # Normalize newlines
  $lyrics = $lyrics -replace "`r`n", "`n"
  $stanzas = @()

  if ($lyrics -match '(?m)^\s*\(?\d+\)?\s*$') {
    # Match stanzas separated by (1), (2), (3) or 1, 2, 3
    $parts = [regex]::Split($lyrics, '(?m)^\s*\(?(\d+)\)?\s*$')
    for ($i = 1; $i -lt $parts.Length; $i += 2) {
      $num = $parts[$i]
      $txt = $parts[$i + 1].Trim()
      if ($txt) { $stanzas += @{ num = $num; text = $txt } }
    }
  } else {
    # Split by double newlines
    $paras = $lyrics -split "\n\s*\n"
    $c = 1
    foreach ($p in $paras) {
      $pt = $p.Trim()
      if ($pt) {
        $stanzas += @{ num = $c; text = $pt }
        $c++
      }
    }
  }

  # Split translations into numbered items
  $transItems = @()
  if ($trans) {
    $trans = $trans -replace "`r`n", "`n"
    if ($trans -match '(?m)^\s*\(?\d+\)?[\.\)]\s*') {
      $tParts = [regex]::Split($trans, '(?m)^\s*\(?(\d+)\)?[\.\)]\s*')
      for ($i = 1; $i -lt $tParts.Length; $i += 2) {
        $tNum = $tParts[$i]
        $tTxt = $tParts[$i + 1].Trim()
        if ($tTxt) { $transItems += @{ num = $tNum; text = $tTxt } }
      }
    } else {
      $tParas = $trans -split "\n\s*\n"
      $tc = 1
      foreach ($tp in $tParas) {
        $tpt = $tp.Trim()
        if ($tpt) {
          $transItems += @{ num = $tc; text = $tpt }
          $tc++
        }
      }
    }
  }

  return @{
    stanzaCount = $stanzas.Count
    transCount = $transItems.Count
    stanzas = $stanzas
    translations = $transItems
  }
}

$sampleTitles = @('Gurvastakam', 'Damodarastakam', 'Sikshastakam', 'Nrsimha', 'Goracander', 'Jaya Radha Madhava', 'Vibhavari', 'Gaurangera', 'Bhoga Arati')

foreach ($st in $sampleTitles) {
  $s = $vs | Where-Object { $_.title -like "*$st*" } | Select-Object -First 1
  if ($s) {
    $res = Format-SongStanzasHtml $s.body
    Write-Host "Song '$($s.title)' -> Stanzas: $($res.stanzaCount) | Translations: $($res.transCount)"
    if ($res.stanzaCount -gt 0) {
      Write-Host "   Stanza 1: $($res.stanzas[0].text.Substring(0, [Math]::Min(50, $res.stanzas[0].text.Length)))"
    }
    if ($res.transCount -gt 0) {
      Write-Host "   Trans 1:  $($res.translations[0].text.Substring(0, [Math]::Min(70, $res.translations[0].text.Length)))"
    }
    Write-Host "--------------------------------------------------------"
  }
}
