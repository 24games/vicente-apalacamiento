import { motion } from 'framer-motion';
import { TrendingUp, Target } from 'lucide-react';

export default function ProgressionTable({ variant = 'default' }) {
  const steps = [
    { apuesta: '01', valor: '15.000', cuota: '1.40', devolver: '21.000' },
    { apuesta: '02', valor: '21.000', cuota: '1.40', devolver: '29.400' },
    { apuesta: '03', valor: '29.400', cuota: '1.40', devolver: '41.160' },
    { apuesta: '04', valor: '41.160', cuota: '1.40', devolver: '57.624' },
    { apuesta: '05', valor: '57.624', cuota: '1.40', devolver: '80.673' },
    { apuesta: '06', valor: '80.673', cuota: '1.40', devolver: '112.943' },
    { apuesta: '07', valor: '112.943', cuota: '1.40', devolver: '158.120' },
    { apuesta: '08', valor: '158.120', cuota: '1.40', devolver: '221.368' },
    { apuesta: '09', valor: '221.368', cuota: '1.40', devolver: '309.915' }
  ];

  const isHero = variant === 'hero';

  return (
    <div className={`w-full ${isHero ? 'max-w-5xl' : 'max-w-5xl'} mx-auto`}>
      {/* Header */}
      <motion.div 
        className={`text-center ${isHero ? 'mb-4' : 'mb-8'}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {isHero ? (
          <>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/40 rounded-full px-6 py-2 mb-3 shadow-lg shadow-green-500/10">
              <Target className="w-4 h-4 text-green-500" />
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                Progresión Completa
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-green-500">$15.000</span> →{' '}
              <span className="text-green-500">$309.915</span>
            </h3>
            <p className="text-gray-400 text-sm">
              9 pasos • Cuota <span className="text-green-400 font-semibold">1.40</span>
            </p>
          </>
        ) : (
          <>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-2 mb-4">
              <Target className="w-4 h-4 text-green-500" />
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                Apalancamiento
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-green-500">15.000 CLP</span> hasta{' '}
              <span className="text-green-500">300.000+ CLP</span>
            </h3>
            <p className="text-gray-400 text-sm">Progresión paso a paso con cuota 1.40</p>
          </>
        )}
      </motion.div>

      {/* Tabla Desktop */}
      <div className="hidden md:block">
        <motion.div 
          className={`bg-gradient-to-br from-zinc-900/80 to-black backdrop-blur-sm rounded-2xl overflow-hidden
            ${isHero ? 'border-2 border-green-500/30 shadow-2xl shadow-green-500/20' : 'border border-green-500/20'}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Table Header */}
          <div className={`grid grid-cols-4 gap-4 bg-green-500/10 border-b border-green-500/20 ${isHero ? 'p-2.5' : 'p-4'}`}>
            <div className={`text-green-400 font-bold uppercase tracking-wider ${isHero ? 'text-xs' : 'text-sm'}`}>Apuesta</div>
            <div className={`text-green-400 font-bold uppercase tracking-wider ${isHero ? 'text-xs' : 'text-sm'}`}>Valor</div>
            <div className={`text-green-400 font-bold uppercase tracking-wider text-center ${isHero ? 'text-xs' : 'text-sm'}`}>Cuota</div>
            <div className={`text-green-400 font-bold uppercase tracking-wider text-right ${isHero ? 'text-xs' : 'text-sm'}`}>Devolver</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-green-500/10">
            {steps.map((step, index) => (
              <motion.div
                key={step.apuesta}
                className={`grid grid-cols-4 gap-4 hover:bg-green-500/5 transition-all group cursor-pointer ${isHero ? 'p-2.5' : 'p-4'}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + (index * 0.05) }}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-2">
                  <div className={`rounded-full flex items-center justify-center font-bold
                    ${isHero ? 'w-7 h-7 text-xs' : 'w-10 h-10 text-sm'}
                    ${index === 0 ? 'bg-green-500 text-black' : 
                      index === steps.length - 1 ? 'bg-green-500 text-black' : 
                      'bg-zinc-800 text-white'}`}>
                    {step.apuesta}
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className={`font-semibold ${index === 0 ? 'text-green-400' : 'text-white'} ${isHero ? 'text-sm' : 'text-base'}`}>
                    ${step.valor}
                  </span>
                </div>
                
                <div className="flex items-center justify-center">
                  <span className={`text-gray-400 font-medium bg-zinc-800/50 rounded-full ${isHero ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'}`}>
                    {step.cuota}
                  </span>
                </div>
                
                <div className="flex items-center justify-end gap-2">
                  <span className={`font-bold ${index === steps.length - 1 ? 'text-green-400' : 'text-white'} ${isHero ? 'text-sm' : 'text-lg'}`}>
                    ${step.devolver}
                  </span>
                  {index === steps.length - 1 && (
                    <TrendingUp className={`text-green-500 ${isHero ? 'w-4 h-4' : 'w-5 h-5'} animate-pulse`} />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tabla Mobile */}
      <div className={`md:hidden ${isHero ? 'space-y-1.5' : 'space-y-3'}`}>
        {steps.map((step, index) => (
          <motion.div
            key={step.apuesta}
            className={`bg-gradient-to-br from-zinc-900/80 to-black backdrop-blur-sm border border-green-500/20 rounded-lg ${isHero ? 'p-2' : 'p-4'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className={`flex items-center justify-between ${isHero ? 'gap-2' : 'gap-4'}`}>
              {/* Número */}
              <div className={`rounded-full flex items-center justify-center font-bold flex-shrink-0
                ${isHero ? 'w-6 h-6 text-xs' : 'w-10 h-10 text-sm'}
                ${index === 0 ? 'bg-green-500 text-black' : 
                  index === steps.length - 1 ? 'bg-green-500 text-black' : 
                  'bg-zinc-800 text-white'}`}>
                {step.apuesta}
              </div>
              
              {/* Valor */}
              <div className="flex-1 min-w-0">
                <div className={`font-semibold truncate ${index === 0 ? 'text-green-400' : 'text-white'} ${isHero ? 'text-xs' : 'text-sm'}`}>
                  ${step.valor}
                </div>
              </div>

              {/* Seta */}
              <div className="text-green-500 flex-shrink-0">
                <svg className={`${isHero ? 'w-3 h-3' : 'w-4 h-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              
              {/* Devolver */}
              <div className={`flex items-center gap-1 flex-shrink-0 ${index === steps.length - 1 ? 'text-green-400' : 'text-white'}`}>
                <span className={`font-bold ${isHero ? 'text-xs' : 'text-sm'}`}>
                  ${step.devolver}
                </span>
                {index === steps.length - 1 && (
                  <TrendingUp className={`text-green-500 ${isHero ? 'w-3 h-3' : 'w-4 h-4'}`} />
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Info */}
      {!isHero && (
        <motion.div 
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-green-500/5 border border-green-500/20 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-green-400 text-sm font-medium">
              Multiplica tu inversión inicial por 20x en solo 9 pasos
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}

