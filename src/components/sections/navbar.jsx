"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/svgs/6078ab3cfa1bca879adb93d1_Group_2070-1.svg";
  const arrowUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/svgs/5ff019fc559a4200eda62273_Vector-2.svg";

  return (
    <div className="w-full bg-transparent z-[1000] relative">
      <div 
        role="banner" 
        className="block fixed top-0 left-0 right-0 w-full h-[81px] bg-white z-[1000] border-b border-[#e5e5e5]"
      >
        <div className="container mx-auto h-full flex items-center justify-between px-10 max-w-[1200px]">
          <Link 
            href="/" 
            className="relative block w-[203px] h-[28px] shrink-0"
            aria-label="home"
          >
           <Image
              src={logoUrl}
              alt="Portfolio Creator Logo"
              width={203}
              height={28}
              className="object-contain w-full h-full"
              priority
            />
          </Link>

          <nav role="navigation" className="hidden md:flex items-center h-full">
            <Link 
              href="#About" 
              className="inline-block relative px-2.5 py-2.5 mr-5 text-base text-black font-normal hover:opacity-70 transition-opacity"
            >
              About
            </Link>
            <Link 
              href="#Services" 
              className="inline-block relative px-2.5 py-2.5 mr-5 text-base text-black font-normal hover:opacity-70 transition-opacity"
            >
              Services
            </Link>
            <Link 
              href="#projects" 
              className="inline-block relative px-2.5 py-2.5 mr-5 text-base text-black font-normal hover:opacity-70 transition-opacity"
            >
              Projects
            </Link>
            <Link 
              href="#blog" 
              className="inline-block relative px-2.5 py-2.5 mr-5 text-base text-black font-normal hover:opacity-70 transition-opacity"
            >
              Blog
            </Link>
            
            <Link 
              href="#contact" 
              className="inline-flex items-center group px-2.5 py-2.5"
            >
              <div className="flex items-center">
                <div className="text-base text-black font-normal mr-2 group-hover:opacity-70 transition-opacity">
                  Book a call
                </div>
                <div className="flex items-center w-[13px] h-[13px] text-[#3c46ff]">
                  <Image 
                    src={arrowUrl} 
                    alt="" 
                    width={13} 
                    height={13}
                    className="block w-[13px] h-[13px]" 
                  />
                </div>
              </div>
            </Link>
          </nav>

          <div 
            className="md:hidden p-[18px] cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            role="button"
            aria-label="menu"
          >
            {isMobileMenuOpen ? (
               <X className="w-6 h-6 text-[#333]" />
            ) : (
               <Menu className="w-6 h-6 text-[#333]" />
            )}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-[81px] left-0 right-0 bg-white border-b border-[#e5e5e5] px-10 py-5 flex flex-col gap-4 md:hidden shadow-lg animate-in slide-in-from-top-2">
            <Link 
              href="#About" 
              className="text-base text-black font-normal py-2 hover:opacity-70"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#Services" 
              className="text-base text-black font-normal py-2 hover:opacity-70"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#projects" 
              className="text-base text-black font-normal py-2 hover:opacity-70"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="#blog" 
              className="text-base text-black font-normal py-2 hover:opacity-70"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="#contact" 
              className="text-base text-[#3c46ff] font-normal py-2 flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a call
              <Image 
                src={arrowUrl} 
                alt="" 
                width={13} 
                height={13}
                className="w-[13px] h-[13px]" 
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
