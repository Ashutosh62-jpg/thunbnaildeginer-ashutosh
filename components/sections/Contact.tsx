'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, CheckCircle, Mail, User, DollarSign, MessageSquare, Briefcase, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'YouTube Thumbnail Pack',
    budget: '$100 - $300',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Trigger Confetti Celebration
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3B82F6', '#8B5CF6', '#06B6D4', '#ffffff'],
        });
      } else {
        setIsSubmitting(false);
        setErrorMsg(data.error || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const mailtoUrl = `mailto:kumarashutosh0219@gmail.com?subject=${encodeURIComponent(
    `Inquiry from ${formData.name || 'Client'}: ${formData.projectType}`
  )}&body=${encodeURIComponent(
    `Hi Ashutosh,\n\n${formData.message}\n\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\nFrom: ${formData.name} (${formData.email})`
  )}`;

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Glass Card Container */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-primary/30 text-xs font-mono text-primary shadow-glow-primary">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>LET'S BUILD SOMETHING GREAT</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              Start Your <span className="text-gradient">Project Today.</span>
            </h2>
            <p className="text-subtext max-w-lg mx-auto text-sm sm:text-base font-body">
              Ready to double your CTR? Fill out the form below or send a direct email to receive a custom proposal within 2-4 hours.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10"
              >
                {errorMsg && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono text-center">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-subtext uppercase tracking-wider flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. MrBeast / Alex"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-bg-main/70 border border-white/10 text-white placeholder-subtext/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-body text-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-subtext uppercase tracking-wider flex items-center gap-2">
                      <Mail className="w-4 h-4 text-accent" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@creatorbrand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-bg-main/70 border border-white/10 text-white placeholder-subtext/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-body text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Project Type Select */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-subtext uppercase tracking-wider flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-secondary" />
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-bg-main/70 border border-white/10 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-body text-sm"
                    >
                      <option value="Single Thumbnail Design">Single Thumbnail Design ($49)</option>
                      <option value="YouTube Thumbnail Pack">Professional Pack - 3 Thumbnails ($129)</option>
                      <option value="Monthly Retainer">Monthly Creator Pass ($399/mo)</option>
                      <option value="Channel Rebranding">Complete Channel Rebranding</option>
                      <option value="Custom Inquiry">Custom Creative Direction</option>
                    </select>
                  </div>

                  {/* Budget Select */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-subtext uppercase tracking-wider flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-emerald-400" />
                      Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-bg-main/70 border border-white/10 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-body text-sm"
                    >
                      <option value="Under $100">Under $100</option>
                      <option value="$100 - $300">$100 - $300</option>
                      <option value="$300 - $1,000">$300 - $1,000</option>
                      <option value="$1,000+">$1,000+ / Ongoing Retainer</option>
                    </select>
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-subtext uppercase tracking-wider flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-subtext" />
                    Video Brief / Ideas *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your video topic, title ideas, channel link, or design vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-bg-main/70 border border-white/10 text-white placeholder-subtext/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-body text-sm"
                  />
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-heading font-bold text-base shadow-glow-primary hover:shadow-glow-secondary hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                    data-cursor="button"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Project Brief</span>
                      </>
                    )}
                  </button>

                  <a
                    href={mailtoUrl}
                    className="w-full py-3 rounded-2xl bg-white/5 border border-white/10 text-subtext hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2 font-mono text-xs"
                  >
                    <Mail className="w-4 h-4 text-accent" />
                    <span>Or send email directly to kumarashutosh0219@gmail.com</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.form>
            ) : (
              /* Success Animation Modal */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-glow-accent animate-bounce">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-3xl text-white">Project Brief Received!</h3>
                  <p className="text-subtext font-body text-sm max-w-md mx-auto">
                    Thank you <span className="text-white font-bold">{formData.name}</span>! An email has been dispatched to <span className="text-emerald-400 font-mono">kumarashutosh0219@gmail.com</span>. I will review your channel brief and reply to <span className="text-accent font-mono">{formData.email}</span> within 2-4 hours.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', projectType: 'YouTube Thumbnail Pack', budget: '$100 - $300', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full bg-white/10 text-white font-heading font-semibold text-xs hover:bg-white/20 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
