import * as React from "react"
import Link from "next/link"
import { IoMailSharp } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-brand-text text-brand-background pt-16 sm:pt-20 lg:pt-24 pb-6">
      <div className="site-container">
        {/* Giant logo
        <div className="flex justify-center mb-12 sm:mb-16">
          <Image
            src="/logo-full.svg"
            alt="DevSaha Tech"
            width={2532}
            height={545}
            className="w-[80vw] sm:w-[65vw] lg:w-[45vw] h-auto object-contain"
          />
        </div>
        */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-brand-background/15 pt-10 mb-10">
          {/* Brand / Contact */}
          <div className="col-span-2">
            <h3 className="u-mono opacity-50 mb-4 font-semibold">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:info@devsaha.tech" className="flex items-center gap-2 text-sm hover:text-brand-primary transition-colors">
                <IoMailSharp size={14} />
                info@devsaha.tech
              </a>
              <a href="https://wa.me/916295111477" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-brand-primary transition-colors">
                <MdOutlineLocalPhone size={14} />
                +91 62951 11477, +91 77192 49758
              </a>
              <p className="flex items-center gap-2 text-sm opacity-80">
                <RiMapPinLine size={14} />
                Katwa, West Bengal, India
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="u-mono opacity-50 mb-4 font-semibold">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#services" className="u-arrow hover:text-brand-primary transition-colors">Services</Link></li>
              <li><Link href="#process" className="u-arrow hover:text-brand-primary transition-colors">How We Work</Link></li>
              <li><Link href="#portfolio" className="u-arrow hover:text-brand-primary transition-colors">Portfolio</Link></li>
              <li><Link href="#about" className="u-arrow hover:text-brand-primary transition-colors">About Team</Link></li>
              <li><Link href="#testimonials" className="u-arrow hover:text-brand-primary transition-colors">Testimonials</Link></li>
              <li><Link href="#contact" className="u-arrow hover:text-brand-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal + Social */}
          <div>
            <h3 className="u-mono opacity-50 mb-4 font-semibold">Legal</h3>
            <ul className="space-y-3 text-sm mb-8">
              <li><Link href="/privacy" className="u-arrow hover:text-brand-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="u-arrow hover:text-brand-primary transition-colors">Terms of Service</Link></li>
            </ul>

            <h3 className="u-mono opacity-50 mb-4 font-semibold">Connect</h3>
            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com/company/devsahatech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-brand-background/20 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a
                href="https://github.com/devsahatech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-brand-background/20 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all"
                aria-label="GitHub"
              >
                <FaGithub size={14} />
              </a>
              <a
                href="https://instagram.com/devsahatech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-brand-background/20 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="https://www.facebook.com/devsahatech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-brand-background/20 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="https://x.com/devsahatech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-brand-background/20 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all"
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={14} />
              </a>
              <a
                href="https://www.youtube.com/@devsahatech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-brand-background/20 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all"
                aria-label="YouTube"
              >
                <FaYoutube size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-brand-background/15 grid md:grid-cols-3 gap-3 u-mono opacity-60 text-[11px]">
          <p>© {new Date().getFullYear()} DevSaha Tech. All rights reserved.</p>
          <p className="md:text-center">Engineered For High Performance</p>
          <p className="md:text-right">Based In West Bengal, India</p>
        </div>
      </div>
    </footer>
  )
}
