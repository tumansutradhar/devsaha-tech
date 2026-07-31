"use client"

import * as React from "react"

const techStack = ["Python", "Django REST", "Node.js", "React / Next.js", "PostgreSQL", "Redis", "TypeScript", "AWS"]

export function TrustBar() {
  const track = [...techStack, ...techStack]

  return (
    <section className="bg-brand-text text-brand-background overflow-hidden">
      <div className="marquee-track u-display text-2xl sm:text-4xl py-4">
        {track.map((tech, i) => (
          <React.Fragment key={i}>
            <span>{tech}</span>
            <span className="text-brand-primary">●</span>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
