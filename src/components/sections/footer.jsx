import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';

const ASSETS = {
  logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/svgs/6078d43538e88cf8a8ff4464_White_20Logo-17.svg",
  webflowBadgeIcon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/svgs/webflow-badge-icon_f67cd735e3-19.svg",
  webflowBadgeText: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/svgs/webflow-badge-text_6faa6a38cd-20.svg",
};

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
            <Link href="/" className="inline-block relative">
              <Image
                src={ASSETS.logo}
                alt="Portfolio Creator"
                width={203}
                height={41}
                className="w-[203px] h-auto object-contain"
              />
            </Link>
            
            <address className="not-italic text-[#666666] text-[14px] leading-relaxed">
              4353 Delaware Avenue,<br /> San Francisco, USA
            </address>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#1a1a1a] flex items-center justify-center text-white shrink-0">
                <Mail size={16} strokeWidth={2} />
              </div>
              <a
                href="mailto:hi@thefolio.com"
                className="text-[#666666] text-[14px] font-medium hover:text-white transition-colors"
              >
                hi@thefolio.com
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
            <span className="text-[#999999]">Conversionflow</span>
            <span>. Powered by </span>
            <span className="text-[#999999]">Webflow</span>
            <span> / </span>
            <a href="#" className="hover:text-white transition-colors">Image License Info</a>
            <span> / </span>
            <a href="#" className="hover:text-white transition-colors">Instructions</a>
            <span> / </span>
            <a href="#" className="hover:text-white transition-colors">Changelog</a>
            <span> / </span>
            <a href="#" className="hover:text-white transition-colors">Style Guide</a>
          </div>

          <a
            href="https://webflow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-[3px] px-2 py-1 flex items-center gap-2 h-[26px] opacity-90 hover:opacity-100 transition-opacity cursor-pointer shrink-0"
          >
            <Image
              src={ASSETS.webflowBadgeIcon}
              width={16}
              height={16}
              alt=""
              className="w-4 h-4"
            />
            <Image
              src={ASSETS.webflowBadgeText}
              width={58}
              height={12}
              alt="Made in Webflow"
              className="h-3 w-auto"
            />
          </a>
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
