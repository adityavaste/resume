"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const screenshots = [
  {
    title: "AWS EKS Dashboard",
    image: "ci-cd.png",
    projectUrl: "https://github.com/yourusername/project1",
  },
  {
    title: "Terraform Infrastructure",
    image: "terraform-infra.png",
    projectUrl: "https://github.com/yourusername/project2",
  },
  {
    title: "ArgoCD Deployment",
    image: "/argocd.png",
    projectUrl: "https://github.com/yourusername/project3",
  },
  {
    title: "Grafana Monitoring",
    image: "/grafana.png",
    projectUrl: "https://github.com/yourusername/project4",
  },
];

export function ScreenshotGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
            Portfolio Gallery
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Project Screenshots
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Screenshots from cloud infrastructure, Kubernetes, CI/CD pipelines,
            monitoring dashboards, and DevOps projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {screenshots.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group glass-card overflow-hidden rounded-xl border border-border hover:border-primary/30 transition-all"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4 flex items-center justify-between">
                <h3 className="font-medium text-foreground">{item.title}</h3>

                <ExternalLink className="w-4 h-4 text-primary" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
