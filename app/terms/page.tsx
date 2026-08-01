import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CgArrowLeft } from "react-icons/cg";

export const metadata: Metadata = {
  title: 'Terms of Service | DevSaha Tech',
  description: 'Terms of Service for DevSaha Tech. Read our rules, guidelines, and agreements for using our services.',
  alternates: {
    canonical: 'https://devsaha.tech/terms',
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-background text-brand-text">
      <Header />
      
      <main className="flex-1 relative pt-20 pb-20">
        <div className="absolute inset-0 bg-cyber-grid opacity-20 z-0" />
        <div className="absolute top-0 inset-x-0 h-96 bg-radial-glow opacity-30 z-0" />

        <div className="site-container relative z-10 max-w-4xl">
          <div className="mb-8">
            <Button asChild variant="outline" size="sm" className="gap-2">
              <Link href="/">
                <CgArrowLeft size={16} />
                Back to Home
              </Link>
            </Button>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-8">Terms of Service</h1>
          <p className="text-brand-muted mb-8">Last Updated: August 1, 2026</p>

          <div className="prose prose-invert prose-brand max-w-none space-y-6 text-brand-muted/90">
            <section>
              <h2 className="text-2xl font-semibold text-brand-text mb-4 mt-8">1. Acceptance of Terms</h2>
              <p>By accessing and using the DevSaha Tech website and services, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text mb-4 mt-8">2. Description of Services</h2>
              <p>DevSaha Tech provides software development, UI/UX design, mobile app development, and technical consultation services. The specific deliverables, timelines, and costs will be outlined in a separate Statement of Work or contract for each client.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text mb-4 mt-8">3. Intellectual Property</h2>
              <p>Unless otherwise agreed upon in writing, DevSaha Tech retains the rights to pre-existing code and proprietary tools used in development. Upon full payment for a custom project, the client is granted intellectual property rights for the specific custom code developed for their project, as detailed in the individual contract.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text mb-4 mt-8">4. Limitation of Liability</h2>
              <p>DevSaha Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text mb-4 mt-8">5. Modifications to Terms</h2>
              <p>We reserve the right to modify these terms at any time. We will do our best to provide notice of any significant changes, but it is your responsibility to review these Terms of Service periodically.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text mb-4 mt-8">6. Contact Information</h2>
              <p>If you have any questions regarding these Terms, please contact us at <a href="mailto:info@devsaha.tech" className="text-brand-primary hover:underline">info@devsaha.tech</a>.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
