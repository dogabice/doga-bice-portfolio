"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/ui/language-provider";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const routes = [
  { href: "/work", tr: "Projelerim", en: "My projects" },
  { href: "/work-experience", tr: "Kariyer yolculuğum", en: "My career journey" },
  { href: "/contact", tr: "İletişim", en: "Contact" },
];

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const tr = language === "tr";

  return (
    <header className="relative z-50 mx-auto flex h-[4.5rem] max-w-[1800px] items-center justify-between px-5 md:h-20 md:px-8 lg:px-10">
      <Link href="/" aria-label="Doğa Bice home" className="-ml-2 shrink-0 focus-visible:outline-2 focus-visible:outline-[#E8A96B]">
        <Image
          src="/doga-bice-signature-2026.png"
          alt=""
          width={1774}
          height={887}
          priority
          className="h-auto w-36 object-contain md:w-44"
        />
      </Link>

      <nav aria-label={tr ? "Ana gezinme" : "Main navigation"} className="flex items-center gap-5 md:gap-8">
        <div className="hidden items-center gap-8 md:flex">
          {routes.map((route) => (
            <Link key={route.href} href={route.href} className="text-[.82rem] font-medium text-[#F6EFE8]/70 transition-colors hover:text-[#F6EFE8] focus-visible:text-[#F6EFE8]">
              {tr ? route.tr : route.en}
            </Link>
          ))}
        </div>

        <div role="group" aria-label={tr ? "Dil seçimi" : "Language selection"} className="flex items-center gap-3 text-[.68rem] font-semibold tracking-[.12em]">
          <button type="button" onClick={() => setLanguage("tr")} aria-label="Türkçe" aria-pressed={tr} className={`relative min-h-11 px-1 transition-colors ${tr ? "text-[#E8A96B]" : "text-[#F6EFE8]/45 hover:text-[#F6EFE8]"}`}>
            TR
            {tr && <span className="absolute inset-x-1 bottom-1 h-px bg-[#E8A96B]" aria-hidden="true" />}
          </button>
          <button type="button" onClick={() => setLanguage("en")} aria-label="English" aria-pressed={!tr} className={`relative min-h-11 px-1 transition-colors ${!tr ? "text-[#E8A96B]" : "text-[#F6EFE8]/45 hover:text-[#F6EFE8]"}`}>
            EN
            {!tr && <span className="absolute inset-x-1 bottom-1 h-px bg-[#E8A96B]" aria-hidden="true" />}
          </button>
        </div>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger aria-label={tr ? "Menüyü aç" : "Open menu"} className="grid h-11 w-11 place-items-center text-[#F6EFE8] transition-colors hover:text-[#E8A96B] md:hidden">
            <Menu className="h-5 w-5" aria-hidden="true" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(21rem,88vw)] border-l border-white/10 bg-[#211826] p-7 text-[#F6EFE8]">
            <SheetTitle className="mt-10 text-xs font-medium uppercase tracking-[.3em] text-[#E8A96B]">Doğa Bice</SheetTitle>
            <SheetDescription className="sr-only">{tr ? "Portfolyo sayfaları" : "Portfolio pages"}</SheetDescription>
            <div className="mt-8 border-t border-white/15">
              {routes.map((route, index) => (
                <Link key={route.href} href={route.href} onClick={() => setMenuOpen(false)} className="flex min-h-16 items-center gap-5 border-b border-white/15 text-xl font-medium tracking-tight transition-colors hover:text-[#E8A96B]">
                  <span className="text-[10px] tracking-[.2em] text-[#E8A96B]">{String(index + 1).padStart(2, "0")}</span>
                  {tr ? route.tr : route.en}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
