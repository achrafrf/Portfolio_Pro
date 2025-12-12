export default function BlogSection() {
  const ARROW_ICON = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/504b9c01-e771-4c77-838c-e978ddcf8e10-portfolio-webflow-html-website-template-webflow-io/assets/svgs/5fef584aacad011eafeb61bc_Vector-2-8.svg";

  const BLOG_POSTS = [
    {
      id: 1,
      date: "April 16, 2021",
      readTime: "6 mins",
      title: "Design tips for designers, that cover everything you need",
      slug: "design-tips-for-designers",
    },
    {
      id: 2,
      date: "April 16, 2021",
      readTime: "5 mins",
      title: "How to build rapport with your web design clients",
      slug: "how-to-build-rapport",
    },
    {
      id: 3,
      date: "April 16, 2021",
      readTime: "5 mins",
      title: "Top 6 free website mockup tools 2021",
      slug: "top-6-free-website-mockup-tools",
    },
    {
      id: 4,
      date: "April 16, 2021",
      readTime: "7 mins",
      title: "Logo design trends to avoid in 2021",
      slug: "logo-design-trends-to-avoid",
    },
  ];

  return (
    <section className="bg-black py-20 text-white font-body section-spacing">
      <div className="container mx-auto px-10 max-w-[1200px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-3">
            <h6 className="text-sm font-semibold uppercase tracking-[0.05em] bg-[linear-gradient(90deg,#7C3AED_0%,#EC4899_50%,#F97316_100%)] bg-clip-text text-transparent w-fit">
              Blogs
            </h6>
            <h2 className="text-[48px] font-bold leading-[1.2] font-display">
              Latest Blogs
            </h2>
          </div>

          <a href="/blog" className="group flex items-center gap-3 text-lg font-medium hover:opacity-80 transition-opacity pb-2">
            <span>View all</span>
            <div className="relative w-[13px] h-[13px] transition-transform duration-300 group-hover:translate-x-1 flex items-center justify-center">
              <img
                src={ARROW_ICON}
                alt="Arrow right"
                width={13}
                height={13}
                className="w-full h-full object-contain invert brightness-0 filter"
              />
            </div>
          </a>
        </div>

        {/* Blog Items */}
        <div className="flex flex-col">
          {BLOG_POSTS.map((post) => (
            <a
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block py-6 border-b border-[#333333] transition-all"
            >
              <div className="flex items-center gap-3 text-sm text-white/70 mb-4 font-body">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-white rounded-full opacity-50 block"></span>
                <span>{post.readTime}</span>
              </div>

              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors font-display leading-[1.4]">
                {post.title}
              </h4>

              <div className="flex items-center gap-3 text-white text-[18px] font-medium font-body group-hover:opacity-80 transition-opacity">
                <span>Read the article</span>
                <div className="relative w-[13px] h-[13px] transition-transform duration-300 group-hover:translate-x-1 flex items-center justify-center">
                  <img
                    src={ARROW_ICON}
                    alt="Arrow right"
                    width={13}
                    height={13}
                    className="w-full h-full object-contain invert brightness-0 filter"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}