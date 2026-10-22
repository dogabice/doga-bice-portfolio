import Image from "next/image";
import type { Language, ProjectStory } from "@/lib/project-stories";
import VibeConceptVisual from "@/components/project/vibe-concept-visual";

function BrowserWindow({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <div className={`overflow-hidden rounded-xl border border-[#D7DCE3] bg-white shadow-[0_28px_70px_-28px_rgba(0,0,0,.58)] sm:rounded-2xl ${className}`}>
    <div className="flex h-5 items-center gap-1.5 border-b border-[#E5E8ED] bg-[#F7F8FA] px-3 sm:h-7 sm:px-4" aria-hidden="true"><span className="h-1.5 w-1.5 rounded-full bg-[#EF8B8B]" /><span className="h-1.5 w-1.5 rounded-full bg-[#E4C77E]" /><span className="h-1.5 w-1.5 rounded-full bg-[#8DBCA1]" /></div>
    <Image src={src} alt={alt} width={1280} height={720} sizes="(max-width: 1024px) 90vw, 650px" className="block h-auto w-full" />
  </div>;
}

function ScreenPhone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <div className={`rounded-[1.65rem] border border-white/20 bg-[#171519] p-[5px] shadow-[0_28px_65px_-19px_rgba(0,0,0,.85)] sm:rounded-[2rem] ${className}`}>
    <div className="relative overflow-hidden rounded-[1.35rem] bg-white sm:rounded-[1.7rem]">
      <Image src={src} alt={alt} width={828} height={1792} sizes="(max-width: 640px) 130px, 210px" className="block h-auto w-full" />
      <span className="absolute left-1/2 top-[1.2%] h-[2.5%] w-[31%] -translate-x-1/2 rounded-full bg-[#161416]" aria-hidden="true" />
    </div>
  </div>;
}

export default function ProjectVisual({ project, language, compact = false, reverse = false }: { project: ProjectStory; language: Language; compact?: boolean; reverse?: boolean }) {
  const copy = project.copy[language];
  const compactFrame = compact ? `border-t ${reverse ? "lg:order-1 lg:border-r lg:border-t-0" : "lg:border-l lg:border-t-0"}` : "";
  if (project.kind === "website" && project.screenshots) {
    const [primary, secondary] = project.screenshots;
    return <div className={`relative isolate flex items-center justify-center overflow-hidden border-white/10 bg-[#19151B] ${compact ? `min-h-[360px] lg:min-h-[520px] ${compactFrame}` : "min-h-[370px] sm:min-h-[540px] lg:min-h-[620px]"}`}>
      <div className="absolute inset-0 opacity-80" style={{ background: `radial-gradient(circle at 53% 52%, ${project.accent}2d, transparent 61%)` }} />
      <div className={`relative w-[86%] ${compact ? "max-w-[640px] -translate-x-[4%] -translate-y-[5%]" : "max-w-[700px] -translate-x-[4%] -translate-y-[4%]"}`}>
        <BrowserWindow src={primary.src} alt={primary.alt[language]} />
        <BrowserWindow src={secondary.src} alt={secondary.alt[language]} className="absolute -bottom-[26%] -right-[13%] w-[61%]" />
      </div>
      <p className="absolute bottom-5 left-6 z-10 text-[10px] font-semibold uppercase tracking-[.22em] text-white/65 sm:bottom-7 sm:left-8">{project.title} · {copy.status}</p>
    </div>;
  }

  if (project.kind === "mobile" && project.screenshots) {
    const screens = project.screenshots;
    return <div className={`relative isolate overflow-hidden border-white/10 bg-[#172424] ${compact ? `min-h-[420px] sm:min-h-[510px] ${compactFrame}` : "min-h-[470px] sm:min-h-[610px] lg:min-h-[650px]"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(112,213,200,.25),transparent_62%)]" />
      <div className="absolute inset-x-[7%] top-1/2 flex -translate-y-1/2 items-center justify-center">
        <ScreenPhone src={screens[1].src} alt={screens[1].alt[language]} className="w-[29%] -translate-x-[7%] rotate-[-9deg]" />
        <ScreenPhone src={screens[0].src} alt={screens[0].alt[language]} className="z-10 w-[34%]" />
        <ScreenPhone src={screens[2].src} alt={screens[2].alt[language]} className="w-[29%] translate-x-[7%] rotate-[9deg]" />
      </div>
      <p className="absolute bottom-5 left-6 text-[10px] font-semibold uppercase tracking-[.22em] text-[#BCECE3] sm:bottom-7 sm:left-8">{copy.status} · React Native</p>
    </div>;
  }

  return <div className={`relative isolate overflow-hidden border-white/10 ${compact ? `min-h-[380px] lg:min-h-[520px] ${compactFrame}` : "min-h-[470px] sm:min-h-[610px] lg:min-h-[650px]"}`}><VibeConceptVisual language={language} compact={compact} /></div>;
}
