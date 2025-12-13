import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function CTAButton({ variant = 'primary', className = '' }) {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300";
  
  const variants = {
    primary: "bg-[#0088cc] hover:bg-[#0077b5] text-white px-8 py-4 text-base shadow-lg hover:shadow-xl",
    secondary: "bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 text-white px-6 py-3 text-sm"
  };

  return (
    <div className={`text-center ${className}`}>
      <motion.a
        href="https://t.me/seu_grupo_aqui"
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
          href="https://telegram.org/dl" 
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


