'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toggleContactedStatus, deleteSubmission, logoutAdmin } from '@/actions/admin';
import { Button } from '@/components/ui/button';
import { MdCheckCircleOutline, MdCurrencyRupee } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
import { IoTrashSharp, IoLogOutSharp, IoMailSharp,IoBriefcaseSharp } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { motion } from 'framer-motion';

type Submission = {
  id: string;
  name: string;
  email: string;
  project_type: string;
  budget: string;
  message: string;
  contacted: boolean;
  created_at: string;
};

export default function DashboardClient({ initialSubmissions }: { initialSubmissions: Submission[] }) {
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const router = useRouter();

  const handleToggle = async (id: string, currentStatus: boolean) => {
    setLoadingId(id);
    const result = await toggleContactedStatus(id, currentStatus);
    if (result.success) {
      setSubmissions((prev) =>
        prev.map((sub) =>
          sub.id === id ? { ...sub, contacted: !currentStatus } : sub
        )
      );
      router.refresh();
    }
    setLoadingId(null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) return;

    setLoadingId(id);
    const result = await deleteSubmission(id);
    if (result.success) {
      setSubmissions((prev) => prev.filter((sub) => sub.id !== id));
      router.refresh();
    }
    setLoadingId(null);
  };

  const handleLogout = async () => {
    await logoutAdmin();
  };

  return (
    <div className="min-h-screen bg-black text-brand-text relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-30 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow opacity-30 z-0 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-text">Admin Dashboard</h1>
            <p className="text-brand-muted mt-2">Manage your project inquiries</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="gap-2 border-brand-primary/50 hover:bg-brand-primary/10">
            <IoLogOutSharp size={16} />
            Logout
          </Button>
        </div>

        {submissions.length === 0 ? (
          <div className="glass rounded-2xl p-12 text-center border-brand-primary/20">
            <div className="w-16 h-16 rounded-full glass border-brand-primary/30 flex items-center justify-center mx-auto mb-4 text-brand-muted">
              <IoMailSharp size={24} />
            </div>
            <h3 className="text-xl font-medium text-brand-text mb-2">No submissions yet</h3>
            <p className="text-brand-muted">When users contact you, their inquiries will appear here.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {submissions.map((sub, i) => (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`glass rounded-2xl p-6 border transition-all ${sub.contacted ? 'border-green-500/30 bg-green-500/5' : 'border-brand-primary/30'
                  }`}
              >
                <div className="flex flex-col lg:flex-row gap-6 justify-between">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-brand-text">{sub.name}</h3>
                        <a href={`mailto:${sub.email}`} className="text-brand-secondary hover:underline flex items-center gap-1 mt-1 text-sm">
                          <IoMailSharp size={14} />
                          {sub.email}
                        </a>
                      </div>
                      <div className="text-xs text-brand-muted flex items-center gap-1 bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
                        <AiOutlineClockCircle size={12} />
                        {new Date(sub.created_at).toLocaleDateString('en-US', {
                          month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
                        })}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-1.5 text-sm bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full border border-brand-primary/20">
                        <IoBriefcaseSharp size={14} />
                        {sub.project_type}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm bg-brand-secondary/10 text-brand-secondary px-3 py-1 rounded-full border border-brand-secondary/20">
                        <MdCurrencyRupee size={14} />
                        {sub.budget}
                      </div>
                    </div>

                    {sub.message && (
                      <div className="bg-black/40 p-4 rounded-xl border border-white/5 text-sm text-brand-muted leading-relaxed">
                        {sub.message}
                      </div>
                    )}
                  </div>

                  <div className="flex lg:flex-col items-center justify-end gap-3 min-w-35 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-6 mt-4 lg:mt-0">
                    <Button
                      onClick={() => handleToggle(sub.id, sub.contacted)}
                      disabled={loadingId === sub.id}
                      variant="outline"
                      className={`w-full gap-2 ${sub.contacted
                        ? 'border-green-500/50 text-green-400 hover:bg-green-500/10'
                        : 'border-brand-primary/50 hover:bg-brand-primary/10'
                        }`}
                    >
                      {sub.contacted ? <MdCheckCircleOutline size={16} /> : <FaRegCircle size={16} />}
                      {sub.contacted ? 'Contacted' : 'Mark Done'}
                    </Button>

                    <Button
                      onClick={() => handleDelete(sub.id)}
                      disabled={loadingId === sub.id}
                      variant="outline"
                      className="w-full gap-2 border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-300"
                    >
                      <IoTrashSharp size={16} />
                      Delete
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
