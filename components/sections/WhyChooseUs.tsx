"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiMessageSquare, FiZap } from "react-icons/fi";
import { GoShieldCheck } from "react-icons/go";
import { LuBrainCircuit } from "react-icons/lu";
import { HiUsers } from "react-icons/hi";

const differentiators = [
  {
    icon: AiOutlineClockCircle,
    title: "On-Time Delivery",
    description: "We set realistic milestones and hit them. No missed sprints, no last-minute surprises — just consistent execution.",
  },
  {
    icon: FiMessageSquare,
    title: "Radical Transparency",
    description: "Weekly progress updates, open Slack channels, and honest communication. You're never left guessing.",
  },
  {
    icon: GoShieldCheck,
    title: "Post-Launch Support",
    description: "We stick around after go-live. Bug fixes, performance monitoring, and feature scaling.",
  },
  {
    icon: LuBrainCircuit,
    title: "Deep Technical Expertise",
    description: "From complex database optimization to microservices architecture — engineered to last.",
  },
  {
    icon: HiUsers,
    title: "Dedicated Team Model",
    description: "Same engineers throughout — no handoffs, no outsourcing, no knowledge gaps.",
  },
  {
    icon: FiZap,
    title: "Fast Turnaround",
    description: "MVPs in weeks, not months. We move fast without cutting corners on quality or security.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid z-0 opacity-20" />

      <div className="site-container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-6 leading-tight">
            Why businesses choose DevSaha Tech
          </h2>
          <p className="text-lg text-brand-muted leading-relaxed mb-8">
            There are hundreds of dev agencies. Here&apos;s what makes us the ones our clients return to — and refer.
          </p>
          <div className="inline-flex items-center gap-3 px-5 py-3 glass-card">
            <div className="w-2 h-2 rounded-full bg-brand-success animate-pulse" />
            <span className="text-sm text-brand-text font-medium">Currently accepting new projects</span>
          </div>
        </div>

        {/* Uniform Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {differentiators.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-6 min-h-55 bg-brand-surface border border-brand-border/40 hover:border-brand-primary/40 transition-all duration-300 group flex flex-col"
              >
                <div className="icon-chip mb-4 group-hover:neon-glow shrink-0">
                  <Icon size={20} strokeLinecap="square" strokeLinejoin="miter" className="text-brand-secondary" />
                </div>
                <h3 className="font-bold text-brand-text mb-2">{item.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{item.description}</p>

                <span className="u-index absolute bottom-4 right-5 text-brand-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
