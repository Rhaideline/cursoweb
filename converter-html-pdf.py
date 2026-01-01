#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Conversor Automático de Aulas HTML para PDF
Para upload na Kiwify
Autor: Claude Code | Janeiro 2025
"""

import os
import sys
from pathlib import Path

print("=" * 50)
print("  CONVERSOR HTML PARA PDF - CURSO MARKETING DIGITAL")
print("=" * 50)
print()

# Verificar bibliotecas disponíveis
try:
    from weasyprint import HTML
    use_weasyprint = True
    print("[OK] WeasyPrint encontrado")
except ImportError:
    use_weasyprint = False
    print("[AVISO] WeasyPrint não encontrado")
    print("        Instale com: pip install weasyprint")
    print()

if not use_weasyprint:
    try:
        import pdfkit
        use_pdfkit = True
        print("[OK] PDFKit encontrado")
    except ImportError:
        use_pdfkit = False
        print("[ERRO] Nenhuma biblioteca de conversão encontrada!")
        print()
        print("INSTALE UMA DAS OPÇÕES:")
        print("  1. pip install weasyprint  (RECOMENDADO)")
        print("  2. pip install pdfkit")
        print()
        input("Pressione Enter para sair...")
        sys.exit(1)
else:
    use_pdfkit = False

# Diretório de trabalho
current_dir = Path.cwd()
pdf_dir = current_dir / "PDFs_Curso_Kiwify"

# Criar pasta de PDFs
pdf_dir.mkdir(exist_ok=True)
print(f"[OK] Pasta preparada: {pdf_dir}")
print()

# Lista de arquivos HTML das aulas
aulas = [
    # Módulo 1 - Fundamentos do Marketing Digital
    "Modulo1_Aula1_Introducao_Marketing_Digital.html",
    "Modulo1_Aula2_Jornada_Cliente_Digital.html",
    "Modulo1_Aula3_Funil_Vendas.html",
    "Modulo1_Aula4_Personas_Publico_Alvo.html",
    "Modulo1_Aula5_Principais_Canais_Digitais.html",

    # Módulo 2 - Estratégias e Planejamento
    "Modulo2_Aula1_Analise_SWOT_Digital.html",
    "Modulo2_Aula2_Objetivos_SMART.html",
    "Modulo2_Aula3_Calendario_Editorial.html",
    "Modulo2_Aula4_Analise_Concorrencia.html",
    "Modulo2_Aula5_Metricas_ROI.html",

    # Módulo 3 - Redes Sociais e Criação de Conteúdo
    "Modulo3_Aula1_Instagram_Marketing.html",
    "Modulo3_Aula2_Criacao_Conteudo_Visual.html",
    "Modulo3_Aula3_Copywriting_Textos_Vendem.html",
    "Modulo3_Aula4_Estrategias_Engajamento.html",
    "Modulo3_Aula5_Email_Marketing_Automacao.html",
    "Modulo3_Aula6_Analise_Dados_Otimizacao.html",

    # Módulo 4 - Tráfego Pago e Conversão
    "Modulo4_Aula1_Google_Ads_Fundamentos.html",
    "Modulo4_Aula2_Meta_Ads_Facebook_Instagram.html",
    "Modulo4_Aula3_Landing_Pages_Alta_Conversao.html",
    "Modulo4_Aula4_WhatsApp_Business_Automacao.html",
    "Modulo4_Aula5_Metricas_Analise_Resultados.html",
    "Modulo4_Aula6_Otimizacao_Escala.html"
]

# Contadores
total = len(aulas)
convertidos = 0
erros = 0

print(f"Iniciando conversão de {total} aulas...")
print()

for aula in aulas:
    html_path = current_dir / aula
    pdf_name = aula.replace('.html', '.pdf')
    pdf_path = pdf_dir / pdf_name

    if not html_path.exists():
        print(f"[ERRO] {aula} não encontrado!")
        erros += 1
        continue

    print(f"Convertendo: {aula}...", end=" ")

    try:
        if use_weasyprint:
            # Usar WeasyPrint
            HTML(filename=str(html_path)).write_pdf(str(pdf_path))
        elif use_pdfkit:
            # Usar PDFKit
            pdfkit.from_file(str(html_path), str(pdf_path))

        if pdf_path.exists():
            print("[OK]")
            convertidos += 1
        else:
            print("[FALHOU]")
            erros += 1

    except Exception as e:
        print(f"[ERRO]")
        print(f"  Detalhes: {str(e)}")
        erros += 1

print()
print("=" * 50)
print("  RESUMO DA CONVERSÃO")
print("=" * 50)
print(f"Total de aulas: {total}")
print(f"Convertidos com sucesso: {convertidos}")
print(f"Erros: {erros}")
print()
print(f"PDFs salvos em: {pdf_dir}")
print()

if convertidos == total:
    print("[SUCESSO] Todos os PDFs foram criados!")
    print()
    print("PRÓXIMOS PASSOS:")
    print("1. Acesse sua conta na Kiwify (kiwify.com.br)")
    print("2. Crie/edite seu produto")
    print("3. Faça upload dos PDFs na área de membros")
    print("4. Configure os 4 módulos e 22 aulas conforme a estrutura")
else:
    print("[ATENÇÃO] Alguns arquivos falharam na conversão")
    print("Verifique os erros acima")
    print()
    print("ALTERNATIVA:")
    print("Converta manualmente usando Ctrl+P > Salvar como PDF")

print()
input("Pressione Enter para sair...")
