@echo off
chcp 65001 >nul
echo ====================================================
echo  Syncing P-Portfolio to n8n Git Control Center...
echo ====================================================
cd /d "%~dp0"
python "C:\Users\thema\Downloads\n8n-git-ui-main\n8n-git-ui-main\generate_dag.py" "%~dp0."
if errorlevel 1 (
    echo.
    echo [ERROR] Could not generate Git DAG. Make sure Python is in PATH.
) else (
    echo.
    echo [SUCCESS] n8n Git Control Center updated with latest p-portfolio history!
    echo Open "C:\Users\thema\Downloads\n8n-git-ui-main\n8n-git-ui-main\index.html" in your browser to view the graph.
)
echo.
pause
