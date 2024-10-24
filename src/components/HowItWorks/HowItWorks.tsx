import React from 'react';
import { FaSearch, FaClipboardList, FaSmile } from 'react-icons/fa';
import './HowItWorks.module.scss';

const steps = [
  {
    icon: <FaSearch size={48} />,
    title: '1. Search',
    description: 'Find the service you need.',
  },
  {
    icon: <FaClipboardList size={48} />,
    title: '2. Compare',
    description: 'Compare quotes and benefits.',
  },
  {
    icon: <FaSmile size={48} />,
    title: '3. Save',
    description: 'Choose the best deal and save money!',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center bg-white shadow-lg rounded-lg p-4">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
