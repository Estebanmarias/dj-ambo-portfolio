"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-deepPurple/80 backdrop-blur-md shadow-lg shadow-neonPurple/10 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
        {/* Logo — fixed flex layout */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, "#home")}
          className="flex items-center gap-2 sm:gap-3 shrink-0"
        >
          <img
            src="/favicon.jpg"
            alt="DJ AMBO"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
          <span className="text-lg sm:text-xl font-bold text-metallicGold drop-shadow whitespace-nowrap">
            DJ AMBO
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-sm font-medium text-white/80 hover:text-neonPurple transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-neonPurple transition-colors p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav — full screen overlay for better UX */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[60px] z-40 md:hidden bg-deepPurple/98 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl font-semibold text-white/90 hover:text-neonPurple transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}