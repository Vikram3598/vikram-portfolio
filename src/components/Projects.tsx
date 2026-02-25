'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Award, Shield, Database, Users, FileText, Star } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Projects = () => {
  const { t } = useLanguage()
  
  const projects = [
    {
      title: "Child Tracking Security Application",
      description: "Comprehensive security framework for child safety applications with real-time monitoring and threat detection capabilities.",
      image: "🔒",
      technologies: ["Android","Xml", "JAVA", "Real-time Monitoring", "Threat Detection"],
      Plateform_Used: ["Android Stdio"],
      features: [
        "Real-time location tracking with encrypted data transmission",
        "Advanced threat detection algorithms",
        "Secure communication protocols",
        "Privacy-compliant data handling"
      ],
      type: "Security Application",
      status: "Completed"
    },
    {
      title: "ACO Research Security Protocol",
      description: "Advanced Cybersecurity Operations research project focusing on automated threat response and security orchestration.",
      image: "🛡️",
      technologies: ["Cybersecurity", "Automation", "Threat Response", "Research"],
      features: [
        "Automated threat detection and response",
        "Security orchestration workflows",
        "Advanced analytics and reporting",
        "Integration with existing security tools"
      ],
      type: "Research Project",
      status: "Completed"
    },
    {
      title: "National Cybersecurity Strategy for Financial Sector",
      description: "Comprehensive Cyber Strategy Draft for financial (BFSI) sector with enhanced compliance and monitoring capabilities.",
      image: "💰",
      technologies: ["SIEM", "Compliance", "Financial Security", "Government Systems", "Overleaf LaTeX"],
      features: [
        "Multi-layer security architecture",
        "Regulatory compliance automation",
        "Real-time fraud detection",
        "Audit trail and reporting system",
        "Dedicated Short, Medium, Long term Goals",
        "FSDC Findings, 9 Point ToR, OM Dated 20-09-2025"
      ],
      type: "Government Project",
      status: "In Progress"
    }
  ]

  const certifications = [
    {
      title: "Certified Ethical Hacker CEHv13",
      issuer: "EC-Council",
      date: "In Progress",
      description: "Advanced Ethical Hacking & Penetration Testing",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      status: "in-progress"
    },
    {
      title: "Google Cybersecurity Professional",
      issuer: "Google",
      date: "2023",
      description: "Professional Certificate",
      icon: <Shield className="w-6 h-6" />,
      color: "from-cyber-500 to-cyber-600",
      status: "completed"
    },
    {
      title: "AI for All",
      issuer: "Meity & Intel",
      date: "2025",
      description: "Professional Certificate",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      status: "completed"
    }
  ]

  const accomplishments = [
    {
      title: "GATE CSE-2024",
      issuer: "Government of India",
      date: "2024",
      description: "Computer Science & Engineering - National Level Examination",
      icon: <Award className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      type: "Academic Achievement"
    },
    {
      title: "UGC NET-2024",
      issuer: "University Grants Commission",
      date: "2024", 
      description: "Computer Science & Applications - National Eligibility Test",
      icon: <FileText className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      type: "Academic Achievement"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('projects.title').split(' ')[0]} <span className="text-cyber-600">{t('projects.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-700 rounded-2xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-600 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-600">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                    project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                    'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                  }`}>
                    {project.status}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <div className="text-cyber-600 text-sm font-medium mb-3">
                  {project.type}
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Features */}
              <div className="p-6">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm text-slate-600 dark:text-slate-300">
                      <Star className="w-3 h-3 text-cyber-500 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Professional <span className="text-cyber-600">Certifications</span>
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Industry-recognized certifications validating expertise in cybersecurity and computer science.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white dark:bg-slate-700 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-600 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${cert.color} rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${cert.color} text-white`}>
                    {cert.icon}
                  </div>
                  {cert.status === 'in-progress' && (
                    <div className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full text-xs font-medium">
                      In Progress
                    </div>
                  )}
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {cert.title}
                </h4>
                
                <p className="text-slate-600 dark:text-slate-400 mb-1">
                  {cert.issuer}
                </p>
                
                <p className={`font-semibold mb-3 ${cert.status === 'in-progress' ? 'text-yellow-600 dark:text-yellow-400' : 'text-cyber-600'}`}>
                  {cert.date}
                </p>
                
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Accomplishments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Academic <span className="text-blue-600">Accomplishments</span>
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            National-level academic achievements demonstrating excellence in computer science and engineering.
          </p>
        </motion.div>

        {/* Accomplishments Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {accomplishments.map((accomplishment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white dark:bg-slate-700 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-600 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${accomplishment.color} rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${accomplishment.color} text-white`}>
                    {accomplishment.icon}
                  </div>
                  <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-medium">
                    {accomplishment.type}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {accomplishment.title}
                </h4>
                
                <p className="text-slate-600 dark:text-slate-400 mb-1">
                  {accomplishment.issuer}
                </p>
                
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                  {accomplishment.date}
                </p>
                
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {accomplishment.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyber-500 to-blue-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Interested in Cybersecurity Solutions?
            </h3>
            <p className="text-cyber-100 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how I can help secure your organization&apos;s digital assets 
              with cutting-edge cybersecurity strategies and implementations.
            </p>
            <button className="bg-white text-cyber-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyber-50 transition-colors duration-300">
              Start a Conversation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
