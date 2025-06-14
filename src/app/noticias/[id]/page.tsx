// Página de noticia deshabilitada temporalmente para permitir el build
// import { notFound } from 'next/navigation';
// import { noticias } from '@/data/noticias';
// import NavBar from '@/molecules/navbar';
// import Image from 'next/image';
// import React from 'react';
// import BlurText from '@/atoms/titleLandingBlur';

export default function NoticiaPage() {
  return (
    <div style={{ color: 'red', padding: 40, textAlign: 'center' }}>
      Página de noticia deshabilitada temporalmente por incompatibilidad de dependencias. Contacta con el administrador.
    </div>
  );
}
