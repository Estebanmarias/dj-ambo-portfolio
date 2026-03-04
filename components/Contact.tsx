"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.75a4.85 4.85 0 01-1.02-.06z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neonPurple/10 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Book <span className="text-metallicGold">DJ AMBO</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Ready to elevate your next event? Get in touch to check availability and rates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-white">Direct Contact</h3>

              <div className="space-y-6">
                <a
                  href="https://api.whatsapp.com/send/?phone=2348145345218&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">WhatsApp</div>
                    <div className="font-medium text-white group-hover:text-[#25D366] transition-colors">+234 814 534 5218</div>
                  </div>
                </a>

                <a
                  href="tel:08145345218"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-neonPurple/20 flex items-center justify-center text-neonPurple group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Phone</div>
                    <div className="font-medium text-white group-hover:text-neonPurple transition-colors">0814 534 5218</div>
                  </div>
                </a>

                <a
                  href="mailto:empireambo@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-metallicGold/20 flex items-center justify-center text-metallicGold group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Email</div>
                    <div className="font-medium text-white group-hover:text-metallicGold transition-colors">empireambo@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-white">Follow DJ AMBO</h3>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="https://www.facebook.com/deejayAmbo?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row items-center justify-center gap-2 p-3 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/20 hover:border-[#1877F2]/50 text-[#1877F2] transition-all group"
                >
                  <FacebookIcon />
                  <span className="font-medium text-xs sm:text-sm">Facebook</span>
                </a>
                <a
                  href="https://tiktok.com/@deejayambo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white transition-all group"
                >
                  <TikTokIcon />
                  <span className="font-medium text-xs sm:text-sm">TikTok</span>
                </a>
                <a
                  href="https://instagram.com/Deejay_ambo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row items-center justify-center gap-2 p-3 rounded-xl bg-[#E1306C]/10 hover:bg-[#E1306C]/20 border border-[#E1306C]/20 hover:border-[#E1306C]/50 text-[#E1306C] transition-all group"
                >
                  <InstagramIcon />
                  <span className="font-medium text-xs sm:text-sm">Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              action="mailto:empireambo@gmail.com"
              method="POST"
              encType="text/plain"
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonPurple focus:ring-1 focus:ring-neonPurple transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonPurple focus:ring-1 focus:ring-neonPurple transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="eventType" className="text-sm font-medium text-white/80">Event Type</label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    defaultValue=""
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonPurple focus:ring-1 focus:ring-neonPurple transition-all appearance-none"
                  >
                    <option value="" disabled className="text-black">Select Event Type</option>
                    <option value="Club" className="text-black">Club</option>
                    <option value="Wedding" className="text-black">Wedding</option>
                    <option value="Corporate" className="text-black">Corporate</option>
                    <option value="Concert" className="text-black">Concert</option>
                    <option value="Other" className="text-black">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium text-white/80">Event Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonPurple focus:ring-1 focus:ring-neonPurple transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80">Additional Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonPurple focus:ring-1 focus:ring-neonPurple transition-all resize-none"
                  placeholder="Tell me more about your event..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full group relative inline-flex items-center justify-center px-8 py-4 bg-neonPurple text-white font-bold rounded-xl overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(176,68,255,0.6)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Booking Request <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}