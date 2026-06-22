'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter Package',
    price: '$299',
    features: ['2 Hours Coverage', '50 Edited Photos'],
    highlighted: false,
  },
  {
    name: 'Professional Package',
    price: '$799',
    features: ['6 Hours Coverage', '200 Edited Photos', 'Online Gallery'],
    highlighted: true,
  },
  {
    name: 'Premium Package',
    price: '$1,499',
    features: ['Full-Day Coverage', 'Unlimited Edited Photos', 'Premium Album'],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white dark:bg-brand-darkSurface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-heading font-bold text-center text-brand-primary dark:text-brand-accent mb-12"
        >
          Pricing Packages
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className={`relative rounded-2xl p-8 shadow-lg flex flex-col items-center text-center ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-brand-primary to-brand-secondary text-white ring-4 ring-brand-accent'
                  : 'bg-brand-light dark:bg-brand-darkBg'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-darkBg text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-2xl font-heading font-semibold mb-2">{plan.name}</h3>
              <div className="text-4xl font-heading font-bold mb-6">
                {plan.price}
                <span className="text-lg font-normal">/session</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2">
                    <Check size={18} className="text-brand-accent dark:text-brand-accent" />
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  plan.highlighted
                    ? 'bg-white text-brand-primary hover:bg-brand-light'
                    : 'bg-brand-primary text-white hover:bg-brand-secondary dark:bg-brand-accent dark:text-brand-darkBg'
                }`}
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}