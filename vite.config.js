import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { copyFileSync } from 'fs'

// Plugin para copiar _redirects para dist
const copyRedirects = () => {
  return {
    name: 'copy-redirects',
    closeBundle() {
      try {
        copyFileSync(
          path.resolve(__dirname, 'public/_redirects'),
          path.resolve(__dirname, 'dist/_redirects')
        )
        console.log('✅ _redirects copiado para dist/')
      } catch (error) {
        console.warn('⚠️ Não foi possível copiar _redirects:', error.message)
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyRedirects()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // Configuração para servir index.html em todas as rotas (SPA)
    // Isso permite que rotas como /cr1-a6f2 funcionem corretamente
    historyApiFallback: true,
  },
  preview: {
    // Mesma configuração para preview (build)
    historyApiFallback: true,
  },
  publicDir: 'public',
})
