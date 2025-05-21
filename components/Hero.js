import { useRef, useEffect, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import AnimatedBackground from './AnimatedBackground';
import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { SplitText } from 'gsap/SplitText';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrambleTextPlugin, SplitText);
}

export default function Hero() {
  const scrambleTextRef = useRef(null);
  const buttonRef = useRef(null);
  const [isDecoded, setIsDecoded] = useState(false);
  const message = 'We craft websites that convert.';
  const scrambleChars = 'upperAndLowerCase';

  // Helper to handle Calendly interaction
  const handleCalendlyClick = () => {
    // Load Calendly CSS if not already present
    if (!document.getElementById('calendly-widget-css')) {
      const link = document.createElement('link');
      link.id = 'calendly-widget-css';
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    // Load Calendly script if not already present
    if (!window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({
            url: 'https://calendly.com/amplifyace/15'
          });
        }
      };
      document.body.appendChild(script);
    } else {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/amplifyace/15'
      });
    }
  };

  useEffect(() => {
    // Initialize scramble text
    if (scrambleTextRef.current) {
      gsap.set(scrambleTextRef.current, {
        scrambleText: {
          text: '*&@#$#@#$@*&$(@#^)',
          chars: scrambleChars,
          speed: 0.3,
        },
      });
    }

    // Initialize floating quotes
    const quotes = [
      'We turn traffic into trust',
      'Designs that sell',
      'Launch smarter, grow faster',
      'Clarity. Precision. Conversions.',
      'Every pixel with purpose'
    ];

    quotes.forEach((quote, index) => {
      const element = document.createElement('div');
      element.className = 'quote opacity-0';
      element.textContent = quote;
      document.body.appendChild(element);

      const getRandomPosition = () => ({
        x: Math.random() * (window.innerWidth - 200),
        y: Math.random() * (window.innerHeight - 100)
      });

      const scrambleQuote = () => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        const { x, y } = getRandomPosition();

        tl.set(element, { x, y })
          .to(element, {
            delay: Math.random() * 5,
            duration: 1,
            opacity: 1,
            scrambleText: { text: quote, chars: scrambleChars, revealDelay: 0.5, speed: 1 },
            ease: 'power2.out',
          })
          .to(element, {
            delay: 0.5,
            duration: 1,
            scrambleText: { text: '', chars: scrambleChars },
            opacity: 0,
            ease: 'power2.in',
          });
      };

      scrambleQuote();
    });

    // Cleanup
    return () => {
      document.querySelectorAll('.quote').forEach(el => el.remove());
    };
  }, []);

  const toggleScramble = () => {
    if (isDecoded) {
      // If already decoded, open Calendly
      handleCalendlyClick();
      return;
    }

    const text = message;
    const duration = 1.5;
    const speed = 1;

    gsap.to(scrambleTextRef.current, {
      duration,
      scrambleText: {
        text,
        chars: scrambleChars,
        revealDelay: 0.5,
        speed,
      },
    });

    setIsDecoded(true);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 2] }}>
          <ambientLight intensity={0.5} />
          <AnimatedBackground />
        </Canvas>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
        {/* Logo - Commented out for now
        <motion.a 
          href="https://www.linkedin.com/in/anas-frontdev/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute top-8 left-1/2 -translate-x-1/2 w-fit"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ duration: 0.25 }}
        >
          <img src="/assets/pixelrush-logo.png" className="w-14 h-auto mix-blend-difference" alt="Pixelrush logo" />
        </motion.a>
        */}

        {/* Main Content */}
        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
          {/* Headline */}
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white text-center leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Build Bold. Launch Loud. <br className="hidden md:block" /> Scale with Pixelrush.
          </motion.h1>

          {/* Scramble Text Box */}
          <motion.div 
            className="relative w-96 bg-white text-black border border-black shadow-lg shadow-white/30 hover:shadow-white/50 py-6 px-6 rounded-4xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center gap-4">
              <span ref={scrambleTextRef} className="select-none text-lg font-medium text-center flex-1">*&@#$#@#$@*&$(@#^)</span>
              <motion.button
                ref={buttonRef}
                type="button"
                className="w-12 h-12 border-2 border-zinc-600 bg-black hover:bg-black/85 duration-100 text-white rounded-full text-base focus:outline-green-500 cursor-pointer flex items-center justify-center"
                onClick={toggleScramble}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDecoded ? '→' : 'D'}
              </motion.button>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button 
            className="bg-accent-DEFAULT text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-lg shadow-2xl hover:bg-accent-dark transition-all duration-300 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-opacity-75 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCalendlyClick}
          >
            <span className="relative z-10">Book Your <span className="underline decoration-white/60 decoration-2 underline-offset-2">Free Demo</span></span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/30 to-white/10 opacity-0 hover:opacity-60 transition-opacity duration-500 pointer-events-none" />
          </motion.button>
        </div>
      </div>

      {/* Floating Quotes */}
      <style jsx global>{`
        .quote {
          position: absolute;
          opacity: 0;
          white-space: nowrap;
          pointer-events: none;
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.1);
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
          z-index: 1;
        }
      `}</style>
    </section>
  );
} 