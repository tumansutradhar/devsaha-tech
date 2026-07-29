"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Zap, Activity, ArrowRight } from "lucide-react"
import Link from "next/link"

const stats = [
  { value: "50+", label: "Projects Shipped" },
  { value: "3+", label: "Years Building" },
  { value: "100%", label: "Client Retention" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid z-0 opacity-50" />
      <div className="absolute inset-0 bg-radial-glow z-0" />

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.05] text-brand-text">
            We build backends your business can{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary text-glow">
              scale on.
            </span>
          </h1>
          <p className="text-lg text-brand-muted mb-8 leading-relaxed max-w-[52ch]">
            DevSaha Tech delivers high-performance web apps, secure APIs, and robust databases — so your product can handle real users, real load, and real growth.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Button size="lg" className="px-8 text-base shadow-[0_0_20px_rgba(138,43,226,0.3)]" asChild>
              <Link href="#contact">Let&apos;s Talk</Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 text-base gap-2" asChild>
              <Link href="#portfolio">
                View Our Work <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          {/* Stats Row */}
          <div className="flex items-center gap-8 pt-6 border-t border-brand-border/20">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-2xl font-bold text-brand-secondary">{s.value}</p>
                <p className="text-xs text-brand-muted uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual Element: Floating Terminal & Metrics */}
        <div className="relative h-[500px] hidden lg:block">
          {/* Main Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] z-10"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="glass rounded-xl overflow-hidden shadow-2xl border-brand-primary/40"
            >
              <div className="bg-brand-background px-4 py-2 border-b border-brand-border flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-brand-muted font-mono">system_architecture.py</span>
              </div>
              <div className="p-6 bg-brand-surface font-mono text-sm leading-relaxed overflow-x-auto">
                <p className="text-pink-500">import <span className="text-brand-secondary">antigravity</span></p>
                <p className="text-pink-500 mt-2">from <span className="text-brand-text">core.infrastructure</span> import <span className="text-brand-secondary">HighPerformanceSystem</span></p>
                <p className="text-pink-500 mt-2">def <span className="text-blue-400">deploy_system</span>():</p>
                <p className="text-brand-text ml-4">system = HighPerformanceSystem(</p>
                <p className="text-brand-primary ml-8">db_engine=<span className="text-green-400">&quot;PostgreSQL&quot;</span>,</p>
                <p className="text-brand-primary ml-8">api_layer=<span className="text-green-400">&quot;Django_REST&quot;</span>,</p>
                <p className="text-brand-primary ml-8">frontend=<span className="text-green-400">&quot;Next.js_AppRouter&quot;</span>,</p>
                <p className="text-brand-text ml-4">)</p>
                <p className="text-brand-text ml-4">return system.<span className="text-blue-400">ignite</span>()</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Metric Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-16 left-0 z-20"
          >
            <motion.div
              animate={{ y: [-5, 10, -5] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="glass p-4 rounded-xl flex items-center gap-4 bg-brand-surface"
            >
              <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center">
                <Zap size={20} className="text-brand-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-text">&lt; 38ms</p>
                <p className="text-xs text-brand-muted uppercase tracking-wider">API Latency</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Metric Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute bottom-16 right-0 z-20"
          >
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
              className="glass p-4 rounded-xl flex items-center gap-4 bg-brand-surface"
            >
              <div className="w-10 h-10 rounded-full bg-brand-secondary/20 flex items-center justify-center">
                <Activity size={20} className="text-brand-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-text">99.9%</p>
                <p className="text-xs text-brand-muted uppercase tracking-wider">Uptime Architecture</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
