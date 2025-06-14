import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation('footer');
  
  return (
    <footer className="w-full bg-gray-950 text-gray-100 py-8 px-4 flex flex-col items-center justify-center border-t border-[color:var(--color-principal)]/30 mt-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8">
        {/* Columna izquierda: logo + copyright */}
        <div className="flex flex-col items-start w-full md:w-1/2 gap-2">
          <Image src="/images/logo/logo.png" alt="Logo" width={200} height={80} className="object-contain w-[200px] h-auto mb-2" />
          <div className="text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} {t('droits')}
          </div>
        </div>
        {/* Columna derecha: iconos redes y correo */}
        <div className="flex flex-row items-center justify-end w-full md:w-1/2 gap-6 mt-6 md:mt-0">
          <a href="https://instagram.com/timefadesawayevents" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[color:var(--color-principal)]">
              <rect width="20" height="20" x="2" y="2" rx="5" strokeWidth="2"/>
              <circle cx="12" cy="12" r="5" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://facebook.com/timefadesawayevents" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-80">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[color:var(--color-principal)]">
              <rect width="20" height="20" x="2" y="2" rx="5" strokeWidth="2"/>
              <path d="M16 8h-2a2 2 0 0 0-2 2v2h4l-.5 3H12v7" strokeWidth="2"/>
            </svg>
          </a>
          <a href="/contacto" aria-label="Email" className="hover:opacity-80">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[color:var(--color-principal)]">
              <rect width="20" height="16" x="2" y="4" rx="4" strokeWidth="2"/>
              <path d="M4 6l8 7 8-7" strokeWidth="2"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
