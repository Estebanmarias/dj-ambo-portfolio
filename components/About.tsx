"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            The <span className="text-neonPurple">Architect</span> of Vibes
          </h2>
          
          <div className="text-lg md:text-xl text-white/70 leading-relaxed space-y-6 text-left md:text-center">
            <p>
              Fatoki Paul, known on stage as <strong className="text-metallicGold font-semibold">DJ Ambo</strong>, is Ogbomoso's go-to DJ for every occasion. From high-energy club nights to elegant weddings, corporate events, and headline concerts — he reads every crowd and delivers.
            </p>
            <p>
              Rooted in Afrobeats and Amapiano, with a deep command of Hip-Hop, DJ Ambo doesn't just play music; he engineers moments. Since 2018, he has built a reputation for flawless transitions, infectious energy, and crowd control that keeps dance floors locked in from first track to last.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {[
              { label: "Years Active", value: "7+" },
              { label: "Events Played", value: "200+" },
              { label: "Cities Toured", value: "10+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-neonPurple/50 hover:bg-neonPurple/5 transition-all duration-300 group"
              >
                <div className="text-4xl md:text-5xl font-black text-white group-hover:text-neonPurple transition-colors mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
