import React from 'react';
import './assets/styles/tailwind.css';
import './assets/styles/main.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Dashboard from './components/Dashboard/Dashboard';
import Services from './components/ServiceList/Services';
import Testimonials from './components/Testimonials/Testimonials';
import SpecialOffers from './components/SpecialOffers/SpecialOffers';
import HowItWorks from './components/HowItWorks/HowItWorks';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Fibre from './pages/Fibre/Fibre';
import Afrihost from './pages/Fibre/Afrihost/Afrihost';
import Phone from './pages/Phone/Phone';
import Car from './pages/Car/Car';
import Credit from './pages/Credit/Credit';
import Health from './pages/Health/Health';
import Funeral from './pages/Funeral/Funeral';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <Dashboard />
            <Services />
            <Testimonials />
            <SpecialOffers />
            <HowItWorks />
            <FAQ />
            <Footer />
          </>} />
          <Route path="/fibre" element={<Fibre />} />
          <Route path="/fibre/afrihost" element={<Afrihost />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/car-insurance" element={<Car />} />
          <Route path="/credit-money" element={<Credit />} />
          <Route path="/health-insurance" element={<Health />} />
          <Route path="/funeral-cover" element={<Funeral />} />
          
          {/* Add routes for other services */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;