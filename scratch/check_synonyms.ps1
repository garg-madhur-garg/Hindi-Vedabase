$vs = Get-Content 'data/vaishnava-songs/vaishnava-songs.json' -Raw -Encoding UTF8 | ConvertFrom-Json

$synCount = 0
$dashCount = 0

foreach ($s in $vs) {
  if ($s.body -match 'SYNONYMS') { $synCount++ }
  if ($s.body -match '[a-zA-Z]+--[a-zA-Z]+') { $dashCount++ }
}

Write-Host "Songs with 'SYNONYMS': $synCount"
Write-Host "Songs with 'word--meaning': $dashCount"

$sample = $vs | Where-Object { $_.body -match '[a-zA-Z]+--[a-zA-Z]+' } | Select-Object -First 1
if ($sample) {
  Write-Host "`nSample with word--meaning ($($sample.title)):"
  $idx = $sample.body.IndexOf('--')
  Write-Host $sample.body.Substring([Math]::Max(0, $idx - 50), 300)
}
