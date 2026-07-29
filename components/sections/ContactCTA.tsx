"use client"

import * as React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { submitContactForm } from "@/actions/contact"

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp / Phone",
    value: "+91 62951 11477",
    href: "https://wa.me/916295111477",
  },
  {
    icon: Mail,
    label: "Email",
    value: "devsahatech@gmail.com",
    href: "mailto:devsahatech@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Katwa, West Bengal, India",
    href: "#",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "We reply within 24 hours",
    href: "#",
  },
]

const projectTypes = [
  "REST / GraphQL API",
  "Full-Stack Web App",
  "Mobile App",
  "UI/UX Design",
  "System Audit / Optimization",
  "Cloud & DevOps Setup",
  "Other",
]

const budgetRanges = [
  "Under ₹50,000",
  "₹50,000 – ₹1,50,000",
  "₹1,50,000 – ₹5,00,000",
  "₹5,00,000+",
  "Let's discuss",
]

export function ContactCTA() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    const formData = new FormData(e.currentTarget)
    
    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        setSubmitted(true)
      } else {
        setError(result.error || 'Something went wrong.')
      }
    } catch (err) {
      setError('An unexpected error occurred.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-30 z-0" />
      <div className="absolute inset-0 bg-radial-glow opacity-50 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Heading + Contact Info */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-4 leading-tight">
              Let&apos;s build something great together.
            </h2>
            <p className="text-lg text-brand-muted mb-10 leading-relaxed">
              Tell us about your project. We&apos;ll get back to you within 24 hours with an honest assessment and a clear path forward.
            </p>

            <div className="space-y-5">
              {contactInfo.map((item, i) => {
                const Icon = item.icon
                const isLink = item.href !== "#"
                const Wrapper = isLink ? "a" : "div"
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <Wrapper
                      {...(isLink ? { href: item.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl glass border-brand-primary/30 flex items-center justify-center flex-shrink-0 group-hover:neon-glow transition-all duration-300">
                        <Icon size={20} className="text-brand-secondary" />
                      </div>
                      <div>
                        <p className="text-xs text-brand-muted uppercase tracking-wider mb-0.5">{item.label}</p>
                        <p className="text-brand-text font-medium group-hover:text-brand-secondary transition-colors">{item.value}</p>
                      </div>
                    </Wrapper>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 border-brand-primary/25"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <CheckCircle2 size={48} className="text-green-400" />
                <h3 className="text-2xl font-bold text-brand-text">Message Received!</h3>
                <p className="text-brand-muted">
                  Thanks for reaching out. Ranadeb will personally review your project and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-brand-secondary text-sm hover:underline mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-text mb-2" htmlFor="contact-name">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Rahul Kumar"
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-text mb-2" htmlFor="contact-email">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-text mb-2" htmlFor="contact-project-type">
                    Project Type
                  </label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm"
                  >
                    <option value="" className="bg-gray-900">Select project type</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} className="bg-gray-900">{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-text mb-2" htmlFor="contact-budget">
                    Budget Range
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm"
                  >
                    <option value="" className="bg-gray-900">Select budget range</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b} className="bg-gray-900">{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-text mb-2" htmlFor="contact-message">
                    Tell us about your project
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Describe your project goals, current challenges, and timeline..."
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                <Button type="submit" disabled={loading} className="w-full gap-2 text-base py-3 disabled:opacity-70">
                  <Send size={16} />
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>

                <p className="text-xs text-brand-muted text-center">
                  No spam. No cold calls. Just an honest conversation about your project.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
