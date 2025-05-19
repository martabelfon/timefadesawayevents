import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`block py-2.5 px-0 w-full text-lg text-[#16adfa] font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#16adfa] focus:outline-none focus:ring-0 focus:border-[#16adfa] peer ${className || ''}`}
      {...props}
    />
  );
};

export default Input;
