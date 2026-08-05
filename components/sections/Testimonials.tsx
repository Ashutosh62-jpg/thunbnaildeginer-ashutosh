'use client';

import { motion } from 'framer-motion';
import { Sparkles, Star, Quote, CheckCircle2 } from 'lucide-react';
import { TestimonialItem } from '@/types';

const testimonials: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Alex Rivers',
    role: 'Tech Creator',
    channel: 'TechLead Prime',
    subscribers: '1.4M Subs',
    avatarBg: 'from-blue-500 to-indigo-600',
    avatarInitial: 'A',
    quote: 'Ashutosh completely transformed our channel CTR from 4.2% to an insane 11.8%! His 3D lighting depth and title positioning are second to none in the industry.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Marcus Vance',
    role: 'Gaming Director',
    channel: 'PixelKing Gaming',
    subscribers: '890K Subs',
    avatarBg: 'from-orange-500 to-red-600',
    avatarInitial: 'M',
    quote: 'Working with Ashutosh is an absolute game-changer. He understands YouTube click psychology better than anyone. Delivery speed and communication are 10/10.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Sarah Chen',
    role: 'Finance Host',
    channel: 'Capital Mastery',
    subscribers: '650K Subs',
    avatarBg: 'from-emerald-500 to-teal-600',
    avatarInitial: 'S',
    quote: 'Our video hit 950K views in the first 48 hours thanks to Ashutosh’s high-contrast custom thumbnail layout. He is our exclusive thumbnail designer now.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'David Miller',
    role: 'Documentary Producer',
    channel: 'Mystery Files',
    subscribers: '2.1M Subs',
    avatarBg: 'from-purple-500 to-indigo-700',
    avatarInitial: 'D',
    quote: 'The level of detail, lighting realism, and facial retouching Ashutosh provides is unheard of at this price point. Highly recommended to top creators!',
    rating: 5,
  },
  {
    id: 't5',
    name: 'Elena Rostova',
    role: 'AI Researcher & Educator',
    channel: 'Mindset Academy',
    subscribers: '420K Subs',
    avatarBg: 'from-cyan-500 to-blue-700',
    avatarInitial: 'E',
    quote: 'Fast 24-hour turnaround, unlimited revisions, and thumbnails that consistently double our baseline CTR. You cannot ask for a better design partner.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-primary/30 text-xs font-mono text-primary shadow-glow-primary">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CLIENT PROOF</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Trusted by Top <span className="text-gradient">Creators.</span>
          </h2>
          <p className="text-subtext max-w-2xl mx-auto text-base sm:text-lg font-body">
            Here is what YouTubers with millions of combined subscribers have to say about working with Ashutosh.
          </p>
        </div>
      </div>

      {/* Infinite Auto-Marquee Carousel */}
      <div className="relative w-full overflow-hidden">
        <div className="flex space-x-6 w-max animate-marquee py-4">
          {[...testimonials, ...testimonials].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[360px] sm:w-[420px] glass-panel rounded-3xl p-8 border border-white/10 glass-panel-hover space-y-6 flex-shrink-0 relative overflow-hidden"
              data-cursor="hover"
            >
              {/* Quote Mark Background Icon */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-white/5 pointer-events-none" />

              {/* 5-Star Rating */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-subtext font-body text-sm leading-relaxed italic">
                "{item.quote}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.avatarBg} flex items-center justify-center font-heading font-bold text-lg text-white shadow-glow-primary`}>
                  {item.avatarInitial}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base flex items-center gap-1.5">
                    {item.name}
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </h4>
                  <p className="text-xs font-mono text-subtext">
                    {item.channel} • <span className="text-accent">{item.subscribers}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
