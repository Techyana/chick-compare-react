import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ServiceList.module.scss';

const images = {
  carInsurance: [
    "/assets/images/Screenshot 2024-10-14 184530.png",
    "/assets/images/car-insurance/Screenshot 2024-11-02 201330.png",
    "/assets/images/car-insurance/Screenshot 2024-11-02 195228.png",
    "/assets/images/car-insurance/Screenshot 2024-11-02 195926.png"
  ],
  lifeInsurance: [
    "/assets/images/Screenshot 2024-10-14 191642.png",
    "/assets/images/Screenshot 2024-10-17 101044.png",
    "/assets/images/Screenshot 2024-10-14 184530.png",
    "/assets/images/Screenshot 2024-10-14 193259.png"
  ],
  homeInsurance: [
    "/assets/images/Screenshot 2024-10-14 184530.png",
    "/assets/images/car-insurance/Screenshot 2024-11-02 180035.png",
    "/assets/images/Screenshot 2024-10-17 114110.png",
    "/assets/images/Screenshot 2024-10-17 101044.png"
  ]
};

const Services: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentService] = useState<keyof typeof images>('carInsurance');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images[currentService].length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentService]);

  const renderCarousel = (service: keyof typeof images) => (
    <AnimatePresence>
      <motion.div
        key={images[service][currentImageIndex]}
        initial={{ opacity: 0, x: 0, y: 0, bottom: 0, position: 'relative' }}  
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -500, y: -100000, bottom: 0, position: 'absolute' }}
        transition={{ duration: 1 }}
        className="image-container"
      >
        <img src={images[service][currentImageIndex]} alt={`${service} image`} />
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section id="services" className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Car Insurance */}
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-center py-4">Our Services</h2>
            <p className="text-center text-gray-700 py-4">We offer a range of insurance services to help you find the best policy for your needs.</p>
            <div className="carousel">
              {renderCarousel('carInsurance')}
            </div>
            <div className={`p-4 text-center ${styles.serviceTile}`}>
              <h3 className="text-xl font-semibold mb-2">Car Insurance</h3>
              <p className="text-gray-700">Compare quotes and benefits from leading car insurance providers.</p>
            </div>
          </div>

          {/* Life Insurance */}
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="carousel">
              {renderCarousel('lifeInsurance')}
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Life Insurance</h3>
              <p className="text-gray-700">Protect your loved ones with the right life insurance policy.</p>
            </div>
          </div>

          {/* Home Insurance */}
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="carousel">
              {renderCarousel('homeInsurance')}
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Home Insurance</h3>
              <p className="text-gray-700">Protect your home and belongings with the right insurance policy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;