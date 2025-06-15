'use client';

import { noticias } from "@/data/noticias";
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

export default function Noticia1Page() {
  const { t } = useTranslation('noticias');
  
  const noticia = noticias[0];
  const [lang, setLang] = useState<Lang>((SUPPORTED_LANGS.includes(i18n.language as Lang) ? i18n.language : 'es') as Lang);

  useEffect(() => {
    const handleLangChange = (lng: string) => {
      if (SUPPORTED_LANGS.includes(lng as Lang)) setLang(lng as Lang);
      else setLang('es');
    };
    i18n.on('languageChanged', handleLangChange);
    return () => i18n.off('languageChanged', handleLangChange);
  }, []);

  if (!noticia) return <div>{t('errorMessage')}</div>;
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-900">
      <NavBar isScrolled={false} />
      <section className="max-w-5xl mx-auto pt-[120px] pb-20 px-4 flex flex-col items-center">
        <BlurText text={safeGet(noticia.titulo, lang)} className="flex items-center justify-center text-white text-3xl gendy-font text-center sm:text-5xl md:text-7xl" />
        <div className="relative w-full max-w-lg mx-auto overflow-hidden border-2 border-[color:var(--color-principal)]/40 rounded-xl bg-black">
          <div className="w-full h-auto max-h-[700px] flex items-center justify-center">
            <img
              src={noticia.imagen || '/default.jpg'}
              alt={safeGet(noticia.titulo, lang)}
              width={900}
              height={600}
              className="object-contain w-full h-auto"
            />
            <div className="absolute top-3 left-3 bg-[color:var(--color-principal)] text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">
              {safeGet(noticia.fecha, lang)}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 mt-4">
          <p className="text-white text-lg mb-2 text-justify">{safeGet(noticia.descripcion, lang)}</p>
          {safeGet(noticia.descripcion2, lang) && (
            <p className="text-white text-lg mb-2 text-justify">{safeGet(noticia.descripcion2, lang)}</p>
          )}
        </div>
      </section>
    </div>
  );
}
