import { Canvas } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Individual particle component
function Particle({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialPosition = useMemo(() => [...position], [position]);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = initialPosition[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.position.x = initialPosition[0] + Math.cos(state.clock.elapsedTime * speed * 0.7) * 0.3;
      
      // Gentle rotation
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
}

// Main particles system
function ParticleSystem() {
  const particles = useMemo(() => {
    const temp = [];
    const colors = ['#DC143C', '#003893', '#FFFFFF']; // Crimson, Deep Blue, White
    
    for (let i = 0; i < 100; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20, // x
          (Math.random() - 0.5) * 15, // y  
          (Math.random() - 0.5) * 10, // z
        ] as [number, number, number],
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: 0.5 + Math.random() * 1.5,
      });
    }
    return temp;
  }, []);

  return (
    <>
      {particles.map((particle, index) => (
        <Particle
          key={index}
          position={particle.position}
          color={particle.color}
          speed={particle.speed}
        />
      ))}
    </>
  );
}

// Floating trails effect
function FloatingTrails() {
  const trailsRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (trailsRef.current) {
      trailsRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={trailsRef}>
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(i * 0.3) * 8,
            Math.sin(i * 0.2) * 4,
            Math.sin(i * 0.1) * 5
          ]}
        >
          <ringGeometry args={[0.1, 0.15, 16]} />
          <meshBasicMaterial 
            color={i % 2 === 0 ? '#DC143C' : '#003893'} 
            transparent 
            opacity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

// Main component
const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.3} />
        
        <ParticleSystem />
        <FloatingTrails />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;