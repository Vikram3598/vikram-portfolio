'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Layout = 'cyber' | 'ocean' | 'forest' | 'sunset' | 'minimal'

interface LayoutContextType {
  layout: Layout
  setLayout: (layout: Layout) => void
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined)

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [layout, setLayout] = useState<Layout>('cyber')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLayout = localStorage.getItem('layout') as Layout
    if (savedLayout) {
      setLayout(savedLayout)
    }
    document.documentElement.setAttribute('data-layout', 'cyber')
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-layout', layout)
      localStorage.setItem('layout', layout)
    }
  }, [layout, mounted])

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      {children}
    </LayoutContext.Provider>
  )
}

export function useLayout() {
  const context = useContext(LayoutContext)
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider')
  }
  return context
}
