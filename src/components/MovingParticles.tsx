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
      <sphereGeometry args={[0.03, 12, 12]} />
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

// Connecting lines between particles
function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 6;
      lines.push({
        start: [Math.cos(angle) * radius, Math.sin(angle) * 3, 0],
        end: [Math.cos(angle + 0.5) * radius, Math.sin(angle + 0.5) * 3, 0]
      });
    }
    return lines;
  }, []);

  return (
    <group ref={linesRef}>
      {connections.map((line, index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([...line.start, ...line.end])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#FFFFFF" transparent opacity={0.1} />
        </line>
      ))}
    </group>
  );
}

// Main floating particles system
function FloatingParticleSystem() {
  // Generate Nepali red particles (activism theme)
  const nepaliParticles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 40; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 20,
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
    for (let i = 0; i < 30; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
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
      <ConnectionLines />
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