import ScrollSpy from "@/components/ScrollSpy";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ServicesSection from "@/components/sections/services-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import PackagesSection from "@/components/sections/packages-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ContactSection from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <>
      <ScrollSpy />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <PackagesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}