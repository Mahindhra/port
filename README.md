# DODDI MAHINDHRA — Cinematic 3D Developer Portfolio

A production-quality, responsive, cinematic 3D developer portfolio website built for **Doddi Mahindhra**, Aspiring Software Developer from Visakhapatnam, Andhra Pradesh, India.

---

## 🌟 Visual & Cinematic Highlights

- **Cinematic Intro Sequence**: Fullscreen cosmic opening with glowing particle field, 3D energy sphere, light sweep across name, smooth transition into main site, and session memory (`SKIP INTRO` option).
- **Interactive 3D Holographic Hero**: Built with Three.js featuring an interactive wireframe icosahedron/sphere, multi-axis orbiting neon rings, floating tech geometry nodes, and mouse coordinate parallax.
- **Ambient Particle Matrix**: Real-time canvas particle network reacting dynamically to mouse proximity and screen dimensions.
- **Custom Desktop Cursor**: Trailing glowing neon cursor with hover scaling and magnetic button feedback.
- **Synthesized UI Sound System**: Subtle sci-fi sound effects generated using Web Audio API without bulky audio assets, featuring a mute/unmute control.
- **Interactive 3D Flip Certifications**: Verification badges with 3D card-flip animations revealing credential details.
- **Projects Showcase & Architecture Modal**: Interactive mockups for the APSRTC Passenger Complaint System and the Android Development Hackathon, complete with feature modals and GitHub links.
- **Verifiable Academic & Experience Timeline**: Exact resume data covering MCA (Pursuing), B.Sc MECs (7.5 CGPA), SSC (97%), AWS Cloud Computing internship (Adhoc Network), and AI/ML internship (ULearn).
- **Functional Contact Center**: Form validation, direct email composition dispatch, one-click email copying with toast notification, and direct contact buttons.

---

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Bundler & Build Tool**: Vite 5
- **3D Graphics**: Three.js
- **Styling**: Tailwind CSS with custom glassmorphism and keyframe animations
- **Icons**: Lucide React
- **Audio**: Web Audio API (Synthesizer)
- **Code Graph Engine**: CodeGraph CLI & MCP Server

---

## 📁 Project Structure

```text
port/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── Mahindhra_Resume.pdf
│   └── images/
│       └── profile.jpg
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── Certifications.tsx
│   │   ├── CinematicIntro.tsx
│   │   ├── Contact.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero3D.tsx
│   │   ├── Interests.tsx
│   │   ├── Navbar.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── data/
│   │   └── portfolioData.ts
│   ├── styles/
│   │   └── index.css
│   ├── utils/
│   │   └── sound.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` to experience the website.

### 3. Build for Production
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```
