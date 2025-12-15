# 🚀 Guia de Deploy no Vercel - Resolução de Problemas

## ⚠️ Se o Deploy Automático Não Funcionar

### Passo 1: Verificar Conexão GitHub → Vercel

1. Acesse: https://vercel.com/dashboard
2. Vá em **Settings** → **Git**
3. Verifique se o repositório está conectado
4. Se não estiver, conecte manualmente

### Passo 2: Fazer Deploy Manual

#### Opção A: Via Dashboard
1. Acesse o projeto no Vercel
2. Clique em **"Deployments"**
3. Clique nos **3 pontos** do último deploy
4. Selecione **"Redeploy"**
5. Aguarde a conclusão

#### Opção B: Via CLI
```bash
# Instalar Vercel CLI (se não tiver)
npm i -g vercel

# Login
vercel login

# Deploy de produção
vercel --prod
```

### Passo 3: Verificar Configurações do Projeto

No dashboard do Vercel, vá em **Settings** → **General**:

- ✅ **Framework Preset**: `Vite`
- ✅ **Build Command**: `npm run build`
- ✅ **Output Directory**: `dist`
- ✅ **Install Command**: `npm install`

### Passo 4: Verificar Logs do Deploy

1. Vá em **Deployments**
2. Clique no último deploy
3. Veja os **Build Logs**
4. Procure por erros

### Passo 5: Limpar Cache (se necessário)

1. Vá em **Settings** → **General**
2. Role até **"Clear Build Cache"**
3. Clique em **"Clear"**
4. Faça um novo deploy

## 📋 Arquivos de Configuração

### `vercel.json`
```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### `public/_redirects`
```
/*    /index.html   200
```

### Script de Build
O `package.json` agora tem:
```json
{
  "scripts": {
    "build": "vite build && node scripts/copy-redirects.js"
  }
}
```

Isso garante que o `_redirects` seja copiado para `dist/` após o build.

## 🔍 Verificações

### 1. Verificar se `_redirects` está no dist
Após o build, verifique:
```bash
ls dist/_redirects
```

### 2. Verificar se `vercel.json` está na raiz
```bash
ls vercel.json
```

### 3. Testar Localmente
```bash
npm run build
npm run preview
```

Acesse: `http://localhost:4173/cr1-a6f2`

## 🎯 Solução Definitiva

Se nada funcionar, tente:

1. **Desconectar e reconectar** o repositório no Vercel
2. **Deletar o projeto** e criar novamente
3. **Usar Vercel CLI** para deploy direto:
   ```bash
   vercel --prod --force
   ```

## 📞 Suporte

Se ainda não funcionar:
- Verifique os logs do deploy no Vercel
- Verifique se há erros de build
- Verifique se o domínio está configurado corretamente


