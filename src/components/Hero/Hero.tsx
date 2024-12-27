import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';

const images = [
  {
    src: '/assets/images/new-car-owner-noBG.png',
    logo: '/assets/logos/santam-insurance-logo.png',
    heading: 'Secure Your Vehicle',
    link: '/car-insurance'
  },
  {
    src: '/assets/images/OIGtren.png',
    logo: '/assets/logos/afrihost-logo.png',
    heading: 'Get the Best Internet Deals',
    link: '/fibre-deals'
  },
  {
    src: '/assets/images/Health-Check_NoBG.png',
    logo: '/assets/logos/bonitas-logo.png',
    heading: 'Your Health Matters',
    link: '/health-insurance'
  },
  {
    src: '/assets/images/guy-at-gym.png',
    logo: '/assets/logos/virgin-active-logo-header.png',
    heading: 'Gym Membership Deals',
    link: '/gym-membership'
  },
  {
    src: '/assets/images/lady-search-1.png',
    logo: '/assets/logos/Vodacom-Logo.png',
    heading: 'Get the Best Phone Deals',
    link: '/phone-deals'
  },
  {
    src: '/assets/images/CC-Lady-00.png',
    logo: '/assets/logos/OLD_MUTUAL.png',
    heading: 'Plan for the Future',
    link: '/funeral-cover'
  },
  {
    src: '/assets/images/OIG (7.png',
    logo: '/assets/logos/sanlam-logo.svg',
    heading: 'Grow Your Wealth',
    link: '/investment-tool'
  }
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.hero}>
      <AnimatePresence>
        {images.map((image, index) => (
          index === currentImage && (
            <motion.div
              key={index}
              className={styles.heroImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <img src={image.src} alt={image.heading} className={styles.heroImage} />
              <img src={image.logo} alt="Company Logo" className={styles.heroLogo} />
              <div className={styles.heroContent}>
                <motion.h3
                  className={styles.heroText}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, delay: 1 }}
                >
                  {image.heading}
                </motion.h3>
                <Link to={image.link} className={styles.heroButton}>Find Out More</Link>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
      <div className={styles.gradientOverlay}></div>
    </div>
  );
};

export default Hero;