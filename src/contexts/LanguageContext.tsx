'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Locale = 'en' | 'hi'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const translations = {
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects', 
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.cta.resume': 'Download Resume'
  },
  hi: {
    'nav.about': 'परिचय',
    'nav.experience': 'अनुभव', 
    'nav.projects': 'प्रोजेक्ट्स',
    'nav.skills': 'कौशल',
    'nav.contact': 'संपर्क',
    'hero.cta.resume': 'रेज्यूमे डाउनलोड करें'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('en')

  const t = (key: string): string => {
    return translations[locale][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
