'use client';

import CardsLanding from '@/molecules/cardsLanding';
import ContactSection from '@/molecules/contactSection';
import { EventosLanding } from '@/molecules/eventosLanding';
import Footer from '@/molecules/footer';
import Noticias from '@/molecules/noticias';
// import { VideoParallaxSection } from '@/molecules/videoParallaxSection';
import { AuroraHero } from '@/templates/AuroraHero';

import React from 'react'
  
export default function LandingPage() {
  return (
    <div className='bg-gray-950 w-full'>
      {/* <VideoParallaxSection className="w-full min-h-screen h-screen" src="/images/fake/fakeIntro.mp4" overlayOpacity={0} /> */}
      <AuroraHero />
      <CardsLanding />
      {/* <VideoParallaxSection className="w-full" src="/images/fake/fakeIntro.mp4" text='Creamos experiencias que dejan huella'/> */}
      <EventosLanding />
      <Noticias />
      <ContactSection />
      <Footer />
    </div>
  );
};