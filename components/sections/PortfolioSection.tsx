"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, FolderGit2 } from "lucide-react"

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
    link: "https://github.com/tumansutradhar/cyber_bandhu"
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

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-cyber-grid opacity-30 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow opacity-30 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-text text-glow">Our Products & Work</h2>
          <p className="text-lg text-brand-muted">
            Explore the products we have built, from scalable full-stack applications and AI-driven platforms to decentralized Web3 apps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group glass rounded-2xl p-6 border border-brand-primary/20 hover:border-brand-primary/50 transition-all flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FolderGit2 className="text-brand-primary" size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-brand-text mb-1 group-hover:text-brand-secondary transition-colors">{product.title}</h3>
                <p className="text-sm font-medium text-brand-primary/80 mb-4">{product.tagline}</p>
                <p className="text-brand-muted text-sm leading-relaxed mb-6 flex-grow">
                  {product.summary}
                </p>

                <a 
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-text hover:text-brand-secondary transition-colors mt-auto w-max"
                >
                  View Project <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
