"use client";
import Reveal from "@/components/ui/reveal";
import { useLanguage } from "@/components/ui/language-provider";

const experience = [
  { year: "2026", title: { tr: "Ürün ve AI odaklı bağımsız çalışmalar", en: "Product & AI focused independent work" }, text: { tr: "Yuvia başta olmak üzere keşif, eşleştirme ve topluluk deneyimleri etrafında üretime hazır ürün sistemleri geliştiriyorum.", en: "Building production-ready product systems around discovery, matching and community experiences, led by Yuvia." } },
  { year: "2025", title: { tr: "TÜBİTAK destekli E-Paw projesi", en: "TÜBİTAK-supported E-Paw project" }, text: { tr: "Evcil hayvan sağlığı, sahiplendirme akışları ve AI tabanlı belge tanımaya odaklanan bitirme projesi.", en: "A senior project focused on pet health, adoption journeys and AI-based document recognition." } },
  { year: "2024", title: { tr: "Backend mühendisliği stajı", en: "Backend engineering internship" }, text: { tr: "Spring Boot, PostgreSQL, Redis, Docker ve Spring Security ile güvenilir REST sistemleri geliştirdim.", en: "Built reliable REST systems with Spring Boot, PostgreSQL, Redis, Docker and Spring Security." } },
];

export default function Experience() {
  const { language } = useLanguage();
  const tr = language === "tr";
  return <section id="experience" className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:px-10 lg:py-32"><Reveal><div className="grid gap-8 md:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs uppercase tracking-[.34em] text-[#C75C7C]">04 · {tr ? "Yolculuk" : "Journey"}</p><h2 className="mt-5 max-w-md text-4xl font-semibold leading-[1] tracking-[-.06em] md:text-5xl">{tr ? "Ürünlerle şekillenen bir yol." : "A path shaped by products."}</h2></div><p className="max-w-lg self-end text-sm leading-7 text-[#B8AAB7]">{tr ? "Mühendislik temeliyle başlayıp ürün düşüncesi, mobil deneyim ve yapay zekâyla genişleyen bir üretim pratiği." : "A practice that began with engineering and expanded through product thinking, mobile experience and artificial intelligence."}</p></div></Reveal>
    <div className="mt-16">{experience.map((item, index) => <Reveal key={item.year} delay={index * .05}><article className="group grid border-t border-white/10 py-9 md:grid-cols-[.38fr_1fr] md:gap-10"><p className="font-serif text-6xl italic leading-none text-white/15 transition duration-500 group-hover:text-[#E8A96B]/70 md:text-7xl">{item.year}</p><div className="mt-5 md:mt-1"><h3 className="text-2xl font-semibold tracking-[-.045em]">{tr ? item.title.tr : item.title.en}</h3><p className="mt-4 max-w-2xl text-sm leading-7 text-[#B8AAB7]">{tr ? item.text.tr : item.text.en}</p></div></article></Reveal>)}</div>
  </section>;
}
