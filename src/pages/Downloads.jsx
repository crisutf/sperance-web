import { motion } from 'framer-motion'
import { Download, Rocket, Shield, Server, ArrowRight, AlertTriangle, Lock } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const IconMap = {
  Shield: Shield,
  Server: Server,
  Download: Download,
  Rocket: Rocket
}

const Downloads = () => {
  const { t } = useLanguage()
  const [downloadData, setDownloadData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://cdn.crisu.qzz.io/sperance/API/downloads.json')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar los datos')
        return res.json()
      })
      .then(data => {
        setDownloadData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Error loading downloads:", err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="pt-48 pb-40 bg-[#050506] min-h-screen flex items-center justify-center">
        <div className="text-accent animate-pulse font-black text-2xl uppercase tracking-widest">{t('downloads.loading')}</div>
      </div>
    )
  }

  if (error || !downloadData) {
    return (
      <div className="pt-48 pb-40 bg-[#050506] min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bento-card max-w-lg w-full p-12 text-center space-y-8 border-red-500/20 shadow-2xl shadow-red-500/10"
        >
          <div className="mx-auto p-6 bg-red-500/10 rounded-full w-fit border border-red-500/20">
            <AlertTriangle className="w-12 h-12 text-red-500" />
          </div>
          <h2 className="text-4xl font-black text-white">{t('downloads.error')}</h2>
          <p className="text-white/40 font-bold text-lg leading-relaxed">
            {t('downloads.errorDesc')}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest rounded-2xl border border-white/10 transition-all"
          >
            {t('downloads.retry')}
          </button>
        </motion.div>
      </div>
    )
  }

  if (downloadData?.blocked) {
    return (
      <div className="pt-48 pb-40 bg-[#050506] min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bento-card max-w-lg w-full p-12 text-center space-y-8 border-red-500/20 shadow-2xl shadow-red-500/10"
        >
          <div className="mx-auto p-6 bg-red-500/10 rounded-full w-fit border border-red-500/20">
            <Lock className="w-12 h-12 text-red-500" />
          </div>
          <h2 className="text-4xl font-black text-white">{t('downloads.blocked')}</h2>
          <p className="text-white/40 font-bold text-lg leading-relaxed">
            {t('downloads.blockedDesc')}
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-48 pb-40 bg-[#050506] min-h-screen relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px] pointer-events-none opacity-40" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-10 text-xs font-black tracking-widest uppercase text-accent bg-accent/10 border border-accent/20 rounded-2xl">
            <Download className="w-4 h-4" />
            <span>{t('downloads.badge')}</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-12 leading-tight tracking-tighter italic py-8">{t('downloads.title')} <span className="text-gradient inline-block px-10">{t('downloads.titleAccent')}</span></h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bento-card group p-12 space-y-12"
          >
            <div className="flex justify-between items-start">
              <div className="p-6 bg-accent/10 rounded-3xl group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-110">
                <Rocket className="w-12 h-12 text-accent" />
              </div>
              <div className="text-right">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-white/30">{t('downloads.currentVersion')}</span>
                <h4 className="text-3xl font-black text-white">{downloadData?.version}</h4>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-4xl font-black text-white group-hover:text-accent transition-colors">{t('downloads.launcherTitle')}</h3>
              <p className="text-white/40 font-bold text-lg leading-relaxed max-w-sm">
                {t('downloads.launcherDesc')}
              </p>
            </div>

            {downloadData?.enabled ? (
              <a
                href={downloadData?.download_url}
                className="w-full py-6 text-lg font-black text-white bg-accent rounded-3xl glow-button flex items-center justify-center gap-3 border border-accent/50 group/btn"
              >
                {t('downloads.downloadNow')}
                <ArrowRight className="w-6 h-6 transition-transform group-hover/btn:translate-x-2" />
              </a>
            ) : (
              <div className="w-full py-6 px-8 text-lg font-black text-red-400 bg-red-500/10 rounded-3xl flex items-center justify-center gap-3 border border-red-500/20">
                <AlertTriangle className="w-6 h-6" />
                {t('downloads.disabled')}
              </div>
            )}
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {downloadData?.features?.map((feature, index) => {
              const Icon = IconMap[feature.icon] || Shield
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bento-card p-10 flex items-center gap-8"
                >
                  <div className="p-4 bg-white/5 rounded-2xl">
                    <Icon className="w-8 h-8 text-white/50" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white">{feature.title}</h4>
                    <p className="text-white/30 text-sm font-bold uppercase tracking-widest">{feature.subtitle}</p>
                  </div>
                </motion.div>
              )
            })}

            {downloadData?.changelog && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bento-card p-10 space-y-6"
              >
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/80">{downloadData.changelog.title}</h4>
                <ul className="space-y-4">
                  {downloadData.changelog.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-4 text-white/40 font-bold text-sm">
                      <span className="w-2 h-2 rounded-full bg-accent/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Downloads
