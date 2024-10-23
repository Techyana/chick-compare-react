import React from 'react';
import './assets/styles/tailwind.css';
import './assets/styles/main.css';
import Header from './components/Header/Header';
import Services from './components/ServiceList/Services';
import Hero from './components/Hero/Hero';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      {/* Add other components here */}
    </div>
  );
};

export default App;