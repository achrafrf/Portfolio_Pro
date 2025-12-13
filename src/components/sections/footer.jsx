import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';


export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white pt-20 pb-10 border-t border-[#333333]">
      <div className="w-full max-w-[1200px] mx-auto px-10">
        
        <div className="text-center mb-20">
          <h2 className="text-[48px] md:text-[48px] font-bold leading-[1.2] mb-2 font-display text-white">
            Ready to make something kickass?
          </h2>
          <Link
            href="#"
            className="text-[48px] md:text-[48px] font-bold leading-[1.2] font-display inline-block bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#F97316] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Let's get on a call.
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col items-start gap-6">
             <Link 
            href="/" 
            className="shrink-0 flex items-center group"
            aria-label="home"
          >
            <span 
              className="text-3xl font-black tracking-widest text-black transition-transform duration-300 group-hover:scale-105"
              style={{
                // 1. هنا زدنا السمك لـ 2px باش يبان واضح
                WebkitTextStroke: "2px white", 
                // 2. هادي مهمة جداً: كاتخلي الـ Stroke يخرج لبرا وماياكلش من اللون الأبيض
                paintOrder: "stroke fill",
                // 3. تأثير ظل خفيف باش يزيد يوضح الإطار
                filter: "drop-shadow(2px 2px 0px rgba(0,0,0,0.2))" 
              }}
            >
              PORTFOLIO
            </span>
          </Link>
            
            <address className="not-italic text-[#666666] text-[14px] leading-relaxed">
              Safi, Morocco
            </address>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#1a1a1a] flex items-center justify-center text-white shrink-0">
                <Mail size={16} strokeWidth={2} />
              </div>
              <a
                href="mailto:hi@thefolio.com"
                className="text-[#666666] text-[14px] font-medium hover:text-white transition-colors"
              >
                itsachrafrafiq@gmail.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
            <div className="flex flex-col gap-4">
              <FooterLink href="#About">About</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
              <FooterLink href="https://dribbble.com">Dribbble</FooterLink>
            </div>
            <div className="flex flex-col gap-4">
              <FooterLink href="#Services">Services</FooterLink>
              <FooterLink href="#blog">Blog</FooterLink>
              <FooterLink href="https://instagram.com">Instagram</FooterLink>
            </div>
            <div className="flex flex-col gap-4">
              <FooterLink href="#About">Experience</FooterLink>
              <FooterLink href="#projects">Projects</FooterLink>
              <FooterLink href="#twitter.com">Twitter</FooterLink>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-0 border-t border-transparent text-[#666666] text-[14px] gap-6">
          <div className="leading-relaxed">
            <span>© All rights reserved. </span>
            <span className="text-[#999999]">Achraf Rf</span>
            <span>. Powered by </span>
            <span className="text-[#999999]">Achraf Rafiq</span>
            <span> / </span>
            <a href="#" className="hover:text-white transition-colors">Image License Info</a>
            <span> / </span>
            <a href="#" className="hover:text-white transition-colors">Instructions</a>
            <span> / </span>
            <a href="#" className="hover:text-white transition-colors">Changelog</a>
            <span> / </span>
            <a href="#" className="hover:text-white transition-colors">Style Guide</a>
          </div>

        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-[#EC4899] transition-colors text-[14px] font-normal"
    >
      {children}
    </Link>
  );
}
