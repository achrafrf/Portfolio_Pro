"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const leftPanel = useRef(null);
  const rightPanel = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = 'auto';
        onComplete();
      }
    });

    // عداد كيمشي من 0 لـ 100
    tl.to(".counter-num", {
      innerText: 100,
      duration: 2,
      snap: { innerText: 1 },
      ease: "power1.inOut"
    })
    .to(".loader-content", { opacity: 0, y: -20, duration: 0.5 })
    // الـ Split الرهيب
    .to(leftPanel.current, { xPercent: -100, duration: 1.2, ease: "expo.inOut" }, "split")
    .to(rightPanel.current, { xPercent: 100, duration: 1.2, ease: "expo.inOut" }, "split");

    return () => { document.body.style.overflow = 'auto'; };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden">
      <div ref={leftPanel} className="absolute inset-y-0 left-0 w-1/2 bg-white z-[100]" />
      <div ref={rightPanel} className="absolute inset-y-0 right-0 w-1/2 bg-[#0a0a0a] z-[100]" />
      
      <div className="loader-content relative z-[110] flex flex-col items-center mix-blend-difference text-white">
        <span className="text-[10px] tracking-[0.5em] uppercase opacity-50 mb-2">System Initializing</span>
        <div className="text-6xl font-black font-sans">
          <span className="counter-num">0</span>%
        </div>
      </div>
    </div>
  );
};

export default Preloader;