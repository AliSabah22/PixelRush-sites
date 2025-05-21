import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import { Canvas } from '@react-three/fiber';
import { useEffect } from 'react';
import ScrollAnimation from './ScrollAnimation';

// Call to Action Section Component
export default function CTA() {
  // Load Calendly script
  useEffect(() => {
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
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/amplifyace/15',
            parentElement: document.getElementById('calendly-inline'),
            prefill: {},
            utm: {}
          });
        }
      };
      document.body.appendChild(script);
    } else {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/amplifyace/15',
        parentElement: document.getElementById('calendly-inline'),
        prefill: {},
        utm: {}
      });
    }
  }, []);

  // Animation variants for Framer Motion
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, 
        ease: [0.42, 0, 0.58, 1] // Smooth cubic bezier easing
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2, // Slight delay after headline
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1]
      }
    }
  };

  const handleCalendlyClick = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/amplifyace/15'
      });
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 2] }}>
          <ambientLight intensity={0.5} />
          <AnimatedBackground color="#60A5FA" />
        </Canvas>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="w-full max-w-4xl backdrop-blur-xl bg-white/7 border border-white/20 rounded-2xl shadow-2xl px-6 md:px-16 py-16 flex flex-col items-center"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 md:mb-10 leading-tight text-white text-center drop-shadow-xl">
            Get Your <span className="text-accent-DEFAULT drop-shadow">High-Converting</span> Website in <span className="text-accent-DEFAULT drop-shadow">3 Days</span>
          </h2>
          <p className="text-lg md:text-2xl text-white font-semibold mb-10 max-w-2xl mx-auto text-center drop-shadow">
            Book a <span className="font-bold text-accent-DEFAULT">free, no-pressure demo</span> and see how <span className="font-bold text-primary-DEFAULT">PixelRush</span> can transform your business.
          </p>
          {/* Features Row */}
          <div className="flex flex-col sm:flex-row gap-10 mb-12 w-full justify-center items-center">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-DEFAULT text-white"><svg xmlns='http://www.w3.org/2000/svg' className='w-8 h-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m4 0V7a4 4 0 10-8 0v5a4 4 0 008 0z' /></svg></span>
              <span className="text-white font-bold text-lg">Conversion-Optimized</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-DEFAULT text-white"><svg xmlns='http://www.w3.org/2000/svg' className='w-8 h-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' /></svg></span>
              <span className="text-white font-bold text-lg">3-Day Delivery</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-DEFAULT text-white"><svg xmlns='http://www.w3.org/2000/svg' className='w-8 h-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2M12 15v-6m0 0l-3 3m3-3l3 3' /></svg></span>
              <span className="text-white font-bold text-lg">Mobile-First</span>
            </div>
          </div>
          {/* CTA Button */}
          <motion.button 
            className="bg-primary-DEFAULT text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:bg-primary-dark transition-all duration-300 text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT focus:ring-opacity-70 relative overflow-hidden mt-2 flex items-center gap-3"
            style={{ boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.35)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            onClick={handleCalendlyClick}
          >
            <span className="relative z-10">Book Your <span className="underline decoration-white/80 decoration-2 underline-offset-2">Free Demo</span></span>
            <svg className="w-6 h-6 text-white/80 z-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            {/* Glowing blue border */}
            <span className="absolute inset-0 rounded-xl pointer-events-none" style={{ boxShadow: '0 0 32px 0 rgba(59, 130, 246, 0.35)' }} />
          </motion.button>
          {/* Calendly Inline Widget */}
          <div
            className="calendly-inline-widget mt-8 w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg"
            data-url="https://calendly.com/amplifyace/15"
            style={{ minWidth: 320, height: 700 }}
            id="calendly-inline"
          ></div>
          {/* Trust Row */}
          <div className="flex flex-col items-center mt-10">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-accent-DEFAULT" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 .5l2.939 5.455 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
              ))}
            </div>
            <span className="text-xs text-white/70">5.0/5.0 from business owners like you</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 