'use client';

import { ArrowUp, Heart, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'Behance', href: 'https://behance.net', icon: '🎨' },
  { name: 'Dribbble', href: 'https://dribbble.com', icon: '🏀' },
  { name: 'Instagram', href: 'https://instagram.com', icon: '📸' },
  { name: 'Discord', href: 'https://discord.com', icon: '💬' },
  { name: 'Fiverr', href: 'https://fiverr.com', icon: '💚' },
  { name: 'Upwork', href: 'https://upwork.com', icon: '🟢' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-bg-main pt-16 pb-12 overflow-hidden">
      {/* Ambient Glow background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-t from-primary/10 via-secondary/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Left Brand Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary via-secondary to-accent p-[1px] shadow-glow-primary">
                <div className="w-full h-full bg-bg-main rounded-[10px] flex items-center justify-center font-heading font-black text-white">
                  A
                </div>
              </div>
              <span className="font-heading text-2xl font-bold text-white tracking-wider">
                ASHUTOSH
              </span>
            </div>

            <p className="text-subtext font-body text-sm leading-relaxed max-w-sm">
              Award-winning YouTube Thumbnail Architect helping digital creators, gaming directors, and agency brands maximize CTR and channel growth through high-impact visual design systems.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for New Projects</span>
            </div>
          </div>

          {/* Center Social Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Connect & Socials
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl glass-panel border border-white/5 text-subtext hover:text-white hover:border-white/20 transition-all text-xs font-mono group"
                  data-cursor="hover"
                >
                  <span>{social.icon}</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Direct Contact */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Direct Contact
            </h4>
            <a
              href="mailto:kumarashutosh0219@gmail.com"
              className="flex items-center gap-3 p-4 rounded-2xl glass-panel border border-white/10 text-subtext hover:text-white hover:border-primary/40 transition-colors group"
              data-cursor="hover"
            >
              <div className="p-2 rounded-xl bg-primary/20 text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase text-subtext">Direct Email</p>
                <p className="font-mono text-xs text-white font-semibold group-hover:text-primary transition-colors">
                  kumarashutosh0219@gmail.com
                </p>
              </div>
            </a>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-subtext">
          <div className="flex items-center gap-1.5">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>by <strong className="text-white">Ashutosh</strong> © 2026. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 hover:border-white/30 text-white transition-all hover:scale-105"
            data-cursor="hover"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-accent" />
          </button>
        </div>

      </div>
    </footer>
  );
}
