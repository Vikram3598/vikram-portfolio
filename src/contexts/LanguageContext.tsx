'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import enTranslations from '../messages/en.json'
import hiTranslations from '../messages/hi.json'

type Locale = 'en' | 'hi'

type Translations = typeof enTranslations

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const translations: Record<Locale, Translations> = {
  en: enTranslations,
  hi: hiTranslations
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

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'hi')) {
      setLocale(savedLocale)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    localStorage.setItem('locale', locale)
  }, [locale])

  const t = (key: string): string => {
    try {
      const keys = key.split('.')
      let value: any = translations[locale]
      
      for (const k of keys) {
        if (value && typeof value === 'object') {
          value = value[k]
        } else {
          return key
        }
      }
      
      return typeof value === 'string' ? value : key
    } catch (error) {
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
