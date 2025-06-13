import { notFound } from 'next/navigation';
import { noticias } from '@/data/noticias';
import NavBar from '@/molecules/navbar';
import Image from 'next/image';
import React from 'react';
import BlurText from '@/atoms/titleLandingBlur';

interface NoticiaPageProps {
  params: { id: string };
}

const NoticiaPage = ({ params }: NoticiaPageProps) => {
  const idx = parseInt(params.id, 10);
  const noticia = noticias[idx];

  if (!noticia) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-900">
      <NavBar isScrolled={false} />
      <section className="max-w-5xl mx-auto pt-[120px] pb-20 px-4 flex flex-col items-center">
        {/* <h1 className="text-3xl md:text-5xl font-extrabold text-center text-[color:var(--color-principal)] mb-8 gendy-font drop-shadow">
          {noticia.titulo}
        </h1> */}
        <BlurText text={noticia.titulo} className="w-full max-w-full flex items-center justify-center text-white text-3xl gendy-font text-center sm:text-5xl md:text-7xl mx-auto" />

        <div className="w-full flex flex-col md:flex-row gap-8 items-center mb-8">
          <div className="relative w-full md:w-2/5 h-64 md:h-80 rounded-xl overflow-hidden border-2 border-[color:var(--color-principal)]/40">
            <Image
              src={noticia.imagen}
              alt={noticia.titulo}
              fill
              className="object-cover rounded-xl"
              priority
            />
            <div className="absolute top-3 left-3 bg-[color:var(--color-principal)] text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">
              {noticia.fecha}
            </div>
          </div>
          <div className="flex-1 min-w-0 flex flex-col justify-center items-center md:items-start md:w-3/5 w-full">
            <p className="text-white text-lg mb-4 break-words w-full max-w-full text-justify">{noticia.descripcion}</p>
            {noticia.descripcion2 && (
              <p className="text-white text-base whitespace-pre-line break-words w-full max-w-full text-justify">{noticia.descripcion2}</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoticiaPage;
