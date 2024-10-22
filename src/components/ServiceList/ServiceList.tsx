import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Car Insurance',
    description: 'Compare the best car insurance deals.',
    link: 'https://example.com/car-insurance',
    imageUrl: 'path-to-car-insurance-image'
  },
  {
    title: 'Health Insurance',
    description: 'Find the best health insurance plans.',
    link: 'https://example.com/health-insurance',
    imageUrl: 'path-to-health-insurance-image'
  },
  {
    title: 'Fibre Deals',
    description: 'Get top fibre internet deals.',
    link: 'https://example.com/fibre-deals',
    imageUrl: 'path-to-fibre-deals-image'
  },
  {
    title: 'Phone Deals',
    description: 'Discover the best phone and data deals.',
    link: 'https://example.com/phone-deals',
    imageUrl: 'path-to-phone-deals-image'
  },
  {
    title: 'Retirement Plans',
    description: 'Explore top retirement and financial plans.',
    link: 'https://example.com/retirement-plans',
    imageUrl: 'path-to-retirement-plans-image'
  }
];

const ServiceList: React.FC = () => {
  return (
    <div className="service-list">
      {services.map(service => (
        <ServiceCard
          key={service.title}
          title={service.title}
          description={service.description}
          link={service.link}
          imageUrl={service.imageUrl}
        />
      ))}
    </div>
  );
}

export default ServiceList;
