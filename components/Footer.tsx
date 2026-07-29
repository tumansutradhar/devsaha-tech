import * as React from "react"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-brand-border/30 bg-brand-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-brand-text mb-3 text-glow">DevSaha Tech</h2>
            <p className="text-brand-muted max-w-sm mb-6 leading-relaxed text-sm">
              Architecting high-performance web systems, secure APIs, and scalable backend infrastructure for modern businesses across India.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:devsahatech@gmail.com" className="flex items-center gap-2 text-sm text-brand-muted hover:text-brand-secondary transition-colors">
                <Mail size={14} className="text-brand-primary" />
                devsahatech@gmail.com
              </a>
              <a href="https://wa.me/916295111477" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-brand-muted hover:text-brand-secondary transition-colors">
                <Phone size={14} className="text-brand-primary" />
                +91 62951 11477
              </a>
              <p className="flex items-center gap-2 text-sm text-brand-muted">
                <MapPin size={14} className="text-brand-primary" />
                Katwa, West Bengal, India
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-brand-text mb-4 text-sm">Navigation</h3>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li><Link href="#services" className="hover:text-brand-secondary transition-colors">Services</Link></li>
              <li><Link href="#process" className="hover:text-brand-secondary transition-colors">How We Work</Link></li>
              <li><Link href="#portfolio" className="hover:text-brand-secondary transition-colors">Portfolio</Link></li>
              <li><Link href="#about" className="hover:text-brand-secondary transition-colors">About Team</Link></li>
              <li><Link href="#testimonials" className="hover:text-brand-secondary transition-colors">Testimonials</Link></li>
              <li><Link href="#contact" className="hover:text-brand-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal + Social */}
          <div>
            <h3 className="font-semibold text-brand-text mb-4 text-sm">Legal</h3>
            <ul className="space-y-3 text-sm text-brand-muted mb-8">
              <li><Link href="/privacy" className="hover:text-brand-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-brand-secondary transition-colors">Terms of Service</Link></li>
            </ul>

            <h3 className="font-semibold text-brand-text mb-4 text-sm">Connect</h3>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/devsahatech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center hover:bg-brand-primary/20 hover:border-brand-primary/50 transition-all text-xs font-bold text-brand-secondary"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://github.com/devsahatech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center hover:bg-brand-primary/20 hover:border-brand-primary/50 transition-all text-xs font-bold text-brand-secondary"
                aria-label="GitHub"
              >
                gh
              </a>
              <a
                href="https://instagram.com/devsahatech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center hover:bg-brand-primary/20 hover:border-brand-primary/50 transition-all text-xs font-bold text-brand-secondary"
                aria-label="Instagram"
              >
                ig
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-muted/70">
          <p>© {new Date().getFullYear()} DevSaha Tech. All rights reserved.</p>
          <p>Engineered for High Performance. Based in West Bengal, India.</p>
        </div>
      </div>
    </footer>
  )
}
