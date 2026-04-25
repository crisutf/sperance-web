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
      <div className="pt-24 md:pt-48 pb-20 md:pb-40 bg-[#050506] min-h-screen flex items-center justify-center">
        <div className="text-accent animate-pulse font-black text-xl md:text-2xl uppercase tracking-[0.3em]">{t('downloads.loading')}</div>
      </div>
    )
  }

  if (error || !downloadData) {
    return (
      <div className="pt-24 md:pt-48 pb-20 md:pb-40 bg-[#050506] min-h-screen flex items-center justify-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bento-card max-w-lg w-full p-8 md:p-12 text-center space-y-6 md:space-y-8 border-red-500/20 shadow-2xl shadow-red-500/10"
        >
          <div className="mx-auto p-4 md:p-6 bg-red-500/10 rounded-full w-fit border border-red-500/20">
            <AlertTriangle className="w-10 h-10 md:w-12 md:h-12 text-red-500" />
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white">{t('downloads.error')}</h2>
          <p className="text-white/40 font-bold text-base md:text-lg leading-relaxed">
            {t('downloads.errorDesc')}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="w-full md:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest rounded-xl md:rounded-2xl border border-white/10 transition-all text-sm"
          >
            {t('downloads.retry')}
          </button>
        </motion.div>
      </div>
    )
  }

  if (downloadData?.blocked) {
    return (
      <div className="pt-24 md:pt-48 pb-20 md:pb-40 bg-[#050506] min-h-screen flex items-center justify-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bento-card max-w-lg w-full p-8 md:p-12 text-center space-y-6 md:space-y-8 border-red-500/20 shadow-2xl shadow-red-500/10"
        >
          <div className="mx-auto p-5 md:p-6 bg-red-500/10 rounded-full w-fit border border-red-500/20">
            <Lock className="w-10 h-10 md:w-12 md:h-12 text-red-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white italic tracking-tighter">{t('downloads.blocked')}</h2>
          <p className="text-white/40 font-bold text-base md:text-lg leading-relaxed max-w-xs mx-auto">
            {t('downloads.blockedDesc')}
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-24 md:pt-48 pb-20 md:pb-40 bg-[#050506] min-h-screen relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent/5 rounded-full blur-[200px] pointer-events-none opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 md:mb-10 text-[10px] md:text-xs font-black tracking-widest uppercase text-accent bg-accent/10 border border-accent/20 rounded-2xl">
            <Download className="w-4 h-4" />
            <span>{t('downloads.badge')}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-9xl font-black mb-8 md:mb-12 leading-tight tracking-tighter italic py-4 md:py-8">{t('downloads.title')} <span className="text-gradient inline-block px-4 md:px-10">{t('downloads.titleAccent')}</span></h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bento-card group p-6 md:p-12 space-y-8 md:space-y-12"
          >
            <div className="flex justify-between items-start">
              <div className="p-4 md:p-6 bg-accent/10 rounded-2xl md:rounded-3xl group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-110">
                <Rocket className="w-8 h-8 md:w-12 md:h-12 text-accent" />
              </div>
              <div className="text-right">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">{t('downloads.currentVersion')}</span>
                <h4 className="text-2xl md:text-3xl font-black text-white">{downloadData?.version}</h4>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h3 className="text-3xl md:text-4xl font-black text-white group-hover:text-accent transition-colors">{t('downloads.launcherTitle')}</h3>
              <p className="text-white/40 font-bold text-base md:text-lg leading-relaxed max-w-sm">
                {t('downloads.launcherDesc')}
              </p>
            </div>

            {downloadData?.enabled ? (
              <a
                href={downloadData?.download_url}
                className="w-full py-5 md:py-6 text-base md:text-lg font-black text-white bg-accent rounded-2xl md:rounded-3xl glow-button flex items-center justify-center gap-3 border border-accent/50 group/btn"
              >
                {t('downloads.downloadNow')}
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover/btn:translate-x-2" />
              </a>
            ) : (
              <div className="w-full py-5 md:py-6 px-6 md:px-8 text-base md:text-lg font-black text-red-400 bg-red-500/10 rounded-2xl md:rounded-3xl flex items-center justify-center gap-3 border border-red-500/20 text-center">
                <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                {t('downloads.disabled')}
              </div>
            )}
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {downloadData?.features?.map((feature, index) => {
              const Icon = IconMap[feature.icon] || Shield
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bento-card p-6 md:p-10 flex items-center gap-6 md:gap-8"
                >
                  <div className="p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl flex-shrink-0">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white/50" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-black text-white">{feature.title}</h4>
                    <p className="text-white/30 text-[10px] md:text-sm font-bold uppercase tracking-widest">{feature.subtitle}</p>
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
                className="bento-card p-6 md:p-10 space-y-4 md:space-y-6"
              >
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/80">{downloadData.changelog.title}</h4>
                <ul className="space-y-3 md:space-y-4">
                  {downloadData.changelog.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-4 text-white/40 font-bold text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 flex-shrink-0" />
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
