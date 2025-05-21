import { Canvas } from '@react-three/fiber';
import AnimatedBackground from './AnimatedBackground';

export default function CTA3DBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <ambientLight intensity={0.5} />
      <AnimatedBackground color="#60A5FA" />
    </Canvas>
  );
} 