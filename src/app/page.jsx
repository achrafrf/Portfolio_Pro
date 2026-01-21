import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import HeroReveal from "../components/sections/HeroReveal";
import TimelineScroll from "../components/sections/TimelineScroll";
import TrustedBySection from "@/components/sections/trusted-by";
import SkillsSection from "../components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import BlogSection from "@/components/sections/blog";
import AboutSection from "@/components/sections/about";
import TestimonialsSection from "@/components/sections/testimonials";
import FAQSection from "@/components/sections/faq";
import AchrafFinalExperience from "../components/sections/HeroSnellenberg";
import DesignSection from "../components/sections/DesignSection";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />
      <div className="pt-[81px]">
        {/* <HeroReveal /> */}
        <AchrafFinalExperience />
        {/* <HeroSection /> */}
        {/* <TrustedBySection /> */}
        <TimelineScroll />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <AboutSection />
        <DesignSection />
        <TestimonialsSection />
        <FAQSection />
        <Footer />
      </div>
    </main>
  );
}