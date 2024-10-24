import React from 'react';
import './assets/styles/tailwind.css';
import './assets/styles/main.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Dashboard from './components/Dashboard/Dashboard';
import Services from './components/ServiceList/Services';
import Footer from './components/Footer/Footer';


const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Dashboard />
      <Services />
      <Footer />
      {/* Add other components here */}
    </div>
  );
};

export default App;