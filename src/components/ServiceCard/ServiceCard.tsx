import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, link, imageUrl }) => {
  return (
    <div className="service-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="button-link">Learn More</a>
    </div>
  );
}

export default ServiceCard;
