import React from 'react';
import './ServiceList.module.scss';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <div id="carInsuranceCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./assets/img/Screenshot 2024-10-14 184530.png" className="d-block w-100 car-img" alt="Car insurance" />
                </div>
                <div className="carousel-item">
                  <img src="./assets/img/another-image.png" className="d-block w-100 car-img" alt="Another car insurance image" />
                </div>
              </div>
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carInsuranceCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carInsuranceCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2`">Car Insurance</h3>
              <p className="text-gray-700">Compare quotes and benefits from leading car insurance providers.</p>
            </div>
          </div>
          
          {/* Life Insurance */

          <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <div id="lifeInsuranceCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./assets/img/Screenshot 2024-10-14 184530.png" className="d-block w-100 car-img" alt="Life insurance" />
                </div>
                <div className="carousel-item">
                  <img src="./assets/img/another-image.png" className="d-block w-100 car-img" alt="Another life insurance image" />
                </div>
              </div>
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#lifeInsuranceCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#lifeInsuranceCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Life Insurance</h3>
              <p className="text-gray-700">Protect your loved ones with the right life insurance policy.</p>
            </div>
          </div>  
          }

        {/* Home Insurance */
          
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <div id="homeInsuranceCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./assets/img/Screenshot 2024-10-14 184530.png" className="d-block w-100 car-img" alt="Home insurance" />
                </div>
                <div className="carousel-item">
                  <img src="./assets/img/another-image.png" className="d-block w-100 car-img" alt="Another home insurance image" />
                </div>
              </div>
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#homeInsuranceCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#homeInsuranceCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Home Insurance</h3>
              <p className="text-gray-700">Protect your home and belongings with the right insurance policy.</p>
            </div>
          </div>    
        }

        </div>
      </div>
    </section>
  );
};

export default Services;