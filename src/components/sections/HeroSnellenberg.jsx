"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Github, Linkedin, ExternalLink, Mail } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AchrafFinalExperience = () => {
  const containerRef = useRef(null);
  const mainCardRef = useRef(null);
  const modernContentRef = useRef(null);

  useGSAP(() => {
    // تفعيل تسريع الجرافيكس لضمان الخفة
    gsap.set([mainCardRef.current, ".content-element", ".bg-tech-text"], { 
      force3D: true, 
      willChange: "transform, opacity" 
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%", 
        scrub: 1, // سكرول سليس جداً
        pin: true,
        anticipatePin: 1,
      }
    });

    // 1. حركة الخلفية (بسرعة واحترافية)
    tl.to(".bg-tech-text", { 
      x: (i) => i === 0 ? -300 : 300, 
      opacity: 0, 
      duration: 1,
      ease: "power2.inOut" 
    }, "start")
    
    .to(".blueprint-grid", { 
      scale: 1.2, 
      opacity: 0, 
      duration: 1,
      ease: "power2.in" 
    }, "start")

    // 2. الكارطة كتحل وتولي سيكشن (بأبعاد دقيقة)
    .to(mainCardRef.current, {
        rotate: 90,
        width: "100vh", 
        height: "100vw",
        borderRadius: "0px",
        duration: 1.5,
        ease: "expo.inOut" 
    }, "start")

    .to(".portrait-ui", { 
      opacity: 0, 
      scale: 0.9,
      duration: 0.4,
      ease: "power2.in" 
    }, "start+=0.3")

    // 3. إظهار المحتوى النهائي (2026 Style)
    .fromTo(modernContentRef.current, 
        { opacity: 0, y: 50, filter: "blur(15px)" },
        { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)", 
          duration: 1, 
          ease: "expo.out" 
        }, 
        "start+=1"
    )

    .from(".skill-line", { 
      scaleX: 0, 
      stagger: 0.05, 
      duration: 0.8, 
      ease: "expo.out" 
    }, "start+=1.2");

  }, { scope: containerRef });

  return (
    <main className="bg-[#020202] text-white selection:bg-orange-500 overflow-x-hidden font-sans antialiased">
      
      {/* Navbar - Fixed & Minimal */}
      

      {/* Main Container - Strict Centering */}
      <div ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden p-0 m-0">
        
        {/* Background Blueprint Grid */}
        <div className="blueprint-grid absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
        </div>

        {/* Background Outlined Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0">
            <h1 className="bg-tech-text text-[17vw] font-[1000] text-transparent leading-none tracking-tighter"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.08)' }}>
                SOFTWARE
            </h1>
            <h1 className="bg-tech-text text-[17vw] font-[1000] text-transparent leading-none tracking-tighter"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.08)' }}>
                ENGINEER
            </h1>
        </div>

        {/* --- THE PORTAL CARD --- */}
        <div 
          ref={mainCardRef} 
          className="relative w-[310px] h-[460px] md:w-[410px] md:h-[480px] bg-[#070707] border border-white/10 z-50 flex items-center justify-center overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)]"
          style={{ borderRadius: '1.5rem' }}
        >
            
            {/* Portrait UI (Initial State) */}
            <div className="portrait-ui absolute inset-0 flex flex-col p-8 z-10">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2 px-2.5 py-1 bg-green-500/5 rounded-full border border-green-500/20">
                        <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-[7px] font-black uppercase tracking-wider text-green-500">Available for work</span>
                    </div>
                    <span className="font-mono text-[8px] opacity-20 uppercase tracking-widest">v2.026</span>
                </div>

                <div className="flex-1 relative">
                    <div className="absolute inset-0 bg-orange-500/5 blur-[50px] rounded-full"></div>
                    <Image src="/achraf-rf.png" alt="Achraf Rafiq" fill className="object-contain relative z-10 scale-105" priority />
                </div>

                <div className="mt-6 flex flex-col items-center text-center gap-1.5">
                    <span className="font-black text-[10px] tracking-[0.5em] text-white uppercase">Achraf Rafiq</span>
                    <p className="text-[8px] text-neutral-500 font-mono uppercase tracking-[0.1em] leading-relaxed">
                        Full-Stack Engineer <br/> Crafting robust digital systems
                    </p>
                    <div className="w-6 h-[1px] bg-orange-500/30 mt-1"></div>
                </div>
            </div>

            {/* Landscape UI (Expanded State) */}
            <div 
                ref={modernContentRef} 
                className="absolute w-screen h-screen flex flex-col md:flex-row items-center justify-between px-[10vw] py-[10vh] rotate-[-90deg] opacity-0"
            >
                {/* Info Side */}
                <div className="content-element space-y-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3 text-orange-500 font-mono text-xs font-bold uppercase tracking-tighter">
                            <span className="w-8 h-[1px] bg-orange-500"></span>
                            Software Architect
                        </div>
                        <h2 className="text-6xl md:text-[9vw] font-[1000] tracking-tighter leading-[0.85] uppercase">
                            Achraf <br/> Rafiq
                        </h2>
                    </div>
                    
                    <button className="group relative px-7 py-3.5 bg-white text-black rounded-full font-black uppercase text-[9px] tracking-[0.2em] flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 overflow-hidden">
                        <span className="relative z-10">View Portfolio</span>
                        <ExternalLink size={12} className="relative z-10" />
                        <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                </div>

                {/* Skills Side */}
                <div className="content-element max-w-lg w-full space-y-10">
                    <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-3xl shadow-2xl">
                        <p className="text-xl md:text-2xl text-neutral-200 font-medium leading-tight italic">
                            “Engineering <span className="text-white font-black underline decoration-orange-500 underline-offset-8">scalable solutions</span> and seamless interfaces for the modern web.”
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        {[
                            { label: 'Technical_Stack', tech: 'Next.js / TS / Node' },
                            { label: 'Cloud_Architecture', tech: 'AWS / Docker / SQL' }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-2.5">
                                <p className="text-[8px] font-mono text-neutral-600 uppercase tracking-[0.3em]">{item.label}</p>
                                <p className="text-[11px] font-black tracking-widest uppercase">{item.tech}</p>
                                <div className="h-[1px] bg-white/5 w-full">
                                    <div className="skill-line h-full bg-orange-500 w-full origin-left"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Subtle Ambient Glow */}
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <style jsx>{`
        h1, h2 { font-family: 'Inter', sans-serif; }
        .blueprint-grid {
          mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
        }
      `}</style>
    </main>
  );
};

export default AchrafFinalExperience;