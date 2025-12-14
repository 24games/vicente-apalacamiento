/**
 * Configuração de Links de Campanha
 * 
 * WhatsApp: Link fixo para todas as campanhas
 * Telegram: Links dinâmicos baseados na slug da URL
 */

// WhatsApp fixo para todas as páginas
export const WHATSAPP_LINK = 'https://wa.me/message/OFJTC6W4P25EA1';

// Mapeamento de slugs para links do Telegram
export const TELEGRAM_LINKS = {
  'cr1-a6f2': 'https://t.me/vicentetipstertelegrambot?start=w48122701',
  'cr2-a6f2': 'https://t.me/vicentetipstertelegrambot?start=w48122703',
  'cr3-a6f2': 'https://t.me/vicentetipstertelegrambot?start=w48122705',
};

// Link padrão (fallback) - usa o cr1-a6f2
export const DEFAULT_TELEGRAM_LINK = TELEGRAM_LINKS['cr1-a6f2'];

/**
 * Obtém o link do Telegram baseado na slug
 * @param {string} slug - Slug da campanha (ex: 'cr1-a6f2')
 * @returns {string} Link do Telegram correspondente ou link padrão
 */
export function getTelegramLink(slug) {
  return TELEGRAM_LINKS[slug] || DEFAULT_TELEGRAM_LINK;
}

/**
 * Extrai a slug da URL atual
 * @returns {string|null} Slug extraída da URL ou null
 */
export function getSlugFromUrl() {
  if (typeof window === 'undefined') return null;
  
  const path = window.location.pathname;
  // Remove a barra inicial e pega a primeira parte
  const slug = path.replace(/^\//, '').split('/')[0];
  
  // Retorna null se não houver slug ou se for vazio
  return slug && slug.length > 0 ? slug : null;
}

