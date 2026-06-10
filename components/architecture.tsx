'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Cloud, 
  Database, 
  Shield, 
  GitBranch, 
  Activity, 
  Server,
  Lock,
  Zap,
  Layers,
  MessageSquare
} from 'lucide-react'

const architectureHighlights = [
  { icon: Layers, title: 'Multi-AZ VPC Design', desc: 'Highly available network architecture across availability zones' },
  { icon: Server, title: 'Amazon EKS Cluster', desc: 'Managed Kubernetes for container orchestration' },
  { icon: Database, title: 'MongoDB Atlas', desc: 'Cloud-native database with auto-scaling' },
  { icon: Zap, title: 'Redis Caching', desc: 'In-memory caching for high performance' },
  { icon: MessageSquare, title: 'SQS Background Jobs', desc: 'Async job processing with message queues' },
  { icon: GitBranch, title: 'GitOps with ArgoCD', desc: 'Declarative continuous deployment' },
  { icon: Activity, title: 'CI/CD Pipeline', desc: 'Automated builds with GitHub Actions' },
  { icon: Activity, title: 'Prometheus & Grafana', desc: 'Real-time monitoring and alerting' },
  { icon: Shield, title: 'Security Stack', desc: 'IAM, KMS, WAF, Secrets Manager' },
  { icon: Cloud, title: 'Auto-Scaling', desc: 'Dynamic resource allocation' },
]

export function Architecture() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,200,180,0.08),transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Featured Project
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Production SaaS Platform on AWS
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A comprehensive cloud architecture designed for high availability, security, and scalability
          </p>
        </motion.div>

        {/* Architecture Diagram Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 mb-12 glow-teal"
        >
          <div className="relative">
            {/* Architecture Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Traffic Layer */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-accent uppercase tracking-wider">Traffic Layer</h4>
                <div className="glass rounded-xl p-4 space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Cloud className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground">Route 53</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground">CloudFront CDN</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground">AWS WAF</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Server className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground">Application LB</span>
                  </div>
                </div>
              </div>

              {/* Compute Layer */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-accent uppercase tracking-wider">Compute Layer</h4>
                <div className="glass rounded-xl p-4 space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg border border-primary/30">
                    <Server className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground">Amazon EKS</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 bg-secondary/30 rounded-lg text-center">
                      <span className="text-xs text-muted-foreground">API Pods</span>
                    </div>
                    <div className="p-2 bg-secondary/30 rounded-lg text-center">
                      <span className="text-xs text-muted-foreground">Worker Pods</span>
                    </div>
                    <div className="p-2 bg-secondary/30 rounded-lg text-center">
                      <span className="text-xs text-muted-foreground">Frontend</span>
                    </div>
                    <div className="p-2 bg-secondary/30 rounded-lg text-center">
                      <span className="text-xs text-muted-foreground">ArgoCD</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <GitBranch className="w-5 h-5 text-accent" />
                    <span className="text-sm text-foreground">GitHub Actions</span>
                  </div>
                </div>
              </div>

              {/* Data Layer */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-accent uppercase tracking-wider">Data Layer</h4>
                <div className="glass rounded-xl p-4 space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Database className="w-5 h-5 text-accent" />
                    <span className="text-sm text-foreground">MongoDB Atlas</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Zap className="w-5 h-5 text-accent" />
                    <span className="text-sm text-foreground">Redis Cache</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <MessageSquare className="w-5 h-5 text-accent" />
                    <span className="text-sm text-foreground">Amazon SQS</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Lock className="w-5 h-5 text-accent" />
                    <span className="text-sm text-foreground">Secrets Manager</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Monitoring Bar */}
            <div className="mt-6 glass rounded-xl p-4">
              <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Observability</h4>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Prometheus</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">Grafana</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-chart-3" />
                  <span className="text-sm text-muted-foreground">CloudWatch</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {architectureHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="glass-card rounded-xl p-4 text-center hover:border-primary/30 transition-all group"
            >
              <item.icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="text-sm font-medium text-foreground mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
