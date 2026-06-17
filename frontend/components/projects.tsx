"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Star, GitFork } from "lucide-react";
import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AWS EKS Platform",
    description: "Production-ready EKS platform...",
    technologies: ["Terraform", "EKS", "Helm", "Prometheus"],
    stars: 245,
    forks: 67,
    github: "https://github.com/adityavaste/finance_cluster.git",
    demo: "https://github.com/adityavaste/finance_cluster.git",
  },
  {
    title: "Terraform Infrastructure Modules",
    description: "Reusable Terraform modules...",
    technologies: ["Terraform", "AWS", "HCL", "GitHub Actions"],
    stars: 189,
    forks: 45,
    github: "https://github.com/adityavaste/finance_cluster.git",
    demo: "https://github.com/adityavaste/finance_cluster.git",
  },

  {
    title: "GitOps Deployment Platform",
    description:
      "Complete GitOps setup with ArgoCD, progressive delivery, and automated rollback capabilities.",
    technologies: ["ArgoCD", "Kubernetes", "Kustomize", "Argo Rollouts"],
    stars: 156,
    forks: 38,
    github: "#",
    demo: "#",
  },
  {
    title: "Monitoring & Observability Stack",
    description:
      "Full observability stack with Prometheus, Grafana, Loki, and custom alerting integrations.",
    technologies: ["Prometheus", "Grafana", "Loki", "AlertManager"],
    stars: 134,
    forks: 29,
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,180,0.05),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Open Source
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Open source projects and tools I&apos;ve built to solve real-world
            infrastructure challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all group flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span className="text-sm">{project.forks}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" size="sm" className="gap-2 w-full">
                    <FaGithub className="w-4 h-4" />
                    Source Code
                  </Button>
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    size="sm"
                    className="gap-2 w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Demo
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

       <motion.div
  initial={{ opacity: 0 }}
  animate={isInView ? { opacity: 1 } : {}}
  transition={{ duration: 0.6, delay: 0.5 }}
  className="text-center mt-12"
>
  <a
    href="https://github.com/adityavaste"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="outline" size="lg" className="gap-2">
      <FaGithub className="w-5 h-5" />
      View All Projects on GitHub
    </Button>
  </a>
</motion.div>
      </div>
    </section>
  );
}
