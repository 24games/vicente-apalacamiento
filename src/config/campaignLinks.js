/**
 * Configuração de Links de Campanha
 * 
 * WhatsApp: Links dinâmicos baseados na slug da URL
 * Telegram: Mantido para referência (não usado nos botões principais)
 */

// WhatsApp fixo para todas as páginas (fallback)
export const DEFAULT_WHATSAPP_LINK = 'https://wa.me/message/OFJTC6W4P25EA1';

// Mapeamento de slugs para links do WhatsApp
export const WHATSAPP_LINKS = {
  'cr1-a6f2': 'https://wa.me/message/OFJTC6W4P25EA1',
  'cr2-a6f2': 'https://wa.me/message/OFJTC6W4P25EA1',
  'cr3-a6f2': 'https://wa.me/message/OFJTC6W4P25EA1',
};

// Mantido para referência (não usado nos botões principais)
export const TELEGRAM_LINKS = {
  'cr1-a6f2': 'https://t.me/vicentetipstertelegrambot?start=w48122701',
  'cr2-a6f2': 'https://t.me/vicentetipstertelegrambot?start=w48122703',
  'cr3-a6f2': 'https://t.me/vicentetipstertelegrambot?start=w48122705',
};

// Link padrão (fallback) - usa o cr1-a6f2
export const DEFAULT_TELEGRAM_LINK = TELEGRAM_LINKS['cr1-a6f2'];

/**
 * Obtém o link do WhatsApp baseado na slug
 * @param {string} slug - Slug da campanha (ex: 'cr1-a6f2')
 * @returns {string} Link do WhatsApp correspondente ou link padrão
 */
export function getWhatsAppLink(slug) {
  return WHATSAPP_LINKS[slug] || DEFAULT_WHATSAPP_LINK;
}

/**
 * Obtém o link do Telegram baseado na slug (mantido para referência)
 * @param {string} slug - Slug da campanha (ex: 'cr1-a6f2')
 * @returns {string} Link do Telegram correspondente ou link padrão
 */
export function getTelegramLink(slug) {
  return TELEGRAM_LINKS[slug] || DEFAULT_TELEGRAM_LINK;
}

/**
 * Extrai a slug da URL atual
 * Suporta tanto path (/cr1-a6f2) quanto query param (?c=cr1-a6f2)
 * @returns {string|null} Slug extraída da URL ou null
 */
export function getSlugFromUrl() {
  if (typeof window === 'undefined') return null;
  
  // Primeiro tenta pegar do query parameter ?c=slug
  const urlParams = new URLSearchParams(window.location.search);
  const querySlug = urlParams.get('c');
  if (querySlug && (WHATSAPP_LINKS[querySlug] || TELEGRAM_LINKS[querySlug])) {
    return querySlug;
  }
  
  // Depois tenta pegar do path /slug
  const path = window.location.pathname;
  const pathSlug = path.replace(/^\//, '').split('/')[0].split('?')[0].split('#')[0];
  
  if (pathSlug && pathSlug.length > 0 && pathSlug !== 'index.html' && (WHATSAPP_LINKS[pathSlug] || TELEGRAM_LINKS[pathSlug])) {
    return pathSlug;
  }
  
  return null;
}


