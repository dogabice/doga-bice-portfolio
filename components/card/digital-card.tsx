"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, CodeXml, ContactRound, Globe2, Mail, RotateCcw } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useState, type PointerEvent as ReactPointerEvent } from "react";
import { useLanguage } from "@/components/ui/language-provider";

const links = [
  { href: "mailto:bicedoga@gmail.com", title: "E-posta", en: "Email", detail: "bicedoga@gmail.com", icon: Mail, external: false },
  { href: "https://www.linkedin.com/in/dogabice", title: "LinkedIn", en: "LinkedIn", detail: "linkedin.com/in/dogabice", icon: ContactRound, external: true },
  { href: "/", title: "Web sitesi", en: "Website", detail: "dogabice.vercel.app", icon: Globe2, external: false },
  { href: "/doga-bice.vcf", title: "Kartviziti kaydet", en: "Save contact", detail: "Rehberine ekle", detailEn: "Add to your address book", icon: ContactRound, external: false, download: true },
  { href: "https://github.com/dogabice", title: "GitHub", en: "GitHub", detail: "github.com/dogabice", icon: CodeXml, external: true },
  { href: "/work", title: "Projelerim", en: "My projects", detail: "Seçili işler ve ürünler", detailEn: "Selected work and products", icon: ArrowUpRight, external: false },
];

