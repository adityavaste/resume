'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cloud, Server, Shield, Cpu } from 'lucide-react'

const highlights = [
  { icon: Cloud, label: 'Cloud Architecture', value: '5+', desc: 'Production Systems' },
  { icon: Server, label: 'Infrastructure', value: '99.9%', desc: 'Uptime Achieved' },
  { icon: Shield, label: 'Security', value: '100%', desc: 'Compliance Rate' },
  { icon: Cpu, label: 'Automation', value: '80%', desc: 'Tasks Automated' },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
              Building the Infrastructure That Powers Innovation
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m an AWS Cloud Engineer with extensive experience designing and implementing 
                scalable SaaS platforms. My expertise spans across cloud architecture, container 
                orchestration, and infrastructure automation.
              </p>
              <p>
                With a deep focus on <span className="text-foreground font-medium">Kubernetes</span>, 
                {' '}<span className="text-foreground font-medium">Terraform</span>, 
                {' '}<span className="text-foreground font-medium">CI/CD pipelines</span>, and 
                {' '}<span className="text-foreground font-medium">security best practices</span>, 
                I help organizations build reliable, secure, and cost-effective cloud solutions.
              </p>
              <p>
                I believe in infrastructure as code, GitOps principles, and creating developer 
                experiences that accelerate delivery while maintaining operational excellence.
              </p>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-foreground mb-1">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
