"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Preloader from '../Preloader'; 

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AchrafExperience() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const landscapeRef = useRef(null);

  useGSAP(() => {
    if (isLoading) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2500", 
        scrub: 1,
        pin: true,
        pinSpacing: true,
        refreshPriority: 2, // كيبقى هو الأول فالحساب
        anticipatePin: 1,
      }
    });

    // 1. تحريك الخلفية
    tl.to(".bg-text", { scale: 1.1, opacity: 0, duration: 1 }, "start")
      .to(".grid-pattern", { opacity: 0.02, duration: 1 }, "start")

    // 2. الكارطة كتحل
    .to(cardRef.current, {
      rotate: 90,
      width: "100vh", 
      height: "100vw",
      borderRadius: "0px",
      duration: 3, 
      ease: "power2.inOut"
    }, "start")

    // 3. تبديل المحتوى
    .to(".portrait-content", { opacity: 0, duration: 1 }, "start+=0.5")
    .to(landscapeRef.current, { opacity: 1, scale: 1, duration: 2, ease: "power3.out" }, "start+=1.5")

    // 4. أنيميشين ديال الهضرة (الـ About) - خفيفة ونقية
    .from(".reveal-text", {
      y: 30,
      opacity: 0,
      stagger: 0.2, // كيبانو وحدة مورا وحدة
      duration: 1.5,
      ease: "power2.out"
    }, "start+=2")

    // 5. وقفة خفيفة فالاخير
    .to({}, { duration: 2 }); 

    ScrollTrigger.refresh();
  }, { scope: containerRef, dependencies: [isLoading] });

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <main ref={containerRef} className="relative h-screen w-full bg-[#f4f4f4] dark:bg-neutral-950 overflow-hidden font-sans">
        
        {/* --- Background Blueprint Grid --- */}
        <div className="grid-pattern absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none z-0 text-black dark:text-white" 
     style={{ 
       backgroundImage: `linear-gradient(currentColor 1.5px, transparent 1.5px), linear-gradient(90deg, currentColor 1.5px, transparent 1.5px)`, 
       backgroundSize: '45px 45px' 
     }} />

        {/* --- Background Text --- */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none select-none uppercase italic">
          <div className="bg-text flex flex-col items-center">
            <h1 className="text-[14vw] font-black text-[#0a0a0a] dark:text-white leading-[0.8] tracking-tighter">Software</h1>
<h1 className="text-[14vw] font-black leading-[0.8] tracking-tighter text-black dark:text-white" 
    style={{ WebkitTextStroke: '1.5px currentColor', WebkitTextFillColor: 'transparent' }}>
  Engineer
</h1>          </div>
        </div>

        {/* --- THE MAIN CARD --- */}
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div ref={cardRef} className="relative w-[320px] h-[480px] md:w-[380px] md:h-[480px] bg-[#0a0a0a] dark:bg-[#ffff] flex items-center justify-center overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)]" style={{ borderRadius: '2.5rem' }}>
            
            {/* Portrait State */}
            <div className="portrait-content absolute inset-0 flex flex-col p-12 items-center justify-between text-white uppercase font-mono tracking-[0.3em] text-[10px]">
              <div className="w-full  flex justify-between opacity-30"><span className='dark:text-black'>ACHRAF_V2.0</span><span className="text-orange-500">DEPLOY_READY</span></div>
              <div className="relative w-full h-[60%] flex items-center justify-center "><Image src="/achraf-rf.png" alt="Achraf" fill className="object-contain scale-[1.15]" priority /></div>
              <div className="text-center"><h2 className="text-2xl text-white font-black tracking-tight uppercase dark:text-black">Achraf Rafiq</h2><div className="h-0.5 w-10 bg-orange-500 mx-auto mt-2"></div></div>
            </div>

            {/* Landscape State (Expanded) */}
            <div ref={landscapeRef} className="absolute w-screen h-screen bg-[#080808] flex flex-col md:flex-row items-center justify-between px-[8vw] py-[10vh] rotate-[-90deg] opacity-0 text-white">
              
              {/* Left Side: Personal Info */}
              <div className="flex-[1.2] space-y-10">
                <div className="reveal-text space-y-4">
                  <div className="flex items-center gap-3"><span className="h-[1px] w-8 bg-orange-500"></span><span className="text-orange-500 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">About Me</span></div>
                  <h2 className="text-7xl text-white md:text-[9vw] font-black leading-[0.85] tracking-tighter uppercase italic dark:text-white">Achraf <br/> <span className="text-neutral-900" style={{ WebkitTextStroke: '1px #fff' }}>Rafiq</span></h2>
                </div>

                <div className="reveal-text max-w-xl space-y-6">
                  <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed italic">
                    I am a passionate <span className="text-white font-bold">Software Engineering student</span> with a strong background in Full-Stack development. Currently leveling up at <span className="text-white underline decoration-orange-500 underline-offset-8">EMMAP</span>, focusing on Distributed Architectures & Cloud Computing.
                  </p>
                  <p className="text-sm md:text-base text-neutral-500 font-light leading-relaxed">
                    With over a year of professional experience using <span className="text-white">Next.js, TypeScript, and Laravel</span>, I bridge the gap between high-performance backends and modern frontends.
                  </p>
                </div>
              </div>

              {/* Right Side: Skill Highlights */}
              <div className="flex-1 max-w-md w-full mt-10 md:mt-0 space-y-12">
                <div className="reveal-text p-8 border-l border-orange-500/30 bg-white/[0.02] backdrop-blur-sm italic text-neutral-300 text-xl leading-snug">
                  "I am driven by <span className="text-white font-bold">clean code</span>, software scalability, and solving complex problems through technology."
                </div>

                <div className="reveal-text grid grid-cols-2 gap-8 uppercase font-bold text-[10px] tracking-[0.2em]">
                  {[
                    { label: 'Cloud', val: 'AWS / Azure' },
                    { label: 'Backend', val: 'Advanced Java' },
                    { label: 'Frontend', val: 'GSAP / Tailwind' },
                    { label: 'Arch', val: 'Distributed' }
                  ].map((item, i) => (
                    <div key={i} className="space-y-2 group">
                      <span className="text-orange-500 opacity-60">0{i+1} // {item.label}</span>
                      <p className="text-white text-sm group-hover:text-orange-500 transition-colors tracking-widest">{item.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Grain Overlay for Premium Look */}
        <div className="absolute inset-0 pointer-events-none z-[60] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </main>
    </>
  );
}