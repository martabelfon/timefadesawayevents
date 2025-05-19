"use client";

import React, { useEffect, useState } from 'react';
import NavItem from '@/atoms/navItem';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './languageSelector';

const NavBar: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
    const { t } = useTranslation('navBar');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <nav className={`h-[90px] fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="flex items-center justify-between h-full px-6 w-full">
                <ul className="flex items-center space-x-6 w-full">
                    <li><NavItem label={t('upcomingEvents')} href="/proximos-eventos" /></li>
                    <li><NavItem label={t('events')} href="/nuestros-eventos" /></li>
                    <li>
                        <h1 className="text-white font-bold text-2xl whitespace-nowrap">
                        TIME FADES AWAY EVENTS
                        </h1>
                    </li>
                    <li><NavItem label={t('ourHistory')} href="/nuestra-historia" /></li>
                    <li><NavItem label={t('contact')} href="/contacto" /></li>
                </ul>
                <div>
                    <LanguageSelector />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
