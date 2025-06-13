'use client';

import React, { useEffect, useState } from 'react';
import NavBar from '@/molecules/navbar';
import BlurText from '@/atoms/titleLandingBlur';
import { noticias } from '@/data/noticias';
import { ColorAnimationBackground } from '@/atoms/ ColorAnimationBackground';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const NoticiasPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ColorAnimationBackground className="relative min-h-screen overflow-hidden bg-gray-950 text-gray-200 flex flex-col items-center justify-start">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      <NavBar isScrolled={isScrolled} />

      <main className="w-full max-w-6xl flex flex-col items-center px-4 sm:px-6 mt-[90px]">
        <section
          id="noticias"
          className="w-full flex flex-col items-center justify-center pb-20"
        >
          <BlurText
            text="Lo más reciente que debes saber"
            className="text-white text-4xl sm:text-5xl md:text-6xl gendy-font text-center mb-6"
          />
          <div className="w-full flex flex-row flex-nowrap gap-8 justify-center items-center overflow-x-auto md:overflow-x-visible px-2 md:px-0 mx-auto mt-10">
            {(() => {
              const meses = [
                "enero", "febrero", "marzo", "abril", "mayo", "junio",
                "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
              ];
              const parseFecha = (f: string) => {
                const partes = f.toLowerCase().replace(/,/g, '').split(' ');
                const dia = partes[0];
                const mesNum = meses.findIndex(m => f.toLowerCase().includes(m)) + 1;
                const anio = partes[partes.length - 1];
                return new Date(`${anio}-${mesNum.toString().padStart(2, "0")}-${dia.padStart(2, "0")}`);
              };

              const noticiasOrdenadas = [...noticias].sort(
                (a, b) => parseFecha(b.fecha).getTime() - parseFecha(a.fecha).getTime()
              );
              const noticiasMostrar = noticiasOrdenadas.slice(0, 4);

              return noticiasMostrar.map((noticia) => {
                // Buscar el índice real de la noticia en el array original para usarlo como id
                const noticiaId = noticias.findIndex(n => n.titulo === noticia.titulo && n.fecha === noticia.fecha);
                return (
                  <div
                    key={noticiaId}
                    className={
                      "bg-white/90 rounded-2xl shadow-xl overflow-hidden border border-[color:var(--color-principal)]/30 hover:scale-105 transition-transform duration-300 flex flex-col flex-shrink-0 mx-2 my-4 " +
                      (noticiasMostrar.length < 4
                        ? "max-w-xs min-w-[75vw] sm:min-w-[340px] md:w-[340px] lg:w-[380px]"
                        : "max-w-xs min-w-[75vw] sm:min-w-[300px] md:w-[300px] lg:w-[340px]")
                    }
                  >
                    <div className="relative w-full h-48">
                      <img
                        src={noticia.imagen}
                        alt={noticia.titulo}
                        className="object-cover w-full h-full rounded-t-2xl"
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="absolute top-3 left-3 bg-[color:var(--color-principal)] text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                        {noticia.fecha}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <h3 className="gendy-font text-xl font-bold mb-2 text-[color:var(--color-principal)] drop-shadow-md text-center">
                        {noticia.titulo}
                      </h3>
                      <p className="text-gray-700 text-base text-center mb-2">{noticia.descripcion}</p>
                      {noticia.descripcion2 && (
                        <a href={`/noticias/${noticiaId}`} className="mt-2 mx-auto">
                          <button className="px-4 py-2 rounded bg-[color:var(--color-principal)] text-white font-semibold shadow hover:bg-[color:var(--color-principal-dark)] transition-colors">
                            Saber más
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </section>
      </main>
    </ColorAnimationBackground>
  );
};

export default NoticiasPage;
