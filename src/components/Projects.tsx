import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Layers,
  Terminal,
  X,
  Sparkles,
  Smartphone,
  Monitor,
  CheckCircle,
  Calendar,
  AlertCircle,
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-[#287BFF]/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-mono tracking-widest uppercase mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>03 // FEATURED WORK</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#E8EDF7] tracking-tight">
            PROJECT <span className="text-gradient-cinematic">SHOWCASE</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#E8EDF7]/70 font-sans max-w-xl mx-auto">
            Practical software development, academic implementations, and hackathon problem solving.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00E5FF] via-[#287BFF] to-[#A855F7] mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Showcase List */}
        <div className="space-y-16">
          {PORTFOLIO_DATA.projects.map((project, index) => {
            const isApsrtc = project.id === 'apsrtc-complaint-system';

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl glass-panel border border-white/10 hover:border-[#00E5FF]/40 transition-all duration-500 overflow-hidden shadow-2xl"
              >
                {/* Glow border on hover */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#00E5FF]/20 via-[#287BFF]/20 to-[#A855F7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
                  {/* Left Column: Interactive UI Mockup */}
                  <div className="lg:col-span-6 relative">
                    <div className="relative rounded-2xl overflow-hidden bg-[#070B16] border border-white/10 p-5 shadow-2xl group-hover:border-[#00E5FF]/30 transition-colors">
                      {/* Window HUD Bar */}
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-mono text-[#E8EDF7]/60">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                          <span className="ml-2 text-[11px] text-[#00E5FF]">
                            {isApsrtc ? 'apsrtc-system.local' : 'android-hackathon.build'}
                          </span>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider">
                          {isApsrtc ? 'Web Portal' : 'Mobile Sprint'}
                        </span>
                      </div>

                      {/* Mockup Display */}
                      {isApsrtc ? (
                        <div className="space-y-3 font-mono text-xs">
                          {/* Portal Header */}
                          <div className="p-3.5 rounded-xl bg-[#0B1020] border border-[#00E5FF]/30 flex items-center justify-between">
                            <div>
                              <p className="text-[10px] text-[#00E5FF] font-bold">APSRTC PASSENGER PORTAL</p>
                              <p className="text-xs text-[#E8EDF7] font-semibold">Complaint &amp; Tracking Center</p>
                            </div>
                            <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                              System Online
                            </span>
                          </div>

                          {/* Mock Complaint Card */}
                          <div className="p-3.5 rounded-xl bg-[#050510] border border-white/10 space-y-2">
                            <div className="flex justify-between items-center text-[11px]">
                              <span className="text-[#E8EDF7]/60">Tracking ID: #APSRTC-9281</span>
                              <span className="text-amber-400 font-bold">Under Review</span>
                            </div>
                            <p className="text-[#E8EDF7]/90 text-[11px]">
                              Route 401A Passenger Feedback: Air conditioning status reported.
                            </p>
                            <div className="flex gap-2 pt-1 text-[10px] text-[#00E5FF]">
                              <span>• Category: In-transit</span>
                              <span>• Priority: Normal</span>
                            </div>
                          </div>

                          {/* Officer-Side Action Preview */}
                          <div className="p-3 rounded-xl bg-[#0B1020]/90 border border-[#7955FF]/30 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Monitor className="w-4 h-4 text-[#7955FF]" />
                              <span className="text-[11px] text-[#E8EDF7]">Officer Dispatch Resolution Console</span>
                            </div>
                            <span className="text-[10px] text-[#A855F7] font-bold">Role: Officer</span>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3 font-mono text-xs">
                          {/* Mobile Hackathon Preview */}
                          <div className="p-3.5 rounded-xl bg-[#0B1020] border border-[#A855F7]/30 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <Smartphone className="w-5 h-5 text-[#00E5FF]" />
                              <div>
                                <p className="text-[10px] text-[#A855F7] font-bold">ANDROID WORKSPACE</p>
                                <p className="text-xs text-[#E8EDF7] font-semibold">5-Day Live Sprint Challenge</p>
                              </div>
                            </div>
                            <span className="px-2 py-0.5 rounded text-[10px] bg-[#287BFF]/20 text-[#00E5FF] border border-[#287BFF]/30">
                              Completed
                            </span>
                          </div>

                          <div className="p-3.5 rounded-xl bg-[#050510] border border-white/10 space-y-2 text-[11px]">
                            <div className="flex justify-between text-[#E8EDF7]/60">
                              <span>Sprint Date</span>
                              <span className="text-[#E8EDF7]">30 Sep – 04 Oct 2024</span>
                            </div>
                            <div className="flex justify-between text-[#E8EDF7]/60">
                              <span>Focus Area</span>
                              <span className="text-[#00E5FF]">Practical Android Problem Solving</span>
                            </div>
                            <div className="flex justify-between text-[#E8EDF7]/60">
                              <span>Stack</span>
                              <span className="text-[#A855F7]">Java, XML Layouts, Android Studio</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Project Info & Actions */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      {/* Category & Date */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30">
                          {project.category}
                        </span>
                        {project.date && (
                          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-[#E8EDF7]/70 border border-white/10">
                            <Calendar className="w-3 h-3 text-[#A855F7]" />
                            <span>{project.date}</span>
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#E8EDF7] mb-3 group-hover:text-[#00E5FF] transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[#E8EDF7]/80 leading-relaxed font-sans mb-5">
                        {project.description}
                      </p>

                      {/* Core Features List */}
                      <div className="space-y-2 mb-6">
                        {project.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#E8EDF7]/85">
                            <CheckCircle className="w-4 h-4 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies Used */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#050510] border border-white/10 text-[#E8EDF7]/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Button CTAs */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                      <button
                        onClick={() => {
                          soundFx.playClick();
                          setSelectedProject(project);
                        }}
                        className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase text-[#050510] bg-gradient-to-r from-[#00E5FF] to-[#287BFF] hover:shadow-glow-cyan transition-all hover:scale-105"
                      >
                        View Project Details
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => soundFx.playClick()}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase text-[#E8EDF7] bg-[#0B1020] border border-white/15 hover:border-[#00E5FF]/50 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub Profile</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050510]/85 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel-glow rounded-3xl border border-[#00E5FF]/40 p-6 sm:p-8 bg-[#0B1020] text-left">
            {/* Close Button */}
            <button
              onClick={() => {
                soundFx.playClick();
                setSelectedProject(null);
              }}
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 text-[#E8EDF7]/70 hover:text-[#E8EDF7] hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-12">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30">
                {selectedProject.category}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#E8EDF7] mt-3">
                {selectedProject.title}
              </h3>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base text-[#E8EDF7]/80 leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Features Breakdown */}
            <div className="mt-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#00E5FF] font-bold mb-3">
                Key Functional Modules &amp; Features:
              </h4>
              <div className="space-y-2">
                {selectedProject.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#E8EDF7]/85">
                    <CheckCircle className="w-4 h-4 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Highlights & Architecture */}
            <div className="mt-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#A855F7] font-bold mb-3">
                Engineering Highlights:
              </h4>
              <div className="space-y-2">
                {selectedProject.highlights.map((high, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#E8EDF7]/85">
                    <Sparkles className="w-4 h-4 text-[#A855F7] flex-shrink-0 mt-0.5" />
                    <span>{high}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#E8EDF7]/60 font-bold mb-2">
                Technology Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-[#050510] border border-[#00E5FF]/30 text-[#00E5FF]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Verified Note */}
            <div className="mt-8 p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5 text-xs font-mono text-[#E8EDF7]/60">
              <AlertCircle className="w-4 h-4 text-[#FF8A36]" />
              <span>Project verified against candidate resume records. Code repository available on GitHub.</span>
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-6 flex justify-end gap-3">
              <a
                href={selectedProject.githubUrl || PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase text-[#050510] bg-[#00E5FF] hover:bg-[#287BFF] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
