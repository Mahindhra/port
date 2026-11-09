import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse, not touch)
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive-hover') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Smooth trail animation
  useEffect(() => {
    if (!isVisible) return;
    let animId: number;

    const follow = () => {
      setTrailPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.2,
        y: prev.y + (pos.y - prev.y) * 0.2,
      }));
      animId = requestAnimationFrame(follow);
    };

    animId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animId);
  }, [pos, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer trailing aura */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-all duration-150 ease-out"
        style={{
          transform: `translate3d(${trailPos.x - (isHovering ? 28 : 16)}px, ${trailPos.y - (isHovering ? 28 : 16)}px, 0)`,
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
          background: isHovering
            ? 'radial-gradient(circle, rgba(0, 229, 255, 0.25) 0%, rgba(121, 85, 255, 0.15) 70%, transparent 100%)'
            : 'radial-gradient(circle, rgba(0, 229, 255, 0.18) 0%, transparent 80%)',
          border: isHovering
            ? '1.5px solid rgba(0, 229, 255, 0.7)'
            : '1px solid rgba(40, 123, 255, 0.4)',
          boxShadow: isHovering
            ? '0 0 20px rgba(0, 229, 255, 0.4)'
            : '0 0 10px rgba(40, 123, 255, 0.2)',
          opacity: 0.9,
        }}
      />

      {/* Inner sharp precision dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-transform duration-75"
        style={{
          transform: `translate3d(${pos.x - 3}px, ${pos.y - 3}px, 0) scale(${isClicking ? 0.6 : 1})`,
          width: 6,
          height: 6,
          backgroundColor: '#00E5FF',
          boxShadow: '0 0 8px #00E5FF, 0 0 12px #287BFF',
        }}
      />
    </>
  );
};
