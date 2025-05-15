import { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Component for the 3D animated background
function AnimatedBackground() {
  const pointsRef = useRef();

  // Generate random positions for the points
  const count = 5000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10; // Distribute points in a 10x10x10 cube
    }
    return pos;
  }, [count]);

  // Animation logic for the points
  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += delta * 0.02;
      pointsRef.current.rotation.y += delta * 0.03;
      // Add subtle mouse tracking effect if desired
      // pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, (state.mouse.x * Math.PI) / 10, 0.01);
      // pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, (state.mouse.y * Math.PI) / 10, 0.01);
    }
  });

  return (
    // Points are generally more performant for large numbers of particles
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

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
      <motion.div 
        className="relative z-10 p-6 md:p-8 max-w-3xl mx-auto" // Added max-width for better text readability on large screens
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }} // Using a cubic bezier for smoother easing
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" // Responsive text sizes & tight leading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
        >
          Websites That Actually Sell
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-200" // Adjusted text size and color for better contrast
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.42, 0, 0.58, 1] }}
        >
          PixelRush delivers high-converting, mobile-first websites in just 3 days. Ready to elevate your brand?
        </motion.p>
        <motion.button 
          className="bg-accent-DEFAULT text-white font-semibold py-3 px-8 md:py-4 md:px-10 rounded-lg hover:bg-accent-dark transition-colors duration-300 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-opacity-75"
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
          Book Your Free Demo
        </motion.button>
      </motion.div>
    </section>
  );
} 