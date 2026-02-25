'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, MapPin, User } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()
  
  const achievements = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: t('about.education.title'),
      description: t('about.education.degree'),
      detail: t('about.education.achievements.2')
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "GATE",
      description: t('about.education.achievements.0'),
      detail: "GATE CSE"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "UGC NET",
      description: t('about.education.achievements.1'),
      detail: "National Eligibility"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('common.location') || "Location",
      description: "New Delhi, India",
      detail: "Available for remote"
    }
  ]

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('about.title').split(' ')[0]} <span className="text-cyber-600">{t('about.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyber-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <User className="w-32 h-32 text-white" />
                {/* Uncomment this when you add your profile photo */}
                {<img 
                  src="/profile.png" 
                  alt="Vikram Prasad Gupta" 
                  className="w-full h-full object-cover rounded-2xl"
                />}
              </div>
              <div className="absolute -bottom-4 -right-4 bg-cyber-600 text-white p-4 rounded-xl shadow-lg">
                <Award className="w-8 h-8" />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-600"
                >
                  <div className="flex items-center space-x-2 text-cyber-600 mb-2">
                    {achievement.icon}
                    <h3 className="font-semibold text-sm">{achievement.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Detailed About */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-slate-700 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-600">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {t('about.highlights.title') || 'Professional Journey'}
              </h3>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  {t('about.description').substring(0, 100)}...
                </p>
                
                <p>
                  {t('about.education.achievements.0')} & {t('about.education.achievements.1')}
                </p>
                
                <p>
                  {t('about.highlights.items.0')}, {t('about.highlights.items.1')}, {t('about.highlights.items.4')}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-600">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">{t('about.highlights.title')}</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Cybersecurity", "IT Infrastructure", "SIEM Tools","AI/ML","Prompt Engineering", "Python", "Linux Administration",
                    "Network Security", "Vulnerability Assessment", "Compliance Frameworks"
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyber-100 dark:bg-cyber-900/30 text-cyber-700 dark:text-cyber-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-cyber-500 to-cyber-600 p-6 rounded-xl text-white">
                <div className="text-3xl font-bold">3+</div>
                <div className="text-cyber-100">{t('common.yearsExperience')}</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-blue-100">{t('common.securityProjects')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
