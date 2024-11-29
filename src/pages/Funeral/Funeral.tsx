import React from 'react';
import './Funeral.module.scss';

const Funeral: React.FC = () => {
  const plans = [
    { name: 'Plan A', price: 'R199', coverage: 'Basic', link: '/plan-a' },
    { name: 'Plan B', price: 'R299', coverage: 'Standard', link: '/plan-b' },
    { name: 'Plan C', price: 'R399', coverage: 'Premium', link: '/plan-c' },
    // Add up to 6 plans
  ];

  return (
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-3xl font-bold mb-4">Funeral Plan Options</h1>
      <p className="mb-4">Find the best funeral plans available...</p>

      <h2 className="text-2xl font-semibold mb-2">Plan Comparisons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 text-center">
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-gray-700">Price: {plan.price}</p>
            <p className="text-gray-700">Coverage: {plan.coverage}</p>
            <a href={plan.link} className="text-teal-700 hover:text-teal-900 mt-2 inline-block">Compare</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Funeral;