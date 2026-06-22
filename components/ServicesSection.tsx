'use client';
import { motion } from 'framer-motion';
import { Camera, Users, Calendar, Shirt, Package, Building2 } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Wedding Photography',
    description: 'Timeless coverage of your most cherished day, from preparations to the last dance.',
  },
  {
    icon: Users,
    title: 'Portrait Photography',
    description: 'Capturing personality and connection in every shot, whether solo, couple, or family.',
  },
  {
    icon: Calendar,
    title: 'Event Photography',
    description: 'Corporate events, galas, and private parties documented with style and discretion.',
  },
  {
    icon: Shirt,
    title: 'Fashion Photography',
    description: 'Editorial and lookbook photography that brings your brand’s vision to life.',
  },
  {
    icon: Package,
    title: 'Product Photography',
    description: 'Clean, detailed product imagery optimized for e‑commerce and advertising.',
  },
  {
    icon: Building2,
    title: 'Commercial Photography',
    description: 'Professional imagery for branding, marketing, and large‑scale commercial projects.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-brand-light dark:bg-brand-darkBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-heading font-bold text-center text-brand-primary dark:text-brand-accent mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white dark:bg-brand-darkSurface rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-brand-accent/30 flex items-center justify-center mb-4 text-brand-primary dark:text-brand-accent">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-brand-primary dark:text-brand-accent mb-2">
                {service.title}
              </h3>
              <p className="text-brand-darkBg/70 dark:text-brand-light/70 mb-4">
                {service.description}
              </p>
              <button className="text-sm font-medium text-brand-secondary dark:text-brand-accent hover:underline flex items-center gap-1">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}