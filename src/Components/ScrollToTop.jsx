import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import UpArrow from '../svg/UpArrow.jsx';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (scrollY + viewportHeight >= totalHeight * 0.15) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0 }}
      animate={{ opacity: showButton ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        bottom: '3%',
        left: '6%',
        cursor: 'pointer',
        display: showButton ? 'block' : 'none',
        zIndex: "100"
      }}
    >
      <UpArrow />
    </motion.button>
  );
};

export default ScrollToTopButton;