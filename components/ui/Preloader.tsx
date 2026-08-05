'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        const diff = Math.floor(Math.random() * 20) + 10;
        return Math.min(100, prev + diff);
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-[#050816] flex flex-col justify-between p-8 md:p-16 select-none"
        >
          {/* Top Header */}
          <div className="flex justify-between items-center">
            <span className="font-heading font-bold text-xl tracking-widest text-white flex items-center gap-2">
              ASHUTOSH
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            </span>
            <span className="font-mono text-xs text-subtext uppercase tracking-widest">
              Portfolio 2026
            </span>
          </div>

          {/* Center Brand Text */}
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gradient"
            >
              STOP THE SCROLL
            </motion.h1>
            <p className="text-subtext font-mono text-xs sm:text-base tracking-widest uppercase">
              YouTube Thumbnail Architecture & Creative Direction
            </p>
          </div>

          {/* Bottom Progress Counter */}
          <div className="flex justify-between items-end border-t border-white/10 pt-6">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs text-subtext uppercase">Loading Assets...</span>
            </div>
            <div className="font-heading font-black text-6xl sm:text-8xl text-white tracking-tighter">
              {progress}
              <span className="text-primary text-4xl sm:text-6xl">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
