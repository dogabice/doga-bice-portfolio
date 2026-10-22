"use client";

import Reveal from "@/components/ui/reveal";
import { BrainCircuit, Code2, Layers3, Smartphone } from "lucide-react";
import { useLanguage } from "@/components/ui/language-provider";

const items = [
  { icon: Layers3, title: { tr: "Ürün mühendisliği", en: "Product engineering" }, text: { tr: "Belirsiz bir fikri araştırma, akış ve çalışan ürün sistemine dönüştürüyorum.", en: "I turn an ambiguous idea into research, flows and a working product system." } },
  { icon: Smartphone, title: { tr: "Mobil deneyimler", en: "Mobile experiences" }, text: { tr: "Kullanıcı davranışına duyarlı, sıcak ve üretime hazır mobil arayüzler geliştiriyorum.", en: "I build warm, production-ready mobile interfaces shaped around real user behaviour." } },
  { icon: Code2, title: { tr: "Uçtan uca sistemler", en: "Full-stack systems" }, text: { tr: "Arayüz, kimlik doğrulama, API, veri ve gerçek zamanlı akışları aynı mimaride birleştiriyorum.", en: "I connect interface, authentication, APIs, data and realtime flows in one architecture." } },
  { icon: BrainCircuit, title: { tr: "AI destekli ürünler", en: "AI-powered products" }, text: { tr: "Eşleştirme, keşif, tanıma ve öneri sistemlerini gerçek ürün kararlarına dönüştürüyorum.", en: "I turn matching, discovery, recognition and recommendation models into product decisions." } },
];

export default function Expertise() {
  const { language } = useLanguage();
  const tr = language === "tr";

  return <section id="expertise" className="continuous-section relative py-16 lg:py-20"><div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
    <Reveal><div className="grid gap-8 md:grid-cols-[.7fr_1.3fr] md:items-end"><div><p className="text-xs uppercase tracking-[.34em] text-[#C75C7C]">01 · {tr ? "Üretim pratiği" : "The practice"}</p><p className="mt-6 max-w-sm text-sm leading-7 text-[#B8AAB7]">{tr ? "Ürün kararlarını kullanıcı ihtiyacı ve teknik gerçeklikle birlikte ele alıyorum." : "I weigh product decisions against user needs and technical reality."}</p></div><h2 className="max-w-4xl text-4xl font-semibold leading-[.97] tracking-[-.065em] md:text-6xl">{tr ? <>Tasarımı ve mühendisliği <span className="font-serif font-normal italic text-[#E8A96B]">aynı üründe</span> buluşturuyorum.</> : <>I bring design and engineering into <span className="font-serif font-normal italic text-[#E8A96B]">one product.</span></>}</h2></div></Reveal>
    <div className="mt-12 border-t border-white/10">{items.map((item, index) => { const Icon = item.icon; return <Reveal key={item.title.en} delay={index * .04}><article className="group grid gap-5 border-b border-white/10 py-7 transition md:grid-cols-[80px_1fr_1fr] md:items-center md:py-9"><span className="text-xs tracking-[.28em] text-white/30">0{index + 1}</span><div className="flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-[#E8A96B] transition duration-300 group-hover:border-[#E8A96B]/50 group-hover:bg-[#E8A96B] group-hover:text-[#130D12]"><Icon className="h-5 w-5" /></span><h3 className="text-2xl font-semibold tracking-[-.04em]">{tr ? item.title.tr : item.title.en}</h3></div><p className="max-w-xl text-sm leading-7 text-[#B8AAB7]">{tr ? item.text.tr : item.text.en}</p></article></Reveal>; })}</div>
  </div></section>;
}
