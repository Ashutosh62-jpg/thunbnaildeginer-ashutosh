'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
}

export function GalaxyBackground() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const colors = [
      '#3B82F6', // Electric Blue
      '#8B5CF6', // Purple
      '#06B6D4', // Cyan Accent
      '#60A5FA', // Sky Blue
      '#C084FC', // Light Violet
    ];

    const particles: Particle[] = [];
    const numParticles = Math.min(120, Math.floor((width * height) / 12000));

    for (let i = 0; i < numParticles; i++) {
      const baseAlpha = Math.random() * 0.6 + 0.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: baseAlpha,
        baseAlpha: baseAlpha,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.01;

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.fillStyle = '#050816';
      ctx.fillRect(0, 0, width, height);

      // Moving Gradient Blobs
      const blob1X = width * 0.3 + Math.sin(time * 0.5) * 150;
      const blob1Y = height * 0.3 + Math.cos(time * 0.7) * 100;
      const grad1 = ctx.createRadialGradient(blob1X, blob1Y, 0, blob1X, blob1Y, width * 0.4);
      grad1.addColorStop(0, 'rgba(59, 130, 246, 0.12)');
      grad1.addColorStop(1, 'rgba(5, 8, 22, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const blob2X = width * 0.7 + Math.cos(time * 0.6) * 180;
      const blob2Y = height * 0.7 + Math.sin(time * 0.4) * 120;
      const grad2 = ctx.createRadialGradient(blob2X, blob2Y, 0, blob2X, blob2Y, width * 0.45);
      grad2.addColorStop(0, 'rgba(139, 92, 246, 0.12)');
      grad2.addColorStop(1, 'rgba(5, 8, 22, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      const blob3X = width * 0.5 + Math.sin(time * 0.3) * 200;
      const blob3Y = height * 0.5 + Math.cos(time * 0.5) * 150;
      const grad3 = ctx.createRadialGradient(blob3X, blob3Y, 0, blob3X, blob3Y, width * 0.35);
      grad3.addColorStop(0, 'rgba(6, 182, 212, 0.08)');
      grad3.addColorStop(1, 'rgba(5, 8, 22, 0)');
      ctx.fillStyle = grad3;
      ctx.fillRect(0, 0, width, height);

      // Interactive Mouse Light Spotlight
      const mouseGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 350);
      mouseGrad.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
      mouseGrad.addColorStop(0.5, 'rgba(139, 92, 246, 0.05)');
      mouseGrad.addColorStop(1, 'rgba(5, 8, 22, 0)');
      ctx.fillStyle = mouseGrad;
      ctx.fillRect(0, 0, width, height);

      // Floating Stars
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha = p.baseAlpha + Math.sin(time * 5 * p.pulseSpeed) * 0.3;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let offsetX = 0;
        let offsetY = 0;
        if (dist < 180) {
          const force = (180 - dist) / 180;
          offsetX = -(dx / dist) * force * 8;
          offsetY = -(dy / dist) * force * 8;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.min(1, p.alpha));
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.size > 1.5 ? 8 : 4;
        ctx.beginPath();
        ctx.arc(p.x + offsetX, p.y + offsetY, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1] bg-[#050816]"
    />
  );
}
