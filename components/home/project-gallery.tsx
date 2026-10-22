"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Globe2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/reveal";
import InteractivePhone from "@/components/ui/interactive-phone";
import YuviaDestinationLinks from "@/components/project/yuvia-destination-links";
import ProjectVisual from "@/components/project/project-visual";
import VibeConceptVisual from "@/components/project/vibe-concept-visual";
import { projectStories } from "@/lib/project-stories";
import type { ProjectStory } from "@/lib/project-stories";
import { useLanguage } from "@/components/ui/language-provider";
import PageIntro from "@/components/home/page-intro";

function CoverScreenshotPhone({ src, alt, className }: { src: string; alt: string; className: string }) {
  return <div className={className}>
    <div className="rounded-[2.4rem] border border-white/20 bg-gradient-to-br from-[#777078] via-[#252126] to-[#050405] p-[6px] shadow-[0_30px_65px_-20px_rgba(0,0,0,.85)]">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#F8F5ED]">
        <Image src={src} alt={alt} width={1170} height={2532} sizes="(max-width: 640px) 110px, (max-width: 1024px) 200px, 220px" className="block h-auto w-full" />
        <span aria-hidden="true" className="absolute left-1/2 top-[1.5%] h-[3%] w-[31%] -translate-x-1/2 rounded-full bg-[#090809]" />
      </div>
    </div>
  </div>;
}

function CatalogueWebsiteCover({ project, language }: { project: ProjectStory; language: "tr" | "en" }) {
  const screens = project.screenshots;
  if (!screens) return null;
  const primary = screens[project.slug === "ala-wellness" ? 0 : 1];
  const detail = screens[2];

  return <div className="absolute inset-0 overflow-hidden" style={{ background: project.slug === "ala-wellness" ? "#302923" : "#172637" }}>
    <div className="absolute inset-0 opacity-35" style={{ background: `radial-gradient(circle at 55% 45%, ${project.accent}, transparent 68%)` }} />
    <div className="absolute left-[5%] top-[8%] w-[85%] overflow-hidden rounded-lg border border-white/25 bg-white shadow-[0_24px_55px_rgba(0,0,0,.42)] sm:left-[8%] sm:top-[9%] sm:w-[76%] sm:rounded-xl">
      <div className="flex h-4 items-center gap-1 border-b border-black/10 bg-[#F7F5F2] px-2.5 sm:h-6 sm:gap-1.5 sm:px-3" aria-hidden="true"><span className="h-1.5 w-1.5 rounded-full bg-[#E9A294]" /><span className="h-1.5 w-1.5 rounded-full bg-[#E7CF93]" /><span className="h-1.5 w-1.5 rounded-full bg-[#A9C9B0]" /></div>
      <Image src={primary.src} alt={primary.alt[language]} width={1280} height={720} sizes="(max-width: 640px) 72vw, 650px" className="block h-auto w-full" />
    </div>
    <div className="absolute bottom-[7%] right-[4%] w-[55%] overflow-hidden rounded-lg border border-white/30 bg-white shadow-[0_22px_55px_rgba(0,0,0,.5)] sm:bottom-[8%] sm:right-[5%] sm:w-[49%] sm:rounded-xl">
      <div className="flex h-4 items-center gap-1 border-b border-black/10 bg-[#F7F5F2] px-2.5 sm:h-6 sm:gap-1.5 sm:px-3" aria-hidden="true"><span className="h-1.5 w-1.5 rounded-full bg-[#E9A294]" /><span className="h-1.5 w-1.5 rounded-full bg-[#E7CF93]" /><span className="h-1.5 w-1.5 rounded-full bg-[#A9C9B0]" /></div>
      <Image src={detail.src} alt={detail.alt[language]} width={1280} height={720} sizes="(max-width: 640px) 47vw, 420px" className="block h-auto w-full" />
    </div>
  </div>;
}

