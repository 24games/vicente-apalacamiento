import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SmoothScroll } from './lib/smooth-scroll.jsx'
import { getSlugFromUrl, getTelegramLink } from './config/campaignLinks'

// Detecta a slug da URL e obtém o link do Telegram correspondente
const slug = getSlugFromUrl();
const telegramLink = getTelegramLink(slug);

// Log para debug (pode ser removido em produção)
if (import.meta.env.DEV) {
  console.log('🔗 Slug detectada:', slug || 'nenhuma (usando padrão)');
  console.log('📱 Link do Telegram:', telegramLink);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScroll>
      <App telegramLink={telegramLink} />
    </SmoothScroll>
  </StrictMode>,
)

