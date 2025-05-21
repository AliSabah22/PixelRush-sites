'use client';

import { useRef, useEffect, useState } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Reusable 3D animated particle background
export default function AnimatedBackground({ color = '#888888', count = 5000 }) {
  const pointsRef = useRef();
  const [positions, setPositions] = useState();

  useEffect(() => {
    // Only run on client
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10;
    }
    setPositions(pos);
  }, [count]);

  // Animation logic for the points
  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += delta * 0.02;
      pointsRef.current.rotation.y += delta * 0.03;
      // Optionally add mouse tracking for interactivity
      // pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, (state.mouse.x * Math.PI) / 10, 0.01);
      // pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, (state.mouse.y * Math.PI) / 10, 0.01);
    }
  });

  // Don't render until positions are set (client only)
  if (!positions) return null;

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
} 