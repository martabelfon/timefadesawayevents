'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NavBar from '@/molecules/navbar';
import { eventos as eventosData } from '@/data/eventos';

const eventosOrdenados = [...eventosData].sort((a, b) => {
  // Normaliza y parsea la fecha de cada evento
  function parseFechaEvento(fecha: string) {
    // Soporta fechas con o sin día y rangos ("2 y 3 de abril de 2022")
    let dia: number, mesTexto: string, anio: string;
    if (/\d+\s*y\s*\d+\s*de\s*[a-zA-Z]+\s*\d{4}/i.test(fecha)) {
      // Ejemplo: "2 y 3 de abril de 2022"
      const match = fecha.match(/(\d+)\s*y\s*(\d+)\s*de\s*([a-zA-Z]+)\s*(\d{4})/i);
      dia = parseInt(match?.[2] || '1');
      mesTexto = match?.[3] || '';
      anio = match?.[4] || '';
    } else if (/\d+\s*de\s*[a-zA-Z]+\s*\d{4}/i.test(fecha)) {
      // Ejemplo: "12 de Junio 2015"
      const match = fecha.match(/(\d+)\s*de\s*([a-zA-Z]+)\s*(\d{4})/i);
      dia = parseInt(match?.[1] || '1');
      mesTexto = match?.[2] || '';
      anio = match?.[3] || '';
    } else if (/^[a-zA-Z]+\s*\d{4}$/.test(fecha)) {
      // Ejemplo: "Julio 2001"
      const match = fecha.match(/([a-zA-Z]+)\s*(\d{4})/);
      dia = 1;
      mesTexto = match?.[1] || '';
      anio = match?.[2] || '';
    } else {
      // fallback: intentar split por espacio
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
        return new Date(0); // fallback
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
    <div className="relative w-full bg-gray-950">
      <NavBar isScrolled={isScrolled} />
      <section
        id="nuestros-eventos"
        className="relative z-20 w-full flex flex-col items-center justify-center p-4 sm:p-8 pt-[120px] pb-20 min-h-screen gap-12 md:gap-16 bg-gray-950"
      >
        <div className="text-center mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="gendy-font text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[color:var(--color-principal)] via-[color:var(--color-principal)] to-[color:var(--color-principal)] bg-clip-text text-transparent drop-shadow-lg mt-20"
          >
            Nuestros Eventos
          </motion.h2>
        </div>
        <div className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full max-w-7xl mx-auto">
          {eventosOrdenados.map((evento, i) => (
            <motion.div
              key={evento.id + '-' + i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-2xl shadow-lg p-5 md:p-7 border border-[color:var(--color-principal)]/30 hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="relative w-full h-56 rounded-xl overflow-hidden mb-4 border-2 border-[color:var(--color-principal)]/40">
                <Image
                  src={evento.imagen && evento.imagen.startsWith('/images/eventos/') ? evento.imagen : `/images/eventos/${evento.imagen}`}
                  alt={`Imagen del ${evento.titulo}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                  priority={i < 2}
                />
                <div className="absolute top-3 left-3 bg-[color:var(--color-principal)] text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                  {evento.fecha}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[color:var(--color-principal)] drop-shadow-md text-center">{evento.titulo}</h3>
              <p className="text-white mb-4 leading-relaxed text-base text-center">{evento.descripcion}</p>
              <Link href={`/eventos/${evento.id}`}
                className="mx-auto mt-auto">
                <button className="px-6 py-2 rounded-full bg-[color:var(--color-principal)] text-gray-900 font-semibold shadow hover:bg-[#e6b800] transition-colors duration-300 text-base">
                  Más info
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NuestrosEventos;
