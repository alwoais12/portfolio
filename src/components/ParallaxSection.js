import React, { useEffect, useState } from 'react';
import './ParallaxSection.css';

function ParallaxSection({ children, speed = 0.5, className = "" }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * speed}px)`,
  };

  return (
    <div className={`parallax-container ${className}`}>
      <div className="parallax-layer" style={parallaxStyle}>
        {children}
      </div>
      
      {/* Floating particles */}
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ParallaxSection;
