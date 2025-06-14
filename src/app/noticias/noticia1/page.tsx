import { noticias } from "@/data/noticias";
import NavBar from '@/molecules/navbar';
import BlurText from "@/atoms/titleLandingBlur";
import Image from "next/image";

const noticia = noticias[0];

export default function Noticia1Page() {
  if (!noticia) return <div>Noticia no encontrada</div>;
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-900">
      <NavBar isScrolled={false} />
      <section className="max-w-5xl mx-auto pt-[120px] pb-20 px-4 flex flex-col items-center">
        <BlurText text={noticia.titulo} className="flex items-center justify-center text-white text-3xl gendy-font text-center sm:text-5xl md:text-7xl" />
        <div className="w-full flex justify-center mb-8 mt-5">
          <div className="relative w-full max-w-lg h-64 md:h-80 rounded-xl overflow-hidden border-2 border-[color:var(--color-principal)]/40 mx-auto">
            <Image
              src={noticia.imagen || '/default.jpg'}
              alt={noticia.titulo}
              fill
              className="object-cover rounded-xl"
              priority
            />
            <div className="absolute top-3 left-3 bg-[color:var(--color-principal)] text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">
              {noticia.fecha}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 mt-4">
          <p className="text-white text-lg mb-2 text-justify">{noticia.descripcion}</p>
          {noticia.descripcion2 && (
            <p className="text-white text-lg mb-2 text-justify">{noticia.descripcion2}</p>
          )}
        </div>
      </section>
    </div>
  );
}
