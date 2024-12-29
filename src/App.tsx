import React from 'react';
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
import FibreDeals from './pages/Fibre/FibreDeals';
import Afrihost from './pages/Fibre/Afrihost/Afrihost';
import PhoneDeals from './pages/PhoneDeals/PhoneDeals';
import CarInsurance from './pages/CarInsurance/CarInsurance';
import Credit from './pages/Credit/Credit';
import Health from './pages/Health/Health';
import Funeral from './pages/Funeral/Funeral';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './assets/styles/main.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="content-wrapper">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/special-offers" element={<SpecialOffers />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Footer />} />
            <Route path='/fibre-deals' element={<FibreDeals />} />
            <Route path="/fibre/afrihost" element={<Afrihost />} />
            <Route path='/phone-deals' element={<PhoneDeals />} />
            <Route path="/car-insurance" element={<CarInsurance />} />
            <Route path="/credit-money" element={<Credit />} />
            <Route path="/health-insurance" element={<Health />} />
            <Route path="/funeral-cover" element={<Funeral />} />
          </Routes>
        </ScrollToTop>
      </div>
    </Router>
  );
};

export default App;