import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CgArrowLeft } from "react-icons/cg";

export const metadata: Metadata = {
  title: 'Privacy Policy | DevSaha Tech',
  description: 'Privacy Policy for DevSaha Tech. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicy() {
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

          <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-8">Privacy Policy</h1>
          <p className="text-brand-muted mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-invert prose-brand max-w-none space-y-6 text-brand-muted/90">
            <section>
              <h2 className="text-2xl font-semibold text-brand-text mb-4 mt-8">1. Information We Collect</h2>
              <p>At DevSaha Tech, we collect information you provide directly to us when you use our contact forms, request a quote, or communicate with us. This may include your name, email address, phone number, and any project details you choose to share.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text mb-4 mt-8">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Respond to your inquiries and provide consultation.</li>
                <li>Deliver the services you have requested.</li>
                <li>Improve our website, services, and user experience.</li>
                <li>Send technical notices, updates, and administrative messages.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text mb-4 mt-8">3. Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, as long as those parties agree to keep this information confidential.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text mb-4 mt-8">4. Data Security</h2>
              <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text mb-4 mt-8">5. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@devsaha.tech" className="text-brand-primary hover:underline">info@devsaha.tech</a>.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
