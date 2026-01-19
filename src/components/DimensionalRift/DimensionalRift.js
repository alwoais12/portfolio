import React, { Suspense, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import CosmicUniverse from './CosmicUniverse';
import RiftMask from './RiftMask';
import './DimensionalRift.css';

// Loading component
function LoadingScreen() {
  return (
    <div className="rift-loading">
      <div className="rift-loading-spinner" />
      <p>Opening dimensional rift...</p>
    </div>
  );
}

// Post-processing effects - clean and cinematic
function PostProcessing({ intensity = 1 }) {
  return (
    <EffectComposer>
      <Bloom
        intensity={0.8 + (intensity - 1) * 0.2}
        luminanceThreshold={0.4}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
      <Vignette
        offset={0.3}
        darkness={0.5}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  );
}

// Subtle floating particles around the rift edge
function EdgeParticles({ count = 15 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: 50 + (Math.random() - 0.5) * 30,
      y: 50 + (Math.random() - 0.5) * 40,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
      color: i % 3 === 0 ? '#00ffff' : i % 3 === 1 ? '#c770f0' : '#ffffff'
    }));
  }, [count]);

  return (
    <div className="edge-particles">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            background: particle.color,
            boxShadow: `0 0 6px ${particle.color}`
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

// Click ripple effect
function ClickRipple({ x, y, onComplete }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: 10,
        height: 10,
        borderRadius: '50%',
        border: '2px solid #00ffff',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none'
      }}
      initial={{ scale: 0, opacity: 1 }}
      animate={{ scale: 20, opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      onAnimationComplete={onComplete}
    />
  );
}

// Foreground particles being pulled into the rift - subtle dust motes
function ForegroundParticles({ count = 50, riftIntensity = 1 }) {
  const pointsRef = useRef();
  
  // Generate particle positions once
  const { positions, colors, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      // Spread particles in a wider area
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = Math.random() * 4 + 1;
      
      // Subtle color variation - mostly white with hints of purple/cyan
      const colorChoice = Math.random();
      if (colorChoice > 0.7) {
        colors[i * 3] = 0.0; colors[i * 3 + 1] = 1.0; colors[i * 3 + 2] = 1.0; // cyan
      } else if (colorChoice > 0.4) {
        colors[i * 3] = 0.78; colors[i * 3 + 1] = 0.44; colors[i * 3 + 2] = 0.94; // purple
      } else {
        colors[i * 3] = 1.0; colors[i * 3 + 1] = 1.0; colors[i * 3 + 2] = 1.0; // white
      }
      
      speeds[i] = Math.random() * 0.3 + 0.1;
    }
    
    return { positions, colors, speeds };
  }, [count]);
  
  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.elapsedTime;
    const posArray = pointsRef.current.geometry.attributes.position.array;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const speed = speeds[i];
      
      // Gentle drift toward center
      posArray[i3] *= 0.998;
      posArray[i3 + 1] *= 0.998;
      posArray[i3 + 2] -= speed * 0.02;
      
      // Add subtle floating motion
      posArray[i3] += Math.sin(time * speed + i) * 0.002;
      posArray[i3 + 1] += Math.cos(time * speed * 0.7 + i) * 0.002;
      
      // Reset when too close or behind camera
      const dist = Math.sqrt(posArray[i3] ** 2 + posArray[i3 + 1] ** 2);
      if (dist < 0.5 || posArray[i3 + 2] < -1) {
        posArray[i3] = (Math.random() - 0.5) * 12;
        posArray[i3 + 1] = (Math.random() - 0.5) * 10;
        posArray[i3 + 2] = Math.random() * 2 + 3;
      }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

// Throttle function for performance
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Detect mobile device for performance scaling
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobile;
}

