import React from 'react';

export default function InputContact({ forInputs, handleChange }) {
  return (
    <>
      {forInputs.map((forInput) => (
        <div key={forInput.id} className="flex flex-col mb-4">
          <label htmlFor={forInput.id} className="text-[#6A00FF] sm:w-4/5 w-full sm:text-xl text-sm font-roboto mb-2">
            {forInput.label}
          </label>

          {forInput.type === 'textarea' ? (
            <textarea
              id={forInput.id}
              placeholder={forInput.placeholder}
              onChange={handleChange}
              className="bg-transparent border-2 rounded-3xl border-white text-white lg:py-2 sm:px-5 md:py-4 md:px-6 px-4 py-2"
            />
          ) : (
            <input
              type={forInput.type}
              id={forInput.id}
              placeholder={forInput.placeholder}
              onChange={handleChange}
              className="bg-transparent border-2 rounded-3xl border-white text-white lg:py-2 sm:px-5 md:py-4 md:px-6 px-4 py-2"
            />
          )}
        </div>
      ))}
    </>
  );
}
