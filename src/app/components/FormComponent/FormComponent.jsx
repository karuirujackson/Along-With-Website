import React from 'react';
import useFormHandlers from '../hooks/useFormHandlers';

const FormComponent = () => {
  const { formData, onChange, onSubmit } = useFormHandlers();

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username || ''}
        onChange={onChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={formData.email || ''}
        onChange={onChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
