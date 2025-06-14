"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
  to: number;
  label: string;
  duration?: number; // duración en ms (opcional)
}

export default function Counter({ to, label, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = Math.ceil(to / (duration / 16));
    const interval = setInterval(() => {
      start += increment;
      if (start >= to) {
        start = to;
        clearInterval(interval);
      }
      setCount(start);
    }, 16);
    return () => clearInterval(interval);
  }, [to, duration, isVisible]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center px-6 py-4 shadow-md w-48 h-32 min-w-[12rem] min-h-[8rem] max-w-[12rem] max-h-[8rem] text-center">
      <span className="text-5xl font-bold text-[color:var(--color-principal)]">+ {count}</span>
      <span className="mt-2 text-base text-white text-center font-semibold">{label}</span>
    </div>
  );
}
