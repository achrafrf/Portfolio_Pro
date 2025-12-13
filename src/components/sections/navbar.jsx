"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // تعريف الروابط هنا ليسهل التعديل عليها لاحقاً
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "PROJECTS", href: "#projects" },
    { name: "SKILLS", href: "#skills" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <div className="w-full bg-transparent z-[1000] relative">
      <div 
        role="banner" 
        className="block fixed top-0 left-0 right-0 w-full h-[81px] bg-white dark:bg-neutral-950 z-[1000] border-b border-[#e5e5e5] dark:border-gray-700 transition-colors duration-300"
      >
        <div className="container mx-auto h-full flex items-center justify-between px-5 lg:px-10 max-w-[1200px]">
          
          {/* Logo Section */}
          <Link 
            href="/" 
            className="shrink-0 flex items-center group"
            aria-label="home"
          >
            <span 
              className="text-3xl font-black tracking-widest text-white transition-transform duration-300 group-hover:scale-105"
              style={{
                // 1. هنا زدنا السمك لـ 2px باش يبان واضح
                WebkitTextStroke: "2px black", 
                // 2. هادي مهمة جداً: كاتخلي الـ Stroke يخرج لبرا وماياكلش من اللون الأبيض
                paintOrder: "stroke fill",
                // 3. تأثير ظل خفيف باش يزيد يوضح الإطار
                filter: "drop-shadow(2px 2px 0px rgba(0,0,0,0.2))" 
              }}
            >
              PORTFOLIO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav role="navigation" className="hidden md:flex items-center h-full gap-6">
            {navLinks.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="relative text-sm font-bold uppercase tracking-wide text-black dark:text-gray-200 hover:text-[#3c46ff] dark:hover:text-[#3c46ff] transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-neutral-950 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </nav>

          {/* Mobile Section */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            
            <div 
              className="cursor-pointer p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                 <X className="w-8 h-8 text-black dark:text-white" />
              ) : (
                 <Menu className="w-8 h-8 text-black dark:text-white" />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-[81px] left-0 right-0 bg-white dark:bg-gray-900 border-b-4 border-gray-700 dark:border-gray-700 shadow-xl animate-in slide-in-from-top-2 z-[999]">
            <div className="flex flex-col p-26 gap-4 text-center">
              {navLinks.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="text-lg font-bold uppercase text-black dark:text-white hover:text-[#3c46ff] py-3 border-b border-gray-100 dark:border-gray-800 last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}