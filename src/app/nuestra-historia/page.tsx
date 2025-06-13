import NavBar from "@/molecules/navbar";

export default function NuestraHistoriaPage() {
  return (
    <div>
      <NavBar isScrolled={false} />
      <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white min-h-screen px-4 sm:px-8 pt-[100px] pb-20 flex flex-col items-center overflow-hidden">
        <div className="max-w-4xl w-full rounded-2xl shadow-lg p-6 md:p-10 border border-[color:var(--color-principal)]/30 backdrop-blur-sm">
          <h1 className="gendy-font text-4xl md:text-5xl font-extrabold text-[color:var(--color-principal)] text-center mb-10 drop-shadow-md">
            Nuestra Historia
          </h1>

          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[color:var(--color-principal)] mb-2">
                Los Inicios (1990)
              </h2>
              <p className="text-lg leading-relaxed">
                Todo comenzó en 1990, en la Universidad de Mallorca. Enrique se encargaba del transporte, y yo, Ramón, me ofrecí como voluntario para conducir. Sin saberlo, aquel gesto marcó el inicio de una gran historia.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[color:var(--color-principal)] mb-2">
                Primer Proyecto en Común
              </h2>
              <p className="text-lg leading-relaxed">
                Un año más tarde, coincidimos en el rodaje de una película para la BBC protagonizada por Daniel Craig. Enrique coordinaba escenas bélicas y yo participaba como actor. Fue nuestro primer proyecto profesional compartido.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[color:var(--color-principal)] mb-2">
                Eventos y Festivales
              </h2>
              <p className="text-lg leading-relaxed">
                Desde entonces, nos cruzamos en eventos deportivos y musicales: Isladecanta, Open de Tenis de Mallorca, campeonatos de judo... Hasta que en 2002, junto con Alberto, coordinamos la seguridad de un macrofestival donde tocó Oasis.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[color:var(--color-principal)] mb-2">
                Un Lazo que Perdura
              </h2>
              <p className="text-lg leading-relaxed">
                Aunque Enrique y Alberto siguen en Mallorca y yo en Barcelona, nunca hemos perdido el contacto. Seguimos trabajando juntos con la misma pasión de siempre, como en el 70 aniversario de Neil Young.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[color:var(--color-principal)] mb-2">
                El Presente
              </h2>
              <p className="text-lg leading-relaxed">
                Hoy, decidimos dar un paso más. Apostamos por dedicarnos de lleno a esto que tanto nos apasiona. Porque el tiempo vuela —Time Fades Away— y queremos aprovecharlo haciendo lo que amamos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
