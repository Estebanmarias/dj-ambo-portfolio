"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Placeholder images - Replace with actual DJ Ambo photos
const images = [
  { id: 1, src: "/images/gallery-1.jpg", alt: "DJ Ambo performing at a club" },
  { id: 2, src: "/images/gallery-2.jpg", alt: "DJ Ambo at a wedding reception" },
  { id: 3, src: "/images/gallery-3.jpg", alt: "Crowd going wild at DJ Ambo event" },
  { id: 4, src: "/images/gallery-4.jpg", alt: "DJ Ambo mixing on the decks" },
  { id: 5, src: "/images/gallery-5.jpg", alt: "DJ Ambo hyping the crowd" },
  { id: 6, src: "/images/gallery-6.jpg", alt: "DJ Ambo portrait shot" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-neonPurple">Vibe</span> Gallery
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Moments captured in time. The energy, the crowd, the music.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl cursor-pointer group break-inside-avoid"
              onClick={() => setSelectedImage(img.src)}
            >
              <img src={img.src} alt={img.alt} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-neonPurple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium tracking-wider uppercase text-sm border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-deepPurple/95 backdrop-blur-xl p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-neonPurple transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[80vh] aspect-video bg-white/5 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center text-white/30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Replace with actual image in modal */}
             <img src={selectedImage} alt="Enlarged gallery image" className="object-contain w-full h-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
