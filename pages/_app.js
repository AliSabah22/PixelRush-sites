// styles/globals.css is imported here for global application
import '../styles/globals.css';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Script from 'next/script';

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

// Custom hook to initialize Calendly
function useCalendly() {
  useEffect(() => {
    // Initialize Calendly inline widget
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/your-calendly-link',
        parentElement: document.getElementById('calendly-inline'),
        prefill: {},
        utm: {}
      });
    }
  }, []);
}

// Main App component
function MyApp({ Component, pageProps }) {
  // Initialize smooth scrolling
  useSmoothScroll();
  // Initialize Calendly
  useCalendly();

  return (
    <>
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="lazyOnload"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 