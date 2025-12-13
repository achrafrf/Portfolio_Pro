import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import TrustedBySection from "@/components/sections/trusted-by";
import SkillsSection from "../components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import BlogSection from "@/components/sections/blog";
import AboutSection from "@/components/sections/about";
import TestimonialsSection from "@/components/sections/testimonials";
import FAQSection from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />
      <div className="pt-[81px]">
        <HeroSection />
        <TrustedBySection />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <Footer />
      </div>
    </main>
  );
}