'use client';

import LandingPage from '@/templates/langingPage';
import I18nProvider from '@/components/i18nProvider';
import NavBar from '@/molecules/navbar';

export default function Home() {
  return (
    <I18nProvider>
      <NavBar isScrolled={false} />
      <LandingPage />
    </I18nProvider>
  );
}
