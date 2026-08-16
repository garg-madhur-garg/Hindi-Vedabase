@echo off
title Hindi Vedabase Server - हिन्दी वेदबेस सर्वर
echo ===================================================
echo    🕉️ हिन्दी वेदबेस (Hindi Vedabase) सर्वर
echo ===================================================
echo.
echo Starting local web server on port 8080...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
