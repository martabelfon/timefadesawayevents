"use client";

import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useMotionValue, animate } from "framer-motion";
import { ColorAnimationBackground } from "@/atoms/ ColorAnimationBackground";
import { AnimatedButton } from "@/atoms/AnimatedButton";
import { useTranslation } from "react-i18next";
import BlurText from "@/atoms/titleLandingBlur";


const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero = () => {
  const colorMotion = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    const controls = animate(colorMotion, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
    return () => controls.stop();
  }, [colorMotion]);

  const { t } = useTranslation("landingPage");

  return (
    <>

     <div className="absolute top-0 left-0 w-full h-32 pointer-events-none z-30 flex items-start justify-center overflow-hidden"/>
      <div className="relative w-screen h-screen min-h-[350px] max-h-none overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <ColorAnimationBackground className="w-full h-full bg-gray-950 text-gray-200">
          <Canvas className="w-full h-full">
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </ColorAnimationBackground>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <section className="w-full flex flex-col items-center justify-center h-full">
             <BlurText text={t("title")} className="text-white text-3xl gendy-font text-center sm:text-5xl md:text-7xl" />
            <a href="#eventos-landing" onClick={e => {
              e.preventDefault();
              const el = document.getElementById('eventos-landing');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              <AnimatedButton color={colorMotion} className="mt-4">
                {t("buttonNextEvents")}
              </AnimatedButton>
            </a>
          </section>
          <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-20 bg-gradient-to-b from-transparent to-gray-950" />
        </div>
      </div>
    </>
  );
};
