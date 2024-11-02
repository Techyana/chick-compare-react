import React from 'react';
import './SpecialOffers.module.scss';

interface Offer {
  title: string;
  description: string;
  image: string;
  discount: string;
}

const specialOffers: Offer[] = [
  {
    title: '50% off on Car Insurance',
    description: 'Get half off your first year of car insurance.',
    image: '/src/assets/images/Screenshot 2024-10-14 193259.png',
    discount: '50%',
  },
  {
    title: '25% off on Health Insurance',
    description: 'Save big on health insurance for the whole family.',
    image: '/src/assets/images/Screenshot 2024-10-17 114110.png',
    discount: '25%',
  },
  {
    title: '30% off on Fibre Deals',
    description: 'Upgrade your internet with a huge discount.',
    image: '/src/assets/images/Screenshot 2024-10-14 184530.png',
    discount: '30%',
  },
];

const SpecialOffers: React.FC = () => {
  return (
    <section id="special-offers" className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialOffers.map((offer, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-700 mb-2">{offer.description}</p>
                <span className="bg-red-500 text-white font-bold py-1 px-3 rounded">{offer.discount} OFF</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
