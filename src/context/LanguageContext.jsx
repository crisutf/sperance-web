import { createContext, useContext, useState, useEffect } from 'react'
import translations from '../locales/translations.json'

const LanguageContext = createContext()

const getBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage
  if (browserLang.startsWith('es')) return 'es'
  return 'en'
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getBrowserLanguage)

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}