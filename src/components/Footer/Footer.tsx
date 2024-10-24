import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p className="text-sm">123 Main Road, Stellenbosch, Western Cape</p>
          <p className="text-sm">Email: info@chickcomapre.co.za</p>
          <p className="text-sm">Phone: (021) 456-7890</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
      <div className="text-center text-sm mt-4">
        &copy; 2024 Chick  Compare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
