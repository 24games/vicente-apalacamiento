/**
 * Configuração de Links de Campanha
 * 
 * Link do WhatsApp: FIXO e ÚNICO para todas as slugs
 * Slugs permitidas: Apenas 3 slugs específicas são válidas
 */

// Link do WhatsApp FIXO para todas as páginas
export const WHATSAPP_LINK = 'https://chat.whatsapp.com/BWIFPVrFMRnLxCnzb8PZuB';

// Lista de slugs permitidas
export const VALID_SLUGS = ['cr1-a6f2', 'cr2-a6f2', 'cr3-a6f2'];

/**
 * Verifica se uma slug é válida
 * @param {string} slug - Slug para validar
 * @returns {boolean} True se a slug for válida
 */
export function isValidSlug(slug) {
  return VALID_SLUGS.includes(slug);
}

/**
 * Extrai a slug da URL atual (apenas do path)
 * @returns {string|null} Slug extraída da URL ou null
 */
export function getSlugFromUrl() {
  if (typeof window === 'undefined') return null;
  
  const path = window.location.pathname;
  const pathSlug = path.replace(/^\//, '').split('/')[0].split('?')[0].split('#')[0];
  
  // Remove 'index.html' se presente
  if (pathSlug === 'index.html' || pathSlug === '') {
    return null;
  }
  
  return pathSlug;
}


