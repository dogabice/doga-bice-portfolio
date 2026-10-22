"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Globe2 } from "lucide-react";
import { useLanguage } from "@/components/ui/language-provider";
import ProjectVisual from "@/components/project/project-visual";
import type { ProjectStory } from "@/lib/project-stories";

export default function ProjectCaseStudy({ project }: { project: ProjectStory }) {
  const { language } = useLanguage();
  const copy = project.copy[language];
  const tr = language === "tr";
  const discoveryFlow = tr ? [
    { title: "Bir cümleyle başla", text: "Kullanıcı mekân türü seçmek yerine nasıl bir ortam aradığını anlatır." },
    { title: "Bağlamı çıkar", text: "Semt, atmosfer ve buluşma niyeti sorgudan ayrı sinyaller olarak okunur." },
    { title: "Nedenini göster", text: "Öneri yalnızca bir sonuç listesi olarak değil, eşleşme gerekçesiyle sunulur." },
  ] : [
    { title: "Start with a sentence", text: "The person describes the atmosphere they want instead of choosing a venue category." },
    { title: "Read the context", text: "District, mood and purpose are interpreted as distinct signals in the query." },
    { title: "Explain the match", text: "A suggestion includes why it fits, beyond a simple list of results." },
  ];

  return <main className="min-h-screen overflow-hidden text-[#F6EFE8]">
    <section className="mx-auto max-w-7xl px-5 pb-20 pt-8 md:px-8 lg:px-10 lg:pb-28">
      <Link href="/work" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-sm text-[#E9DFD9] transition hover:border-[#E8A96B] hover:text-[#E8A96B] focus-visible:outline-2 focus-visible:outline-[#E8A96B]"><ArrowLeft className="h-4 w-4" aria-hidden="true" />{tr ? "Tüm projeler" : "All projects"}</Link>
      <div className="mt-8 grid gap-11 lg:mt-5 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.3em]" style={{ color: project.accent }}>{project.number} · {copy.category} · {copy.status}</p>
          <h1 className="mt-5 text-[clamp(3.5rem,7vw,6.2rem)] font-semibold leading-[.9] tracking-[-.075em]">{project.title}</h1>
          <p className="mt-7 max-w-xl text-[clamp(1.55rem,3vw,2.35rem)] font-semibold leading-[1.1] tracking-[-.045em]">{copy.headline}</p>
          <p className="mt-5 max-w-xl text-[15px] leading-8 text-[#CFC3CB]">{copy.intro}</p>
          {project.liveHref && <a href={project.liveHref} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#F6EFE8] px-5 text-sm font-semibold text-[#120D13] transition hover:bg-[#E8A96B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A96B]"><Globe2 className="h-4 w-4" aria-hidden="true" />{tr ? "Canlı siteyi aç" : "Visit live site"}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>}
          <div className="mt-9 grid gap-5 border-t border-white/15 pt-6 sm:grid-cols-2">
            <div><p className="text-[10px] uppercase tracking-[.23em] text-[#E8A96B]">{tr ? "Katkım" : "My contribution"}</p><p className="mt-2 text-sm leading-6 text-[#E9DFD9]">{copy.role}</p></div>
            <div><p className="text-[10px] uppercase tracking-[.23em] text-[#E8A96B]">{tr ? "Durum" : "Status"}</p><p className="mt-2 text-sm leading-6 text-[#E9DFD9]">{copy.status}</p></div>
          </div>
        </div>
        <ProjectVisual project={project} language={language} />
      </div>
    </section>

    <section className="border-y border-white/10 bg-white/[.025] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:px-10">
        <div><p className="text-xs uppercase tracking-[.3em]" style={{ color: project.accent }}>{tr ? "Tasarım kararı / 01" : "Design decision / 01"}</p><h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[.98] tracking-[-.06em] md:text-5xl">{copy.challenge}</h2><p className="mt-7 max-w-xl text-[15px] leading-8 text-[#CFC3CB]">{copy.challengeText}</p></div>
        <div className="border-t border-white/15">{copy.decisions.map((decision, index) => <div key={decision.title} className="group grid grid-cols-[4rem_1fr] gap-4 border-b border-white/15 py-8 sm:grid-cols-[5.5rem_1fr] sm:gap-6"><span className="font-serif text-4xl italic leading-none text-white/25 transition duration-300 group-hover:text-[#E8A96B]/80 sm:text-5xl" aria-hidden="true">0{index + 1}</span><div><h3 className="text-xl font-semibold tracking-[-.035em]">{decision.title}</h3><p className="mt-2 max-w-lg text-sm leading-7 text-[#B8AAB7]">{decision.text}</p></div></div>)}</div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28 lg:px-10">
      <div className="mb-9 grid gap-4 md:grid-cols-[1fr_.7fr] md:items-end"><div><p className="text-xs uppercase tracking-[.3em]" style={{ color: project.accent }}>{tr ? "Ürün deneyimi / 02" : "Product experience / 02"}</p><h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-.06em] md:text-5xl">{copy.showcaseTitle}</h2></div><p className="max-w-md text-sm leading-7 text-[#B8AAB7]">{copy.showcaseIntro}</p></div>
      {project.kind === "website" && project.screenshots && <div className="grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-2">
        {project.screenshots.map((screen, index) => <figure key={screen.src} className={index === 0 ? "lg:col-span-2" : ""}><div className="overflow-hidden rounded-[1.15rem] border border-white/15 bg-[#E8E8E8] p-[5px] shadow-[0_28px_70px_-36px_rgba(0,0,0,.8)] sm:rounded-[1.6rem] sm:p-2"><Image src={screen.src} alt={screen.alt[language]} width={1280} height={720} sizes={index === 0 ? "(max-width: 1024px) 100vw, 1200px" : "(max-width: 1024px) 100vw, 590px"} className="block h-auto w-full rounded-[.8rem] sm:rounded-[1.1rem]" /></div><figcaption className="mt-4 flex items-center gap-4 text-sm text-[#D8CFD4]"><span className="text-xs font-semibold tracking-[.2em]" style={{ color: project.accent }}>0{index + 1}</span>{screen.label[language]}</figcaption></figure>)}
      </div>}
      {project.kind === "mobile" && project.screenshots && <div className="grid grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:gap-6 lg:grid-cols-4">{project.screenshots.map((screen, index) => <figure key={screen.src} className="min-w-0"><div className="rounded-[1.5rem] border border-white/15 bg-[#172424] p-2 sm:rounded-[2rem] sm:p-3"><Image src={screen.src} alt={screen.alt[language]} width={828} height={1792} sizes="(max-width: 640px) 45vw, 23vw" className="h-auto w-full rounded-[1rem] sm:rounded-[1.4rem]" /></div><figcaption className="mt-4 text-sm text-[#D8CFD4]"><span className="mr-3 text-xs tracking-[.2em]" style={{ color: project.accent }}>0{index + 1}</span>{screen.label[language]}</figcaption></figure>)}</div>}
      {project.kind === "system" && <div className="grid gap-0 border-y border-white/20 md:grid-cols-3">{discoveryFlow.map((step, index) => <div key={step.title} className="border-b border-white/15 py-8 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:last:border-r-0"><p className="font-serif text-5xl italic text-white/25">0{index + 1}</p><h3 className="mt-5 text-xl font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-7 text-[#B8AAB7]">{step.text}</p></div>)}</div>}
    </section>

    <section className="border-y border-white/10 bg-white/[.025] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-20 lg:px-10">
        <div><p className="text-xs uppercase tracking-[.3em]" style={{ color: project.accent }}>{project.slug === "ala-wellness" ? tr ? "Yönetim paneli / 03" : "Admin panel / 03" : tr ? "Sistemin arkasında / 03" : "Behind the system / 03"}</p><h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[.98] tracking-[-.06em] md:text-5xl">{copy.systemsTitle}</h2><p className="mt-7 max-w-xl text-[15px] leading-8 text-[#CFC3CB]">{copy.systemsText}</p></div>
        <div className="border-t border-white/15">{copy.systems.map((item, index) => <div key={item.title} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-white/15 py-7"><span className="text-xs font-semibold tracking-[.2em]" style={{ color: project.accent }}>0{index + 1}</span><div><h3 className="text-lg font-semibold">{item.title}</h3><p className="mt-2 max-w-lg text-sm leading-7 text-[#B8AAB7]">{item.text}</p></div></div>)}</div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 pb-24 pt-20 md:px-8 md:pb-32 md:pt-28 lg:px-10"><div className="grid gap-10 border-t border-white/20 pt-10 lg:grid-cols-[.6fr_1.4fr] lg:gap-16"><div><p className="text-xs uppercase tracking-[.3em]" style={{ color: project.accent }}>{tr ? "Sonuç / 04" : "Outcome / 04"}</p><p className="mt-6 text-[10px] uppercase tracking-[.25em] text-[#B8AAB7]">{tr ? "Kullandığım teknolojiler" : "Tools and technologies"}</p><div className="mt-3 flex max-w-sm flex-wrap gap-x-3 gap-y-2 text-xs text-[#D8CFD4]">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div><div><h2 className="max-w-3xl text-4xl font-semibold leading-[.98] tracking-[-.06em] md:text-6xl">{copy.closingTitle}</h2><p className="mt-7 max-w-2xl text-[15px] leading-8 text-[#CFC3CB]">{copy.closingText}</p><div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-white/15 pt-6"><span className="text-xs uppercase tracking-[.2em]" style={{ color: project.accent }}>{project.title} · {copy.status}</span><Link href="/work" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#F6EFE8] transition hover:text-[#E8A96B] focus-visible:outline-2 focus-visible:outline-[#E8A96B]">{tr ? "Diğer projelere bak" : "Explore other projects"}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link></div></div></div></section>
  </main>;
}
