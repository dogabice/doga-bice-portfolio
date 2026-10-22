"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import { useLanguage } from "@/components/ui/language-provider";
import PageIntro from "@/components/home/page-intro";

export default function Contact({ standalone = false }: { standalone?: boolean }) {
  const { language } = useLanguage();
  const tr = language === "tr";

  return (
    <section id="contact" className={`relative px-5 py-16 md:px-8 lg:px-10 lg:py-20 ${standalone ? "contact-standalone" : ""}`}>
      <Reveal>
        <div className="mx-auto max-w-7xl">
          <PageIntro
            number="05"
            label={tr ? "İletişim" : "Contact"}
            title={tr ? <>Birlikte <span className="font-serif font-normal italic text-[#E8A96B]">iyi bir ürün</span> çıkaralım.</> : <>Let’s build <span className="font-serif font-normal italic text-[#E8A96B]">something useful</span> together.</>}
            description={tr ? "Yeni bir fikir, geliştirilmesi gereken bir ürün veya birlikte çalışma ihtimali için bana doğrudan yazabilirsin." : "Have an idea, a product to improve or a reason to work together? Write to me directly."}
            as={standalone ? "h1" : "h2"}
          />

          <a href="mailto:bicedoga@gmail.com" className="group mt-12 block border-y border-[#E8A96B]/65 py-7 text-[#F6EFE8] transition-colors hover:border-[#E8A96B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8A96B] md:mt-16 md:py-9">
            <span className="text-[11px] font-semibold uppercase tracking-[.28em] text-[#E8A96B]">{tr ? "Doğrudan yaz" : "Email me directly"}</span>
            <span className="mt-3 flex items-center justify-between gap-3">
              <strong className="min-w-0 text-[clamp(1.35rem,6.2vw,2.1rem)] font-semibold tracking-[-.055em] transition-colors group-hover:text-[#E8A96B] md:text-[clamp(3rem,5.25vw,5.7rem)]">bicedoga@gmail.com</strong>
              <ArrowUpRight className="h-7 w-7 shrink-0 text-[#E8A96B] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:h-10 md:w-10" aria-hidden="true" />
            </span>
          </a>

          <div className="mt-8 flex flex-col gap-6 text-sm text-[#C9BEC4] sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#5EA7A0]" aria-hidden="true" />{tr ? "Yeni ürün iş birliklerine açığım" : "Open to new product collaborations"}</p>
            <nav aria-label={tr ? "Sosyal bağlantılar" : "Social links"} className="flex flex-wrap gap-x-7 gap-y-3">
              <a href="https://github.com/dogabice" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 border-b border-white/25 transition-colors hover:border-[#E8A96B] hover:text-[#E8A96B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A96B]">GitHub <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/in/dogabice" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 border-b border-white/25 transition-colors hover:border-[#E8A96B] hover:text-[#E8A96B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A96B]">LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
            </nav>
          </div>

          <footer className="mt-16 flex flex-col gap-5 border-t border-white/15 pt-6 text-[10px] font-medium uppercase tracking-[.26em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>Doğa Bice · Product engineer</p>
            <p>© 2026 · İstanbul</p>
            <Link href="/" className="inline-flex min-h-10 items-center gap-2 transition-colors hover:text-[#E8A96B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A96B]">{tr ? "Ana sayfaya dön" : "Back home"}<ArrowUpRight className="h-3.5 w-3.5 -rotate-45" aria-hidden="true" /></Link>
          </footer>
        </div>
      </Reveal>
    </section>
  );
}
