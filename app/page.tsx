import Script from "next/script"
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
import { ContactCTA } from "@/components/sections/ContactCTA"

export default function Home() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "DevSaha Tech",
    "alternateName": "Dev Saha Tech",
    "image": "https://devsaha.tech/og-image.png",
    "@id": "https://devsaha.tech",
    "url": "https://devsaha.tech",
    "telephone": "+91 62951 11477",
    "email": "info@devsaha.tech",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Katwa",
      "addressLocality": "Katwa",
      "addressRegion": "West Bengal",
      "postalCode": "713150",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.6489,
      "longitude": 88.1363
    },
    "areaServed": [
      { "@type": "City", "name": "Katwa" },
      { "@type": "City", "name": "Bardhaman" },
      { "@type": "State", "name": "West Bengal" },
      { "@type": "Country", "name": "India" }
    ],
    "priceRange": "₹₹",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "20:00"
    },
    "foundingDate": "2026",
    "founder": {
      "@type": "Person",
      "name": "Ranadeb Saha",
      "url": "https://ranadebsaha.netlify.app/"
    },
    "sameAs": [
      "https://linkedin.com/company/devsahatech",
      "https://github.com/devsahatech",
      "https://instagram.com/devsahatech",
      "https://www.facebook.com/devsahatech",
      "https://x.com/devsahatech",
      "https://www.youtube.com/@devsahatech"
    ],
    "description": "DevSaha Tech is a top-rated software and full stack website development company in Bardhaman, Katwa, and West Bengal. We build high-performance web apps, REST APIs, and scalable backends.",
    "knowsAbout": [
      "Web Development", "Full Stack Development", "React", "Next.js",
      "Node.js", "Python", "Django", "REST API", "GraphQL",
      "PostgreSQL", "AWS", "Mobile App Development"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full-Stack Web App Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "REST & GraphQL API Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Database Optimization" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud & DevOps Setup" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "System Refactoring & Audits" } }
      ]
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DevSaha Tech",
    "url": "https://devsaha.tech",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.google.com/search?q=site:devsaha.tech+{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevSaha Tech",
    "url": "https://devsaha.tech",
    "logo": "https://devsaha.tech/logo-full.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-62951-11477",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi", "Bengali"]
    },
    "sameAs": [
      "https://linkedin.com/company/devsahatech",
      "https://github.com/devsahatech",
      "https://instagram.com/devsahatech",
      "https://www.facebook.com/devsahatech",
      "https://x.com/devsahatech",
      "https://www.youtube.com/@devsahatech"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-background text-brand-text">
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
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
