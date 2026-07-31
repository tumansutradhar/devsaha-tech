"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RiArrowRightUpLine } from "react-icons/ri";
import { CgArrowRight } from "react-icons/cg";
import Link from "next/link"

const meta = [
  { label: "Based In", value: "Katwa, West Bengal, India" },
  { label: "Focus", value: "Full-Stack & Backend Engineering" },
]

const stats = [
  { value: "5+", label: "Projects Shipped" },
  { value: "1+", label: "Years Building" },
  { value: "100%", label: "Client Retention" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-dvh flex flex-col justify-between overflow-hidden pt-16 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid z-0 opacity-40" />

      {/* Meta row */}
      <div className="site-container relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {meta.map((m, i) => (
          <div key={i} className="u-mono text-brand-muted">
            <span className="block opacity-50 mb-1 font-semibold">{m.label}</span>
            <strong className="text-brand-text font-medium normal-case tracking-normal text-[0.875rem]!">{m.value}</strong>
          </div>
        ))}
        <div className="u-mono text-brand-muted col-span-2 sm:col-span-2 sm:text-right">
          <span className="block opacity-50 mb-1 font-semibold">Status</span>
          <strong className="text-brand-primary font-medium normal-case tracking-normal text-[0.875rem]!">Accepting New Projects</strong>
        </div>
      </div>

      {/* Headline */}
      <div className="site-container relative z-10 py-12 sm:py-16 lg:py-20 flex-1 flex items-center">
        <h1 className="sr-only">
          DevSaha Tech - Best Website Development Company in Bardhaman, Katwa, and West Bengal. We offer full stack web development, scalable backends, and budget website solutions.
        </h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="u-display text-brand-text text-[13vw] sm:text-[9vw] lg:text-[6.5vw] max-w-6xl"
        >
          We build backends
          <br />
          your business can{" "}
          <span className="bg-brand-primary text-black px-2 inline-block">scale</span> on.
        </motion.h2>
      </div>

      {/* Bottom row: lede + CTA + stats */}
      <div className="site-container relative z-10 grid lg:grid-cols-2 gap-8">
        <div>
          <p className="text-lg text-brand-muted leading-relaxed max-w-[52ch] mb-6">
            DevSaha Tech delivers high-performance web apps, secure APIs, and robust databases — so your product can handle real users, real load, and real growth.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="u-mono text-xs px-7 gap-2" asChild>
              <Link href="#contact">
                Let&apos;s Talk <RiArrowRightUpLine size={16} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="u-mono text-xs px-7 gap-2" asChild>
              <Link href="#portfolio">
                View Our Work <CgArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-end lg:justify-end gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
            >
              <p className="u-display text-3xl lg:text-4xl text-brand-text">{s.value}</p>
              <p className="u-mono text-brand-muted mt-1 font-semibold">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
