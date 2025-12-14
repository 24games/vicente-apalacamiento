import { copyFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const source = resolve(__dirname, '../public/_redirects');
const dest = resolve(__dirname, '../dist/_redirects');

try {
  if (existsSync(source)) {
    copyFileSync(source, dest);
    console.log('✅ _redirects copiado para dist/');
  } else {
    console.warn('⚠️ Arquivo public/_redirects não encontrado');
  }
} catch (error) {
  console.error('❌ Erro ao copiar _redirects:', error.message);
  process.exit(1);
}

