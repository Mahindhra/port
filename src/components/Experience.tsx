import React from 'react';
import { Cloud, Brain, Briefcase, Calendar, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-[#A855F7]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#287BFF]/15 border border-[#287BFF]/30 text-[#00E5FF] text-xs font-mono tracking-widest uppercase mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 // INDUSTRY EXPOSURE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#E8EDF7] tracking-tight">
            INTERNSHIP <span className="text-gradient-cyan">EXPERIENCE</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#E8EDF7]/70 font-sans max-w-xl mx-auto">
            Practical learning programs and specialized hands-on technical training.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#287BFF] to-[#00E5FF] mx-auto mt-4 rounded-full" />
        </div>

        {/* Vertical Animated Timeline */}
        <div className="relative">
          {/* Vertical Central Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#00E5FF] via-[#7955FF] to-[#287BFF] transform md:-translate-x-1/2 opacity-40" />

          {/* Internship Nodes */}
          <div className="space-y-16">
            {PORTFOLIO_DATA.internships.map((internship, index) => {
              const isEven = index % 2 === 0;
              const isAws = internship.id === 'aws-cloud';

              return (
                <div
                  key={internship.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-8 group`}
                >
                  {/* Central Node Pulse Marker */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-[#050510] border-2 border-[#00E5FF] flex items-center justify-center z-10 shadow-[0_0_15px_#00E5FF]">
                    <div className="w-3 h-3 rounded-full bg-[#00E5FF] group-hover:scale-125 transition-transform" />
                  </div>

                  {/* Empty side for balanced spacing on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Content Side */}
                  <div className="ml-12 md:ml-0 md:w-1/2 pl-0 md:px-8">
                    <div
                      onMouseEnter={() => soundFx.playHover()}
                      className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-[#00E5FF]/40 transition-all duration-300 hover:shadow-glow-cyan text-left"
                    >
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-9 h-9 rounded-xl bg-[#050510] border border-white/10 flex items-center justify-center">
                            {isAws ? (
                              <Cloud className="w-5 h-5 text-[#FF8A36]" />
                            ) : (
                              <Brain className="w-5 h-5 text-[#A855F7]" />
                            )}
                          </div>
                          <div>
                            <span className="font-display font-bold text-sm text-[#00E5FF]">
                              {internship.organization}
                            </span>
                            <span className="block font-mono text-[10px] text-[#E8EDF7]/50 uppercase">
                              {internship.duration}
                            </span>
                          </div>
                        </div>

                        <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/5 border border-white/10 text-[#E8EDF7]/70">
                          {internship.id === 'aws-cloud' ? 'Cloud Computing' : 'AI & ML'}
                        </span>
                      </div>

                      {/* Internship Role Title */}
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#E8EDF7] mb-2 group-hover:text-[#00E5FF] transition-colors">
                        {internship.role}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#E8EDF7]/80 leading-relaxed mb-5">
                        {internship.description}
                      </p>

                      {/* Key Learnings List */}
                      <div className="space-y-2 mb-6">
                        <p className="font-mono text-[11px] uppercase tracking-wider text-[#A855F7] font-semibold">
                          Core Exposure &amp; Key Focus Areas:
                        </p>
                        {internship.learnings.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#E8EDF7]/85">
                            <ChevronRight className="w-3.5 h-3.5 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology / Topic Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                        {internship.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#050510] text-[#00E5FF] border border-[#00E5FF]/20"
                          >
                            #{skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
