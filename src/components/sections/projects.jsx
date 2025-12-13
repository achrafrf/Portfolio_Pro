"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const ASSETS = {
 projects: [
    {
      id: 1,
      title: "ASHGHAL",
      category: "Branding",
      description: "Complete brand identity redesign with modern aesthetics and cohesive visual language",
      technologies: ["Next.js", "React", "Tailwind CSS", "Figma"],
      img: "/Projects/ASHGHAL.png",
      link: "#"
    },
    {
      id: 2,
      title: "Data FC",
      category: "Product Design",
      description: "Analytics dashboard with real-time data visualization and intuitive user experience",
      technologies: ["Laravel", "Vue.js", "MySQL", "Redis"],
      img: "/Projects/datafcp.png",
      link: "#"
    },
    {
      id: 3,
      title: "Progasur",
      category: "Web Design",
      description: "Responsive e-commerce platform with seamless checkout and inventory management",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      img: "/Projects/progasur.png",
      link: "#"
    },
    {
      id: 4,
      title: "Convertermora",
      category: "Branding",
      description: "Bold fitness brand identity with dynamic logo system and marketing materials",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      img: "/Projects/convertermora.png",
      link: "#"
    },
    {
      id: 5,
      title: "Joggr Website Design",
      category: "Web Design",
      description: "Community-driven fitness app with social features and workout tracking",
      technologies: ["Next.js", "TypeScript", "Supabase", "Stripe"],
      img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/images/6077dcf54baced26f174226f_image_processing20200129--10.png",
      link: "#"
    }
  ],
  arrows: {
    left: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/svgs/5fef584b6f3b7d0fb04e725e_Vector-4-6.svg",
    right: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/svgs/5fef584a07453d08e05572b5_Vector-3-7.svg",
  }
};

// COMPONENT: هذا هو السر، كل زرار عندو "group" خاص بيه
// وبالتالي الـ Hover كيطرا غير لداخل ديالو وماكيأثرش على صاحبو
const IndependentButton = ({ href, text, icon, className }) => {
  return (
    <a
      href={href}
      // "group" هنا كتعني أن الهوفر خاص بهاد الزرار فقط
      className={`group relative inline-flex items-center justify-center overflow-hidden bg-[#1a1a1a] dark:bg-white text-white dark:text-black transition-all ${className}`}
    >
      {/* الخلفية الملونة (Gradient) - مخبية لتحت */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#EC4899] translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
      
      {/* المحتوى (النص والأيقونة) */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* الحالة العادية */}
        <div className="flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-10">
          {icon && <span className="w-4 h-4">{icon}</span>}
          <span className="text-xs font-bold uppercase tracking-wider">{text}</span>
        </div>
        
        {/* حالة الـ Hover (النص كيطلع من التحت) */}
        <div className="absolute flex items-center gap-2 translate-y-10 transition-transform duration-300 group-hover:translate-y-0">
          {icon && <span className="w-4 h-4">{icon}</span>}
          <span className="text-xs font-bold uppercase tracking-wider">{text}</span>
        </div>
      </div>
    </a>
  );
};

export default function ProjectsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = ASSETS.projects.length;
  const maxIndex = Math.max(0, totalSlides - slidesToShow); 

  const nextSlide = () => {
    if (currentSlide >= maxIndex) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide <= 0) setCurrentSlide(maxIndex);
    else setCurrentSlide(currentSlide - 1);
  };

  const goToSlide = (index) => {
    const clampedIndex = Math.min(Math.max(0, index), maxIndex);
    setCurrentSlide(clampedIndex);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => { nextSlide(); }, 4000);
    return () => clearInterval(autoSlide);
  }, [currentSlide, maxIndex]);

  return (
    <div id="projects" className="bg-background dark:bg-neutral-950  py-16 text-foreground dark:text-gray-100 font-body overflow-hidden">
      
      {/* Header Section */}
      <div className="container mx-auto px-5 lg:px-10 mb-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div className="max-w-2xl">
            <h6 className="mb-3 text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#F97316]">
              PROJECTS
            </h6>
            <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight text-[#1a1a1a] dark:text-white">
           A showcase of my recent work.
            </h2>
          </div>
          
          {/* Main "View All" Button - Same Style */}
          <IndependentButton 
            href="/projects"
            text="View all projects"
            className="px-8 py-4 min-w-[200px]"
          />
        </div>
      </div>

      {/* Slider Section */}
      <div className="container mx-auto px-5 lg:px-10 relative">
        <div className="overflow-hidden" ref={containerRef}>
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
          >
            {ASSETS.projects.map((project) => (
              <div 
                key={project.id} 
                className="flex-shrink-0 px-3 box-border"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                {/* Card Container */}
                <div className="bg-white dark:bg-gray-900 h-full p-3 rounded-xl border border-gray-400 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  
                  {/* Compact Image */}
                  <div className="relative mb-4 overflow-hidden w-full h-[180px] rounded-lg bg-gray-100">
                    <img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <h6 className="mb-1 text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      {project.category}
                    </h6>
                    <h5 className="mb-2 text-lg font-bold text-[#1a1a1a] dark:text-white truncate">
                      {project.title}
                    </h5>
                    
                    <p className="mb-4 text-xs text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 text-[10px] font-semibold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Buttons Container: مفروقين ب gap-3 */}
                    <div className="flex items-center gap-3 mt-auto">
                      
                      {/* Button 1: View Project */}
                      <IndependentButton 
                        href={project.link}
                        text="View Project"
                        className="flex-1 py-3 rounded-md shadow-sm"
                        icon={
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        }
                      />
                      
                      {/* Button 2: Code (GitHub) */}
                      <IndependentButton 
                        href="#"
                        text="Code"
                        className="flex-1 py-3 rounded-md shadow-sm"
                        icon={
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        }
                      />

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <div className="flex gap-2 order-2 md:order-1">
            {ASSETS.projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#1a1a1a] dark:bg-white w-8' 
                    : 'bg-gray-300 dark:bg-gray-700 w-2 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2 order-1 md:order-2">
            <button 
              onClick={prevSlide}
              className="h-10 w-10 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-full    transition-all"
            >
              <img src={ASSETS.arrows.left} alt="Prev" className="w-3 h-3 hover:invert-0 dark:invert dark:hover:invert-0" />
            </button>
            <button 
              onClick={nextSlide}
              className="h-10 w-10 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-full    transition-all"
            >
              <img src={ASSETS.arrows.right} alt="Next" className="w-3 h-3 hover:invert-0 dark:invert dark:hover:invert-0 " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}