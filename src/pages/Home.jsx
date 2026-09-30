import React from 'react';
import Header from '@/components/casaviva/Header';
import Hero from '@/components/casaviva/Hero';
import Manifesto from '@/components/casaviva/Manifesto';
import Environments from '@/components/casaviva/Environments';
import Experiences from '@/components/casaviva/Experiences';
import HowItWorks from '@/components/casaviva/HowItWorks';
import Structure from '@/components/casaviva/Structure';
import Gallery from '@/components/casaviva/Gallery';
import Testimonial from '@/components/casaviva/Testimonial';
import FinalCTA from '@/components/casaviva/FinalCTA';
import Footer from '@/components/casaviva/Footer';
import WhatsAppFab from '@/components/casaviva/WhatsAppFab';

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Manifesto />
        <Environments />
        <Experiences />
        <HowItWorks />
        <Structure />
        <Gallery />
        <Testimonial />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}