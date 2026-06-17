"use client";

import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const footerLinks = [
  { icon: FaGithub, href: "https://github.com/adityavaste", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/aditya-vaste-777b402a8",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:adityavaste@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <a href="#" className="text-2xl font-bold gradient-text">
              Aditya
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              DevOps & Cloud Engineer
            </p>

            <a
              href="mailto:adityavaste@gmail.com"
              className="text-sm text-primary hover:underline mt-1 block"
            >
              adityavaste@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary" />
            <span>using Next.js & Tailwind</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground"
        >
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
