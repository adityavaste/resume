'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: 'AWS Solutions Architect',
    level: 'Professional',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-SAP-XXXXX',
    color: 'primary',
  },
  {
    title: 'AWS Developer',
    level: 'Associate',
    issuer: 'Amazon Web Services',
    date: '2022',
    credentialId: 'AWS-DVA-XXXXX',
    color: 'primary',
  },
  {
    title: 'Certified Kubernetes Administrator',
    level: 'CKA',
    issuer: 'Cloud Native Computing Foundation',
    date: '2023',
    credentialId: 'CKA-XXXXX',
    color: 'accent',
  },
  {
    title: 'Certified Kubernetes Application Developer',
    level: 'CKAD',
    issuer: 'Cloud Native Computing Foundation',
    date: '2022',
    credentialId: 'CKAD-XXXXX',
    color: 'accent',
  },
]

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Certifications
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Professional Credentials
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise in cloud and container technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-${cert.color}/10 group-hover:bg-${cert.color}/20 transition-colors`}>
                  <Award className={`w-8 h-8 text-${cert.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-foreground">{cert.title}</h3>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {cert.level}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-muted-foreground">Issued: {cert.date}</span>
                    <button className="flex items-center gap-1 text-xs text-primary hover:underline">
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
