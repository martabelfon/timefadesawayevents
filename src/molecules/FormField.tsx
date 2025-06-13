import React from 'react';
import Input from '@/atoms/input';
import Label from '@/atoms/label';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputId: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, inputId, ...inputProps }) => {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <Input id={inputId} name={inputId} placeholder=" " {...inputProps} />
      <Label htmlFor={inputId}>{label}</Label>
    </div>
  );
};

export default FormField;
