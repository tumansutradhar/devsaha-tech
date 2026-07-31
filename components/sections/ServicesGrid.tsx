"use client"

import * as React from "react"
import { IoMdAdd } from "react-icons/io";
import { CgArrowRight } from "react-icons/cg";
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "REST & GraphQL APIs",
    description: "Secure, scalable, low-latency API architectures built with Django REST Framework, Node.js, and Python.",
    tags: ["Django REST", "Node.js", "Python", "GraphQL"],
  },
  {
    title: "Database Optimization",
    description: "Advanced query tuning, geospatial indexing (PostGIS/GeoJSON), and Redis caching for high-throughput data flows.",
    tags: ["PostgreSQL", "PostGIS", "Redis", "Indexing"],
  },
  {
    title: "Full-Stack Web Apps",
    description: "Modern, reactive interfaces with Next.js & React, backed by robust enterprise-grade server infrastructure.",
    tags: ["Next.js", "React", "TypeScript", "SSR"],
  },
  {
    title: "System Refactoring & Audits",
    description: "Modernizing legacy systems, removing technical debt, and implementing type-safe CI/CD pipelines.",
    tags: ["Audits", "CI/CD", "Migrations", "Type Safety"],
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications built with React Native — performant, polished, and production-ready.",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    title: "Cloud & DevOps",
    description: "AWS deployments, Docker/Kubernetes orchestration, and automated pipelines for reliable, scalable infrastructure.",
    tags: ["AWS", "Docker", "Kubernetes"],
  },
]

export function ServicesGrid() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <section id="services">
      <div className="site-container flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pb-8">
        <div>
          <h2 className="u-display text-4xl md:text-6xl text-brand-text">What we build</h2>
        </div>
        <Link
          href="#contact"
          className="u-mono text-brand-secondary hover:text-brand-text transition-colors flex items-center gap-2 font-semibold"
        >
          Discuss your project <CgArrowRight size={14} />
        </Link>
      </div>

      <div className="site-container">
        {services.map((service, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={service.title}
              className={`group border-b border-brand-primary transition-colors duration-200 ${isOpen
                ? "bg-brand-text text-brand-background"
                : "hover:bg-brand-text hover:text-brand-background"
                }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full grid grid-cols-[auto_1fr_auto] items-center gap-4 sm:gap-6 px-4 py-6 text-left"
              >
                <span className="u-index transition-colors duration-200 text-brand-muted font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={`u-display text-xl sm:text-3xl md:text-4xl truncate transition-colors duration-200 ${isOpen ? "text-brand-primary" : "group-hover:text-brand-primary"}`}>
                  {service.title}
                </h3>
                <IoMdAdd
                  size={24}
                  className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                />
              </button>

              <div className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <div className="px-4 pb-8 pt-2 grid md:grid-cols-[1.4fr_1fr_auto] gap-6 items-end border-t border-brand-background/20">
                    <p className="text-sm sm:text-base leading-relaxed max-w-[50ch] pt-4">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 pt-4">
                      {service.tags.map((tag) => (
                        <li key={tag} className="u-mono u-arrow text-xs font-semibold">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="primary"
                      size="lg"
                      className="u-mono text-xs px-7 gap-2 w-max"
                      asChild
                      tabIndex={isOpen ? undefined : -1}
                      aria-hidden={!isOpen}
                    >
                      <Link href="#contact">
                        Start with this <CgArrowRight size={16} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
