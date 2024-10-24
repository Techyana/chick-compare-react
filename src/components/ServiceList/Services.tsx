import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import styles from './ServiceList.module.scss';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Car Insurance */}
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <Carousel autoPlay interval={3000} infiniteLoop showArrows={false} showIndicators={false} showStatus={false}>
              <div>
                <img src="/src/assets/images/Screenshot 2024-10-14 184530.png" alt="Car insurance" />
              </div>
              <div>
                <img src="/src/assets/images/Screenshot 2024-10-17 101044.png" alt="Another car insurance image" />
              </div>
              <div>
                <img src="/src/assets/images/Screenshot 2024-10-17 114110.png" alt="Another car insurance image" />
              </div>
              <div>
                <img src="/src/assets/images/Screenshot 2024-10-14 193259.png" alt="Another car insurance image" />
              </div>
            </Carousel>
            <div className={`p-4 text-center ${styles.serviceTile}`}>
              <h3 className="text-xl font-semibold mb-2">Car Insurance</h3>
              <p className="text-gray-700">Compare quotes and benefits from leading car insurance providers.</p>
            </div>
          </div>
          
          {/* Life Insurance */}
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <Carousel autoPlay interval={3000} infiniteLoop showArrows={false} showIndicators={false} showStatus={false}>
              <div>
                <img src="/src/assets/images/Screenshot 2024-10-14 191642.png" alt="Life insurance" />
              </div>
              <div>
                <img src="/src/assets/images/Screenshot 2024-10-17 101044.png" alt="Another life insurance image" />
              </div>
              <div>
                <img src="/src/assets/images/Screenshot 2024-10-14 184530.png" alt="Life insurance" />
              </div>
              <div>
                <img src="/src/assets/images/Screenshot 2024-10-14 193259.png" alt="Another life insurance image" />
              </div>
            </Carousel>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Life Insurance</h3>
              <p className="text-gray-700">Protect your loved ones with the right life insurance policy.</p>
            </div>
          </div>
          
          {/* Home Insurance */}
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <Carousel autoPlay interval={3000} infiniteLoop showArrows={false} showIndicators={false} showStatus={false}>
              <div>
                <img src="/src/assets/images/Screenshot 2024-10-14 184530.png" alt="Home insurance" />
              </div>
              <div>
                <img src="/src/assets/images/Screenshot 2024-10-17 101044.png" alt="Another home insurance image" />
              </div>
              <div>
                <img src="/src/assets/images/Screenshot 2024-10-17 114110.png" alt="Another home insurance image" />
              </div>
              <div>
                <img src="/src/assets/images/Screenshot 2024-10-14 193259.png" alt="Another home insurance image" />
              </div>
            </Carousel>
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