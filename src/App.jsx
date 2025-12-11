import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Toaster } from 'sonner'
import { motion } from 'framer-motion'
import { AlertCircle, Shield, Database } from 'lucide-react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      >
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-red-500" />
              <h1 className="text-5xl font-bold text-white">
                Vicente Cartela
              </h1>
            </div>
            <p className="text-xl text-slate-300 mt-4">
              Landing Page Award-Winning para Lista de Vazamentos
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <AlertCircle className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Segurança
              </h3>
              <p className="text-slate-400">
                Monitoramento de vazamentos de dados
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <Database className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Dados
              </h3>
              <p className="text-slate-400">
                Lista completa de vazamentos
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <Shield className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Proteção
              </h3>
              <p className="text-slate-400">
                Alertas em tempo real
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <button
              onClick={() => setCount((count) => count + 1)}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
            >
              Contador: {count}
            </button>
            <p className="text-slate-400 mt-4 font-mono text-sm">
              Edite <code className="text-purple-400">src/App.jsx</code> e salve para testar o HMR
            </p>
          </motion.div>
        </div>
      </motion.div>
      <Toaster position="top-right" richColors />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App

