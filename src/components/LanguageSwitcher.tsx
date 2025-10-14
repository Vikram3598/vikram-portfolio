'use client'

import { useState } from 'react';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const [locale, setLocale] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
      >
        <Languages className="w-4 h-4" />
        <span className="text-sm font-medium">{locale === 'en' ? 'English' : 'हिन्दी'}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-50 min-w-[120px]">
          <button
            onClick={() => {setLocale('en'); setIsOpen(false);}}
            className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
          >
            English
          </button>
          <button
            onClick={() => {setLocale('hi'); setIsOpen(false);}}
            className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
          >
            हिन्दी
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
