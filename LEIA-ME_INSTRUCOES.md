# 📚 CURSO: MARKETING DIGITAL DO ZERO AO PRO

## 🎯 INSTRUÇÕES COMPLETAS DE USO

---

## 📂 ARQUIVOS CRIADOS

Você recebeu os seguintes arquivos neste pacote:

1. **ESTRUTURA_CURSO_MARKETING_DIGITAL.md** - Estrutura completa do curso (26 aulas organizadas em 4 módulos)
2. **Modulo1_Aula1_Introducao_Marketing_Digital.html** - Primeira aula completa em HTML (exemplo)
3. **BONUS_100_Ideias_de_Conteudo.html** - Bônus exclusivo com 100 ideias de posts
4. **index.html** - Página de vendas otimizada para Kiwify
5. **LEIA-ME_INSTRUCOES.md** - Este arquivo com todas as instruções

---

## 🚀 PASSO A PASSO PARA LANÇAR SEU CURSO NA KIWIFY

### **ETAPA 1: CRIAR CONTA NA KIWIFY**

1. Acesse: https://kiwify.com.br/
2. Clique em "Cadastre-se" no canto superior direito
3. Preencha seus dados pessoais ou da empresa
4. Confirme seu email
5. Complete o cadastro com CPF/CNPJ e dados bancários (para receber pagamentos)

**Importante:** A Kiwify cobra 8,99% + R$ 2,49 por transação. Não há mensalidade!

---

### **ETAPA 2: CRIAR O PRODUTO NA KIWIFY**

1. No painel da Kiwify, clique em **"Produtos"** no menu lateral
2. Clique em **"Novo Produto"**
3. Preencha as informações:

   **Nome do Produto:**
   ```
   Marketing Digital do Zero ao Pro
   ```

   **Tipo de Produto:**
   - Selecione: **"Curso Online"**

   **Forma de Entrega:**
   - Selecione: **"Área de membros da Kiwify (recomendado)"**

   **Preço:**
   ```
   Preço único: R$ 197,00
   Opções de parcelamento: Até 12x no cartão
   ```

   **Descrição:**
   ```
   Curso completo de Marketing Digital com 40 horas de conteúdo,
   26 aulas em PDF, 7 bônus exclusivos e certificado reconhecido nacionalmente.
   Aprenda desde os fundamentos até tráfego pago e conversão.
   ```

4. Clique em **"Salvar"**

---

### **ETAPA 3: CONVERTER HTML PARA PDF**

Você precisa converter os arquivos HTML em PDF para fazer upload na Kiwify.

**Opção 1: Google Chrome (Gratuito - Recomendado)**

1. Abra o arquivo HTML no Google Chrome
2. Clique com botão direito → "Imprimir" (ou Ctrl+P)
3. Em "Destino", selecione **"Salvar como PDF"**
4. Configure:
   - Margens: Padrão
   - Escala: 100%
5. Clique em "Salvar"
6. Repita para todos os arquivos HTML

**Opção 2: Sites Online (Gratuito)**

- https://www.ilovepdf.com/pt/html_para_pdf
- https://www.adobe.com/br/acrobat/online/html-to-pdf.html
- https://cloudconvert.com/html-to-pdf

**Opção 3: Microsoft Word/LibreOffice (Manual)**

1. Copie o conteúdo HTML
2. Cole no Word
3. Formate conforme necessário
4. Exporte como PDF

---

### **ETAPA 4: ORGANIZAR OS PDFs NA ÁREA DE MEMBROS**

1. No painel da Kiwify, vá até seu produto criado
2. Clique em **"Área de Membros"**
3. Clique em **"Adicionar Módulo"**

**Criar os 4 Módulos:**

**MÓDULO 1: FUNDAMENTOS DO MARKETING DIGITAL**
- Clique em "+ Adicionar Conteúdo"
- Upload do PDF: Modulo1_Aula1_Introducao_Marketing_Digital.pdf
- Título: "Aula 1.1 - Introdução ao Marketing Digital"
- Repita para as outras 4 aulas (você precisa criar os PDFs das aulas 1.2 a 1.5)

**MÓDULO 2: ESTRATÉGIA E PLANEJAMENTO**
- Adicione 5 aulas em PDF (2.1 a 2.5)
- Adicione anexos: templates SWOT, calendário editorial, planilha ROI

**MÓDULO 3: REDES SOCIAIS E CRIAÇÃO DE CONTEÚDO**
- Adicione 6 aulas em PDF (3.1 a 3.6)
- Adicione anexos: 50 exemplos de copy, link para templates Canva

**MÓDULO 4: TRÁFEGO PAGO E CONVERSÃO**
- Adicione 6 aulas em PDF (4.1 a 4.6)
- Adicione anexos: templates de email, scripts WhatsApp, checklist