// Main component
function DimensionalRift() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [isInView, setIsInView] = useState(false);
  const [riftIntensity, setRiftIntensity] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isMobile = useIsMobile();
  
  // Use ref to access scrollProgress in throttled handler without recreating it
  const scrollProgressRef = useRef(scrollProgress);
  useEffect(() => {
    scrollProgressRef.current = scrollProgress;
  }, [scrollProgress]);
  
  // Scale particle counts based on device capability
  const foregroundParticleCount = isMobile ? 20 : 40;

  // Track scroll position for rift expansion effect
  useEffect(() => {
    const handleScroll = throttle(() => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how centered the section is in viewport
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);
      const maxDistance = windowHeight / 2 + rect.height / 2;
      
      // Normalize: 1 when centered, 0 when far away
      const centeredness = 1 - Math.min(distanceFromCenter / maxDistance, 1);
      setScrollProgress(centeredness);
    }, 16);
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Throttled mouse position update for performance (16ms = ~60fps)
  // Uses ref for scrollProgress to avoid recreating throttle on every scroll change
  const handleMouseMove = useMemo(() => 
    throttle((e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      
      setMousePosition({ x, y });
      
      // Calculate mouse proximity to center for rift intensity
      const distToCenter = Math.sqrt(x * x + y * y);
      const proximityIntensity = Math.max(0, 1 - distToCenter * 0.5);
      
      // Combine scroll and proximity for total intensity (1 to 1.5 range)
      // Read from ref to get current scrollProgress without dependency
      const totalIntensity = 1 + (proximityIntensity * 0.3) + (scrollProgressRef.current * 0.2);
      setRiftIntensity(totalIntensity);
    }, 16),
  []); // Empty deps - throttle function is created once and persists

  // Handle click for ripple effect
  const handleClick = useCallback((e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y
    };
    
    setRipples(prev => [...prev, newRipple]);
  }, []);

  // Remove ripple after animation
  const removeRipple = useCallback((id) => {
    setRipples(prev => prev.filter(r => r.id !== id));
  }, []);

  // Intersection observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Simulate loading
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsLoaded(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section 
      ref={containerRef}
      className="dimensional-rift-section"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {/* Title */}
      <motion.div 
        className="rift-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1>ENTER THE <span className="purple">DIMENSION</span></h1>
        <p className="rift-subtitle">Where code becomes universe</p>
      </motion.div>

      {/* Main rift container */}
      <div className="rift-container">
        {/* Loading state */}
        <AnimatePresence>
          {!isLoaded && isInView && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LoadingScreen />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3D Canvas - only render when in view */}
        {isInView && (
          <motion.div 
            className="cosmic-canvas"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Canvas
              camera={{ position: [0, 0, 5], fov: 75 }}
              gl={{ 
                antialias: !isMobile, // Disable AA on mobile for performance
                alpha: true,
                powerPreference: "high-performance"
              }}
              dpr={isMobile ? [1, 1.5] : [1, 2]} // Lower DPR on mobile
            >
              <Suspense fallback={null}>
                {/* Background layer: Stars and nebula */}
                <CosmicUniverse mousePosition={mousePosition} riftIntensity={riftIntensity} isMobile={isMobile} />
                
                {/* Foreground layer: Particles pulled into the rift */}
                <ForegroundParticles count={foregroundParticleCount} riftIntensity={riftIntensity} />
                
                {/* Post-processing with intensity scaling */}
                <PostProcessing intensity={riftIntensity} />
              </Suspense>
            </Canvas>
          </motion.div>
        )}

        {/* Rift mask overlay - centered portal frame */}
        {isLoaded && (
          <motion.div 
            className="rift-mask"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.3,
              type: "spring",
              stiffness: 80,
              damping: 15
            }}
          >
            <RiftMask width={500} height={600} intensity={riftIntensity} />
          </motion.div>
        )}

        {/* Edge particles */}
        {isLoaded && <EdgeParticles count={20} />}

        {/* Click ripples */}
        {ripples.map(ripple => (
          <ClickRipple
            key={ripple.id}
            x={ripple.x}
            y={ripple.y}
            onComplete={() => removeRipple(ripple.id)}
          />
        ))}

        {/* Vignette overlay */}
        <div className="rift-vignette" />
      </div>

      {/* Instruction text */}
      {isLoaded && (
        <motion.p 
          className="rift-instruction"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Move your mouse to explore • Click to create ripples
        </motion.p>
      )}
    </section>
  );
}

export default DimensionalRift;
