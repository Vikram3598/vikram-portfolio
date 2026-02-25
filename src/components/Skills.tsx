'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Terminal, 
  Database, 
  Network, 
  Lock, 
  Eye, 
  Server, 
  Code,
  Monitor,
  FileSearch
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Skills = () => {
  const { t } = useLanguage()
  
  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: <Shield className="w-6 h-6" />,
      color: "from-cyber-500 to-cyber-600",
      skills: [
        { name: "SIEM Tools", level: 90 },
        { name: "Vulnerability Assessment", level: 85 },
        { name: "Incident Response", level: 88 },
        { name: "Security Auditing", level: 82 },
        { name: "Threat Detection", level: 87 }
      ]
    },
    {
      title: "Infrastructure & Systems",
      icon: <Server className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "Linux Administration", level: 90 },
        { name: "Network Security", level: 85 },
        { name: "System Hardening", level: 83 },
        { name: "Cloud Security", level: 78 },
        { name: "Endpoint Protection", level: 80 }
      ]
    },
    {
      title: "Programming & Development",
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "Python", level: 88 },
        { name: "Bash Scripting", level: 85 },
        { name: "PowerShell", level: 75 },
        { name: "SQL", level: 80 },
        { name: "JavaScript", level: 70 }
      ]
    },
    {
      title: "Compliance & Frameworks",
      icon: <FileSearch className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      skills: [
        { name: "ISO 27001", level: 85 },
        { name: "NIST Framework", level: 82 },
        { name: "Government Compliance", level: 90 },
        { name: "Risk Assessment", level: 87 },
        { name: "Policy Development", level: 83 }
      ]
    }
  ]

  const certifications = [
    { name: "GATE CSE-2024", icon: "🎓", progress: 100 },
    { name: "UGC NET-2024", icon: "📜", progress: 100 },
    { name: "Google Cybersecurity", icon: "🛡️", progress: 100 }
  ]

  const tools = [
    { name: "Splunk", icon: <Database className="w-5 h-5" />, category: "SIEM" },
    { name: "Wireshark", icon: <Network className="w-5 h-5" />, category: "Network Analysis" },
    { name: "Nessus", icon: <Eye className="w-5 h-5" />, category: "Vulnerability Scanner" },
    { name: "Metasploit", icon: <Terminal className="w-5 h-5" />, category: "Penetration Testing" },
    { name: "Burp Suite", icon: <Lock className="w-5 h-5" />, category: "Web Security" },
    { name: "OSSIM", icon: <Monitor className="w-5 h-5" />, category: "Security Management" }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('skills.title').split(' ')[0]} <span className="text-cyber-600">{t('skills.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-cyber-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 + categoryIndex * 0.2 }}
                        className={`h-3 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Security Tools & Technologies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300 text-center group"
              >
                <div className="text-cyber-600 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                  {tool.name}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {tool.category}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyber-500 to-blue-600 p-8 rounded-2xl text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{cert.icon}</div>
                <h4 className="font-semibold mb-2">{cert.name}</h4>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${cert.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-2 bg-white rounded-full"
                  />
                </div>
                <p className="text-cyber-100 text-sm mt-2">Completed</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Core Competencies Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-600 mb-2">6+</div>
                <div className="text-slate-600 dark:text-slate-400">Security Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-slate-600 dark:text-slate-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-slate-600 dark:text-slate-400">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
                <div className="text-slate-600 dark:text-slate-400">Frameworks</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
