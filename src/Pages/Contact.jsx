import React, { useState, useRef } from 'react';
import InputContact from '../Components/InputContact';
import Sections from '../Components/Sections';

export default function Contact() {

  const formRef = useRef();

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Submitted:', formValues);

    formRef.current.reset();
    setFormValues({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const sectionAbout = {
    background: 'bg-black',
    positions: 'flex flex-col items-center text-white h-screen',
  };

  const contactInputs = [
    { id: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Enter the subject' },
    { id: 'message', label: 'Message', type: 'textarea', placeholder: 'Enter your message' },
  ];

  return (
    <Sections background={sectionAbout.background} positions={sectionAbout.positions}>
      <h1 className="sm:text-5xl text-3xl mb-4 font-inconsolata text-center text-[#da1854]">Contact Us</h1>

      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-xs sm:max-w-md md:max-w-lg">
        <InputContact forInputs={contactInputs} handleChange={handleInputChange} formValues={formValues} />

        <button type="submit" className="bg-purpleCostum hover:bg-[#da1854] text-white py-2 px-4 rounded-3xl">
          Send Message
        </button>
      </form>
    </Sections>
  );
}
