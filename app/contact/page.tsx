import type { Metadata } from "next";
import Navbar from "@/components/home/navbar";
import Contact from "@/components/home/contact";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with Doğa Bice." };

export default function ContactPage() { return <main className="min-h-screen overflow-hidden text-[#F6EFE8]"><Navbar /><Contact /></main>; }
