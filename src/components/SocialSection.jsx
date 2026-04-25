import { motion } from 'framer-motion'
import { Github, MessageSquare, ExternalLink, ArrowRight, ShieldCheck, Share2, Video } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const SocialSection = () => {
  const { t } = useLanguage()
  return (
    <section className="py-20 md:py-40 bg-[#050506] relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-accent/5 rounded-full blur-[200px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8 md:space-y-12 relative z-10"
        >
          <div className="space-y-4 md:space-y-6">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2 text-[10px] md:text-xs font-black tracking-widest uppercase text-accent bg-accent/10 border border-accent/20 rounded-2xl"
            >
              <Share2 className="w-4 h-4" />
              <span>{t('social.connect')}</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter italic">
              {t('social.title').split(' ')[0]}<br />
              <span className="text-gradient py-4 px-4 md:px-10 inline-block">{t('social.title').split(' ')[1]}</span>
            </h2>
          </div>
          
          <div className="flex flex-col gap-4 md:gap-6">
            <a 
              href="https://github.com/Sperancetf" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-between p-6 md:p-8 glass-dark rounded-2xl md:rounded-[2rem] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="flex items-center gap-4 md:gap-6 relative z-10">
                <div className="p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500 transform group-hover:scale-110">
                  <Github className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-black text-lg md:text-xl text-white group-hover:text-accent transition-colors">{t('social.githubTitle')}</h4>
                  <p className="text-[10px] md:text-sm font-bold text-white/30 uppercase tracking-widest group-hover:text-white/50 transition-colors">{t('social.githubSubtitle')}</p>
                </div>
              </div>
              <div className="p-2 md:p-3 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-2 relative z-10">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            </a>

            <a 
              href="https://www.tiktok.com/@sperancefn" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-between p-6 md:p-8 glass-dark rounded-2xl md:rounded-[2rem] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="flex items-center gap-4 md:gap-6 relative z-10">
                <div className="p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500 transform group-hover:scale-110">
                  <Video className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-black text-lg md:text-xl text-white group-hover:text-accent transition-colors">{t('social.tiktokTitle')}</h4>
                  <p className="text-[10px] md:text-sm font-bold text-white/30 uppercase tracking-widest group-hover:text-white/50 transition-colors">{t('social.tiktokSubtitle')}</p>
                </div>
              </div>
              <div className="p-2 md:p-3 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-2 relative z-10">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            </a>

            <a 
              href="https://mini.crisu.qzz.io/?d=sperance_discord" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-between p-6 md:p-8 glass-dark rounded-2xl md:rounded-[2rem] hover:bg-accent/10 hover:border-accent/20 transition-all duration-500 group border-l-4 border-l-accent relative overflow-hidden"
            >
              <div className="flex items-center gap-4 md:gap-6 relative z-10">
                <div className="p-3 md:p-4 bg-accent/10 rounded-xl md:rounded-2xl border border-accent/20 group-hover:bg-accent/20 group-hover:border-accent/30 transition-all duration-500 transform group-hover:scale-110">
                  <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                </div>
                <div>
                  <h4 className="font-black text-lg md:text-xl text-white group-hover:text-accent transition-colors">{t('social.discordTitle')}</h4>
                  <p className="text-[10px] md:text-sm font-bold text-white/30 uppercase tracking-widest group-hover:text-white/50 transition-colors">{t('social.discordSubtitle')}</p>
                </div>
              </div>
              <div className="p-2 md:p-3 bg-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-2 relative z-10">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            </a>
          </div>

          <div className="flex items-center gap-3 pt-4 md:pt-6 text-white/20 font-bold uppercase tracking-[0.2em] text-[10px]">
            <ShieldCheck className="w-4 h-4 text-accent/40" />
            {t('social.security')}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center relative w-full"
        >
          <div className="relative group w-full max-w-[350px]">
            <div className="absolute -inset-4 bg-accent/10 rounded-[2.5rem] md:rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none" />
            <div className="relative glass-dark p-1.5 md:p-2 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/5 group-hover:border-accent/20 transition-all duration-500">
              <iframe 
                src="https://discord.com/widget?id=1497569489330376777&theme=dark" 
                width="100%" 
                height="500" 
                allowtransparency="true" 
                frameBorder="0" 
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                className="rounded-[1.5rem] md:rounded-[2rem] relative z-10"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialSection
