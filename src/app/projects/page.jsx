"use client";

import React from 'react';
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

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
    link: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/svgs/5ff019fc559a4200eda62273_Vector-2.svg"
  }
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="pt-[81px]">
        <div className="bg-background dark:bg-gray-900 py-20 lg:py-24 text-foreground dark:text-gray-100 font-body">
          <div className="container mx-auto px-5 lg:px-10">
            <div className="max-w-3xl mb-16">
              <h6 className="mb-4 text-sm font-semibold uppercase tracking-[0.05em] text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#F97316]">
                ALL PROJECTS
              </h6>
              <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.2] text-[#1a1a1a] dark:text-white">
                My Work Portfolio
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Explore my complete collection of projects showcasing branding, product design, and web design work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ASSETS.projects.map((project) => (
                <div 
                  key={project.id} 
                  className="group block bg-white dark:bg-gray-800 h-full relative"
                >
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
                    <h3 className="mb-3 text-xl font-bold text-[#1a1a1a] dark:text-white">
                      {project.title}
                    </h3>
                    
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
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
