import type { Metadata } from "next";
import Navbar from "@/components/home/navbar";
import Expertise from "@/components/home/expertise";
import Approach from "@/components/home/approach";

export const metadata: Metadata = { title: "Expertise", description: "Product, engineering and AI expertise." };

export default function ExpertisePage() { return <main className="min-h-screen overflow-hidden text-[#F6EFE8]"><Navbar /><Expertise /><Approach /></main>; }
