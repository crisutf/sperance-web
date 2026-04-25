import { motion } from 'framer-motion'
import { Heart, Github, MessageSquare, Video, ShieldCheck, Info } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()
  return (
    <footer className="py-20 bg-[#050506] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="space-y-8 max-w-sm">
            <div className="flex items-center gap-4 group">
              <div className="p-2 rounded-xl border border-white/10 group-hover:border-accent/40 transition-colors duration-500">
            <img src="https://cdn.crisu.qzz.io/sperance/assetes/logo/svg/Sperance_Normal.svg" alt="Sperance Logo" className="relative w-12 h-12 rounded-xl" />
          </div>
              <span className="text-xl font-black text-white tracking-tighter">PROJECT SPERANCE</span>
            </div>
            <p className="text-white/30 text-sm font-bold leading-relaxed">
              {t('footer.desc')}
            </p>
            <p className="text-white/30 text-sm font-bold leading-relaxed">
              <span className="text font-black text-white tracking-tighter">{t('footer.legalTitle')}</span> {t('footer.legalDesc')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/80">Sperance</h4>
              <ul className="space-y-4 text-sm font-bold text-white/30">
                <li><Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link></li>
                <li><Link to="/status" className="hover:text-white transition-colors">{t('nav.status')}</Link></li>
                <li><Link to="/news" className="hover:text-white transition-colors">{t('nav.news')}</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/80">Soporte</h4>
              <ul className="space-y-4 text-sm font-bold text-white/30">
                <li><Link to="/about" className="hover:text-white transition-colors flex items-center gap-2"><Info className="w-3 h-3" /> {t('about.titleAccent')}</Link></li>
                <li><a href="https://github.com/Sperancetf" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://mini.crisu.qzz.io/?d=sperance_discord" className="hover:text-white transition-colors">Discord</a></li>
              </ul>
            </div>
            <div className="space-y-6 hidden sm:block">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/80">Social</h4>
              <ul className="space-y-4 text-sm font-bold text-white/30">
                <li><a href="https://www.tiktok.com/@sperancefn" className="hover:text-white transition-colors">TikTok</a></li>
                <li><Link to="/downloads" className="hover:text-white transition-colors">{t('nav.downloads')}</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black text-white/10 uppercase tracking-[0.2em]">{t('footer.copyright')}</span>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="https://github.com/Sperancetf" target="_blank" rel="noreferrer" className="text-white/10 hover:text-white transition-all transform hover:scale-110"><Github className="w-5 h-5" /></a>
            <a href="https://www.tiktok.com/@sperancefn" target="_blank" rel="noreferrer" className="text-white/10 hover:text-white transition-all transform hover:scale-110"><Video className="w-5 h-5" /></a>
            <a href="https://mini.crisu.qzz.io/?d=sperance_discord" target="_blank" rel="noreferrer" className="text-white/10 hover:text-white transition-all transform hover:scale-110"><MessageSquare className="w-5 h-5" /></a>
          </div>

          <div className="text-[10px] font-black text-white/10 uppercase tracking-[0.2em] flex items-center gap-2">
            {t('footer.madeBy')} Crisutf
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
