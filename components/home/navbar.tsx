"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/ui/language-provider";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const mobileRoutes = [
  { href: "/#home", tr: "Ana Sayfa", en: "Home" },
  { href: "/expertise", tr: "Uzmanlık", en: "Expertise" },
  { href: "/work", tr: "Projeler", en: "Work" },
  { href: "/work-experience", tr: "Deneyim", en: "Experience" },
  { href: "/contact", tr: "İletişim", en: "Contact" },
];

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const tr = language === "tr";
  return (
    <header className="relative z-50 mx-auto max-w-[1500px] px-3 pt-0 md:px-5 lg:px-6">
      <nav aria-label={tr ? "Ana gezinme" : "Main navigation"} className="flex items-center gap-1 md:gap-0">
        <Link
          href="/"
          className="group relative -ml-2 flex shrink-0 -translate-y-3 items-center py-2 md:-ml-3 md:-translate-y-4"
          aria-label="Doğa Bice home"
        >
          <span className="pointer-events-none absolute inset-0 -z-10 scale-75 rounded-full bg-[#E8A96B]/10 opacity-0 blur-2xl transition duration-500 group-hover:scale-100 group-hover:opacity-100" />
          <Image
            src="/doga-bice-signature-2026.png"
            alt="Doğa Bice signature"
            width={1774}
            height={887}
            priority
            className="h-auto w-44 object-contain drop-shadow-[0_8px_18px_rgba(232,169,107,0.18)] transition duration-500 group-hover:scale-[1.045] group-hover:drop-shadow-[0_10px_24px_rgba(232,169,107,0.3)] md:w-64 lg:w-72"
          />
        </Link>

        <div className="relative ml-[-1.25rem] min-w-0 max-w-[1080px] flex-1 md:ml-[-2.5rem]">
          <div className="relative flex min-h-[50px] w-full -translate-y-2 items-center justify-end px-2.5 py-1.5 xl:justify-between xl:pl-10 xl:pr-2">
          <div className="relative z-10 hidden items-center gap-1 text-sm font-medium text-[#E1B779] xl:flex xl:gap-2">
            <Link href="/#home" className="relative px-3 py-2 transition duration-300 hover:text-[#FFD99A] after:absolute after:bottom-0 after:left-3 after:h-px after:w-0 after:bg-[#E8A96B] after:transition-[width] hover:after:w-[calc(100%-1.5rem)] lg:px-4 lg:after:left-4 lg:hover:after:w-[calc(100%-2rem)]">
              {tr ? "Ana Sayfa" : "Home"}
            </Link>
            <Link href="/expertise" className="relative px-3 py-2 transition duration-300 hover:text-[#FFD99A] after:absolute after:bottom-0 after:left-3 after:h-px after:w-0 after:bg-[#E8A96B] after:transition-[width] hover:after:w-[calc(100%-1.5rem)] lg:px-4 lg:after:left-4 lg:hover:after:w-[calc(100%-2rem)]">
              {tr ? "Uzmanlık" : "Expertise"}
            </Link>
            <Link href="/work" className="relative px-3 py-2 transition duration-300 hover:text-[#FFD99A] after:absolute after:bottom-0 after:left-3 after:h-px after:w-0 after:bg-[#E8A96B] after:transition-[width] hover:after:w-[calc(100%-1.5rem)] lg:px-4 lg:after:left-4 lg:hover:after:w-[calc(100%-2rem)]">
              {tr ? "Projeler" : "Work"}
            </Link>
            <Link href="/work-experience" className="relative px-3 py-2 transition duration-300 hover:text-[#FFD99A] after:absolute after:bottom-0 after:left-3 after:h-px after:w-0 after:bg-[#E8A96B] after:transition-[width] hover:after:w-[calc(100%-1.5rem)] lg:px-4 lg:after:left-4 lg:hover:after:w-[calc(100%-2rem)]">
              {tr ? "Deneyim" : "Experience"}
            </Link>
            <Link href="/contact" className="relative px-3 py-2 transition duration-300 hover:text-[#FFD99A] after:absolute after:bottom-0 after:left-3 after:h-px after:w-0 after:bg-[#E8A96B] after:transition-[width] hover:after:w-[calc(100%-1.5rem)] lg:px-4 lg:after:left-4 lg:hover:after:w-[calc(100%-2rem)]">
              {tr ? "İletişim" : "Contact"}
            </Link>
          </div>

          <div className="relative z-10 flex shrink-0 items-center gap-2 md:gap-3">
            <div role="group" aria-label={tr ? "Dil seçimi" : "Language selection"} className="flex rounded-full border border-[#E8A96B]/30 bg-[#E8A96B]/[.07] p-1 text-[11px] font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
              <button type="button" onClick={() => setLanguage("tr")} aria-label="Türkçe" aria-pressed={tr} className={`min-h-9 rounded-full px-2.5 py-1.5 transition focus-visible:outline-2 focus-visible:outline-[#E8A96B] ${tr ? "bg-[#E8A96B] text-[#120D13] shadow-[0_3px_12px_rgba(232,169,107,0.25)]" : "text-[#D8C5AB] hover:text-[#FFE1A8]"}`}>TR</button>
              <button type="button" onClick={() => setLanguage("en")} aria-label="English" aria-pressed={!tr} className={`min-h-9 rounded-full px-2.5 py-1.5 transition focus-visible:outline-2 focus-visible:outline-[#E8A96B] ${!tr ? "bg-[#E8A96B] text-[#120D13] shadow-[0_3px_12px_rgba(232,169,107,0.25)]" : "text-[#D8C5AB] hover:text-[#FFE1A8]"}`}>EN</button>
            </div>
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger aria-label={tr ? "Menüyü aç" : "Open menu"} className="grid h-11 w-11 place-items-center rounded-full border border-[#E8A96B]/40 text-[#E8A96B] transition hover:bg-[#E8A96B]/15 focus-visible:outline-2 focus-visible:outline-[#E8A96B] xl:hidden">
                <Menu className="h-5 w-5" aria-hidden="true" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(21rem,88vw)] border-l border-[#E8A96B]/30 bg-[#211826] p-7 text-[#F6EFE8] shadow-2xl" aria-label={tr ? "Sayfa menüsü" : "Page menu"}>
                <SheetTitle className="mt-10 text-xs font-medium uppercase tracking-[.3em] text-[#E8A96B]">Doğa Bice</SheetTitle>
                <SheetDescription className="sr-only">{tr ? "Portfolyo sayfaları" : "Portfolio pages"}</SheetDescription>
                <div className="mt-4 border-t border-[#E8A96B]/40">
                  {mobileRoutes.map((route, index) => (
                    <Link key={route.href} href={route.href} onClick={() => setMenuOpen(false)} className="flex min-h-16 items-center gap-5 border-b border-white/15 text-xl font-medium tracking-tight transition hover:text-[#E8A96B] focus-visible:outline-2 focus-visible:outline-[#E8A96B]">
                      <span className="text-[10px] tracking-[.2em] text-[#E8A96B]">{String(index + 1).padStart(2, "0")}</span>
                      {tr ? route.tr : route.en}
                    </Link>
                  ))}
                </div>
                <a href="mailto:bicedoga@gmail.com" className="mt-auto inline-flex min-h-12 items-center gap-2 text-sm text-[#E8A96B] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-[#E8A96B]">
                  {tr ? "Birlikte çalışalım" : "Let’s work together"}<ArrowUpRight className="h-4 w-4" />
                </a>
              </SheetContent>
            </Sheet>
            <span className="hidden h-5 w-px bg-[#E8A96B]/35 sm:block" aria-hidden="true" />
            <a
              href="mailto:bicedoga@gmail.com"
              className="hidden items-center gap-2 rounded-full border border-[#E8A96B]/45 bg-[linear-gradient(135deg,rgba(232,169,107,.20),rgba(255,255,255,.05))] px-4 py-2.5 text-sm font-medium text-[#F9E7C6] shadow-[inset_0_1px_0_rgba(255,255,255,.16),0_10px_25px_rgba(0,0,0,.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#E8A96B]/80 hover:bg-[#E8A96B]/28 sm:inline-flex"
            >
              {tr ? "İletişime geç" : "Let’s talk"}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
