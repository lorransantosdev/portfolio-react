import React from 'react';
import SocialLinks from './SocialLinks'; // Importando o componente de redes sociais

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-6 flex flex-col items-center justify-center min-w-80">
      
      <SocialLinks />

      <p className="text-center text-[#6A00FF] text-sm font-roboto mb-4">
        Thank you for visiting my portfolio. Feel free to connect with me on my social channels!
      </p>

      <div className="text-center text-sm font-roboto">
        &copy; {currentYear} Lorran's Portfolio. All Rights Reserved.
      </div>
    </footer>
  );
}
