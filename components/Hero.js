import { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import AnimatedBackground from './AnimatedBackground';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <Canvas camera={{ position: [0, 0, 2] }}>
          <ambientLight intensity={0.5} />
          <AnimatedBackground />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <motion.div 
          className="backdrop-blur-xl bg-white/7 border border-white/20 rounded-2xl shadow-2xl px-4 sm:px-8 md:px-12 py-8 md:py-10 max-w-2xl mx-auto flex flex-col items-center" // Lighter glass, border, more padding
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
        >
          <motion.h1 
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 md:mb-8 leading-tight text-white drop-shadow-lg" // Smaller, more spacing
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
          >
            Websites That Actually <span className="text-accent-DEFAULT">Sell</span>
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl mb-8 text-white/90 font-medium drop-shadow" // Smaller, more spacing
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.42, 0, 0.58, 1] }}
          >
            PixelRush delivers high-converting, <span className="text-accent-DEFAULT font-bold">mobile-first</span> websites in just <span className="text-primary-DEFAULT font-bold">3 days</span>. Ready to <span className="text-secondary-DEFAULT font-bold">elevate your brand?</span>
          </motion.p>
          <motion.button 
            className="bg-accent-DEFAULT text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-lg shadow-2xl hover:bg-accent-dark transition-all duration-300 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-opacity-75 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              boxShadow: "0px 10px 20px rgba(249, 115, 22, 0.4)"
            }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.42, 0, 0.58, 1] }}
          >
            <span className="relative z-10">Book Your <span className="underline decoration-white/60 decoration-2 underline-offset-2">Free Demo</span></span>
            {/* Animated shimmer overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/30 to-white/10 opacity-0 hover:opacity-60 transition-opacity duration-500 pointer-events-none" />
          </motion.button>
        </motion.div>
        {/* Animated scroll indicator - now below the card */}
        <motion.div
          className="mt-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="w-8 h-8 rounded-full border-2 border-accent-DEFAULT flex items-center justify-center animate-bounce">
            <svg className="w-4 h-4 text-accent-DEFAULT" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </div>
          <span className="mt-2 text-xs text-accent-DEFAULT font-semibold uppercase tracking-wider">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
} 