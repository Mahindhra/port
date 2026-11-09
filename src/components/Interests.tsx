import React from 'react';
import { Music, Utensils, Palette, PenTool, Sparkles, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export const Interests: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Music: <Music className="w-8 h-8 text-[#00E5FF]" />,
    Utensils: <Utensils className="w-8 h-8 text-[#FF8A36]" />,
    Palette: <Palette className="w-8 h-8 text-[#A855F7]" />,
    PenTool: <PenTool className="w-8 h-8 text-[#287BFF]" />,
  };

  return (
    <section id="interests" className="relative py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 rounded-full bg-[#FF8A36]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Heart className="w-3.5 h-3.5" />
            <span>08 // CREATIVE SPARK</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#E8EDF7] tracking-tight">
            PERSONAL <span className="text-gradient-cinematic">INTERESTS</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#E8EDF7]/70 font-sans max-w-xl mx-auto">
            Disciplines outside code that shape aesthetic sensibility, attention to detail, and creative rhythm.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-500 via-[#A855F7] to-[#00E5FF] mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Interactive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.interests.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => soundFx.playHover()}
              className="group relative rounded-3xl glass-panel border border-white/10 hover:border-[#00E5FF]/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-cyan text-left"
            >
              <div>
                {/* 3D Icon Shell */}
                <div className="w-16 h-16 rounded-2xl bg-[#050510] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#00E5FF]/50 transition-all duration-300">
                  {iconMap[item.icon] || <Sparkles className="w-8 h-8 text-[#00E5FF]" />}
                </div>

                {/* Tag */}
                <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#00E5FF]">
                  {item.tag}
                </span>

                {/* Title & Subtitle */}
                <h3 className="font-display text-xl font-bold text-[#E8EDF7] mt-3 group-hover:text-[#00E5FF] transition-colors">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-[#A855F7] mt-0.5 mb-3">
                  {item.subtitle}
                </p>

                {/* Narrative */}
                <p className="text-xs text-[#E8EDF7]/70 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative line */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#E8EDF7]/40">
                <span>Creative Expression</span>
                <span className="text-[#00E5FF]">✦ Passion</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
