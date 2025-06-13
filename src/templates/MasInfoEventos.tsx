import { eventos } from "@/data/eventos";
import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";
import NavBar from '@/molecules/navbar';

interface MasInfoEventosProps {
  params: { id: string };
}

export default function MasInfoEventos({ params }: MasInfoEventosProps) {
  const evento = eventos.find(e => e.id === params.id);
  if (!evento) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-900">
      <NavBar isScrolled={false} />
      <section className="max-w-3xl mx-auto pt-[120px] pb-20 px-4 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-[color:var(--color-principal)] mb-8 gendy-font drop-shadow">
          {evento.titulo}
        </h1>
        <div className="w-full flex flex-col md:flex-row gap-8 items-center mb-8">
          <div className="relative w-full md:w-2/5 h-64 md:h-80 rounded-xl overflow-hidden border-2 border-[color:var(--color-principal)]/40">
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
          <div className="flex-1 min-w-0 flex flex-col justify-center items-center md:items-start md:w-3/5 w-full">
            <p className="text-white text-lg mb-4 break-words w-full max-w-full text-justify">{evento.descripcion}</p>
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
          const imagenes = [...(evento.imagenes || [])].filter((img): img is string => Boolean(img));
          const bloques = [];
          let imgIdx = 0;
          for (let i = 0; i < descripciones.length; i++) {
            const isEven = i % 2 === 0;
            let imgSrc: string | undefined = undefined;
            while (imgIdx < imagenes.length && !imagenes[imgIdx]) imgIdx++;
            if (imgIdx < imagenes.length) {
              imgSrc = imagenes[imgIdx]!.startsWith('/') ? imagenes[imgIdx]! : `/images/eventos/${imagenes[imgIdx]!}`;
            }
            bloques.push(
              <div key={i} className={`flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''} items-center gap-6 md:gap-10 w-full mb-8`}>
                {imgSrc && (
                  <div className="w-full md:w-2/5 flex justify-center">
                    <Image
                      src={imgSrc}
                      alt={evento.titulo + ' imagen ' + (imgIdx+1)}
                      width={420}
                      height={260}
                      className="rounded-xl object-cover w-full max-h-64 shadow-md"
                      style={{objectFit:'cover'}}
                      sizes="(max-width: 768px) 100vw, 420px"
                      priority={i === 0}
                    />
                  </div>
                )}
                <div className="w-full md:w-3/5">
                  <p className="text-white text-lg break-words w-full max-w-full text-justify">{descripciones[i]}</p>
                </div>
              </div>
            );
            if (imgSrc) imgIdx++;
          }
          // Mostrar imágenes sobrantes
          for (; imgIdx < imagenes.length; imgIdx++) {
            if (!imagenes[imgIdx]) continue;
            const imgSrc = imagenes[imgIdx]!.startsWith('/') ? imagenes[imgIdx]! : `/images/eventos/${imagenes[imgIdx]!}`;
            bloques.push(
              <div key={'img'+imgIdx} className="flex justify-center w-full mb-8">
                <Image
                  src={imgSrc}
                  alt={evento.titulo + ' extra ' + (imgIdx+1)}
                  width={420}
                  height={260}
                  className="rounded-xl object-cover w-full max-h-64 shadow-md"
                  style={{objectFit:'cover'}}
                  sizes="(max-width: 768px) 100vw, 420px"
                />
              </div>
            );
          }
          return bloques;
        })()}
      </section>
    </div>
  );
}
