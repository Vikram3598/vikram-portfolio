'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail, Shield, Lock, Eye, Terminal } from 'lucide-react'

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Make sure to add your resume PDF to the public folder
    link.download = 'Vikram_Prasad_Gupta_Resume.pdf'
    link.click()
  }

  const contactMe = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden matrix-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Animated Icons */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center space-x-4 mb-8"
          >
            <div className="p-3 bg-cyber-100 dark:bg-cyber-900/30 rounded-full">
              <Shield className="w-8 h-8 text-cyber-600" />
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
              <Eye className="w-8 h-8 text-green-600" />
            </div>
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
              <Terminal className="w-8 h-8 text-purple-600" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text">Vikram</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-8"
          >
            <span className="typing-animation">
              Cybersecurity Professional
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Specialized in{' '}
            <span className="text-cyber-600 font-semibold">IT Infrastructure Security</span>,{' '}
            <span className="text-blue-600 font-semibold">SIEM Implementation</span>, and{' '}
            <span className="text-purple-600 font-semibold">Government Compliance</span>.
            <br />
            Protecting digital assets with cutting-edge security solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <button
              onClick={contactMe}
              className="flex items-center space-x-2 bg-cyber-600 hover:bg-cyber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 cyber-glow"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </button>
            
            <button
              onClick={downloadResume}
              className="flex items-center space-x-2 bg-transparent border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-cyber-600 hover:text-cyber-600 dark:hover:text-cyber-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-600">3+</div>
              <div className="text-slate-600 dark:text-slate-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5+</div>
              <div className="text-slate-600 dark:text-slate-400">Security Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">3</div>
              <div className="text-slate-600 dark:text-slate-400">Certifications</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center space-y-2 text-slate-500 dark:text-slate-400 hover:text-cyber-600 dark:hover:text-cyber-400 transition-colors duration-300"
        >
          <span className="text-sm">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}

export default Hero
