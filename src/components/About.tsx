'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, MapPin, User } from 'lucide-react'

const About = () => {
  const achievements = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "M.Tech in Computer Science & Engineering",
      detail: "Advanced studies in cybersecurity and system architecture"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "GATE Qualified",
      description: "GATE CSE-2024 Achievement",
      detail: "Demonstrated excellence in Computer Science fundamentals"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "UGC NET Qualified",
      description: "UGC NET-2024 Achievement",
      detail: "National eligibility for academic and research positions"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      description: "New Delhi, India",
      detail: "Available for remote and on-site opportunities"
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
            About <span className="text-cyber-600">Me</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Passionate cybersecurity professional dedicated to protecting digital assets and ensuring robust security infrastructure.
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
                {/* <img 
                  src="/profile.jpg" 
                  alt="Vikram Prasad Gupta" 
                  className="w-full h-full object-cover rounded-2xl"
                /> */}
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
                Professional Journey
              </h3>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  As a dedicated <span className="text-cyber-600 font-semibold">cybersecurity professional</span>, 
                  I bring a unique blend of government sector experience and private industry expertise to the field 
                  of information security.
                </p>
                
                <p>
                  My journey began with a strong academic foundation in Computer Science & Engineering, 
                  enhanced by achievements in <span className="text-blue-600 font-semibold">GATE CSE-2024</span> and 
                  <span className="text-purple-600 font-semibold"> UGC NET-2024</span>, demonstrating my commitment 
                  to continuous learning and excellence.
                </p>
                
                <p>
                  I specialize in <span className="text-cyber-600 font-semibold">IT Infrastructure Security</span>, 
                  with hands-on experience in SIEM tools, vulnerability assessments, and security compliance frameworks. 
                  My work spans from government security protocols to enterprise-level security implementations.
                </p>
                
                <p>
                  Currently, I&apos;m focused on advancing cybersecurity practices through innovative solutions, 
                  threat detection methodologies, and secure system architectures that protect against evolving 
                  cyber threats.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-600">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Core Competencies</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Cybersecurity", "IT Infrastructure", "SIEM Tools", "Python", "Linux Administration",
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
                <div className="text-cyber-100">Years of Experience</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-blue-100">Security Assessments</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
