import Link from 'next/link';
import { CgArrowLeft } from "react-icons/cg";
import { IoMailSharp } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden px-4 text-center">
      <div className="absolute inset-0 bg-cyber-grid opacity-30 z-0" />
      <div className="absolute inset-0 bg-radial-glow opacity-50 z-0" />

      <div className="relative z-10 max-w-lg mx-auto glass-card p-10">
        <h1 className="text-6xl font-black text-brand-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-brand-text mb-4">Page Not Found</h2>
        <p className="text-brand-muted mb-8 leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button asChild className="gap-2">
            <Link href="/">
              <CgArrowLeft size={16} />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="gap-2">
            <Link href="/#contact">
              <IoMailSharp />
              Contact Us
            </Link>
          </Button>
        </div>

        <div className="border-t border-brand-deep pt-6 mt-2 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-brand-muted">
          <a href="mailto:info@devsaha.tech" className="flex items-center gap-2 hover:text-brand-secondary transition-colors">
            <IoMailSharp />
            info@devsaha.tech
          </a>
          <a href="https://wa.me/916295111477" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-secondary transition-colors">
            <MdOutlineLocalPhone />
            +91 62951 11477, +91 77192 49758
          </a>
        </div>
      </div>
    </div>
  );
}
