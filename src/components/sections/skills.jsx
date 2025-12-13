"use client";

import React from 'react';

// Tech Stack Data with Real SVG Paths
const SKILLS = [
  {
    name: "React",
    icon: (
      <svg viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#61DAFB]">
        <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="10" ry="4.5"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
        </g>
      </svg>
    )
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black dark:text-white">
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="black"></circle>
        </mask>
        <g mask="url(#mask0)">
          <circle cx="90" cy="90" r="88" stroke="currentColor" strokeWidth="4"></circle>
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="currentColor"></path>
          <rect x="115" y="54" width="12" height="72" fill="currentColor"></rect>
        </g>
      </svg>
    )
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M25.0286 19.8629H102.583C105.429 19.8629 107.726 22.1593 107.726 25.005V102.56C107.726 105.405 105.429 107.702 102.583 107.702H25.0286C22.1829 107.702 19.8864 105.405 19.8864 102.56V25.005C19.8864 22.1593 22.1829 19.8629 25.0286 19.8629Z" fill="#3178C6"/>
        <path d="M69.9575 64.9543H60.4032V87.0343H52.5517V49.0714H85.7319V56.6257H69.9575V64.9543Z" fill="white"/>
        <path d="M96.0914 74.3829C96.0914 72.8857 95.2743 71.8629 93.3657 71.0457L87.5029 68.8686C85.5257 68.1143 84.7771 67.2286 84.7771 65.8629C84.7771 64.2971 86.1371 63.3429 88.32 63.3429C90.5657 63.3429 91.9943 64.3657 92.2686 66.4743H99.6343C99.2914 61.2971 95.3429 57.5543 88.3886 57.5543C81.64 57.5543 76.9371 61.2286 76.9371 66.2743C76.9371 70.0229 79.1829 72.3429 83.0057 73.7029L88.9314 75.8171C91.5914 76.7714 92.4057 77.8629 92.4057 79.5657C92.4057 81.3371 90.7714 82.36 88.3886 82.36C85.7971 82.36 84.0971 81.1314 83.7543 78.5429H76.2571C76.6629 84.3371 81.2343 88.1543 88.3886 88.1543C95.5429 88.1543 100.314 84.3371 100.314 79.0229" fill="white"/>
      </svg>
    )
  },
  {
    name: "Java",
    icon: (
      <svg viewBox="0 0 256 348" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M125.7 0.200012C125.7 0.200012 173.2 41.5 125.7 82.2001C63.6002 43.1 125.7 0.200012 125.7 0.200012Z" fill="#E76F00"/>
        <path d="M132.8 54.2001C132.8 54.2001 190.2 78.9 146.4 121.7C93.4002 85.5 132.8 54.2001 132.8 54.2001Z" fill="#E76F00"/>
        <path d="M123.4 133.7C107.8 128.5 73.0002 124 73.0002 124C73.0002 124 45.4002 123.6 15.6002 148C-12.0998 170.8 7.30018 200 48.2002 195.8C54.4002 195.1 63.6002 192.5 73.6002 188.4C80.0002 211.5 97.4002 235.1 138.6 235.1C205.7 235.1 228.4 186.2 214.3 162.8C204 145.4 163.7 142.3 123.4 133.7ZM157.8 195.7C125.4 195.7 101 176.4 97.4002 163.6C104 161.7 110.2 160.3 115.3 159.4C164.7 150.3 194 159.2 198.8 167.3C203.8 175.7 186.7 195.7 157.8 195.7Z" fill="#5382A1"/>
      </svg>
    )
  },
  {
    name: "Spring Boot",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M29.56 8.52L17.26 1.83C16.53 1.43 15.48 1.43 14.75 1.83L2.45 8.52C1.56 9 1 9.92 1 10.95V22.25C1 23.27 1.56 24.19 2.45 24.68L14.75 31.37C15.12 31.57 15.53 31.67 15.94 31.67C16.35 31.67 16.76 31.57 17.13 31.37L29.43 24.68C30.32 24.19 30.88 23.27 30.88 22.24V10.95C30.99 9.93 30.45 9 29.56 8.52ZM12.78 24.79C12.78 24.79 9.39 22.84 8.71 18.27C8.03 13.7 11.2 10.61 11.2 10.61C11.2 10.61 10.52 13.56 12.89 15.71C15.27 17.86 17.76 17.59 17.76 17.59C17.76 17.59 15.84 17.86 14.93 16.92C14.03 15.98 13.91 14.23 15.16 12.08C16.4 9.93 18.55 8.99 18.55 8.99C18.55 8.99 18.21 12.49 20.36 14.78C22.51 17.06 25.11 16.66 25.11 16.66C25.11 16.66 21.04 18.14 19.34 23.92C17.65 29.7 12.78 24.79 12.78 24.79Z" fill="#6DB33F"/>
      </svg>
    )
  },
  {
    name: "J2EE (Jakarta)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black dark:text-white">
        <path d="M12 2L2 6L12 10L22 6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 14L12 18L22 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 10L12 14L22 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M16 0L29.8564 8V24L16 32L2.14359 24V8L16 0Z" fill="#339933"/>
      </svg>
    )
  },
  {
    name: "SQL / PostgreSQL",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#336791]">
        <path d="M12 20C17.5228 20 22 17.7614 22 15M22 15C22 12.2386 17.5228 10 12 10C6.47715 10 2 12.2386 2 15M22 15V9C22 6.23858 17.5228 4 12 4C6.47715 4 2 6.23858 2 9V15M2 15C2 17.7614 6.47715 20 12 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 9C2 11.7614 6.47715 14 12 14C17.5228 14 22 11.7614 22 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: "Docker",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#2496ED]">
        <path d="M4.50003 10.5H0.642883V14.1643H4.50003V10.5Z" fill="currentColor"/>
        <path d="M9.64287 10.5H5.78572V14.1643H9.64287V10.5Z" fill="currentColor"/>
        <path d="M14.7858 10.5H10.9286V14.1643H14.7858V10.5Z" fill="currentColor"/>
        <path d="M4.50003 5.50714H0.642883V9.17143H4.50003V5.50714Z" fill="currentColor"/>
        <path d="M9.64287 5.50714H5.78572V9.17143H9.64287V5.50714Z" fill="currentColor"/>
        <path d="M14.7858 5.50714H10.9286V9.17143H14.7858V5.50714Z" fill="currentColor"/>
        <path d="M9.64287 1.5H5.78572V5.16429H9.64287V1.5Z" fill="currentColor"/>
        <path d="M23.3571 8.82857C23.3571 8.82857 23.2393 14.1643 23.2393 14.1643H16.0714V5.50714H19.9286V8.82857C19.9286 8.82857 21.0322 8.35714 21.6429 8.82857C22.2536 9.3 23.3571 8.82857 23.3571 8.82857Z" fill="currentColor"/>
        <path d="M0.642883 15.5V16.3286C0.642883 19.3429 4.31788 21.3643 12.0429 21.3643C19.7679 21.3643 23.3572 19.3429 23.3572 16.3286V15.5H0.642883Z" fill="currentColor"/>
      </svg>
    )
  },
  {
    name: "Git & GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#F05032]">
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
    {
    name: "Figma",
    icon: (
      <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <path d="M9.5 57C14.7467 57 19 52.7467 19 47.5V38H9.5C4.25329 38 0 42.2533 0 47.5C0 52.7467 4.25329 57 9.5 57Z" fill="#0ACF83"/>
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
        <path d="M38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5V19H28.5C33.7467 19 38 23.2533 38 28.5Z" fill="#1ABCFE"/>
      </svg>
    )
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#38B2AC]">
        <path d="M7 19C4.2 19 2 16.8 2 14C2 11.2 4.2 9 7 9C9.8 9 12 11.2 12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 19C14.2 19 12 16.8 12 14C12 11.2 14.2 9 17 9C19.8 9 22 11.2 22 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14C12 11.2 9.8 9 7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 14C22 11.2 19.8 9 17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

export default function SkillsSection() {
  return (
    // نقصنا الـ Padding العمودي (py-12) باش الصفحة تجي قصيرة
    <section id="skills" className="py-12 lg:py-16 bg-background dark:bg-neutral-950 text-foreground dark:text-white">
      <div className="w-full max-w-[1200px] mx-auto px-5 lg:px-10">
        
        {/* Header - Compact */}
        <div className="flex flex-col mb-10 text-center items-center">
          <h6 className="text-xs font-bold uppercase tracking-[0.1em] mb-3 bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#F97316] text-transparent bg-clip-text inline-block">
            MY STACK
          </h6>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] dark:text-white">
            Technologies I work with
          </h2>
        </div>

        {/* The Tech Grid - Compact & Pro */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SKILLS.map((skill, index) => (
            <div 
              key={index}
              className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 border border-[#e5e5e5] dark:border-gray-700 hover:border-[#7C3AED] dark:hover:border-[#7C3AED] transition-all duration-300 hover:shadow-md cursor-default"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-lg group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              
              {/* Name */}
              <span className="text-sm lg:text-base font-bold text-[#1A1A1A] dark:text-white group-hover:text-[#7C3AED] transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}