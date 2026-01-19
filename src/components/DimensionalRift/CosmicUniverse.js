import React, { useRef, useMemo, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Clean glowing orbs floating in the universe
const SkillOrb = memo(function SkillOrb({ position, color, delay = 0 }) {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle pulsing
      const pulse = Math.sin(state.clock.elapsedTime * 1.5 + delay) * 0.15 + 1;
      groupRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <Float
      speed={1}
      rotationIntensity={0.2}
      floatIntensity={1}
      floatingRange={[-0.15, 0.15]}
    >
      <group ref={groupRef} position={position}>
        {/* Core orb */}
        <Sphere args={[0.15, 16, 16]}>
          <meshBasicMaterial color={color} transparent opacity={0.9} />
        </Sphere>
        {/* Soft glow */}
        <Sphere args={[0.22, 16, 16]}>
          <meshBasicMaterial 
            color={color} 
            transparent 
            opacity={0.3}
            blending={THREE.AdditiveBlending}
          />
        </Sphere>
        <pointLight color={color} intensity={0.5} distance={2} />
      </group>
    </Float>
  );
});

// Nebula cloud effect using particles - memoized for performance
const NebulaCloud = memo(function NebulaCloud({ count = 500, color, position, size = 3 }) {
  const points = useRef();
  
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const colorObj = new THREE.Color(color);
    
    for (let i = 0; i < count; i++) {
      // Spherical distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.random() * size;
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      
      // Vary color intensity
      const intensity = 0.5 + Math.random() * 0.5;
      colors[i * 3] = colorObj.r * intensity;
      colors[i * 3 + 1] = colorObj.g * intensity;
      colors[i * 3 + 2] = colorObj.b * intensity;
    }
    
    return { positions, colors };
  }, [count, color, size]);
  
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05;
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={points} position={position}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlePositions.positions.length / 3}
          array={particlePositions.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlePositions.colors.length / 3}
          array={particlePositions.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
});

// Swirling particles being pulled toward center - optimized for performance
const VortexParticles = memo(function VortexParticles({ count = 400 }) {
  const points = useRef();
  
  const particleData = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      // Random position in a torus shape
      const angle = Math.random() * Math.PI * 2;
      const radius = 2 + Math.random() * 4;
      const height = (Math.random() - 0.5) * 3;
      
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
      
      // Store initial angle for spiral motion
      velocities[i * 3] = angle;
      velocities[i * 3 + 1] = radius;
      velocities[i * 3 + 2] = Math.random() * 0.5 + 0.5; // speed multiplier
      
      sizes[i] = Math.random() * 0.05 + 0.02;
    }
    
    return { positions, velocities, sizes };
  }, [count]);
  
  useFrame((state) => {
    if (!points.current) return;
    
    const positions = points.current.geometry.attributes.position.array;
    const time = state.clock.elapsedTime;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const initialAngle = particleData.velocities[i3];
      const initialRadius = particleData.velocities[i3 + 1];
      const speed = particleData.velocities[i3 + 2];
      
      // Spiral inward motion
      const currentAngle = initialAngle + time * speed * 0.5;
      const radiusMod = Math.sin(time * speed + i) * 0.5;
      const currentRadius = initialRadius + radiusMod;
      
      positions[i3] = Math.cos(currentAngle) * currentRadius;
      positions[i3 + 2] = Math.sin(currentAngle) * currentRadius;
      
      // Vertical wave
      positions[i3 + 1] = particleData.positions[i3 + 1] + Math.sin(time * 2 + i * 0.1) * 0.3;
    }
    
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particleData.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#88ddff"
        transparent
        opacity={0.5}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
});