export default function DigitalCard() {
  const { language } = useLanguage();
  const tr = language === "tr";
  const [open, setOpen] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  const moveCard = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (reduceMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setTilt({ x: -y * 8, y: x * 10 });
  };

  return (
    <section className="relative isolate mx-auto max-w-[1500px] px-5 pb-20 pt-12 md:px-8 md:pt-20 lg:px-10 lg:pb-28" aria-labelledby="card-heading">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(ellipse_at_72%_26%,rgba(143,36,72,.42),transparent_62%)]" aria-hidden="true" />
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,31rem)] lg:gap-20">
        <header className="max-w-2xl lg:pt-10">
          <p className="text-xs font-semibold uppercase tracking-[.3em] text-[#E8A96B]">{tr ? "Dijital kartvizit" : "Digital calling card"}</p>
          <h1 id="card-heading" className="mt-5 text-[clamp(3.4rem,6.8vw,7rem)] font-semibold leading-[.9] tracking-[-.075em]">
            {tr ? "Bağlantıda" : "Let’s stay"}<br /><span className="font-serif font-normal italic text-[#E8A96B]">{tr ? "kalalım." : "connected."}</span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-7 text-[#C9BEC4] md:text-lg md:leading-8">
            {tr ? "Bir fikri konuşmak ya da birlikte üretmek için bana buradan ulaşabilirsin. Kartı çevirerek tüm bağlantılarımı aç." : "Reach me here to discuss an idea or make something together. Turn the card to open all my links."}
          </p>
          <p className="mt-12 hidden border-t border-[#E8A96B]/35 pt-5 text-[11px] font-medium uppercase tracking-[.25em] text-white/50 lg:block">Doğa Bice · Product engineer · İstanbul</p>
        </header>

        <div>
          <div className="mx-auto max-w-[31rem]" style={{ perspective: "1200px" }}>
            <button
              type="button"
              onClick={() => { setOpen((value) => !value); setTilt({ x: 0, y: 0 }); }}
              onPointerMove={moveCard}
              onPointerLeave={() => setTilt({ x: 0, y: 0 })}
              aria-expanded={open}
              aria-controls="card-links"
              aria-label={open ? (tr ? "Kartı ön yüzüne çevir" : "Turn card to its front") : (tr ? "Kartı çevir ve bağlantıları aç" : "Turn card and open links")}
              className="group relative block aspect-[1.58/1] w-full rounded-[1.5rem] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#E8A96B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#120D13]"
              style={{ transformStyle: "preserve-3d", transform: `rotateX(${tilt.x}deg) rotateY(${open ? 180 + tilt.y : tilt.y}deg)`, transition: reduceMotion ? "none" : "transform 650ms cubic-bezier(.22,1,.36,1)" }}
            >
              <span aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-[1.5rem] border border-[#E8A96B]/45 bg-[#181018] shadow-[0_30px_80px_-35px_rgba(0,0,0,.9)]" style={{ backfaceVisibility: "hidden" }}>
                <span className="absolute inset-y-0 right-0 w-[57%]"><Image src="/doga-bice-portrait.jpeg" alt="" fill priority sizes="(max-width: 640px) 57vw, 280px" className="object-cover object-[56%_28%]" /></span>
                <span className="absolute inset-0 bg-[linear-gradient(90deg,#181018_0%,#181018_34%,rgba(24,16,24,.82)_54%,rgba(24,16,24,.08)_100%)]" />
                <span className="absolute inset-y-0 left-0 flex w-[57%] flex-col justify-between p-[clamp(1rem,4vw,1.5rem)]">
                  <span className="text-[clamp(.52rem,1.2vw,.65rem)] uppercase tracking-[.24em] text-[#E8A96B]">{tr ? "Dijital kartvizit" : "Digital calling card"}</span>
                  <span><strong className="block text-[clamp(1.55rem,4vw,2.25rem)] font-semibold leading-[.9] tracking-[-.07em] text-[#F6EFE8]">Doğa <em className="font-serif font-normal text-[#E8A96B]">Bice</em></strong><span className="mt-3 block text-[clamp(.48rem,1.1vw,.65rem)] uppercase tracking-[.2em] text-[#D9CDD4]">{tr ? "Ürün mühendisi" : "Product engineer"}</span></span>
                  <span className="flex items-end justify-between border-t border-[#E8A96B]/45 pt-3"><span className="text-[clamp(.48rem,1.1vw,.65rem)] uppercase tracking-[.15em] text-white/60">İstanbul · Türkiye</span><RotateCcw className="h-4 w-4 text-[#E8A96B] transition-transform group-hover:-rotate-45" aria-hidden="true" /></span>
                </span>
              </span>
              <span aria-hidden="true" className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[1.5rem] border border-[#E8A96B]/45 bg-[radial-gradient(circle_at_15%_0%,rgba(186,52,88,.52),transparent_42%),linear-gradient(145deg,#35172A,#120D13_70%)] p-[clamp(1rem,4vw,1.5rem)] shadow-[0_30px_80px_-35px_rgba(0,0,0,.9)]" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                <span className="flex items-start justify-between"><span className="text-[10px] uppercase tracking-[.25em] text-[#E8A96B]">Doğa Bice</span><RotateCcw className="h-4 w-4 text-[#E8A96B]" aria-hidden="true" /></span>
                <span className="block"><strong className="block text-[clamp(1.7rem,4vw,2.5rem)] font-semibold leading-none tracking-[-.06em] text-[#F6EFE8]">{tr ? "Tanıştığımıza" : "Nice to"}<br /><em className="font-serif font-normal text-[#E8A96B]">{tr ? "memnun oldum." : "meet you."}</em></strong><span className="mt-3 block text-[11px] leading-5 text-[#D9CDD4]">{tr ? "Bağlantılarım hemen aşağıda." : "My links are just below."}</span></span>
                <span className="border-t border-[#E8A96B]/45 pt-3 text-[10px] uppercase tracking-[.2em] text-white/60">Product · Mobile · AI</span>
              </span>
            </button>
          </div>

          <div className="mx-auto mt-5 flex max-w-[31rem] items-center justify-between gap-4 text-[11px] font-medium uppercase tracking-[.22em] text-[#E8A96B]">
            <span>{tr ? (open ? "Bağlantılarım" : "Kartı çevir") : (open ? "My links" : "Turn the card")}</span>
            <ArrowDownRight className={`h-5 w-5 transition-transform duration-500 motion-reduce:transition-none ${open ? "rotate-45" : ""}`} aria-hidden="true" />
          </div>

          <div id="card-links" className={`mx-auto max-w-[31rem] overflow-hidden transition-[max-height,opacity,margin] duration-500 ease-out motion-reduce:transition-none ${open ? "mt-7 max-h-[50rem] opacity-100" : "max-h-0 opacity-0"}`} inert={!open}>
            <nav aria-label={tr ? "Doğa Bice bağlantıları" : "Doğa Bice links"} className="divide-y divide-white/15 border-y border-[#E8A96B]/45">
              {links.map((item, index) => {
                const Icon = item.icon;
                const content = <><span className="text-[10px] tracking-[.2em] text-[#E8A96B]">{String(index + 1).padStart(2, "0")}</span><span className="min-w-0"><strong className="block text-base font-medium text-[#F6EFE8]">{tr ? item.title : item.en}</strong><small className="mt-1 block truncate text-xs text-[#C9BEC4]">{tr ? item.detail : (item.detailEn ?? item.detail)}</small></span><Icon className="ml-auto h-5 w-5 shrink-0 text-[#E8A96B] transition-transform group-hover:translate-x-1" aria-hidden="true" /></>;
                const className = "group grid min-h-[4.75rem] grid-cols-[1.5rem_1fr_auto] items-center gap-3 py-3 transition-colors hover:bg-white/[.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A96B]";
                return item.external || item.download ? <a key={item.href} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} download={item.download} className={className}>{content}</a> : <Link key={item.href} href={item.href} className={className}>{content}</Link>;
              })}
            </nav>
            <Link href="/contact" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-[#C9BEC4] transition-colors hover:text-[#E8A96B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A96B]">{tr ? "İletişim sayfasına dön" : "Back to contact"}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
