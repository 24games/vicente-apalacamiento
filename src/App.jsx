import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Check, TrendingUp, Users, Clock, Shield, Award, ChevronDown, Zap, Target, DollarSign, Briefcase, Home, AlertCircle, Send } from 'lucide-react';

export default function LandingPage() {
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
        return newValue <= 0 ? 3 : newValue; // Para em 3 para manter urgência
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
    { q: '¿Es realmente 100% gratis?', a: '¡Sí! El grupo VIP en Telegram es completamente gratis. No pagas nada para entrar y recibir los tips diarios.' },
    { q: '¿Necesito entender de apuestas?', a: '¡No! El método es tan simple que hasta los principiantes pueden seguirlo. Solo necesitas copiar las entradas que enviamos.' },
    { q: '¿Cuánto dinero necesito para empezar?', a: 'Puedes empezar con solo $15.000 pesos. El método fue creado justamente para quienes tienen poco capital inicial.' },
    { q: '¿Las apuestas no son muy arriesgadas?', a: 'Trabajamos SOLO con cuotas de 1.40 — las más seguras del mercado. Nuestra tasa de acierto es superior al 80%, muy por encima del promedio.' },
    { q: '¿Cuánto tiempo toma completar los 9 pasos?', a: 'En promedio 3 días. Algunos alumnos lo completan en 2 días, dependiendo del calendario de partidos.' },
    { q: '¿Funciona para principiantes?', a: '¡Sí! La mayoría de nuestros miembros eran principiantes totales. El método es simple: recibe el tip, copia la entrada, gana.' },
    { q: '¿Cómo recibo los tips diarios?', a: 'En cuanto entres al grupo VIP de Telegram, recibirás notificaciones con las mejores oportunidades del día.' }
  ];

  const benefits = [
    'Tips diarios con +80% de tasa de acierto',
    'Gestión de banca profesional',
    'Cashbacks exclusivos para miembros',
    'Cuotas turbinadas en los mejores partidos',
    'Soporte directo del equipo de Vicente',
    'Comunidad activa con +12.000 miembros'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEÇÃO 1: HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-black"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Contador de Vagas */}
          <div className="text-center mb-8">
            <div className="inline-flex flex-col items-center gap-2 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 border-2 border-red-500/50 rounded-xl px-6 py-3 animate-pulse">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500 animate-pulse" />
                <span className="text-red-500 text-xs font-bold uppercase tracking-wider">Cupos Limitados</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-white">{availableSpots}</span>
                <span className="text-sm text-gray-400">cupos restantes</span>
              </div>
            </div>
          </div>

          {/* Badge Online */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">{memberCount.toLocaleString()} personas online ahora</span>
            </div>
          </div>

          {/* Headline Principal */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Transforma <span className="text-green-500">$15.000</span> en<br/>
              <span className="text-green-500">$300.000</span> en Solo <span className="text-green-500">9 Pasos</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Únete al grupo VIP <span className="text-green-500 font-bold">GRATIS</span> y recibe tips diarios con <span className="text-green-500 font-bold">+80% de acierto</span>
            </p>

            <a href="https://t.me/seu_grupo_aqui" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#0088cc] hover:bg-[#0077b5] text-white font-bold text-lg px-10 py-5 rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-blue-500/50 mb-4 w-full max-w-md mx-auto">
              <Send className="w-6 h-6" />
              <span>ENTRAR AL GRUPO AHORA</span>
            </a>

            <div className="text-center mb-12">
              <a href="https://telegram.org/dl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-sm underline transition-colors">
                ¿No tienes Telegram? Haz clic aquí.
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-400">+12.000 miembros</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-400">80% tasa de éxito</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-400">Completa en 3 días</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-400">100% gratis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: MÉTODO DOS 9 PASSOS */}
      <section className="py-20 px-4 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-6 py-2 mb-4">
              <span className="text-green-400 font-bold">EL MÉTODO</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Progresión All-In con <span className="text-green-500">Cuota 1.40</span>
            </h2>
            <p className="text-xl text-gray-400">El camino más seguro de $15.000 a $300.000</p>
          </div>

          <div className="bg-black border-2 border-green-500/30 rounded-3xl p-6 md:p-10 mb-8">
            <div className="grid grid-cols-3 md:grid-cols-9 gap-3">
              {progressionSteps.map((step, i) => (
                <div key={i} className="text-center group">
                  <div className="bg-gradient-to-br from-green-500/20 to-green-900/20 border-2 border-green-500/50 rounded-xl p-3 mb-2 hover:scale-110 transition-all cursor-pointer group-hover:shadow-lg group-hover:shadow-green-500/50">
                    <div className="text-xs text-green-400 font-bold mb-1">P{step.step}</div>
                    <div className="text-xs md:text-sm font-bold text-white">${step.value}</div>
                  </div>
                  {i < progressionSteps.length - 1 && (
                    <div className="hidden md:block text-green-500 text-xl">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gradient-to-br from-green-500/10 to-black border border-green-500/30 rounded-2xl p-6">
              <div className="text-5xl font-bold text-green-500 mb-2">1.40</div>
              <div className="text-gray-400">Cuotas Seguras</div>
              <div className="text-sm text-green-500 mt-2">Las más confiables del mercado</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-black border border-green-500/30 rounded-2xl p-6">
              <div className="text-5xl font-bold text-green-500 mb-2">3 dias</div>
              <div className="text-gray-400">Tiempo Promedio</div>
              <div className="text-sm text-green-500 mt-2">Completa los 9 pasos rápidamente</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-black border border-green-500/30 rounded-2xl p-6">
              <div className="text-5xl font-bold text-green-500 mb-2">80%+</div>
              <div className="text-gray-400">Tasa de Acierto</div>
              <div className="text-sm text-green-500 mt-2">Comprobado por miles</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: VICENTE */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-green-500/30 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="w-40 h-40 rounded-full flex-shrink-0 overflow-hidden border-4 border-green-500 shadow-lg shadow-green-500/50">
                <img 
                  src="/images/vicente.jpg" 
                  alt="Vicente - Experto Chileno en Apalancamiento"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center"><svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div>';
                  }}
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-4xl font-bold mb-2">Vicente</h3>
                <p className="text-green-500 text-xl mb-4">Experto Chileno en Apalancamiento</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2">
                    <span className="text-green-400 font-bold text-lg">+30.000</span>
                    <span className="text-gray-400 text-sm ml-2">Seguidores</span>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2">
                    <span className="text-green-400 font-bold text-lg">8 años</span>
                    <span className="text-gray-400 text-sm ml-2">Experiencia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: CASE DE SUCESSO HERO */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-500 text-black font-bold px-6 py-2 rounded-full mb-4">
              🏆 CASO DE ÉXITO DESTACADO
            </div>
            <h2 className="text-4xl md:text-6xl font-bold">
              De $15.000 a <span className="text-green-500">$730.000</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-black border-4 border-green-500 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">Pedro, 28 años</h3>
                <p className="text-xl text-gray-300 mb-4">
                  Principiante total. Multiplicó su banca en <span className="text-green-500 font-bold">48x</span> en solo <span className="text-green-500 font-bold">1 mes</span>.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Empezó con solo $15.000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Siguió exactamente el método</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Alcanzó $730.000 en 30 días</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/50 rounded-2xl p-6 border border-green-500/30">
                <div className="aspect-video bg-gradient-to-br from-green-500/20 to-black rounded-lg mb-4 flex items-center justify-center">
                  <TrendingUp className="w-16 h-16 text-green-500" />
                </div>
                <p className="text-sm text-gray-400 mb-2">Captura de ganancia verificada</p>
              </div>
            </div>

            <div className="bg-black/50 rounded-2xl p-6 border border-green-500/30">
              <p className="text-gray-300 text-lg italic mb-4">
                "Trabajaba 12 horas al día y apenas pagaba las cuentas. En 1 mes transformé $15.000 en $730.000. Hoy tengo tiempo para mi familia y no tengo que preocuparme por plata. Cambió mi vida completamente."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full"></div>
                <div>
                  <div className="font-bold">Pedro S.</div>
                  <div className="text-sm text-gray-500">Miembro hace 2 meses</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <a href="#cta" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black font-bold text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105">
                <span>YO TAMBIÉN QUIERO ESTOS RESULTADOS</span>
                <TrendingUp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: GALERIA DE PROVAS - CARROSSEL VERTICAL */}
      <section className="py-20 px-4 bg-gradient-to-b from-zinc-950 to-black overflow-hidden">
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

      {/* SEÇÃO 6: FAQ */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Preguntas <span className="text-green-500">Frecuentes</span>
            </h2>
            <p className="text-xl text-gray-400">Resuelve todas tus dudas</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-black border border-green-500/30 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setActiveTab(activeTab === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-green-500/5 transition-all"
                >
                  <span className="font-bold text-lg pr-4">{faq.q}</span>
                  <ChevronDown className={`w-6 h-6 text-green-500 flex-shrink-0 transition-transform ${activeTab === i ? 'rotate-180' : ''}`} />
                </button>
                {activeTab === i && (
                  <div className="px-6 py-5 border-t border-green-500/30 bg-green-500/5">
                    <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 7: CTA FINAL */}
      <section id="cta" className="py-20 px-4 bg-gradient-to-b from-black to-green-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-zinc-900 to-black border-4 border-green-500 rounded-3xl p-8 md:p-12">
            <div className="inline-block bg-red-500 text-white font-bold px-6 py-3 rounded-full mb-6 animate-pulse">
              ⚠️ ÚLTIMOS CUPOS DISPONIBLES
            </div>

            <div className="mb-6">
              <div className="text-sm text-gray-400 mb-2">Oferta expira en:</div>
              <div className="flex justify-center gap-4">
                <div className="bg-black border border-green-500 rounded-lg px-4 py-3">
                  <div className="text-3xl font-bold text-green-500">{timeLeft.hours}</div>
                  <div className="text-xs text-gray-400">Horas</div>
                </div>
                <div className="bg-black border border-green-500 rounded-lg px-4 py-3">
                  <div className="text-3xl font-bold text-green-500">{timeLeft.minutes}</div>
                  <div className="text-xs text-gray-400">Min</div>
                </div>
                <div className="bg-black border border-green-500 rounded-lg px-4 py-3">
                  <div className="text-3xl font-bold text-green-500">{timeLeft.seconds}</div>
                  <div className="text-xs text-gray-400">Seg</div>
                </div>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              ¿Listo Para Transformar<br/>
              <span className="text-green-500">$15.000 en $300.000?</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              Únete a +12.000 miembros que ya están ganando con el método
            </p>

            <a href="https://t.me/seu_grupo_aqui" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#0088cc] hover:bg-[#0077b5] text-white font-bold text-2xl px-14 py-6 rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-blue-500/50 mb-4">
              <Send className="w-8 h-8" />
              <span>ENTRAR AL GRUPO AHORA</span>
            </a>

            <div className="text-center mb-4">
              <a href="https://telegram.org/dl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-sm underline transition-colors">
                ¿No tienes Telegram? Haz clic aquí.
              </a>
            </div>

            <div className="text-sm text-gray-400 flex items-center justify-center gap-2 mb-4">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Sin Compromiso • Sal Cuando Quieras</span>
            </div>

            <p className="text-xs text-gray-500">
              +347 personas entraron hoy • Cupos limitados por temas de calidad
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 bg-black border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center gap-6 mb-6">
              <a href="#" className="text-gray-500 hover:text-green-500 transition-colors">Términos de Uso</a>
              <a href="#" className="text-gray-500 hover:text-green-500 transition-colors">Política de Privacidad</a>
              <a href="#" className="text-gray-500 hover:text-green-500 transition-colors">Contacto</a>
            </div>
            <p className="text-sm text-gray-500 mb-2">
              Este sitio no forma parte de Telegram ni está avalado por Telegram.
            </p>
            <p className="text-sm text-gray-600">
              © 2025 Método Vicente. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      <Analytics />
      <SpeedInsights />
    </div>
  );
}
