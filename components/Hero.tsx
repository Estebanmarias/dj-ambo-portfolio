"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Music, ChevronDown } from "lucide-react";

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const AudiomackIcon = () => (
  <svg viewBox="0 0 100 80" fill="currentColor" className="w-5 h-5">
    <circle cx="8" cy="52" r="7"/>
    <path d="M18 52 Q22 52 24 44 Q27 28 31 36 Q34 42 36 30 Q39 14 43 26 Q46 36 48 20 Q51 4 55 22 Q58 36 61 28 Q64 20 66 30 Q68 38 70 44 Q72 50 76 44 L82 30 Q85 20 88 28 L92 44" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M88 44 L94 56" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none"/>
  </svg>
);

const AppleMusicIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M9 3v11.268A3 3 0 1 0 11 17V8h7V5H9V3z"/>
  </svg>
);

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const platforms = [
  { name: 'YouTube', href: 'https://www.youtube.com/@djambothe57', icon: <YouTubeIcon />, color: '#FF0000' },
  { name: 'Audiomack', href: 'https://audiomack.com/djambo-2', icon: <AudiomackIcon />, color: '#FFA500' },
  { name: 'Apple Music', href: 'https://music.apple.com/ng/artist/dj-ambo/1521219732', icon: <AppleMusicIcon />, color: '#FC3C44' },
  { name: 'Spotify', href: 'https://open.spotify.com/artist/35DFVIfaL4iL77Z8t0g2PU', icon: <SpotifyIcon />, color: '#1DB954' },
];

export default function Hero() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonPurple/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonPurple/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-neonPurple/30 bg-neonPurple/10 text-neonPurple text-sm font-medium tracking-wide">
            Ogbomoso, Nigeria
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            FATOKI PAUL <br />
            <span className="text-metallicGold drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">DJ AMBO</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 font-light">
            Professional DJ • Event Hypeman • Sound Curator
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {["Afrobeats", "Amapiano", "Hip-Hop"].map((genre) => (
              <span key={genre} className="px-4 py-2 bg-white/5 rounded-md text-sm text-white/70 border border-white/10">
                {genre}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-neonPurple text-white font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(176,68,255,0.6)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            {/* Listen dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-neonPurple text-neonPurple font-bold rounded-lg hover:bg-neonPurple/10 transition-colors gap-2 w-full sm:w-auto"
              >
                <Music size={18} /> Listen to Mix
                <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
              </button>

              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-0 mt-2 w-52 bg-[#12001a] border border-neonPurple/20 rounded-xl overflow-visible shadow-[0_0_20px_rgba(176,68,255,0.2)] z-[999]"
                >
                  {platforms.map((p) => (
                    <a
                      key={p.name}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors"
                      style={{ color: p.color }}
                      onClick={() => setOpen(false)}
                    >
                      {p.icon}
                      <span className="text-sm font-medium text-white">{p.name}</span>
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center"
        >
          <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm">
            <img src="/images/profile.jpg" alt="DJ Ambo" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-deepPurple via-transparent to-transparent opacity-80" />
          </div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 -left-4 md:left-0 bg-deepPurple/90 backdrop-blur-md border border-neonPurple/30 p-6 rounded-2xl shadow-[0_0_30px_rgba(176,68,255,0.15)]"
          >
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-neonPurple shadow-[0_0_8px_#B044FF]" />
                <span className="font-medium">7+ Years Active</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-metallicGold shadow-[0_0_8px_#D4AF37]" />
                <span className="font-medium">200+ Events</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-neonPurple shadow-[0_0_8px_#B044FF]" />
                <span className="font-medium">Resident DJ</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}