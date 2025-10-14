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
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact'
    },
    hero: {
      cta: {
        resume: 'Download Resume'
      }
    }
  },
  hi: {
    nav: {
      about: 'परिचय',
      experience: 'अनुभव',
      projects: 'प्रोजेक्ट्स',
      skills: 'कौशल',
      contact: 'संपर्क'
    },
    hero: {
      cta: {
        resume: 'रेज्यूमे डाउनलोड करें'
      }
    }
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    return {
      locale: 'en' as Locale,
      setLocale: () => {},
      t: (key: string) => key
    }
  }
  return context
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('en')

  const t = (key: string): string => {
    try {
      const keys = key.split('.')
      let value: any = translations[locale]
      
      for (const k of keys) {
        if (value && typeof value === 'object') {
          value = value[k]
        } else {
          return key // Return original key if path doesn't exist
        }
      }
      
      return typeof value === 'string' ? value : key
    } catch (error) {
      console.warn('Translation error for key:', key)
      return key
    }
  }

  const contextValue = {
    locale,
    setLocale,
    t
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}
