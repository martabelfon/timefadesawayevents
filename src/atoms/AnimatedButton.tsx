import React from "react";
import { useMotionTemplate, MotionValue } from "framer-motion"; // <-- importa MotionValue
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

interface AnimatedButtonProps {
  color: MotionValue<string>; // <-- aquí está la corrección
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ color, children, onClick, className }) => {
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.button
      onClick={onClick}
      style={{
        border,
        boxShadow,
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
