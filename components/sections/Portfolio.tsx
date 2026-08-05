'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Eye, TrendingUp, Flame, Maximize2 } from 'lucide-react';
import { Category, PortfolioItem } from '@/types';
import { portfolioItems } from '@/lib/portfolioData';
import { LightboxModal } from '@/components/ui/LightboxModal';

const categories: Category[] = [
  'All',
  'Gaming',
  'Tech',
  'Education',
  'Finance',
  'Documentary',
  'AI',
  'Sports',
  'Travel',
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-primary/40 text-xs font-mono text-primary shadow-glow-primary">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span>CURATED WORKS</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            High-Converting <span className="text-gradient">Thumbnails.</span>
          </h2>
          <p className="text-subtext max-w-2xl mx-auto text-base sm:text-lg font-body">
            Explore custom thumbnail design systems engineered to maximize click psychology, contrast clarity, and CTR performance.
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-2 pt-6">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-heading font-semibold transition-all duration-300 relative ${
                    isActive
                      ? 'text-white shadow-glow-primary'
                      : 'text-subtext hover:text-white glass-panel hover:bg-white/10'
                  }`}
                  data-cursor="hover"
                >
                  {cat}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryBg"
                      className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer relative glass-panel rounded-3xl overflow-hidden border border-white/10 glass-panel-hover shadow-2xl"
                data-cursor-text="PREVIEW"
              >
                {/* Visual Thumbnail Card Area */}
                <div className="relative aspect-video w-full overflow-hidden bg-bg-secondary">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-tr ${item.gradient} p-6 flex flex-col justify-between group-hover:scale-105 transition-transform duration-700 ease-out relative`}>
                      
                      {/* Top Badges */}
                      <div className="flex justify-between items-center z-10">
                        <span className="px-3 py-1 rounded-full bg-bg-main/70 border border-white/20 text-[10px] font-mono font-bold text-white uppercase tracking-wider backdrop-blur-md flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          {item.category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-primary/30 border border-primary/50 text-[10px] font-mono font-bold text-white backdrop-blur-md flex items-center gap-1">
                          <Flame className="w-3 h-3 text-amber-400" />
                          {item.badge}
                        </span>
                      </div>

                      {/* Simulated YouTube Player Overlay Graphics */}
                      <div className="z-10 space-y-2">
                        <h3 className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight drop-shadow-lg group-hover:text-cyan-300 transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-xs font-mono">
                          Client: <strong className="text-white">{item.client}</strong>
                        </p>
                      </div>

                      {/* Bottom Video Length Tag */}
                      <div className="absolute bottom-4 right-4 z-10 px-2.5 py-1 rounded bg-black/80 text-[10px] font-mono text-white font-bold backdrop-blur-sm border border-white/10">
                        14:20 HD
                      </div>
                    </div>
                  )}

                  {/* Hover Lightbox Icon Overlay */}
                  <div className="absolute inset-0 bg-bg-main/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm z-20">
                    <div className="p-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-glow-primary transform scale-75 group-hover:scale-100 transition-transform duration-300 flex items-center gap-2 font-heading font-bold text-xs">
                      <Maximize2 className="w-4 h-4" />
                      <span>View Full Design</span>
                    </div>
                  </div>
                </div>

                {/* Card Metrics Footer */}
                <div className="p-6 flex items-center justify-between border-t border-white/10 bg-bg-secondary/40">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono font-semibold text-emerald-400">
                      {item.ctrIncrease}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-subtext">
                    <Eye className="w-4 h-4 text-accent" />
                    <span className="text-xs font-mono">{item.views} Views</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />

      </div>
    </section>
  );
}
