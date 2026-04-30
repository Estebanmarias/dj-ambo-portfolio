"use client";

import { Music, Instagram, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-neonPurple/20 bg-deepPurple overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-neonPurple/60 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/gallery-4.jpg"
                alt="DJ AMBO"
                className="h-10 w-auto object-contain rounded-lg border border-neonPurple/20"
              />
              {/* <span className="text-xl font-black text-metallicGold tracking-tight drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                DJ AMBO
              </span> */}
            </div>
            <p className="text-sm text-white/40 leading-relaxed font-light">
              Fatoki Paul — Professional DJ & Event Hypeman based in Ogbomoso, Nigeria. Bringing the energy to every occasion since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-neonPurple uppercase tracking-[0.2em]">
              Navigate
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Events", href: "#events" },
                { name: "Gallery", href: "#gallery" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-neonPurple transition-colors duration-300 w-fit font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-neonPurple uppercase tracking-[0.2em]">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://api.whatsapp.com/send/?phone=2348145345218"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-300 w-fit"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-neonPurple/10 border border-neonPurple/20 text-neonPurple group-hover:bg-neonPurple group-hover:text-white transition-all duration-300">
                  <Phone size={14} strokeWidth={2.5} />
                </span>
                <span className="font-medium">WhatsApp</span>
              </a>

              <a
                href="mailto:empireambo@gmail.com"
                className="group flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-300 w-fit"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-neonPurple/10 border border-neonPurple/20 text-neonPurple group-hover:bg-neonPurple group-hover:text-white transition-all duration-300">
                  <Mail size={14} strokeWidth={2.5} />
                </span>
                <span className="font-medium">Email</span>
              </a>

              <a
                href="https://www.instagram.com/Deejay_ambo"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-300 w-fit"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-neonPurple/10 border border-neonPurple/20 text-neonPurple group-hover:bg-neonPurple group-hover:text-white transition-all duration-300">
                  <Instagram size={14} strokeWidth={2.5} />
                </span>
                <span className="font-medium">Instagram</span>
              </a>

              <a
                href="https://music.apple.com/ng/album/party-in-the-jungle-dj-ambo-may-2023-dj-mix/1684860754"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-300 w-fit"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-neonPurple/10 border border-neonPurple/20 text-neonPurple group-hover:bg-neonPurple group-hover:text-white transition-all duration-300">
                  <Music size={14} strokeWidth={2.5} />
                </span>
                <span className="font-medium">Latest Mix</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/25 font-light tracking-wide">
            © {currentYear} DJ AMBO. All rights reserved.
          </p>
          <p className="text-xs text-white/25 font-light tracking-wide">
            Built with <span className="text-neonPurple">♥</span> in Ogbomoso, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}