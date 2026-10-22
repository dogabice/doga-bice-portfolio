import type { Metadata } from "next";
import YuviaCaseStudy from "@/components/project/yuvia-case-study";

export const metadata: Metadata = {
  title: "Yuvia — From Capstone to Live Product",
  description: "Yuvia grew from a university capstone into a live pet adoption platform built and maintained by Doğa Bice and a friend across iOS, Android and the web.",
  openGraph: {
    title: "Yuvia — Doğa Bice",
    description: "A university capstone turned live pet adoption platform, built and developed by Doğa Bice and a friend.",
    images: ["/work/yuvia/stories/07-discover.jpg"],
  },
};

export default function YuviaPage() {
  return <YuviaCaseStudy />;
}
