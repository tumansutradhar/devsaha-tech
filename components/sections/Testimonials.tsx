"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { IoMdStarOutline, IoMdQuote } from "react-icons/io"

const testimonials = [
  {
    quote: "DevSaha Tech completely transformed how our marketplace handles real-time geo-queries. What used to take seconds now responds in under 50ms. Ranadeb and his team are the real deal — they delivered exactly what they promised, on schedule.",
    name: "Sarnojit Pal",
    role: "Co-founder",
    company: "HaatBazar",
    rating: 5,
    initial: "S",
    color: "bg-brand-primary",
  },
  {
    quote: "We needed a real-time community alert system built fast, and DevSaha delivered a bulletproof WebSocket architecture in just weeks. Communication was outstanding throughout — we always knew exactly where things stood.",
    name: "Rohit Ghosh",
    role: "Product Lead",
    company: "Cyber Bandhu",
    rating: 5,
    initial: "R",
    color: "bg-brand-secondary",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="section-spacing bg-brand-background relative">
      <div className="absolute inset-0 bg-radial-glow opacity-30 z-0" />

      <div className="site-container relative z-10">
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-4 leading-tight">
            What our clients say
          </h2>
          <p className="text-lg text-brand-muted leading-relaxed">
            Don&apos;t take our word for it — here&apos;s what the people who&apos;ve worked with us have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card-hover p-8 relative group"
            >
              {/* Quote icon */}
              <IoMdQuote
                size={32}
                className="text-brand-primary/20 absolute top-6 right-6 group-hover:text-brand-primary/40 transition-colors duration-300"
              />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <IoMdStarOutline key={j} size={14} className="text-brand-warning fill-brand-warning" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-brand-text/90 leading-relaxed mb-6 text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-5 border-t border-brand-border/20">
                <div className={`w-10 h-10 ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-brand-text text-sm">{t.name}</p>
                  {/* <p className="text-brand-muted text-xs">{t.company}</p> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
