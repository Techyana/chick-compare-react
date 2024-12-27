//*import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './PhoneDeals.module.scss';

const PhoneDeals: React.FC = () => {
  const isps = [
    { name: 'axxess', price: 'R599', speed: '100Mbps', link: '/isp-one' },
    { name: 'afrihost', price: 'R699', speed: '200Mbps', link: '/isp-two' },
    { name: 'rain', price: 'R799', speed: '300Mbps', link: '/isp-three' },
    // Add up to 6 ISPs
  ];

  return (
    <div className="container mx-auto p-4 mt-20">
      <Link to="/" className="flex items-center text-teal-700 hover:text-teal-900 mb-4">
        <FaArrowLeft className="mr-2" />
        <span>Back to Dashboard</span>
      </Link>
      <h1 className="text-3xl font-bold mb-4">Phone Deals</h1>
      <h2 className="text-2xl font-semibold mb-2">LTE Deals</h2>
      <p className="mb-4">Find the best Phone & LTE deals available...</p>

      <h2 className="text-2xl font-semibold mb-2">ISP Comparisons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isps.map((isp, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 text-center">
            <h3 className="text-xl font-bold">{isp.name}</h3>
            <p className="text-gray-700">Price: {isp.price}</p>
            <p className="text-gray-700">Speed: {isp.speed}</p>
            <a href={isp.link} className="text-teal-700 hover:text-teal-900 mt-2 inline-block">Compare</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneDeals;
