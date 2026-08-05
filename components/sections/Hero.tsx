'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play, Eye, Flame, ShieldCheck } from 'lucide-react';
import { HeroCanvas } from '@/components/3d/HeroCanvas';

export function Hero() {
  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-primary/30 text-xs sm:text-sm font-mono text-white shadow-glow-primary"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span>Available for High-Impact YouTube Projects</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-1"
              >
                <span className="font-heading font-black text-2xl sm:text-3xl tracking-widest text-subtext uppercase">
                  ASHUTOSH
                </span>
                <span className="block font-mono text-xs sm:text-sm tracking-widest text-accent uppercase font-bold">
                  /// Lead YouTube Thumbnail Architect
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-heading font-black text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-white"
              >
                Crafting Thumbnails That <br className="hidden sm:block" />
                <span className="text-gradient drop-shadow-lg">Stop the Scroll.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-subtext font-body text-lg sm:text-xl max-w-2xl leading-relaxed"
              >
                Helping top creators & digital brands double their CTR with bold, cinematic, psychological, high-converting thumbnail design system architecture.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => scrollToSection('portfolio')}
                className="relative inline-flex items-center justify-center px-8 py-4 rounded-2xl font-heading font-bold text-white bg-gradient-to-r from-primary via-secondary to-accent shadow-glow-primary hover:shadow-glow-secondary hover:scale-[1.02] active:scale-95 transition-all duration-300 gap-3 group"
                data-cursor="button"
              >
                <Play className="w-5 h-5 fill-current text-white group-hover:scale-110 transition-transform" />
                <span>View Portfolio</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-2xl glass-panel text-white font-heading font-bold hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-3 border border-white/10"
                data-cursor="hover"
              >
                <Sparkles className="w-5 h-5 text-accent" />
                <span>Hire Me</span>
              </button>
            </motion.div>

            {/* Trust Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-lg sm:text-xl">5M+</h4>
                  <p className="text-xs text-subtext font-mono">Views Driven</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-lg sm:text-xl">2.5x</h4>
                  <p className="text-xs text-subtext font-mono">Average CTR Boost</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-lg sm:text-xl">99%</h4>
                  <p className="text-xs text-subtext font-mono">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Side 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 h-[450px] lg:h-[600px] w-full relative"
          >
            <HeroCanvas />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
