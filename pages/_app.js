// styles/globals.css is imported here for global application
import '../styles/globals.css';
import { useEffect } from 'react';
import Lenis from 'lenis';

// Custom hook to manage Lenis smooth scrolling
function useSmoothScroll() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Speed of the scroll animation
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // Consider true for touch devices if desired, but test thoroughly
      touchMultiplier: 2,
      infinite: false,
    });

    // RAF (Request Animation Frame) function to update Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up Lenis instance on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);
}

// Main App component
function MyApp({ Component, pageProps }) {
  // Initialize smooth scrolling
  useSmoothScroll();

  return <Component {...pageProps} />;
}

export default MyApp; 