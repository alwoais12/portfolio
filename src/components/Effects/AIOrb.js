import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

function AnimatedOrb() {
  const orbRef = useRef();
  const materialRef = useRef();

  useFrame((state) => {
    if (orbRef.current) {
      // Continuous rotation
      orbRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      orbRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      
      // Pulsing effect
      const pulse = Math.sin(state.clock.elapsedTime * 1.5) * 0.1 + 1;
      orbRef.current.scale.setScalar(pulse);
    }

    if (materialRef.current) {
      // Animate distortion
      materialRef.current.distort = 0.4 + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Sphere ref={orbRef} args={[1, 64, 64]}>
      <MeshDistortMaterial
        ref={materialRef}
        color="#c770f0"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        emissive="#c770f0"
        emissiveIntensity={0.5}
      />
    </Sphere>
  );
}

function AIOrb({ style = {} }) {
  return (
    <div style={{ width: '100%', height: '400px', ...style }}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#cd5ff8" />
        <pointLight position={[0, 0, 5]} intensity={1} color="#7f00ff" />
        <AnimatedOrb />
      </Canvas>
    </div>
  );
}

export default AIOrb;

