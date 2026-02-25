import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { LayoutProvider } from '@/contexts/LayoutContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vikram Prasad Gupta - Cybersecurity Professional',
  description: 'Portfolio of Vikram Prasad Gupta, an experienced cybersecurity professional with expertise in IT Infrastructure, SIEM tools, and government security frameworks.',
  keywords: 'cybersecurity, IT infrastructure, SIEM, security frameworks, portfolio',
  authors: [{ name: 'Vikram Prasad Gupta' }],
  openGraph: {
    title: 'Vikram Prasad Gupta - Cybersecurity Professional',
    description: 'Portfolio showcasing cybersecurity expertise and professional experience',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider>
            <LayoutProvider>
              {children}
            </LayoutProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
