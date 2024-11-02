import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Afrihost.module.scss';

const Afrihost: React.FC = () => {
  return (
    <div className="container mx-auto p-4 mt-20">
      <Link to="/fibre" className="flex items-center text-teal-700 hover:text-teal-900 mb-4">
        <FaArrowLeft className="mr-2" />
        <span>Back to Fibre</span>
      </Link>
      <h1 className="text-3xl font-bold mb-4">Afrihost Fibre Deals</h1>
      <p>Details about Afrihost fibre deals...</p>
      {/* Add more details about Afrihost fibre deals here */}
    </div>
  );
};

export default Afrihost;