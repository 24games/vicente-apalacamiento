import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { copyFileSync, existsSync } from 'fs'

// Plugin para copiar arquivos necessários para dist
const copyFiles = () => {
  return {
    name: 'copy-files',
    writeBundle() {
      try {
        // Copia _redirects
        const redirectsPath = path.resolve(__dirname, 'public/_redirects');
        const distRedirects = path.resolve(__dirname, 'dist/_redirects');
        if (existsSync(redirectsPath)) {
          copyFileSync(redirectsPath, distRedirects);
          console.log('✅ _redirects copiado para dist/');
        }
        
        // Copia index.html para 404.html (SPA fallback)
        const indexPath = path.resolve(__dirname, 'dist/index.html');
        const notFoundPath = path.resolve(__dirname, 'dist/404.html');
        if (existsSync(indexPath)) {
          copyFileSync(indexPath, notFoundPath);
          console.log('✅ 404.html criado para SPA fallback');
        }
      } catch (error) {
        console.warn('⚠️ Erro ao copiar arquivos:', error.message);
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyFiles()],
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
