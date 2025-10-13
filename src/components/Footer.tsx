'use client'

import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Shield,
  ArrowUp,
  Heart,
  Github,
  Twitter,
  FileText,
  Download,
  ExternalLink
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Cybersecurity Consulting',
    'SIEM Implementation',
    'Vulnerability Assessment',
    'Security Auditing',
    'Incident Response',
    'Compliance Management'
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/vikram-prasad-gupta-023a10229/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:vikram1998gupta@gmail.com',
      color: 'hover:text-red-500'
    },
    {
      name: 'Resume',
      icon: <FileText className="w-5 h-5" />,
      href: '/resume.pdf',
      color: 'hover:text-green-600'
    }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #22c55e 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-cyber-600 rounded-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Vikram Prasad Gupta</h3>
                  <p className="text-slate-400 text-sm">Cybersecurity Professional</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                Passionate about securing digital assets and building robust cybersecurity infrastructures. 
                Specializing in SIEM, threat detection, and government compliance frameworks.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.name === 'LinkedIn' ? '_blank' : undefined}
                    rel={link.name === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-slate-800 rounded-lg transition-colors duration-300 ${link.color} hover:bg-slate-700`}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-300 hover:text-cyber-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-cyber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{link.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-slate-300 flex items-center space-x-2">
                    <Shield className="w-3 h-3 text-cyber-400 flex-shrink-0" />
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-cyber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-sm">Email</p>
                    <a 
                      href="mailto:vikram1998gupta@gmail.com"
                      className="text-white hover:text-cyber-400 transition-colors duration-300"
                    >
                      vikram1998gupta@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-cyber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-sm">Phone</p>
                    <a 
                      href="tel:+918529462731"
                      className="text-white hover:text-cyber-400 transition-colors duration-300"
                    >
                      +91 8529462731
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-cyber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-sm">Location</p>
                    <p className="text-white">New Delhi, India</p>
                  </div>
                </div>
              </div>

              {/* Download Resume Button */}
              <div className="mt-6">
                <a
                  href="/resume.pdf"
                  download="Vikram_Prasad_Gupta_Resume.pdf"
                  className="inline-flex items-center space-x-2 bg-cyber-600 hover:bg-cyber-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-2 text-slate-400 text-sm"
              >
                <span>© {currentYear} Vikram Prasad Gupta. Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>and</span>
                <Shield className="w-4 h-4 text-cyber-400" />
                <span>for cybersecurity.</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center space-x-6"
              >
                <div className="flex items-center space-x-4 text-slate-400 text-sm">
                  <span>Available for freelance work</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                
                <button
                  onClick={scrollToTop}
                  className="p-2 bg-slate-800 hover:bg-cyber-600 text-slate-300 hover:text-white rounded-lg transition-all duration-300 group"
                >
                  <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Additional Info Bar */}
        <div className="bg-slate-950 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-xs text-slate-500">
              <span>🛡️ GATE CSE-2024 Qualified</span>
              <span>📜 UGC NET-2024 Qualified</span>
              <span>🔐 Google Cybersecurity Professional</span>
              <span>🏛️ Government Sector Experience</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
