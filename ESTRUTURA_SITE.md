# 📚 ESTRUTURA DO SITE - CURSOS CERTIFICADOS

## 🎯 ARQUIVOS CRIADOS

### **PÁGINAS PRINCIPAIS:**

#### 1. **index.html** (HOMEPAGE - Página Inicial)
- **Descrição:** Página institucional mostrando TODOS os cursos disponíveis
- **Função:** Apresentar a empresa e o catálogo completo de cursos
- **Conteúdo:**
  - Hero Section com imagem de fundo (estudantes)
  - Estatísticas (10k+ alunos, 4.9 avaliação, etc.)
  - Grid com 6 cursos (Marketing Digital, Excel, Design, Programação, Copywriting, IA)
  - Seção "Sobre Nós" com foto de estudantes
  - Depoimentos de alunos
  - CTA final
  - Footer completo

#### 2. **curso-marketing-digital.html** (Página de Vendas VSL)
- **Descrição:** Página de vendas ESPECÍFICA do curso de Marketing Digital
- **Função:** Converter visitantes em compradores do curso
- **Conteúdo:**
  - Hero com informações do curso (40h, 26 aulas, 7 bônus)
  - Detalhamento dos 4 módulos
  - Seção de bônus exclusivos
  - Oferta com countdown timer
  - Garantia de 7 dias
  - FAQ completo
  - Link para checkout Kiwify

---

## 🖼️ IMAGENS UTILIZADAS (Unsplash - Gratuitas)

Todas as imagens foram selecionadas do **Unsplash**, um banco de imagens gratuito e de alta qualidade:

### **Homepage (index.html):**

1. **Hero Background:**
   - Foto: Estudantes em sala de aula colaborando
   - URL: `https://images.unsplash.com/photo-1522202176988-66273c2fd55f`
   - Tema: Educação, trabalho em equipe

2. **Curso Marketing Digital:**
   - Foto: Workspace com laptop e gráficos de marketing
   - URL: `https://images.unsplash.com/photo-1460925895917-afdab827c52f`
   - Tema: Marketing digital, analytics

3. **Curso Excel:**
   - Foto: Gráficos e dados em tela de computador
   - URL: `https://images.unsplash.com/photo-1551288049-bebda4e38f71`
   - Tema: Análise de dados, dashboards

4. **Curso Design Gráfico:**
   - Foto: Designer trabalhando no laptop com paleta de cores
   - URL: `https://images.unsplash.com/photo-1626785774573-4b799315345d`
   - Tema: Design, criatividade

5. **Curso Programação:**
   - Foto: Desenvolvedor codificando
   - URL: `https://images.unsplash.com/photo-1498050108023-c5249f4df085`
   - Tema: Programação, tecnologia

6. **Curso Copywriting:**
   - Foto: Pessoa escrevendo em notebook
   - URL: `https://images.unsplash.com/photo-1455390582262-044cdead277a`
   - Tema: Escrita, criação de conteúdo

7. **Curso IA:**
   - Foto: Inteligência Artificial, redes neurais
   - URL: `https://images.unsplash.com/photo-1677442136019-21780ecad995`
   - Tema: IA, tecnologia do futuro

8. **Seção "Sobre Nós":**
   - Foto: Estudantes aprendendo juntos em biblioteca
   - URL: `https://images.unsplash.com/photo-1524178232363-1fb2b075b655`
   - Tema: Educação, aprendizado colaborativo

---

## 🗂️ ESTRUTURA DE NAVEGAÇÃO

