'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Tv, Smartphone, Palette, Wand2, Compass, Image, CheckCircle2, ArrowUpRight, Maximize2 } from 'lucide-react';
import { ServiceItem } from '@/types';
import { ServiceModal } from '@/components/ui/ServiceModal';

const services: ServiceItem[] = [
  {
    id: 's1',
    title: 'YouTube Thumbnails',
    description: 'High-CTR custom thumbnail architecture tailored to your specific niche, audience psychology, and video packaging.',
    iconName: 'Tv',
    features: ['High-contrast color grading', 'Facial expression retouching', '3D typography & focal lighting', 'A/B Test Variant variations'],
    gradient: 'from-blue-600/30 via-indigo-600/20 to-purple-600/10',
    popular: true,
  },
  {
    id: 's2',
    title: 'Shorts & Reel Covers',
    description: 'Vertical 9:16 high-impact thumbnail covers engineered for viral YouTube Shorts, TikTok, and Instagram Reels feeds.',
    iconName: 'Smartphone',
    features: ['9:16 mobile optimized format', 'Instant eye-catch contrast', 'High visibility title text', 'Batch delivery packages'],
    gradient: 'from-purple-600/30 via-pink-600/20 to-rose-600/10',
  },
  {
    id: 's3',
    title: 'Channel Branding',
    description: 'Complete YouTube channel visual overhaul including high-resolution banners, avatars, and cohesive brand systems.',
    iconName: 'Palette',
    features: ['Matching banner & avatar', 'Custom color theme guide', 'Watermark & end-screen assets', 'Multi-device responsive layout'],
    gradient: 'from-cyan-600/30 via-blue-600/20 to-indigo-600/10',
  },
  {
    id: 's4',
    title: 'Photoshop Compositing',
    description: 'Advanced photo manipulation, AI element blending, background replacement, and realistic volumetric lighting composites.',
    iconName: 'Wand2',
    features: ['Complex image compositing', 'Background extraction & depth', 'Volumetric lighting & FX', 'Full resolution master files'],
    gradient: 'from-emerald-600/30 via-teal-600/20 to-cyan-600/10',
  },
  {
    id: 's5',
    title: 'Creative Direction',
    description: 'Strategic consultation on video titles, thumbnail concepts, packaging strategy, and audience retention hooks.',
    iconName: 'Compass',
    features: ['Title & thumbnail pairings', 'Niche competitor analysis', 'Click psychology strategy', 'CTR audit & optimization'],
    gradient: 'from-amber-600/30 via-orange-600/20 to-red-600/10',
  },
  {
    id: 's6',
    title: 'Social Media Assets',
    description: 'Cohesive promo cards, Twitter headers, Community post graphics, and merchandise release teasers.',
    iconName: 'Image',
    features: ['Multi-platform aspect ratios', 'Fast 24h turnaround delivery', 'Brand consistency guarantee', 'PSD source files included'],
    gradient: 'from-rose-600/30 via-purple-600/20 to-indigo-600/10',
  },
];

const iconMap: Record<string, any> = {
  Tv,
  Smartphone,
  Palette,
  Wand2,
  Compass,
  Image,
};

export function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleSelectService = (serviceTitle: string) => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-secondary/40 text-xs font-mono text-secondary shadow-glow-secondary">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span>EXPERT CAPABILITIES</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Premium Design <span className="text-gradient">Services.</span>
          </h2>
          <p className="text-subtext max-w-2xl mx-auto text-base sm:text-lg font-body">
            Tailored visual solutions built to increase YouTube views, subscriber conversions, and long-term channel authority. Click any card to explore.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Tv;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer relative glass-panel rounded-3xl p-8 border border-white/10 glass-panel-hover flex flex-col justify-between overflow-hidden shadow-xl"
                data-cursor-text="EXPLORE"
              >
                {/* Background Ambient Glow */}
                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-tr ${service.gradient} blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500`} />

                {service.popular && (
                  <div className="absolute top-6 right-6 z-20">
                    <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-[10px] font-heading font-bold text-white uppercase tracking-widest shadow-glow-primary">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6 relative z-10">
                  {/* Icon Container with glowing aura */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary via-secondary to-accent p-[1px] shadow-glow-primary group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full bg-bg-secondary rounded-[15px] flex items-center justify-center text-white">
                      <Icon className="w-8 h-8 text-cyan-300" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                      {service.title}
                      <Maximize2 className="w-4 h-4 text-subtext group-hover:text-accent transition-colors" />
                    </h3>
                    <p className="text-subtext font-body text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 pt-6 border-t border-white/10">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5 text-xs font-mono text-subtext">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-white/90">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 relative z-10">
                  <div className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/10 text-white font-heading font-bold text-xs flex items-center justify-between transition-all duration-300">
                    <span>Explore & Book Service</span>
                    <ArrowUpRight className="w-4 h-4 text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Service Modal */}
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectService={handleSelectService}
        />

      </div>
    </section>
  );
}
