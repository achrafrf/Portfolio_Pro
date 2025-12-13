"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design.",
    name: "John Frankin",
    title: "Founder, Double Bunch",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/images/604773c422dbe6174ff754e5_jake-nackos-IF9TK5Uy-KI-u-16.png",
  },
  {
    id: 2,
    quote: "This is unbelievable. After using Testimonial Generator my business skyrocketed!",
    name: "Sarah Miller",
    title: "CEO, TechGrowth",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/images/604788d804dfe4ec1de7bb97_image-1-compressed-15.jpg",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-background dark:bg-neutral-950 py-20 lg:py-32 w-full">
      <div className="container mx-auto px-6 md:px-10 max-w-[1280px]">
        <div className="mb-16 lg:mb-24">
          <h6 className="text-[14px] font-semibold uppercase tracking-[0.05em] text-[#D4A5D9] mb-4">
            Testimonials
          </h6>
          <h2 className="text-4xl md:text-[48px] font-bold leading-[1.2] text-[#1a1a1a] dark:text-white">
            Word on the street
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative w-full aspect-[4/5] md:aspect-square lg:h-[500px] lg:w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
            <Image
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              fill
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>

          <div className="flex flex-col justify-center h-full">
            <div className="mb-6 lg:mb-8">
              <svg
                width="40"
                height="40"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#EC4899] w-10 h-10 md:w-12 md:h-12"
              >
                <path 
                   d="M9.12 6.4C6.336 8.704 4.56 12.064 4.08 16.48H9.6V25.6H0V16C0 10.72 2.784 6.208 7.392 3.2L9.12 6.4ZM24.48 6.4C21.696 8.704 19.92 12.064 19.44 16.48H24.96V25.6H15.36V16C15.36 10.72 18.144 6.208 22.752 3.2L24.48 6.4Z" 
                   fill="currentColor" 
                />
              </svg>
            </div>

            <div className="mb-10 lg:mb-12 min-h-[160px] flex items-center">
              <p className="text-[20px] md:text-[24px] lg:text-[28px] font-medium leading-[1.4] md:leading-[1.5] text-[#1a1a1a] dark:text-white">
                {currentTestimonial.quote}
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-0 mt-auto">
              <div className="flex flex-col">
                <h5 className="text-[18px] font-bold text-[#1a1a1a] dark:text-white mb-1">
                  {currentTestimonial.name}
                </h5>
                <span className="text-[14px] text-[#666666] dark:text-gray-400">
                  {currentTestimonial.title}
                </span>
              </div>

              <div className="flex items-center gap-0">
                <button
                  onClick={handlePrev}
                  className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-black dark:bg-white hover:bg-[#F97316] text-white dark:text-black transition-colors duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-x-0.5" />
                </button>
                <button
                  onClick={handleNext}
                  className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-black hover:bg-[#F97316] text-white transition-colors duration-300 border-l border-white/10"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}