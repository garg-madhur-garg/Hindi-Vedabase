$vs = Get-Content 'data/vaishnava-songs/vaishnava-songs.json' -Raw -Encoding UTF8 | ConvertFrom-Json

$s = $vs | Where-Object { $_.title -like '*Gurvastak*' } | Select-Object -First 1
Write-Host "Title: $($s.title)"
Write-Host "Raw body length: $($s.body.Length)"

$wordMatches = [regex]::Matches($s.body, '([a-zA-Z\u00C0-\u024F\-]+)--([^;,\n]+)')
Write-Host "Total word pairs matched: $($wordMatches.Count)"
foreach ($m in $wordMatches | Select-Object -First 5) {
  Write-Host "  $($m.Groups[1].Value) => $($m.Groups[2].Value)"
}
