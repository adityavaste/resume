'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Send, MapPin, Clock } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'adityavaste@gmail.com',
    href: 'mailto:adityavaste@gmail.com',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: '/in/aditya-vaste-777b402a8',
    href: 'https://linkedin.com/in/aditya-vaste-777b402a8',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: '@adityavaste',
    href: 'https://github.com/adityavaste',
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const form = new FormData()
      form.append('name', formData.name)
      form.append('email', formData.email)
      form.append('message', formData.message)

      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwus3IYXkI9tzVuQ3cGFteUeUe6QilhNhM7oU-8j0PgIwT_s3OxVpQ4W_4bhSzUNo0ySw/exec', // 👈 replace this
        {
          method: 'POST',
          body: form,
        }
      )

      await response.text()

      alert('Message sent successfully!')

      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      console.error(error)
      alert('Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,165,0,0.08),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get In Touch
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let&apos;s Work Together
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss cloud architecture?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground">
                        {link.label}
                      </div>
                      <div className="font-medium">{link.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Availability</h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  Remote / India
                </div>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  Full-time & Freelance
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-xl p-6 space-y-6"
            >
              <h3 className="text-xl font-bold mb-2">
                Send a Message
              </h3>

              <input
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-secondary/50"
                required
              />

              <input
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-secondary/50"
                required
              />

              <textarea
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-secondary/50"
                required
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full gap-2"
              >
                <Send className="w-4 h-4" />
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}