import type { Metadata } from "next";
import ProjectCaseStudy from "@/components/project/project-case-study";
import { getProjectStory } from "@/lib/project-stories";

export const metadata: Metadata = {
  title: "E-Paw — Doğa Bice",
  description: "E-Paw mobil sağlık ve sahiplendirme prototipi: kayıtlar, randevular ve AI destekli aşı etiketi tanıma.",
};

export default function EPawPage() {
  return <ProjectCaseStudy project={getProjectStory("e-paw")} />;
}
