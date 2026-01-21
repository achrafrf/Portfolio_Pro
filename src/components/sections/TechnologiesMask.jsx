'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Abril_Fatface } from 'next/font/google';
import TimelineScroll from './TimelineScroll';

const abril = Abril_Fatface({ weight: '400', subsets: ['latin'] });

gsap.registerPlugin(ScrollTrigger);

const TechnologiesMask = () => {
  const containerRef = useRef(null);
  const techTextRef = useRef(null);
  const myStackRef = useRef(null);
  const overlayRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=600%", // سكرول طويل باش الزوم والأقسام ياخدو وقتهم
        scrub: 1.2,
        pin: true,
      }
    });

    // 1. Zoom TECHNOLOGIES & Fade Out "MY STACK"
    tl.to(myStackRef.current, { opacity: 0, y: -50, duration: 0.5 }, "start")
      .to(techTextRef.current, {
        scale: 120, // زوم كبيييير بزاف
        duration: 3,
        ease: "power2.inOut"
      }, "start")
      
    // 2. Hide the White Overlay gradually to reveal the background clearly
    tl.to(overlayRef.current, { 
      opacity: 0, 
      pointerEvents: "none", 
      duration: 0.5 
    }, "start+=2.5")

    // 3. Move the Content Sections (Inside TimelineScroll)
    tl.to("#blue", { yPercent: -100, duration: 1.5 }, "section2")
      .to("#aqua", { yPercent: -100, duration: 1.5 }, "section3");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      
      {/* الطبقة لي كنشوفوها وسط الحروف (Timeline Content) */}
      <div className="absolute inset-0 z-0">
        <TimelineScroll />
      </div>

      {/* طبقة الـ MASK لي فيها الزوم */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white mix-blend-screen pointer-events-none"
      >
        <span 
          ref={myStackRef}
          className="text-black font-sans font-bold tracking-[0.5em] mb-4 text-sm md:text-xl uppercase opacity-60"
        >
          My Stack
        </span>
        <h2 
          ref={techTextRef}
          className={`${abril.className} text-[10vw] font-black text-black leading-none will-change-transform select-none`}
        >
          TECHNOLOGIES
        </h2>
      </div>

      {/* ديكور اختياري (Scroll Indicator) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[60] flex flex-col items-center gap-2 opacity-30 group">
          <div className="w-[1px] h-12 bg-white/50 overflow-hidden">
            <div className="w-full h-full bg-white origin-top animate-scroll-line"></div>
          </div>
          <span className="text-[10px] text-white uppercase tracking-widest font-bold">Scroll</span>
      </div>

      <style jsx>{`
        @keyframes scroll-line {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          50.1% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        .animate-scroll-line {
          animation: scroll-line 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default TechnologiesMask;