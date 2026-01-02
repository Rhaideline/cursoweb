# 🚀 GUIA RÁPIDO - PUBLICAR NA CONTA RHAIDELINE

## ⚡ MÉTODO AUTOMÁTICO (RECOMENDADO)

### Execute o script:

1. Dê **duplo clique** no arquivo: `publicar-github-rhaideline.bat`

2. Quando pedir para fazer login:
   - Escolha: **"GitHub.com"**
   - Escolha: **"HTTPS"**
   - Escolha: **"Login with a web browser"**

3. Um código aparecerá (ex: `ABCD-1234`)

4. Copie o código e acesse: https://github.com/login/device

5. Cole o código e faça login com a conta **rhaideline**

6. Autorize o GitHub CLI

7. O script continuará automaticamente e criará o repositório!

---

## 🖱️ MÉTODO MANUAL (SE PREFERIR)

### PASSO 1: Fazer Login no GitHub CLI

Abra o **PowerShell** ou **CMD** e execute:

```bash
cd "c:\Users\RHAIDELINE\Downloads\CURSO WEB"
gh auth logout
gh auth login
```

Siga as instruções:
- What account? **GitHub.com**
- Protocol? **HTTPS**
- Authenticate? **Yes**
- How? **Login with a web browser**

Copie o código → https://github.com/login/device → Faça login como **rhaideline**

### PASSO 2: Criar Repositório

```bash
gh repo create curso-marketing-digital --public --description "Curso Completo de Marketing Digital - 22 aulas práticas em 4 módulos profissionais" --source=. --push
```

Pronto! Repositório criado em:
**https://github.com/rhaideline/curso-marketing-digital**

---

## 🌐 DEPLOY NO VERCEL

Após publicar no GitHub:

### PASSO 1: Acessar Vercel

1. Acesse: https://vercel.com
2. Clique em **"Sign Up"** (ou "Login")

### PASSO 2: Login com GitHub

1. Clique em **"Continue with GitHub"**
2. Faça login com a conta: **rhaideline**
3. Autorize o Vercel

### PASSO 3: Import Project

1. No dashboard, clique em **"Add New..."** → **"Project"**
2. Encontre: **curso-marketing-digital**
3. Clique em **"Import"**

### PASSO 4: Configure Deploy

Deixe tudo padrão:
- Framework Preset: **Other**
- Root Directory: `./`
- Build Command: (vazio)
- Output Directory: (vazio)

Clique em **"Deploy"**

### PASSO 5: Aguardar (1-2 min)

O Vercel fará o build e deploy automático!

### PASSO 6: Acessar o Site

Seu site estará em:
- `https://curso-marketing-digital.vercel.app`
- Ou: `https://curso-marketing-digital-rhaideline.vercel.app`

---

## ✅ CHECKLIST

- [ ] Executar `publicar-github-rhaideline.bat`
- [ ] Fazer login com conta rhaideline no navegador
- [ ] Verificar repositório: https://github.com/rhaideline/curso-marketing-digital
- [ ] Acessar vercel.com
- [ ] Login com GitHub (conta rhaideline)
- [ ] Importar projeto curso-marketing-digital
- [ ] Deploy concluído
- [ ] Site acessível em .vercel.app

---

## 🎯 URLs FINAIS

Após tudo configurado:

**GitHub:** https://github.com/rhaideline/curso-marketing-digital

**Site (Vercel):** https://curso-marketing-digital.vercel.app

**Página de Vendas:** https://curso-marketing-digital.vercel.app/

---

## 🔄 ATUALIZAÇÕES FUTURAS

Sempre que você fizer alterações:

```bash
cd "c:\Users\RHAIDELINE\Downloads\CURSO WEB"
git add .
git commit -m "Descrição das mudanças"
git push
```

O Vercel fará deploy automático em 1-2 minutos! 🚀

---

## 🆘 PROBLEMAS?

### Erro: "gh: command not found"
GitHub CLI não instalado. Baixe em: https://cli.github.com/

### Erro: "repository already exists"
O repositório já foi criado! Acesse:
https://github.com/rhaideline/curso-marketing-digital

### Deploy falhou no Vercel
- Verifique os logs no dashboard
- Tente fazer redeploy manual
- Verifique se não há erros de sintaxe

---

## 💡 DICA PRO

Configure um domínio personalizado no Vercel:
1. Compre um domínio (ex: cursomarketingdigital.com.br)
2. No Vercel, vá em Settings → Domains
3. Adicione seu domínio
4. Configure os DNS conforme instruções

Seu site ficará com URL profissional! 🎯

---

<div align="center">

**🚀 EXECUTE O SCRIPT E SEU SITE ESTARÁ NO AR EM 5 MINUTOS! 🚀**

Arquivo: `publicar-github-rhaideline.bat`

</div>
