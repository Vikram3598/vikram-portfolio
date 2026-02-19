import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
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
      <body>
        <LanguageProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
