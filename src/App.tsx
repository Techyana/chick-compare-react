import React from 'react';
import './assets/styles/tailwind.css';
import './assets/styles/main.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Dashboard from './components/Dashboard/Dashboard';
import Services from './components/ServiceList/Services';
import Testimonials from './components/Testimonials/Testimonials';
import SpecialOffers from './components/SpecialOffers/SpecialOffers';
import HowItWorks from './components/HowItWorks/HowItWorks';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';


const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Dashboard />
      <Services />
      <Testimonials />
      <SpecialOffers />
      <HowItWorks />
      <FAQ />
      <Footer />
      {/* Add other components here */}
    </div>
  );
};

export default App;