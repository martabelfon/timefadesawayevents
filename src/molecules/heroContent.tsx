"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { AnimatedButton } from "@/atoms/AnimatedButton";
import { MotionValue } from "framer-motion";

interface HeroContentProps {
  color: MotionValue<string>;
}

export const HeroContent: React.FC<HeroContentProps> = ({ color }) => {
  const { t } = useTranslation("landingPage");

  return (
    <div className="relative z-10 flex flex-col items-center">
      <h1 className="max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
        {t("title")}
      </h1>
      <AnimatedButton color={color} className="mt-4">
        {t("buttonNextEvents")}
      </AnimatedButton>
    </div>
  );
};
