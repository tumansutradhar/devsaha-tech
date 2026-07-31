"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Hamburger } from "@/components/layout/Hamburger"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu on escape key
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false) }
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [])

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${scrolled
          ? "bg-brand-background/95 backdrop-blur-sm border-brand-border"
          : "bg-transparent border-transparent"
          }`}
      >
        <div className="site-container h-16 flex items-center justify-between">

          {/* Logo with SVG icon from public/ */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 group"
            aria-label="DevSaha Tech — Home"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo-full.svg"
              alt="DevSaha Tech Logo"
              width={2532}
              height={545}
              className="h-7 w-auto sm:h-8 lg:h-9 object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="u-mono u-arrow text-brand-muted hover:text-brand-primary transition-colors duration-200 font-semibold text-[0.875rem]!"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Button asChild size="sm" className="u-mono text-xs px-5 py-2 h-9">
              <Link href="#contact">Let&apos;s Talk</Link>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-brand-text"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <Hamburger open={menuOpen} size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/70 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-down panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-16 left-0 right-0 z-40 bg-brand-background border-b border-brand-border lg:hidden"
            >
              <nav className="site-container py-6 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="u-mono u-arrow flex items-center px-4 py-3.5 text-sm text-brand-muted hover:text-brand-primary transition-all font-semibold"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="mt-2 pt-2 px-4">
                  <Button asChild className="w-full u-mono text-xs">
                    <Link href="#contact" onClick={() => setMenuOpen(false)}>
                      Let&apos;s Talk
                    </Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
