import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Afrihost.module.scss';

const Afrihost: React.FC = () => {
  return (
    <div className="container mx-auto p-4 mt-20">
      <motion.div
        className="flex items-center mb-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/fibre" className="text-teal-700 hover:text-teal-900">
          <FaArrowLeft size={24} />
        </Link>
        <h1 className="text-3xl font-bold ml-2">Afrihost Fibre Deals</h1>
      </motion.div>
      <motion.p
        className="text-center mt-2 text-gray-700"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Details about Afrihost fibre deals...
      </motion.p>
      {/* Add more details about Afrihost fibre deals here */}
    </div>
  );
};

export default Afrihost;