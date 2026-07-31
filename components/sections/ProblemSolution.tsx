"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MdCheckCircleOutline } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoTrendingDownSharp } from "react-icons/io5";
import { BsShieldSlash } from "react-icons/bs";
import { LiaPuzzlePieceSolid } from "react-icons/lia";

const problems = [
  {
    pain: "Your website or app is painfully slow",
    painIcon: IoTrendingDownSharp,
    solution: "We architect high-performance backends with optimized databases, caching layers, and sub-50ms API responses.",
    delay: 0,
  },
  {
    pain: "You've burned money on devs who disappeared mid-project",
    painIcon: BsShieldSlash,
    solution: "We work with full transparency — dedicated team, weekly updates, milestone-based delivery, and contracts that protect you.",
    delay: 0.1,
  },
  {
    pain: "Your legacy codebase is holding your business back",
    painIcon: AiOutlineClockCircle,
    solution: "We modernize existing systems systematically — removing technical debt, refactoring architecture, and implementing CI/CD.",
    delay: 0.2,
  },
  {
    pain: "You need a scalable backend but don't know where to start",
    painIcon: LiaPuzzlePieceSolid,
    solution: "We translate your business requirements into a battle-tested tech stack — from MVP to enterprise-ready infrastructure.",
    delay: 0.3,
  },
]

export function ProblemSolution() {
  return (
    <section id="problem-solution" className="section-spacing relative overflow-hidden">
      <div className="site-container relative z-10">
        <div className="max-w-xl mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-4 leading-tight">
            We understand what keeps you up at night.
          </h2>
          <p className="text-lg text-brand-muted leading-relaxed">
            Every business that comes to us has faced at least one of these. Here&apos;s how we turn each problem into a solved outcome.
          </p>
        </div>

        <div>
          {problems.map((item, i) => {
            const PainIcon = item.painIcon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-2 gap-8 pb-8 group"
              >
                {/* Problem */}
                <div className="flex items-start gap-4">
                  <div className="icon-chip-danger mt-0.5">
                    <PainIcon size={18} className="text-brand-danger" />
                  </div>
                  <div>
                    <span className="text-[12px] font-mono uppercase tracking-[0.18em] text-brand-danger mb-2 block font-semibold">The Problem</span>
                    <p className="text-lg font-semibold text-brand-muted leading-relaxed">
                      {item.pain}
                    </p>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex items-start gap-4">
                  <div className="icon-chip mt-0.5">
                    <MdCheckCircleOutline size={18} className="text-brand-primary" />
                  </div>
                  <div>
                    <span className="text-[12px] font-mono uppercase tracking-[0.18em] text-brand-primary mb-2 block font-semibold">Our Solution</span>
                    <p className="text-lg font-semibold text-brand-text leading-relaxed">
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
