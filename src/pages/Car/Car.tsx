import React from 'react';
import './Car.module.scss';

const Car: React.FC = () => {
  const insurances = [
    { name: 'iWyze', price: 'R499', coverage: 'Comprehensive', link: '/company-a' },
    { name: 'Santam', price: 'R599', coverage: 'Third-Party', link: '/company-b' },
    { name: 'Budget Insure', price: 'R699', coverage: 'Comprehensive', link: '/company-c' },
    // Add up to 6 insurance companies
  ];

  return (
    <div className="container mx-auto p-4">

      <h1 className="text-2xl font-bold mt-4">Car Insurance Deals</h1>
      <p>Details about car insurance deals...</p>
      <h2 className="text-xl font-semibold mt-4">Insurance Companies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {insurances.map((insurance, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 text-center">
            <h3 className="text-xl font-bold">{insurance.name}</h3>
            <p className="text-gray-700">Price: {insurance.price}</p>
            <p className="text-gray-700">Coverage: {insurance.coverage}</p>
            <a href={insurance.link} className="text-teal-700 hover:text-teal-900 mt-2 inline-block">Compare</a>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mt-4">Comparison</h2>
      <div className="bg-white p-4 shadow-lg rounded-lg">
        {/* Add comparison details here */}
        <p>Comparison of different car insurance companies...</p>
      </div>
    </div>
  );
};

export default Car;