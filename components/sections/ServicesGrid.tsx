"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { LayoutGrid, DatabaseZap, Globe, Wrench, Smartphone, CloudCog, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "High-Performance RESTful & GraphQL APIs",
    description: "Secure, scalable, low-latency API architectures built with Django REST Framework, Node.js, and Python.",
    icon: LayoutGrid,
    featured: true,
  },
  {
    title: "Database Optimization",
    description: "Advanced query tuning, geospatial indexing (PostGIS/GeoJSON), and Redis caching for high-throughput data flows.",
    icon: DatabaseZap,
    featured: false,
  },
  {
    title: "Full-Stack Web Apps",
    description: "Modern, reactive interfaces with Next.js & React, backed by robust enterprise-grade server infrastructure.",
    icon: Globe,
    featured: false,
  },
  {
    title: "System Refactoring & Audits",
    description: "Modernizing legacy systems, removing technical debt, and implementing type-safe CI/CD pipelines.",
    icon: Wrench,
    featured: false,
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications built with React Native — performant, polished, and production-ready.",
    icon: Smartphone,
    featured: false,
  },
  {
    title: "Cloud & DevOps",
    description: "AWS deployments, Docker/Kubernetes orchestration, and automated pipelines for reliable, scalable infrastructure.",
    icon: CloudCog,
    featured: false,
  },
]

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-text">
              What we build
            </h2>
            <p className="text-lg text-brand-muted">
              End-to-end engineering from architecture to deployment — everything your product needs to scale.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-text transition-colors text-sm font-medium whitespace-nowrap"
          >
            Discuss your project <ArrowRight size={16} />
          </Link>
        </div>

        {/* Bento Grid: 1 large hero + 5 smaller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`${service.featured ? "lg:col-span-2" : ""}`}
              >
                <div
                  className={`h-full p-7 rounded-2xl border transition-all duration-300 group hover:border-brand-primary/50 ${
                    service.featured
                      ? "bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5 border-brand-primary/30"
                      : "bg-brand-surface border-brand-border/40"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:neon-glow transition-all duration-300 ${
                      service.featured
                        ? "bg-brand-primary/20 border border-brand-primary/30"
                        : "bg-brand-primary/10"
                    }`}
                  >
                    <Icon size={24} className="text-brand-secondary" />
                  </div>

                  <h3 className={`font-bold text-brand-text mb-3 ${service.featured ? "text-xl" : "text-base"}`}>
                    {service.title}
                  </h3>
                  <p className={`text-brand-muted leading-relaxed ${service.featured ? "text-base" : "text-sm"}`}>
                    {service.description}
                  </p>

                  {service.featured && (
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-text transition-colors text-sm font-medium mt-6"
                    >
                      Start with this service <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
