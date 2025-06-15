'use client';

import React, { useEffect, useState } from 'react';
import NavBar from '@/molecules/navbar';
import BlurText from '@/atoms/titleLandingBlur';
import { noticias } from '@/data/noticias';
import { ColorAnimationBackground } from '@/atoms/ ColorAnimationBackground';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import FooterPages from '@/molecules/footerPages';
import Link from 'next/link';
import i18n from '@/lib/i18n';
import Image from 'next/image';

const SUPPORTED_LANGS = ['es', 'en', 'fr', 'de'] as const;
type Lang = typeof SUPPORTED_LANGS[number];

const safeGet = (obj: Record<string, string> | string | undefined, lang: string, fallback: string = ''): string => {
  if (obj && typeof obj === 'object' && typeof obj[lang] === 'string') return obj[lang];
  if (obj && typeof obj === 'object') {
    for (const key of Object.keys(obj)) {
      if (typeof obj[key] === 'string') return obj[key];
    }
  }
  if (typeof obj === 'string') return obj;
  return fallback;
};

const NoticiasPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<Lang>((SUPPORTED_LANGS.includes(i18n.language as Lang) ? i18n.language : 'es') as Lang);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleLangChange = (lng: string) => {
      if (SUPPORTED_LANGS.includes(lng as Lang)) setLang(lng as Lang);
      else setLang('es');
    };
    i18n.on('languageChanged', handleLangChange);
    return () => i18n.off('languageChanged', handleLangChange);
  }, []);

  // Ordenar por fecha descendente y mostrar solo las 4 más recientes
  const meses = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];
  const parseFecha = (f: string) => {
    const partes = f.toLowerCase().replace(/,/g, '').split(' ');
    const dia = partes[0];
    const mesNum = meses.findIndex(m => f.toLowerCase().includes(m)) + 1;
    const anio = partes[partes.length - 1];
    return new Date(`${anio}-${mesNum.toString().padStart(2, '0')}-${dia.padStart(2, '0')}`);
  };
  const noticiasOrdenadas = [...noticias].sort(
    (a, b) => parseFecha(b.fecha.es).getTime() - parseFecha(a.fecha.es).getTime()
  );
  const noticiasMostrar = noticiasOrdenadas.slice(0, 4);

  return (
    <>
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
              text={{
                es: 'Lo más reciente que debes saber',
                en: 'The latest you should know',
                fr: 'Les dernières nouvelles à savoir',
                de: 'Das Neueste, was du wissen solltest'
              }[lang]}
              className="text-white text-4xl sm:text-5xl md:text-6xl gendy-font text-center mb-6"
            />
            <div className="w-full flex flex-row flex-nowrap gap-8 justify-center items-center overflow-x-auto md:overflow-x-visible px-2 md:px-0 mx-auto mt-10">
              {noticiasMostrar.map((noticia) => (
                <div
                  key={noticia.id}
                  className={
                    'bg-white/90 rounded-2xl shadow-xl overflow-hidden border border-[color:var(--color-principal)]/30 hover:scale-105 transition-transform duration-300 flex flex-col flex-shrink-0 mx-2 my-4 ' +
                    (noticiasMostrar.length < 4
                      ? 'max-w-xs min-w-[75vw] sm:min-w-[340px] md:w-[340px] lg:w-[380px]'
                      : 'max-w-xs min-w-[75vw] sm:min-w-[300px] md:w-[300px] lg:w-[340px]')
                  }
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={noticia.imagen}
                      alt={safeGet(noticia.titulo, lang)}
                      className="object-cover w-full h-full rounded-t-2xl"
                      style={{ objectFit: 'cover' }}
                      width={500}
                      height={200}
                    />
                    <div className="absolute top-3 left-3 bg-[color:var(--color-principal)] text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                      {safeGet(noticia.fecha, lang)}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <h3 className="gendy-font text-xl font-bold mb-2 text-[color:var(--color-principal)] drop-shadow-md text-center">
                      {safeGet(noticia.titulo, lang)}
                    </h3>
                    <p className="text-gray-700 text-base text-center mb-2">{safeGet(noticia.descripcion, lang)}</p>
                    {safeGet(noticia.descripcion2, lang) && (
                      <Link href={`/noticias/noticia1`} className="mt-2 mx-auto">
                        <button className="px-4 py-2 rounded bg-[color:var(--color-principal)] text-white font-semibold shadow hover:bg-[color:var(--color-principal-dark)] transition-colors">
                          {lang === 'es' ? 'Saber más' : lang === 'en' ? 'Read more' : lang === 'fr' ? 'En savoir plus' : 'Mehr erfahren'}
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </ColorAnimationBackground>
      <FooterPages />
    </>
  );
};

export default NoticiasPage;
