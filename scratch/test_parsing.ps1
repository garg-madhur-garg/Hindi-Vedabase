$vs = Get-Content 'data/vaishnava-songs/vaishnava-songs.json' -Raw -Encoding UTF8 | ConvertFrom-Json

function Test-SongParsing($song) {
  $raw = $song.body
  $transIdx = $raw.IndexOf('TRANSLATION', [System.StringComparison]::OrdinalIgnoreCase)
  $purportIdx = $raw.IndexOf('PURPORT', [System.StringComparison]::OrdinalIgnoreCase)

  $lyrics = ""
  $translation = ""
  $purport = ""

  if ($transIdx -ge 0) {
    $lyrics = $raw.Substring(0, $transIdx).Trim()
    if ($purportIdx -gt $transIdx) {
      $translation = $raw.Substring($transIdx + 11, $purportIdx - $transIdx - 11).Trim()
      $purport = $raw.Substring($purportIdx + 7).Trim()
    } else {
      $translation = $raw.Substring($transIdx + 11).Trim()
    }
  } else {
    $lyrics = $raw.Trim()
  }

  Write-Host "=================================================="
  Write-Host "SONG: $($song.songNumber) - $($song.title)"
  Write-Host "LYRICS LENGTH: $($lyrics.Length) | TRANS LENGTH: $($translation.Length) | PURPORT LENGTH: $($purport.Length)"
  
  # Check stanzas
  $stanzas = [regex]::Split($lyrics, '(?m)^\s*\(?(\d+)\)?\s*$')
  Write-Host "STANZAS SPLIT COUNT: $($stanzas.Count)"

  # Check translation items
  $transItems = [regex]::Split($translation, '(?m)^\s*\(?(\d+)\)?[\.\)]\s*')
  Write-Host "TRANS ITEMS SPLIT COUNT: $($transItems.Count)"
}

$sampleSongs = @(
  ($vs | Where-Object { $_.title -like '*Gurvastak*' } | Select-Object -First 1),
  ($vs | Where-Object { $_.title -like '*Damodarastak*' } | Select-Object -First 1),
  ($vs | Where-Object { $_.title -like '*Siksha*' } | Select-Object -First 1),
  ($vs | Where-Object { $_.title -like '*Nrsimha*' } | Select-Object -First 1),
  ($vs | Where-Object { $_.title -like '*Jaya Radha Madhava*' } | Select-Object -First 1),
  ($vs | Where-Object { $_.title -like '*Gaurangera Duti*' } | Select-Object -First 1)
)

foreach ($s in $sampleSongs) {
  if ($s) { Test-SongParsing $s }
}
