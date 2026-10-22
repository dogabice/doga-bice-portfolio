import type { Metadata } from "next";
import ProjectCaseStudy from "@/components/project/project-case-study";
import { getProjectStory } from "@/lib/project-stories";

export const metadata: Metadata = {
  title: "Studio Alâ — Doğa Bice",
  description: "Studio Alâ için tasarladığım iki dilli site, rezervasyon akışı ve stüdyo yönetim paneli.",
};

export default function AlaWellnessPage() {
  return <ProjectCaseStudy project={getProjectStory("ala-wellness")} />;
}
