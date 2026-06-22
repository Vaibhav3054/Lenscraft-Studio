'use client';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80',
  'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80',
];

export default function BehindScenes() {
  return (
    <section className="py-20 bg-brand-light dark:bg-brand-darkBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-heading font-bold text-center text-brand-primary dark:text-brand-accent mb-12"
        >
          Behind the Scenes
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="rounded-xl overflow-hidden shadow-md group"
            >
              <img src={src} alt="Behind the scenes" className="w-full h-64 object-cover group-hover:scale-105 transition" loading="lazy" />
            </motion.div>
          ))}
        </div>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1000&q=80"
            alt="Video thumbnail"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
              <Play size={36} className="text-brand-primary ml-1" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}