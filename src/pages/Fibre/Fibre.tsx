import React from 'react';
import { FaGlobe, FaGlobeAfrica, FaRainbow } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Fibre.module.scss';

const Fibre: React.FC = () => {
  const isps = [
    { name: 'Axxess', price: 'R599', speed: '100Mbps', link: '/fibre/axxess', icon: <FaGlobe size={48} className="text-teal-700" /> },
    { name: 'Afrihost', price: 'R699', speed: '200Mbps', link: '/fibre/afrihost', icon: <FaGlobeAfrica size={48} className="text-teal-700" /> },
    { name: 'Rain', price: 'R799', speed: '300Mbps', link: '/fibre/rain', icon: <FaRainbow size={48} className="text-teal-700" /> },
  ];

  return (
    <div className={`mx-0 py-4 mt-0 ${styles.bgContainer}`}>
      <h1 className="text-3xl font-bold mb-4 px-2">Fibre Deals</h1>
      <h2 className="text-2xl font-semibold mb-2 px-2">LTE Deals</h2>

      <img src="/src/assets/images/copilot_image_1731277659945.jpeg" alt="Fibre Deals" className="w-full h-auto mb-4" />
      <p className="mb-4 px-2">Find the best Fibre & LTE deals available...</p>

      <h2 className="text-2xl font-semibold mb-2 px-2">ISP Comparisons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isps.map((isp, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 text-center">
            <Link to={isp.link} className="block">
              <div className="flex justify-center mb-2">{isp.icon}</div>
              <h3 className="text-xl font-bold">{isp.name}</h3>
              <p className="text-gray-700">Price: {isp.price}</p>
              <p className="text-gray-700">Speed: {isp.speed}</p>
              <span className="text-teal-700 hover:text-teal-900 mt-2 inline-block">Compare</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fibre;
