'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, ArrowRight, Tv, Smartphone, Palette, Wand2, Compass, Image } from 'lucide-react';
import { ServiceItem } from '@/types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectService: (serviceTitle: string) => void;
}

const iconMap: Record<string, any> = {
  Tv,
  Smartphone,
  Palette,
  Wand2,
  Compass,
  Image,
};

export function ServiceModal({ service, onClose, onSelectService }: ServiceModalProps) {
  if (!service) return null;
  const Icon = iconMap[service.iconName] || Tv;

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
          className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl border border-white/10 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Banner */}
          <div className="flex items-center gap-4 mb-6 pt-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary via-secondary to-accent p-[1px] shadow-glow-primary flex-shrink-0">
              <div className="w-full h-full bg-bg-secondary rounded-[15px] flex items-center justify-center text-white">
                <Icon className="w-8 h-8 text-cyan-300" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-accent uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3 text-accent" />
                Specialized Service
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">{service.title}</h3>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <p className="text-subtext font-body text-sm sm:text-base leading-relaxed">
              {service.description} Every asset is custom engineered for high visual contrast, fast turnaround, and max CTR conversion.
            </p>

            {/* Included Deliverables */}
            <div className="space-y-3 pt-2 border-t border-white/10">
              <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                What's Included in This Service
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-mono text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  onSelectService(service.title);
                  onClose();
                }}
                className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-heading font-bold text-sm shadow-glow-primary hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Book {service.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="py-4 px-6 rounded-2xl bg-white/5 border border-white/10 text-white font-heading font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
