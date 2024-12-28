import React from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaMoneyBillWave, FaShieldAlt, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CarInsurance.module.scss';

const insurances = [
  { name: 'iWyze', price: 'R699', coverage: 'Comprehensive', link: '/company-a' },
  { name: 'Santam', price: 'R799', coverage: 'Third-Party', link: '/company-b' },
  { name: 'Budget Insure', price: 'R699', coverage: 'Comprehensive', link: '/company-c' },
  // Add up to 6 insurance companies
];

const CarInsurance: React.FC = () => {
  return (
    <div className="container mx-auto p-4 mt-20">
      <motion.div
        className="flex items-center mb-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/dashboard" className="text-teal-700 hover:text-teal-900">
          <FaArrowLeft size={24} />
        </Link>
        <h1 className="text-3xl font-bold ml-2">Car Insurance Deals</h1>
      </motion.div>
      <motion.p
        className="text-center mt-2 text-gray-700"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Find the best car insurance deals tailored for you.
      </motion.p>
      <motion.h2
        className="text-2xl font-semibold mt-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Insurance Companies
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {insurances.map((insurance, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <FaCar className="text-4xl text-teal-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold">{insurance.name}</h3>
            <p className="text-gray-700 mt-2"><FaMoneyBillWave className="inline-block mr-2" />Price: {insurance.price}</p>
            <p className="text-gray-700 mt-2"><FaShieldAlt className="inline-block mr-2" />Coverage: {insurance.coverage}</p>
            <a
              href={insurance.link}
              className="text-teal-700 hover:text-teal-900 mt-4 inline-block"
            >
              Compare
            </a>
          </motion.div>
        ))}
      </div>
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
  );
};

export default CarInsurance;