'use client'

import { useState } from 'react';
import { locales, localeNames, type Locale } from '@/i18n/config';
import { useLanguage } from '@/contexts/LanguageContext';
import { Languages, ChevronDown } from 'lucide-react';

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
      >
        <Languages className="w-4 h-4" />
        <span className="text-sm font-medium">{localeNames[locale]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-50 min-w-[120px]">
          {locales.map((localeOption) => (
            <button
              key={localeOption}
              onClick={() => handleLanguageChange(localeOption)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 ${
                locale === localeOption
                  ? 'bg-cyber-50 dark:bg-cyber-900/20 text-cyber-600 dark:text-cyber-400'
                  : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              {localeNames[localeOption]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
