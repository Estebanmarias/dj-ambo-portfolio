'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';

const ADMIN_PASSWORD = 'djambo2026';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('admin_auth', 'true');
      router.push('/admin/dashboard');
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="min-h-screen bg-[#12001a] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-neonPurple/20 flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-neonPurple" />
          </div>
          <h1 className="text-2xl font-black text-white">Admin Access</h1>
          <p className="text-white/50 text-sm mt-1">DJ AMBO Dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(''); }}
            placeholder="Enter password"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonPurple focus:ring-1 focus:ring-neonPurple transition-all"
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-4 bg-neonPurple text-white font-bold rounded-xl hover:shadow-[0_0_30px_rgba(176,68,255,0.6)] transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}