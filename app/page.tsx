import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { TrustBar } from "@/components/sections/TrustBar"
import { ProblemSolution } from "@/components/sections/ProblemSolution"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { PortfolioSection } from "@/components/sections/PortfolioSection"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { AboutTeam } from "@/components/sections/AboutTeam"
import { Testimonials } from "@/components/sections/Testimonials"
// import { Estimator } from "@/components/sections/Estimator"
import { ContactCTA } from "@/components/sections/ContactCTA"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-background text-brand-text">
      <Header />

      <main className="flex-1">
        {/* 1. Hero — Hook + Value Prop */}
        <HeroSection />

        {/* 2. Trust Bar — Stats + Tech Stack */}
        <TrustBar />

        {/* 3. Problem → Solution — Pain Points */}
        <ProblemSolution />

        {/* 4. Services — What We Build */}
        <ServicesGrid />

        {/* 5. Process — How We Work */}
        <ProcessSection />

        {/* 6. Portfolio — Proof of Work */}
        <PortfolioSection />

        {/* 7. Why Choose Us — Differentiators */}
        <WhyChooseUs />

        {/* 8. About Team — Human Connection */}
        <AboutTeam />

        {/* 9. Testimonials — Social Proof */}
        <Testimonials />

        {/* 10. Estimator — Cost Transparency */}
        {/* <Estimator /> */}

        {/* 11. Contact CTA — Conversion */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  )
}
