"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import { useLanguage } from "@/components/ui/language-provider";

const routes = [
  { href: "/expertise", no: "01", en: "Expertise", tr: "Uzmanlık", copyEn: "Product thinking, technical depth and AI-led systems.", copyTr: "Ürün düşüncesi, teknik derinlik ve AI odaklı sistemler." },
  { href: "/work", no: "02", en: "Selected work", tr: "Projeler", copyEn: "A selection of products, platforms and digital experiences.", copyTr: "Ürünler, platformlar ve dijital deneyimlerden seçkiler." },
  { href: "/work-experience", no: "03", en: "Experience", tr: "Deneyim", copyEn: "A growing professional journey across product, AI and engineering.", copyTr: "Ürün, AI ve mühendislik ekseninde gelişen profesyonel yolculuk." },
  { href: "/contact", no: "04", en: "Contact", tr: "İletişim", copyEn: "Open to thoughtful product collaborations.", copyTr: "Düşünceli ürün iş birliklerine açığım." },
];

export default function Overview() {
  const { language } = useLanguage();
  const tr = language === "tr";
  return <section className="continuous-section relative mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-10 lg:py-28">
    <Reveal><div className="grid gap-8 pb-12 md:grid-cols-[.8fr_1.2fr] md:items-end lg:pb-16"><p className="text-xs uppercase tracking-[.34em] text-[#C75C7C]">{tr ? "Yol haritası" : "A closer look"}</p><h2 className="max-w-3xl text-4xl font-semibold leading-[.96] tracking-[-.065em] text-[#E9DFD9] md:text-6xl">{tr ? <>Her başlık, kendi <span className="font-serif font-normal italic text-[#E8A96B]">hikâyesine</span> açılır.</> : <>Each chapter opens into its own <span className="font-serif font-normal italic text-[#E8A96B]">story.</span></>}</h2></div></Reveal>
    <div className="border-t border-[#E8A96B]/60">{routes.map((route, index) => <Reveal key={route.href} delay={index * .05}><Link href={route.href} className="group grid gap-4 border-b border-white/15 py-7 transition md:grid-cols-[5rem_1fr_auto] md:items-center md:py-9"><span className="text-xs tracking-[.25em] text-[#E8A96B]">{route.no}</span><span><strong className="block text-3xl font-semibold tracking-[-.045em] text-[#E9DFD9] transition group-hover:text-[#E8A96B]">{tr ? route.tr : route.en}</strong><span className="mt-2 block text-[15px] text-[#BFB4BD]">{tr ? route.copyTr : route.copyEn}</span></span><ArrowUpRight className="h-5 w-5 text-[#E8A96B] transition group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></Reveal>)}</div>
  </section>;
}
