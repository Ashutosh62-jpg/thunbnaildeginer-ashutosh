'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'button' | 'card'>('default');
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 280, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    if (window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest('a, button, [data-cursor], input, select, textarea');

      if (interactiveEl) {
        const cursorAttr = interactiveEl.getAttribute('data-cursor');
        const textAttr = interactiveEl.getAttribute('data-cursor-text');

        if (textAttr) {
          setCursorText(textAttr);
          setCursorVariant('card');
        } else if (cursorAttr === 'button') {
          setCursorText('GO');
          setCursorVariant('button');
        } else {
          setCursorText('');
          setCursorVariant('hover');
        }
      } else {
        setCursorText('');
        setCursorVariant('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted || !isVisible) return null;

  const variants = {
    default: {
      height: 24,
      width: 24,
      backgroundColor: 'rgba(59, 130, 246, 0.4)',
      boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.4)',
      border: '1px solid rgba(59, 130, 246, 0.8)',
    },
    hover: {
      height: 48,
      width: 48,
      backgroundColor: 'rgba(139, 92, 246, 0.2)',
      border: '1.5px solid rgba(139, 92, 246, 0.8)',
      boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)',
    },
    button: {
      height: 56,
      width: 56,
      backgroundColor: 'rgba(6, 182, 212, 0.25)',
      border: '2px solid rgba(6, 182, 212, 0.9)',
      boxShadow: '0 0 35px rgba(6, 182, 212, 0.7)',
    },
    card: {
      height: 64,
      width: 64,
      backgroundColor: 'rgba(59, 130, 246, 0.75)',
      boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.4)',
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 mix-blend-screen opacity-90"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={cursorVariant}
      variants={variants as any}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
    >
      {cursorText && (
        <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-white px-1 select-none">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
