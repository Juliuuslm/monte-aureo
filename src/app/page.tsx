import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Villas from '@/components/Villas';
import Activities from '@/components/Activities';
import Services from '@/components/Services';
import Location from '@/components/Location';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AvailabilityWidget from '@/components/AvailabilityWidget';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Villas />
        <Activities />
        <Services />
        <Location />
        <CTA />
      </main>
      <Footer />
      <AvailabilityWidget />
    </>
  );
}
