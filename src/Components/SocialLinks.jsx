import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex space-x-4 text-xl mb-4">
      <a href="https://www.instagram.com/losantos_/profilecard/?igsh=OXlma3Bvc3hwbzky" className="hover:text-[#6A00FF]" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/in/lorran-sarmento/" className="hover:text-[#da1854]" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/lorransantosdev" className="hover:text-[#6A00FF]" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  );
}
