import { motion } from 'framer-motion'
import { Rocket, ChevronRight, Sparkles, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()
  return (
    <section id="home" className="relative min-h-screen pt-48 pb-20 overflow-hidden flex items-center justify-center bg-[#050506]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-radial from-accent/10 via-transparent to-transparent opacity-60 pointer-events-none" />
      <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-float opacity-30" />
      <div className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-float opacity-30" style={{ animationDelay: '2s' }} />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-6 py-2.5 mb-10 text-xs font-bold tracking-[0.2em] uppercase text-accent-glow glass rounded-2xl border-accent/20 hover:border-accent/40 transition-all cursor-default group"
        >
          <Sparkles className="w-4 h-4 transition-transform group-hover:scale-125 group-hover:rotate-12" />
          <span>{t('hero.badge')}</span>
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-7xl md:text-[9rem] font-black tracking-tight mb-10 leading-[0.9]"
        >
          {t('hero.title')}<br />
          <span className="text-gradient italic text-glow drop-shadow-[0_0_30px_rgba(139,92,246,0.3)] px-10 inline-block">{t('hero.titleAccent')}</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-3xl mx-auto text-xl md:text-2xl text-white/50 mb-16 font-medium leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            to="/start"
            className="w-full sm:w-auto px-10 py-5 text-lg font-black text-white bg-accent rounded-3xl glow-button flex items-center justify-center gap-3 border border-accent/50 group"
          >
            {t('hero.startNow')}
            <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/about" className="w-full sm:w-auto px-10 py-5 text-lg font-black text-white glass hover:bg-white/10 transition-all duration-300 rounded-3xl flex items-center justify-center gap-3 group">
            <Globe className="w-6 h-6 opacity-60 group-hover:rotate-12 transition-transform" />
            {t('hero.explore')}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
