import React, { useEffect, useRef, useState } from 'react';
import './AnimatedSection.css';

function AnimatedSection({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  duration = 600,
  threshold = 0.1,
  className = '' 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold]);

  return (
    <div
      ref={elementRef}
      className={`animated-section ${animation} ${isVisible ? 'visible' : ''} ${className}`}
      style={{
        '--animation-duration': `${duration}ms`,
        '--animation-delay': `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;
