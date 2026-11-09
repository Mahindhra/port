import React from 'react';
import { Trophy, Users, Calendar, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export const Achievements: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Trophy: <Trophy className="w-6 h-6 text-amber-400" />,
    Users: <Users className="w-6 h-6 text-[#00E5FF]" />,
    Calendar: <Calendar className="w-6 h-6 text-[#A855F7]" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-400" />,
  };

  return (
    <section id="achievements" className="relative py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-[#00E5FF]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>07 // IMPACT &amp; LEADERSHIP</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#E8EDF7] tracking-tight">
            HONORS &amp; <span className="text-gradient-cinematic">LEADERSHIP</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#E8EDF7]/70 font-sans max-w-xl mx-auto">
            Hackathon participation, team coordination, campus event leadership, and continuous learning.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 via-[#00E5FF] to-[#A855F7] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2x2 Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.achievements.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => soundFx.playHover()}
              className="group relative rounded-3xl glass-panel border border-white/10 hover:border-[#00E5FF]/40 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-blue flex flex-col justify-between text-left"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#050510] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[item.icon] || <Sparkles className="w-6 h-6 text-[#00E5FF]" />}
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-[#E8EDF7]/70">
                    {item.type}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#E8EDF7] group-hover:text-[#00E5FF] transition-colors">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="font-mono text-xs text-[#00E5FF] mt-1 font-semibold">
                    {item.subtitle}
                  </p>
                )}
                {item.date && (
                  <p className="font-mono text-[11px] text-[#E8EDF7]/50 mt-1">
                    {item.date}
                  </p>
                )}

                {/* Narrative */}
                <p className="mt-3 text-xs sm:text-sm text-[#E8EDF7]/80 leading-relaxed font-sans mb-5">
                  {item.description}
                </p>

                {/* Bullets */}
                <div className="space-y-2 mb-4">
                  {item.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#E8EDF7]/85 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-[#E8EDF7]/50">
                <span>Verified Contribution</span>
                <span className="text-[#00E5FF]">✦ Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
