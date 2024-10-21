import React from 'react';

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
              <h3 className="text-xl font-semibold mb-2">Car Insurance</h3>
              <p className="text-gray-700">Compare quotes and benefits from leading car insurance providers.</p>
            </div>
          </div>
          {/* Add more service cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Services;