```
SITE CURSOS CERTIFICADOS
│
├── index.html (HOMEPAGE)
│   ├── Header (Logo + Menu + Área do Aluno)
│   ├── Hero Section (Banner principal)
│   ├── Cursos Section (Grid com 6 cursos)
│   ├── Sobre Nós
│   ├── Depoimentos
│   ├── CTA Final
│   └── Footer
│
├── curso-marketing-digital.html (PÁGINA DE VENDAS)
│   ├── Header
│   ├── Hero (Informações do curso)
│   ├── Módulos (4 módulos detalhados)
│   ├── Bônus (7 bônus exclusivos)
│   ├── Depoimentos
│   ├── Oferta Especial (com countdown)
│   ├── Garantia
│   ├── FAQ
│   ├── Contato
│   └── Footer
│
└── (Futuras páginas de vendas de outros cursos)
    ├── curso-excel.html
    ├── curso-design.html
    ├── curso-programacao.html
    ├── curso-copywriting.html
    └── curso-ia.html
```

---

## 🎨 CARACTERÍSTICAS DO DESIGN

### **Paleta de Cores:**
- **Azul Primário:** #1E40AF (títulos, CTAs principais)
- **Laranja Destaque:** #F59E0B (CTAs de conversão, destaques)
- **Verde Sucesso:** #10B981 (checks, certificação, garantia)
- **Azul Escuro:** #1E3A8A (header, footer)
- **Cinzas:** #F9FAFB (backgrounds leves)

### **Tipografia:**
- **Títulos:** Poppins (600, 700, 800)
- **Corpo:** Inter (400, 500, 600)

### **Efeitos:**
- **Hover nos cards:** Elevação de 8px + sombra
- **Transições:** 0.3s ease
- **Gradientes:** 135deg
- **Bordas arredondadas:** 12-24px

---

## 📱 RESPONSIVIDADE

Ambas as páginas são **100% responsivas** e funcionam perfeitamente em:

- **Desktop:** 1920px, 1440px, 1366px, 1280px
- **Tablet:** 1024px, 768px
- **Mobile:** 640px, 480px, 375px, 320px

**Breakpoints Tailwind:**
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px
- `2xl:` 1536px

---

## 🔗 LINKS IMPORTANTES PARA CONFIGURAR

### **Na Homepage (index.html):**

**Linha 100:** Link "Área do Aluno"
```html
<a href="#" class="...">Área do Aluno</a>
```
Substitua `#` pelo link da sua área de membros na Kiwify

**Linhas 250-370:** Links "Ver Detalhes" dos cursos
```html
<a href="curso-marketing-digital.html" class="...">Ver Detalhes</a>
```
- Marketing Digital → `curso-marketing-digital.html` ✅ (já criado)
- Excel → `curso-excel.html` (criar depois)
- Design → `curso-design.html` (criar depois)
- Programação → `curso-programacao.html` (criar depois)
- Copywriting → `curso-copywriting.html` (criar depois)
- IA → `curso-ia.html` (criar depois)

### **Na Página de Vendas (curso-marketing-digital.html):**

**Linha 539:** Link de checkout Kiwify
```html
<a href="https://pay.kiwify.com.br/SEU_PRODUTO_AQUI" class="...">
```
Substitua `SEU_PRODUTO_AQUI` pelo código do seu produto na Kiwify

---

## 🚀 COMO HOSPEDAR O SITE

### **Opção 1: GitHub Pages (GRATUITO - Recomendado)**

1. Crie uma conta no GitHub (github.com)
2. Crie um novo repositório chamado `cursoscertificados` ou `username.github.io`
3. Faça upload de todos os arquivos (.html, .md, etc.)
4. Vá em Settings → Pages
5. Selecione a branch `main` e pasta `/root`
6. Seu site estará em: `https://username.github.io/cursoscertificados/`

### **Opção 2: Netlify (GRATUITO)**

1. Acesse netlify.com
2. Faça login com GitHub
3. Clique em "Add new site" → "Import an existing project"
4. Conecte seu repositório GitHub
5. Deploy automático!
6. Domínio personalizado disponível

### **Opção 3: Vercel (GRATUITO)**

1. Acesse vercel.com
2. Faça login com GitHub
3. Importe o projeto
4. Deploy automático
5. Domínio personalizado

### **Opção 4: Hospedagem Tradicional (PAGO)**

