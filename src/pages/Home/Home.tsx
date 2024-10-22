import React from 'react';
import ServiceList from '../../components/ServiceList/ServiceList';

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to Chick-Compare</h1>
        <p>Your one-stop shop to compare the best deals on insurance and more.</p>
      </header>
      <ServiceList />
    </div>
  );
}

export default Home;
