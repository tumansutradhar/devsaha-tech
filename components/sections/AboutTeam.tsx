"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { IoGlobeOutline } from "react-icons/io5";
import { FaLinkedinIn, } from "react-icons/fa6";

const team = [
  {
    name: "Ranadeb Saha",
    role: "Founder & Lead Full Stack Engineer",
    bio: "Ranadeb built DevSaha Tech with one mission: to deliver engineering that actually works in production. He architects scalable backends, leads client engagements, and writes code that ships on time.",
    image: "/team-ranadeb.png",
    linkedin: "#",
    portfolio: "https://ranadebsaha.netlify.app/",
    gradient: "from-brand-primary/20 to-brand-secondary/10",
  },
  {
    name: "Tuman Sutradhar",
    role: "UI/UX Designer",
    bio: "Tuman bridges the gap between business goals and user experience. He crafts interfaces that are both visually sharp and deeply intuitive — turning complex flows into simple, beautiful products.",
    image: "/team-tuman.png",
    linkedin: "#",
    portfolio: "https://tumansutradhar.me",
    gradient: "from-blue-500/20 to-brand-primary/10",
  },
  {
    name: "Sharanya Chowdhury",
    role: "Software Development Engineer",
    bio: "Sharanya is the team's execution engine — building clean, type-safe frontend systems and integrating APIs with precision. He ensures every feature we ship is bulletproof on all devices.",
    image: "/team-sharanya-v2.png",
    linkedin: "#",
    portfolio: "https://www.sharanya.tech/",
    gradient: "from-brand-secondary/20 to-blue-500/10",
  },
]

const stats = [
  { value: "2026", label: "Founded" },
  { value: "3+", label: "Core Team" },
  { value: "5+", label: "Projects Delivered" },
  { value: "India", label: "Based In" },
]

export function AboutTeam() {
  return (
    <section id="about" className="section-spacing bg-brand-background">
      <div className="site-container">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-12 sm:mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-4 leading-tight">
              The team behind your product
            </h2>
            <p className="text-lg text-brand-muted leading-relaxed">
              We&apos;re a small, senior team — which means you talk directly to the people building your product. No account managers, no relay chains.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-brand-secondary mb-1">{s.value}</p>
                <p className="text-xs text-brand-muted uppercase tracking-wider">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden glass-card group"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-6">
                {/* Avatar */}
                <div className="w-20 h-20 overflow-hidden mb-4 ring-2 ring-brand-primary/30 group-hover:ring-brand-primary/60 transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-lg font-bold text-brand-text mb-0.5">{member.name}</h3>
                <p className="text-brand-secondary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-brand-muted text-sm leading-relaxed mb-5">{member.bio}</p>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-chip-sm hover:bg-brand-primary/20 hover:border-brand-primary/50"
                    title={`${member.name}'s Portfolio`}
                  >
                    <IoGlobeOutline size={14} />
                  </a>
                  <a
                    href={member.linkedin}
                    className="icon-chip-sm hover:bg-brand-primary/20 hover:border-brand-primary/50"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <FaLinkedinIn size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