export default function ProjectGallery({ variant = "catalogue" }: { variant?: "catalogue" | "expanded" }) {
  const { language } = useLanguage();
  const tr = language === "tr";
  const ProjectHeading = variant === "expanded" ? "h2" : "h3";
  return (
    <section id="work" className="continuous-section relative mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10 lg:py-20">
      <Reveal>
        <div className="mb-8 lg:mb-10">
          <PageIntro
            number="02"
            label={tr ? (variant === "catalogue" ? "Seçili işler" : "Projelerim") : (variant === "catalogue" ? "Selected work" : "My projects")}
            title={tr ? <>Ürünler, süreçler ve <span className="font-serif font-normal italic text-[#E8A96B]">verdiğim kararlar.</span></> : <>The products, the process and <span className="font-serif font-normal italic text-[#E8A96B]">the decisions behind them.</span></>}
            description={tr ? "Her projede çözmeye çalıştığım problemi, tasarım yaklaşımımı ve ortaya çıkan deneyimi birlikte gösteriyorum." : "Each project shows the problem I worked on, the decisions I made and the experience that came out of them."}
            as={variant === "expanded" ? "h1" : "h2"}
          />
        </div>
      </Reveal>

      <Reveal>
        <article className="group relative overflow-hidden rounded-[2.7rem] border border-white/10 bg-[#181119] shadow-[0_35px_100px_rgba(0,0,0,.28)]">
          <div className="grid lg:grid-cols-[.88fr_1.12fr]">
            <div className="relative z-10 flex min-h-[500px] flex-col justify-between p-7 sm:p-10 lg:min-h-[610px] xl:p-12">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 border-b border-white/10 pb-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[.25em] text-[#E8A96B]">01 · {tr ? "Geliştirdiğim ürün" : "Product I built"}</span>
                  <span className="text-[10px] uppercase tracking-[.22em] text-[#B8AAB7]">iOS · Android · Web</span>
                </div>
                <p className="mt-12 text-xs uppercase tracking-[.3em] text-[#F36E2B]">{tr ? "Bitirme projesinden canlı ürüne" : "From capstone to live product"}</p>
                <ProjectHeading className="mt-5"><Image src="/work/yuvia/brand/logoname-white.webp" alt="Yuvia" width={900} height={270} sizes="(max-width: 640px) 70vw, 280px" className="h-auto w-[min(70vw,280px)] max-w-full" /></ProjectHeading>
                <p className="mt-7 max-w-md text-[15px] leading-7 text-[#CFC3CB]">{tr ? "Üniversiteden bir arkadaşımla başladığımız Yuvia’yı canlı bir sahiplendirme ürününe dönüştürdük. Ben ürün akışlarını ve arayüzünü tasarladım; mobil ve web geliştirmesinde çalıştım. Bugün de birlikte sürdürüyoruz." : "A friend and I grew Yuvia from a university capstone into a live pet adoption product. I designed its flows and interface and worked on the mobile and web development. We continue to improve it together."}</p>
              </div>
              <div className="mt-10 border-t border-white/10 pt-6">
                <Link href="/projects/yuvia" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#F6EFE8] px-5 text-sm font-semibold text-[#120D13] transition hover:bg-[#E8A96B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A96B]">{tr ? "Detaylı incele" : "Explore in detail"}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
                <YuviaDestinationLinks language={language} compact />
              </div>
            </div>
            <div className="relative isolate min-h-[440px] overflow-hidden border-t border-white/10 bg-[#181119] sm:min-h-[570px] lg:min-h-[610px] lg:border-l lg:border-t-0" aria-label={tr ? "Yuvia uygulamasından üç telefon ekranı" : "Three phone screens from the Yuvia app"}>
              <CoverScreenshotPhone src="/work/yuvia/screens/home.webp" alt={tr ? "Yuvia keşif ekranı" : "Yuvia discovery screen"} className="absolute left-[7%] top-1/2 w-[27%] -translate-y-1/2 -rotate-[9deg] sm:left-[11%] sm:w-[26%] lg:left-[8%] lg:w-[27%]" />
              <CoverScreenshotPhone src="/work/yuvia/screens/favorites.webp" alt={tr ? "Yuvia favoriler ekranı" : "Yuvia favorites screen"} className="absolute right-[7%] top-1/2 w-[27%] -translate-y-1/2 rotate-[9deg] sm:right-[11%] sm:w-[26%] lg:right-[8%] lg:w-[27%]" />
              <InteractivePhone videoSrc="/work/yuvia/videos/hero-demo.mp4" videoFit="contain" label={tr ? "Yuvia uygulama videosu" : "Yuvia app video"} className="absolute left-1/2 top-1/2 z-10 h-[340px] w-[161px] -translate-x-1/2 -translate-y-1/2 sm:h-[450px] sm:w-[213px] lg:h-[470px] lg:w-[223px] xl:h-[500px] xl:w-[237px]" />
            </div>
          </div>
        </article>
      </Reveal>

      {variant === "catalogue" ? <Reveal><ProjectCatalogue tr={tr} language={language} /></Reveal> : <ExpandedProjects tr={tr} language={language} />}
    </section>
  );
}

function ExpandedProjects({ tr, language }: { tr: boolean; language: "tr" | "en" }) {
  return <div className="mt-10 space-y-6 lg:mt-8 lg:space-y-8">
    {projectStories.map((project, index) => {
      const copy = project.copy[language];
      return <Reveal key={project.slug}>
        <article className="group overflow-hidden rounded-[2.7rem] border border-white/10 bg-[#181119] shadow-[0_35px_100px_rgba(0,0,0,.2)]">
          <div className="grid lg:grid-cols-[.88fr_1.12fr]">
            <div className={`flex min-h-[440px] flex-col justify-between p-7 sm:p-10 lg:min-h-[520px] xl:p-12 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-6"><span className="text-[11px] font-semibold uppercase tracking-[.25em]" style={{ color: project.accent }}>{project.number} · {copy.category}</span><span className="text-[10px] uppercase tracking-[.22em] text-[#B8AAB7]">{copy.status}</span></div>
                <h2 className="mt-12 text-[clamp(2.7rem,5vw,4.7rem)] font-semibold leading-[.94] tracking-[-.07em]">{project.title}</h2>
                <p className="mt-5 max-w-md text-[clamp(1.25rem,2.1vw,1.8rem)] font-semibold leading-[1.15] tracking-[-.04em]">{copy.coverLine}</p>
                <p className="mt-5 max-w-md text-[15px] leading-7 text-[#CFC3CB]">{copy.intro}</p>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6"><Link href={`/projects/${project.slug}`} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#F6EFE8] px-5 text-sm font-semibold text-[#120D13] transition hover:bg-[#E8A96B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A96B]">{tr ? "Detaylı incele" : "Explore in detail"}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>{project.liveHref && <a href={project.liveHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 px-5 text-sm font-medium text-[#F6EFE8] transition hover:border-[#E8A96B] hover:text-[#E8A96B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A96B]"><Globe2 className="h-4 w-4" aria-hidden="true" />{tr ? "Canlı site" : "Live site"}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>}</div>
            </div>
            <ProjectVisual project={project} language={language} compact reverse={index % 2 === 1} />
          </div>
        </article>
      </Reveal>;
    })}
  </div>;
}

const catalogueDescriptions = {
  "ala-wellness": {
    tr: "İki dilli stüdyo sitesi, kolay rezervasyon akışı ve ekibin işini kolaylaştıran yönetim paneli.",
    en: "A bilingual studio site, a clear booking flow and an admin panel that supports the team.",
  },
  unifymatch: {
    tr: "Teknoloji danışmanlığını ihtiyaçtan uygulamaya anlaşılır bir karar yolculuğuna dönüştürdüğüm B2B site.",
    en: "A B2B site that turns technology advisory into a clear journey from need to implementation.",
  },
  "e-paw": {
    tr: "Sağlık kaydı, randevu ve AI destekli aşı etiketi tanımayı bir araya getiren mobil prototip.",
    en: "A mobile prototype connecting care records, appointments and AI-assisted vaccine sticker recognition.",
  },
  "istanbul-vibe-finder": {
    tr: "Atmosfer ve niyeti doğal dilden anlayan bir İstanbul mekân keşfi fikri. Geliştirmeyi sürdürüyorum.",
    en: "An Istanbul place discovery concept that reads mood and intent from natural language. In development.",
  },
} as const;

function ProjectCatalogue({ tr, language }: { tr: boolean; language: "tr" | "en" }) {
  const [selected, setSelected] = useState(0);
  const reducedMotion = useReducedMotion();
  const project = projectStories[selected];
  const previous = () => setSelected((current) => (current - 1 + projectStories.length) % projectStories.length);
  const next = () => setSelected((current) => (current + 1) % projectStories.length);

  return <div className="relative mt-20 overflow-clip border-y border-white/10 py-12 md:mt-24 md:py-16">
    <div className="mx-auto mb-8 grid max-w-[1040px] gap-6 px-1 md:mb-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[.28em]" style={{ color: project.accent }}>{String(selected + 1).padStart(2, "0")} / {String(projectStories.length).padStart(2, "0")} <span className="mx-2 opacity-50">·</span> {project.copy[language].category}</p>
        <h3 className="mt-2 text-3xl font-semibold tracking-[-.055em] text-[#F6EFE8] md:text-4xl">{project.title}</h3>
        <p className="mt-2 max-w-xl text-sm leading-6 text-[#B8AAB7]">{catalogueDescriptions[project.slug as keyof typeof catalogueDescriptions][language]}</p>
      </div>
      <div className="flex flex-wrap items-center gap-3 md:justify-end">
        <Link href={`/projects/${project.slug}`} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#F6EFE8] px-5 text-sm font-semibold text-[#120D13] transition hover:bg-[#E8A96B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A96B]">{tr ? "Detaylı incele" : "Explore in detail"}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
        {project.liveHref && <a href={project.liveHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-1.5 rounded-full border border-white/25 px-5 text-sm font-medium text-[#F6EFE8] transition hover:border-[#E8A96B] hover:text-[#E8A96B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A96B]">{tr ? "Canlı site" : "Live site"}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>}
      </div>
    </div>

    <div className="relative h-[300px] sm:h-[400px] md:h-[500px]" aria-label={tr ? "Yatay proje kataloğu" : "Horizontal project catalogue"}>
      {projectStories.map((item, index) => {
        let offset = index - selected;
        if (offset > projectStories.length / 2) offset -= projectStories.length;
        if (offset < -projectStories.length / 2) offset += projectStories.length;
        const active = offset === 0;
        const hidden = Math.abs(offset) > 2;
        return <motion.button
          key={item.slug}
          type="button"
          onClick={() => setSelected(index)}
          aria-label={`${item.title} ${tr ? "projesini seç" : "project"}`}
          aria-pressed={active}
          initial={false}
          animate={{ x: `${offset * 78}%`, scale: active ? 1 : 0.76, rotate: offset * -3, opacity: hidden ? 0 : active ? 1 : 0.42 }}
          transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 240, damping: 26 }}
          className="absolute left-1/2 top-1/2 h-[260px] w-[82vw] max-w-[860px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.8rem] border border-white/15 bg-[#211826] text-left shadow-[0_35px_90px_-38px_rgba(0,0,0,.95)] outline-none focus-visible:ring-2 focus-visible:ring-[#E8A96B] sm:h-[360px] md:h-[440px]"
          style={{ zIndex: 10 - Math.abs(offset), transformOrigin: "center center" }}
        >
          {item.kind === "system"
            ? <VibeConceptVisual language={language} compact />
            : item.kind === "mobile"
              ? <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_43%,rgba(81,207,198,.30),transparent_43%),#172424]">
                  <CoverScreenshotPhone src="/epaw/epaw-pet-details.PNG" alt={tr ? "E-Paw evcil hayvan profili" : "E-Paw pet profile"} className="absolute left-1/2 top-[47%] w-[29%] max-w-[160px] -translate-x-[125%] -translate-y-1/2 -rotate-[9deg]" />
                  <CoverScreenshotPhone src="/epaw/epaw-appointments.PNG" alt={tr ? "E-Paw randevu takibi" : "E-Paw appointment tracking"} className="absolute left-1/2 top-[47%] w-[29%] max-w-[160px] translate-x-[25%] -translate-y-1/2 rotate-[9deg]" />
                  <CoverScreenshotPhone src="/epaw/epaw-home.PNG" alt={tr ? "E-Paw ana ekranı" : "E-Paw home screen"} className="absolute left-1/2 top-[46%] z-10 w-[32%] max-w-[175px] -translate-x-1/2 -translate-y-1/2" />
                </div>
              : <CatalogueWebsiteCover project={item} language={language} />}
          <div className="absolute inset-0 bg-gradient-to-t from-[#120D13]/35 via-transparent to-transparent" />
        </motion.button>;
      })}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-20 mx-auto flex max-w-[1040px] -translate-y-1/2 justify-between px-1 sm:px-2">
        <button type="button" onClick={previous} className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-white/70 bg-[#F6EFE8] text-[#120D13] shadow-lg transition hover:scale-105 hover:bg-[#E8A96B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A96B] md:h-12 md:w-12" aria-label={tr ? "Önceki proje" : "Previous project"}><ArrowLeft className="h-5 w-5" aria-hidden="true" /></button>
        <button type="button" onClick={next} className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-white/70 bg-[#F6EFE8] text-[#120D13] shadow-lg transition hover:scale-105 hover:bg-[#E8A96B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A96B] md:h-12 md:w-12" aria-label={tr ? "Sonraki proje" : "Next project"}><ArrowRight className="h-5 w-5" aria-hidden="true" /></button>
      </div>
    </div>
  </div>;
}
