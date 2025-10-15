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

const safeGet = (obj: Record<string, string> | string, lang: string, fallback: string = ''): string => {
  if (obj && typeof obj === 'object' && typeof (obj as Record<string, string>)[lang] === 'string') return (obj as Record<string, string>)[lang];
  if (obj && typeof obj === 'object') {
    for (const key of Object.keys(obj)) {
      if (typeof (obj as Record<string, string>)[key] === 'string') return (obj as Record<string, string>)[key];
    }
  }
  if (typeof obj === 'string') return obj;
  return fallback;
};

const evento = eventos.find(e => e.id === "6");

export default function Evento6Page() {      
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
        <BlurText  text={safeGet(evento.titulo, lang)} className="flex items-center justify-center text-white text-3xl gendy-font text-center sm:text-5xl md:text-7xl" />
        <div className="w-full flex justify-center mb-8 mt-5">
          <div className="relative w-full max-w-lg mx-auto overflow-hidden border-2 border-[color:var(--color-principal)]/40 rounded-xl bg-black">
            <div className="w-full h-auto max-h-[700px] flex items-center justify-center">
              <img
                src={evento.imagen || '/default.jpg'}
                alt={safeGet(evento.titulo, lang)}
                width={900}
                height={600}
                className="object-contain w-auto max-w-full h-auto"
                style={{ display: 'block', margin: '0 auto' }}
              />
              <div className="absolute top-3 left-3 bg-[color:var(--color-principal)] text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                {safeGet(evento.fecha, lang)}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 mt-4">
          {/* Descripciones 1, 2 y 3 */}
          {[evento.descripcion1, evento.descripcion2, evento.descripcion3]
            .filter(Boolean)
            .map((desc, idx) => (
              <p key={idx} className="text-white text-lg mb-2 text-justify" dangerouslySetInnerHTML={{ __html: safeGet(desc as Record<string, string> | string, lang) }} />
            ))}

          {/* Imagen y descripcion5+ en layout horizontal si hay imagen */}
          {(() => {
            const imgUrl = safeGet(evento.descripcionImg ?? {}, lang, '');
            const descsRestantes = [evento.descripcion5, evento.descripcion6, evento.descripcion7, evento.descripcion8, evento.descripcion9, evento.descripcion10]
              .filter(Boolean)
              .map((desc, idx) => (
                <p key={"descRestante"+idx} className="text-white text-lg mb-2 text-justify" dangerouslySetInnerHTML={{ __html: safeGet(desc as Record<string, string> | string, lang) }} />
              ));
            const desc11 = evento.descripcion11 ? (
              <div className="w-full mt-6">
                <p className="text-white text-lg mb-2 text-justify" dangerouslySetInnerHTML={{ __html: safeGet(evento.descripcion11, lang) }} />
              </div>
            ) : null;
            if (imgUrl && (imgUrl.startsWith('/') || imgUrl.startsWith('http'))) {
              return (
                <>
                  <div className="w-full flex flex-col md:flex-row gap-6 items-start my-4">
                    <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
                      <img
                        src={imgUrl}
                        alt={safeGet(evento.titulo, lang) + ' cartel'}
                        style={{ maxWidth: '400px', width: '100%', height: 'auto', display: 'block' }}
                      />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col">{descsRestantes}</div>
                  </div>
                  {desc11}
                </>
              );
            } else {
              return <>{descsRestantes}{desc11}</>;
            }
          })()}
        </div>
        {evento.imagenes && evento.imagenes.length > 0 && (
          <div className="w-full flex flex-col items-center mt-8">
            {evento.imagenes.map((img, idx) => (
              <div key={idx} className="w-full flex justify-center mb-6">
                <img
                  src={img}
                  alt={safeGet(evento.titulo, lang) + ' extra ' + idx}
                  style={{ maxWidth: '400px', width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
