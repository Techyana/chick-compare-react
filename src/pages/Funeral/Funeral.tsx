import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Funeral.module.scss';

const Funeral: React.FC = () => {
  const plans = [
    { name: 'Plan A', price: 'R199', coverage: 'Basic', link: '/plan-a' },
    { name: 'Plan B', price: 'R299', coverage: 'Standard', link: '/plan-b' },
    { name: 'Plan C', price: 'R399', coverage: 'Premium', link: '/plan-c' },
  ];

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
        <h1 className="text-3xl font-bold ml-2">Funeral Plan Options</h1>
      </motion.div>
      <motion.p
        className="text-center mt-2 text-gray-700"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Find the best funeral plans available...
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Link to={plan.link} className="block">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-gray-700 mt-2">Price: {plan.price}</p>
              <p className="text-gray-700 mt-2">Coverage: {plan.coverage}</p>
              <span className="text-teal-700 hover:text-teal-900 mt-4 inline-block">Compare</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Funeral;