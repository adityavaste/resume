'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Cloud',
    color: 'primary',
    skills: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Route53', icon: '🌐' },
      { name: 'CloudFront', icon: '⚡' },
      { name: 'WAF', icon: '🛡️' },
      { name: 'ALB', icon: '⚖️' },
      { name: 'EKS', icon: '🚀' },
      { name: 'ECR', icon: '📦' },
      { name: 'S3', icon: '💾' },
      { name: 'CloudWatch', icon: '📊' },
      { name: 'IAM', icon: '🔐' },
      
    ],
  },
  {
    title: 'DevOps',
    color: 'accent',
    skills: [
      { name: 'Terraform', icon: '🏗️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸️' },
      { name: 'Helm', icon: '⛵' },
      { name: 'GitHub Actions', icon: '🔄' },
      { name: 'ArgoCD', icon: '🎯' },
    ],
  },
  {
    title: 'Databases',
    color: 'chart-3',
    skills: [
      { name: 'MongoDB Atlas', icon: '🍃' },
     
    ],
  },
  {
    title: 'Monitoring',
    color: 'chart-4',
    skills: [
      { name: 'Prometheus', icon: '🔥' },
      { name: 'Grafana', icon: '📈' },
      { name: 'CloudWatch', icon: '👁️' },
    ],
  },
  {
    title: 'Messaging',
    color: 'chart-5',
    skills: [
      { name: 'Amazon SQS', icon: '📨' },
    ],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,165,0,0.05),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Technical Skills
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Tools & Technologies
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building and managing cloud-native infrastructure at scale
          </p>
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full bg-${category.color}`} />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-all cursor-default"
                  >
                    <span className="text-base">{skill.icon}</span>
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
