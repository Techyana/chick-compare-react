import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="./assets/videos/205691-927672681_small.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container relative z-10 text-center flex flex-col items-center justify-center h-full">
        <h2 className="text-white text-4xl font-bold mb-4">Compare Insurance and Financial Products Easily</h2>
        <p className="text-white text-lg italic">Find the best deals from top South African companies</p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-1"></div>
    </section>
  );
};

export default Hero;