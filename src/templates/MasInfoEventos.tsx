import { eventos } from "@/data/eventos";
import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";
import NavBar from '@/molecules/navbar';
import BlurText from "@/atoms/titleLandingBlur";

interface MasInfoEventosProps {
  params: { id: string };
}

export default function MasInfoEventos({ params }: MasInfoEventosProps) {
  const evento = eventos.find(e => e.id === params.id);
  if (!evento) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-900">
      <NavBar isScrolled={false} />
      <section className="max-w-5xl mx-auto pt-[120px] pb-20 px-4 flex flex-col items-center">
      <BlurText text={evento.titulo} className="flex items-center justify-center text-white text-3xl gendy-font text-center sm:text-5xl md:text-7xl" />
        {/* Imagen principal centrada */}
        <div className="w-full flex justify-center mb-8 mt-5">
          <div className="relative w-full max-w-lg h-64 md:h-80 rounded-xl overflow-hidden border-2 border-[color:var(--color-principal)]/40 mx-auto">
            <Image
              src={evento.imagen || '/default.jpg'}
              alt={evento.titulo}
              fill
              className="object-cover rounded-xl"
              priority
            />
            <div className="absolute top-3 left-3 bg-[color:var(--color-principal)] text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">
              {evento.fecha}
            </div>
          </div>
        </div>
        {/* Descripciones e imágenes adicionales en zig-zag */}
        {(() => {
            const descripciones = [
              evento.descripcion1,
              evento.descripcion2,
              evento.descripcion3,
              evento.descripcion4,
              evento.descripcion5,
              evento.descripcion6,
              evento.descripcion7
            ].filter(Boolean);

            const bloques = descripciones.map((descripcion, i) => (
              <div key={i} className="w-full mb-6">
                <p className="flex justify-center text-white text-lg break-words w-full max-w-full text-justify">{descripcion}</p>
              </div>
            ));

            return (
              <div className="flex flex-col items-start w-full">
                {bloques}
              </div>
            );
          })()}
      </section>
    </div>
  );
}
