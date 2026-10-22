"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/ui/language-provider";
import InteractivePhone from "@/components/ui/interactive-phone";

type WebsiteCaseStudyProps = {
  eyebrow: string;
  title: string;
  description: string;
  liveHref?: string;
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string; label: string }[];
  galleryEyebrow?: string;
  galleryTitle?: string;
  heroVideo?: string;
  heroScreenshots?: { src: string; alt: string }[];
  videos?: { src: string; label: string }[];
  contribution: string[];
  stack: string[];
  tr?: Pick<WebsiteCaseStudyProps, "eyebrow" | "description" | "contribution">;
  theme?: "default" | "yuvia";
};

export default function WebsiteCaseStudy({
  eyebrow,
  title,
  description,
  liveHref,
  image,
  imageAlt,
  gallery,
  galleryEyebrow = "Product details",
  galleryTitle = "Designed as a complete experience.",
  heroVideo,
  heroScreenshots = [],
  videos = [],
  contribution,
  stack,
  tr: turkish,
  theme: _theme = "default",
}: WebsiteCaseStudyProps) {
  const { language } = useLanguage();
  const copy = language === "tr" && turkish ? { ...turkish, title } : { eyebrow, title, description, contribution };
  void _theme;
  const isYuvia = false;
  return (
    <main className="min-h-screen overflow-hidden text-[#F6EFE8]">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-8 md:px-8 lg:px-10">
        <Link href="/" className={`inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-medium transition ${isYuvia ? "border-[#D98A49]/35 bg-white/65 shadow-[0_12px_30px_rgba(89,55,33,.08)] hover:border-[#D98A49]/70" : "border-white/10 bg-white/[0.04] hover:border-[#E8A96B]/40"}`}>
          <ArrowLeft className="h-4 w-4" /> {language === "tr" ? "Ana sayfaya dön" : "Back to home"}
        </Link>

        <div className="grid gap-12 pt-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className={`text-xs uppercase tracking-[0.32em] ${isYuvia ? "text-[#C96A50]" : "text-[#C75C7C]"}`}>{copy.eyebrow}</p>
            <h1 className="mt-5 text-[4.25rem] font-semibold leading-[0.9] tracking-[-0.075em] md:text-[6rem]">{copy.title}</h1>
            <p className={`mt-7 max-w-xl text-[17px] leading-8 ${isYuvia ? "text-[#68585A]" : "text-[#CFC3CB]"}`}>{copy.description}</p>
            {liveHref && <a href={liveHref} target="_blank" rel="noreferrer" className={`mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition ${isYuvia ? "bg-[#F36E2B] text-white shadow-[0_16px_30px_rgba(243,110,43,.24)] hover:bg-[#DB5B1D]" : "bg-[#F6EFE8] text-[#120D13] hover:bg-[#E8A96B]"}`}>
              {language === "tr" ? "Canlı siteyi ziyaret et" : "Visit live website"} <ArrowUpRight className="h-4 w-4" />
            </a>}
          </div>

          <div className={`relative overflow-hidden rounded-[2.7rem] border ${isYuvia ? "border-[#D98A49]/35 shadow-[0_32px_90px_rgba(127,78,35,.18)]" : "border-white/10"} ${heroScreenshots.length ? isYuvia ? "min-h-[610px] bg-[#F2E5D4]" : "min-h-[610px] bg-[#19111A] shadow-[0_40px_120px_rgba(0,0,0,.32)]" : "min-h-[430px] bg-white/[0.04] p-4"}`}>
            {heroScreenshots.length > 0 ? <>
              <div className={`absolute inset-0 ${isYuvia ? "bg-[radial-gradient(circle_at_50%_42%,rgba(255,154,76,.28),transparent_34%),radial-gradient(circle_at_10%_90%,rgba(94,167,160,.25),transparent_34%)]" : "bg-[radial-gradient(circle_at_50%_42%,rgba(255,128,69,.25),transparent_34%),radial-gradient(circle_at_10%_90%,rgba(94,167,160,.16),transparent_34%)]"}`} />
              <div className={`absolute inset-0 opacity-[.12] [background-image:linear-gradient(rgba(86,55,54,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(86,55,54,.45)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]`} />
              <div className={`absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border ${isYuvia ? "border-[#D98A49]/25" : "border-white/10"}`} />
              <div className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E8A96B]/30" />
              <p className={`absolute left-1/2 top-6 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-[.26em] md:left-7 md:translate-x-0 md:tracking-[.32em] ${isYuvia ? "text-[#735E5B]" : "text-white/45"}`}>01 · {language === "tr" ? "Ürün deneyimi" : "Product experience"}</p>
              <p className="absolute right-7 top-6 hidden text-[10px] uppercase tracking-[.32em] text-[#E8A96B] md:block">Mobile / Web / Community</p>

              <motion.div animate={{ y: [0, -10, 0], rotate: [-7, -5, -7] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className={`absolute left-6 top-24 hidden h-48 w-36 overflow-hidden rounded-[1.5rem] border shadow-[0_24px_60px_rgba(75,44,31,.22)] md:block ${isYuvia ? "border-white/70 bg-white/35" : "border-white/20 bg-white/10"}`}><Image src={heroScreenshots[0].src} alt={heroScreenshots[0].alt} fill className="object-cover" sizes="144px" /><div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" /></motion.div>
              <motion.div animate={{ y: [0, 12, 0], rotate: [7, 5, 7] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: .5 }} className={`absolute bottom-24 right-6 hidden h-44 w-32 overflow-hidden rounded-[1.5rem] border shadow-[0_24px_60px_rgba(75,44,31,.22)] md:block ${isYuvia ? "border-white/70 bg-white/35" : "border-white/20 bg-white/10"}`}><Image src={heroScreenshots[1]?.src ?? heroScreenshots[0].src} alt={heroScreenshots[1]?.alt ?? heroScreenshots[0].alt} fill className="object-cover" sizes="128px" /><div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" /></motion.div>

              <InteractivePhone videoSrc={heroVideo ?? ""} label={`${title} product demo`} className="absolute left-1/2 top-14 h-[500px] w-[258px] -translate-x-1/2" />

              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className={`absolute bottom-8 left-7 hidden rounded-2xl border px-4 py-3 shadow-xl backdrop-blur-xl sm:block ${isYuvia ? "border-white/80 bg-white/72 text-[#342125]" : "border-white/10 bg-[#211721]/85"}`}><p className="text-[10px] uppercase tracking-[.24em] text-[#5EA7A0]">Live product</p><p className="mt-1 text-sm font-medium">{language === "tr" ? "Keşfet · Sahiplen · Bağ kur" : "Discover · Adopt · Connect"}</p></motion.div>
              <div className={`absolute bottom-8 right-7 rounded-full border px-4 py-2 text-xs backdrop-blur-xl ${isYuvia ? "border-white/80 bg-white/72 text-[#342125]" : "border-white/15 bg-[#130D12]/80 text-white/80"}`}><span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-[#61D09B]" />{language === "tr" ? "Uygulama demosu" : "App demo"}</div>
            </> : <>
              {heroVideo ? <video autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover" aria-label={`${title} product demo`}><source src={heroVideo} type="video/mp4" /></video> : <Image src={image} alt={imageAlt} fill className="object-cover opacity-90" sizes="(min-width: 1024px) 55vw, 100vw" priority />}
              <div className="absolute inset-0 bg-gradient-to-t from-[#130D12]/65 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-full border border-white/15 bg-[#130D12]/65 px-4 py-2 text-xs backdrop-blur">{language === "tr" ? "Seçili web projesi" : "Selected website work"}</div>
            </>}
          </div>
        </div>
      </section>

      {videos.length > 0 && <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-10"><div className="mb-8"><p className="text-xs uppercase tracking-[0.28em] text-[#5EA7A0]">Product in motion</p><h2 className="mt-4 text-[2.2rem] font-semibold tracking-[-0.05em] md:text-[3.5rem]">The experience beyond static screens.</h2></div><div className="grid gap-5 md:grid-cols-3">{videos.map((video, index) => <article key={video.src} className={`relative min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#120D13] ${index === 0 ? "md:col-span-2 md:min-h-[520px]" : ""}`}><video autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover"><source src={video.src} type="video/mp4" /></video><div className="absolute inset-0 bg-gradient-to-t from-[#130D12]/80 via-transparent to-transparent" /><p className="absolute bottom-5 left-5 text-sm font-medium">{video.label}</p></article>)}</div></section>}

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-8 md:grid-cols-2 md:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7">
          <p className="text-xs uppercase tracking-[0.28em] text-[#E8A96B]">{language === "tr" ? "Ne yaptım" : "What I built"}</p>
          <ul className="mt-6 space-y-4">
            {copy.contribution.map((item) => <li key={item} className="flex gap-3 text-sm leading-7 text-[#CFC3CB]"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#5EA7A0]" />{item}</li>)}
          </ul>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7">
          <p className="text-xs uppercase tracking-[0.28em] text-[#E8A96B]">{language === "tr" ? "Teknoloji" : "Technology"}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-[#F6EFE8]">{item}</span>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-5"><div><p className="text-xs uppercase tracking-[0.28em] text-[#C75C7C]">{language === "tr" && galleryEyebrow === "Product details" ? "Ürün detayları" : galleryEyebrow}</p><h2 className="mt-4 text-[2.2rem] font-semibold tracking-[-0.05em] md:text-[3.5rem]">{language === "tr" && galleryTitle === "Designed as a complete experience." ? "Birbiriyle bağlantılı deneyimler." : galleryTitle}</h2></div><p className="hidden max-w-xs text-sm leading-7 text-[#B8AAB7] md:block">{language === "tr" ? "Görsel dil, kullanıcı akışları ve arka plandaki sistem aynı ürün yaklaşımını sürdürüyor." : "Visual direction, user journeys and the systems behind them share one product approach."}</p></div>
        <div className={`grid gap-5 ${gallery.length === 1 ? "grid-cols-1" : "md:grid-cols-3"}`}>
          {gallery.map((item, index) => <article key={item.src} className={`group relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] ${gallery.length > 1 && index === 0 ? "md:col-span-2" : ""}`}><Image src={item.src} alt={item.alt} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="100vw" /><div className="absolute inset-0 bg-gradient-to-t from-[#130D12]/80 via-transparent to-transparent" /><p className="absolute bottom-5 left-5 text-sm font-medium">{item.label}</p></article>)}
        </div>
      </section>
    </main>
  );
}
