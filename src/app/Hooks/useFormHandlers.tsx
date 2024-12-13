import { useState } from 'react';
import { handleChange, handleSubmit } from '../utils/formutils';

export const useFormHandlers = () => {
    const [formData, setFormData] =useState({
    profileLink: "",
    fullName: "",
    email: "",
    mobileNumber: "",
    });

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        handleChange(e, formData, setFormData);
    };

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        handleSubmit(formData);
    };
  return {
    formData,
    onChange,
    onSubmit,
  }
};
