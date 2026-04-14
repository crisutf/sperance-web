import { motion } from 'framer-motion'
import { MessageSquare, Github, ChevronRight, User } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const Navbar = () => {
  const location = useLocation()
  const { t } = useLanguage()

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-8 pointer-events-none"
    >
      <nav className="flex items-center justify-between w-full max-w-7xl px-6 py-4 glass-dark rounded-3xl border border-white/5 pointer-events-auto">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute inset-0 bg-accent blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
            <img src="https://cdn.crisu.qzz.io/sperance/media/logo_background.png" alt="Sperance Logo" className="relative w-12 h-12 rounded-xl transition-transform group-hover:scale-110 duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white leading-tight">Project Sperance</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className={`text-sm font-semibold transition-all hover:tracking-wide ${location.pathname === '/' ? 'text-white' : 'text-white/50 hover:text-white'}`}>{t('nav.home')}</Link>
          <Link to="/status" className={`text-sm font-semibold transition-all hover:tracking-wide ${location.pathname === '/status' ? 'text-white' : 'text-white/50 hover:text-white'}`}>{t('nav.status')}</Link>
          <Link to="/news" className={`text-sm font-semibold transition-all hover:tracking-wide ${location.pathname === '/news' ? 'text-white' : 'text-white/50 hover:text-white'}`}>{t('nav.news')}</Link>
          <Link to="/downloads" className={`text-sm font-semibold transition-all hover:tracking-wide ${location.pathname === '/downloads' ? 'text-white' : 'text-white/50 hover:text-white'}`}>{t('nav.downloads')}</Link>
          <div className="w-px h-6 bg-white/10" />
          <a href="https://github.com/Sperancefn" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-all hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://api.sperance.crisu.qzz.io/api/discord/login"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex px-6 py-3 text-sm font-bold text-white/70 hover:text-white transition-all glass rounded-2xl border border-white/5 hover:border-white/20 items-center gap-2"
          >
            <User className="w-4 h-4" />
            {t('nav.account')}
          </a>
          <a 
            href="https://mini.crisu.qzz.io/?d=sperance_discord"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 text-sm font-bold text-white bg-accent/10 rounded-2xl glow-button flex items-center gap-3 border border-accent/20 hover:bg-accent/20 group pointer-events-auto"
          >
            <MessageSquare className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <span>{t('nav.discord')}</span>
            <ChevronRight className="w-4 h-4 opacity-40 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </nav>
    </motion.header>
  )
}

export default Navbar
