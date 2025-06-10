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
    <>
      <NavBar isScrolled={false} />
      <section className="bg-gradient-to-b from-[#FFF8E1] via-[#FFFDF6] to-[#FFF8E1] text-gray-900 min-h-screen w-full px-2 sm:px-6 pt-[100px] pb-20 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full flex flex-col gap-8 bg-white/90 rounded-2xl shadow-lg p-6 md:p-10 border border-[color:var(--color-principal)]/30">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[color:var(--color-principal)] text-center mb-4 drop-shadow-md">Más información</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-[color:var(--color-principal)] text-center mb-2">{evento.titulo}</h2>
          <p className="text-gray-700 text-base md:text-lg text-center mb-2">{evento.fecha}</p>

          {/* Intercalar imágenes y descripciones en zig-zag */}
          {(() => {
            const descripciones = [
              evento.descripcion,
              evento.descripcion1,
              evento.descripcion2,
              evento.descripcion3,
              evento.descripcion4,
              evento.descripcion5,
              evento.descripcion6,
              evento.descripcion7
            ].filter(Boolean);
            const imagenes = [evento.imagen, ...(evento.imagenes || [])].filter((img): img is string => Boolean(img));
            const bloques = [];
            let imgIdx = 0;
            for (let i = 0; i < descripciones.length; i++) {
              const isEven = i % 2 === 0;
              // Buscar la siguiente imagen válida (que no sea undefined ni vacía)
              let imgSrc: string | undefined = undefined;
              while (imgIdx < imagenes.length && !imagenes[imgIdx]) imgIdx++;
              if (imgIdx < imagenes.length) {
                imgSrc = imagenes[imgIdx]!.startsWith('/') ? imagenes[imgIdx]! : `/images/eventos/${imagenes[imgIdx]!}`;
              }
              bloques.push(
                <div key={i} className={`flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''} items-center gap-6 md:gap-10 w-full`}>
                  {imgSrc && (
                    <div className="w-full md:w-1/2 flex justify-center">
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
                  <div className="w-full md:w-1/2">
                    <p className="text-gray-700 text-base md:text-lg text-center md:text-left mb-2">{descripciones[i]}</p>
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
                <div key={'img'+imgIdx} className="flex justify-center w-full">
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
        </div>
      </section>
    </>
  );
}
