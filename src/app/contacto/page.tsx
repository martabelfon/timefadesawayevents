'use client';

import { ColorAnimationBackground } from '@/atoms/ ColorAnimationBackground';
import FormField from '@/molecules/FormField';
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
    <ColorAnimationBackground className="relative min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200">
    <NavBar isScrolled={false} />
    <div className="">
        <div className="absolute inset-0 z-0">
            <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
            </Canvas>
        </div>
        <div className="flex flex-row items-center ">
            <div className="w-full items-center flex flex-col">
                <p>Descripcion</p>
            </div>
            <div className="w-full">
                <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md"
                >
                    <h1 className="text-2xl font-bold mb-4">{t('contact')}</h1>
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
                    className="block py-2.5 px-0 w-full text-lg text-[#16adfa] font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#16adfa] focus:outline-none focus:ring-0 focus:border-[#16adfa] peer resize-none"
                    rows={4}
                    />
                    <label className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#16adfa] peer-focus:dark:text-[#16adfa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        {t('message')}
                    </label>
                    </label>
                    <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 mt-3"
                    >
                    {t('sendMessage')}
                    </button>
                    <p className="mt-4 text-sm text-gray-600">{status}</p>
                </form>
            </div>
        </div>
    </div>
    </ColorAnimationBackground>
  );
}
