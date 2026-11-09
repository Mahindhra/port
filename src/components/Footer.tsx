import React from 'react';
import { ArrowUp, Github, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04040c] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-12 text-[#E8EDF7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0B1020] border border-[#00E5FF]/40 text-[#00E5FF] font-display font-black text-lg">
                DM
              </div>
              <span className="font-display font-bold text-lg text-[#E8EDF7]">
                DODDI MAHINDHRA
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#E8EDF7]/70 font-sans max-w-sm leading-relaxed">
              Aspiring Software Developer passionate about Java, Python, Web Engineering, and emerging digital systems. Pursuing MCA at Aditya PG College, Visakhapatnam.
            </p>
            <p className="font-mono text-xs text-[#00E5FF]">
              "CREATIVE MIND. TECHNICAL THINKING. INNOVATIVE DEVELOPMENT."
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#00E5FF] font-bold mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#E8EDF7]/70">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => soundFx.playClick()}
                    className="hover:text-[#00E5FF] transition-colors"
                  >
                    → {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-4 text-left space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#A855F7] font-bold mb-4">
              DIRECT REACH
            </h4>
            <div className="space-y-2 text-xs font-mono text-[#E8EDF7]/70">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00E5FF]" />
                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:text-[#00E5FF]">
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#287BFF]" />
                <a href={`tel:${PORTFOLIO_DATA.personal.phone}`} className="hover:text-[#00E5FF]">
                  {PORTFOLIO_DATA.personal.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF8A36]" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <Github className="w-4 h-4 text-[#A855F7]" />
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#00E5FF] hover:underline"
                >
                  GitHub: Mahindhra
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#E8EDF7]/50">
          <p>© {new Date().getFullYear()} Doddi Mahindhra. All rights reserved.</p>

          <div className="flex items-center gap-1 text-[11px]">
            <span>Engineered with React, TypeScript, Three.js &amp; Tailwind CSS</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#00E5FF]/40 text-[#E8EDF7]/70 hover:text-[#00E5FF] transition-all"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
