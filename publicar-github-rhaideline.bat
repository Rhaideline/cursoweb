@echo off
chcp 65001 >nul
echo ========================================
echo   PUBLICAR NO GITHUB - CONTA RHAIDELINE
echo ========================================
echo.

cd /d "%~dp0"

echo [1/4] Fazendo logout da conta anterior...
gh auth logout 2>nul

echo.
echo [2/4] Fazendo login na conta rhaideline...
echo.
echo IMPORTANTE:
echo - Escolha "GitHub.com"
echo - Escolha "HTTPS"
echo - Escolha "Login with a web browser"
echo - Copie o código e cole no navegador
echo - Faça login com a conta: rhaideline
echo.
pause
echo.

gh auth login

echo.
echo [3/4] Verificando login...
gh auth status

echo.
echo [4/4] Criando repositório e fazendo push...
echo.

gh repo create curso-marketing-digital --public --description "Curso Completo de Marketing Digital - 22 aulas práticas em 4 módulos profissionais" --source=. --push

echo.
echo ========================================
echo   SUCESSO!
echo ========================================
echo.
echo Repositorio criado em:
echo https://github.com/rhaideline/curso-marketing-digital
echo.
echo PROXIMOS PASSOS:
echo 1. Acesse: https://vercel.com
echo 2. Faca login com GitHub (conta rhaideline)
echo 3. Importe o repositorio curso-marketing-digital
echo 4. Clique em Deploy
echo.
pause
