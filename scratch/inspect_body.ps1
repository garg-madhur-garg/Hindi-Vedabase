$vs = Get-Content 'data/vaishnava-songs/vaishnava-songs.json' -Raw -Encoding UTF8 | ConvertFrom-Json

$s1 = $vs | Where-Object { $_.title -like '*Gurvastak*' } | Select-Object -First 1
Write-Host "=== SAMPLE 1 (Gurvastakam: $($s1.title)) ==="
Write-Host $s1.body

$s2 = $vs | Where-Object { $_.title -like '*Siksha*' } | Select-Object -First 1
Write-Host "`n=== SAMPLE 2 (Sikshastakam: $($s2.title)) ==="
Write-Host $s2.body

$s3 = $vs | Where-Object { $_.title -like '*Damodarastak*' } | Select-Object -First 1
Write-Host "`n=== SAMPLE 3 (Damodarastakam: $($s3.title)) ==="
Write-Host $s3.body
