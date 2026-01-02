# 🔄 PUBLICAR COM OUTRA CONTA DO GITHUB

## ⚠️ IMPORTANTE

O repositório foi criado na conta: **galaxyinfomkt-svg**

Se você quer publicar em outra conta, siga os passos abaixo:

---

## 📝 OPÇÃO 1: Deletar e Recriar (RECOMENDADO)

### 1. Deletar o repositório da conta antiga

Acesse: https://github.com/galaxyinfomkt-svg/curso-marketing-digital/settings

Role até o final e clique em **"Delete this repository"**

### 2. Fazer login com nova conta

Abra um terminal e execute:

```bash
gh auth logout
gh auth login
```

Escolha:
- **What account do you want to log into?** GitHub.com
- **What is your preferred protocol?** HTTPS
- **Authenticate Git with GitHub credentials?** Yes
- **How would you like to authenticate?** Login with a web browser

Copie o código que aparecer e cole no navegador.

### 3. Remover remote antigo e criar novo repositório

```bash
cd "c:\Users\RHAIDELINE\Downloads\CURSO WEB"

# Remover remote antigo
git remote remove origin

# Criar repositório na nova conta
gh repo create curso-marketing-digital --public --description "Curso Completo de Marketing Digital - 22 aulas práticas em 4 módulos profissionais" --source=. --push
```

---

## 📝 OPÇÃO 2: Transferir Repositório (Manter histórico)

### 1. Acessar settings do repo

https://github.com/galaxyinfomkt-svg/curso-marketing-digital/settings

### 2. Transferir repositório

Role até **"Danger Zone"** > **"Transfer"**

Digite o nome de usuário da nova conta.

### 3. Aceitar na nova conta

Faça login na nova conta e aceite a transferência.

---

## 📝 OPÇÃO 3: Fork (Mais simples)

### 1. Fazer Fork

Acesse com a conta nova: https://github.com/galaxyinfomkt-svg/curso-marketing-digital

Clique em **"Fork"**

### 2. Clonar o fork

```bash
cd "c:\Users\RHAIDELINE\Downloads"
git clone https://github.com/NOVA_CONTA/curso-marketing-digital.git
```

---

## 📝 OPÇÃO 4: Publicar Manualmente (Sem gh CLI)

### 1. Criar repositório manualmente no GitHub

1. Acesse: https://github.com/new (com a conta que deseja)
2. Nome: `curso-marketing-digital`
3. Público
4. **NÃO marque** "Initialize with README"
5. Clique em "Create repository"

### 2. Adicionar remote e fazer push

```bash
cd "c:\Users\RHAIDELINE\Downloads\CURSO WEB"

# Remover remote antigo (se existir)
git remote remove origin

# Adicionar novo remote (SUBSTITUA NOVA_CONTA pelo seu usuário)
git remote add origin https://github.com/NOVA_CONTA/curso-marketing-digital.git

# Fazer push
git push -u origin main
```

Se pedir credenciais:
- Usuário: Seu nome de usuário do GitHub
- Senha: Use um **Personal Access Token** (não a senha normal)

### Como criar Personal Access Token:

1. https://github.com/settings/tokens
2. "Generate new token" > "Classic"
3. Marque: `repo`, `workflow`
4. Copie o token e use como senha

---

## 🚀 DEPLOY NO VERCEL

Após publicar no GitHub com a conta correta:

### 1. Acesse Vercel

https://vercel.com

### 2. Login com GitHub

Clique em "Continue with GitHub" e faça login com a MESMA CONTA que criou o repositório.

### 3. Import Project

- Clique em "Add New..." > "Project"
- Encontre `curso-marketing-digital`
- Clique em "Import"

### 4. Deploy

- Framework: Other (ou vazio)
- Build Command: (vazio)
- Output Directory: (vazio)
- Clique em **"Deploy"**

### 5. Aguardar (1-2 min)

Seu site estará em:
`https://curso-marketing-digital.vercel.app`

---

## ✅ VERIFICAR STATUS ATUAL

Para ver qual conta está logada:

```bash
gh auth status
```

Para ver o remote atual:

```bash
cd "c:\Users\RHAIDELINE\Downloads\CURSO WEB"
git remote -v
```

---

## 💡 QUAL OPÇÃO ESCOLHER?

**Se o repositório tem valor histórico:** Use Opção 2 (Transferir)

**Se quer começar limpo na nova conta:** Use Opção 1 (Deletar e Recriar)

**Se quer apenas ter uma cópia:** Use Opção 3 (Fork)

**Se prefere fazer manualmente:** Use Opção 4 (Manual)

---

## 🆘 PRECISA DE AJUDA?

Me diga qual conta você quer usar e eu te ajudo com os comandos específicos!

**Conta atual:** galaxyinfomkt-svg
**Repositório atual:** https://github.com/galaxyinfomkt-svg/curso-marketing-digital

Qual conta você quer usar?
