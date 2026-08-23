$vs = Get-Content 'data/vaishnava-songs/vaishnava-songs.json' -Raw -Encoding UTF8 | ConvertFrom-Json

$withSynonyms = @()
$withDashes = @()
foreach ($s in $vs) {
  if ($s.body -match '(?i)SYNONYMS|WORD-FOR-WORD|WORD MEANING') {
    $withSynonyms += $s
  }
  if ($s.body -match '[a-zA-Z\u00C0-\u024F\s]{2,}--[^\n]{2,}') {
    $withDashes += $s
  }
}

Write-Host "Total songs with SYNONYMS: $($withSynonyms.Count)"
Write-Host "Total songs with dashes (--): $($withDashes.Count)"
if ($withSynonyms.Count -gt 0) {
  Write-Host "Sample synonyms song: $($withSynonyms[0].title)"
}
if ($withDashes.Count -gt 0) {
  Write-Host "Sample dashes song: $($withDashes[0].title)"
}
