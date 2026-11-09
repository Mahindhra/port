import React, { useEffect, useRef, useState } from 'react';
import { FastForward, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [phase, setPhase] = useState<'dark' | 'sphere' | 'text' | 'sweep' | 'exit'>('dark');
  const [isExiting, setIsExiting] = useState(false);

  const handleSkip = () => {
    setIsExiting(true);
    soundFx.playClick();
    setTimeout(() => {
      sessionStorage.setItem('dm_intro_done', 'true');
      onComplete();
    }, 400);
  };

  useEffect(() => {
    // Phase timing (< 3.8s total)
    const t1 = setTimeout(() => setPhase('sphere'), 400);
    const t2 = setTimeout(() => setPhase('text'), 1200);
    const t3 = setTimeout(() => setPhase('sweep'), 2000);
    const t4 = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        sessionStorage.setItem('dm_intro_done', 'true');
        onComplete();
      }, 500);
    }, 3600);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Canvas particle & energy waves animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles: { x: number; y: number; r: number; color: string; vx: number; vy: number; alpha: number }[] = [];
    const colors = ['#00E5FF', '#287BFF', '#7955FF', '#A855F7', '#FF8A36'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: width / 2 + (Math.random() - 0.5) * 200,
        y: height / 2 + (Math.random() - 0.5) * 200,
        r: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        alpha: Math.random() * 0.8 + 0.2,
      });
    }

    let frame = 0;
    let animId: number;

    const render = () => {
      frame++;
      ctx.fillStyle = 'rgba(5, 5, 16, 0.25)';
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw expanding energy waves
      const waveRadius = ((frame * 2.5) % Math.max(width, height)) * 0.7;
      const waveGradient = ctx.createRadialGradient(centerX, centerY, waveRadius * 0.8, centerX, centerY, waveRadius);
      waveGradient.addColorStop(0, 'rgba(40, 123, 255, 0)');
      waveGradient.addColorStop(0.5, 'rgba(0, 229, 255, 0.12)');
      waveGradient.addColorStop(1, 'rgba(121, 85, 255, 0)');

      ctx.beginPath();
      ctx.arc(centerX, centerY, waveRadius, 0, Math.PI * 2);
      ctx.strokeStyle = waveGradient;
      ctx.lineWidth = 3;
      ctx.stroke();

      // 3D wireframe spinning holographic core in center
      const coreRadius = Math.min(width, height) * 0.15;
      const angle = frame * 0.03;

      ctx.save();
      ctx.translate(centerX, centerY);

      // Rotating elliptical rings
      for (let r = 0; r < 3; r++) {
        ctx.save();
        ctx.rotate(angle + (r * Math.PI) / 3);
        ctx.beginPath();
        ctx.ellipse(0, 0, coreRadius * (0.8 + r * 0.15), coreRadius * 0.35, angle * (r % 2 === 0 ? 1 : -1), 0, Math.PI * 2);
        ctx.strokeStyle = r === 0 ? 'rgba(0, 229, 255, 0.5)' : r === 1 ? 'rgba(121, 85, 255, 0.45)' : 'rgba(40, 123, 255, 0.35)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
      }

      ctx.restore();

      // Particle simulation
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Gravitational pull towards center
        const dx = centerX - p.x;
        const dy = centerY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 10) {
          p.vx += (dx / dist) * 0.04;
          p.vy += (dy / dist) * 0.04;
        }

        p.vx *= 0.99;
        p.vy *= 0.99;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050510] transition-all duration-700 select-none ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Radial overlay */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" style={{
        background: 'radial-gradient(circle at center, transparent 30%, rgba(5, 5, 16, 0.85) 100%)'
      }} />

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-8 right-8 z-20 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-widest text-[#E8EDF7]/70 hover:text-[#00E5FF] bg-[#0B1020]/80 border border-white/10 hover:border-[#00E5FF]/40 backdrop-blur-md transition-all shadow-lg hover:shadow-cyan-500/20"
      >
        <span>SKIP INTRO</span>
        <FastForward className="w-3.5 h-3.5 text-[#00E5FF]" />
      </button>

      {/* Center Cinematic Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl flex flex-col items-center">
        {/* Futuristic Status Badge */}
        <div
          className={`flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-[11px] font-mono tracking-widest mb-6 transition-all duration-700 ${
            phase !== 'dark' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Sparkles className="w-3 h-3 animate-spin-slow" />
          <span>INITIALIZING DIGITAL MATRIX</span>
        </div>

        {/* Name Reveal */}
        <div className="relative overflow-hidden py-2">
          <h1
            className={`font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#E8EDF7] to-[#A855F7] transition-all duration-1000 ${
              phase === 'text' || phase === 'sweep' || phase === 'exit'
                ? 'opacity-100 translate-y-0 filter-none'
                : 'opacity-0 translate-y-8 blur-md'
            }`}
          >
            DODDI MAHINDHRA
          </h1>

          {/* Light Sweep Beam */}
          {phase === 'sweep' && (
            <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] animate-[light-sweep_1.5s_ease-out]" />
          )}
        </div>

        {/* Subtitle Reveal */}
        <div className="mt-4 overflow-hidden">
          <p
            className={`font-mono text-xs sm:text-sm md:text-base tracking-[0.35em] text-[#00E5FF] font-semibold uppercase transition-all duration-700 delay-300 ${
              phase === 'text' || phase === 'sweep' || phase === 'exit'
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            ASPIRING SOFTWARE DEVELOPER
          </p>
        </div>

        {/* Coordinates / Details */}
        <p
          className={`mt-3 font-mono text-[11px] text-[#E8EDF7]/50 tracking-widest transition-all duration-700 delay-500 ${
            phase === 'sweep' || phase === 'exit' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          VISAKHAPATNAM, ANDHRA PRADESH, INDIA • MCA CANDIDATE
        </p>

        {/* Loading Progress Bar */}
        <div className="w-48 h-0.5 bg-white/10 rounded-full mt-8 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#00E5FF] to-[#A855F7] animate-[light-sweep_3.5s_infinite]" />
        </div>
      </div>
    </div>
  );
};
