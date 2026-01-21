"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';
import { Abril_Fatface } from 'next/font/google';

// Icons
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill, RiNodejsLine } from "react-icons/ri";
import { SiTypescript, SiFigma, SiSpringboot, SiPostgresql, SiDocker, SiGit, SiOracle, SiGithub } from "react-icons/si";
import { VscTerminal } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";

const abril = Abril_Fatface({ weight: '400', subsets: ['latin'] });
gsap.registerPlugin(ScrollTrigger);

// --- Component: Tech Card (Adapted for Light/Dark) ---
const TechCard = ({ icon: Icon, name, isLightSection }) => (
  <div className={`relative group flex flex-col items-start p-6 rounded-xl border transition-all duration-300 
    ${isLightSection 
      ? 'bg-black/[0.03] border-black/5 hover:bg-black/[0.08]' 
      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05]'}`}>
    <div className={`absolute top-3 right-3 w-1.5 h-1.5 rounded-full ${isLightSection ? 'bg-black/10' : 'bg-white/20'}`} />
    <div className={`text-3xl mb-4 transition-colors ${isLightSection ? 'text-gray-400 group-hover:text-black' : 'text-gray-500 group-hover:text-white'}`}>
      <Icon />
    </div>
    <h3 className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${isLightSection ? 'text-gray-500 group-hover:text-black' : 'text-gray-400 group-hover:text-white'}`}>
      {name}
    </h3>
  </div>
);

// --- Component: Side Poster ---
const SidePoster = ({ title, color }) => (
  <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-lg overflow-hidden shadow-2xl" style={{ backgroundColor: color }}>
    <div className="absolute inset-0 p-8 flex flex-col justify-between text-black uppercase font-sans">
      <div className="flex justify-between items-start">
        <span className="text-[8px] font-black tracking-[0.3em]">Deployment Ready</span>
        <div className="w-4 h-8 bg-black rounded-full" />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-5xl font-black italic leading-[0.75] tracking-tighter uppercase">
          {title.split('-').map((w, i) => <span key={i}>{w}{i === 0 && '-'}<br/></span>)}
        </h2>
        <div className="w-10 h-1 bg-black mt-4" />
      </div>
      <div className="text-[8px] font-bold space-y-1 opacity-80">
        <p className="tracking-tight uppercase italic">Maintained by Expert</p>
        <p className="font-mono">©2024 CORE_STK</p>
      </div>
    </div>
    <div className="absolute inset-0 bg-white/10 mix-blend-overlay opacity-30 pointer-events-none" />
  </div>
);

export default function TimelineScroll() {
  const containerRef = useRef(null);
  const maskRef = useRef(null);
  const overlayRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray('.tech-section');
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${(sections.length + 1) * 100}%`,
        scrub: 1,
        pin: true,
      }
    });

    tl.to(maskRef.current, { scale: 100, duration: 1.5, ease: "power2.in" })
      .to(overlayRef.current, { opacity: 0, visibility: "hidden" }, "-=0.2");

    sections.forEach((section, i) => {
      if (i === 0) return;
      tl.fromTo(section, { yPercent: 100 }, { yPercent: 0, duration: 1, ease: "none" }, `step-${i}`);
    });
  }, { scope: containerRef });

  const renderSection = (id, label, desc, color, techs, posterTitle, isLight) => (
    <section className={`tech-section absolute inset-0 w-full h-full flex flex-col px-6 py-8 lg:px-20 lg:py-10 transition-colors duration-500
      ${isLight ? 'bg-white text-black' : 'bg-[#080808] text-white'}`}>
      
      {/* Header Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 max-w-7xl mx-auto w-full">
        <div className="lg:col-span-1">
          <div className="w-10 h-10 border border-orange-500 rounded-full flex items-center justify-center text-[9px] font-black text-orange-500 italic shadow-lg">
            {label}
          </div>
        </div>
        <div className="lg:col-span-8">
          <p className={`text-lg lg:text-xl leading-snug font-light max-w-xl ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
            {desc}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto w-full overflow-hidden">
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-3">
          {techs.map((t, idx) => <TechCard key={idx} icon={t.icon} name={t.name} isLightSection={isLight} />)}
        </div>
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <SidePoster title={posterTitle} color={color} />
        </div>
      </div>

      {/* Footer */}
      <div className={`mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto w-full gap-4 ${isLight ? 'border-black/5' : 'border-white/5'}`}>
        <div className="flex items-center gap-6 text-[9px] font-black tracking-[0.2em]">
          {techs.slice(0, 3).map((t, i) => (
            <React.Fragment key={i}>
              <span className={`uppercase transition-colors ${isLight ? 'text-gray-400 hover:text-black' : 'text-gray-600 hover:text-white'}`}>
                {t.name}
              </span>
              {i < 2 && <span className="w-1 h-1 bg-orange-500 rounded-full" />}
            </React.Fragment>
          ))}
        </div>
        <button className={`flex items-center gap-3 px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all duration-300 shadow-xl
          ${isLight ? 'bg-black text-white hover:bg-orange-600' : 'bg-white text-black hover:bg-orange-500 hover:text-white'}`}>
          <span>Explore Stack</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* Starting Zoom Layer */}
      <div ref={overlayRef} className="absolute inset-0 z-[100] flex items-center justify-center bg-white mix-blend-screen pointer-events-none">
        <h2 ref={maskRef} className={`${abril.className} text-[10vw] font-black text-black leading-none uppercase tracking-tighter`}>
          Stack
        </h2>
      </div>

      {/* 1. FRONT END (BLACK) */}
      {renderSection(
        "front", "STK", 
        <>Turning ideas into digital products using a <span className="font-bold italic text-white underline decoration-orange-500 underline-offset-4">cutting-edge stack</span>.</>,
        "#f43f5e",
        [
          { icon: RiReactjsLine, name: "React" },
          { icon: RiNextjsFill, name: "Next.js" },
          { icon: SiTypescript, name: "TypeScript" },
          { icon: RiTailwindCssFill, name: "Tailwind" },
          { icon: SiFigma, name: "Figma" },
        ],
        "Front-End",
        false // Dark Section
      )}

      {/* 2. BACK END (WHITE) */}
      {renderSection(
        "back", "SRV", 
        <>Robust <span className="font-bold italic text-black underline decoration-orange-500 underline-offset-4">server-side architectures</span>. Scalable systems and reliable engineering.</>,
        "#8b5cf6",
        [
          { icon: RiNodejsLine, name: "Node.js" },
          { icon: FaJava, name: "Java Core" },
          { icon: SiSpringboot, name: "Spring Boot" },
          { icon: SiOracle, name: "Jakarta EE" },
        ],
        "Back-End",
        true // Light Section
      )}

      {/* 3. DATA BASE (BLACK) */}
      {renderSection(
        "data", "SQL", 
        <>Data integrity and <span className="font-bold italic text-white underline decoration-orange-500 underline-offset-4">cloud-native storage</span> optimized for scale.</>,
        "#10b981",
        [
          { icon: SiPostgresql, name: "PostgreSQL" },
          { icon: SiDocker, name: "Docker Hub" },
          { icon: SiOracle, name: "SQL DB" },
        ],
        "Data-Base",
        false // Dark Section
      )}

      {/* 4. VERSION CONTROL (WHITE) */}
      {renderSection(
        "tools", "VC", 
        <>Maintaining code <span className="font-bold italic text-black underline decoration-orange-500 underline-offset-4">quality and workflow</span> via Git flow.</>,
        "#f97316",
        [
          { icon: SiGit, name: "Git Control" },
          { icon: SiGithub, name: "GitHub" },
          { icon: VscTerminal, name: "Linux Bash" },
        ],
        "Version-Ctrl",
        true // Light Section
      )}
    </div>
  );
}