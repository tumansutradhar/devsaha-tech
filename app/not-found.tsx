import Link from 'next/link';
import { ArrowLeft, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden px-4 text-center">
      <div className="absolute inset-0 bg-cyber-grid opacity-30 z-0" />
      <div className="absolute inset-0 bg-radial-glow opacity-50 z-0" />

      <div className="relative z-10 max-w-lg mx-auto glass rounded-2xl p-10 border-brand-primary/25">
        <h1 className="text-6xl font-black text-brand-primary mb-4 neon-glow">404</h1>
        <h2 className="text-2xl font-bold text-brand-text mb-4">Page Not Found</h2>
        <p className="text-brand-muted mb-8 leading-relaxed">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button asChild className="gap-2">
            <Link href="/">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="gap-2 border-brand-primary/50 hover:bg-brand-primary/10">
            <Link href="/#contact">
              <Mail size={16} />
              Contact Us
            </Link>
          </Button>
        </div>

        <div className="border-t border-white/10 pt-6 mt-2 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-brand-muted">
          <a href="mailto:devsahatech@gmail.com" className="flex items-center gap-2 hover:text-brand-secondary transition-colors">
            <Mail size={14} />
            devsahatech@gmail.com
          </a>
          <a href="https://wa.me/916295111477" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-secondary transition-colors">
            <Phone size={14} />
            +91 62951 11477
          </a>
        </div>
      </div>
    </div>
  );
}