- **HostGator:** R$ 6,99/mês
- **Hostinger:** R$ 5,99/mês
- **Locaweb:** R$ 12,90/mês

---

## ✅ CHECKLIST ANTES DE PUBLICAR

### **Homepage:**
- [ ] Substituir email de contato pelo seu
- [ ] Substituir links das redes sociais pelos seus perfis
- [ ] Configurar link "Área do Aluno"
- [ ] Substituir CNPJ pelo seu (se tiver)
- [ ] Criar páginas dos outros cursos (opcional)

### **Página de Vendas (Marketing Digital):**
- [ ] Configurar link de checkout Kiwify
- [ ] Substituir email e WhatsApp de contato
- [ ] Testar todos os links internos (#inicio, #cursos, etc.)
- [ ] Testar countdown timer
- [ ] Testar accordion do FAQ
- [ ] Verificar responsividade em mobile

### **Geral:**
- [ ] Testar em diferentes navegadores (Chrome, Firefox, Safari, Edge)
- [ ] Testar em dispositivos móveis reais
- [ ] Verificar velocidade de carregamento
- [ ] Configurar Google Analytics (opcional)
- [ ] Configurar Facebook Pixel (opcional)

---

## 📊 MÉTRICAS PARA ACOMPANHAR

Use o **Google Analytics** para rastrear:

- **Visitantes únicos**
- **Taxa de rejeição** (ideal: <40%)
- **Tempo na página** (ideal: >2 minutos)
- **Conversões** (cliques no botão de compra)
- **Funil de vendas:**
  - Homepage → Página do Curso → Checkout → Compra

---

## 🎯 PRÓXIMOS PASSOS

1. **Hospedar o site** (GitHub Pages, Netlify ou Vercel)
2. **Criar produto na Kiwify** e pegar link de checkout
3. **Configurar todos os links** nas páginas
4. **Testar fluxo completo:** Homepage → Curso → Checkout
5. **Divulgar nas redes sociais**
6. **Criar páginas dos outros cursos** (usar a mesma estrutura)

---

## 💡 DICAS EXTRAS

### **Para Criar Mais Cursos:**

Você pode duplicar o arquivo `curso-marketing-digital.html` e adaptar:

1. Copie o arquivo
2. Renomeie (ex: `curso-excel.html`)
3. Troque:
   - Título do curso
   - Descrição
   - Módulos
   - Bônus
   - Preço
   - Link de checkout Kiwify

### **Adicionar Vídeos:**

Se quiser adicionar vídeos (do YouTube, Vimeo, etc.):

```html
<div class="aspect-16-9">
    <iframe
        src="https://www.youtube.com/embed/SEU_VIDEO_ID"
        width="100%"
        height="100%"
        frameborder="0"
        allowfullscreen
        class="rounded-lg">
    </iframe>
</div>
```

### **Trocar Imagens:**

Para trocar qualquer imagem, basta substituir a URL do Unsplash:

```html
<!-- Antes -->
<img src="https://images.unsplash.com/photo-XXXXX" alt="Descrição">

<!-- Depois (sua imagem) -->
<img src="sua-imagem.jpg" alt="Descrição">
```

---

## 📞 CONTATOS PARA ATUALIZAR

Lembre-se de substituir em **ambas as páginas**:

- ✉️ Email: `contato@cursoscertificados.com.br`
- 📱 WhatsApp: `(11) 98765-4321`
- 📸 Instagram: `@cursoscertificados`
- 📘 Facebook: `/cursoscertificados`
- 📺 YouTube: `@cursoscertificados`

---

## 🎉 TUDO PRONTO!

Você agora tem:

✅ Homepage institucional profissional
✅ Página de vendas do curso de Marketing Digital
✅ Design responsivo e moderno
✅ Imagens de alta qualidade (Unsplash)
✅ Otimização para conversão
✅ Estrutura escalável para adicionar mais cursos

**Boas vendas! 🚀💰**

---

**Criado em:** Janeiro/2026
**Versão:** 1.0
**Plataforma:** Kiwify
