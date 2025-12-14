# 🚀 Guia de Deploy - Visualizar no Celular

## Opção 1: Vercel (Recomendado)

### Passo 1: Login no Vercel
```bash
npx vercel login
```

### Passo 2: Deploy
```bash
npx vercel --prod
```

Siga as instruções no terminal. O Vercel vai gerar uma URL como:
`https://vicente-cartela.vercel.app`

---

## Opção 2: Netlify Drop (Mais Simples)

1. Acesse: https://app.netlify.com/drop
2. Arraste a pasta `dist` (já foi gerada pelo build)
3. Pronto! Você recebe uma URL instantaneamente

---

## Opção 3: GitHub Pages

1. Crie um repositório no GitHub
2. Faça push do código
3. Vá em Settings > Pages
4. Selecione a branch `main` e pasta `dist`
5. URL será: `https://seu-usuario.github.io/vicente-cartela`

---

## ✅ Build Já Está Pronto!

A pasta `dist` já foi gerada com sucesso:
- ✅ Build completo
- ✅ Otimizado para produção
- ✅ Pronto para deploy

---

## 📱 Acessar no Celular

Após o deploy, você receberá uma URL como:
- Vercel: `https://vicente-cartela.vercel.app`
- Netlify: `https://random-name.netlify.app`
- GitHub: `https://seu-usuario.github.io/vicente-cartela`

**Abra essa URL no navegador do seu celular!** 📱

---

## 🎯 Recomendação

**Use o Netlify Drop** - é o mais rápido:
1. Vá em: https://app.netlify.com/drop
2. Arraste a pasta `dist`
3. Pronto em 30 segundos!



