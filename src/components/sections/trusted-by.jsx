import Image from "next/image";

const logos = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/images/6078b0cd748b8581836fddf5_Group_20334-2.png",
    alt: "Company 1",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/images/6078b0ccdbeafadf1a24d34a_Group_20333-3.png",
    alt: "Company 2",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/images/6078b0c238e88c2e55fe84cf_Group_20335-4.png",
    alt: "Company 3",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/images/6078b0c235209438ffca029b_Group_20336-5.png",
    alt: "Company 4",
  },
];

export default function TrustedBySection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-10 max-w-[1200px]">
        <h6 className="text-sm font-semibold uppercase tracking-[0.05em] text-[#666666] dark:text-gray-400 mb-10 text-center">
          Trusted by
        </h6>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center h-[60px] opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={60}
                className="object-contain max-h-[60px] w-auto dark:invert dark:opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}