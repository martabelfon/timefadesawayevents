'use client';

import { eventos } from "@/data/eventos";
import NavBar from '@/molecules/navbar';
import BlurText from "@/atoms/titleLandingBlur";
import Image from "next/image";
import i18n from '@/lib/i18n';
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

const SUPPORTED_LANGS = ['es', 'en', 'fr', 'de'] as const;
type Lang = typeof SUPPORTED_LANGS[number];

const safeGet = (obj: any, lang: string, fallback: string = ''): string => {
  if (obj && typeof obj === 'object' && typeof obj[lang] === 'string') return obj[lang];
  if (obj && typeof obj === 'object') {
    for (const key of Object.keys(obj)) {
      if (typeof obj[key] === 'string') return obj[key];
    }
  }
  return fallback;
};

const evento = eventos.find(e => e.id === "4");

export default function Evento4Page() {
        const { t } = useTranslation('eventos');
  
  const [lang, setLang] = useState<Lang>((SUPPORTED_LANGS.includes(i18n.language as Lang) ? i18n.language : 'es') as Lang);

  useEffect(() => {
    const handleLangChange = (lng: string) => {
      if (SUPPORTED_LANGS.includes(lng as Lang)) setLang(lng as Lang);
      else setLang('es');
    };
    i18n.on('languageChanged', handleLangChange);
    return () => i18n.off('languageChanged', handleLangChange);
  }, []);

  if (!evento) return <div>{t('errorMessage')}</div>;
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-900">
      <NavBar isScrolled={false} />
      <section className="max-w-5xl mx-auto pt-[120px] pb-20 px-4 flex flex-col items-center">
        <BlurText text={safeGet(evento.titulo, lang)} className="flex items-center justify-center text-white text-3xl gendy-font text-center sm:text-5xl md:text-7xl" />
        <div className="w-full flex justify-center mb-8 mt-5">
          <div className="relative w-full max-w-lg h-64 md:h-80 rounded-xl overflow-hidden border-2 border-[color:var(--color-principal)]/40 mx-auto">
            <Image
              src={evento.imagen || '/default.jpg'}
              alt={safeGet(evento.titulo, lang)}
              fill
              className="object-cover rounded-xl"
              priority
            />
            <div className="absolute top-3 left-3 bg-[color:var(--color-principal)] text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">
              {safeGet(evento.fecha, lang)}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 mt-4">
          {[safeGet(evento.descripcion1, lang), safeGet(evento.descripcion2, lang), safeGet(evento.descripcion3, lang), safeGet(evento.descripcion4, lang), safeGet(evento.descripcion5, lang), safeGet(evento.descripcion6, lang), safeGet(evento.descripcion7, lang)]
            .filter(Boolean)
            .map((desc, idx) => (
              <p key={idx} className="text-white text-lg mb-2 text-justify">{desc}</p>
            ))}
        </div>
        {evento.imagenes && evento.imagenes.length > 0 && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {evento.imagenes.map((img, idx) => (
              <div key={idx} className="relative w-full h-48 rounded-lg overflow-hidden border-2 border-[color:var(--color-principal)]/30">
                <Image src={img} alt={safeGet(evento.titulo, lang) + ' extra ' + idx} fill className="object-cover" />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
