import Image from 'next/image';

const ASSETS = {
  icon1: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/svgs/5fef584362e74acfa6b75398_Group_2051-3.svg",
  icon2: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/svgs/5fef5843b6409375f7c23f2b_Group_2017-4.svg",
  icon3: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/svgs/5fef58435ceaed068dde60ca_Group_2016-5.svg"
};

const SERVICES_DATA = [
  {
    id: 1,
    icon: ASSETS.icon1,
    title: "What I can do for you",
    description: "Faster, better products that your users love. Here's all the services I provide:",
    points: [
      { text: "Design Strategy", bold: false },
      { text: "Web and Mobile App Design", bold: false },
      { text: "Front-end Development", bold: false },
    ]
  },
  {
    id: 2,
    icon: ASSETS.icon2,
    title: "Applications I'm fluent in",
    description: "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual.",
    points: [
      { text: "Sketch", bold: false },
      { text: "Webflow", bold: false },
      { text: "Figma", bold: true },
    ]
  },
  {
    id: 3,
    icon: ASSETS.icon3,
    title: "What you can expect",
    description: "I design products that are more than pretty. I make them shippable and usable.",
    points: [
      { text: "Clean and functional", bold: false },
      { text: "Device and user friendly", bold: false },
      { text: "Efficient and maintainable", bold: false },
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="Services" className="py-20 bg-background dark:bg-gray-900 text-foreground dark:text-white">
      <div className="w-full max-w-[1215px] mx-auto px-10">
        <div className="flex flex-col mb-16 items-start">
          <h6 className="text-sm font-semibold uppercase tracking-[0.05em] mb-4 bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#F97316] text-transparent bg-clip-text inline-block">
            Services
          </h6>
          <h2 className="text-[48px] font-bold leading-[1.2] text-[#1A1A1A] dark:text-white max-w-3xl">
            Design that solves problems, one product at a time.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div 
              key={service.id} 
              className="bg-white dark:bg-gray-800 border border-[#E5E5E5] dark:border-gray-700 rounded-lg p-8 transition-shadow duration-300 hover:shadow-lg flex flex-col"
            >
              <div className="mb-4">
                <Image 
                  src={service.icon} 
                  alt={service.title} 
                  width={48} 
                  height={48} 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h5 className="text-[20px] font-bold text-[#1A1A1A] dark:text-white mb-3 leading-[1.4]">
                {service.title}
              </h5>
              <p className="text-[16px] text-[#666666] dark:text-gray-300 mb-6 leading-[1.6]">
                {service.description}
              </p>
              <div className="flex flex-col gap-3 mt-auto">
                {service.points.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] dark:bg-white flex-shrink-0" />
                    <span className={`text-[16px] text-[#1A1A1A] dark:text-gray-200 ${point.bold ? 'font-bold' : 'font-normal'}`}>
                      {point.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}