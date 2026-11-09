import React, { useState } from 'react';
import { Award, ShieldCheck, Cpu, Languages, FileSpreadsheet, RotateCcw, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export const Certifications: React.FC = () => {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    soundFx.playClick();
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-8 h-8 text-[#00E5FF]" />,
    Languages: <Languages className="w-8 h-8 text-[#A855F7]" />,
    FileSpreadsheet: <FileSpreadsheet className="w-8 h-8 text-[#FF8A36]" />,
  };

  return (
    <section id="certifications" className="relative py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#7955FF]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A855F7]/15 border border-[#A855F7]/30 text-[#A855F7] text-xs font-mono tracking-widest uppercase mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>06 // CREDENTIALS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#E8EDF7] tracking-tight">
            VERIFIED <span className="text-gradient-purple">CERTIFICATIONS</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#E8EDF7]/70 font-sans max-w-xl mx-auto">
            Interactive 3D certificates demonstrating verified technical foundations and language competency.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#A855F7] to-[#00E5FF] mx-auto mt-4 rounded-full" />
        </div>

        {/* 3D Flip Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.certifications.map((cert) => {
            const isFlipped = !!flipped[cert.id];

            return (
              <div
                key={cert.id}
                className="perspective-1000 h-[360px] cursor-pointer group"
                onClick={() => toggleFlip(cert.id)}
                onMouseEnter={() => soundFx.playHover()}
              >
                <div
                  className={`relative w-full h-full duration-700 preserve-3d transition-transform ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* FRONT FACE */}
                  <div className="absolute inset-0 backface-hidden rounded-3xl glass-panel border border-white/10 group-hover:border-[#00E5FF]/40 p-7 flex flex-col justify-between shadow-xl group-hover:shadow-glow-purple transition-all">
                    {/* Top Seal */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-[#050510] border border-white/10 flex items-center justify-center">
                        {iconMap[cert.icon] || <Award className="w-8 h-8 text-[#00E5FF]" />}
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>VERIFIED</span>
                      </div>
                    </div>

                    {/* Middle Info */}
                    <div className="my-auto text-left">
                      <span className="font-mono text-xs text-[#00E5FF] font-semibold tracking-wider">
                        {cert.issuer}
                      </span>
                      <h3 className="font-display text-xl font-bold text-[#E8EDF7] mt-1 group-hover:text-[#00E5FF] transition-colors">
                        {cert.title}
                      </h3>
                      <p className="mt-2 text-xs text-[#E8EDF7]/70 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    {/* Bottom Hint */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-[#E8EDF7]/50">
                      <span>{cert.credentialBadge}</span>
                      <span className="flex items-center gap-1 text-[#00E5FF] group-hover:underline">
                        <RotateCcw className="w-3 h-3" />
                        <span>Flip Card</span>
                      </span>
                    </div>
                  </div>

                  {/* BACK FACE (Detailed view) */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl bg-[#0B1020] border border-[#00E5FF]/40 p-7 flex flex-col justify-between shadow-2xl text-left">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs text-[#A855F7] font-bold uppercase tracking-wider">
                          CREDENTIAL METRICS
                        </span>
                        <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] text-[10px] font-mono">
                          <Sparkles className="w-3 h-3" />
                          <span>AUTHENTICATED</span>
                        </div>
                      </div>

                      <h4 className="font-display text-lg font-bold text-[#E8EDF7] mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[#E8EDF7]/80 leading-relaxed mb-4">
                        Certified completion and evaluation in accordance with recognized curriculum benchmarks.
                      </p>

                      <div className="space-y-2 text-xs font-mono text-[#E8EDF7]/70">
                        <div className="flex justify-between border-b border-white/5 pb-1">
                          <span>Issuing Authority</span>
                          <span className="text-[#00E5FF]">{cert.issuer}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-1">
                          <span>Classification</span>
                          <span className="text-[#E8EDF7]">{cert.credentialBadge}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-1">
                          <span>Status</span>
                          <span className="text-emerald-400">Awarded</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-[#E8EDF7]/50">
                      <span>Click anywhere to flip back</span>
                      <RotateCcw className="w-3.5 h-3.5 text-[#00E5FF]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
