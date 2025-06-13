'use client';

import React, { useEffect, useRef } from 'react';

interface VideoParallaxSectionProps {
  src?: string;
  title?: string;
  children?: React.ReactNode;
  height?: string;
  overlayOpacity?: number;
  className?: string;
  text?: string;
}

export const VideoParallaxSection: React.FC<VideoParallaxSectionProps> = ({
  src,
  title,
  children,
  height = '70vh',
  overlayOpacity = 0.5,
  className = '',
  text,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const offset = rect.top + scrollTop;
      const speed = 0.3;

      const distance = scrollTop - offset;
      videoRef.current.style.transform = `translateY(${distance * speed}px)`;
    };

    handleScroll(); // Initial position
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className={`relative w-full flex items-center justify-center overflow-hidden ${className}`}
      style={{ minHeight: height }}
    >
      {src && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 will-change-transform"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
      />
      <div className="relative z-20 px-4 text-center max-w-4xl">
        {title && (
          <h2 className="text-white text-4xl sm:text-5xl font-bold drop-shadow-lg mb-4">
            {title}
          </h2>
        )}
        {text && (
          <h3 className="text-white text-2xl sm:text-3xl font-semibold drop-shadow mb-2">{text}</h3>
        )}
        {children}
      </div>
    </section>
  );
};
