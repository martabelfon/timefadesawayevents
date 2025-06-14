'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';
import { useEffect, useState } from 'react';

function getStoredLanguage() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('i18nextLng') ||
    (document.cookie.match(/i18next=([^;]+)/) || [])[1] || null;
}

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedLang = getStoredLanguage();
    if (storedLang && i18n.language !== storedLang) {
      i18n.changeLanguage(storedLang).then(() => setReady(true));
    } else if (i18n.isInitialized) {
      setReady(true);
    } else {
      const onInit = () => setReady(true);
      i18n.on('initialized', onInit);
      return () => i18n.off('initialized', onInit);
    }
  }, [i18n.language]);

  if (!ready) return null;
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
