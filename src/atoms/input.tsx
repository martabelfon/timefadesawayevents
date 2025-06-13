import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`block py-2.5 px-0 w-full text-lg text-[color:var(--color-principal)] font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[color:var(--color-principal)] focus:outline-none focus:ring-0 focus:border-[color:var(--color-principal)] peer ${className || ''}`}
      {...props}
    />
  );
};

export default Input;
