import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { motion } from 'framer-motion';
import { Check, TrendingUp, Users, Clock, Shield, Award, ChevronDown, Zap, Target, DollarSign, Briefcase, Home, AlertCircle, Send, Sparkles, Star } from 'lucide-react';
import FloatingParticles from './components/FloatingParticles';
import ScrollToTop from './components/ScrollToTop';
import TrustedBadge from './components/TrustedBadge';
import CTAButton from './components/CTAButton';
import ProgressionTable from './components/ProgressionTable';
import { getSlugFromUrl, isValidSlug } from './config/campaignLinks';

/**
 * Componente Principal da Landing Page
 * Detecta automaticamente a slug da URL e usa o link do WhatsApp correspondente
 */
export default function LandingPage() {
  // Validação da slug ao montar o componente
  useEffect(() => {
    const slug = getSlugFromUrl();
    
    // Se há uma slug na URL, valida se é permitida
    if (slug !== null && !isValidSlug(slug)) {
      // Redireciona para home se a slug não for válida
      window.location.href = '/';
    }
  }, []);
  const [activeTab, setActiveTab] = useState(null);
  const [memberCount, setMemberCount] = useState(12347);
  const [availableSpots, setAvailableSpots] = useState(60);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 32 });

  useEffect(() => {
    const interval = setInterval(() => {
      setMemberCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAvailableSpots(prev => {
        const newValue = prev - 4;
        return newValue <= 0 ? 3 : newValue; // Para em 3 para manter urg├¬ncia
      });
    }, 60000); // 60000ms = 1 minuto
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const progressionSteps = [
    { step: 1, value: '15.000' },
    { step: 2, value: '21.000' },
    { step: 3, value: '29.400' },
    { step: 4, value: '41.160' },
    { step: 5, value: '57.624' },
    { step: 6, value: '80.674' },
    { step: 7, value: '112.943' },
    { step: 8, value: '158.121' },
    { step: 9, value: '221.369' }
  ];

  const faqs = [
    { q: '┬┐Es realmente 100% gratis?', a: '┬íS├¡! El grupo VIP en WhatsApp es completamente gratis. No pagas nada para entrar y recibir los tips diarios.' },
    { q: '┬┐Necesito entender de apuestas?', a: '┬íNo! El m├®todo es tan simple que hasta los principiantes pueden seguirlo. Solo necesitas copiar las entradas que enviamos.' },
    { q: '┬┐Cu├ínto dinero necesito para empezar?', a: 'Puedes empezar con solo $15.000 pesos. El m├®todo fue creado justamente para quienes tienen poco capital inicial.' },
    { q: '┬┐Las apuestas no son muy arriesgadas?', a: 'Trabajamos SOLO con cuotas de 1.40 ÔÇö las m├ís seguras del mercado. Nuestra tasa de acierto es superior al 80%, muy por encima del promedio.' },
    { q: '┬┐Cu├ínto tiempo toma completar los 9 pasos?', a: 'En promedio 3 d├¡as. Algunos alumnos lo completan en 2 d├¡as, dependiendo del calendario de partidos.' },
    { q: '┬┐Funciona para principiantes?', a: '┬íS├¡! La mayor├¡a de nuestros miembros eran principiantes totales. El m├®todo es simple: recibe el tip, copia la entrada, gana.' },
    { q: '┬┐C├│mo recibo los tips diarios?', a: 'En cuanto entres al grupo VIP de WhatsApp, recibir├ís notificaciones con las mejores oportunidades del d├¡a.' }
  ];

  const benefits = [
    'Tips diarios con +80% de tasa de acierto',
    'Gesti├│n de banca profesional',
    'Cashbacks exclusivos para miembros',
    'Cuotas turbinadas en los mejores partidos',
    'Soporte directo del equipo de Vicente',
    'Comunidad activa con +12.000 miembros'
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* SE├ç├âO 1: HERO */}
      <section className="relative flex items-center justify-center overflow-hidden px-4 py-12 md:py-16">
        {/* Background com gradiente melhorado */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-emerald-900/10 via-black to-black"></div>
        
        {/* Part├¡culas flutuantes */}
        <FloatingParticles />
        
        {/* Grid pattern animado */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.2) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          animation: 'grid-flow 20s linear infinite'
        }}></div>

        {/* Efeito de brilho verde */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        ></motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Contador de Vagas */}
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 bg-zinc-900/60 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2.5 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                <span className="text-orange-400 text-xs font-semibold tracking-wide">Cupos Limitados</span>
              </div>
              <div className="h-4 w-px bg-orange-500/30"></div>
              <div className="flex items-baseline gap-1.5">
                <motion.span 
                  className="text-xl font-bold text-white"
                  key={availableSpots}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {availableSpots}
                </motion.span>
                <span className="text-xs text-gray-500">restantes</span>
              </div>
            </div>
          </motion.div>

          {/* Headline Principal */}
          <div className="text-center mb-10">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              ┬┐Listo Para<br/>
              Transformar{' '}
              <motion.span 
                className="text-green-500 inline-block"
                animate={{ 
                  textShadow: ['0 0 20px rgba(34, 197, 94, 0.5)', '0 0 40px rgba(34, 197, 94, 0.8)', '0 0 20px rgba(34, 197, 94, 0.5)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                $15.000
              </motion.span>{' '}
              en<br/>
              <motion.span 
                className="text-green-500 inline-block"
                animate={{ 
                  textShadow: ['0 0 20px rgba(34, 197, 94, 0.5)', '0 0 40px rgba(34, 197, 94, 0.8)', '0 0 20px rgba(34, 197, 94, 0.5)']
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                $300.000
              </motion.span>
              ?
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              ├Ünete a +12.000 miembros que ya est├ín ganando con el m├®todo
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-10"
            >
              <CTAButton />
            </motion.div>

            {/* Tabela de Progress├úo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <ProgressionTable variant="hero" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SE├ç├âO 2: M├ëTODO DOS 9 PASSOS */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-zinc-950 to-black overflow-hidden">
        {/* Efeito de fundo */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[150px]"></div>
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px]"></div>
            </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <motion.div 
              className="inline-block bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-full px-8 py-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-green-400 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                EL M├ëTODO
              </span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Progresi├│n All-In con{' '}
              <span className="text-green-500 inline-block">Cuota 1.40</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              El camino m├ís seguro de $15.000 a $300.000
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-center mb-10 max-w-4xl mx-auto">
            {[
              { number: '1.40', title: 'Cuotas Seguras', delay: 0 },
              { number: '3 dias', title: 'Tiempo Promedio', delay: 0.1 },
              { number: '80%+', title: 'Tasa de Acierto', delay: 0.2 }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-green-500/10 to-black backdrop-blur-sm border border-green-500/20 rounded-xl p-4 hover:border-green-500/40 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + item.delay }}
              >
                <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">
                  {item.number}
                </div>
                <div className="text-gray-300 font-semibold text-sm">{item.title}</div>
              </motion.div>
              ))}
          </div>

          {/* Trusted Badge */}
          <div className="max-w-4xl mx-auto mb-8">
            <TrustedBadge />
          </div>

          {/* CTA */}
          <CTAButton />
        </div>
      </section>

      {/* SE├ç├âO 3: VICENTE */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-black to-zinc-950 overflow-hidden">
        {/* Efeito de fundo */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            className="bg-gradient-to-br from-zinc-900/90 to-black backdrop-blur-sm border-2 border-green-500/30 rounded-3xl p-8 md:p-12 shadow-2xl shadow-green-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <motion.div 
                className="relative w-40 h-40 rounded-full flex-shrink-0 overflow-hidden border-4 border-green-500 shadow-lg shadow-green-500/50"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: 'spring' }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                {/* Efeito de brilho rotativo */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-green-500/50 via-transparent to-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                ></motion.div>
                <img 
                  src="/images/vicente.jpg" 
                  alt="Vicente - Experto Chileno en Apalancamiento"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center"><svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div>';
                  }}
                />
              </motion.div>
              <motion.div className="flex-1 text-center md:text-left">
                <motion.h3 
                  className="text-4xl font-bold mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Vicente
                </motion.h3>
                <motion.p 
                  className="text-green-500 text-xl mb-4 font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Experto Chileno en Apalancamiento
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-4 justify-center md:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {[
                    { number: '+30.000', label: 'Seguidores' },
                    { number: '8 a├▒os', label: 'Experiencia' }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-xl px-6 py-3"
                      whileHover={{ 
                        scale: 1.05,
                        borderColor: 'rgba(34, 197, 94, 0.6)',
                        boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)'
                      }}
                    >
                      <span className="text-green-400 font-bold text-xl">{stat.number}</span>
                      <span className="text-gray-400 text-sm ml-2">{stat.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* CTA */}
            <div className="mt-10">
              <CTAButton variant="secondary" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SE├ç├âO 4: CASE DE SUCESSO HERO */}
      <section className="relative py-16 md:py-24 px-4 bg-zinc-950 overflow-hidden">
        {/* Efeito de fundo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[150px]"></div>
            </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <motion.div 
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold px-8 py-3 rounded-full mb-6 shadow-lg shadow-green-500/50"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-current" />
                CASO DE ├ëXITO DESTACADO
              </span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              De $15.000 a{' '}
              <motion.span 
                className="text-green-500"
                animate={{ 
                  textShadow: ['0 0 20px rgba(34, 197, 94, 0.5)', '0 0 40px rgba(34, 197, 94, 0.8)', '0 0 20px rgba(34, 197, 94, 0.5)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                $730.000
              </motion.span>
            </motion.h2>
          </div>

          <motion.div 
            className="relative bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-black backdrop-blur-sm border-4 border-green-500 rounded-3xl p-8 md:p-12 shadow-2xl shadow-green-500/30 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Efeito de brilho de fundo */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-50"></div>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8 relative z-10">
              <div>
                <motion.div
                  className="flex items-center gap-4 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-green-500 shadow-lg shadow-green-500/30 flex-shrink-0">
                    <img 
                      src="/images/pedro.png" 
                      alt="Pedro"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white text-2xl font-bold">P</div>';
                      }}
                    />
                  </div>
                  <h3 className="text-3xl font-bold">Pedro, 20 a├▒os</h3>
                </motion.div>
                <p className="text-xl text-gray-300 mb-4">
                  Principiante total. Multiplic├│ su banca en <span className="text-green-500 font-bold">48x</span> en solo <span className="text-green-500 font-bold">1 mes</span>.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Empez├│ con solo $15.000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Sigui├│ exactamente el m├®todo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Alcanz├│ $730.000 en 30 d├¡as</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/50 rounded-2xl p-4 border border-green-500/30">
                <div className="aspect-video bg-gradient-to-br from-green-500/20 to-black rounded-lg overflow-hidden border border-green-500/20 mb-3">
                  <img 
                    src="/images/depoimento.jpg" 
                    alt="Captura de ganancia de Pedro"
                    className="w-full h-full object-cover object-top-left"
                    style={{ objectPosition: 'left top' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-green-500/20 to-black flex items-center justify-center"><svg class="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg></div>';
                    }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-xs text-gray-400">Captura de ganancia verificada</p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 rounded-2xl p-5 border border-green-500/30">
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Trabajaba 12 horas al d├¡a y apenas me alcanzaba para las cuentas. 
                Prob├® el m├®todo con 15 lucas y en 1 mes llegu├® a 730k! 
                No lo pod├¡a creer ­ƒÿà
                <br/><br/>
                Cambi├│ todo, ahora tengo tiempo pa mi familia y cero estr├®s por plata.
              </p>
              <div className="text-right">
                <div className="font-bold text-green-400 text-sm">ÔÇö Pedro</div>
                <div className="text-xs text-gray-500">Hace 2 meses</div>
              </div>
            </div>

            <div className="mt-8">
              <CTAButton />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SE├ç├âO 5: GALERIA DE PROVAS - CARROSSEL VERTICAL */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-zinc-950 to-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Cientos de <span className="text-green-500">Ganancias Verificadas</span>
            </h2>
            <p className="text-xl text-gray-400">Resultados reales de miembros reales</p>
          </div>

          <div className="relative h-[600px] overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-950 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>

            {/* Carrossel 1 */}
            <div className="absolute left-0 w-1/3 h-full">
              <div className="animate-scroll-vertical space-y-4">
                {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((i, idx) => (
                  <div key={idx} className="bg-zinc-900 border border-green-500/30 rounded-xl overflow-hidden mx-2 hover:border-green-500 transition-all">
                    <img 
                      src={`/images/slide${i}.jpg`} 
                      alt={`Prova social ${i}`}
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect fill="%23111" width="400" height="400"/><text x="50%" y="50%" text-anchor="middle" fill="%2322c55e" font-size="24">Slide ' + i + '</text></svg>';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Carrossel 2 */}
            <div className="absolute left-1/3 w-1/3 h-full">
              <div className="animate-scroll-vertical-reverse space-y-4">
                {[2, 3, 4, 5, 1, 2, 3, 4, 5, 1].map((i, idx) => (
                  <div key={idx} className="bg-zinc-900 border border-green-500/30 rounded-xl overflow-hidden mx-2 hover:border-green-500 transition-all">
                    <img 
                      src={`/images/slide${i}.jpg`} 
                      alt={`Prova social ${i}`}
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect fill="%23111" width="400" height="400"/><text x="50%" y="50%" text-anchor="middle" fill="%2322c55e" font-size="24">Slide ' + i + '</text></svg>';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Carrossel 3 */}
            <div className="absolute left-2/3 w-1/3 h-full">
              <div className="animate-scroll-vertical space-y-4">
                {[3, 4, 5, 1, 2, 3, 4, 5, 1, 2].map((i, idx) => (
                  <div key={idx} className="bg-zinc-900 border border-green-500/30 rounded-xl overflow-hidden mx-2 hover:border-green-500 transition-all">
                    <img 
                      src={`/images/slide${i}.jpg`} 
                      alt={`Prova social ${i}`}
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect fill="%23111" width="400" height="400"/><text x="50%" y="50%" text-anchor="middle" fill="%2322c55e" font-size="24">Slide ' + i + '</text></svg>';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <CTAButton variant="secondary" />
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-vertical {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }

          @keyframes scroll-vertical-reverse {
            0% {
              transform: translateY(-50%);
            }
            100% {
              transform: translateY(0);
            }
          }

          .animate-scroll-vertical {
            animation: scroll-vertical 30s linear infinite;
          }

          .animate-scroll-vertical-reverse {
            animation: scroll-vertical-reverse 30s linear infinite;
          }
        `}</style>
      </section>

      {/* SE├ç├âO 6: FAQ */}
      <section className="relative py-16 md:py-24 px-4 bg-zinc-950 overflow-hidden">
        {/* Efeito de fundo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-green-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Preguntas <span className="text-green-500">Frecuentes</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Resuelve todas tus dudas
            </motion.p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i} 
                className="bg-gradient-to-br from-zinc-900/80 to-black backdrop-blur-sm border border-green-500/30 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ borderColor: 'rgba(34, 197, 94, 0.5)' }}
              >
                <motion.button
                  onClick={() => setActiveTab(activeTab === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-green-500/5 transition-all"
                  whileHover={{ backgroundColor: 'rgba(34, 197, 94, 0.05)' }}
                >
                  <span className="font-bold text-lg pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: activeTab === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-green-500 flex-shrink-0" />
                  </motion.div>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: activeTab === i ? 'auto' : 0,
                    opacity: activeTab === i ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-5 border-t border-green-500/30 bg-green-500/5">
                    <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-12 md:py-16 px-4 bg-gradient-to-b from-black to-zinc-950 border-t border-green-500/20 overflow-hidden">
        {/* Efeito de fundo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo ou nome */}
            <motion.div 
              className="mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-bold mb-2">
                <span className="text-green-500">M├®todo</span> Vicente
              </h3>
              <p className="text-gray-500 text-sm">Transformando vidas desde 2024</p>
            </motion.div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-8 mb-6">
              {['T├®rminos de Uso', 'Pol├¡tica de Privacidad', 'Contacto'].map((link, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-green-500 transition-colors font-medium relative group"
                  whileHover={{ y: -2 }}
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="space-y-2 mb-5">
              <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Este sitio no forma parte de WhatsApp ni est├í avalado por WhatsApp.
            </p>
              <p className="text-xs text-gray-600">
              ┬® 2025 M├®todo Vicente. Todos los derechos reservados.
            </p>
          </div>

            {/* Social proof badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3"
              animate={{ 
                boxShadow: ['0 0 0 rgba(34, 197, 94, 0.2)', '0 0 20px rgba(34, 197, 94, 0.4)', '0 0 0 rgba(34, 197, 94, 0.2)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Shield className="w-4 h-4 text-green-500" />
              <span className="text-green-400 text-sm font-semibold">Comunidad Verificada</span>
            </motion.div>
          </motion.div>
        </div>
      </footer>

      {/* Bot├úo Scroll to Top */}
      <ScrollToTop />

      <Analytics />
      <SpeedInsights />

      {/* Estilos Customizados */}
      <style jsx global>{`
        @keyframes grid-flow {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 40px;
          }
        }

        /* Scroll suave */
        html {
          scroll-behavior: smooth;
        }

        /* Melhorias de performance para anima├º├Áes */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Efeito de gradiente animado para textos */
        .gradient-text {
          background: linear-gradient(90deg, #22c55e, #10b981, #22c55e);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Hover eleva├º├úo suave */
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(34, 197, 94, 0.3);
        }

        /* Efeito glass morphism */
        .glass {
          background: rgba(24, 24, 27, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        /* Scrollbar customizada */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #000;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #22c55e, #10b981);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #16a34a, #059669);
        }
      `}</style>
    </div>
  );
}
