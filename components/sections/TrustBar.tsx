"use client"

import * as React from "react"
import { motion } from "framer-motion"

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "3+", label: "Years Active" },
  { value: "100%", label: "Client Satisfaction" },
]

const techStack = ["Python", "Django REST", "Node.js", "React / Next.js", "PostgreSQL", "Redis", "TypeScript", "AWS"]

export function TrustBar() {
  return (
    <section className="py-14 border-y border-brand-border/20 bg-brand-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <p className="text-3xl font-bold text-brand-secondary mb-1">{s.value}</p>
              <p className="text-xs text-brand-muted uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-brand-border/20 max-w-xs mx-auto mb-8" />

        {/* Tech Stack Badges */}
        <div>
          <p className="text-center text-xs text-brand-muted uppercase tracking-[0.18em] mb-5">Built With</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-brand-primary/50 hover:bg-brand-primary/10 transition-colors cursor-default text-sm font-medium text-brand-text/90"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
