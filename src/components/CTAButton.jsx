import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { WHATSAPP_LINK } from '../config/campaignLinks';

/**
 * Componente de Botão CTA
 * @param {string} telegramLink - Link dinâmico do Telegram (obrigatório)
 * @param {string} variant - Variante do botão ('primary' | 'secondary')
 * @param {string} className - Classes CSS adicionais
 */
export default function CTAButton({ telegramLink, variant = 'primary', className = '' }) {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300";
  
  const variants = {
    primary: "bg-[#0088cc] hover:bg-[#0077b5] text-white px-8 py-4 text-base shadow-lg hover:shadow-xl",
    secondary: "bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 text-white px-6 py-3 text-sm"
  };

  // Fallback para telegramLink caso não seja fornecido
  const finalTelegramLink = telegramLink || 'https://t.me/vicentetipstertelegrambot?start=w48122701';

  return (
    <div className={`text-center ${className}`}>
      <motion.a
        href={finalTelegramLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variants[variant]}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Send className="w-5 h-5" />
        <span>Entrar al Grupo Ahora</span>
      </motion.a>
      
      <div className="mt-3">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-300 text-xs underline transition-colors"
        >
          ¿No tienes Telegram? Descárgalo aquí
        </a>
      </div>
    </div>
  );
}


