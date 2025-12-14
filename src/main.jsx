import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SmoothScroll } from './lib/smooth-scroll.jsx'

// O App.jsx agora detecta automaticamente a slug da URL
// Não precisa mais passar telegramLink como prop

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScroll>
      <App />
    </SmoothScroll>
  </StrictMode>,
)

