import { motion, AnimatePresence } from 'framer-motion'
import { UserPlus, Download, Heart, ArrowRight, ChevronRight, Loader2, ShieldCheck } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const Onboarding = () => {
  const { t } = useLanguage()
  const [step, setStep] = useState(1)
  const [timeLeft, setTimeLeft] = useState(10)

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      if (step < 3) {
        setStep(step + 1)
        setTimeLeft(10)
      }
    }
  }, [timeLeft, step])

  const steps = [
    {
      id: 1,
      title: t('onboarding.step1Title'),
      description: t('onboarding.step1Desc'),
      icon: <UserPlus className="w-16 h-16 text-accent" />,
      action: {
        label: t('onboarding.step1Action'),
        url: "https://api.sperance.crisu.qzz.io/api/discord/login"
      }
    },
    {
      id: 2,
      title: t('onboarding.step2Title'),
      description: t('onboarding.step2Desc'),
      icon: <Download className="w-16 h-16 text-accent" />,
      action: {
        label: t('onboarding.step2Action'),
        url: "/downloads",
        internal: true
      }
    },
    {
      id: 3,
      title: t('onboarding.step3Title'),
      description: t('onboarding.step3Desc'),
      icon: <Heart className="w-16 h-16 text-red-500 fill-red-500/20" />,
      action: {
        label: t('onboarding.step3Action'),
        url: "/",
        internal: true
      }
    }
  ]

  const currentStep = steps.find(s => s.id === step)

  return (
    <div className="min-h-screen bg-[#050506] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-2xl w-full relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="bento-card p-12 md:p-16 text-center space-y-10 border-white/10 shadow-[0_0_100px_rgba(139,92,246,0.1)]"
          >
            {/* Step Icon */}
            <div className="mx-auto p-8 bg-accent/10 rounded-[2.5rem] w-fit border border-accent/20 relative group">
              <div className="absolute inset-0 bg-accent blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative z-10">{currentStep.icon}</div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tighter italic">
                {currentStep.title.split(' ').map((word, i) => (
                  <span key={i} className={i === currentStep.title.split(' ').length - 1 ? "text-gradient inline-block px-10" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </h2>
              <p className="text-white/40 font-bold text-xl leading-relaxed">
                {currentStep.description}
              </p>
            </div>

            {/* Action Button */}
            <div className="pt-4">
              {currentStep.action.internal ? (
                <Link 
                  to={currentStep.action.url}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-2xl hover:scale-105 transition-transform"
                >
                  {currentStep.action.label}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              ) : (
                <a 
                  href={currentStep.action.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-white font-black rounded-2xl glow-button border border-accent/50"
                >
                  {currentStep.action.label}
                  <ChevronRight className="w-5 h-5" />
                </a>
              )}
            </div>

            {/* Progress / Timer */}
            {step < 3 && (
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 text-white/20 font-black uppercase tracking-[0.3em] text-[10px]">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  {t('onboarding.nextIn')} {timeLeft}s
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    key={`timer-${step}`}
                    transition={{ duration: 10, ease: "linear" }}
                    className="h-full bg-accent"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="flex items-center justify-center gap-2 text-green-500/50 font-black uppercase tracking-[0.2em] text-[10px]">
                <ShieldCheck className="w-4 h-4" />
                {t('onboarding.completed')}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Step Indicator Bubbles */}
        <div className="mt-12 flex justify-center gap-4">
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === step ? "w-12 bg-accent" : "w-3 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Onboarding
