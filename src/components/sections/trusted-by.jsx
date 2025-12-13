"use client";

import Image from "next/image";

const logos = [
  {
    src: "/ofppt.png",
    alt: "OFPPT",
  },
  {
    src: "/emmap.png",
    alt: "EMMAP",
  },
  {
    src: "/datafc.png",
    alt: "DataFC",
  },
  {
    src: "/openclassrom.webp",
    alt: "OpenClassrooms",
  },
];

export default function TrustedBySection() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 overflow-hidden">
      <div className="container mx-auto px-5 lg:px-10 max-w-[1200px]">
        <h6 className="text-sm font-bold uppercase tracking-[0.2em] text-[#666666] dark:text-gray-400 mb-12 text-center">
          EDUCATION & INSTITUTIONS
        </h6>

        {/* 
          Container الرئيسي
          - [mask-image] هو السر لعمل التدرج في الجوانب (Fade effect)
        */}
        <div 
          className="relative w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          {/* 
            هذا الـ Ul يتحرك باستمرار 
            نقوم بتكراره مرتين لخلق الوهم بالحركة اللانهائية
          */}
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {logos.map((logo, index) => (
              <li key={index}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={60}
                  className="h-[50px] w-auto object-contain"
                />
              </li>
            ))}
          </ul>

          {/* النسخة الثانية (Duplicate) للعملية اللانهائية */}
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            {logos.map((logo, index) => (
              <li key={`duplicate-${index}`}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={60}
                  className="h-[50px] w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 
         إضافة الـ Animation في نفس الملف 
         (يمكنك إضافتها في tailwind.config.js للحصول على كود أنظف)
      */}
      <style jsx global>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }
        /* لتغيير الاتجاه (من اليسار لليمين) فقط اعكس القيم في الـ keyframes */
      `}</style>
    </section>
  );
}