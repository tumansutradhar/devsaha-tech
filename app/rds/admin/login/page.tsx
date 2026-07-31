'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { IoLockClosedSharp, IoMailSharp } from "react-icons/io5";
import { CgArrowRight } from "react-icons/cg";
import { Button } from '@/components/ui/button';
import { loginAdmin } from '@/actions/admin';

export default function AdminLoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);

    try {
      const result = await loginAdmin(formData);
      if (result.success) {
        router.push('/rds/admin');
      } else {
        setError(result.error || 'Invalid credentials');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-cyber-grid opacity-30 z-0" />
      <div className="absolute inset-0 bg-radial-glow opacity-50 z-0" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10 glass rounded-2xl p-8 border-brand-primary/25"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl glass border-brand-primary/30 flex items-center justify-center mx-auto mb-4 text-brand-secondary neon-glow">
            <IoLockClosedSharp size={32} />
          </div>
          <h1 className="text-3xl font-bold text-brand-text mb-2">Admin Portal</h1>
          <p className="text-brand-muted text-sm">Sign in to access your dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-brand-text mb-2" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-muted/70">
                <IoMailSharp size={18} />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm"
                placeholder="devsahatech@gmail.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-text mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-muted/70">
                <IoLockClosedSharp size={18} />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <Button type="submit" disabled={loading} className="w-full gap-2 text-base py-3 disabled:opacity-70 mt-2">
            {loading ? 'Authenticating...' : 'Sign In'}
            {!loading && <CgArrowRight size={16} />}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
