import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioGallery from '@/components/PortfolioGallery';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import BehindScenes from '@/components/BehindScenes';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioGallery />
      <Testimonials />
      <Pricing />
      <BehindScenes />
      <ContactSection />
    </>
  );
}