import React from "react";
import SpotlightCard from "@/atoms/spotlightCard";

const iconos = [
  "/images/social2.png",
  "/images/personalizado.png",
  "/images/experto.png",
  "/images/logistica.png",
];

const CardsLanding = () => {
  return (
    <div className="relative w-full bg-gray-950 flex justify-center items-center py-12 sm:py-16">
      <section className="relative z-20 w-full max-w-6xl min-h-[300px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 sm:px-8 justify-center items-center place-items-center">
        {[
          "Comprometidos con las causas sociales",
          "Soluciones personalizadas",
          "Equipo experto y apasionado",
          "Logística impecable garantizada",
        ].map((text, idx) => (
          <SpotlightCard
            key={idx}
            className="custom-spotlight-card flex flex-col items-center justify-center text-center"
            spotlightColor="rgba(237, 201, 103, 1)"
          >
            <div className="flex flex-col items-center justify-center w-full">
              <img
                src={iconos[idx]}
                alt={`Icono apartado ${idx + 1}`}
                className="object-cover w-[70px] mx-auto"
                loading="lazy"
              />
              <p className="gendy-font text-white text-xl flex items-center justify-center text-center mt-3">
                {text}
              </p>
            </div>
          </SpotlightCard>
        ))}
      </section>
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-10 bg-gradient-to-b from-transparent to-gray-950" />
    </div>
  );
};

export default CardsLanding;
