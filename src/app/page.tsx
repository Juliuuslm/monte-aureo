import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Villas from '@/components/Villas';
import Activities from '@/components/Activities';
import Services from '@/components/Services';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import TrustBadges from '@/components/TrustBadges';
import Location from '@/components/Location';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AvailabilityWidget from '@/components/AvailabilityWidget';
import BookingCounter from '@/components/BookingCounter';
import MobileNavBar from '@/components/MobileNavBar';
import { ScrollProgress } from '@/components/InteractiveElements';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <TrustBadges variant="minimal" showTitle={false} className="py-6 bg-white/80 backdrop-blur-sm" />
        <About />
        <Villas />
        <TestimonialsCarousel />
        <Activities />
        <Services />
        <Location />
        <CTA />
      </main>
      <Footer />
      <AvailabilityWidget />
      <BookingCounter />
      <MobileNavBar />
    </>
  );
}
