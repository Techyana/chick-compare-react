import React from 'react';
import './assets/styles/tailwind.css';
import './assets/styles/main.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="bg-blue-500 text-white p-4 lg">Chick-Compare</h1>
        <p>Your one-stop shop to compare insurance quotes.</p>
      </header>
      <main>
        <section className='main-container'>
          <h2>Featured Services</h2>
          <div className="service-card">
            <h3>Car Insurance</h3>
            <p>Find the best car insurance deals.</p>
          </div>
          <div className="service-card">
            <h3>Health Insurance</h3>
            <p>Compare health insurance options.</p>
          </div>
          <div className="service-card">
            <h3>Cellphone Deals</h3>
            <p>Get the best prices on cellphone contracts.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;