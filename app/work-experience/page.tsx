import type { Metadata } from "next";
import Navbar from "@/components/home/navbar";
import CareerProfile from "@/components/home/career-profile";

export const metadata: Metadata = {
  title: "Career",
  description: "Doğa Bice's education and professional experience across product, AI and software engineering.",
};

export default function WorkExperiencePage() {
  return (
    <main className="min-h-screen overflow-hidden text-foreground">
      <Navbar />
      <CareerProfile />
    </main>
  );
}
