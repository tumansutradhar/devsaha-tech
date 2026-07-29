"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Search, Palette, Code2, Rocket, HeartHandshake } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We listen deeply. Your goals, constraints, and target users shape every technical decision we make.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description: "Architecture blueprints, UI wireframes, and database schemas — built before a single line of code.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Develop",
    description: "Agile sprints, clean code, and weekly demos. You see real progress every step of the way.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Deploy",
    description: "Zero-downtime launches with CI/CD pipelines, automated testing, and performance monitoring.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Support",
    description: "We don't vanish post-launch. Ongoing maintenance, bug fixes, and feature scaling as you grow.",
    icon: HeartHandshake,
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-brand-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-4 leading-tight">
            How we work
          </h2>
          <p className="text-lg text-brand-muted">
            A battle-tested process that removes uncertainty and delivers predictable results.
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent" />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className="relative z-10 w-20 h-20 rounded-full glass border-brand-primary/30 flex items-center justify-center mb-6 hover:neon-glow transition-all duration-300 group">
                    <Icon size={28} className="text-brand-secondary group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <span className="text-[11px] font-mono text-brand-primary/60 tracking-[0.2em] mb-2">{step.number}</span>
                  <h3 className="text-lg font-bold text-brand-text mb-3">{step.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-6 pb-10 relative"
              >
                {/* Vertical line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-5 top-14 bottom-0 w-px bg-gradient-to-b from-brand-primary/40 to-transparent" />
                )}

                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full glass border-brand-primary/30 flex items-center justify-center z-10">
                  <Icon size={18} className="text-brand-secondary" />
                </div>

                <div>
                  <span className="text-[11px] font-mono text-brand-primary/60 tracking-[0.18em] block mb-1">{step.number}</span>
                  <h3 className="text-lg font-bold text-brand-text mb-2">{step.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
