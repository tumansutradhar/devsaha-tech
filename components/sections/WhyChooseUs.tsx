"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Clock, MessageSquare, ShieldCheck, BrainCircuit, Users, Zap } from "lucide-react"

const differentiators = [
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We set realistic milestones and hit them. No missed sprints, no last-minute surprises — just consistent execution.",
  },
  {
    icon: MessageSquare,
    title: "Radical Transparency",
    description: "Weekly progress updates, open Slack channels, and honest communication. You're never left guessing.",
  },
  {
    icon: ShieldCheck,
    title: "Post-Launch Support",
    description: "We stick around after go-live. Bug fixes, performance monitoring, and feature scaling are all part of the deal.",
  },
  {
    icon: BrainCircuit,
    title: "Deep Technical Expertise",
    description: "From complex database optimization to microservices architecture — our solutions are engineered to last.",
  },
  {
    icon: Users,
    title: "Dedicated Team Model",
    description: "You work with the same engineers throughout your project — no handoffs, no outsourcing, no knowledge gaps.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "MVPs in weeks, not months. We move fast without cutting corners on code quality or security.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid z-0 opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Heading */}
          <div className="lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-6 leading-tight">
              Why businesses choose DevSaha Tech
            </h2>
            <p className="text-lg text-brand-muted leading-relaxed mb-8">
              There are hundreds of dev agencies. Here&apos;s what makes us the ones our clients return to — and refer.
            </p>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl glass border-brand-primary/30">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-brand-text font-medium">Currently accepting new projects</span>
            </div>
          </div>

          {/* Right: Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiators.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 rounded-xl bg-brand-surface border border-brand-border/40 hover:border-brand-primary/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:neon-glow transition-all duration-300">
                    <Icon size={20} className="text-brand-secondary" />
                  </div>
                  <h3 className="font-bold text-brand-text mb-2">{item.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
