import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Credit.module.scss';

const Credit: React.FC = () => {
  const isps = [
    { name: 'axxess', price: 'R599', speed: '100Mbps', link: '/isp-one' },
    { name: 'afrihost', price: 'R699', speed: '200Mbps', link: '/isp-two' },
    { name: 'rain', price: 'R799', speed: '300Mbps', link: '/isp-three' },
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
        <h1 className="text-3xl font-bold ml-2">Credit Deals</h1>
      </motion.div>
      <motion.p
        className="text-center mt-2 text-gray-700"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Find the best Credit & LTE deals available...
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

export default Credit;