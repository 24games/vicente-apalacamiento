# Vicente Cartela

Projeto React criado com Vite.

## 🚀 Tecnologias

### Core
- **React** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server extremamente rápido
- **TypeScript Ready** - Preparado para migração para TypeScript

### Estilo e Design
- **Tailwind CSS** - Framework CSS utility-first
- **tailwindcss-animate** - Animações keyframes para Tailwind
- **@tailwindcss/typography** - Plugin para estilizar textos longos (prose)
- **class-variance-authority (CVA)** - Sistema de variantes de componentes
- **clsx** + **tailwind-merge** - Fusão inteligente de classes CSS
- **mini-svg-data-uri** - Geração de backgrounds geométricos via CSS

### UI Components
- **shadcn-ui** - Componentes acessíveis baseados em Radix UI
- **Radix UI** - Primitivos acessíveis para componentes complexos
- **sonner** - Biblioteca de toasts/notificações moderna
- **vaul** - Drawers (gavetas) estilo iOS para mobile

### Ícones
- **lucide-react** - Ícones modernos e limpos
- **react-icons** - Biblioteca massiva com FontAwesome, Material Design e ícones de marcas

### Fontes
- **Inter** - Fonte principal para interface (UI)
- **JetBrains Mono** - Fonte monoespaçada para dados, códigos e números (estética Hacker/Security)

### Animações e Motion
- **framer-motion** - Animações complexas e layout changes
- **lenis** - Smooth scrolling (rolagem suave)

### Validação
- **zod** - Validação de schemas TypeScript-first

### Analytics
- **Vercel Analytics** - Analytics e métricas de uso em tempo real
- **Vercel Speed Insights** - Monitoramento de performance e velocidade

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 🏗️ Build

Para criar a build de produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`

## 🚢 Deploy na Vercel

Este projeto está configurado para deploy na **Vercel**.

### Opção 1: Deploy via Interface Web

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em "Add New Project"
3. Conecte seu repositório GitHub/GitLab/Bitbucket
4. A Vercel detectará automaticamente o Vite e configurará o projeto
5. Clique em "Deploy"

### Opção 2: Deploy via CLI

1. Instale a CLI da Vercel:
```bash
npm i -g vercel
```

2. Faça login:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

Para produção:
```bash
vercel --prod
```

### Configuração Automática

O arquivo `vercel.json` já está configurado com:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite

A Vercel detectará automaticamente essas configurações e fará o deploy corretamente.

### Variáveis de Ambiente

Se precisar configurar variáveis de ambiente:
1. Acesse as configurações do projeto na Vercel
2. Vá em "Settings" > "Environment Variables"
3. Adicione suas variáveis

### 📊 Analytics e Speed Insights

O projeto já está configurado com **Vercel Analytics** e **Speed Insights**:

- **Analytics**: Coleta métricas de uso, visualizações de página, eventos e muito mais
- **Speed Insights**: Monitora a performance real dos usuários (Web Vitals)

Os componentes estão integrados no `App.jsx` e funcionam automaticamente após o deploy na Vercel.

**Para visualizar os dados:**
1. Acesse o dashboard do seu projeto na Vercel
2. Vá em "Analytics" para ver métricas de uso
3. Vá em "Speed Insights" para ver métricas de performance

**Nota**: Os dados começam a ser coletados automaticamente após o primeiro deploy na Vercel. Não é necessária nenhuma configuração adicional.

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Preview da build de produção
- `npm run lint` - Executa o ESLint

## 🎨 Estrutura do Projeto

```
src/
├── components/
│   └── ui/          # Componentes shadcn-ui
├── lib/
│   ├── utils.js     # Utilitários (cn, etc)
│   ├── schemas.js   # Schemas de validação Zod
│   └── smooth-scroll.jsx  # Wrapper do Lenis
├── App.jsx          # Componente principal
├── main.jsx         # Ponto de entrada
└── index.css        # Estilos globais e Tailwind
```

## 🔧 Configurações

### Tailwind CSS
O projeto está configurado com:
- Dark mode via classe
- Sistema de cores customizado (HSL)
- Animações personalizadas
- Plugin de tipografia para textos longos

### shadcn-ui
Para adicionar novos componentes do shadcn-ui:
```bash
npx shadcn-ui@latest add [component-name]
```

### Validação com Zod
Exemplo de uso em `src/lib/schemas.js`:
```javascript
import { dataLeakSchema } from '@/lib/schemas'

// Validar dados
const result = dataLeakSchema.safeParse(data)
if (result.success) {
  // Dados válidos
}
```

### Smooth Scroll (Lenis)
Já configurado globalmente no `main.jsx`. Funciona automaticamente.

### Fontes
- **Inter**: Aplicada automaticamente no `body`
- **JetBrains Mono**: Use a classe `font-mono` ou em elementos `code`/`pre`

## 📄 Licença

MIT

