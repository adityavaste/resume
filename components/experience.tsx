'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Infrastructure Automation',
    company: 'Cloud Solutions Inc.',
    period: '2023 - Present',
    description: 'Led infrastructure automation initiatives using Terraform and Ansible, reducing deployment time by 70% and achieving 99.9% uptime.',
    technologies: ['Terraform', 'Ansible', 'Python', 'AWS'],
  },
  {
    title: 'Kubernetes Administration',
    company: 'TechScale Startup',
    period: '2021 - 2023',
    description: 'Managed production EKS clusters serving 10M+ monthly requests. Implemented GitOps workflows with ArgoCD and Helm.',
    technologies: ['Kubernetes', 'EKS', 'Helm', 'ArgoCD'],
  },
  {
    title: 'CI/CD Implementation',
    company: 'DevOps Agency',
    period: '2019 - 2021',
    description: 'Designed and implemented CI/CD pipelines for 20+ microservices, enabling daily deployments with zero-downtime releases.',
    technologies: ['GitHub Actions', 'Jenkins', 'Docker', 'AWS CodePipeline'],
  },
  {
    title: 'Cloud Migration Projects',
    company: 'Enterprise Corp',
    period: '2017 - 2019',
    description: 'Successfully migrated legacy infrastructure to AWS, reducing operational costs by 40% while improving performance.',
    technologies: ['AWS', 'Docker', 'MySQL', 'Redis'],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,165,0,0.05),transparent_60%)]" />
      
      <div className="max-w-5xl mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Career Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Experience Timeline
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1.5 md:-translate-x-1/2 mt-6" />

              {/* Content */}
              <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all">
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                  <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{exp.company}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
