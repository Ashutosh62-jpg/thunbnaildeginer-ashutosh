'use client';

import { motion } from 'framer-motion';
import { Sparkles, Award, Target, Zap, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const stats = [
  { label: 'Thumbnails Designed', value: 500, suffix: '+', icon: Sparkles, color: 'text-primary' },
  { label: 'Happy Clients', value: 100, suffix: '+', icon: Award, color: 'text-secondary' },
  { label: 'Combined Views Driven', value: 5, suffix: 'M+', icon: Target, color: 'text-accent' },
  { label: 'Client Satisfaction', value: 99, suffix: '%', icon: Zap, color: 'text-emerald-400' },
];

const designTools = ['Adobe Photoshop', 'After Effects', 'Blender 3D', 'Lightroom', 'Three.js'];

export function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Glass Showcase Container */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Visual Avatar Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex flex-col items-center text-center space-y-6"
            >
              <div className="relative w-full max-w-sm rounded-3xl bg-gradient-to-tr from-primary via-secondary to-accent p-[2px] shadow-glow-primary group">
                <div className="w-full bg-bg-secondary rounded-[22px] p-8 overflow-hidden relative flex flex-col items-center justify-center space-y-6">
                  
                  {/* Decorative Creative Avatar Graphic */}
                  <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent p-1 shadow-glow-primary">
                    <div className="w-full h-full rounded-full bg-bg-main flex items-center justify-center font-heading font-black text-4xl text-gradient">
                      AK
                    </div>
                  </div>

                  <div className="text-center space-y-1">
                    <h3 className="font-heading font-extrabold text-3xl text-white tracking-wider">ASHUTOSH</h3>
                    <p className="text-xs font-mono text-accent uppercase tracking-widest font-semibold">Lead Creative Director & Architect</p>
                  </div>

                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Verified YouTube Specialist</span>
                  </div>

                  {/* Tools Badge Pills */}
                  <div className="w-full pt-4 border-t border-white/10 space-y-2">
                    <span className="text-[10px] font-mono uppercase text-subtext tracking-widest flex items-center justify-center gap-1">
                      <Cpu className="w-3.5 h-3.5 text-primary" />
                      Core Design Toolstack
                    </span>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {designTools.map((tool) => (
                        <span key={tool} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-subtext">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* Right Bio & Philosophy */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-accent">
                <Sparkles className="w-3.5 h-3.5" />
                <span>WHO I AM</span>
              </div>

              <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
                Designing Visuals That Command <span className="text-gradient">Attention.</span>
              </h2>

              <p className="text-subtext leading-relaxed font-body text-base sm:text-lg">
                I’m Ashutosh, a professional YouTube Thumbnail Architect and Creative Director with over 4+ years of experience engineering high-performing visuals for top YouTubers, creators, and agency brands worldwide.
              </p>

              <div className="space-y-4 pt-2">
                <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
                  <h4 className="font-heading font-bold text-white text-base flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Design Philosophy
                  </h4>
                  <p className="text-subtext text-sm leading-relaxed font-body">
                    A thumbnail is not just an image—it is a 0.5-second visual hook. I blend psychological color contrast, facial emotion framing, and 3D lighting depth to compel high-intent clicks.
                  </p>
                </div>

                <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
                  <h4 className="font-heading font-bold text-white text-base flex items-center gap-2">
                    <Zap className="w-5 h-5 text-accent" />
                    Creative Workflow
                  </h4>
                  <p className="text-subtext text-sm leading-relaxed font-body">
                    From deep competitor niche research to custom 3D element rendering and multi-variant testing, every design is built for maximum Click-Through Rate performance.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Animated Statistics Grid */}
          <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="glass-panel p-6 rounded-2xl text-center space-y-2 border border-white/10 hover:border-primary/40 transition-colors shadow-lg"
                >
                  <Icon className={`w-7 h-7 mx-auto ${stat.color}`} />
                  <div className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs sm:text-sm font-mono text-subtext uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
