import React, { useState } from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.textAlign}>
      <nav className="bg-white p-3 flex items-center justify-between fixed top-0 left-0 w-full shadow-lg z-50">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col items-center">
            <a href="#" className="flex flex-col items-center">
              <img
                src="https://see.fontimg.com/api/rf5/G3lEZ/NTEyNGQ1ODUyMjQzNDQ3MGI4M2Q3NzM4YTkwYmZkYzgub3Rm/Q0hFQVAgQ09NUEFSRQ/st-noodles-grotesque.png?r=fs&h=65&w=1000&fg=000000&bg=FFFFFF&tb=1&s=65"
                alt="Advertising fonts"
                className={`h-8 ${styles.logo}`}
              />
              <p className={`mt-2 ${styles.logoSlogan}`}>Pick Out the Best Deals</p>
            </a>
          </div>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none lg:hidden"
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      <div className={`lg:flex lg:items-center lg:w-auto w-80 z-50 mt-4 h-full ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg fixed top-16 left-0 lg:static lg:top-auto lg:left-auto lg:shadow-none`} id="navbarNav">
        <ul className="lg:flex lg:space-x-8 lg:text-lg lg:font-medium p-4 lg:p-0">
          <li>
            <a className="text-gray-700 hover:text-gray-900" href="#">Home</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-gray-900" href="#services">Services</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-gray-900" href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-gray-900" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;