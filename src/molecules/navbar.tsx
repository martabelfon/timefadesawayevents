'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './languageSelector';

const NavBar: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
  const { t } = useTranslation('navBar');
  const [isMounted, setIsMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    setIsMounted(true);
    setActivePath(window.location.pathname);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMounted) return null;

  const navLinksLeft = [
    { label: t('news'), href: '/noticia' },
    { label: t('events'), href: '/nuestros-eventos' },
  ];

  const navLinksRight = [
    { label: t('ourHistory'), href: '/nuestra-historia' },
    { label: t('contact'), href: '/contacto' },
    { label: t('tickets'), href: 'https://tickets.timefadesawayevents.com/', external: true },
  ];

  const navLinkClass = (href: string) =>
    `px-3 py-1 rounded-lg text-sm ${
      activePath === href
        ? 'text-white font-bold border-b-2 border-[color:var(--color-principal)]'
        : 'text-gray-300'
    }`;

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md
        ${isScrolled ? 'bg-gray-900/70 shadow-md' : 'bg-transparent'}
      `}
    >
      <div className="flex flex-col md:flex-row items-center justify-between px-6 h-[90px] w-full">

        {/* Título centrado solo en móvil */}
          <div className="md:hidden w-full text-center mt-2">
            <Link
              href="/"
              className="gendy-font text-[color:var(--color-principal)] font-bold text-2xl"
            >
              Time Fades Away Events
            </Link>
          </div>


        {/* Contenido completo del navbar */}
        <div className="flex items-center justify-between w-full md:justify-center">
          {/* Botón hamburguesa */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d={
                  menuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M3 12h18M3 6h18M3 18h18'
                }
              />
            </svg>
          </button>

          {/* Menú */}
          <ul
            className={`
              gendy-font flex-col md:flex md:flex-row md:items-center md:space-x-6 
              absolute md:static top-[90px] left-0 w-full md:w-auto 
              transition-transform transform md:translate-x-0 
              bg-gray-900/90 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none
              ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
              z-40 text-center md:text-left
            `}
          >
            {/* Lado izquierdo */}
            {navLinksLeft.map(({ label, href }) => (
              <li key={href} className="my-2 md:my-0">
                <Link href={href} className={navLinkClass(href)}>
                  {label}
                </Link>
              </li>
            ))}

            {/* Título en medio solo en desktop */}
            <li className="gendy-font hidden md:block mx-4">
              <Link
                href="/"
                className="text-[color:var(--color-principal)] font-bold text-3xl whitespace-nowrap"
              >
                Time Fades Away Events
              </Link>
            </li>

            {/* Lado derecho */}
            {navLinksRight.map(({ label, href, external }) => (
              <li key={href} className="my-2 md:my-0">
                {external ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className={navLinkClass(href)}>
                    {label}
                  </a>
                ) : (
                  <Link href={href} className={navLinkClass(href)}>
                    {label}
                  </Link>
                )}
              </li>
            ))}

            {/* Selector de idioma */}
            <li className="my-2 md:my-0 md:ml-4">
              <LanguageSelector />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
