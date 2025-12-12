import React from "react";

export default function AboutSection() {
  return (
    <section id="About" className="bg-background py-[80px]">
      <div className="container mx-auto px-6 md:px-10 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="relative h-[320px] md:h-[400px] w-full rounded-none overflow-hidden">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/images/60751db05a9a1b47d320c2a0_image_processing20200129--11.png"
              alt="Mobile app design showing wallet interface"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative h-[320px] md:h-[400px] w-full rounded-none overflow-hidden">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/images/60751db04d121379342550c6_image_processing20200129--12.png"
              alt="Designer workspace with dual monitors"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative h-[320px] md:h-[400px] w-full rounded-none overflow-hidden">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/images/60751db006dd19aa20e10edf_image_processing20200129--13.png"
              alt="Designer working on laptop at desk"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="mb-20">
          <h6 className="text-[14px] font-semibold uppercase tracking-wider text-[#d4a5d9] mb-4">
            Product Designer
          </h6>
          <h2 className="text-[48px] font-bold text-[#1a1a1a] leading-[1.2] mb-6">
            That's me!
          </h2>
          <p className="text-[18px] leading-[1.6] text-[#666666] max-w-3xl">
            Over the past 12 years, I've worked with a diverse range of clients,
            from startups to Fortune 500 companies. I love crafting interfaces
            that delight users and help businesses grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 relative flex-shrink-0">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/icons/6078acfa53127ebc015bee91_Group_2072-1.png"
                  alt="Education icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[32px] font-bold text-[#1a1a1a]">
                Education
              </h3>
            </div>

            <div className="flex flex-col">
              <ResumeItem
                title="Stanford University"
                subtitle="MSc (Human Computer Interaction)"
                date="2013-2015"
              />
              <ResumeItem
                title="MIT Summer School"
                subtitle="UX Training Bootcamp"
                date="2013-2014"
              />
              <ResumeItem
                title="California State University"
                subtitle="BSc in Software Engineering"
                date="2009-2012"
                isLast
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 relative flex-shrink-0">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/icons/6078acfd46b89d8f2ccece66_Group_2073-2.png"
                  alt="Work Experience icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[32px] font-bold text-[#1a1a1a]">
                Work Experience
              </h3>
            </div>

            <div className="flex flex-col">
              <ResumeItem
                title="SpaceFleet"
                subtitle="Senior Product Designer"
                date="April 2019 - Current"
                icon={<RocketIcon />}
                iconBg="bg-[#fce7f3]"
                iconColor="text-[#ec4899]"
              />
              <ResumeItem
                title="MusicMash"
                subtitle="Information Architect"
                date="April 2016 - May 2017"
                icon={<MusicIcon />}
                iconBg="bg-[#dbeafe]"
                iconColor="text-[#3b82f6]"
              />
              <ResumeItem
                title="Kingdom"
                subtitle="UI Designer"
                date="April 2016 - May 2017"
                icon={<CrownIcon />}
                iconBg="bg-[#fef9c3]"
                iconColor="text-[#ca8a04]"
                isLast
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResumeItem({
  title,
  subtitle,
  date,
  icon,
  iconBg,
  iconColor,
  isLast = false,
}: {
  title: string;
  subtitle: string;
  date: string;
  icon?: React.ReactNode;
  iconBg?: string;
  iconColor?: string;
  isLast?: boolean;
}) {
  return (
    <a
      href="#"
      className={`group flex items-start gap-5 py-8 ${
        !isLast ? "border-b border-[#e5e5e5]" : ""
      }`}
    >
      {icon && (
        <div
          className={`w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center ${iconBg} ${iconColor}`}
        >
          {icon}
        </div>
      )}

      <div className="flex-grow w-full">
        <div className="flex justify-between items-start mb-2">
          <h5 className="text-[20px] font-bold text-[#1a1a1a]">{title}</h5>
          <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1">
            <ArrowIcon />
          </div>
        </div>
        <div className="flex justify-between items-end flex-wrap gap-y-2">
          <span className="text-[14px] text-[#666666] font-normal">
            {subtitle}
          </span>
          <span className="text-[14px] text-[#1a1a1a] font-medium text-right">
            {date}
          </span>
        </div>
      </div>
    </a>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.16699 12.8333L12.8337 1.16666M12.8337 1.16666H3.50033M12.8337 1.16666V10.5"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4" />
      <path d="m2 4 5 16h10l5-16" />
      <path d="M12 9v11" />
    </svg>
  );
}
