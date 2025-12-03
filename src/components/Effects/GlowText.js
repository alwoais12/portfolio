import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedGlowText({ text, ...props }) {
  const textRef = useRef();
  const materialRef = useRef();

  useFrame((state) => {
    if (textRef.current) {
      // Pulsing glow effect
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.5 + 0.5;
      textRef.current.scale.setScalar(1 + pulse * 0.05);
      
      // Rotate slightly
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Text
      ref={textRef}
      fontSize={2}
      maxWidth={200}
      lineHeight={1}
      letterSpacing={0.02}
      textAlign="center"
      font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      anchorX="center"
      anchorY="middle"
      {...props}
    >
      {text}
      <meshStandardMaterial
        ref={materialRef}
        color="#c770f0"
        emissive="#c770f0"
        emissiveIntensity={2}
        toneMapped={false}
      />
    </Text>
  );
}

function GlowText({ text = "AHMED", style = {} }) {
  return (
    <div style={{ width: '100%', height: '300px', ...style }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
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
        <AnimatedGlowText text={text} />
      </Canvas>
    </div>
  );
}

export default GlowText;

