import Counter from "@/atoms/counter"; 
import { useTranslation } from "react-i18next";

export default function Contador() {
    const { t } = useTranslation('landingPage');
  
  return (
    <main className="h-50 flex items-center justify-center">
      <div className="flex flex-col md:flex-row mt-15 gap-8">
        <Counter to={50} label={t('events')} />
        <Counter to={100} label={t('users')} />
        <Counter to={200} label={t('sales')} />
        <Counter to={35} label={t('years')} />
      </div>
    </main>
  );
}