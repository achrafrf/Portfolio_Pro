"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { 
  RiNextjsFill, 
  RiReactjsLine, 
  RiTailwindCssFill, 
  RiTwitterFill 
} from "react-icons/ri"; // install react-icons
import { SiTypescript, SiFigma } from "react-icons/si";

const TECH_STACK = [
  { name: "React", icon: <RiReactjsLine /> },
  { name: "Next.js", icon: <RiNextjsFill /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
  { name: "Figma", icon: <SiFigma /> },
];

export default function TechHeroSection() {
  const containerRef = useRef(null);

  // Parallax للملصق الأحمر
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yMove = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotateMove = useTransform(scrollYProgress, [0, 1], [4, -4]);

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#0a0a0a] text-white px-6 py-20 lg:px-16 lg:py-28 overflow-hidden border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Part --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          <div className="lg:col-span-1">
            <div className="w-10 h-10 border border-orange-500 rounded-full flex items-center justify-center text-[10px] font-black text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
              STK
            </div>
          </div>

          <div className="lg:col-span-6">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xl lg:text-2xl leading-tight font-light text-gray-400"
            >
              Turning ideas into digital products using a 
              <span className="text-white font-bold italic"> cutting-edge stack</span>. 
              Focused on performance, scalability, and high-end aesthetics.
            </motion.p>
          </div>
        </div>

        {/* --- Middle Part: Tech Grid & Poster --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* TECH LOGOS GRID (In place of "DESIGN") */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
              {TECH_STACK.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="group relative flex flex-col items-start p-6 border border-white/10 rounded-xl transition-all duration-300 bg-white/[0.02]"
                >
                  <div className="text-4xl lg:text-5xl mb-4 text-gray-500 group-hover:text-orange-500 transition-colors duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg lg:text-xl font-black uppercase tracking-tighter opacity-40 group-hover:opacity-100 group-hover:tracking-normal transition-all duration-500">
                    {tech.name}
                  </h3>
                  {/* Decorative dot */}
                  <div className="absolute top-4 right-4 w-1 h-1 bg-white/20 rounded-full group-hover:bg-orange-500 transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* The Iconic Floating Card */}
          <div className="lg:col-span-4 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            <motion.div 
              style={{ y: yMove, rotate: rotateMove }}
              className="relative w-[280px] h-[380px] lg:w-[320px] lg:h-[420px] rounded-sm overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] z-10"
            >
              {/* Poster Content */}
              <div className="absolute inset-0 bg-[#f43f5e] p-7 flex flex-col justify-between text-black">
                 <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase">Deployment Ready</span>
                    <div className="w-5 h-10 bg-black rounded-full" />
                 </div>
                 
                 <div className="flex-1 flex flex-col justify-center">
                    <h2 className="text-6xl lg:text-7xl font-black leading-[0.75] uppercase tracking-tighter italic">
                      Front-<br/>End
                    </h2>
                    <div className="w-12 h-1 bg-black mt-4" />
                 </div>

                 <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-tight">Maintained by Expert</p>
                    <p className="text-[10px] font-mono leading-none opacity-70">©2024 PORTFOLIO CORE</p>
                 </div>
              </div>
              
              {/* Paper Texture Overlay */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20 pointer-events-none mix-blend-overlay" />
            </motion.div>
          </div>
        </div>

        {/* --- Bottom Part: Action Link --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 group cursor-pointer"
        >
          <div className="flex items-center gap-6 overflow-hidden uppercase text-[10px] font-black tracking-[0.3em] text-gray-600">
             <span className="hover:text-white transition-colors tracking-normal">React</span>
             <span className="w-1 h-1 bg-orange-500 rounded-full" />
             <span className="hover:text-white transition-colors tracking-normal">Next.js</span>
             <span className="w-1 h-1 bg-orange-500 rounded-full" />
             <span className="hover:text-white transition-colors tracking-normal">Tailwind</span>
          </div>
          
          <div className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all duration-300">
            <span>Explore Stack</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}