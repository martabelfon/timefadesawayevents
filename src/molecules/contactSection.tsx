import { AnimatedButton } from "@/atoms/AnimatedButton";
 import React from "react";
import { useTranslation } from "react-i18next";


 const ContactSection = () => {
    const { t } = useTranslation('contactPage');
  
  return (

<section className="w-full flex flex-col items-center justify-center p-4 sm:p-8 order-3">
        <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--color-principal)] mb-8 text-center">{t('titlePage')}</h2>
        <a href="/contacto">
          <AnimatedButton fixedColor="var(--color-principal)" className="mt-4">
            {t('buttonContact')}
          </AnimatedButton>
        </a>
      </section>

);
};

export default ContactSection;