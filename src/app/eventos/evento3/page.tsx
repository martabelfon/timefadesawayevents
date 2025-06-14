import { eventos } from "@/data/eventos";
import NavBar from '@/molecules/navbar';
import BlurText from "@/atoms/titleLandingBlur";
import Image from "next/image";

const evento = eventos.find(e => e.id === "3");

export default function Evento3Page() {
  if (!evento) return <div>Evento no encontrado</div>;
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-900">
      <NavBar isScrolled={false} />
      <section className="max-w-5xl mx-auto pt-[120px] pb-20 px-4 flex flex-col items-center">
        <BlurText text={evento.titulo} className="flex items-center justify-center text-white text-3xl gendy-font text-center sm:text-5xl md:text-7xl" />
        <div className="w-full flex justify-center mb-8 mt-5">
          <div className="relative w-full max-w-lg h-64 md:h-80 rounded-xl overflow-hidden border-2 border-[color:var(--color-principal)]/40 mx-auto">
            <Image
              src={evento.imagen || '/default.jpg'}
              alt={evento.titulo}
              fill
              className="object-cover rounded-xl"
              priority
            />
            <div className="absolute top-3 left-3 bg-[color:var(--color-principal)] text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">
              {evento.fecha}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 mt-4">
          {[evento.descripcion1, evento.descripcion2, evento.descripcion3, evento.descripcion4, evento.descripcion5, evento.descripcion6, evento.descripcion7]
            .filter(Boolean)
            .map((desc, idx) => (
              <p key={idx} className="text-white text-lg mb-2 text-justify">{desc}</p>
            ))}
        </div>
        {evento.imagenes && evento.imagenes.length > 0 && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {evento.imagenes.map((img, idx) => (
              <div key={idx} className="relative w-full h-48 rounded-lg overflow-hidden border-2 border-[color:var(--color-principal)]/30">
                <Image src={img} alt={evento.titulo + ' extra ' + idx} fill className="object-cover" />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
