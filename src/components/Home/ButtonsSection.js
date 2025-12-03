import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

// 1. Magnetic Pulse Button
const MagneticButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, boxShadow: "0 0 25px #c770f0" }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      style={{
        background: "transparent",
        border: "2px solid #c770f0",
        color: "#c770f0",
        padding: "15px 30px",
        borderRadius: "30px",
        fontSize: "1.1em",
        cursor: "pointer"
      }}
    >
      Magnetic Pulse
    </motion.button>
  );
};

// 2. Spotlight Button
const SpotlightButton = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'relative',
        background: "#1a1a1a",
        border: "1px solid rgba(255,255,255,0.1)",
        color: "white",
        padding: "15px 30px",
        borderRadius: "8px",
        fontSize: "1.1em",
        cursor: "pointer",
        overflow: "hidden"
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          background: useMotionTemplate`radial-gradient(150px circle at ${mouseX}px ${mouseY}px, rgba(199, 112, 240, 0.4), transparent 80%)`,
          top: 0, left: 0, right: 0, bottom: 0,
          pointerEvents: 'none'
        }}
      />
      Spotlight Reveal
    </motion.button>
  );
};

// 3. 3D Flip Button
const FlipButton = () => {
  return (
    <motion.div
      style={{ perspective: 1000, cursor: 'pointer' }}
      whileHover="hover"
      whileTap="tap"
    >
      <motion.button
        variants={{
          hover: { rotateX: 360, transition: { duration: 0.6 } },
          tap: { scale: 0.9 }
        }}
        style={{
          background: "linear-gradient(45deg, #ff00cc, #333399)",
          border: "none",
          color: "white",
          padding: "15px 30px",
          borderRadius: "5px",
          fontSize: "1.1em",
        }}
      >
        360° Flip
      </motion.button>
    </motion.div>
  );
};

// 4. Neumorphic Button
const NeumorphicButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ 
        scale: 0.95,
        boxShadow: "inset 5px 5px 10px #0e0e0e, inset -5px -5px 10px #2a2a2a"
      }}
      style={{
        background: "#1c1c1c",
        border: "none",
        color: "white",
        padding: "15px 30px",
        borderRadius: "15px",
        fontSize: "1.1em",
        cursor: "pointer",
        boxShadow: "5px 5px 10px #0e0e0e, -5px -5px 10px #2a2a2a"
      }}
    >
      Neumorphic
    </motion.button>
  );
};

// 5. Glitch Text Button
const GlitchButton = () => {
  const [isHovered, setHovered] = useState(false);
  
  return (
    <motion.button
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileTap={{ scale: 0.9 }}
      style={{
        background: "#fcee0a",
        color: "black",
        border: "none",
        padding: "15px 30px",
        borderRadius: "0px",
        fontSize: "1.1em",
        fontWeight: "bold",
        cursor: "pointer",
        clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
        position: "relative"
      }}
    >
      <span style={{ position: 'relative', display: 'inline-block' }}>
        Glitch Effect
        {isHovered && (
          <>
            <motion.span 
              style={{ position: 'absolute', top: 0, left: -2, color: 'red', opacity: 0.7, clipPath: 'inset(0 0 50% 0)' }}
              animate={{ x: [-2, 2, -1, 0], y: [1, -1, 0] }}
              transition={{ repeat: Infinity, duration: 0.2 }}
            >
              Glitch Effect
            </motion.span>
            <motion.span 
              style={{ position: 'absolute', top: 0, left: 2, color: 'blue', opacity: 0.7, clipPath: 'inset(50% 0 0 0)' }}
              animate={{ x: [2, -2, 1, 0], y: [-1, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.2 }}
            >
              Glitch Effect
            </motion.span>
          </>
        )}
      </span>
    </motion.button>
  );
};

// 6. Liquid Fill Button
const LiquidButton = () => {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      style={{
        background: "transparent",
        border: "2px solid white",
        color: "white",
        padding: "15px 30px",
        borderRadius: "30px",
        fontSize: "1.1em",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        zIndex: 1
      }}
    >
      <motion.div
        variants={{
          rest: { y: "100%" },
          hover: { y: "0%" },
          tap: { scale: 1.5 }
        }}
        transition={{ type: "tween", duration: 0.3 }}
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "#c770f0",
          zIndex: -1,
          borderRadius: "25px" // Match parent border radius inside
        }}
      />
      <motion.span
        variants={{
          hover: { color: "white" },
          tap: { scale: 0.9 }
        }}
      >
        Liquid Fill
      </motion.span>
    </motion.button>
  );
};

// 7. Neon Flicker Button
const NeonButton = () => {
  return (
    <motion.button
      whileHover={{ 
        textShadow: [
          "0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa, 0 0 80px #0fa, 0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa",
          "none",
          "0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa, 0 0 80px #0fa, 0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa"
        ],
        opacity: [1, 0.5, 1] 
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
      style={{
        background: "transparent",
        border: "2px solid #0fa",
        color: "#0fa",
        padding: "15px 30px",
        fontSize: "1.1em",
        cursor: "pointer",
        fontFamily: "monospace",
        boxShadow: "0 0 10px #0fa, inset 0 0 10px #0fa",
        textShadow: "0 0 5px #0fa"
      }}
    >
      Neon Flicker
    </motion.button>
  );
};

// 8. Elastic Scale Button
const ElasticButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 500, damping: 10 }}
      style={{
        background: "white",
        color: "#c770f0",
        border: "none",
        padding: "15px 30px",
        borderRadius: "8px",
        fontSize: "1.1em",
        fontWeight: "bold",
        cursor: "pointer"
      }}
    >
      Elastic Bounce
    </motion.button>
  );
};

function ButtonsSection() {
  return (
    <Container fluid className="home-about-section" style={{ 
      padding: "50px 0",
      backgroundImage: 'linear-gradient(to bottom left, rgba(17, 16, 16, 0.582), rgba(12, 8, 24, 0.904))'
    }}>
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h1 style={{ fontSize: "2.6em", marginBottom: "50px", color: "white" }}>
              INTERACTIVE <strong className="purple">PLAYGROUND</strong>
            </h1>
            <p style={{ color: "white", marginBottom: "60px" }}>
              Advanced CSS & Framer Motion interactions.
            </p>
          </Col>
        </Row>
        <Row style={{ alignItems: 'center' }}>
          <Col md={3} sm={6} className="text-center mb-5"><MagneticButton /></Col>
          <Col md={3} sm={6} className="text-center mb-5"><SpotlightButton /></Col>
          <Col md={3} sm={6} className="text-center mb-5"><FlipButton /></Col>
          <Col md={3} sm={6} className="text-center mb-5"><NeumorphicButton /></Col>
          <Col md={3} sm={6} className="text-center mb-5"><GlitchButton /></Col>
          <Col md={3} sm={6} className="text-center mb-5"><LiquidButton /></Col>
          <Col md={3} sm={6} className="text-center mb-5"><NeonButton /></Col>
          <Col md={3} sm={6} className="text-center mb-5"><ElasticButton /></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ButtonsSection;
