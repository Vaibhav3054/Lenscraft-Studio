'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael',
    role: 'Wedding Clients',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    text: 'LensCraft captured our wedding day beyond our dreams. Every photo tells a story, and we are forever grateful.',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Fashion Brand CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    text: 'Their commercial work is unmatched. Professional, creative, and incredibly detailed. Highly recommended.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Portrait Session',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    text: 'A truly artistic experience. I felt comfortable and the results were stunning. My favorite photographer!',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-brand-light dark:bg-brand-darkBg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-heading font-bold text-brand-primary dark:text-brand-accent mb-12"
        >
          Client Testimonials
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-brand-darkSurface rounded-2xl p-8 md:p-10 shadow-lg"
            >
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-20 h-20 rounded-full mx-auto object-cover mb-4 border-4 border-brand-accent"
              />
              <div className="flex justify-center mb-2">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-brand-darkBg dark:text-brand-light mb-4 italic leading-relaxed">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <h4 className="font-heading font-semibold text-brand-primary dark:text-brand-accent">
                {testimonials[current].name}
              </h4>
              <p className="text-sm text-brand-darkBg/60 dark:text-brand-light/60">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 p-2 rounded-full bg-white dark:bg-brand-darkSurface shadow-md text-brand-primary hover:text-brand-secondary transition"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 p-2 rounded-full bg-white dark:bg-brand-darkSurface shadow-md text-brand-primary hover:text-brand-secondary transition"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === current ? 'bg-brand-primary dark:bg-brand-accent scale-110' : 'bg-brand-accent/50 dark:bg-brand-accent/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}