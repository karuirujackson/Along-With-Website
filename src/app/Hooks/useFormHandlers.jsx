import { useState } from 'react';
import { handleChange, handleSubmit } from '../utils/formutils';

export const useFormHandlers = () => {
    const [formData, setFormData] =useState({
    profileLink: "",
    fullName: "",
    email: "",
    mobileNumber: "",
    });

    const onChange = (e) => {
        handleChange(e, formData, setFormData);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(formData);
    };
  return {
    formData,
    onChange,
    onSubmit,
  }
};
