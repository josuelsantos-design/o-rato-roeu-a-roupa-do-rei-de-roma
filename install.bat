@echo off
REM Script de instalação do CodeMaster para Windows

echo.
echo ╔═══════════════════════════════════════════════════════╗
echo ║   CodeMaster - Instalação                            ║
echo ╚═══════════════════════════════════════════════════════╝
echo.

echo Verificando Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo.
    echo ❌ Node.js nao encontrado!
    echo    Instale de: https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✓ Node.js encontrado: %NODE_VERSION%

echo.
echo Verificando npm...
npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ npm nao encontrado!
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo ✓ npm encontrado: %NPM_VERSION%

echo.
echo Instalando dependências...
call npm install

echo.
echo ✅ Instalação concluída!
echo.
echo 🚀 Para iniciar o servidor, execute:
echo    npm start
echo.
echo Depois acesse: http://localhost:3000
echo.
pause
