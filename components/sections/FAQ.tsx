'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '@/types';

const faqs: FAQItem[] = [
  {
    question: 'What is your typical turnaround time for thumbnail designs?',
    answer: 'Standard delivery is within 24 to 48 hours. For urgent video releases or Pro package clients, 24-hour priority rush delivery is included at no extra charge.',
  },
  {
    question: 'Do you provide Photoshop PSD source files?',
    answer: 'Yes! PSD master source files with fully organized, labeled layers are included with our Professional Pack and Monthly Retainer packages.',
  },
  {
    question: 'What if I am not 100% satisfied with the initial design concept?',
    answer: 'We offer unlimited revisions until you are completely thrilled with the final thumbnail. Your satisfaction and video CTR performance are our top priorities.',
  },
  {
    question: 'How do you guarantee higher Click-Through Rates (CTR)?',
    answer: 'We combine niche competitor visual audits with psychological color contrast framing, focal depth, facial expression enhancement, and mobile readability testing to maximize click appeal.',
  },
  {
    question: 'Can you help with title recommendations as well?',
    answer: 'Absolutely. A great thumbnail requires a complementary title hook. We provide title & packaging pairing recommendations as part of our Pro and Retainer workflows.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-accent/30 text-xs font-mono text-accent shadow-glow-accent">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            Got Questions? <span className="text-gradient">We Have Answers.</span>
          </h2>
          <p className="text-subtext max-w-xl mx-auto text-base font-body">
            Everything you need to know about starting your project with Ashutosh.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden glass-panel-hover"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-lg sm:text-xl text-white hover:text-cyan-300 transition-colors"
                  data-cursor="hover"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full bg-white/5 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary/20 text-primary' : 'text-subtext'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-subtext font-body text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
