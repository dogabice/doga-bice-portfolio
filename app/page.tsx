import Navbar from "@/components/home/navbar";
import Hero from "@/components/home/hero";
import Expertise from "@/components/home/expertise";
import Approach from "@/components/home/approach";
import ProjectGallery from "@/components/home/project-gallery";
import Experience from "@/components/home/experience";
import Contact from "@/components/home/contact";
import ScrollProgress from "@/components/home/scroll-progress";
import ScrollAmbient from "@/components/home/scroll-ambient";

export default function HomePage() {
  return (
    <main className="portfolio-flow relative isolate min-h-screen overflow-x-clip text-[#F6EFE8]">
      <ScrollAmbient />
      <ScrollProgress />

      <Navbar />
      <Hero />
      <Expertise />
      <ProjectGallery />
      <Approach />
      <Experience />
      <Contact />
    </main>
  );
}
