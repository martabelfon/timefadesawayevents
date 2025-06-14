import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import Link from "next/link";
import { noticias } from "@/data/noticias";
import BlurText from "@/atoms/titleLandingBlur";

// Ordenar por fecha descendente y mostrar solo las 4 más recientes
const noticiasOrdenadas = [...noticias].sort((a, b) => {
  // Formato esperado: "13 de junio de 2025"
  const parseFecha = (f: string) => {
    // Extrae día, mes y año del string
    const partes = f.toLowerCase().replace(/,/g, '').split(' ');
    const dia = partes[0];
    const meses = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    const mesNum = meses.findIndex(m => f.toLowerCase().includes(m)) + 1;
    const anio = partes[partes.length - 1];
    return new Date(`${anio}-${mesNum.toString().padStart(2, "0")}-${dia.padStart(2, "0")}`);
  };
  return parseFecha(b.fecha).getTime() - parseFecha(a.fecha).getTime();
});

const noticiasMostrar = noticiasOrdenadas.slice(0, 4);

const Noticias = () => {
  return (
    <section className="min-h-screen relative w-full py-16 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex flex-col items-center justify-center">
      <BlurText text="Nuestas noticias" className="text-white text-3xl gendy-font text-center sm:text-5xl md:text-7xl" />

      <div
        className={
          "w-full max-w-5xl flex flex-row flex-nowrap gap-8 justify-center overflow-x-auto md:overflow-x-visible px-2 md:px-0 mt-10"
        }
      >
        {noticiasMostrar.map((noticia, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className={
              "bg-white/90 rounded-2xl shadow-xl overflow-hidden border border-[color:var(--color-principal)]/30 hover:scale-105 transition-transform duration-300 flex flex-col flex-shrink-0 mx-2 my-4 " +
              (noticiasMostrar.length < 4
                ? "max-w-xs min-w-[75vw] sm:min-w-[340px] md:w-[340px] lg:w-[380px]"
                : "max-w-xs min-w-[75vw] sm:min-w-[300px] md:w-[300px] lg:w-[340px]")
            }
          >
            <div className="relative w-full h-48">
              <Image
                src={noticia.imagen}
                alt={noticia.titulo}
                fill
                className="object-cover"
                priority={idx === 0}
              />
              <div className="absolute top-3 left-3 bg-[color:var(--color-principal)] text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                {noticia.fecha}
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-xl font-bold mb-2 text-[color:var(--color-principal)] drop-shadow-md text-center">{noticia.titulo}</h3>
              <p className="text-gray-700 text-base text-center mb-2">{noticia.descripcion}</p>
              {noticia.descripcion2 && (
                // <Link href={`/noticias/${idx}`} className="mt-2 mx-auto">
                  <button
                    className="px-4 py-2 rounded bg-[color:var(--color-principal)] text-white font-semibold shadow hover:bg-[color:var(--color-principal-dark)] transition-colors"
                  >
                    Saber más
                  </button>
                // </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      {/* Efecto decorativo: partículas animadas */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="animate-pulse absolute left-1/4 top-10 w-16 h-16 bg-[color:var(--color-principal)]/20 rounded-full blur-2xl" />
        <div className="animate-pulse absolute right-1/4 bottom-10 w-24 h-24 bg-[color:var(--color-principal)]/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Noticias;
