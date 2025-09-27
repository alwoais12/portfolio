import React, { useState, useEffect, useRef, useCallback } from 'react';
import './CustomCursor.css';

function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef();
  const dotRef = useRef();
  const rafRef = useRef();

  const updateMousePosition = useCallback((e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Cancel previous animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    // Use requestAnimationFrame for smooth cursor movement
    rafRef.current = requestAnimationFrame(() => {
      // Position both elements at the exact same coordinates
      const transformValue = `translate(${x}px, ${y}px)`;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = transformValue;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = transformValue;
      }
    });
  }, []);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.matches('a, button, .cursor-hover, [role="button"], .nav-link, .btn') ||
                          target.closest('a, button, .cursor-hover, [role="button"], .nav-link, .btn');
      setIsHovering(isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setIsClicking(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      // Cleanup
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateMousePosition]);

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
      />
      <div
        ref={dotRef}
        className={`cursor-dot ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
      />
    </>
  );
}

export default CustomCursor;
