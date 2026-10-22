import type { Metadata } from "next";
import Navbar from "@/components/home/navbar";
import DigitalCard from "@/components/card/digital-card";

export const metadata: Metadata = {
  title: "Dijital kartvizit",
  description: "Doğa Bice'nin iletişim bilgileri, portfolyosu ve sosyal bağlantıları.",
};

export default function CardPage() {
  return (
    <main className="min-h-screen text-[#F6EFE8]">
      <Navbar />
      <DigitalCard />
    </main>
  );
}
