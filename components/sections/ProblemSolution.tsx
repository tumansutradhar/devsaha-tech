"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { AlertTriangle, CheckCircle2, Clock, TrendingDown, ShieldOff, Puzzle } from "lucide-react"

const problems = [
  {
    pain: "Your website or app is painfully slow",
    painIcon: TrendingDown,
    solution: "We architect high-performance backends with optimized databases, caching layers, and sub-50ms API responses.",
    delay: 0,
  },
  {
    pain: "You've burned money on devs who disappeared mid-project",
    painIcon: ShieldOff,
    solution: "We work with full transparency — dedicated team, weekly updates, milestone-based delivery, and contracts that protect you.",
    delay: 0.1,
  },
  {
    pain: "Your legacy codebase is holding your business back",
    painIcon: Clock,
    solution: "We modernize existing systems systematically — removing technical debt, refactoring architecture, and implementing CI/CD.",
    delay: 0.2,
  },
  {
    pain: "You need a scalable backend but don't know where to start",
    painIcon: Puzzle,
    solution: "We translate your business requirements into a battle-tested tech stack — from MVP to enterprise-ready infrastructure.",
    delay: 0.3,
  },
]

export function ProblemSolution() {
  return (
    <section id="problem-solution" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-40 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-4 leading-tight">
            We understand what keeps you up at night.
          </h2>
          <p className="text-lg text-brand-muted leading-relaxed">
            Every business that comes to us has faced at least one of these. Here&apos;s how we turn each problem into a solved outcome.
          </p>
        </div>

        <div className="divide-y divide-brand-border/20">
          {problems.map((item, i) => {
            const PainIcon = item.painIcon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-2 gap-8 py-10 group"
              >
                {/* Problem */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mt-0.5">
                    <PainIcon size={18} className="text-red-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-red-400/70 mb-2 block">The Problem</span>
                    <p className="text-lg font-semibold text-brand-text leading-snug">
                      {item.pain}
                    </p>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center mt-0.5">
                    <CheckCircle2 size={18} className="text-brand-secondary" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-brand-secondary/70 mb-2 block">Our Solution</span>
                    <p className="text-brand-muted leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
