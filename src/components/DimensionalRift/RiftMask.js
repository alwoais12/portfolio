import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

// Generate points for an irregular organic tear shape
function generateRiftPath(width, height, irregularity = 0.3) {
  const points = [];
  const numPoints = 20;
  const centerX = width / 2;
  const centerY = height / 2;
  
  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * Math.PI * 2;
    
    // Base ellipse
    const baseRadiusX = width * 0.35;
    const baseRadiusY = height * 0.45;
    
    // Add organic irregularity
    const noise = Math.sin(angle * 3) * irregularity + 
                  Math.cos(angle * 5) * irregularity * 0.5 +
                  Math.sin(angle * 7) * irregularity * 0.3;
    
    const radiusX = baseRadiusX * (1 + noise);
    const radiusY = baseRadiusY * (1 + noise * 0.7);
    
    const x = centerX + Math.cos(angle) * radiusX;
    const y = centerY + Math.sin(angle) * radiusY;
    
    points.push({ x, y });
  }
  
  return points;
}

// Convert points to SVG path with smooth curves
function pointsToPath(points) {
  if (points.length < 3) return '';
  
  let path = `M ${points[0].x} ${points[0].y}`;
  
  for (let i = 0; i < points.length; i++) {
    const p0 = points[(i - 1 + points.length) % points.length];
    const p1 = points[i];
    const p2 = points[(i + 1) % points.length];
    const p3 = points[(i + 2) % points.length];
    
    // Catmull-Rom to Bezier conversion
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    
    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  
  path += ' Z';
  return path;
}

// Subtle energy tendril component - cleaner than electric sparks
function EnergyTendril({ startX, startY, endX, endY, delay }) {
  const pathD = useMemo(() => {
    // Smooth curved path instead of jagged lightning
    const midX = (startX + endX) / 2 + (Math.random() - 0.5) * 15;
    const midY = (startY + endY) / 2 + (Math.random() - 0.5) * 15;
    return `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;
  }, [startX, startY, endX, endY]);

  return (
    <motion.path
      d={pathD}
      stroke="url(#sparkGradient)"
      strokeWidth="1"
      fill="none"
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ 
        opacity: [0, 0.6, 0],
        pathLength: [0, 1, 1]
      }}
      transition={{
        duration: 1.5,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 2 + Math.random() * 2,
        ease: "easeInOut"
      }}
      style={{
        filter: 'drop-shadow(0 0 3px #00ffff)'
      }}
    />
  );
}

// Main rift mask component
function RiftMask({ width = 600, height = 700, intensity = 1 }) {
  const svgRef = useRef();
  const [sparks, setSparks] = useState([]);
  
  // Generate the organic rift shape - memoized
  const riftPoints = useMemo(() => generateRiftPath(width, height, 0.25), [width, height]);
  const riftPath = useMemo(() => pointsToPath(riftPoints), [riftPoints]);
  
  // Generate subtle tendrils around the edge
  useEffect(() => {
    const newSparks = [];
    const numSparks = 6;
    
    for (let i = 0; i < numSparks; i++) {
      const pointIndex = Math.floor((i / numSparks) * riftPoints.length);
      const point = riftPoints[pointIndex];
      
      // Calculate outward direction
      const centerX = width / 2;
      const centerY = height / 2;
      const angle = Math.atan2(point.y - centerY, point.x - centerX);
      
      const sparkLength = 15 + Math.random() * 20; // Shorter tendrils
      
      newSparks.push({
        id: i,
        startX: point.x,
        startY: point.y,
        endX: point.x + Math.cos(angle) * sparkLength,
        endY: point.y + Math.sin(angle) * sparkLength,
        delay: i * 0.5
      });
    }
    
    setSparks(newSparks);
  }, [width, height, riftPoints]);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${width} ${height}`}
      className="rift-mask-svg"
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
      }}
    >
      <defs>
        {/* Gradient for the rift edge */}
        <linearGradient id="riftGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c770f0" />
          <stop offset="50%" stopColor="#00ffff" />
          <stop offset="100%" stopColor="#c770f0" />
        </linearGradient>
        
        {/* Gradient for sparks */}
        <linearGradient id="sparkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00ffff" />
          <stop offset="100%" stopColor="#c770f0" stopOpacity="0" />
        </linearGradient>
        
        {/* Simplified glow filter */}
        <filter id="riftGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        {/* Clip path for the portal */}
        <clipPath id="riftClip">
          <path d={riftPath} />
        </clipPath>
      </defs>
      
      {/* Soft outer glow */}
      <motion.path
        d={riftPath}
        fill="none"
        stroke="url(#riftGradient)"
        strokeWidth={20}
        filter="url(#riftGlow)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Main edge line */}
      <motion.path
        d={riftPath}
        fill="none"
        stroke="#c770f0"
        strokeWidth="3"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          filter: 'drop-shadow(0 0 4px #c770f0)'
        }}
      />
      
      {/* Inner bright edge */}
      <path
        d={riftPath}
        fill="none"
        stroke="#ffffff"
        strokeWidth="1"
        style={{
          filter: 'drop-shadow(0 0 3px #ffffff)',
          opacity: 0.8
        }}
      />
      
      {/* Subtle energy tendrils - only a few */}
      {sparks.slice(0, 4).map(spark => (
        <EnergyTendril
          key={spark.id}
          startX={spark.startX}
          startY={spark.startY}
          endX={spark.endX}
          endY={spark.endY}
          delay={spark.delay}
        />
      ))}
    </svg>
  );
}

export default RiftMask;
