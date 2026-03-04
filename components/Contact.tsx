"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
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
