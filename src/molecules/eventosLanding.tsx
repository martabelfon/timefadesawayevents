import React from "react";
import Image from "next/image";
import Link from "next/link";
import { eventos } from "@/data/eventos";

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

export const EventosLanding = () => {
  const eventosParaMostrar = eventos.filter(evento => {
    if (!evento.mostrarEnLanding) return false;

    let dia: number, mesTexto: string, anio: string;
    if (/\d+\s*y\s*\d+\s*de\s*[a-zA-Z]+\s*\d{4}/i.test(evento.fecha)) {
      const match = evento.fecha.match(/(\d+)\s*y\s*(\d+)\s*de\s*([a-zA-Z]+)\s*(\d{4})/i);
      dia = parseInt(match?.[2] || '1');
      mesTexto = match?.[3] || '';
      anio = match?.[4] || '';
    } else if (/\d+\s*de\s*[a-zA-Z]+\s*\d{4}/i.test(evento.fecha)) {
      const match = evento.fecha.match(/(\d+)\s*de\s*([a-zA-Z]+)\s*(\d{4})/i);
      dia = parseInt(match?.[1] || '1');
      mesTexto = match?.[2] || '';
      anio = match?.[3] || '';
    } else if (/^[a-zA-Z]+\s*\d{4}$/.test(evento.fecha)) {
      const match = evento.fecha.match(/([a-zA-Z]+)\s*(\d{4})/);
      dia = 1;
      mesTexto = match?.[1] || '';
      anio = match?.[2] || '';
    } else {
      const partes = evento.fecha.split(' ');
      if (partes.length === 3) {
        dia = parseInt(partes[0]);
        mesTexto = partes[1];
        anio = partes[2];
      } else if (partes.length === 2) {
        dia = 1;
        mesTexto = partes[0];
        anio = partes[1];
      } else {
        return false;
      }
    }

    const mesNormalizado = normalizarMes(mesTexto);
    const mes = meses[mesNormalizado as keyof typeof meses];
    if (mes === undefined) return false;
    const fechaEvento = new Date(parseInt(anio), mes, dia);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    return fechaEvento >= hoy;
  });

  const eventosOrdenados = eventosParaMostrar
    .sort((a, b) => {
      // Parse fechas nuevamente para ordenarlas
      const parseFecha = (fechaStr: string) => {
        const partes = fechaStr.match(/\d+/g);
        if (!partes || partes.length < 2) return new Date(3000, 0, 1); // fallback

        const d: number = partes.length === 3 ? parseInt(partes[0]) : 1;
        const m: number = parseInt(partes[partes.length - 2]) - 1;
        const y: number = parseInt(partes[partes.length - 1]);

        return new Date(y, m, d);
        };

      return parseFecha(a.fecha).getTime() - parseFecha(b.fecha).getTime();
    })
    .slice(0, 4);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 w-full">
      {eventosOrdenados.map((evento) => (
        <Link href={`/eventos/${evento.id}`} key={evento.id} className="group relative overflow-hidden rounded-lg shadow-lg w-full flex flex-col">
          <Image
            src={evento.imagen || "/default.jpg"}
            alt={evento.titulo}
            width={300}
            height={320}
            className="object-cover w-full h-100 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-[color:var(--color-principal)] bg-opacity-70 text-white text-sm text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {evento.fecha}
          </div>
        </Link>
      ))}
    </div>
  );
};
