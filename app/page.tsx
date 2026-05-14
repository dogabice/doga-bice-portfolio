import AmbientGlow from "@/components/ui/ambient-glow";
import IntroCurtain from "@/components/ui/intro-curtain";
import Navbar from "@/components/home/navbar";
import Hero from "@/components/home/hero";
import Expertise from "@/components/home/expertise";
import ProjectGallery from "@/components/home/project-gallery";
import Experience from "@/components/home/experience";
import Contact from "@/components/home/contact";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden text-[#F6EFE8]">
      <AmbientGlow />
      <IntroCurtain />

      <Navbar />
      <Hero />
      <Expertise />
      <ProjectGallery />
      <Experience />
      <Contact />
    </main>
  );
}