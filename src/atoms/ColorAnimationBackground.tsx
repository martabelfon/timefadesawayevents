"use client";

import React, { useEffect } from "react";
import { useMotionTemplate, useMotionValue, animate, motion } from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

interface ColorAnimationBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export const ColorAnimationBackground: React.FC<ColorAnimationBackgroundProps> = ({ children, className }) => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.div
      style={{ backgroundImage }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
