import type { Metadata } from "next";
import ProjectCaseStudy from "@/components/project/project-case-study";
import { getProjectStory } from "@/lib/project-stories";

export const metadata: Metadata = {
  title: "UnifyMatch — Doğa Bice",
  description: "UnifyMatch için tasarladığım B2B dijital deneyim, bilgi mimarisi ve hizmet anlatısı.",
};

export default function UnifyMatchPage() {
  return <ProjectCaseStudy project={getProjectStory("unifymatch")} />;
}
