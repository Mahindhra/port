import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

interface NavbarProps {
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSoundMuted, setIsSoundMuted] = useState(soundFx.getMuted());

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section intersection detection
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = soundFx.toggleMute();
    setIsSoundMuted(!active);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#050510]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-950/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Monogram Brand Logo */}
        <a
          href="#home"
          onClick={() => soundFx.playClick()}
          className="flex items-center gap-3 group"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#0B1020] border border-[#00E5FF]/40 group-hover:border-[#00E5FF] group-hover:shadow-glow-cyan transition-all duration-300">
            <span className="font-display font-black text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#A855F7]">
              {PORTFOLIO_DATA.personal.shortName}
            </span>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-display font-bold text-sm tracking-wider text-[#E8EDF7] group-hover:text-[#00E5FF] transition-colors">
              DODDI MAHINDHRA
            </span>
            <span className="font-mono text-[10px] text-[#E8EDF7]/50 tracking-widest uppercase">
              DEV PORTFOLIO
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#0B1020]/60 border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-[#00E5FF] font-bold bg-[#00E5FF]/10 shadow-[0_0_12px_rgba(0,229,255,0.2)]'
                    : 'text-[#E8EDF7]/70 hover:text-[#E8EDF7] hover:bg-white/5'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[#00E5FF] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Sound FX Button */}
          <button
            onClick={toggleSound}
            aria-label={isSoundMuted ? "Enable sound effects" : "Mute sound effects"}
            className="p-2 rounded-xl bg-[#0B1020]/80 border border-white/10 hover:border-[#00E5FF]/40 text-[#E8EDF7]/70 hover:text-[#00E5FF] transition-colors"
            title={isSoundMuted ? "Enable audio effects" : "Mute audio"}
          >
            {isSoundMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#00E5FF]" />}
          </button>

          {/* Replay Intro Button */}
          {onReplayIntro && (
            <button
              onClick={() => {
                soundFx.playClick();
                onReplayIntro();
              }}
              aria-label="Replay Cinematic Intro"
              title="Replay Cinematic Intro"
              className="p-2 rounded-xl bg-[#0B1020]/80 border border-white/10 hover:border-[#A855F7]/40 text-[#E8EDF7]/70 hover:text-[#A855F7] transition-colors"
            >
              <Sparkles className="w-4 h-4" />
            </button>
          )}

          {/* Resume Download */}
          <a
            href={PORTFOLIO_DATA.personal.resumePath}
            download="Doddi_Mahindhra_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => soundFx.playClick()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase text-[#050510] bg-gradient-to-r from-[#00E5FF] to-[#287BFF] hover:shadow-glow-cyan hover:scale-105 transition-all duration-200"
          >
            <Download className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleSound}
            aria-label="Toggle Sound"
            className="p-2 rounded-lg bg-[#0B1020] border border-white/10 text-[#E8EDF7]/70"
          >
            {isSoundMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#00E5FF]" />}
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle Mobile Menu"
            className="p-2 rounded-lg bg-[#0B1020] border border-white/10 text-[#E8EDF7] hover:text-[#00E5FF]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#050510]/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    soundFx.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2.5 rounded-lg text-sm font-mono tracking-wider uppercase flex items-center justify-between ${
                    isActive
                      ? 'bg-[#00E5FF]/15 text-[#00E5FF] font-bold border-l-4 border-l-[#00E5FF]'
                      : 'text-[#E8EDF7]/80 hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="text-[10px] text-[#00E5FF]">• CURRENT</span>}
                </a>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={PORTFOLIO_DATA.personal.resumePath}
              download="Doddi_Mahindhra_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase text-[#050510] bg-gradient-to-r from-[#00E5FF] to-[#287BFF]"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>

            {onReplayIntro && (
              <button
                onClick={() => {
                  soundFx.playClick();
                  setMobileMenuOpen(false);
                  onReplayIntro();
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase text-[#E8EDF7]/70 border border-white/10"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#A855F7]" />
                <span>Replay Cinematic Intro</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
