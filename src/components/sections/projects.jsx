"use client";

import React, { useState, useEffect, useRef } from 'react';

const ASSETS = {
  projects: [
    {
      id: 1,
      title: "Soulful Rebrand",
      category: "Branding",
      description: "Complete brand identity redesign with modern aesthetics and cohesive visual language",
      technologies: ["Next.js", "React", "Tailwind CSS", "Figma"],
      img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/images/6077dc9bcd0f7a437038f60d_image_processing20200129--6.png",
      link: "#"
    },
    {
      id: 2,
      title: "Datadash Product design",
      category: "Product Design",
      description: "Analytics dashboard with real-time data visualization and intuitive user experience",
      technologies: ["Laravel", "Vue.js", "MySQL", "Redis"],
      img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/images/6077dcc78ec31466630c033f_image_processing20200129--7.png",
      link: "#"
    },
    {
      id: 3,
      title: "Maize Website Design",
      category: "Web Design",
      description: "Responsive e-commerce platform with seamless checkout and inventory management",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/images/6077dcd635f7f176db9fef1e_image_processing20200129--8.png",
      link: "#"
    },
    {
      id: 4,
      title: "GorillaX Branding",
      category: "Branding",
      description: "Bold fitness brand identity with dynamic logo system and marketing materials",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/images/6077dce7ec07854a8c820c4e_image_processing20200129--9.png",
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
    link: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/svgs/5ff019fc559a4200eda62273_Vector-2.svg"
  }
};

export default function ProjectsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = ASSETS.projects.length;
  const maxIndex = Math.max(0, totalSlides - slidesToShow); 

  const nextSlide = () => {
    if (currentSlide >= maxIndex) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide <= 0) {
      setCurrentSlide(maxIndex);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    const clampedIndex = Math.min(Math.max(0, index), maxIndex);
    setCurrentSlide(clampedIndex);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [currentSlide, maxIndex]);

  return (
    <div id="projects" className="bg-background dark:bg-gray-900 py-20 lg:py-24 text-foreground dark:text-gray-100 font-body overflow-hidden">
      <div className="container mx-auto px-5 lg:px-10 mb-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-0">
          <div className="max-w-2xl">
            <h6 className="mb-4 text-sm font-semibold uppercase tracking-[0.05em] text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#F97316]">
              PROJECTS
            </h6>
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.2] text-[#1a1a1a] dark:text-white">
              I bring results. <br />
              My clients are proof.
            </h2>
          </div>
          
          <a
            href="/projects"
            className="group relative inline-flex items-center justify-center overflow-hidden bg-black dark:bg-white px-8 py-4 text-white dark:text-black min-w-[200px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#EC4899] translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
            
            <div className="relative z-10 flex flex-col items-center">
              <span className="block text-base font-semibold leading-[1.5] transition-transform duration-300 group-hover:-translate-y-10">
                View all projects
              </span>
              <span className="absolute block text-base font-semibold leading-[1.5] translate-y-10 transition-transform duration-300 group-hover:translate-y-0 whitespace-nowrap">
                Let's talk now!
              </span>
            </div>
          </a>
        </div>
      </div>

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
                <div className="group block bg-white dark:bg-gray-800 h-full relative">
                  <div className="relative mb-5 overflow-hidden w-full h-[320px]">
                    <img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <h6 className="mb-2 text-xs font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#F97316]">
                      {project.category}
                    </h6>
                    <h5 className="mb-3 text-xl font-bold text-[#1a1a1a] dark:text-white">
                      {project.title}
                    </h5>
                    
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200/50 dark:border-purple-700/50 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a href={project.link} className="inline-flex items-center gap-2 text-base text-[#1a1a1a] dark:text-gray-200 group/link">
                      <span className="font-medium">View Project</span>
                      <img 
                        src={ASSETS.arrows.link} 
                        alt="" 
                        className="w-4 h-3 transition-transform duration-300 group-hover/link:translate-x-1" 
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <div className="flex gap-3 order-2 md:order-1">
            {ASSETS.projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#1a1a1a] dark:bg-white scale-110' 
                    : 'bg-[#e5e5e5] dark:bg-gray-600 hover:bg-[#cccccc] dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-4 order-1 md:order-2">
            <button 
              onClick={prevSlide}
              className="group flex h-12 w-12 items-center justify-center border border-[#e5e5e5] dark:border-gray-600 hover:border-[#1a1a1a] dark:hover:border-white bg-white dark:bg-gray-800 transition-colors duration-300 hover:bg-[#1a1a1a] dark:hover:bg-white"
              aria-label="Previous slide"
            >
              <img 
                src={ASSETS.arrows.left} 
                alt="Previous" 
                className="w-4 h-4 text-[#1a1a1a] group-hover:brightness-0 group-hover:invert transition-all"
              />
            </button>
            <button 
              onClick={nextSlide}
              className="group flex h-12 w-12 items-center justify-center border border-[#e5e5e5] dark:border-gray-600 hover:border-[#1a1a1a] dark:hover:border-white bg-white dark:bg-gray-800 transition-colors duration-300 hover:bg-[#1a1a1a] dark:hover:bg-white"
              aria-label="Next slide"
            >
              <img 
                src={ASSETS.arrows.right} 
                alt="Next" 
                className="w-4 h-4 text-[#1a1a1a] group-hover:brightness-0 group-hover:invert transition-all"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}