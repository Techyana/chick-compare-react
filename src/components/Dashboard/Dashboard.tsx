import React from 'react';
import { FaWifi, FaCar, FaHeartbeat, FaCross, FaPiggyBank, FaMobile } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.scss';

interface Service {
  icon: JSX.Element;
  name: string;
  link: string;
}

const services: Service[] = [
    { icon: <FaWifi size={48} className="text-teal-700" />, name: 'Fibre', link: '/fibre' },
    { icon: <FaMobile size={48} className="text-teal-700" />, name: 'Phones', link: '/phone' },
    { icon: <FaCar size={48} className="text-teal-700" />, name: 'Car', link: '/car-insurance' },
    { icon: <FaPiggyBank size={48} className="text-teal-700" />, name: 'Credit', link: '/credit-money' },
    { icon: <FaHeartbeat size={48} className="text-teal-700" />, name: 'Health', link: '/health-insurance' },
    { icon: <FaCross size={48} className="text-teal-700" />, name: 'Funeral', link: '/funeral-cover' },
];

const Dashboard: React.FC = () => {
    return (
        <section className={styles.bgLayer}>
            <img src="/src/assets/images/monster-banner-services.png" alt="Chick-Compare" />
            <div className={`container mx-auto ${styles.serviceContainer}`}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="text-center bg-white shadow-lg rounded-lg p-4">
                            <Link to={service.link} className="block">
                                <div className="flex justify-center">{service.icon}</div>
                                <h3 className="text-xl font-semibold mt-2">{service.name}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;