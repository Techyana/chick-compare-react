import React, { useEffect } from 'react';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  useEffect(() => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      video.play().catch(error => {
        console.error('Error attempting to play', error);
      });
    }
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden mt-10">
      <video
        id="hero-video"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-contain z-0"
      >
        <source src="/assets/videos/205691-927672681_small.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.getQuote}>
        <img src="/assets/images/get_a_quote_silver_badge_transparency.png" alt="Get a Quote" width="100" />
      </div>
      <div className={styles.eyesImg}>
        <img src="/assets/images/cartoon-eyes.png" alt="Eyes" width="150" />
      </div>
      <div className={styles.heroText}>
        <h2 className={`text-slate-900 text-4xl font-bold mb-4 ${styles.textMargin}`}>Compare Insurance and Financial Products Easily</h2>
        <p className="text-slate-900 text-lg italic">Find the best deals from top South African companies</p>
      </div>
      <button className={`bg-sky-600 text-white text-lg font-bold py-2 px-4 rounded-lg mt-4 ${styles.getStarted}`}>
        Get Started

      </button>
    </section>
  );
};

export default Hero;