// Central energy core - clean and elegant
const EnergyCore = memo(function EnergyCore() {
  const coreRef = useRef();
  const ringRef = useRef();
  
  useFrame((state) => {
    if (coreRef.current) {
      // Slow, smooth pulsing
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 1;
      coreRef.current.scale.setScalar(pulse);
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group>
      {/* Core sphere - bright center */}
      <Sphere ref={coreRef} args={[0.4, 24, 24]}>
        <meshBasicMaterial color="#ffffff" transparent opacity={0.85} />
      </Sphere>
      
      {/* Soft inner glow */}
      <Sphere args={[0.55, 24, 24]}>
        <meshBasicMaterial 
          color="#e8d5f5" 
          transparent 
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
      
      {/* Energy ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1, 0.02, 16, 64]} />
        <meshBasicMaterial color="#c770f0" transparent opacity={0.6} />
      </mesh>
      
      {/* Core light - reduced intensity */}
      <pointLight color="#ffffff" intensity={1.5} distance={8} />
      <pointLight color="#c770f0" intensity={0.8} distance={10} />
    </group>
  );
});

// Main cosmic universe component
function CosmicUniverse({ mousePosition, riftIntensity = 1, isMobile = false }) {
  const groupRef = useRef();
  
  // Mouse-reactive camera movement with intensity-based responsiveness
  useFrame(() => {
    if (groupRef.current && mousePosition) {
      // Smooth parallax based on mouse position, scaled by rift intensity
      const intensityMod = 0.7 + riftIntensity * 0.3;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePosition.x * 0.3 * intensityMod,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mousePosition.y * 0.2 * intensityMod,
        0.05
      );
    }
  });

  // Skill orbs configuration - reduced on mobile
  const skills = isMobile ? [
    { label: 'React', color: '#61dafb', position: [2, 1, -1] },
    { label: 'Node.js', color: '#68a063', position: [-2, 0.5, -1.5] },
    { label: 'AI/ML', color: '#ff6b6b', position: [-0.5, -1.5, -1.5] },
  ] : [
    { label: 'React', color: '#61dafb', position: [2, 1, -1] },
    { label: 'Node.js', color: '#68a063', position: [-2, 0.5, -1.5] },
    { label: 'Python', color: '#ffd43b', position: [1.5, -1, -2] },
    { label: 'TypeScript', color: '#3178c6', position: [-1.5, -0.5, -1] },
    { label: 'Three.js', color: '#ffffff', position: [0, 1.5, -2] },
    { label: 'AI/ML', color: '#ff6b6b', position: [-0.5, -1.5, -1.5] },
  ];

  // Performance-scaled particle counts
  const starCount = isMobile ? 1000 : 2000;
  const nebulaCount1 = isMobile ? 120 : 250;
  const nebulaCount2 = isMobile ? 100 : 200;
  const vortexCount = isMobile ? 150 : 350;

  return (
    <group ref={groupRef}>
      {/* Deep space star field - optimized count for performance */}
      <Stars
        radius={50}
        depth={50}
        count={starCount}
        factor={4}
        saturation={0.5}
        fade
        speed={0.5}
      />
      
      {/* Nebula clouds - reduced particle counts for mobile */}
      <NebulaCloud color="#c770f0" position={[3, 2, -5]} size={4} count={nebulaCount1} />
      <NebulaCloud color="#00ffff" position={[-4, -1, -6]} size={3} count={nebulaCount2} />
      {!isMobile && <NebulaCloud color="#ff6b9d" position={[0, -3, -8]} size={5} count={nebulaCount2} />}
      
      {/* Vortex particles swirling toward center - performance optimized */}
      <VortexParticles count={vortexCount} />
      
      {/* Central energy core */}
      <EnergyCore />
      
      {/* Skill orbs - clean floating spheres */}
      {skills.map((skill, index) => (
        <SkillOrb
          key={skill.label}
          position={skill.position}
          color={skill.color}
          delay={index * 0.8}
        />
      ))}
      
      {/* Ambient lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#c770f0" />
      {!isMobile && <pointLight position={[-10, -10, -10]} intensity={0.3} color="#00ffff" />}
    </group>
  );
}

export default CosmicUniverse;
