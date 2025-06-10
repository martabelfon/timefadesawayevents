import NavBar from "@/molecules/navbar";

export default function NuestraHistoriaPage() {
  return (
    <div>
      <NavBar isScrolled={false} />
      <section className="bg-gradient-to-b from-[#FFF8E1] via-[#FFFDF6] to-[#FFF8E1] text-gray-900 min-h-screen w-full px-2 sm:px-6 pt-[100px] pb-20 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full flex flex-col gap-8 bg-white/90 rounded-2xl shadow-lg p-6 md:p-10 border border-[color:var(--color-principal)]/30">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[color:var(--color-principal)] text-center mb-4 drop-shadow-md">Nuestra Historia</h1>
          <p className="text-gray-700 text-lg md:text-xl text-center leading-relaxed">
            Todo empezó en el 1990, con la Universidad en Mallorca. Enrique era uno de los encargados del transporte y yo, Ramón, me apunté como voluntario para hacer de conductor.<br/><br/>
            Un año después, aproximadamente, coincidimos en el rodaje de una película para la BBC, (en la que Daniel Craig era el protagonista), Enrique como Coordinador de escenas bélicas y yo como Actor.<br/><br/>
            A partir de ahí, fuimos coincidiendo en diferentes eventos, tanto deportivos como musicales, (Isladecanta, Open Mallorca de Tenis, Campeonatos de Judo) hasta que en el 2002, coincidimos Enrique, Alberto y yo , encargándonos de la Seguridad de un macro festival donde actuó Oasis.<br/><br/>
            Hemos seguido trabajando juntos en varias ocasiones, una de ellas el 70 aniversario de Neil Young y aunque, Enrique y Alberto en Mallorca y yo en Barcelona, esto no ha influido en qué sigamos en contacto y trabajando como el primer día.<br/><br/>
            Una vez llegados a este punto, y viendo que no se nos da mal del todo, hemos decidido hacerlo en serio y dedicarnos de pleno, porque el tiempo se nos esfuma (Time Fades Away).
          </p>
        </div>
      </section>
    </div>
  );
}