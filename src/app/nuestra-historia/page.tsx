'use client';

import React from "react";
import BlurText from "@/atoms/titleLandingBlur";
import FondoEstrellas from "@/molecules/fondoEstrellas";
import NavBar from "@/molecules/navbar";
import FooterPages from "@/molecules/footerPages";
import { useTranslation } from "react-i18next";

export default function NuestraHistoriaPage() {
  const { t } = useTranslation('historia');

  const timeline = [
    { title: t('title1'), text: t('description1') },
    { title: t('title2'), text: t('description2') },
    { title: t('title3'), text: t('description3') },
    { title: t('title4'), text: t('description4') },
    { title: t('title5'), text: t('description5') },
  ];

	return (
	<>	
    <FondoEstrellas className="bg-gray-950 text-gray-200">
			<NavBar isScrolled={false} />
			<div className="mt-25">
        <BlurText
          text={t('titlePage')}
          className="text-white text-4xl sm:text-5xl md:text-6xl gendy-font text-center mb-6"
        />
      </div>
			<section className="text-white min-h-screen px-4 sm:px-8 pt-[100px] pb-20 flex flex-col items-center overflow-hidden">
        <div className="max-w-5xl w-full p-6 md:p-10">
          <div className="relative">
            {/* Línea vertical central desktop */}
            <div className="absolute left-1/2 top-0 h-full w-1 bg-[color:var(--color-principal)] -translate-x-1/2 z-0 hidden md:block" />
            {/* Línea vertical para mobile */}
            <div className="absolute left-6 top-0 h-full w-1 bg-[color:var(--color-principal)] z-0 md:hidden" />
            {/* Mobile: timeline en columna, punto a la izquierda, texto a la derecha */}
            <div className="flex flex-col gap-16 md:hidden relative">
              {timeline.map((item) => (
                <div key={item.title} className="flex flex-row items-start w-full">
                  {/* Punto en la línea */}
                  <div className="flex-shrink-0 flex flex-col items-center justify-start pt-1" style={{ minWidth: '2.5rem' }}>
                    <div className="w-6 h-6 bg-[color:var(--color-principal)] rounded-full border-4 border-white shadow-lg z-10" />
                  </div>
                  {/* Texto */}
                  <div className="pl-4 w-full">
                    <h2 className="text-xl font-bold text-[color:var(--color-principal)] mb-2">{item.title}</h2>
                    <p className="text-lg leading-relaxed text-justify">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop: timeline en grid zig zag */}
            <div className="hidden md:grid md:grid-cols-3 gap-16 relative">
              {timeline.map((item, idx) => (
                <React.Fragment key={item.title}>
                  {/* Columna izquierda */}
                  <div className="flex flex-col items-end md:pr-6 md:col-span-1">
                    {idx % 2 === 0 ? (
                      <div className="w-full text-right">
                        <h2 className="text-2xl font-bold text-[color:var(--color-principal)] mb-2">{item.title}</h2>
                        <p className="text-lg leading-relaxed text-justify">{item.text}</p>
                      </div>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>
                  {/* Punto en la línea */}
                  <div className="flex items-center justify-center relative md:col-span-1">
                    <div className="w-6 h-6 bg-[color:var(--color-principal)] rounded-full border-4 border-white shadow-lg z-10" />
                  </div>
                  {/* Columna derecha */}
                  <div className="flex flex-col items-start md:pl-6 md:col-span-1">
                    {idx % 2 !== 0 ? (
                      <div className="w-full text-left">
                        <h2 className="text-2xl font-bold text-[color:var(--color-principal)] mb-2">{item.title}</h2>
                        <p className="text-lg leading-relaxed text-justify">{item.text}</p>
                      </div>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FooterPages />
    </FondoEstrellas>
  </>
	);
}
