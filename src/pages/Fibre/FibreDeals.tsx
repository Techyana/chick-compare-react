import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaGlobeAfrica, FaRainbow, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './FibreDeals.module.scss';

const isps = [
  { name: 'Axxess', price: 'R599', speed: '100Mbps', link: '/fibre/axxess', icon: <FaGlobe size={48} className="text-teal-700" /> },
  { name: 'Afrihost', price: 'R699', speed: '200Mbps', link: '/fibre/afrihost', icon: <FaGlobeAfrica size={48} className="text-teal-700" /> },
  { name: 'Rain', price: 'R799', speed: '300Mbps', link: '/fibre/rain', icon: <FaRainbow size={48} className="text-teal-700" /> },
];

const FibreDeals: React.FC = () => {
  return (
    <div className={`container mx-auto mt-20 p-4 ${styles.bgContainer}`}>
      <motion.div
        className="flex items-center mb-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/dashboard" className="text-teal-700 hover:text-teal-900">
          <FaArrowLeft size={24} />
        </Link>
        <h1 className="text-3xl font-bold ml-2">Fibre Deals</h1>
      </motion.div>
      <motion.p
        className="text-center mt-2 text-gray-700"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Find the best Fibre & LTE deals available...
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {isps.map((isp, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Link to={isp.link} className="block">
              <div className="flex justify-center mb-4">{isp.icon}</div>
              <h3 className="text-xl font-bold">{isp.name}</h3>
              <p className="text-gray-700 mt-2">Price: {isp.price}</p>
              <p className="text-gray-700 mt-2">Speed: {isp.speed}</p>
              <span className="text-teal-700 hover:text-teal-900 mt-4 inline-block">Compare</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FibreDeals;