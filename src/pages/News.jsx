import { motion, AnimatePresence } from 'framer-motion'
import { Newspaper, Calendar, ArrowRight, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const News = () => {
  const { t } = useLanguage()
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    fetch('https://cdn.crisu.qzz.io/sperance/API/news.json')
      .then(res => res.json())
      .then(data => {
        setNews(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Error loading news:", err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="pt-48 pb-40 bg-[#050506] min-h-screen flex items-center justify-center">
        <div className="text-accent animate-pulse font-black text-2xl uppercase tracking-widest">{t('news.loading')}</div>
      </div>
    )
  }

  return (
    <div className="pt-48 pb-40 bg-[#050506] min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-10 text-xs font-black tracking-widest uppercase text-accent bg-accent/10 border border-accent/20 rounded-2xl">
            <Newspaper className="w-4 h-4" />
            <span>{t('news.badge')}</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-12 leading-tight tracking-tighter italic py-8">{t('news.title')} <span className="text-gradient inline-block px-10">{t('news.titleAccent')}</span></h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bento-card group overflow-hidden flex flex-col cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative h-64 mb-8 overflow-hidden rounded-2xl">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 px-4 py-2 bg-accent/90 text-white text-xs font-black uppercase tracking-widest rounded-xl backdrop-blur-md">
                  {item.category}
                </div>
              </div>
              
              <div className="space-y-4 flex-grow">
                <div className="flex items-center gap-2 text-white/30 text-xs font-bold uppercase tracking-widest">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <h3 className="text-3xl font-black text-white group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-white/40 font-bold text-lg leading-relaxed">{item.summary}</p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-accent font-black uppercase tracking-widest text-sm group/btn">
                {t('news.viewDetails')}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl glass-dark rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl border border-white/10"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-8 right-8 p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="space-y-8">
                <div className="flex items-center gap-4 text-accent font-black uppercase tracking-widest text-xs">
                  <span>{selectedItem.category}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{selectedItem.date}</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight italic">{selectedItem.title}</h2>
                <div className="h-px w-full bg-white/5" />
                <p className="text-white/60 font-bold text-xl leading-relaxed">
                  {selectedItem.content}
                </p>
                {selectedItem.summary && (
                  <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10">
                    <p className="text-accent/80 font-bold italic">{selectedItem.summary}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default News
