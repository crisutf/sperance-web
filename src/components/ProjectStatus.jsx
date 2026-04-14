import { motion } from 'framer-motion'
import { Activity, Shield, Server, Cpu, Globe, Hash } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const ProjectStatus = () => {
  const [statusData, setStatusData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { t } = useLanguage()

  useEffect(() => {
    fetch('https://cdn.crisu.qzz.io/sperance/API/status.json')
      .then(res => {
        if (!res.ok) throw new Error('Error de conexión')
        return res.json()
      })
      .then(data => {
        setStatusData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Error loading status:", err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section className="py-32 bg-[#050506] flex items-center justify-center">
        <div className="text-accent animate-pulse font-black text-2xl uppercase tracking-widest">{t('status.loading')}</div>
      </section>
    )
  }

  if (error || !statusData) {
    return (
      <section className="py-32 bg-[#050506] flex items-center justify-center px-6">
        <div className="bento-card max-w-lg w-full p-12 text-center space-y-6 border-red-500/20">
          <Activity className="w-12 h-12 text-red-500 mx-auto" />
          <h2 className="text-3xl font-black text-white">{t('status.error')}</h2>
          <p className="text-white/40 font-bold">{t('status.errorDesc')}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="status" className="py-32 bg-[#050506] relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-1.5 mb-6 text-xs font-black tracking-widest uppercase text-accent bg-accent/10 border border-accent/20 rounded-full"
            >
              <Activity className="w-4 h-4" />
              <span>{t('status.badge')}</span>
            </motion.div>
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black mb-8 leading-[1.1]"
            >
              {t('status.title')} <span className="text-gradient">{t('status.titleAccent')}</span>
            </motion.h2>
            <div className="flex items-center gap-3 text-white/30 font-bold uppercase tracking-widest text-sm">
              <Hash className="w-4 h-4" />
              {t('status.version')}: <span className="text-accent">{statusData?.version || "N/A"}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statusData?.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bento-card group flex items-center justify-between p-8"
            >
              <div className="flex items-center gap-6">
                <div className={`p-4 rounded-2xl border transition-all duration-500 ${
                  service.status === 'UP' 
                    ? 'bg-green-500/10 border-green-500/20 text-green-500' 
                    : 'bg-red-500/10 border-red-500/20 text-red-500'
                }`}>
                  {service.name === 'Web' ? <Globe className="w-6 h-6" /> : 
                   service.name === 'CDN' ? <Server className="w-6 h-6" /> :
                   service.name === 'Launcher' ? <Cpu className="w-6 h-6" /> :
                   <Shield className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="text-xl font-black text-white group-hover:text-accent transition-colors">{service.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/30">{t('status.service')}</p>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-1">
                <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                  service.status === 'UP' 
                    ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                    : 'bg-red-500/10 border-red-500/20 text-red-400'
                }`}>
                  {service.status}
                </span>
                <div className={`w-2 h-2 rounded-full animate-pulse ${
                  service.status === 'UP' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectStatus
