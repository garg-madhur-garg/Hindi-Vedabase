@echo off
title Hindi Vedabase - हिन्दी वेदबेस
echo ===================================================
echo    🕉️ हिन्दी वेदबेस (Hindi Vedabase) - 18,000 श्लोक
echo ===================================================
echo.
echo Starting local server and opening Hindi Vedabase...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
