'use client';
import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { end: 500, suffix: '+', label: 'Projects Completed' },
  { end: 10, suffix: '+', label: 'Years Experience' },
  { end: 1000, suffix: '+', label: 'Happy Clients' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-brand-darkSurface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80"
                alt="Lead Photographer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-accent/30 rounded-full blur-2xl dark:bg-brand-accent/10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-primary dark:text-brand-accent mb-4">
              About LensCraft Studio
            </h2>
            <p className="text-brand-darkBg/80 dark:text-brand-light/80 mb-6 leading-relaxed">
              With over a decade of experience, our studio has mastered the art of
              visual storytelling. We believe every frame tells a story, and we are
              dedicated to capturing the raw emotions, fleeting glances, and timeless
              beauty that make your moments unforgettable.
            </p>
            <p className="text-brand-darkBg/80 dark:text-brand-light/80 mb-8 leading-relaxed">
              From intimate weddings to high‑end commercial campaigns, our approach
              is deeply personal. We combine technical excellence with a passion for
              creativity, ensuring every project is a masterpiece.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(end, 2500);
  return (
    <motion.div
      ref={ref}
      className="text-center p-4 rounded-xl bg-brand-light dark:bg-brand-darkBg/50"
      whileHover={{ scale: 1.05 }}
    >
      <span className="text-3xl font-heading font-bold text-brand-primary dark:text-brand-accent">
        {count}{suffix}
      </span>
      <p className="text-sm text-brand-darkBg/70 dark:text-brand-light/70 mt-1">{label}</p>
    </motion.div>
  );
}