import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top p-3 flex items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <a href="#" className="navbar-brand">
              <img
                src="https://see.fontimg.com/api/rf5/G3lEZ/NTEyNGQ1ODUyMjQzNDQ3MGI4M2Q3NzM4YTkwYmZkYzgub3Rm/Y2hpY2sgY29tcGFyZQ/st-noodles-grotesque.png?r=fs&h=65&w=1000&fg=000000&bg=FFFFFF&tb=1&s=65"
                alt="Advertising fonts"
              />
              <p className={`ml-0 ${styles.logoSlogan}`}>Peck Out the Best Deals</p>
            </a>
            
          </div>
          <button
            className="navbar-toggler border-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;