'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Shield, Moon, Sun, Download, Layout, ChevronDown } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/contexts/LanguageContext'
import { useLayout } from '@/contexts/LayoutContext'
import LanguageSwitcher from './LanguageSwitcher'

type LayoutType = 'cyber' | 'ocean' | 'forest' | 'sunset' | 'minimal'

const layouts: { value: LayoutType; label: string; color: string }[] = [
  { value: 'cyber', label: 'Cyber', color: 'bg-green-500' },
  { value: 'ocean', label: 'Ocean', color: 'bg-cyan-500' },
  { value: 'forest', label: 'Forest', color: 'bg-green-600' },
  { value: 'sunset', label: 'Sunset', color: 'bg-orange-500' },
  { value: 'minimal', label: 'Minimal', color: 'bg-gray-500' },
]

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [layoutMenuOpen, setLayoutMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { layout, setLayout } = useLayout()
  const { t } = useLanguage()
  const layoutMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (layoutMenuRef.current && !layoutMenuRef.current.contains(event.target as Node)) {
        setLayoutMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.contact'), href: '#contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('#hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 font-bold text-slate-900 dark:text-white"
          >
            <div className="p-2 bg-cyber-600 rounded-lg">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl">Vikram P. Gupta</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-slate-700 dark:text-slate-300 hover:text-cyber-600 dark:hover:text-cyber-400 transition-colors duration-300 font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Layout Switcher */}
            <div className="relative" ref={layoutMenuRef}>
              <button
                onClick={() => setLayoutMenuOpen(!layoutMenuOpen)}
                className="hidden md:flex items-center space-x-1 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300"
              >
                <Layout className="w-5 h-5" />
                <ChevronDown className={`w-4 h-4 transition-transform ${layoutMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {layoutMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-1 z-50"
                  >
                    {layouts.map((l) => (
                      <button
                        key={l.value}
                        onClick={() => {
                          setLayout(l.value)
                          setLayoutMenuOpen(false)
                        }}
                        className={`w-full flex items-center space-x-2 px-4 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors ${
                          layout === l.value ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div className={`w-3 h-3 rounded-full ${l.color}`} />
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}

            {/* Resume Download */}
            <a
              href="/resume.pdf"
              download="Vikram_Prasad_Gupta_Resume.pdf"
              className="hidden md:flex items-center space-x-2 bg-cyber-600 hover:bg-cyber-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 cyber-glow"
            >
              <Download className="w-4 h-4" />
              <span>{t('hero.cta.resume')}</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700"
        >
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-slate-700 dark:text-slate-300 hover:text-cyber-600 dark:hover:text-cyber-400 transition-colors duration-300 font-medium py-2"
              >
                {link.name}
              </button>
            ))}
            <a
              href="/resume.pdf"
              download="Vikram_Prasad_Gupta_Resume.pdf"
              className="flex items-center space-x-2 bg-cyber-600 hover:bg-cyber-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 w-fit"
            >
              <Download className="w-4 h-4" />
              <span>{t('hero.cta.resume')}</span>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navigation
