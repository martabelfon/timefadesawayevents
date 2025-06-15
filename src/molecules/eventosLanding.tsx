import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { eventos } from "@/data/eventos";
import { useTranslation } from "react-i18next";
import i18n from '@/lib/i18n';

function normalizarMes(mes: string) {
  return mes
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/(^|\s)([a-z])/g, (m) => m.toUpperCase());
}

const meses: Record<string, number> = {
  'Enero': 0, 'Febrero': 1, 'Marzo': 2, 'Abril': 3, 'Mayo': 4, 'Junio': 5,
  'Julio': 6, 'Agosto': 7, 'Septiembre': 8, 'Octubre': 9, 'Noviembre': 10, 'Diciembre': 11
};

const SUPPORTED_LANGS = ['es', 'en', 'fr', 'de'] as const;
type Lang = typeof SUPPORTED_LANGS[number];

const safeGet = (obj: any, lang: string, fallback: string = ''): string => {
  if (obj && typeof obj === 'object' && typeof obj[lang] === 'string') return obj[lang];
  if (obj && typeof obj === 'object') {
    for (const key of Object.keys(obj)) {
      if (typeof obj[key] === 'string') return obj[key];
    }
  }
  if (typeof obj === 'string') return obj;
  return fallback;
};

export const EventosLanding = () => {
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

  const eventosParaMostrar = eventos.filter(evento => {
    if (!evento.mostrarEnLanding) return false;
    const fechaStr = safeGet(evento.fecha, lang, safeGet(evento.fecha, 'es'));
    let dia: number, mesTexto: string, anio: string;
    // LOG detallado solo para el evento de noviembre de 2025
    if (fechaStr.includes('noviembre') || fechaStr.includes('Noviembre')) {
      console.log('DEBUG EVENTO NOVIEMBRE:', evento);
    }
    if (/\d+\s*y\s*\d+\s*de\s*[\p{L}]+\s*\d{4}/iu.test(fechaStr)) {
      const match = fechaStr.match(/(\d+)\s*y\s*(\d+)\s*de\s*([\p{L}]+)\s*(\d{4})/iu);
      dia = parseInt(match?.[2] || '1');
      mesTexto = match?.[3] || '';
      anio = match?.[4] || '';
    } else if (/\d+\s*de\s*[\p{L}]+\s*\d{4}/iu.test(fechaStr)) {
      const match = fechaStr.match(/(\d+)\s*de\s*([\p{L}]+)\s*(\d{4})/iu);
      dia = parseInt(match?.[1] || '1');
      mesTexto = match?.[2] || '';
      anio = match?.[3] || '';
    } else if (/^[\p{L}]+\s*\d{4}$/u.test(fechaStr)) {
      const match = fechaStr.match(/([\p{L}]+)\s*(\d{4})/u);
      dia = 1;
      mesTexto = match?.[1] || '';
      anio = match?.[2] || '';
    } else {
      // Split robusto para fechas tipo '7 de noviembre de 2025'
      if (fechaStr.match(/^\d+ de [\p{L}]+ de \d{4}$/iu)) {
        const partes = fechaStr.split(' de ');
        dia = parseInt(partes[0]);
        mesTexto = partes[1];
        anio = partes[2];
      } else {
        const partes = fechaStr.split(' ');
        if (partes.length === 3) {
          dia = parseInt(partes[0]);
          mesTexto = partes[1];
          anio = partes[2];
        } else if (partes.length === 2) {
          dia = 1;
          mesTexto = partes[0];
          anio = partes[1];
        } else {
          if (fechaStr.includes('noviembre') || fechaStr.includes('Noviembre')) {
            console.log('DEBUG NOVIEMBRE: Formato de fecha no reconocido:', fechaStr);
          }
          return false;
        }
      }
    }
    const mesNormalizado = normalizarMes(mesTexto);
    const mes = meses[mesNormalizado as keyof typeof meses];
    if (fechaStr.includes('noviembre') || fechaStr.includes('Noviembre')) {
      console.log('DEBUG NOVIEMBRE: dia', dia, 'mesTexto', mesTexto, 'anio', anio, 'mesNormalizado', mesNormalizado, 'mes', mes);
    }
    if (mes === undefined) {
      if (fechaStr.includes('noviembre') || fechaStr.includes('Noviembre')) {
        console.log('DEBUG NOVIEMBRE: Mes no reconocido:', mesNormalizado, 'en evento', evento.id);
      }
      return false;
    }
    const fechaEvento = new Date(parseInt(anio), mes, dia);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    if (fechaStr.includes('noviembre') || fechaStr.includes('Noviembre')) {
      console.log('DEBUG NOVIEMBRE: fechaEvento', fechaEvento, 'hoy', hoy, 'comparacion', fechaEvento >= hoy);
    }
    return fechaEvento >= hoy;
  });

  const eventosOrdenados = eventosParaMostrar
    .sort((a, b) => {
      const parseFecha = (evento: typeof eventos[0]) => {
        const fechaStr = safeGet(evento.fecha, lang, safeGet(evento.fecha, 'es'));
        let dia: number, mesTexto: string, anio: string;
        // Usar las mismas expresiones regulares mejoradas que el filtro
        if (/\d+\s*y\s*\d+\s*de\s*[\p{L}]+\s*\d{4}/iu.test(fechaStr)) {
          const match = fechaStr.match(/(\d+)\s*y\s*(\d+)\s*de\s*([\p{L}]+)\s*(\d{4})/iu);
          dia = parseInt(match?.[2] || '1');
          mesTexto = match?.[3] || '';
          anio = match?.[4] || '';
        } else if (/\d+\s*de\s*[\p{L}]+\s*\d{4}/iu.test(fechaStr)) {
          const match = fechaStr.match(/(\d+)\s*de\s*([\p{L}]+)\s*(\d{4})/iu);
          dia = parseInt(match?.[1] || '1');
          mesTexto = match?.[2] || '';
          anio = match?.[3] || '';
        } else if (/^[\p{L}]+\s*\d{4}$/u.test(fechaStr)) {
          const match = fechaStr.match(/([\p{L}]+)\s*(\d{4})/u);
          dia = 1;
          mesTexto = match?.[1] || '';
          anio = match?.[2] || '';
        } else {
          // Split robusto para fechas tipo '7 de noviembre de 2025'
          if (fechaStr.match(/^\d+ de [\p{L}]+ de \d{4}$/iu)) {
            const partes = fechaStr.split(' de ');
            dia = parseInt(partes[0]);
            mesTexto = partes[1];
            anio = partes[2];
          } else {
            const partes = fechaStr.split(' ');
            if (partes.length === 3) {
              dia = parseInt(partes[0]);
              mesTexto = partes[1];
              anio = partes[2];
            } else if (partes.length === 2) {
              dia = 1;
              mesTexto = partes[0];
              anio = partes[1];
            } else {
              return new Date(3000, 0, 1);
            }
          }
        }
        const mesNormalizado = normalizarMes(mesTexto);
        const mes = meses[mesNormalizado as keyof typeof meses];
        if (mes === undefined) return new Date(3000, 0, 1);
        return new Date(parseInt(anio), mes, dia);
      };
      return parseFecha(a).getTime() - parseFecha(b).getTime();
    })
    .slice(0, 4);

  // Mostrar en consola los eventos que realmente se están mostrando en la landing
  console.log('EVENTOS MOSTRADOS EN LANDING:', eventosOrdenados.map(e => ({ id: e.id, fecha: e.fecha, mostrarEnLanding: e.mostrarEnLanding })));

  // Centrado y mensaje si no hay eventos
  if (eventosOrdenados.length === 0) {
    return (
      <div id="eventos-landing" className="min-h-screen flex flex-col items-center justify-center w-full p-8 rounded-lg shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 text-gray-400 mb-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <h2 className="text-gray-700 text-2xl font-semibold mb-2 text-center">{t('errorEvents')}</h2>
        <p className="text-gray-500 mb-6 max-w-xs text-center">
          {t('prepareEvents')}
        </p>
        <Link href="/nuestros-eventos" className="px-6 py-2 bg-[color:var(--color-principal)] text-white rounded-md hover:bg-opacity-90 transition">
          {t('seeAllEvents')}
        </Link>
      </div>
    );
  }

  // Si hay menos de 4 eventos, centrarlos horizontalmente en fila
  if (eventosOrdenados.length > 0 && eventosOrdenados.length < 4) {
    return (
      <section
        id="eventos-landing"
        className="min-h-screen flex items-center justify-center p-4 sm:p-8 scroll-mt-[120px]"
      >
        <div className="flex justify-center w-full flex-row">
          {eventosOrdenados.map((evento, idx) => (
            <div key={`${evento.id}-${idx}`} className={`flex flex-col items-center mx-2 ${eventosOrdenados.length === 1 ? 'max-w-2xl w-full' : 'max-w-xs w-full'}`}>
              <Link
                href={`/eventos/evento${evento.id}`}
                className="group relative overflow-hidden rounded-lg shadow-lg flex flex-col w-full"
              >
                <Image
                  src={evento.imagen && evento.imagen !== "" ? evento.imagen : "/default.jpg"}
                  alt={safeGet(evento.titulo, lang, safeGet(evento.titulo, 'es'))}
                  width={eventosOrdenados.length === 1 ? 600 : 300}
                  height={eventosOrdenados.length === 1 ? 400 : 320}
                  className="object-cover w-full h-100 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[color:var(--color-principal)] bg-opacity-70 text-white text-lg text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {safeGet(evento.fecha, lang, safeGet(evento.fecha, 'es'))}
                  {' · '}
                  {safeGet(evento.ubicacion, lang, safeGet(evento.ubicacion, 'es'))}
                </div>
              </Link>
              <div className="mt-2 text-center font-semibold text-lg text-gray-800 w-full">
                {safeGet(evento.titulo, lang, safeGet(evento.titulo, 'es'))}
              </div>
              <Link href="/nuestros-eventos" className="mt-4 px-6 py-2 bg-[color:var(--color-principal)] text-white rounded-md hover:bg-opacity-90 transition w-fit">
                {t('seeAllEvents')}
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Si hay 4 o más eventos, usar grid fija de Tailwind
  return (
    <section
      id="eventos-landing"
      className="min-h-screen flex items-center justify-center p-4 sm:p-8 scroll-mt-[120px]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 w-full">
        {eventosOrdenados.map((evento) => (
          <Link href={`/eventos/evento${evento.id}`} key={evento.id} className="group relative overflow-hidden rounded-lg shadow-lg w-full flex flex-col">
            <Image
              src={evento.imagen && evento.imagen !== "" ? evento.imagen : "/default.jpg"}
              alt={safeGet(evento.titulo, lang, safeGet(evento.titulo, 'es'))}
              width={300}
              height={320}
              className="object-cover w-full h-100 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[color:var(--color-principal)] bg-opacity-70 text-gray-900 text-lg text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div>
                {safeGet(evento.fecha, lang, safeGet(evento.fecha, 'es'))}
              </div>
              <div>
                {safeGet(evento.ubicacion, lang, safeGet(evento.ubicacion, 'es'))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
