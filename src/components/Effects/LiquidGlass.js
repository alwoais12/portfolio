import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshTransmissionMaterial } from '@react-three/drei';

function GlassSphere() {
  const sphereRef = useRef();

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      
      // Floating effect
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1.5, 64, 64]}>
      <MeshTransmissionMaterial
        backside
        samples={16}
        resolution={512}
        transmission={1}
        roughness={0.1}
        thickness={1}
        ior={1.5}
        chromaticAberration={0.5}
        anisotropy={1}
        distortion={0.3}
        distortionScale={0.5}
        temporalDistortion={0.1}
        color="#c770f0"
      />
    </Sphere>
  );
}

function LiquidGlass({ style = {} }) {
  return (
    <div style={{ width: '100%', height: '400px', ...style }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#c770f0" />
        <GlassSphere />
      </Canvas>
    </div>
  );
}

export default LiquidGlass;