**BÔNUS (criar módulo separado chamado "BÔNUS EXCLUSIVOS")**
- Upload: BONUS_100_Ideias_de_Conteudo.pdf
- Adicione os outros 6 bônus (planilhas, checklists, etc.)

---

### **ETAPA 5: CONFIGURAR PÁGINA DE VENDAS**

1. No painel da Kiwify, vá em **"Checkout"**
2. Você pode:
   - **Opção A:** Usar a página de checkout padrão da Kiwify
   - **Opção B:** Usar página externa (a index.html que criamos)

**Se escolher Opção B (Página Externa):**

1. Hospede o arquivo `index.html` em:
   - GitHub Pages (gratuito)
   - Netlify (gratuito)
   - Vercel (gratuito)
   - Hostgator/HostGator

2. Pegue o link do checkout na Kiwify:
   - Vá em seu produto → Checkout → "Link de Checkout"
   - Copie o link (ex: https://pay.kiwify.com.br/abc123)

3. Substitua em `index.html`:
   ```
   Procure por: https://pay.kiwify.com.br/SEU_PRODUTO_AQUI
   Substitua pelo link que você copiou
   ```

4. Faça upload do index.html editado para seu servidor

---

### **ETAPA 6: TESTAR O CHECKOUT**

1. Na Kiwify, vá em **"Modo de Teste"**
2. Ative o modo de teste
3. Faça uma compra de teste
4. Verifique se:
   - O pagamento foi processado
   - O acesso à área de membros foi liberado
   - Todos os PDFs estão acessíveis
5. Desative o modo de teste quando tudo estiver OK

---

### **ETAPA 7: CONFIGURAR PIXEL E RASTREAMENTO (OPCIONAL MAS RECOMENDADO)**

**Facebook Pixel:**
1. Crie um Pixel no Gerenciador de Eventos do Facebook
2. Copie o código do Pixel
3. Na Kiwify: Produto → Configurações → "Pixel Facebook"
4. Cole o código

**Google Analytics:**
1. Crie uma propriedade no Google Analytics
2. Copie o ID de Rastreamento (ex: G-XXXXXXXXXX)
3. Na Kiwify: Produto → Configurações → "Google Analytics"
4. Cole o ID

---

## 🎨 COMO CRIAR OS PDFS DAS OUTRAS AULAS

Você recebeu apenas a **Aula 1.1** como exemplo. Para criar as outras 25 aulas:

### **Método 1: Usando o mesmo template HTML**

1. Abra o arquivo `Modulo1_Aula1_Introducao_Marketing_Digital.html`
2. Salve uma cópia com novo nome (ex: `Modulo1_Aula2_Jornada_Cliente.html`)
3. Edite o conteúdo seguindo a estrutura do arquivo `ESTRUTURA_CURSO_MARKETING_DIGITAL.md`
4. Mantenha o mesmo design (cores, fontes, layout)
5. Converta para PDF

### **Método 2: Usando o ChatGPT ou Claude**

Prompt para usar:

```
Com base na estrutura do curso de Marketing Digital que criei,
gere o conteúdo completo e detalhado da [Aula X.X - Nome da Aula],
seguindo o mesmo padrão de qualidade e profundidade da Aula 1.1.
Inclua exemplos práticos, exercícios, dicas e formatação HTML.
```

### **Método 3: Contratar Designer/Redator (Mais Profissional)**

- Fiverr: a partir de R$ 50 por aula
- Workana: freelancers brasileiros
- 99Freelas: profissionais locais

---

## 💰 ESTRATÉGIA DE LANÇAMENTO

### **PRÉ-LANÇAMENTO (7 dias antes)**

1. **Crie expectativa:**
   - Poste nos Stories: "Algo incrível vem aí..."
   - Faça enquete: "Você gostaria de aprender Marketing Digital?"
   - Compartilhe bastidores da criação do curso

2. **Construa lista de interessados:**
   - Ofereça material gratuito (ex: "5 Dicas de Marketing Digital")
   - Capture emails
   - Crie grupo no WhatsApp/Telegram de interessados

### **LANÇAMENTO (Dia 1 a 7)**

**Estratégia de Escassez:**
```
Oferta de Lançamento: R$ 97,00 (desconto de 50%)
Válida por apenas 7 dias
Apenas 100 vagas
```

**Cronograma:**
- **Dia 1:** Abertura oficial + live explicando o curso
- **Dia 2-3:** Depoimentos + conteúdo de valor
- **Dia 4-5:** FAQ + últimas vagas
- **Dia 6:** Urgência máxima
- **Dia 7:** Encerramento às 23h59

### **PÓS-LANÇAMENTO**

- Preço normal: R$ 197,00
- Promoções sazonais (Black Friday, Ano Novo, etc.)
- Programa de afiliados (ofereça 30-40% de comissão)

---

## 📊 MÉTRICAS PARA ACOMPANHAR

Na Kiwify, monitore:

- **Taxa de Conversão:** quantos visitantes compraram
- **Ticket Médio:** valor médio das vendas
- **ROI:** retorno sobre investimento em anúncios
- **Taxa de Reembolso:** quantos pediram devolução
- **NPS:** satisfação dos alunos

**Metas Realistas (primeiros 3 meses):**
- 50-100 alunos
- Faturamento: R$ 10.000 - R$ 20.000
- Taxa de conversão: 2-5%

---

## 🎁 IDEIAS DE BÔNUS ADICIONAIS

Se quiser adicionar mais valor, crie:

1. **Bônus 8:** Masterclass ao vivo mensal (1 hora)
2. **Bônus 9:** Grupo VIP no WhatsApp com suporte direto
3. **Bônus 10:** Consultoria individual de 30 minutos
4. **Bônus 11:** Acesso a webinars gravados
5. **Bônus 12:** Kit de ferramentas (lista de 100+ ferramentas)

---

## ❓ DÚVIDAS FREQUENTES

**1. Preciso ter CNPJ para vender na Kiwify?**
Não. Você pode vender como pessoa física (CPF).

**2. Como recebo o dinheiro?**
- Pessoa Física: Pix instantâneo após aprovação do pagamento
- Pessoa Jurídica: Transferência em até 7 dias

**3. A Kiwify cobra mensalidade?**
Não. Apenas 8,99% + R$ 2,49 por venda realizada.

**4. Posso vender para outros países?**
Sim! A Kiwify aceita pagamentos internacionais.

**5. E se o aluno pedir reembolso?**
Você tem 7 dias de garantia. Após esse período, não há obrigação de devolver.

**6. Posso ter afiliados?**
Sim! Configure em: Produto → Programa de Afiliados

**7. Como emito o certificado?**
A Kiwify tem ferramenta de certificado automático. Configure em: Área de Membros → Certificado

---

## 🆘 SUPORTE E AJUDA

**Kiwify:**
- Central de Ajuda: https://ajuda.kiwify.com.br/
- Email: contato@kiwify.com.br
- WhatsApp: disponível no painel

**Comunidade:**
- Grupo no Facebook: "Produtores Digitais Brasil"
- YouTube: "Como Vender na Kiwify" (vários tutoriais)

---

## ✅ CHECKLIST ANTES DE LANÇAR

- [ ] Conta na Kiwify criada e verificada
- [ ] Produto cadastrado com nome, preço e descrição
- [ ] Todos os 26 PDFs criados e revisados
- [ ] PDFs organizados nos 4 módulos na área de membros
- [ ] Bônus adicionados
- [ ] Página de vendas configurada (index.html ou checkout Kiwify)
- [ ] Modo de teste realizado e aprovado
- [ ] Pixel do Facebook instalado
- [ ] Google Analytics configurado
- [ ] Garantia de 7 dias ativada
- [ ] Certificado configurado
- [ ] Programa de afiliados ativado (opcional)
- [ ] Estratégia de lançamento definida
- [ ] Conteúdo de divulgação preparado (posts, stories, emails)

---

## 🎯 PRÓXIMOS PASSOS RECOMENDADOS

1. **Semana 1:** Criar todos os PDFs das aulas (prioridade máxima)
2. **Semana 2:** Organizar na Kiwify e fazer testes
3. **Semana 3:** Preparar estratégia de lançamento
4. **Semana 4:** PRÉ-LANÇAMENTO (gerar expectativa)
5. **Semana 5:** LANÇAMENTO OFICIAL 🚀

---

## 💎 DICA FINAL

**Não espere ter tudo perfeito para lançar!**

Você pode:
- Lançar com 50% do conteúdo e ir adicionando aulas semanalmente
- Fazer um "lançamento semente" para 10-20 pessoas primeiro
- Pedir feedback dos primeiros alunos e melhorar o curso

O importante é COMEÇAR! 🚀

---

**Sucesso com seu curso! 📚💰**

---

## 📞 INFORMAÇÕES DE CONTATO (EXEMPLO)

Lembre-se de atualizar com suas informações reais:

- **Email:** contato@cursoscertificados.com.br *(substitua pelo seu)*
- **WhatsApp:** (11) 98765-4321 *(substitua pelo seu)*
- **Instagram:** @cursoscertificados *(crie seu perfil)*
- **Site:** cursoscertificados.com.br *(registre seu domínio)*

---

**Data de Criação:** Janeiro/2026
**Versão:** 1.0
**Criado por:** Cursos Certificados

---

**BOA SORTE E BOAS VENDAS! 🎉💰📚**
