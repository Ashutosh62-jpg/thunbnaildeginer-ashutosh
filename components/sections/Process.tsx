'use client';

import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, Search, PenTool, CheckCircle, Rocket } from 'lucide-react';
import { ProcessStep } from '@/types';

const steps: ProcessStep[] = [
  {
    step: 'Step 01',
    number: '01',
    title: 'Contact & Briefing',
    description: 'We align on your video topic, target audience, title ideas, and channel brand identity.',
    details: 'Initial consultation & brief submission',
    icon: 'MessageSquare',
  },
  {
    step: 'Step 02',
    number: '02',
    title: 'Niche Research',
    description: 'Deep dive into top-performing competitor thumbnails, color trends, and CTR hooks.',
    details: 'Psychological visual strategy map',
    icon: 'Search',
  },
  {
    step: 'Step 03',
    number: '03',
    title: 'Design Execution',
    description: 'Building custom 3D assets, color grading, retouched subject masking, and crisp text.',
    details: 'Full Photoshop & R3F composition',
    icon: 'PenTool',
  },
  {
    step: 'Step 04',
    number: '04',
    title: 'Feedback & Polish',
    description: 'Collaborative review cycle with quick revisions to guarantee your 100% satisfaction.',
    details: 'Fast iterative refinement',
    icon: 'CheckCircle',
  },
  {
    step: 'Step 05',
    number: '05',
    title: 'Final Delivery',
    description: 'Exporting ultra crisp 4K PNGs, source files, and A/B test variations ready to upload.',
    details: 'Instant cloud delivery',
    icon: 'Rocket',
  },
];

const iconMap: Record<string, any> = {
  MessageSquare,
  Search,
  PenTool,
  CheckCircle,
  Rocket,
};

export function Process() {
  return (
    <section id="process" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-accent/40 text-xs font-mono text-accent shadow-glow-accent">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            5-Step Creative <span className="text-gradient">Process.</span>
          </h2>
          <p className="text-subtext max-w-2xl mx-auto text-base sm:text-lg font-body">
            A seamless, systematic workflow designed to deliver high-impact thumbnail designs on time, every time.
          </p>
        </div>

        {/* Process Steps Container */}
        <div className="relative">
          {/* Connecting Progress Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2 rounded-full opacity-60 shadow-glow-primary z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = iconMap[step.icon] || MessageSquare;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  transition={{ delay: idx * 0.12, duration: 0.5 }}
                  className="group glass-panel rounded-3xl p-6 border border-white/10 glass-panel-hover text-center space-y-4 relative overflow-hidden flex flex-col justify-between shadow-xl"
                  data-cursor="hover"
                >
                  <div className="space-y-4">
                    {/* Icon Badge */}
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-primary via-secondary to-accent p-[1px] shadow-glow-primary group-hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full bg-bg-secondary rounded-[15px] flex items-center justify-center text-white">
                        <Icon className="w-7 h-7 text-cyan-300" />
                      </div>
                    </div>

                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono font-bold text-accent uppercase tracking-widest border border-white/10">
                      {step.step}
                    </span>

                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-subtext text-xs font-body leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-[10px] font-mono text-primary font-semibold">
                    {step.details}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
