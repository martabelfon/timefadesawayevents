import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, className }) => {
  return (
    <div className="card group relative flex items-end overflow-hidden w-full h-100 text-center text-white rounded-lg">
      {/* Imagen de fondo */}
      <Image 
        src={image} 
        alt={title} 
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-50" 
      />

      {/* Contenedor del título y descripción */}
      <div className="absolute inset-0 flex flex-col items-center justify-end z-10 p-4 transition-transform duration-500 ease-in-out group-hover:translate-y-[-50%]">
        <h2 className={`title text-lg font-bold mb-2 transition-transform duration-500 group-hover:translate-y-[-20px] ${className}`}>
          {title}
        </h2>
        <p className={`text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${className}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;