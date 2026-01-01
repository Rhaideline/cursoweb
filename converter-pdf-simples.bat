@echo off
chcp 65001 >nul
echo =====================================
echo   CONVERSOR DE AULAS HTML PARA PDF
echo =====================================
echo.

:: Criar pasta PDFs
if not exist "PDFs_Curso_Kiwify" mkdir "PDFs_Curso_Kiwify"
echo [OK] Pasta preparada: PDFs_Curso_Kiwify
echo.

:: Localizar Chrome
set CHROME="C:\Program Files\Google\Chrome\Application\chrome.exe"
if not exist %CHROME% set CHROME="C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
if not exist %CHROME% set CHROME="%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe"

if not exist %CHROME% (
    echo [ERRO] Google Chrome nao encontrado!
    echo.
    echo SOLUCAO MANUAL:
    echo 1. Abra cada arquivo HTML no navegador
    echo 2. Pressione Ctrl+P
    echo 3. Selecione "Salvar como PDF"
    echo 4. Salve na pasta PDFs_Curso_Kiwify
    pause
    exit /b 1
)

echo [OK] Chrome encontrado
echo.
echo Convertendo aulas... Por favor aguarde.
echo.

:: Modulo 1
call :convert "Modulo1_Aula1_Introducao_Marketing_Digital.html"
call :convert "Modulo1_Aula2_Jornada_Cliente_Digital.html"
call :convert "Modulo1_Aula3_Funil_Vendas.html"
call :convert "Modulo1_Aula4_Personas_Publico_Alvo.html"
call :convert "Modulo1_Aula5_Principais_Canais_Digitais.html"

:: Modulo 2
call :convert "Modulo2_Aula1_Analise_SWOT_Digital.html"
call :convert "Modulo2_Aula2_Objetivos_SMART.html"
call :convert "Modulo2_Aula3_Calendario_Editorial.html"
call :convert "Modulo2_Aula4_Analise_Concorrencia.html"
call :convert "Modulo2_Aula5_Metricas_ROI.html"

:: Modulo 3
call :convert "Modulo3_Aula1_Instagram_Marketing.html"
call :convert "Modulo3_Aula2_Criacao_Conteudo_Visual.html"
call :convert "Modulo3_Aula3_Copywriting_Textos_Vendem.html"
call :convert "Modulo3_Aula4_Estrategias_Engajamento.html"
call :convert "Modulo3_Aula5_Email_Marketing_Automacao.html"
call :convert "Modulo3_Aula6_Analise_Dados_Otimizacao.html"

:: Modulo 4
call :convert "Modulo4_Aula1_Google_Ads_Fundamentos.html"
call :convert "Modulo4_Aula2_Meta_Ads_Facebook_Instagram.html"
call :convert "Modulo4_Aula3_Landing_Pages_Alta_Conversao.html"
call :convert "Modulo4_Aula4_WhatsApp_Business_Automacao.html"
call :convert "Modulo4_Aula5_Metricas_Analise_Resultados.html"
call :convert "Modulo4_Aula6_Otimizacao_Escala.html"

echo.
echo =====================================
echo   CONVERSAO CONCLUIDA!
echo =====================================
echo.
echo PDFs salvos em: PDFs_Curso_Kiwify
echo.
echo PROXIMOS PASSOS:
echo 1. Acesse kiwify.com.br
echo 2. Crie seu produto
echo 3. Faca upload dos PDFs na area de membros
echo 4. Configure os 4 modulos e 22 aulas
echo.
pause
exit /b 0

:convert
if not exist %1 (
    echo [ERRO] %~1 nao encontrado
    exit /b 1
)
set "pdfname=%~n1.pdf"
echo Convertendo %~1...
%CHROME% --headless --disable-gpu --print-to-pdf="PDFs_Curso_Kiwify\%pdfname%" --no-margins "%CD%\%~1" >nul 2>&1
if exist "PDFs_Curso_Kiwify\%pdfname%" (
    echo [OK] %pdfname%
) else (
    echo [FALHOU] %pdfname%
)
exit /b 0
