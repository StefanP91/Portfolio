import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import styles from './Welcome.module.css';

const Welcome = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 10000); // Show welcome screen for 10 seconds

    // Animate progress bar
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) return prev + 1;
        return prev;
      });
    }, 100); // Adjusted to complete in 10 seconds

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className={styles.welcomeContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={styles.welcomeLogo}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Welcome to My Portfolio</h1>
      </motion.div>

      <motion.div 
        className={styles.welcomeMessage}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <TypeAnimation
          sequence={[
            'Designing impactful experiences',
            1000,
            'Building robust solutions',
            1000,
            'Creating digital excellence',
            1000
          ]}
          speed={50}
          repeat={Infinity}
          style={{ fontSize: '1.5em' }}
          className="typewriter-text"
        />
      </motion.div>

      <div className={styles.progressContainer}>
        <div 
          className={styles.progressBar} 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </motion.div>
  );
};

export default Welcome;