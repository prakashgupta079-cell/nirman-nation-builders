import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Animated Nepal flag colors particles
function NepaliParticle({ position, delay }: { position: [number, number, number], delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime + delay;
      
      // Organic floating motion
      meshRef.current.position.y = position[1] + Math.sin(time * 0.8) * 1.2;
      meshRef.current.position.x = position[0] + Math.cos(time * 0.6) * 0.8;
      meshRef.current.position.z = position[2] + Math.sin(time * 0.4) * 0.5;
      
      // Gentle pulsing
      const scale = 0.8 + Math.sin(time * 2) * 0.3;
      meshRef.current.scale.setScalar(scale);
      
      // Subtle rotation
      meshRef.current.rotation.z = time * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshBasicMaterial 
        color="#DC143C" 
        transparent 
        opacity={0.7}
      />
    </mesh>
  );
}

// Blue governance particles
function GovernanceParticle({ position, delay }: { position: [number, number, number], delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime + delay;
      
      // Slower, more stable movement
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.8;
      meshRef.current.position.x = position[0] + Math.cos(time * 0.3) * 0.6;
      
      // Gentle scaling
      const scale = 0.6 + Math.sin(time * 1.5) * 0.2;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.025]} />
      <meshBasicMaterial 
        color="#003893" 
        transparent 
        opacity={0.6}
      />
    </mesh>
  );
}

// Simple floating rings for visual interest
function FloatingRings() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.08) * 0.02;
    }
  });

  const rings = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const radius = 8;
      temp.push({
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle) * 3,
          Math.sin(i * 0.5) * 2
        ] as [number, number, number],
        color: i % 2 === 0 ? '#DC143C' : '#003893',
        scale: 0.5 + Math.random() * 0.5
      });
    }
    return temp;
  }, []);

  return (
    <group ref={groupRef}>
      {rings.map((ring, index) => (
        <mesh key={index} position={ring.position} scale={ring.scale}>
          <ringGeometry args={[0.1, 0.15, 16]} />
          <meshBasicMaterial 
            color={ring.color} 
            transparent 
            opacity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

// Main floating particles system
function FloatingParticleSystem() {
  // Generate Nepali red particles (activism theme)
  const nepaliParticles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 30; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 8,
        ] as [number, number, number],
        delay: Math.random() * 10,
      });
    }
    return temp;
  }, []);

  // Generate blue governance particles
  const governanceParticles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 20; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 6,
        ] as [number, number, number],
        delay: Math.random() * 10,
      });
    }
    return temp;
  }, []);

  return (
    <>
      {nepaliParticles.map((particle, index) => (
        <NepaliParticle
          key={`nepali-${index}`}
          position={particle.position}
          delay={particle.delay}
        />
      ))}
      {governanceParticles.map((particle, index) => (
        <GovernanceParticle
          key={`governance-${index}`}
          position={particle.position}
          delay={particle.delay}
        />
      ))}
      <FloatingRings />
    </>
  );
}

// Subtle background particle system for the entire site
const MovingParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 opacity-80">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <FloatingParticleSystem />
      </Canvas>
    </div>
  );
};

export default MovingParticles;