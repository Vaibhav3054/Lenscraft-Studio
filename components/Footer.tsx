import Link from 'next/link';
import { Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-primary dark:bg-brand-darkSurface text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h4 className="text-2xl font-heading font-bold mb-4">LensCraft</h4>
          <p className="text-white/70 mb-4">
            Capturing moments that last forever. Professional photography studio based in New York.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-heading font-semibold text-lg mb-4">Quick Links</h5>
          <ul className="space-y-2 text-white/70">
            <li><a href="#hero" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h5 className="font-heading font-semibold text-lg mb-4">Services</h5>
          <ul className="space-y-2 text-white/70">
            <li>Wedding Photography</li>
            <li>Portrait Photography</li>
            <li>Event Photography</li>
            <li>Fashion Photography</li>
            <li>Commercial Photography</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h5 className="font-heading font-semibold text-lg mb-4">Newsletter</h5>
          <p className="text-white/70 mb-4">Stay updated with our latest work and offers.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l-lg text-brand-darkBg focus:outline-none"
            />
            <button className="bg-brand-accent px-4 rounded-r-lg hover:bg-brand-secondary transition flex items-center">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-white/20 text-center text-white/60 text-sm">
        &copy; {new Date().getFullYear()} LensCraft Studio. All rights reserved.
      </div>
    </footer>
  );
}