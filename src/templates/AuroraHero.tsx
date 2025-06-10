"use client";

import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useMotionValue, animate } from "framer-motion";
import { ColorAnimationBackground } from "@/atoms/ ColorAnimationBackground";
// import { HeroContent } from "@/molecules/heroContent";
import { AnimatedButton } from "@/atoms/AnimatedButton";
import { useTranslation } from "react-i18next";


const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);
    const { t } = useTranslation("landingPage");
  

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  return (
    <>
      <div className="relative w-screen h-screen min-h-[350px] max-h-none overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <ColorAnimationBackground className="w-full h-full bg-gray-950 text-gray-200">
          <Canvas className="w-full h-full">
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </ColorAnimationBackground>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <section className="w-full flex flex-col items-center justify-center h-full">
            <h1 className="gendy-font max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl md:text-7xl">
              {t("title")}
            </h1>
            <a href="#eventos-landing">
              <AnimatedButton color={color} className="mt-4">
                {t("buttonNextEvents")}
              </AnimatedButton>
            </a>
          </section>
        </div>
      </div>
    </>
  );
};
