import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logoPersonal from '/logotipo-lorran.svg';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header
      className="bg-black text-white flex justify-between items-center 
      w-full min-w-80 px-4 sm:px-20 py-3 fixed z-10"
    >
 
      <Link to="/" className="flex items-center">
        <img src={logoPersonal} alt="Lorran logo" className="w-20 sm:w-32" />
      </Link>

      <div className="lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      <nav
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } lg:flex flex-col lg:flex-row items-center gap-5 absolute lg:static top-16 left-0 w-full lg:w-auto lg:bg-transparent bg-black p-4 lg:p-0`}
      >
        <ul className="font-roboto flex flex-col lg:flex-row lg:items-center gap-5 lg:text-2xl md:text-xl sm:text-lg text-sm">
          <li>
            <NavLink to="/" className="hover:text-primary-color" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/mySkills" className="hover:text-primary-color" onClick={() => setIsMobileMenuOpen(false)}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="hover:text-primary-color" onClick={() => setIsMobileMenuOpen(false)}>
              Projects
            </NavLink>
          </li>

          <li className="mt-4 lg:hidden">
            <button
              onClick={() => {
                navigate('/contact');
                setIsMobileMenuOpen(false);
              }}
              className="bg-purpleCostum hover:bg-[#da1854] text-white text-lg font-semibold py-2 px-8 rounded-3xl transition duration-300 ease-in-out w-full"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>


      <div className="hidden lg:flex">
        <button
          onClick={() => navigate('/contact')}
          className="bg-purpleCostum hover:bg-[#da1854] text-white lg:text-2xl md:text-xl sm:text-lg text-sm font-semibold py-2 px-8 rounded-3xl transition duration-300 ease-in-out"
        >
          Contact
        </button>
      </div>
    </header>
  );
}
