"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glow */}
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
            
            <a
              href="https://music.apple.com/ng/album/party-in-the-jungle-dj-ambo-may-2023-dj-mix/1684860754"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-neonPurple text-neonPurple font-bold rounded-lg hover:bg-neonPurple/10 transition-colors gap-2"
            >
              <Play size={18} /> Listen to Mix
            </a>
          </div>
        </motion.div>

        {/* Right Content - Image & Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center"
        >
          {/* Placeholder Image Container */}
          <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm">
           <img src="/images/profile.jpg" alt="DJ Ambo" className="object-cover w-full h-full" />
            {/* <img src="/images/dj-ambo-hero.jpg" alt="DJ Ambo" className="object-cover w-full h-full" /> */}
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-deepPurple via-transparent to-transparent opacity-80" />
          </div>

          {/* Floating Badge */}
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
