'use client';

import { ColorAnimationBackground } from '@/atoms/ ColorAnimationBackground';
import BlurText from '@/atoms/titleLandingBlur';
import FormField from '@/molecules/formField';
import NavBar from '@/molecules/navbar';
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';


export default function ContactPage() {
  const { t } = useTranslation('contactPage');
    
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(t('status'));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus(t('confirmation'));
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(t('error1'));
      }
    } catch {
      setStatus(t('error2'));
    }
  };

  return (
    <ColorAnimationBackground className="relative min-h-screen place-content-center overflow-hidden bg-gray-950 px-2 sm:px-4 py-16 sm:py-24 text-gray-200">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      <NavBar isScrolled={false} />
      <BlurText text={t('title')} className="flex items-center justify-center text-white text-3xl gendy-font text-center sm:text-5xl md:text-7xl" />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl mx-auto mt-10">
      <div className="w-full md:w-7/12 flex flex-col items-center mb-8 md:mb-0">
        
        <p className="text-center text-lg sm:text-xl md:text-2xl mb-4">{t('description1')}</p>
        <p className="text-center text-lg sm:text-xl md:text-2xl mb-4">{t('description2')}</p>
        <p className="text-center text-lg sm:text-xl md:text-2xl mb-4">{t('description3')}</p>
        <p className="text-center text-lg sm:text-xl md:text-2xl mb-4">{t('description4')}</p>
      </div>
        <div className="w-full md:w-5/12 flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-950 shadow-md rounded-2xl p-4 sm:p-6 w-full max-w-md"
          >
            <h1 className="text-xl sm:text-2xl font-bold mb-4 text-[color:var(--color-principal)]">{t('contact')}</h1>
            <FormField
              inputId="name"
              label={t('name')}
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <FormField
              inputId="email"
              label={t('email')}
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label className="relative z-0 w-full mb-5 group">
              <textarea
                name="message"
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
                required
                className="block py-2.5 px-0 w-full text-base sm:text-lg text-white  font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[color:var(--color-principal)] focus:outline-none focus:ring-0 focus:border-[color:var(--color-principal)] peer resize-none"
                rows={4}
              />
              <label className="peer-focus:font-medium absolute text-base sm:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[color:var(--color-principal)] peer-focus:dark:text-[color:var(--color-principal)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {t('message')}
              </label>
            </label>
            <button
              type="submit"
              className="w-full bg-[color:var(--color-principal)]  text-gray-950 text-bold py-2 rounded-md hover:bg-[color:var(--color-principal)]  mt-3 text-base sm:text-lg"
            >
              {t('sendMessage')}
            </button>
            <p className="mt-4 text-sm text-gray-600">{status}</p>
          </form>
        </div>
      </div>
    </ColorAnimationBackground>
  );
}
