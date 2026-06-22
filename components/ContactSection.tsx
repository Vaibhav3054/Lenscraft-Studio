'use client';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-brand-darkSurface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-heading font-bold text-center text-brand-primary dark:text-brand-accent mb-12"
        >
          Contact & Booking
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-sm font-medium text-brand-darkBg dark:text-brand-light mb-1">Name *</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-brand-accent/50 bg-brand-light/50 dark:bg-brand-darkBg focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-darkBg dark:text-brand-light mb-1">Email *</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-brand-accent/50 bg-brand-light/50 dark:bg-brand-darkBg focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-darkBg dark:text-brand-light mb-1">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-lg border border-brand-accent/50 bg-brand-light/50 dark:bg-brand-darkBg focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-brand-darkBg dark:text-brand-light mb-1">Event Type</label>
                <select className="w-full px-4 py-3 rounded-lg border border-brand-accent/50 bg-brand-light/50 dark:bg-brand-darkBg focus:outline-none focus:ring-2 focus:ring-brand-primary">
                  <option>Wedding</option>
                  <option>Portrait</option>
                  <option>Event</option>
                  <option>Fashion</option>
                  <option>Commercial</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-darkBg dark:text-brand-light mb-1">Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-lg border border-brand-accent/50 bg-brand-light/50 dark:bg-brand-darkBg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-darkBg dark:text-brand-light mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-brand-accent/50 bg-brand-light/50 dark:bg-brand-darkBg focus:outline-none focus:ring-2 focus:ring-brand-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-brand-primary text-white font-semibold hover:bg-brand-secondary dark:bg-brand-accent dark:text-brand-darkBg transition shadow-lg"
            >
              Send Booking Request
            </button>
          </motion.form>

          {/* Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-brand-light dark:bg-brand-darkBg p-6 rounded-2xl">
              <h3 className="font-heading font-semibold text-xl text-brand-primary dark:text-brand-accent mb-4">
                Studio Info
              </h3>
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-brand-secondary" size={20} />
                <span className="text-brand-darkBg dark:text-brand-light">
                  123 Photography Lane, Creative District, NY 10001
                </span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Mail className="text-brand-secondary" size={20} />
                <a href="mailto:hello@lenscraft.studio" className="hover:text-brand-primary dark:hover:text-brand-accent">
                  hello@lenscraft.studio
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-brand-secondary" size={20} />
                <a href="tel:+1234567890" className="hover:text-brand-primary dark:hover:text-brand-accent">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            {/* Interactive Map (Google Maps Embed) */}
            <div className="rounded-2xl overflow-hidden shadow-md h-64">
              <iframe
                title="Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.98510768463478!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1610000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 text-brand-primary dark:text-brand-accent">
              {['Instagram', 'Facebook', 'Twitter', 'Pinterest'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="hover:text-brand-secondary dark:hover:text-brand-light transition text-sm font-medium"
                >
                  {s}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}