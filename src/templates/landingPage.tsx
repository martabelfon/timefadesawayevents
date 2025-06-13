'use client';

// import BlurText from '@/atoms/titleLandingBlur';
import CardsLanding from '@/molecules/cardsLanding';
import ContactSection from '@/molecules/contactSection';
import Contador from '@/molecules/contador';
import { EventosLanding } from '@/molecules/eventosLanding';
import Footer from '@/molecules/footer';
import Noticias from '@/molecules/noticias';
// import { VideoParallaxSection } from '@/molecules/videoParallaxSection';
import { AuroraHero } from '@/templates/AuroraHero';

import React from 'react'
  
export default function LandingPage() {
  return (
    <div className='bg-gray-950 w-full'>
      <p>Hola</p>
      <AuroraHero />
      <Contador />
      <EventosLanding />
      <CardsLanding />
      <Noticias />
      <ContactSection />
      <Footer />
    </div>
  );
};