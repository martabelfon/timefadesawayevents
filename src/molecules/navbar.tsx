"use client";

import React, { useEffect, useState } from 'react';
import NavItem from '@/atoms/navItem';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './languageSelector';

const NavBar: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
    const { t } = useTranslation('navBar');
    const [isMounted, setIsMounted] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!isMounted) return null;

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950 shadow-md' : 'bg-transparent'}`}>
            <div className="flex flex-col md:flex-row items-center justify-between px-6 h-[90px] w-full">

                {/* Título visible solo en móvil */}
                <button
                    className="gendy-font md:hidden text-[color:var(--color-principal)] font-bold text-2xl text-center w-full mt-2 focus:outline-none"
                    onClick={() => window.location.href = '/'}
                    aria-label="Ir a la página principal"
                >
                    TIME FADES AWAY EVENTS
                </button>

                {/* Contenedor principal */}
                <div className="flex items-center justify-between w-full md:justify-center">
                    {/* Botón hamburguesa */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <path d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} />
                        </svg>
                    </button>

                    {/* Menú */}
                    <ul className={`
                        flex-col md:flex md:flex-row md:space-x-6 
                        absolute md:static top-[90px] left-0 w-full md:w-auto 
                         md:bg-transparent 
                        transition-transform transform md:translate-x-0 
                        ${menuOpen ? "translate-x-0" : "-translate-x-full"}
                        ${menuOpen ? "text-left" : ""}
                    `}>
                        {/* Items móviles con margen izquierdo */}
                        <li className="gendy-font md:ml-0 ml-6 my-2"><NavItem label={t('upcomingEvents')} href="/proximos-eventos" /></li>
                        <li className="gendy-font md:ml-0 ml-6 my-2"><NavItem label={t('events')} href="/nuestros-eventos" /></li>

                        {/* Título solo en desktop */}
                        <li className="gendy-font hidden md:block">
                            <button
                                className="text-[color:var(--color-principal)] font-bold text-3xl whitespace-nowrap focus:outline-none"
                                onClick={() => window.location.href = '/'}
                                aria-label="Ir a la página principal"
                            >
                                Time Fades Away Events
                            </button>
                        </li>

                        <li className="gendy-font md:ml-0 ml-6 my-2"><NavItem label={t('ourHistory')} href="/nuestra-historia" /></li>
                        <li className="gendy-font md:ml-0 ml-6 my-2"><NavItem label={t('contact')} href="/contacto" /></li>
                        <li className="gendy-font md:ml-0 ml-6 my-2"><LanguageSelector /></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
