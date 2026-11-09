import React, { useState } from 'react';
import {
  Code,
  Layers,
  Database,
  Wrench,
  Sparkles,
  Terminal,
  Cpu,
  Layout,
  Palette,
  FileCode,
  HardDrive,
  GitBranch,
  Github,
  Server,
  FileSpreadsheet,
  CheckCircle2,
  Search,
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'languages' | 'web' | 'database' | 'tools'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const iconMap: Record<string, React.ReactNode> = {
    Coffee: <Cpu className="w-6 h-6 text-[#00E5FF]" />,
    Cpu: <Cpu className="w-6 h-6 text-[#287BFF]" />,
    Terminal: <Terminal className="w-6 h-6 text-[#A855F7]" />,
    Layout: <Layout className="w-6 h-6 text-[#FF8A36]" />,
    Palette: <Palette className="w-6 h-6 text-[#00E5FF]" />,
    Code2: <Code className="w-6 h-6 text-[#287BFF]" />,
    FileCode: <FileCode className="w-6 h-6 text-[#A855F7]" />,
    Database: <Database className="w-6 h-6 text-[#00E5FF]" />,
    HardDrive: <HardDrive className="w-6 h-6 text-[#287BFF]" />,
    GitBranch: <GitBranch className="w-6 h-6 text-[#FF8A36]" />,
    Github: <Github className="w-6 h-6 text-[#E8EDF7]" />,
    Server: <Server className="w-6 h-6 text-[#A855F7]" />,
    FileSpreadsheet: <FileSpreadsheet className="w-6 h-6 text-[#00E5FF]" />,
  };

  const filteredSkills = PORTFOLIO_DATA.skills.filter((skill) => {
    const matchesTab = activeTab === 'all' || skill.category === activeTab;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const categoryMeta = {
    all: { label: 'All Stack', count: PORTFOLIO_DATA.skills.length },
    languages: { label: 'Programming Languages', count: 3 },
    web: { label: 'Web Technologies', count: 4 },
    database: { label: 'Databases', count: 2 },
    tools: { label: 'Tools & Platforms', count: 4 },
  };

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-[#7955FF]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7955FF]/15 border border-[#7955FF]/30 text-[#A855F7] text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 // SKILL UNIVERSE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#E8EDF7] tracking-tight">
            TECHNICAL <span className="text-gradient-purple">SKILLS</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#E8EDF7]/70 font-sans max-w-xl mx-auto">
            Foundational programming, web engineering, database architectures, and development toolsets.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#7955FF] to-[#00E5FF] mx-auto mt-4 rounded-full" />
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Tab Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#0B1020]/90 border border-white/10 backdrop-blur-md">
            {(Object.keys(categoryMeta) as (keyof typeof categoryMeta)[]).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  soundFx.playClick();
                  setActiveTab(tab);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-[#287BFF] to-[#7955FF] text-[#E8EDF7] font-bold shadow-glow-purple'
                    : 'text-[#E8EDF7]/70 hover:text-[#E8EDF7] hover:bg-white/5'
                }`}
              >
                {categoryMeta[tab].label} ({categoryMeta[tab].count})
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#E8EDF7]/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0B1020]/80 border border-white/10 text-xs font-mono text-[#E8EDF7] placeholder:text-[#E8EDF7]/40 focus:outline-none focus:border-[#00E5FF]/60 transition-colors"
            />
          </div>
        </div>

        {/* 3D Skills Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            const isCertified = skill.level === 'Certified';
            const isProficient = skill.level === 'Proficient';

            return (
              <div
                key={skill.name}
                onMouseEnter={() => soundFx.playHover()}
                className="group relative p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#00E5FF]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-cyan flex flex-col justify-between"
              >
                {/* Top Row: Icon + Level Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#050510] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:border-[#00E5FF]/40">
                      {iconMap[skill.icon] || <Code className="w-6 h-6 text-[#00E5FF]" />}
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wider font-semibold border ${
                        isCertified
                          ? 'bg-amber-500/10 border-amber-500/40 text-amber-400'
                          : isProficient
                          ? 'bg-[#00E5FF]/10 border-[#00E5FF]/40 text-[#00E5FF]'
                          : 'bg-[#287BFF]/10 border-[#287BFF]/40 text-[#287BFF]'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="font-display text-xl font-bold text-[#E8EDF7] group-hover:text-[#00E5FF] transition-colors">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs text-[#E8EDF7]/70 leading-relaxed font-sans">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom Indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#E8EDF7]/50">
                  <span className="uppercase tracking-wider">{skill.category}</span>
                  <div className="flex items-center gap-1.5 text-[#00E5FF]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                    <span>Active Skill</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Strengths Banner */}
        <div className="mt-16 glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <p className="font-mono text-xs text-[#00E5FF] uppercase tracking-widest mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
                <span>INTERPERSONAL &amp; COGNITIVE STRENGTHS</span>
              </p>
              <h3 className="font-display text-2xl font-bold text-[#E8EDF7]">
                Workplace Strengths &amp; Professional Mindset
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {PORTFOLIO_DATA.strengths.map((str) => (
                <div
                  key={str.name}
                  className="px-4 py-2 rounded-xl bg-[#0B1020] border border-white/10 text-xs font-mono text-[#E8EDF7] hover:border-[#A855F7]/50 hover:text-[#00E5FF] transition-colors"
                  title={str.desc}
                >
                  <span className="text-[#00E5FF] mr-1.5">✦</span>
                  <span className="font-semibold">{str.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
