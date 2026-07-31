"use client"

import * as React from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlinePalette, MdOutlineRocketLaunch } from "react-icons/md";
import { GrCode } from "react-icons/gr";
import { TbHeartHandshake } from "react-icons/tb";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We listen deeply. Your goals, constraints, and target users shape every technical decision we make.",
    icon: IoSearchSharp,
  },
  {
    number: "02",
    title: "Design",
    description: "Architecture blueprints, UI wireframes, and database schemas — built before a single line of code.",
    icon: MdOutlinePalette,
  },
  {
    number: "03",
    title: "Develop",
    description: "Agile sprints, clean code, and weekly demos. You see real progress every step of the way.",
    icon: GrCode,
  },
  {
    number: "04",
    title: "Deploy",
    description: "Zero-downtime launches with CI/CD pipelines, automated testing, and performance monitoring.",
    icon: MdOutlineRocketLaunch,
  },
  {
    number: "05",
    title: "Support",
    description: "We don't vanish post-launch. Ongoing maintenance, bug fixes, and feature scaling as you grow.",
    icon: TbHeartHandshake,
  },
]

function StepIcon({ Icon, isActive, size, className = "" }: { Icon: React.ElementType, isActive: boolean, size: number, className?: string }) {
  return (
    <div
      className={`relative z-10 flex items-center justify-center glass transition-all duration-500 ease-out ${isActive ? "border-brand-primary scale-105" : "border-brand-primary/30"
        } ${className}`}
    >
      <Icon
        size={size}
        strokeLinecap="square"
        strokeLinejoin="miter"
        className={`transition-all duration-500 ${isActive ? "text-brand-primary scale-110" : "text-brand-secondary"
          }`}
      />
    </div>
  )
}

export function ProcessSection() {
  // ----- Desktop: pinned horizontal scroll -----
  const pinRef = React.useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = React.useState(-1)

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  })

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.floor(latest * steps.length)
    setActiveIndex(Math.min(Math.max(idx, -1), steps.length - 1))
  })

  // ----- Mobile: pinned vertical scroll -----
  const mobilePinRef = React.useRef<HTMLDivElement>(null)
  const [mobileActiveIndex, setMobileActiveIndex] = React.useState(-1)
  const [segmentProgress, setSegmentProgress] = React.useState(0)

  const { scrollYProgress: mobileScrollYProgress } = useScroll({
    target: mobilePinRef,
    offset: ["start start", "end end"],
  })

  useMotionValueEvent(mobileScrollYProgress, "change", (latest) => {
    const scaled = latest * steps.length
    const idx = Math.floor(scaled)
    setMobileActiveIndex(Math.min(Math.max(idx, -1), steps.length - 1))
    setSegmentProgress(Math.min(Math.max(scaled - idx, 0), 1))
  })

  return (
    <section id="process" className="bg-brand-background relative">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto pt-16 mb-12 sm:mb-16 lg:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-4 leading-tight">
            How we work
          </h2>
          <p className="text-lg text-brand-muted leading-relaxed">
            A battle-tested process that removes uncertainty and delivers predictable results.
          </p>
        </div>
      </div>

      {/* Desktop: Pinned Horizontal Timeline */}
      <div ref={pinRef} className="hidden lg:block relative h-[280vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="site-container w-full relative">
            <div className="absolute top-10 left-[10%] right-[10%] h-px bg-brand-primary/15" />

            <motion.div
              className="absolute top-10 left-[10%] h-0.5 bg-linear-to-r from-brand-primary to-brand-secondary neon-glow origin-left"
              style={{ width: lineWidth, maxWidth: "80%" }}
            />

            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, i) => {
                const isActive = i <= activeIndex
                return (
                  <div key={i} className="flex flex-col items-center text-center">
                    <StepIcon Icon={step.icon} isActive={isActive} size={28} className="w-20 h-20 mb-6" />
                    <span
                      className={`u-index mb-2 transition-colors duration-500 ${isActive ? "text-brand-primary" : "text-brand-primary/60"
                        }`}
                    >
                      {step.number}
                    </span>
                    <h3 className="text-lg font-bold text-brand-text mb-3">{step.title}</h3>
                    <p className="text-sm text-brand-muted leading-relaxed">{step.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Pinned Vertical Timeline */}
      <div ref={mobilePinRef} className="lg:hidden relative h-[350vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="site-container w-full relative">
            {steps.map((step, i) => {
              const isPast = i < mobileActiveIndex
              const isCurrent = i === mobileActiveIndex
              const isActive = isPast || isCurrent
              const isLast = i === steps.length - 1

              // How full THIS item's connector line down to the next item is.
              const fillPercent = isPast ? 100 : isCurrent ? segmentProgress * 100 : 0

              return (
                <div key={i} className="flex gap-5 relative">
                  {!isLast && (
                    <>
                      <div className="absolute left-5 top-14 bottom-0 w-px bg-brand-primary/15" />
                      <div
                        className="absolute left-5 top-14 w-0.5 bg-linear-to-b from-brand-primary to-brand-secondary neon-glow transition-[height] duration-150 ease-out"
                        style={{ height: `${fillPercent}%` }}
                      />
                    </>
                  )}

                  <StepIcon Icon={step.icon} isActive={isActive} size={18} className="shrink-0 w-10 h-10 mt-1" />

                  <div
                    className={`pb-10 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-40"
                      }`}
                  >
                    <span
                      className={`u-index block mb-1 transition-colors duration-500 ${isActive ? "text-brand-primary" : "text-brand-primary/60"
                        }`}
                    >
                      {step.number}
                    </span>
                    <h3 className="text-lg font-bold text-brand-text mb-2">{step.title}</h3>
                    <p className="text-sm text-brand-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}