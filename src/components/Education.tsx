import React from 'react';
import { GraduationCap, Award, BookOpen, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#00E5FF]/5 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-mono tracking-widest uppercase mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>05 // ACADEMIC RECORD</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#E8EDF7] tracking-tight">
            FORMAL <span className="text-gradient-cyan">EDUCATION</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#E8EDF7]/70 font-sans max-w-xl mx-auto">
            Academic milestones from secondary education through advanced postgraduate computer applications.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00E5FF] to-[#287BFF] mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.education.map((item, idx) => {
            const isPursuing = item.scoreType === 'Pursuing';
            const isHighSsc = item.scoreType === 'Percentage';

            return (
              <div
                key={item.degree}
                onMouseEnter={() => soundFx.playHover()}
                className="group relative rounded-3xl glass-panel border border-white/10 hover:border-[#00E5FF]/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-cyan text-left"
              >
                {/* Glowing Top Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#050510] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#00E5FF]/40 transition-all">
                    {idx === 0 ? (
                      <GraduationCap className="w-6 h-6 text-[#00E5FF]" />
                    ) : idx === 1 ? (
                      <BookOpen className="w-6 h-6 text-[#287BFF]" />
                    ) : (
                      <Award className="w-6 h-6 text-[#FF8A36]" />
                    )}
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                      isPursuing
                        ? 'bg-[#00E5FF]/10 text-[#00E5FF] border-[#00E5FF]/30'
                        : isHighSsc
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                        : 'bg-[#A855F7]/10 text-[#A855F7] border-[#A855F7]/30'
                    }`}
                  >
                    {item.statusOrScore}
                  </span>
                </div>

                {/* Degree & Field */}
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#E8EDF7] group-hover:text-[#00E5FF] transition-colors leading-snug">
                    {item.degree}
                  </h3>

                  {item.field && (
                    <p className="mt-1 font-mono text-xs text-[#00E5FF] font-medium">
                      {item.field}
                    </p>
                  )}

                  {/* Institution & Location */}
                  <div className="mt-4 space-y-1 text-xs text-[#E8EDF7]/70 font-sans">
                    <p className="font-semibold text-[#E8EDF7]">{item.institution}</p>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#E8EDF7]/50 font-mono">
                      <MapPin className="w-3 h-3 text-[#FF8A36]" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Course Details */}
                  {item.details && (
                    <p className="mt-4 text-xs text-[#E8EDF7]/70 leading-relaxed">
                      {item.details}
                    </p>
                  )}
                </div>

                {/* Score Summary Box */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs">
                  <span className="text-[#E8EDF7]/50">Evaluation:</span>
                  <span className="font-bold text-[#00E5FF]">
                    {item.scoreType}: {item.scoreValue}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
