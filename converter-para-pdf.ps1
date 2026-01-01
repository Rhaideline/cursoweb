# Script para converter todas as aulas HTML em PDF para upload na Kiwify
# Autor: Claude Code | Data: Janeiro 2025

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  CONVERSOR DE AULAS HTML PARA PDF  " -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Diretorio atual
$currentDir = Get-Location

# Criar pasta para os PDFs
$pdfDir = Join-Path $currentDir "PDFs_Curso_Kiwify"
if (-not (Test-Path $pdfDir)) {
    New-Item -ItemType Directory -Path $pdfDir | Out-Null
    Write-Host "[OK] Pasta criada: PDFs_Curso_Kiwify" -ForegroundColor Green
} else {
    Write-Host "[OK] Pasta ja existe: PDFs_Curso_Kiwify" -ForegroundColor Yellow
}

# Lista de todos os arquivos HTML das aulas
$aulas = @(
    "Modulo1_Aula1_Introducao_Marketing_Digital.html",
    "Modulo1_Aula2_Jornada_Cliente_Digital.html",
    "Modulo1_Aula3_Funil_Vendas.html",
    "Modulo1_Aula4_Personas_Publico_Alvo.html",
    "Modulo1_Aula5_Principais_Canais_Digitais.html",
    "Modulo2_Aula1_Analise_SWOT_Digital.html",
    "Modulo2_Aula2_Objetivos_SMART.html",
    "Modulo2_Aula3_Calendario_Editorial.html",
    "Modulo2_Aula4_Analise_Concorrencia.html",
    "Modulo2_Aula5_Metricas_ROI.html",
    "Modulo3_Aula1_Instagram_Marketing.html",
    "Modulo3_Aula2_Criacao_Conteudo_Visual.html",
    "Modulo3_Aula3_Copywriting_Textos_Vendem.html",
    "Modulo3_Aula4_Estrategias_Engajamento.html",
    "Modulo3_Aula5_Email_Marketing_Automacao.html",
    "Modulo3_Aula6_Analise_Dados_Otimizacao.html",
    "Modulo4_Aula1_Google_Ads_Fundamentos.html",
    "Modulo4_Aula2_Facebook_Instagram_Ads.html",
    "Modulo4_Aula3_Landing_Pages_Alta_Conversao.html",
    "Modulo4_Aula4_WhatsApp_Business_Automacao.html",
    "Modulo4_Aula5_Metricas_Analise_Resultados.html",
    "Modulo4_Aula6_Otimizacao_Escala.html"
)

# Localizar o Chrome
$chromePaths = @(
    "C:\Program Files\Google\Chrome\Application\chrome.exe",
    "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe"
)

$chromePath = $null
foreach ($path in $chromePaths) {
    if (Test-Path $path) {
        $chromePath = $path
        break
    }
}

if (-not $chromePath) {
    Write-Host ""
    Write-Host "[ERRO] Google Chrome nao encontrado!" -ForegroundColor Red
    Write-Host ""
    Write-Host "SOLUCAO ALTERNATIVA:" -ForegroundColor Yellow
    Write-Host "1. Abra cada arquivo HTML no navegador" -ForegroundColor White
    Write-Host "2. Pressione Ctrl+P (Imprimir)" -ForegroundColor White
    Write-Host "3. Selecione 'Salvar como PDF'" -ForegroundColor White
    Write-Host "4. Salve na pasta: $pdfDir" -ForegroundColor White
    Write-Host ""
    Write-Host "Lista de arquivos para converter:" -ForegroundColor Cyan
    foreach ($aula in $aulas) {
        Write-Host "  - $aula" -ForegroundColor Gray
    }
    exit 1
}

Write-Host "[OK] Chrome encontrado: $chromePath" -ForegroundColor Green
Write-Host ""

# Contador
$total = $aulas.Count
$convertidos = 0
$erros = 0

Write-Host "Iniciando conversao de $total aulas..." -ForegroundColor Cyan
Write-Host ""

foreach ($aula in $aulas) {
    $htmlPath = Join-Path $currentDir $aula
    $pdfName = $aula -replace '\.html$', '.pdf'
    $pdfPath = Join-Path $pdfDir $pdfName

    if (-not (Test-Path $htmlPath)) {
        Write-Host "[ERRO] $aula nao encontrado!" -ForegroundColor Red
        $erros++
        continue
    }

    Write-Host "Convertendo: $aula..." -ForegroundColor Yellow -NoNewline

    try {
        $arguments = @(
            '--headless',
            '--disable-gpu',
            '--print-to-pdf=' + $pdfPath,
            '--no-margins',
            '--disable-pdf-tagging',
            'file:///' + ($htmlPath -replace '\\', '/')
        )

        $process = Start-Process -FilePath $chromePath -ArgumentList $arguments -Wait -NoNewWindow -PassThru

        if ($process.ExitCode -eq 0 -and (Test-Path $pdfPath)) {
            Write-Host " [OK]" -ForegroundColor Green
            $convertidos++
        } else {
            Write-Host " [FALHOU]" -ForegroundColor Red
            $erros++
        }
    } catch {
        Write-Host " [ERRO]" -ForegroundColor Red
        Write-Host "  Detalhes: $($_.Exception.Message)" -ForegroundColor Red
        $erros++
    }
}

Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  RESUMO DA CONVERSAO" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Total de aulas: $total" -ForegroundColor White
Write-Host "Convertidos com sucesso: $convertidos" -ForegroundColor Green
Write-Host "Erros: $erros" -ForegroundColor $(if ($erros -gt 0) { "Red" } else { "Green" })
Write-Host ""
Write-Host "PDFs salvos em: $pdfDir" -ForegroundColor Cyan
Write-Host ""

if ($convertidos -eq $total) {
    Write-Host "[SUCESSO] Todos os PDFs foram criados!" -ForegroundColor Green
    Write-Host ""
    Write-Host "PROXIMOS PASSOS:" -ForegroundColor Yellow
    Write-Host "1. Acesse sua conta na Kiwify (kiwify.com.br)" -ForegroundColor White
    Write-Host "2. Crie/edite seu produto" -ForegroundColor White
    Write-Host "3. Faca upload dos PDFs na area de membros" -ForegroundColor White
    Write-Host "4. Configure os modulos e aulas conforme a estrutura" -ForegroundColor White
} else {
    Write-Host "[ATENCAO] Alguns arquivos falharam na conversao" -ForegroundColor Yellow
    Write-Host "Verifique os erros acima e tente novamente" -ForegroundColor Yellow
}

Write-Host ""
