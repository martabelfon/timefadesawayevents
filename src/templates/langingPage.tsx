'use client';

import { AnimatedButton } from '@/atoms/AnimatedButton';
import BlurText from '@/atoms/titleLandingBlur';
import { EventosLanding } from '@/molecules/eventosLanding';
import Footer from '@/molecules/footer';
import { AuroraHero } from '@/templates/AuroraHero';

import React from 'react'
  
export default function LandingPage() {
  return (
    <div className='bg-gray-950 w-full'>
      <AuroraHero />
      <section
        id="eventos-landing"
        className="min-h-screen flex items-center justify-center p-4 sm:p-8"
      >
        <EventosLanding />
      </section>
      <section className="w-full flex items-center justify-center p-4 sm:p-8 order-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-7xl">
          {[1,2,3,4].map((i) => (
            <div key={i} className="flex flex-col items-center rounded-2xl shadow-lg p-4 sm:p-6 w-full min-w-0">
              <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden rounded-xl mb-4">
                <img
                  src={`/images/logo/logo.jpg`}
                  alt={`Apartado ${i}`}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <p className="text-white text-center text-sm sm:text-base md:text-lg">Texto del apartado {i}. Puedes personalizar este texto para cada bloque.</p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full flex flex-col items-center justify-center p-4 sm:p-8 order-3">
        <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--color-principal)] mb-8 text-center">¿Quieres contactar con nosotros?</h2>
        <a href="/contacto">
          <AnimatedButton fixedColor="var(--color-principal)" className="mt-4">
            Contáctanos
          </AnimatedButton>
        </a>
      </section>

      <section className="w-full flex flex-col items-center justify-center p-4 sm:p-8 order-3 bg-red-500">

        <BlurText text="Hola que pasa" />
        <p>Hola</p>
      </section>

      <Footer />
    </div>
  );
};