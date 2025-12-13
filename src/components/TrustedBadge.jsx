import { motion } from 'framer-motion';
import { Star, Users, TrendingUp } from 'lucide-react';

export default function TrustedBadge() {
  const stats = [
    { icon: Users, number: '12,347', label: 'Miembros Activos', color: 'text-blue-400' },
    { icon: Star, number: '4.9/5', label: 'Calificación', color: 'text-yellow-400' },
    { icon: TrendingUp, number: '80%+', label: 'Tasa de Éxito', color: 'text-green-400' }
  ];

  return (
    <motion.div 
      className="relative bg-gradient-to-br from-zinc-900/90 to-black backdrop-blur-sm border border-green-500/30 rounded-xl p-4 shadow-lg shadow-green-500/10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-3">
        <motion.p 
          className="text-gray-400 text-xs uppercase tracking-wider font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Confiado por Miles
        </motion.p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
          >
            <stat.icon className={`w-5 h-5 mx-auto mb-1.5 ${stat.color}`} />
            <motion.div 
              className={`text-lg font-bold mb-0.5 ${stat.color}`}
              animate={{ 
                textShadow: ['0 0 10px currentColor', '0 0 20px currentColor', '0 0 10px currentColor']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {stat.number}
            </motion.div>
            <div className="text-xs text-gray-500 font-medium leading-tight">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Selo verificado */}
      <motion.div 
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <div className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1.5">
          <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          <span className="text-green-400 text-xs font-semibold">Comunidad Verificada</span>
        </div>
      </motion.div>
    </motion.div>
  );
}


