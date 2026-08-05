'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, TrendingUp, Sparkles, ExternalLink } from 'lucide-react';
import { PortfolioItem } from '@/types';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export function LightboxModal({ item, onClose }: LightboxModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-bg-main/80 backdrop-blur-xl"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl glass-panel rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl border border-white/10 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Graphics / Image */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-white/10 group shadow-glass bg-bg-secondary">
            {item.imageUrl ? (
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-tr ${item.gradient} p-8 flex flex-col justify-between relative overflow-hidden`}>
                <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
                <div className="absolute top-0 right-0 p-6">
                  <span className="px-3 py-1 rounded-full bg-bg-main/60 border border-white/20 text-xs font-mono font-semibold text-white backdrop-blur-md">
                    {item.badge}
                  </span>
                </div>

                <div className="my-auto text-center space-y-3 z-10 px-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-heading font-bold text-white uppercase tracking-widest backdrop-blur-md">
                    {item.category} Category
                  </span>
                  <h3 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-white/80 font-mono text-xs sm:text-sm max-w-md mx-auto">
                    High Click-Through Rate Architecture
                  </p>
                </div>

                <div className="flex justify-between items-end z-10">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-bg-main/70 border border-white/10 backdrop-blur-md text-xs font-mono text-subtext">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span>{item.ctrIncrease}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-bg-main/70 border border-white/10 backdrop-blur-md text-xs font-mono text-subtext">
                    <Eye className="w-4 h-4 text-accent" />
                    <span>{item.views} Views</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-accent uppercase tracking-wider">Client / Creator</span>
                <h4 className="font-heading text-xl font-bold text-white">{item.client}</h4>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-subtext">
                  Views: <span className="text-white font-bold">{item.views}</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
                  CTR: <span className="font-bold">{item.ctrIncrease}</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-heading text-sm font-semibold text-subtext uppercase tracking-wider mb-2">
                Design Strategy & Execution
              </h5>
              <p className="text-subtext leading-relaxed font-body text-sm sm:text-base">
                {item.description} Custom visual hierarchy created to maximize thumbnail contrast, facial expression emphasis, focal lighting, and high-readability typography optimized for mobile devices.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                onClick={onClose}
                className="flex-1 py-3 px-6 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-heading font-bold text-center shadow-glow-primary hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Request Similar Design
              </a>
              <button
                onClick={onClose}
                className="py-3 px-6 rounded-2xl bg-white/5 border border-white/10 text-white font-heading font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4 text-subtext" />
                Close Preview
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
