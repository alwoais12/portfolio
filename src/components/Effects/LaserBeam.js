import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Laser() {
  const laserRef = useRef();
  const glowRef = useRef();

  const geometry = useMemo(() => {
    const geo = new THREE.CylinderGeometry(0.05, 0.05, 10, 32);
    return geo;
  }, []);

  useFrame((state) => {
    if (laserRef.current) {
      // Pulsing intensity
      const pulse = Math.sin(state.clock.elapsedTime * 3) * 0.5 + 0.5;
      laserRef.current.material.opacity = 0.7 + pulse * 0.3;
      
      // Slight movement
      laserRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }

    if (glowRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 3) * 0.3 + 0.7;
      glowRef.current.scale.x = 1 + pulse * 0.5;
      glowRef.current.scale.z = 1 + pulse * 0.5;
    }
  });

  return (
    <group>
      {/* Main laser beam */}
      <mesh ref={laserRef} geometry={geometry}>
        <meshBasicMaterial
          color="#00ffff"
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      {/* Glow effect */}
      <mesh ref={glowRef} geometry={geometry}>
        <meshBasicMaterial
          color="#00ffff"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function LaserBeam({ style = {} }) {
  return (
    <div style={{ width: '100%', height: '500px', ...style }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 5, 0]} intensity={2} color="#00ffff" />
        <pointLight position={[0, -5, 0]} intensity={2} color="#0088ff" />
        <Laser />
      </Canvas>
    </div>
  );
}

export default LaserBeam;

