import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';

const TargetCursor = ({
  targetSelector = '.cursor-target',
  spinDuration = 1.5,
  hideDefaultCursor = true,
  hoverDuration = 0.05,
  parallaxOn = true,
  containerRef = null
}) => {
  const cursorRef = useRef(null);
  const cornersRef = useRef(null);
  const spinTl = useRef(null);
  const dotRef = useRef(null);

  const isActiveRef = useRef(false);
  const targetCornerPositionsRef = useRef(null);
  const tickerFnRef = useRef(null);
  const activeStrengthRef = useRef({ current: 0 });
  const isInsideContainerRef = useRef(false);

  const isMobile = useMemo(() => {
    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
    const isMobileUserAgent = mobileRegex.test(userAgent.toLowerCase());
    return (hasTouchScreen && isSmallScreen) || isMobileUserAgent;
  }, []);

  const constants = useMemo(() => ({ borderWidth: 3, cornerSize: 12 }), []);

  const moveCursor = useCallback((x, y) => {
    if (!cursorRef.current) return;
    gsap.set(cursorRef.current, { x, y });
  }, []);

  useEffect(() => {
    if (isMobile || !cursorRef.current) return;

    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    const cursor = cursorRef.current;
    cornersRef.current = cursor.querySelectorAll('.target-cursor-corner');

    let activeTarget = null;
    let currentLeaveHandler = null;
    let resumeTimeout = null;

    const cleanupTarget = (target) => {
      if (currentLeaveHandler) {
        target.removeEventListener('mouseleave', currentLeaveHandler);
      }
      currentLeaveHandler = null;
    };

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      opacity: 0
    });

    const createSpinTimeline = () => {
      if (spinTl.current) {
        spinTl.current.kill();
      }
      spinTl.current = gsap
        .timeline({ repeat: -1 })
        .to(cursor, { rotation: '+=360', duration: spinDuration, ease: 'none' });
    };

    createSpinTimeline();

    const tickerFn = () => {
      if (!targetCornerPositionsRef.current || !cursorRef.current || !cornersRef.current) {
        return;
      }
      const cursorX = gsap.getProperty(cursorRef.current, 'x');
      const cursorY = gsap.getProperty(cursorRef.current, 'y');
      const corners = Array.from(cornersRef.current);
      corners.forEach((corner, i) => {
        const targetX = targetCornerPositionsRef.current[i].x - cursorX;
        const targetY = targetCornerPositionsRef.current[i].y - cursorY;
        gsap.set(corner, { x: targetX, y: targetY });
      });
    };

    tickerFnRef.current = tickerFn;

    const moveHandler = (e) => {
      // Check if mouse is inside container
      if (containerRef && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isInside = e.clientX >= rect.left && e.clientX <= rect.right && 
                        e.clientY >= rect.top && e.clientY <= rect.bottom;
        isInsideContainerRef.current = isInside;
        
        if (isInside) {
          moveCursor(e.clientX, e.clientY);
          gsap.to(cursorRef.current, { opacity: 1, duration: 0.1 });
        } else {
          gsap.to(cursorRef.current, { opacity: 0, duration: 0.1 });
        }
      } else {
        moveCursor(e.clientX, e.clientY);
      }
    };
    window.addEventListener('mousemove', moveHandler);

    const scrollHandler = () => {
      if (!activeTarget || !cursorRef.current) return;
      const mouseX = gsap.getProperty(cursorRef.current, 'x');
      const mouseY = gsap.getProperty(cursorRef.current, 'y');
      const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
      const isStillOverTarget =
        elementUnderMouse &&
        (elementUnderMouse === activeTarget || elementUnderMouse.closest(targetSelector) === activeTarget);
      if (!isStillOverTarget) {
        currentLeaveHandler?.();
      }
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });

    const mouseDownHandler = () => {
      if (!dotRef.current) return;
      gsap.to(dotRef.current, { scale: 0.7, duration: 0.3 });
      gsap.to(cursorRef.current, { scale: 0.9, duration: 0.2 });
    };

    const mouseUpHandler = () => {
      if (!dotRef.current) return;
      gsap.to(dotRef.current, { scale: 1, duration: 0.3 });
      gsap.to(cursorRef.current, { scale: 1, duration: 0.2 });
    };

    window.addEventListener('mousedown', mouseDownHandler);
    window.addEventListener('mouseup', mouseUpHandler);

    const enterHandler = (e) => {
      // Only respond if inside container
      if (containerRef && !isInsideContainerRef.current) return;
      
      const directTarget = e.target;
      const allTargets = [];
      let current = directTarget;
      while (current && current !== document.body) {
        if (current.matches(targetSelector)) {
          allTargets.push(current);
        }
        current = current.parentElement;
      }
      const target = allTargets[0] || null;
      if (!target || !cursorRef.current || !cornersRef.current) return;
      if (activeTarget === target) return;
      if (activeTarget) {
        cleanupTarget(activeTarget);
      }
      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
        resumeTimeout = null;
      }

      activeTarget = target;
      const corners = Array.from(cornersRef.current);
      corners.forEach(corner => gsap.killTweensOf(corner));
      gsap.killTweensOf(cursorRef.current, 'rotation');
      spinTl.current?.pause();
      gsap.set(cursorRef.current, { rotation: 0 });

      const rect = target.getBoundingClientRect();
      const { borderWidth, cornerSize } = constants;
      const cursorX = gsap.getProperty(cursorRef.current, 'x');
      const cursorY = gsap.getProperty(cursorRef.current, 'y');

      targetCornerPositionsRef.current = [
        { x: rect.left - borderWidth, y: rect.top - borderWidth },
        { x: rect.right + borderWidth - cornerSize, y: rect.top - borderWidth },
        { x: rect.right + borderWidth - cornerSize, y: rect.bottom + borderWidth - cornerSize },
        { x: rect.left - borderWidth, y: rect.bottom + borderWidth - cornerSize }
      ];

      isActiveRef.current = true;
      gsap.ticker.add(tickerFnRef.current);

      corners.forEach((corner, i) => {
        gsap.to(corner, {
          x: targetCornerPositionsRef.current[i].x - cursorX,
          y: targetCornerPositionsRef.current[i].y - cursorY,
          duration: 0.15,
          ease: 'power1.out'
        });
      });

      const leaveHandler = () => {
        gsap.ticker.remove(tickerFnRef.current);
        isActiveRef.current = false;
        targetCornerPositionsRef.current = null;
        activeTarget = null;
        if (cornersRef.current) {
          const corners = Array.from(cornersRef.current);
          gsap.killTweensOf(corners);
          const { cornerSize } = constants;
          const positions = [
            { x: -cornerSize * 1.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: cornerSize * 0.5 },
            { x: -cornerSize * 1.5, y: cornerSize * 0.5 }
          ];
          const tl = gsap.timeline();
          corners.forEach((corner, index) => {
            tl.to(corner, { x: positions[index].x, y: positions[index].y, duration: 0.15, ease: 'power2.out' }, 0);
          });
        }
        resumeTimeout = setTimeout(() => {
          if (!activeTarget && cursorRef.current && spinTl.current) {
            spinTl.current.kill();
            spinTl.current = gsap
              .timeline({ repeat: -1 })
              .to(cursorRef.current, { rotation: '+=360', duration: spinDuration, ease: 'none' });
          }
          resumeTimeout = null;
        }, 50);
        cleanupTarget(target);
      };
      currentLeaveHandler = leaveHandler;
      target.addEventListener('mouseleave', leaveHandler);
    };

    window.addEventListener('mouseover', enterHandler);

    return () => {
      if (tickerFnRef.current) {
        gsap.ticker.remove(tickerFnRef.current);
      }
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mouseover', enterHandler);
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('mousedown', mouseDownHandler);
      window.removeEventListener('mouseup', mouseUpHandler);
      if (activeTarget) {
        cleanupTarget(activeTarget);
      }
      spinTl.current?.kill();
      document.body.style.cursor = originalCursor;
      isActiveRef.current = false;
      targetCornerPositionsRef.current = null;
      activeStrengthRef.current.current = 0;
    };
  }, [targetSelector, spinDuration, moveCursor, constants, hideDefaultCursor, isMobile, hoverDuration, parallaxOn]);

  useEffect(() => {
    if (isMobile || !cursorRef.current || !spinTl.current) return;
    if (spinTl.current.isActive()) {
      spinTl.current.kill();
      spinTl.current = gsap
        .timeline({ repeat: -1 })
        .to(cursorRef.current, { rotation: '+=360', duration: spinDuration, ease: 'none' });
    }
  }, [spinDuration, isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        willChange: 'transform',
        transition: 'none'
      }}
    >
      <div
        ref={dotRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '4px',
          height: '4px',
          backgroundColor: 'white',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform'
        }}
      />
      <div
        className="target-cursor-corner"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '12px',
          height: '12px',
          border: '3px solid white',
          transform: 'translate(-150%, -150%)',
          borderRight: 0,
          borderBottom: 0,
          willChange: 'transform'
        }}
      />
      <div
        className="target-cursor-corner"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '12px',
          height: '12px',
          border: '3px solid white',
          transform: 'translate(50%, -150%)',
          borderLeft: 0,
          borderBottom: 0,
          willChange: 'transform'
        }}
      />
      <div
        className="target-cursor-corner"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '12px',
          height: '12px',
          border: '3px solid white',
          transform: 'translate(50%, 50%)',
          borderLeft: 0,
          borderTop: 0,
          willChange: 'transform'
        }}
      />
      <div
        className="target-cursor-corner"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '12px',
          height: '12px',
          border: '3px solid white',
          transform: 'translate(-150%, 50%)',
          borderRight: 0,
          borderTop: 0,
          willChange: 'transform'
        }}
      />
    </div>
  );
};

export default TargetCursor;

