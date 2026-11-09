import React, { useState, useEffect } from 'react';
import { CinematicIntro } from './components/CinematicIntro';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { ParticleBackground } from './components/ParticleBackground';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState<boolean>(true);

  useEffect(() => {
    // Check if intro was already viewed during this session
    const viewed = sessionStorage.getItem('dm_intro_done');
    if (viewed === 'true') {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('dm_intro_done', 'true');
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  return (
    <div className="relative min-h-screen bg-[#050510] text-[#E8EDF7] overflow-x-hidden selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
      {/* Cinematic Intro Animation */}
      {showIntro && <CinematicIntro onComplete={handleIntroComplete} />}

      {/* Custom Glowing Cursor (Desktop only) */}
      <CustomCursor />

      {/* Ambient Particle and Matrix Background */}
      <ParticleBackground />

      {/* Fixed Glass Navigation */}
      <Navbar onReplayIntro={handleReplayIntro} />

      {/* Main Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero3D />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Interests />
        <Contact />
      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
};

export default App;
