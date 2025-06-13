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
    <div className="relative w-full bg-gray-950 h-100 flex justify-center items-center">
      <section className="relative z-20 w-full flex items-center justify-center p-4 sm:p-8 gap-4 md:gap-8">
        {[
          "Comprometidos con las causas sociales",
          "Soluciones personalizadas",
          "Equipo experto y apasionado",
          "Logística impecable garantizada",
        ].map((text, idx) => (
          <SpotlightCard
            key={idx}
            className="custom-spotlight-card"
            spotlightColor="rgba(237, 201, 103, 1)"
          >
            <div>
              <div className="flex items-start justify-start w-full">
                <img
                  src={iconos[idx]}
                  alt={`Icono apartado ${idx + 1}`}
                  className="object-cover w-[70px]"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="gendy-font text-white text-xl flex items-center justify-center text-center mt-3">
                  {text}
                </p>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </section>
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-10 bg-gradient-to-b from-transparent to-gray-950" />
    </div>
  );
};

export default CardsLanding;
