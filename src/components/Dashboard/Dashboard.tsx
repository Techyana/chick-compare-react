import React from 'react';
import { FaWifi, FaPhone, FaCar, FaHeartbeat, FaCross, FaPiggyBank } from 'react-icons/fa';
import './Dashboard.module.scss';

interface Service {
  icon: JSX.Element;
  name: string;
  link: string;
}

const services: Service[] = [
    { icon: <FaWifi size={48} />, name: 'Fibre Deals', link: '/fibre' },
    { icon: <FaPhone size={48} />, name: 'Phone Deals', link: '/phone' },
    { icon: <FaCar size={48} />, name: 'Car Insurance', link: '/car-insurance' },
    { icon: <FaPiggyBank size={48} />, name: 'Credit Money', link: '/credit-money' },
    { icon: <FaHeartbeat size={48} />, name: 'Health Insurance', link: '/health-insurance' },
    { icon: <FaCross size={48} />, name: 'Funeral Cover', link: '/funeral-cover' },
];

const Dashboard: React.FC = () => {
    return (
        <section className="py-8 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-center text-3xl font-bold mb-8">Our Services</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="text-center bg-white shadow-lg rounded-lg p-4">
                            <a href={service.link} className="block">
                                <div className="flex justify-center">{service.icon}</div>
                                <h3 className="text-xl font-semibold mt-2">{service.name}</h3>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
