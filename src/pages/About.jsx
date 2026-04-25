import { motion } from 'framer-motion'
import { Info, Shield, Target, User, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const About = () => {
  const { t } = useLanguage()
  return (
    <div className="pt-24 pb-20 md:pt-48 md:pb-40 bg-[#050506] min-h-screen relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent/5 rounded-full blur-[200px] pointer-events-none opacity-40" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-32"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-10 text-xs font-black tracking-widest uppercase text-accent bg-accent/10 border border-accent/20 rounded-2xl">
            <Info className="w-4 h-4" />
            <span>{t('about.badge')}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black mb-8 md:mb-12 leading-tight tracking-tighter italic py-4">{t('about.title')} <span className="text-gradient inline-block px-4 md:px-10">{t('about.titleAccent')}</span></h1>
          <p className="text-white/40 text-base md:text-xl lg:text-2xl font-bold max-w-3xl mx-auto leading-relaxed px-2">
            {t('hero.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Creator Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card group space-y-6 md:space-y-8 p-6 md:p-12 lg:col-span-2 flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <div className="relative group/avatar">
              <div className="absolute -inset-4 bg-accent/20 rounded-full blur-2xl opacity-0 group-hover/avatar:opacity-100 transition-opacity" />
              <img 
                src="https://avatars.githubusercontent.com/u/143294409" 
                alt="Crisutf" 
                className="relative w-28 h-28 md:w-40 md:h-40 rounded-full border-2 border-white/10 group-hover/avatar:border-accent/50 transition-all duration-500 shadow-2xl"
              />
            </div>
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 rounded-full border border-accent/20">
                <User className="w-4 h-4 text-accent" />
                <span className="text-xs font-black uppercase tracking-widest text-accent">{t('about.creator')}</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-white group-hover:text-accent transition-colors">{t('about.creatorName')}</h3>
              <p className="text-white/30 font-bold text-base md:text-lg leading-relaxed max-w-md">
                {t('about.creatorDesc')}
              </p>
            </div>
          </motion.div>

          {/* Version Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bento-card group space-y-6 md:space-y-8 p-6 md:p-12 flex flex-col justify-center text-center"
          >
            <div className="text-xs font-black uppercase tracking-[0.3em] text-white/20 group-hover:text-accent/50 transition-colors">{t('about.versionLabel')}</div>
            <div className="text-5xl md:text-6xl font-black text-white group-hover:scale-110 transition-transform duration-500">v¿?.¿?</div>
          </motion.div>

          {/* Security Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bento-card group space-y-6 md:space-y-8 p-6 md:p-12 lg:col-span-1"
          >
            <div className="p-4 md:p-5 bg-green-500/10 rounded-2xl md:rounded-3xl w-fit transition-all duration-500 group-hover:scale-110 group-hover:bg-green-500/20">
              <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-green-500" />
            </div>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-green-500 transition-colors">{t('about.securityTitle')}</h3>
              <p className="text-white/30 font-bold text-base md:text-lg leading-relaxed">
                {t('about.securityDesc')}
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bento-card group space-y-6 md:space-y-8 p-6 md:p-12 lg:col-span-2"
          >
            <div className="p-4 md:p-5 bg-accent/10 rounded-2xl md:rounded-3xl w-fit transition-all duration-500 group-hover:scale-110 group-hover:bg-accent/20">
              <Target className="w-8 h-8 md:w-10 md:h-10 text-accent" />
            </div>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-accent transition-colors">{t('about.missionTitle')}</h3>
              <p className="text-white/30 font-bold text-base md:text-lg leading-relaxed">
                {t('about.missionDesc')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
