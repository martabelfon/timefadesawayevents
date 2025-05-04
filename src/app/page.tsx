'use client';

import TemporalLanding from '@/templates/temporalLanding';
import I18nProvider from '@/components/i18nProvider';
import NavBar from '@/molecules/navbar';

export default function Home() {
  return (
    <I18nProvider>
      <NavBar isScrolled={false} />
      <TemporalLanding />
    </I18nProvider>
  );
}
