"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { RiArrowRightUpLine } from "react-icons/ri";
import styles from "./PortfolioCarousel.module.css"

const products = [
  {
    title: "BlocMentor",
    tagline: "Decentralized AI-Powered Tutor Booking Platform",
    summary: "A Web3-based tutoring platform combining blockchain, smart contracts, and AI to create a secure, transparent, and personalized online learning experience.",
    link: "https://github.com/tumansutradhar/bloc_mentor"
  },
  {
    title: "CB AI",
    tagline: "AI-Based Road Debris and Garbage Detection System",
    summary: "An AI-powered deep learning solution that detects debris, garbage, and construction materials on Indian roads using YOLO model and a modern React frontend.",
    link: "https://cb-ai-app.vercel.app/"
  },
  {
    title: "Cyber Bandhu",
    tagline: "Doorstep Digital Help for Students",
    summary: "A platform that enables students in rural and semi-urban areas to request secure and affordable in-person help with online forms and digital tasks.",
    link: "https://cyber-bandhu.netlify.app/"
  },
  {
    title: "EduManage",
    tagline: "Comprehensive Course Management System",
    summary: "A full-stack MERN application for managing courses, assignments, attendance, and grades with role-based access control.",
    link: "https://edu-manage-app.vercel.app/"
  },
  {
    title: "Gronur",
    tagline: "Grocery Mobile UI Kit",
    summary: "A production-ready mobile grocery & food delivery UI kit rebuilt from a premium Figma design system.",
    link: "https://www.figma.com/design/4G7Ibgp46WQghWFN4b0PqP/Tuman-Sutradhar-%7C-Gronur-Grocery-App-UI-Kit?node-id=45-2&t=DuvQm7JNNqvK1qmk-1"
  },
  {
    title: "Inbox3",
    tagline: "Decentralized Messaging on Aptos",
    summary: "A decentralized messaging application built on the Aptos blockchain with IPFS storage for message content and end-to-end encryption.",
    link: "https://github.com/tumansutradhar/inbox3"
  },
  {
    title: "MED+",
    tagline: "Modern Hospital Management System",
    summary: "A full-stack hospital management platform that digitizes patient care, streamlines medical workflows, and enhances healthcare delivery.",
    link: "https://github.com/tumansutradhar/med_plus"
  },
  {
    title: "PaintX",
    tagline: "A Lightweight Web-Based Drawing App",
    summary: "A responsive drawing application built with React, Vite, and Tailwind CSS. It enables users to draw, undo/redo, erase, and export artwork.",
    link: "https://paint-x.netlify.app/"
  },
  {
    title: "PixelX",
    tagline: "Web-Based Image to Pixel Art Converter",
    summary: "A fast, responsive image pixelation tool that allows users to upload images, apply pixelation effects with adjustable intensity, and download.",
    link: "https://pixel-x.netlify.app/"
  },
  {
    title: "Sharanya's Portfolio",
    tagline: "Personal Portfolio",
    summary: "The personal portfolio website of Sharanya Chowdhury, showcasing his skills, projects, and professional journey as a Software Development Engineer.",
    link: "https://www.sharanya.tech/"
  },
  {
    title: "Tuman's Portfolio",
    tagline: "Personal Portfolio",
    summary: "The personal portfolio website of Tuman Sutradhar, highlighting his UI/UX design capabilities and front-end development projects.",
    link: "https://tumansutradhar.me"
  },
  {
    title: "Ranadeb's Portfolio",
    tagline: "Personal Portfolio",
    summary: "The personal portfolio website of Ranadeb Saha, Founder & Lead Full Stack Engineer.",
    link: "https://ranadebsaha.netlify.app/"
  }
]

// How far below the sticky nav the pinned block sits.
const TOP_OFFSET = 96
// How much scroll distance (px) it takes to scrub through all 12 cards.
// Bigger = slower/more deliberate scroll; smaller = faster.
const SCRUB_PX = 1600

export function PortfolioSection() {
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const stickyRef = React.useRef<HTMLDivElement>(null)
  const itemRefs = React.useRef<Array<HTMLDivElement | null>>([])
  const [active, setActive] = React.useState(0)
  const [stickyHeight, setStickyHeight] = React.useState(760)

  const applyProgress = React.useCallback((progress: number) => {
    const p = Math.max(0, Math.min(progress, 1))
    const newActive = Math.round(p * (products.length - 1))

    itemRefs.current.forEach((el, i) => {
      if (!el) return
      const zIndex = i === newActive ? products.length : products.length - Math.abs(i - newActive)
      el.style.setProperty("--zIndex", String(zIndex))
      el.style.setProperty("--active", String((i - newActive) / products.length))
    })

    setActive(newActive)
  }, [])

  // Drive the fan purely from page scroll position — no hover/drag needed.
  React.useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const wrapper = wrapperRef.current
        if (!wrapper) return
        const rect = wrapper.getBoundingClientRect()
        const progress = (TOP_OFFSET - rect.top) / SCRUB_PX
        applyProgress(progress)
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [applyProgress])

  // Keep the spacer's total height in sync with the pinned block's real height
  // (heading + carousel + dots), so the release point lines up correctly.
  React.useEffect(() => {
    const measure = () => {
      if (stickyRef.current) setStickyHeight(stickyRef.current.offsetHeight)
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  const goTo = (i: number) => {
    const wrapper = wrapperRef.current
    if (!wrapper) return
    const p = i / (products.length - 1)
    const wrapperDocTop = wrapper.getBoundingClientRect().top + window.scrollY
    const targetY = wrapperDocTop - TOP_OFFSET + p * SCRUB_PX
    window.scrollTo({ top: targetY, behavior: "smooth" })
  }

  return (
    <section id="portfolio" className="relative bg-black">
      <div
        ref={wrapperRef}
        style={{ height: `${TOP_OFFSET + stickyHeight + SCRUB_PX}px` }}
        className="relative"
      >
        <div ref={stickyRef} className="sticky bg-black" style={{ top: TOP_OFFSET }}>
          <div className="site-container relative z-10 text-center max-w-2xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-text">
              Our Products & Work
            </h2>
            <p className="text-lg text-brand-muted">
              Explore the products we have built, from scalable full-stack applications to decentralized Web3 apps.
            </p>
          </div>

          <div
            className={styles.carousel}
            style={{ "--items": products.length } as React.CSSProperties}
          >
            {products.map((product, i) => (
              <div
                key={product.title}
                ref={(el) => {
                  itemRefs.current[i] = el
                }}
                className={`${styles.carouselItem} ${i === active ? styles.isActive : ""}`}
                onClick={() => goTo(i)}
              >
                <div className={styles.carouselBox}>
                  <span className={styles.num}>0{i + 1}</span>
                  <div className={styles.iconWrap}>
                  </div>
                  <h3 className={styles.title}>{product.title}</h3>
                  <p className={styles.tagline}>{product.tagline}</p>

                  {i === active && (
                    <Button
                      asChild
                      variant="primary"
                      size="sm"
                      className="mt-3 self-start"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href={product.link} target="_blank" rel="noopener noreferrer">
                        View Project <RiArrowRightUpLine size={16} />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="site-container relative z-10 flex items-center justify-center gap-1.5">
            {products.map((product, i) => (
              <button
                key={product.title}
                type="button"
                aria-label={`Go to ${product.title}`}
                className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <p className="u-mono text-center text-brand-muted mt-4">
            0{active + 1} / {products.length} — keep scrolling to browse
          </p>
        </div>
      </div>
    </section>
  )
}
