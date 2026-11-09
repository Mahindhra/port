import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  Terminal,
  MapPin,
  Mail,
  Phone,
  Code2,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export const About: React.FC = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#00E5FF]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-mono tracking-widest uppercase mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // DIGITAL IDENTITY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#E8EDF7] tracking-tight">
            ABOUT <span className="text-gradient-cyan">ME</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00E5FF] to-[#287BFF] mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Grid: Profile Visuals + Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: 3D Floating Profile Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              className="relative perspective-1000 group"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Outer Glowing Holographic Backplate */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#00E5FF] via-[#287BFF] to-[#A855F7] rounded-3xl opacity-30 group-hover:opacity-75 blur-xl transition-all duration-500" />

              {/* 3D Tilted Card */}
              <div
                className="relative w-[290px] sm:w-[350px] aspect-[4/5] rounded-2xl overflow-hidden glass-panel border border-[#00E5FF]/30 p-3 shadow-2xl transition-transform duration-200 ease-out"
                style={{
                  transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Profile Image with subtle zoom */}
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0B1020]">
                  <img
                    src={PORTFOLIO_DATA.personal.profileImage}
                    alt="Doddi Mahindhra"
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Glass Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-80" />

                  {/* Holographic Watermark Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0B1020]/90 border border-white/10 backdrop-blur-md">
                    <p className="font-display font-bold text-sm text-[#E8EDF7]">
                      {PORTFOLIO_DATA.personal.name}
                    </p>
                    <p className="font-mono text-xs text-[#00E5FF]">
                      MCA Candidate • Aditya PG College
                    </p>
                    <div className="flex items-center gap-2 mt-1 text-[11px] text-[#E8EDF7]/60">
                      <MapPin className="w-3 h-3 text-[#FF8A36]" />
                      <span>Visakhapatnam, AP, India</span>
                    </div>
                  </div>

                  {/* Live Status Pip */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#050510]/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>AVAILABLE</span>
                  </div>
                </div>
              </div>

              {/* Floating tech badge */}
              <div className="absolute -bottom-5 -right-5 glass-panel-glow px-4 py-2.5 rounded-xl hidden sm:flex items-center gap-2 border border-[#A855F7]/40 text-xs font-mono">
                <Code2 className="w-4 h-4 text-[#A855F7]" />
                <span className="text-[#E8EDF7]">Full-Stack Aspirant</span>
              </div>
            </div>
          </div>

          {/* Right: Biography, Actual Highlights & Key Values */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            {/* Biography Glass Panel */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/5 rounded-bl-full pointer-events-none" />

              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#E8EDF7] mb-4 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#00E5FF]" />
                <span>Creative Mind. Technical Thinking.</span>
              </h3>

              <p className="text-base sm:text-lg text-[#E8EDF7]/90 leading-relaxed font-sans mb-4">
                I am <strong className="text-[#00E5FF] font-semibold">DODDI MAHINDHRA</strong>, an
                aspiring software developer currently pursuing a{' '}
                <strong className="text-[#E8EDF7] font-semibold">Master of Computer Applications (MCA)</strong>{' '}
                at Aditya Degree &amp; PG College, Visakhapatnam.
              </p>

              <p className="text-sm sm:text-base text-[#E8EDF7]/80 leading-relaxed font-sans mb-4">
                I have foundational knowledge of <span className="text-[#00E5FF]">Java</span>,{' '}
                <span className="text-[#00E5FF]">C</span>, <span className="text-[#00E5FF]">Python</span>,{' '}
                <span className="text-[#287BFF]">HTML</span>, <span className="text-[#287BFF]">CSS</span>,{' '}
                <span className="text-[#287BFF]">JavaScript</span>, <span className="text-[#287BFF]">XML</span>,{' '}
                <span className="text-[#A855F7]">SQL</span> and <span className="text-[#A855F7]">MySQL</span>.
              </p>

              <p className="text-sm sm:text-base text-[#E8EDF7]/80 leading-relaxed font-sans">
                I am passionate about software development, problem-solving, emerging technologies,
                and creating meaningful digital solutions. I continuously work on improving my
                technical knowledge and developing practical applications.
              </p>
            </div>

            {/* Truthful Academic & Experiential Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PORTFOLIO_DATA.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-panel p-4 rounded-xl border border-white/10 hover:border-[#00E5FF]/40 transition-colors text-center"
                >
                  <p className="font-mono text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#287BFF]">
                    {stat.value}
                  </p>
                  <p className="font-display font-semibold text-xs text-[#E8EDF7] mt-1">
                    {stat.label}
                  </p>
                  <p className="font-mono text-[10px] text-[#E8EDF7]/50 mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Core Competencies Badges */}
            <div className="glass-panel p-5 rounded-xl border border-white/10">
              <p className="font-mono text-xs text-[#00E5FF] uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
                <span>VERIFIED PROFESSIONAL ATTRIBUTES</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PORTFOLIO_DATA.strengths.slice(0, 4).map((str) => (
                  <div key={str.name} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-xs text-[#E8EDF7]">{str.name}: </span>
                      <span className="text-xs text-[#E8EDF7]/70">{str.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Connect Ribbon */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#E8EDF7]/70">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex items-center gap-2 hover:text-[#00E5FF] transition-colors"
                onClick={() => soundFx.playClick()}
              >
                <Mail className="w-4 h-4 text-[#00E5FF]" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>
              <span className="text-white/20 hidden sm:inline">•</span>
              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                className="flex items-center gap-2 hover:text-[#00E5FF] transition-colors"
                onClick={() => soundFx.playClick()}
              >
                <Phone className="w-4 h-4 text-[#287BFF]" />
                <span>{PORTFOLIO_DATA.personal.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
