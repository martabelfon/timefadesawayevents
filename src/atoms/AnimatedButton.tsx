import React from "react";
import { useMotionTemplate, MotionValue } from "framer-motion"; 
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

interface AnimatedButtonProps {
  color?: MotionValue<string>;
  fixedColor?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ color, fixedColor, children, onClick, className }) => {
  // Si se pasa fixedColor, se usa ese color, si no, se usa el MotionValue animado (si existe)
  const border = fixedColor
    ? `1px solid ${fixedColor}`
    : color
      ? useMotionTemplate`1px solid ${color}`
      : undefined;
  const boxShadow = fixedColor
    ? `0px 4px 24px ${fixedColor}`
    : color
      ? useMotionTemplate`0px 4px 24px ${color}`
      : undefined;
  const textColor = fixedColor ? { color: fixedColor } : {};

  return (
    <motion.button
      onClick={onClick}
      style={{
        ...(border ? { border } : {}),
        ...(boxShadow ? { boxShadow } : {}),
        ...textColor,
      }}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      className={`group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50 ${className}`}
    >
      {children}
      <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
    </motion.button>
  );
};
