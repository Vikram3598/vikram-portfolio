'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, CheckCircle } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "Young Professional (Cyber Security)",
      company: "Department of Economic Affairs, Government of India",
      location: "North Block, New Delhi, India",
      period: "2024 - Present",
      type: "Government",
      description: "Leading cybersecurity initiatives and infrastructure security for government financial systems.",
      achievements: [
        "Implemented comprehensive SIEM solutions for financial data protection",
        "Conducted security audits for government financial applications",
        "Developed security protocols for sensitive financial transactions",
        "Led vulnerability assessment projects for critical infrastructure",
        "Collaborated with inter-departmental teams on security compliance"
      ],
      technologies: ["SIEM Tools", "Linux", "Python", "Network Security", "Compliance Frameworks","AI/ML"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Associate IT Infrastructure Specialist",
      company: "Various Private Sector Projects",
      location: "Gurgaon, Haryana, India",
      period: "2022 - 2024",
      type: "Private",
      description: "Provided cybersecurity consulting and infrastructure security solutions for private organizations.",
      achievements: [
        "Designed secure network architectures for enterprise clients",
        "Implemented endpoint security solutions and monitoring systems",
        "Conducted penetration testing and security assessments",
        "Delivered cybersecurity training to technical teams",
        "Established incident response procedures and protocols"
      ],
      technologies: ["Endpoint Security", "Penetration Testing", "Network Architecture", "Incident Response"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Research & Development",
      company: "Academic Projects",
      location: "New Delhi, India",
      period: "2020 - 2021",
      type: "Academic",
      description: "Focused on advanced cybersecurity research and development projects.",
      achievements: [
        "Researched emerging cybersecurity threats and countermeasures",
        "Developed automated security monitoring tools using Python",
        "Published research on network security protocols",
        "Contributed to open-source security projects",
        "Mentored junior students in cybersecurity fundamentals"
      ],
      technologies: ["Python", "Security Research", "Automation", "Open Source","Overleaf LaTeX", "AI/ML"],
      color: "from-cyber-500 to-cyber-600"
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Professional <span className="text-cyber-600">Experience</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A journey through cybersecurity roles spanning government, private sector, and academic research.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyber-400 via-blue-400 to-purple-400 rounded-full"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-cyber-500 rounded-full z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="mb-6">
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${exp.color} mb-3`}>
                        {exp.type}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      
                      <div className="space-y-1 text-slate-600 dark:text-slate-400">
                        <div className="flex items-center space-x-2">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-2 text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle className="w-4 h-4 text-cyber-500 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-cyber-100 dark:bg-cyber-900/30 text-cyber-700 dark:text-cyber-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { number: "3+", label: "Years Experience" },
            { number: "15+", label: "Security Projects" },
            { number: "5", label: "SIEM Implementations" },
            { number: "100%", label: "Success Rate" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-cyber-600 mb-2">{stat.number}</div>
              <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
