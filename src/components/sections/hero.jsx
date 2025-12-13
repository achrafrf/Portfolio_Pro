import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-white dark:bg-neutral-950 w-full font-sans text-[#1a1a1a] dark:text-white transition-colors duration-300">
      {/* Container: Adjusted padding for mobile (px-6) and desktop (px-10) */}
      <div className="container mx-auto px-6 md:px-10 max-w-[1200px] pt-[50px] pb-16 md:pt-[70px] md:pb-20">
        
        {/* Flex layout: Stacked on mobile (flex-col), Row on Desktop (lg:flex-row) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 max-w-[715px] text-center lg:text-left">
            <h1 className="text-[40px] md:text-[50px] lg:text-[65px] font-bold leading-[1.1] tracking-tight text-[#1a1a1a] dark:text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#F97316]">
                Full-Stack Developer 
              </span>
              <br />
                <span className="text-4xl">building scalable web solutions.</span>
            </h1>

            <p className="mt-6 md:mt-8 text-[16px] md:text-[20px] lg:text-[22px] leading-[1.6] text-[#666666] dark:text-gray-300 max-w-[540px] mx-auto lg:mx-0">
              Hi! I'm <span className="font-semibold text-black dark:text-white">Achraf Rafiq</span>, I’m a dedicated Full-Stack Developer building modern web applications.
               I leverage a wide range of frameworks to engineer robust back-ends and interactive front-ends, delivering complete digital solutions.
            </p>

            {/* Buttons Area */}
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8">
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-black dark:bg-white dark:text-black text-white font-semibold text-base overflow-hidden rounded-lg w-full sm:w-auto min-w-[160px]"
              >
                <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-[150%]">
                  Hire Me
                </div>
                <div className="absolute inset-0 z-10 flex items-center justify-center translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
                  Let's Code!
                </div>
                <div className="absolute inset-0 bg-[#F97316] translate-y-full transition-transform duration-300 group-hover:translate-y-0 z-0"></div>
              </Link>

              <Link
                href="#"
                className="inline-flex items-center gap-2 text-base font-semibold text-[#1a1a1a] dark:text-white hover:opacity-80 transition-opacity"
              >
                <span>View Github</span>
                {/* Replaced external image with simple SVG for reliability */}
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative w-full max-w-[350px] lg:max-w-[400px] flex-shrink-0 mt-8 lg:mt-0">
            {/* Added a nice gradient border effect behind the image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#7C3AED] to-[#F97316] rounded-xl blur opacity-30 animate-pulse"></div>
            
            <Image
              src="/image-portfolio.png" // Dir tswira dyalk hna (Example: coding setup or profile pic)
              alt="Full Stack Developer"
              width={400}
              height={500}
              quality={90}
              priority
              className="relative w-full h-auto md:h-[500px] rounded-xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}