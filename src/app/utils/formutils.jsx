export const handleChange = (e, formData, setFormData) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};

export const handleSubmit = (formData) => {
    console.log('Form Submitted Successfully', formData);
};