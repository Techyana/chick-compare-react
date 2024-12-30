import React from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './CarInsurance.module.scss';

const insurances = [
  { name: 'iWyze', price: 'R699', coverage: 'Comprehensive', link: '/company-a' },
  { name: 'Santam', price: 'R799', coverage: 'Third-Party', link: '/company-b' },
  { name: 'Budget Insure', price: 'R699', coverage: 'Comprehensive', link: '/company-c' },
  // Add up to 6 insurance companies
];

const CarInsurance: React.FC = () => {
  return (
    <div className={`relative h-screen pt-96 mt-12 ${styles.bgContainer}`}>
      <div className="absolute inset-0 car-insurance-background">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-75"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
        
        <motion.div
          className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
          className="flex items-center mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.div>
          <div className="flex items-center mb-4">
          <Link to="/dashboard" className="text-teal-700 hover:text-teal-900">
            <FaArrowLeft size={24} />
          </Link>
          <h2 className="text-2xl font-semibold mb-4">Find the best car insurance deals tailored for you.</h2>
          </div>
          <div className="flex justify-center mb-4">
            <img src="/assets/logos/neon-car-logo.png" alt="Car Insurance Icon" className="w-24 h-24 rounded-full border-4 border-teal-500" />
          </div>
          <ul className="space-y-4">
            {insurances.map((insurance, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-between bg-white bg-opacity-75 p-4 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center">
                  <FaCar className="text-4xl text-teal-500 mr-4" />
                  <div>
                    <h3 className="text-lg font-bold">{insurance.name}</h3>
                    <p className="text-gray-700">Price: {insurance.price}</p>
                    <p className="text-gray-700">Coverage: {insurance.coverage}</p>
                  </div>
                </div>
                <Link to={insurance.link} className="text-teal-700 hover:text-teal-900">
                  Compare
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.h2
          className="text-2xl font-semibold mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Comparison
        </motion.h2>
        <motion.div
          className="bg-white p-6 shadow-lg rounded-lg mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <p>Comparison of different car insurance companies...</p>
        </motion.div>
      </div>
    </div>
  );
};

export default CarInsurance;