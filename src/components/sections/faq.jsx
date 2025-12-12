"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ARROW_ICON = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/svgs/5fef58435e05bd67f4a4c972_arrow-down-s-line_201-16.svg";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#333333] py-6 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center group cursor-pointer text-left bg-transparent p-0 border-none outline-none"
        type="button"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-white pr-6 select-none leading-snug">
          {question}
        </h3>
        <div className={`flex-shrink-0 transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <Image 
            src={ARROW_ICON} 
            alt="" 
            width={16} 
            height={16}
            className="w-4 h-4 opacity-100"
          />
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[#cccccc] leading-relaxed text-base font-normal">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const leftColumnFAQs = [
    {
      question: "What type of projects do you take on?",
      answer: "I usually work on B2C software, that's my forte--where I shine best. But I also have about 15 B2B software products in my portfolio. I do end-to-end product design + branding."
    },
    {
      question: "What is your hourly rate?",
      answer: "I only charge hourly for my ongoing projects that need work on the regular. One-time projects are charged upfront to keep it transparent and clean! My hourly rate is $100."
    },
    {
      question: "What time-zone do you work in?",
      answer: "I work Pacific Standard Time, but I'm always ready to help out in emergencies, no matter the hour."
    },
    {
      question: "What is the typical timeline for a project?",
      answer: "Depends on the scope of the project, really. Some projects take less than a week. Some take months. The best way to find out is to get on a quick call with me, and discuss it. No strings attached!"
    }
  ];

  const rightColumnFAQs = [
    {
      question: "How do you charge for projects?",
      answer: "I quote a price upfront--so that you know exactly what you're paying and for what, and there are no surprises later. The exact cost of your project depends on the scope and requirements!"
    },
    {
      question: "What does your design process look like?",
      answer: "I take a problem-forward approach. Whether we're iterating on an existing product or building a new one from scratch, how to solve the user's problem in the simplest way possible is my first concern. Send me an email to understand my process in depth!"
    },
    {
      question: "What metrics do you use to measure success?",
      answer: "The best metrics are customer adoption, happiness, task success, and engagement. There are a number of frameworks such as the System Usability Scale that help us understand product performance and I'm happy to help with that."
    },
    {
      question: "What if I need help after the project is complete?",
      answer: "I always make sure to help out my clients one month after the project ends, for free. For any help post that, we can work out an ongoing arrangement!"
    }
  ];

  return (
    <section className="bg-black py-20 lg:py-24" id="faq">
      <div className="container mx-auto px-10 max-w-[1200px]">
        <div className="flex flex-col items-center mb-16 text-center">
          <h6 className="text-[#EC4899] text-sm uppercase tracking-[0.05em] font-semibold mb-4 leading-normal">
            FAQ
          </h6>
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Frequently asked questions
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-0 gap-x-12 lg:gap-x-16 items-start">
          <div className="flex flex-col w-full">
            {leftColumnFAQs.map((faq, index) => (
              <FAQItem key={`left-${index}`} {...faq} />
            ))}
          </div>
          <div className="flex flex-col w-full">
            {rightColumnFAQs.map((faq, index) => (
              <FAQItem key={`right-${index}`} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
