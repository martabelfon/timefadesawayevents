/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
import i18n from '@/lib/i18n';

const LanguageSelector: React.FC = () => {
    
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const languageNames: { [key: string]: string } = {
        es: "ES",
        en: "EN",
        fr: "FR",
        de: "DE",

    };

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang);
    };

    return (
        <div className="flex flex-row text-xs space-x-2 ">
            <button
                onClick={() => changeLanguage('es')}
                className={`rounded-lg px-3 py-1 ${
                    selectedLanguage === 'es'
                        ? 'text-white font-bold border-b-2 border-white'
                        : 'text-gray-300'
                }`}
            >
                {languageNames['es']}
            </button>
            <button
                onClick={() => changeLanguage('en')}
                className={`rounded-lg px-3 py-1 ${
                    selectedLanguage === 'en'
                        ? 'text-white font-bold border-b-2 border-white'
                        : 'text-gray-300'
                }`}
            >
                {languageNames['en']}
            </button>
            <button
                onClick={() => changeLanguage('de')}
                className={`rounded-lg px-3 py-1 ${
                    selectedLanguage === 'de'
                        ? 'text-white font-bold border-b-2 border-white'
                        : 'text-gray-300'
                }`}
            >
                {languageNames['de']}
            </button>
            <button
                onClick={() => changeLanguage('fr')}
                className={`rounded-lg px-3 py-1 ${
                    selectedLanguage === 'fr'
                        ? 'text-white font-bold border-b-2 border-white'
                        : 'text-gray-300'
                }`}
            >
                {languageNames['fr']}
            </button>
        </div>
    );
};

export default LanguageSelector;
