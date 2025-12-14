import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
})
