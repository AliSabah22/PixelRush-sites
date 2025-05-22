'use client';

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
          const calendlyDiv = document.getElementById('calendly-inline');
          if (calendlyDiv) calendlyDiv.innerHTML = '';
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/amplifyace/15',
            parentElement: calendlyDiv,
            prefill: {},
            utm: {}
          });
        }
      };
      document.body.appendChild(script);
    } else {
      const calendlyDiv = document.getElementById('calendly-inline');
      if (calendlyDiv) calendlyDiv.innerHTML = '';
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/amplifyace/15',
        parentElement: calendlyDiv,
        prefill: {},
        utm: {}
      });
    }
    // Cleanup on unmount
    return () => {
      const calendlyDiv = document.getElementById('calendly-inline');
      if (calendlyDiv) calendlyDiv.innerHTML = '';
    };
  }, []);

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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Book a free 15-minute consultation to discuss your project and get a custom quote.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={handleCalendlyClick}
              className="btn-primary"
            >
              Schedule a Call
            </button>
            <a href="#portfolio" className="btn-secondary">
              View Our Work
            </a>
          </motion.div>

          <div id="calendly-inline" className="mt-12 h-[600px]"></div>
        </motion.div>
      </div>
    </section>
  );
} 