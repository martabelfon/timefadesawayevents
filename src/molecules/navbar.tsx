"use client";

import React, { useEffect, useState } from 'react';
// import NavItem from '@/atoms/navItem';
// import { useTranslation } from 'react-i18next';
import LanguageSelector from './languageSelector';

const NavBar: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
    // const { t } = useTranslation('navBar');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <nav className={`h-[90px] fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className='flex flex-row justify-center items-center'>
                <ul className='flex  items-center justify-between w-full max-w-6xl px-4'>
                    {/* <NavItem label={t('contact')} href="/contact" /> */}
                </ul>
            
                <div className='absolute mt-5 right-4'>
                    <LanguageSelector />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
