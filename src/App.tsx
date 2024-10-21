import React from 'react';
import './assets/styles/tailwind.css';
import './assets/styles/main.css';
import Header from './components/Header';
import Services from './components/Services';
import Hero from './components/Hero';

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