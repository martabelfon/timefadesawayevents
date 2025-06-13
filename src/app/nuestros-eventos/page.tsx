'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NavBar from '@/molecules/navbar';
import { eventos as eventosData } from '@/data/eventos';
import BlurText from '@/atoms/titleLandingBlur';
import dynamic from "next/dynamic";

const FondoEstrellas = dynamic(() => import("@/molecules/fondoEstrellas"), { ssr: false });

const eventosOrdenados = [...eventosData].sort((a, b) => {
  function parseFechaEvento(fecha: string) {
    let dia: number, mesTexto: string, anio: string;
    if (/\d+\s*y\s*\d+\s*de\s*[a-zA-Z]+\s*\d{4}/i.test(fecha)) {
      const match = fecha.match(/(\d+)\s*y\s*(\d+)\s*de\s*([a-zA-Z]+)\s*(\d{4})/i);
      dia = parseInt(match?.[2] || '1');
      mesTexto = match?.[3] || '';
      anio = match?.[4] || '';
    } else if (/\d+\s*de\s*[a-zA-Z]+\s*\d{4}/i.test(fecha)) {
      const match = fecha.match(/(\d+)\s*de\s*([a-zA-Z]+)\s*(\d{4})/i);
      dia = parseInt(match?.[1] || '1');
      mesTexto = match?.[2] || '';
      anio = match?.[3] || '';
    } else if (/^[a-zA-Z]+\s*\d{4}$/.test(fecha)) {
      const match = fecha.match(/([a-zA-Z]+)\s*(\d{4})/);
      dia = 1;
      mesTexto = match?.[1] || '';
      anio = match?.[2] || '';
    } else {
      const partes = fecha.split(' ');
      if (partes.length === 3) {
        dia = parseInt(partes[0]);
        mesTexto = partes[1];
        anio = partes[2];
      } else if (partes.length === 2) {
        dia = 1;
        mesTexto = partes[0];
        anio = partes[1];
      } else {
        return new Date(0);
      }
    }
    const meses: Record<string, number> = {
      'Enero': 0, 'Febrero': 1, 'Marzo': 2, 'Abril': 3, 'Mayo': 4, 'Junio': 5,
      'Julio': 6, 'Agosto': 7, 'Septiembre': 8, 'Octubre': 9, 'Noviembre': 10, 'Diciembre': 11
    };
    function normalizarMes(mes: string) {
      return mes
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .toLowerCase()
        .replace(/(^|\s)([a-z])/g, (m) => m.toUpperCase());
    }
    const mesNormalizado = normalizarMes(mesTexto);
    const mes = meses[mesNormalizado as keyof typeof meses];
    if (mes === undefined) return new Date(0);
    return new Date(parseInt(anio), mes, dia);
  }
  return parseFechaEvento(b.fecha).getTime() - parseFechaEvento(a.fecha).getTime();
});

const NuestrosEventos = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <FondoEstrellas className="bg-gray-950 text-gray-200">
      <main className="relative w-full z-10">
        <NavBar isScrolled={isScrolled} />
        <section
          id="nuestros-eventos"
          className="relative z-20 w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 pt-[100px] md:pt-[120px] pb-16 md:pb-20 min-h-screen gap-8 md:gap-12"
        >
          <div className="mt-10 md:mt-20 w-full">
            <BlurText
              text="Una mirada a nuestros eventos: lo que fue, lo que es y lo que viene"
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl gendy-font text-center mb-6 px-2"
            />
          </div>
          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto items-stretch">
            {eventosOrdenados.map((evento, i) => (
              <motion.div
                key={evento.id + '-' + i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white/90 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col h-full min-h-[420px] md:min-h-[480px]"
              >
                <div className="relative w-full h-40 md:h-48">
                  <Image
                    src={evento.imagen?.startsWith('/images/eventos/') ? evento.imagen : `/images/eventos/${evento.imagen}`}
                    alt={`Imagen del ${evento.titulo}`}
                    fill
                    className="object-cover w-full h-full rounded-t-2xl"
                    style={{ objectFit: 'cover' }}
                    priority={i < 2}
                  />
                  <div className="absolute top-3 left-3 bg-[color:var(--color-principal)] text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                    {evento.fecha}
                  </div>
                </div>
                <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                  <h3 className="gendy-font text-lg md:text-xl font-bold mb-2 text-[color:var(--color-principal)] drop-shadow-md text-center">
                    {evento.titulo}
                  </h3>
                  <p className="text-gray-800 text-base text-center mb-4 line-clamp-4">
                    {evento.descripcion}
                  </p>
                  <Link href={`/eventos/${evento.id}`} className="mt-auto mx-auto w-full">
                    <button className="w-full md:w-auto px-4 py-2 rounded bg-[color:var(--color-principal)] text-white font-semibold shadow hover:bg-[color:var(--color-principal-dark)] transition-colors">
                      Más info
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </FondoEstrellas>
  );
};

export default NuestrosEventos;
