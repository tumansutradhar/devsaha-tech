"use client"

import * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ChevronRight } from "lucide-react"

type ServiceOption = "api" | "fullstack" | "audit"

export function Estimator() {
  const [selectedService, setSelectedService] = useState<ServiceOption | null>(null)
  const [step, setStep] = useState(1)

  const handleNext = () => {
    if (selectedService) {
      setStep(2)
    }
  }

  const getEstimate = () => {
    switch(selectedService) {
      case "api": return { cost: "₹50k - ₹1.5L", time: "2 - 4 Weeks" }
      case "fullstack": return { cost: "₹1.5L - ₹5L+", time: "4 - 12 Weeks" }
      case "audit": return { cost: "₹25k - ₹75k", time: "1 - 2 Weeks" }
      default: return { cost: "--", time: "--" }
    }
  }

  return (
    <section id="estimator" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid z-0 opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass rounded-2xl p-6 md:p-12 border-brand-primary/30">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-text">Project Scope Estimator</h2>
            <p className="text-brand-muted">Select your requirements to get an instant baseline estimate for timeline and investment.</p>
          </div>

          {step === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-3 gap-4">
                
                {/* Option 1 */}
                <button 
                  onClick={() => setSelectedService("api")}
                  className={`p-6 text-left rounded-xl border transition-all duration-300 ${
                    selectedService === "api" 
                      ? "border-brand-primary bg-brand-primary/10 neon-glow" 
                      : "border-brand-border bg-brand-surface hover:border-brand-primary/40"
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-brand-text text-lg">REST/GraphQL API Backend</h3>
                    {selectedService === "api" && <Check className="text-brand-primary" size={20} />}
                  </div>
                  <p className="text-sm text-brand-muted">Secure, scalable data endpoints with Django or Node.js.</p>
                </button>

                {/* Option 2 */}
                <button 
                  onClick={() => setSelectedService("fullstack")}
                  className={`p-6 text-left rounded-xl border transition-all duration-300 ${
                    selectedService === "fullstack" 
                      ? "border-brand-secondary bg-brand-secondary/10 shadow-[0_0_15px_rgba(199,125,255,0.3)]" 
                      : "border-brand-border bg-brand-surface hover:border-brand-secondary/40"
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-brand-text text-lg">Full-Stack Web App</h3>
                    {selectedService === "fullstack" && <Check className="text-brand-secondary" size={20} />}
                  </div>
                  <p className="text-sm text-brand-muted">End-to-end platform with Next.js frontend and robust database.</p>
                </button>

                {/* Option 3 */}
                <button 
                  onClick={() => setSelectedService("audit")}
                  className={`p-6 text-left rounded-xl border transition-all duration-300 ${
                    selectedService === "audit" 
                      ? "border-blue-500 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.3)]" 
                      : "border-brand-border bg-brand-surface hover:border-blue-500/40"
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-brand-text text-lg">System/DB Audit</h3>
                    {selectedService === "audit" && <Check className="text-blue-500" size={20} />}
                  </div>
                  <p className="text-sm text-brand-muted">Performance review, query optimization, and architecture refactoring.</p>
                </button>

              </div>

              <div className="flex justify-end">
                <Button 
                  onClick={handleNext} 
                  disabled={!selectedService}
                  className="w-full md:w-auto"
                >
                  Calculate Estimate <ChevronRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
              <div className="grid md:grid-cols-2 gap-8 bg-black/40 p-8 rounded-xl border border-white/5">
                <div>
                  <p className="text-brand-muted text-sm uppercase tracking-wider mb-2">Estimated Timeline</p>
                  <p className="text-4xl font-bold text-brand-text">{getEstimate().time}</p>
                </div>
                <div>
                  <p className="text-brand-muted text-sm uppercase tracking-wider mb-2">Estimated Investment</p>
                  <p className="text-4xl font-bold text-brand-secondary">{getEstimate().cost}</p>
                </div>
              </div>

              <div className="bg-brand-surface p-6 rounded-xl border border-brand-primary/20">
                <h3 className="text-xl font-semibold text-brand-text mb-4">Let's Discuss the Details</h3>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks for your interest! An architect will contact you shortly."); }}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                      required
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                      required
                    />
                  </div>
                  <textarea 
                    placeholder="Briefly describe your project goals..." 
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                  ></textarea>
                  <div className="flex gap-4">
                    <Button type="button" variant="ghost" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button type="submit" className="flex-1">
                      Request Formal Proposal
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
