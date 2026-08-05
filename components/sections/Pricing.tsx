'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { PricingPlan } from '@/types';

const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Package',
    price: '$49',
    period: '/ single thumbnail',
    description: 'Perfect for creators looking for a one-off high-impact thumbnail upgrade.',
    turnaround: '24-48 Hour Turnaround',
    ctaText: 'Get Started',
    features: [
      '1 High-CTR Custom Thumbnail',
      'Full 4K Ultra HD PNG Export',
      'Advanced 3D Lighting & Retouching',
      '2 Rounds of Free Revisions',
      'Mobile CTR Optimization Audit',
    ],
  },
  {
    id: 'professional',
    name: 'Professional Pack',
    price: '$129',
    period: '/ 3 thumbnails',
    description: 'Our most popular choice for active creators posting weekly videos.',
    popular: true,
    turnaround: '24 Hour Priority Delivery',
    ctaText: 'Claim Pro Package',
    features: [
      '3 High-CTR Custom Thumbnails',
      'A/B Test Variant Variation Included',
      'PSD Master Source Files Included',
      'Unlimited Rapid Revisions',
      'Title & Click Hook Strategy Consultation',
      'Priority 24-Hour Queue Placement',
    ],
  },
  {
    id: 'premium',
    name: 'Monthly Retainer',
    price: '$399',
    period: '/ month',
    description: 'Dedicated thumbnail partner for serious channels posting 8-10 videos/month.',
    turnaround: '12-24 Hour Same Day Turnaround',
    ctaText: 'Join Creator Pass',
    features: [
      'Up to 10 Thumbnails per Month',
      'Unlimited A/B Test Variants',
      'Dedicated Slack / Discord Channel',
      'Complete Channel Rebranding Assets',
      'Custom Photoshop Template System',
      'Direct 1-on-1 Creative Direction',
    ],
  },
];

export function Pricing() {
  const scrollToContact = () => {
    const elem = document.getElementById('contact');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-secondary/40 text-xs font-mono text-secondary shadow-glow-secondary">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span>TRANSPARENT INVESTMENT</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Simple, Transparent <span className="text-gradient">Pricing.</span>
          </h2>
          <p className="text-subtext max-w-2xl mx-auto text-base sm:text-lg font-body">
            Invest in design that pays for itself through increased views, higher subscriber retention, and ad revenue growth.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`relative glass-panel rounded-3xl p-8 flex flex-col justify-between overflow-hidden border transition-all duration-300 shadow-2xl ${
                plan.popular
                  ? 'border-primary/80 bg-gradient-to-b from-primary/15 via-bg-secondary/90 to-bg-main shadow-glow-primary lg:-translate-y-4 neon-border'
                  : 'border-white/10 glass-panel-hover'
              }`}
              data-cursor="hover"
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-primary via-secondary to-accent py-1.5 text-center text-xs font-heading font-bold text-white uppercase tracking-widest shadow-glow-primary">
                  ★ MOST POPULAR CHOICE
                </div>
              )}

              <div className={`space-y-6 ${plan.popular ? 'pt-4' : ''}`}>
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-2xl text-white flex items-center justify-between">
                    {plan.name}
                    {plan.popular && <Zap className="w-5 h-5 text-accent animate-bounce" />}
                  </h3>
                  <p className="text-subtext text-xs font-body min-h-[36px]">
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="font-heading font-black text-5xl sm:text-6xl text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-subtext font-mono text-sm">{plan.period}</span>
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-accent">
                  ⚡ {plan.turnaround}
                </div>

                <ul className="space-y-3 pt-6 border-t border-white/10">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-xs sm:text-sm font-body text-subtext">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-white/90">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={scrollToContact}
                  className={`w-full py-4 rounded-2xl font-heading font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-glow-primary hover:shadow-glow-secondary hover:scale-[1.02]'
                      : 'glass-panel text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
