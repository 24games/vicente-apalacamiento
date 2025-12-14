# Exemplos de Uso das Bibliotecas

## 🎨 Tailwind CSS com CVA (Class Variance Authority)

```jsx
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-lg p-6 border",
  {
    variants: {
      severity: {
        low: "bg-green-50 border-green-200 text-green-900",
        medium: "bg-yellow-50 border-yellow-200 text-yellow-900",
        high: "bg-orange-50 border-orange-200 text-orange-900",
        critical: "bg-red-50 border-red-200 text-red-900",
      },
    },
    defaultVariants: {
      severity: "low",
    },
  }
)

function DataLeakCard({ severity, children }) {
  return (
    <div className={cn(cardVariants({ severity }))}>
      {children}
    </div>
  )
}
```

## 🎭 Framer Motion

```jsx
import { motion } from "framer-motion"

function AnimatedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg"
    >
      Conteúdo animado
    </motion.div>
  )
}
```

## 🔔 Sonner (Toasts)

```jsx
import { toast } from "sonner"

function CopyButton() {
  const handleCopy = () => {
    navigator.clipboard.writeText("Texto copiado")
    toast.success("Link copiado para a área de transferência!")
  }

  return <button onClick={handleCopy}>Copiar</button>
}
```

## 📱 Vaul (Drawer)

```jsx
import { Drawer } from "vaul"

function MobileMenu() {
  return (
    <Drawer.Root>
      <Drawer.Trigger>Abrir Menu</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Title>Menu</Drawer.Title>
          <Drawer.Description>Descrição do menu</Drawer.Description>
          {/* Conteúdo */}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
```

## 🎯 Ícones (Lucide React)

```jsx
import { Shield, AlertTriangle, Database, Lock } from "lucide-react"

function IconsExample() {
  return (
    <div className="flex gap-4">
      <Shield className="w-6 h-6 text-blue-500" />
      <AlertTriangle className="w-6 h-6 text-red-500" />
      <Database className="w-6 h-6 text-green-500" />
      <Lock className="w-6 h-6 text-purple-500" />
    </div>
  )
}
```

## 🎯 Ícones (React Icons)

```jsx
import { FaGithub, FaTwitter } from "react-icons/fa"
import { SiVercel } from "react-icons/si"

function SocialIcons() {
  return (
    <div className="flex gap-4">
      <FaGithub className="w-6 h-6" />
      <FaTwitter className="w-6 h-6" />
      <SiVercel className="w-6 h-6" />
    </div>
  )
}
```

## ✅ Validação com Zod

```jsx
import { z } from "zod"
import { dataLeakSchema } from "@/lib/schemas"

function validateDataLeak(data) {
  const result = dataLeakSchema.safeParse(data)
  
  if (!result.success) {
    console.error("Erros de validação:", result.error.errors)
    return null
  }
  
  return result.data
}

// Uso
const leakData = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  name: "Exemplo Leak",
  logo: "https://example.com/logo.png",
  date: "2024-01-01T00:00:00Z",
  records: 1000000,
  severity: "high"
}

const validated = validateDataLeak(leakData)
```

## 🎨 Backgrounds com mini-svg-data-uri

```jsx
import { miniSvgDataUri } from "mini-svg-data-uri"

// Grid pattern
const gridPattern = miniSvgDataUri(`
  <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
`)

function GridBackground() {
  return (
    <div 
      style={{ backgroundImage: `url("${gridPattern}")` }}
      className="w-full h-screen"
    >
      Conteúdo com background de grid
    </div>
  )
}
```

## 📝 Typography Plugin (@tailwindcss/typography)

```jsx
function LongText() {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Título do Artigo</h1>
      <p>
        Texto longo que será estilizado automaticamente pelo plugin
        de tipografia do Tailwind. Perfeito para descrições de
        vazamentos de dados e documentação.
      </p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </article>
  )
}
```

## 🎨 Componente Button do shadcn-ui

```jsx
import { Button } from "@/components/ui/button"

function ButtonsExample() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}
```






