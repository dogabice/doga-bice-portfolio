import type { Metadata } from "next";
import ProjectCaseStudy from "@/components/project/project-case-study";
import { getProjectStory } from "@/lib/project-stories";

export const metadata: Metadata = {
  title: "Istanbul Vibe Finder — Doğa Bice",
  description: "İstanbul için doğal dil ve semantik aramayla mekân keşfini geliştirme aşamasındaki AI ürün çalışması.",
};

export default function IstanbulVibeFinderPage() {
  return <ProjectCaseStudy project={getProjectStory("istanbul-vibe-finder")} />;
}
