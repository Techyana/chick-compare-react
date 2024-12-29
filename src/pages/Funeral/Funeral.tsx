import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Funeral.module.scss';

const plans = [
  { name: 'Plan A', price: 'R199', coverage: 'Basic', link: '/plan-a', logo: '/assets/logos/plan-a-logo.png' },
  { name: 'Plan B', price: 'R299', coverage: 'Standard', link: '/plan-b', logo: '/assets/logos/plan-b-logo.png' },
  { name: 'Plan C', price: 'R399', coverage: 'Premium', link: '/plan-c', logo: '/assets/logos/plan-c-logo.png' },
];

const Funeral: React.FC = () => {
  return (
    <div className={`relative h-screen mt-32 ${styles.bgContainer}`}>
      <div className={`absolute inset-0 bg-cover bg-center ${styles['absolute-bg']}`}>
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
          <Link to="/dashboard" className="text-teal-700 hover:text-teal-900 flex items-center">
            <FaArrowLeft size={24} />
          </Link>
        </motion.div>
          <h2 className="text-2xl font-semibold mb-4">Find the best funeral plans available...</h2>
          <div className="flex justify-center mb-4">
            <img src="/assets/images/funeral-icon.png" alt="Funeral Icon" className="w-24 h-24 rounded-full border-4 border-teal-500" />
          </div>
          <ul className="space-y-4">
            {plans.map((plan, index) => (
              <li key={index}>
                <motion.div
                  className="flex items-center justify-between bg-white bg-opacity-75 p-4 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex items-center">
                    <img src={plan.logo} alt={`${plan.name} Logo`} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h3 className="text-lg font-bold">{plan.name}</h3>
                      <p className="text-gray-700">Price: {plan.price}</p>
                      <p className="text-gray-700">Coverage: {plan.coverage}</p>
                    </div>
                  </div>
                  <Link to={plan.link} className="text-teal-700 bg-amber-400 p-2 rounded-md hover:text-teal-900">
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

export default Funeral;