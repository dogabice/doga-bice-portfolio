import type { Metadata } from "next";
import Navbar from "@/components/home/navbar";
import ProjectGallery from "@/components/home/project-gallery";

export const metadata: Metadata = { title: "Selected Work", description: "Selected product and digital experience case studies." };

export default function WorkPage() { return <main className="min-h-screen overflow-hidden text-[#F6EFE8]"><Navbar /><ProjectGallery variant="expanded" /></main>; }
