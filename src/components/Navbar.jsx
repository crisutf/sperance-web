import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Github, ChevronRight, User, Menu, X, Home, Activity, Newspaper, Download } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const Navbar = () => {
  const location = useLocation()
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { path: '/', label: t('nav.home'), icon: <Home className="w-5 h-5" /> },
    { path: '/status', label: t('nav.status'), icon: <Activity className="w-5 h-5" /> },
    { path: '/news', label: t('nav.news'), icon: <Newspaper className="w-5 h-5" /> },
    { path: '/downloads', label: t('nav.downloads'), icon: <Download className="w-5 h-5" /> },
  ]

  return (
    <>
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 pt-4 md:px-6 md:pt-8 pointer-events-none"
      >
        <nav className="flex items-center justify-between w-full max-w-7xl px-4 py-3 md:px-6 md:py-4 glass-dark rounded-2xl md:rounded-3xl border border-white/5 pointer-events-auto shadow-2xl">
          <div className="flex items-center gap-2 md:gap-8">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <Link to="/" className="flex items-center gap-2 md:gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-accent blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
                <img src="https://cdn.crisu.qzz.io/sperance/assetes/logo/svg/Sperance_Favicon_NoSombra.svg" alt="Sperance Logo" className="relative w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl transition-transform group-hover:scale-110 duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-base md:text-xl font-bold tracking-tight text-white leading-tight">Project Sperance</span>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-sm font-semibold transition-all hover:tracking-wide ${location.pathname === link.path ? 'text-white' : 'text-white/50 hover:text-white'}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="w-px h-6 bg-white/10" />
            <a href="https://github.com/Sperancetf" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-all hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
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
              className="px-4 py-2 md:px-8 md:py-3 text-xs md:text-sm font-bold text-white bg-accent/10 rounded-xl md:rounded-2xl glow-button flex items-center gap-2 md:gap-3 border border-accent/20 hover:bg-accent/20 group pointer-events-auto"
            >
              <MessageSquare className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:rotate-12" />
              <span className="hidden xs:inline">{t('nav.discord')}</span>
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4 opacity-40 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80] lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-[#050506] border-r border-white/5 z-[90] lg:hidden p-8 pt-24 space-y-8"
            >
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 px-4">{t('nav.menu') || 'Menú'}</p>
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all font-bold ${
                        location.pathname === link.path 
                          ? 'bg-accent/10 text-accent border border-accent/20' 
                          : 'text-white/40 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 space-y-4">
                <a 
                  href="https://api.sperance.crisu.qzz.io/api/discord/login"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all"
                >
                  <User className="w-5 h-5" />
                  {t('nav.account')}
                </a>
                <div className="flex items-center justify-center gap-6 pt-4">
                  <a href="https://github.com/Sperancetf" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-white/40 hover:text-white transition-all">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
