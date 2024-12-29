import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './FibreDeals.module.scss';

const isps = [
  { name: 'Webafrica', price: 'R599', speed: '100Mbps', link: 'https://www.webafrica.co.za/aff.php?aff=444808', logo: '/assets/logos/Webafrica-Logo.jpg' },
  { name: 'Afrihost', price: 'R699', speed: '200Mbps', link: '/fibre/afrihost', logo: '/assets/logos/AfriHost-Logo.png' },
  { name: 'Rain', price: 'R799', speed: '300Mbps', link: '/fibre/rain', logo: '/assets/logos/Rain-Logo.png' },
];

const FibreDeals: React.FC = () => {
  return (
    <div className={`relative h-screen pt-40 mb-6 ${styles.bgContainer}`}>
      <div className={`absolute inset-0 bg-cover bg-center ${styles['absolute-bg']}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-75"></div>
      </div>
      <div className={`relative z-10 flex flex-col items-center justify-center h-full p-4 ${styles.bgImage}`}>
        <motion.div
          className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/dashboard" className="text-teal-700 hover:text-teal-900">
                      <FaArrowLeft size={24} />
          </Link>
          <div className='flex flex-col items-center justify-center -mt-12'>
          <h3 className="text-1xl font-semibold mb-4 bg-transparent p-4 rounded-lg w-56">Find the best Fibre & LTE deals available.</h3>
          </div>
          <div className="flex justify-center mb-4">
            <img src="/public/assets/logos/wifi-neon.jpg" alt="Fibre Icon" className="w-24 h-24 rounded-full border-4 border-teal-500" />
          </div>
          <ul className="space-y-4">
            {isps.map((isp, index) => (
              <li key={index}>
                <motion.div
                  className="flex items-center justify-between bg-white bg-opacity-75 p-4 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex items-center">
                    <div className='p-0 items-start justify-start'>
                    <img src={isp.logo} alt={`${isp.name} Logo`} className="w-14 h-14 mr-4 rounded-md" />
                    
                  </div>
                    <div>
                      <h3 className="text-md font-bold">{isp.name}</h3>
                      <p className="text-gray-700 text-sm">Price: {isp.price}</p>
                      <p className="text-gray-700 text-sm">Speed: {isp.speed}</p>
                    </div>
                  </div>
                  <Link to={isp.link} className="text-slate-950 p-2 bg-emerald-500 rounded-md hover:text-teal-900">
                    Compare
                  </Link>
                </motion.div>
              </li>
              
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default FibreDeals;