import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Download, Sparkles, Send, Briefcase, Terminal } from 'lucide-react';
import * as THREE from 'three';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export const Hero3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [activeTaglineIdx, setActiveTaglineIdx] = useState(0);

  // Rotating Taglines
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTaglineIdx((prev) => (prev + 1) % PORTFOLIO_DATA.personal.taglines.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Three.js Interactive Holographic Sphere & Orbiting Rings
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Main Holographic Group
    const holoGroup = new THREE.Group();
    scene.add(holoGroup);

    // 1. Inner core glowing sphere
    const coreGeo = new THREE.SphereGeometry(1.2, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    holoGroup.add(coreMesh);

    // 2. Holographic Icosahedron Outer Cage
    const icoGeo = new THREE.IcosahedronGeometry(1.7, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x287bff,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    holoGroup.add(icoMesh);

    // 3. Dense Point Cloud around the sphere
    const pointCount = 500;
    const pointGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(pointCount * 3);
    const pColors = new Float32Array(pointCount * 3);

    const c1 = new THREE.Color(0x00e5ff);
    const c2 = new THREE.Color(0xa855f7);
    const c3 = new THREE.Color(0x287bff);

    for (let i = 0; i < pointCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.35 + Math.random() * 0.8;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const mixed = Math.random() > 0.5 ? (Math.random() > 0.5 ? c1 : c2) : c3;
      pColors[i * 3] = mixed.r;
      pColors[i * 3 + 1] = mixed.g;
      pColors[i * 3 + 2] = mixed.b;
    }

    pointGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));

    const pointMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const pointCloud = new THREE.Points(pointGeo, pointMat);
    holoGroup.add(pointCloud);

    // 4. Orbiting Rings (Electric Blue and Royal Purple)
    const ring1Geo = new THREE.TorusGeometry(2.3, 0.018, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.75 });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    scene.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.7, 0.015, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.65 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 5;
    scene.add(ring2);

    const ring3Geo = new THREE.TorusGeometry(3.1, 0.012, 16, 100);
    const ring3Mat = new THREE.MeshBasicMaterial({ color: 0x287bff, transparent: true, opacity: 0.45 });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.x = Math.PI / 2;
    scene.add(ring3);

    // Floating tech markers / nodes in 3D orbit
    const techNodes: THREE.Mesh[] = [];
    const nodeCount = 5;
    for (let i = 0; i < nodeCount; i++) {
      const nodeGeo = new THREE.OctahedronGeometry(0.12);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00e5ff : 0xff8a36,
        wireframe: true,
      });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      const angle = (i * Math.PI * 2) / nodeCount;
      node.position.x = Math.cos(angle) * 2.3;
      node.position.y = Math.sin(angle) * 0.8;
      node.position.z = Math.sin(angle) * 2.3;
      scene.add(node);
      techNodes.push(node);
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00e5ff, 2, 50);
    pointLight.position.set(4, 4, 4);
    scene.add(pointLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 2, 50);
    purpleLight.position.set(-4, -3, 3);
    scene.add(purpleLight);

    // Mouse Parallax
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / height) * 2 - 1);
      targetX = x * 0.8;
      targetY = y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Group rotation
      holoGroup.rotation.y = elapsedTime * 0.2 + mouseX * 0.5;
      holoGroup.rotation.x = elapsedTime * 0.15 - mouseY * 0.5;
      coreMesh.rotation.y = -elapsedTime * 0.3;

      // Rings rotation
      ring1.rotation.z = elapsedTime * 0.25;
      ring1.rotation.y = Math.PI / 6 + mouseX * 0.2;
      ring2.rotation.y = -elapsedTime * 0.2;
      ring3.rotation.z = elapsedTime * 0.15;

      // Tech nodes orbit
      techNodes.forEach((node, idx) => {
        const offset = (idx * Math.PI * 2) / nodeCount + elapsedTime * 0.4;
        node.position.x = Math.cos(offset) * 2.3;
        node.position.z = Math.sin(offset) * 2.3;
        node.position.y = Math.sin(elapsedTime * 1.5 + idx) * 0.6;
        node.rotation.x += 0.02;
        node.rotation.y += 0.03;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Column: Heading, Bio, Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1020]/80 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-mono tracking-wider w-fit mb-6 backdrop-blur-md shadow-lg shadow-cyan-500/10">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
            <span className="font-semibold">MCA CANDIDATE • ADITYA PG COLLEGE</span>
            <span className="text-[#E8EDF7]/40">|</span>
            <span className="text-[#E8EDF7]/70">VISAKHAPATNAM</span>
          </div>

          {/* Subheading Intro */}
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-[#00E5FF]" />
            <p className="font-mono text-sm sm:text-base tracking-[0.25em] text-[#00E5FF] uppercase font-bold">
              HELLO, I'M
            </p>
          </div>

          {/* Main Name Heading */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#E8EDF7] leading-none mb-4">
            <span className="block">DODDI</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#287BFF] to-[#A855F7] animate-pulse-slow">
              MAHINDHRA
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#E8EDF7]/85 font-medium leading-relaxed mb-6 max-w-2xl">
            Aspiring Software Developer <span className="text-[#00E5FF]">|</span> Creative Problem Solver{' '}
            <span className="text-[#A855F7]">|</span> Technology Enthusiast
          </p>

          {/* Rotating Taglines */}
          <div className="h-10 mb-8 overflow-hidden flex items-center">
            <div className="flex items-center gap-2 text-sm sm:text-base font-mono text-[#00E5FF]">
              <Terminal className="w-4 h-4 text-[#00E5FF] animate-pulse" />
              <span className="text-[#E8EDF7]/40">&gt;</span>
              <span className="font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#E8EDF7] transition-all duration-500">
                "{PORTFOLIO_DATA.personal.taglines[activeTaglineIdx]}"
              </span>
            </div>
          </div>

          {/* Floating Language Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {['Java', 'Python', 'C', 'HTML', 'CSS', 'JavaScript', 'SQL', 'MySQL'].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#0B1020]/90 border border-white/10 text-[#E8EDF7]/80 hover:border-[#00E5FF]/50 hover:text-[#00E5FF] transition-all hover:scale-105"
              >
                #{tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={() => soundFx.playClick()}
              className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide text-[#050510] bg-gradient-to-r from-[#00E5FF] to-[#287BFF] hover:shadow-glow-cyan transition-all duration-300 hover:scale-105"
            >
              <Briefcase className="w-4 h-4 text-[#050510] group-hover:rotate-12 transition-transform" />
              <span>Explore My Work</span>
            </a>

            <a
              href="/Mahindhra_Resume.pdf"
              download="Doddi_Mahindhra_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => soundFx.playClick()}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide text-[#E8EDF7] bg-[#0B1020]/80 border border-white/15 hover:border-[#00E5FF]/60 hover:bg-[#0B1020] hover:shadow-glow-blue transition-all duration-300 hover:scale-105 backdrop-blur-md"
            >
              <Download className="w-4 h-4 text-[#00E5FF]" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              onClick={() => soundFx.playClick()}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm tracking-wide text-[#E8EDF7]/80 hover:text-[#00E5FF] hover:bg-white/5 transition-all duration-200"
            >
              <Send className="w-4 h-4 text-[#A855F7]" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Right Column: 3D Holographic Canvas + Hologram HUD */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[420px] sm:min-h-[500px]">
          {/* Three.js viewport */}
          <div ref={mountRef} className="w-full h-[450px] sm:h-[520px] relative z-10 cursor-grab active:cursor-grabbing" />

          {/* Futuristic Floating Badges around 3D Sphere */}
          <div className="absolute top-4 left-0 sm:left-4 z-20 glass-panel px-3.5 py-2 rounded-xl flex items-center gap-2.5 text-xs font-mono border-l-2 border-l-[#00E5FF] shadow-lg animate-float-slow">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
            <div>
              <p className="text-[10px] text-[#E8EDF7]/50 uppercase">Core Language</p>
              <p className="font-bold text-[#E8EDF7]">Java &amp; Python</p>
            </div>
          </div>

          <div
            className="absolute bottom-6 right-0 sm:right-4 z-20 glass-panel px-3.5 py-2 rounded-xl flex items-center gap-2.5 text-xs font-mono border-r-2 border-r-[#A855F7] shadow-lg animate-float-slow"
            style={{ animationDelay: '2s' }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#A855F7]" />
            <div>
              <p className="text-[10px] text-[#E8EDF7]/50 uppercase">Academic Merit</p>
              <p className="font-bold text-[#E8EDF7]">MCA / 97% SSC</p>
            </div>
          </div>

          <div
            className="absolute top-1/2 -right-2 sm:-right-4 transform -translate-y-1/2 z-20 glass-panel px-3 py-1.5 rounded-lg text-[11px] font-mono border border-[#287BFF]/40 text-[#00E5FF] shadow-lg hidden sm:block animate-float-slow"
            style={{ animationDelay: '4s' }}
          >
            <span>&lt;3D HOLOGRAM /&gt;</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        onClick={() => soundFx.playClick()}
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-xs font-mono text-[#E8EDF7]/50 hover:text-[#00E5FF] transition-colors group cursor-pointer"
      >
        <span className="tracking-widest uppercase text-[10px]">SCROLL DOWN</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[#00E5FF]/60 transition-colors">
          <div className="w-1.5 h-2 bg-[#00E5FF] rounded-full animate-bounce" />
        </div>
        <ArrowDown className="w-3.5 h-3.5 text-[#00E5FF] animate-pulse" />
      </a>
    </section>
  );
};
