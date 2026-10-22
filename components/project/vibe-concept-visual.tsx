import { ArrowUpRight, MapPin, Search, Sparkles } from "lucide-react";
import type { Language } from "@/lib/project-stories";

export default function VibeConceptVisual({ language, compact = false }: { language: Language; compact?: boolean }) {
  const tr = language === "tr";

  return <div role="img" aria-label={tr ? "Istanbul Vibe Finder için kavramsal mekân keşfi arayüzü" : "Conceptual place discovery interface for Istanbul Vibe Finder"} className={`isolate overflow-hidden bg-[#121924] ${compact ? "absolute inset-0" : "relative min-h-[470px] sm:min-h-[610px] lg:min-h-[650px]"}`}>
    <svg aria-hidden="true" viewBox="0 0 900 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full opacity-60">
      <path d="M570-30C512 89 638 156 564 260c-52 75-162 102-129 198 23 67 112 89 98 174" fill="none" stroke="#24455A" strokeWidth="112" />
      <path d="M570-30C512 89 638 156 564 260c-52 75-162 102-129 198 23 67 112 89 98 174" fill="none" stroke="#7196A1" strokeWidth="2" strokeDasharray="7 11" />
      <g fill="none" stroke="#49606B" strokeWidth="1" opacity=".5">
        <path d="M-40 90 490 334M-40 210 415 385M-40 340 428 440M20-40 375 620M155-40 466 620M345-40 570 620M660-40 980 540M790-40 980 340M570 105 930 260M525 365 940 508" />
        <path d="M0 480 448 518M75 0 540 142M620 0 920 112M585 445 970 370" />
      </g>
      <circle cx="320" cy="216" r="7" fill="#E8A96B" /><circle cx="320" cy="216" r="21" fill="none" stroke="#E8A96B" opacity=".45" />
      <circle cx="704" cy="370" r="5" fill="#E8A96B" /><circle cx="704" cy="370" r="15" fill="none" stroke="#E8A96B" opacity=".4" />
    </svg>
    <div className="absolute inset-0 bg-gradient-to-r from-[#121924] via-[#121924]/82 to-[#121924]/25" />
    <div className={`absolute inset-0 z-10 mx-auto flex max-w-[860px] flex-col justify-between ${compact ? "p-5 sm:p-8" : "p-7 sm:p-10 lg:p-12"}`}>
      <div className="flex items-center justify-between gap-3 border-b border-white/20 pb-4 text-[9px] font-semibold uppercase tracking-[.22em] text-[#E8A96B] sm:text-[10px]">
        <span>Istanbul Vibe Finder</span><span>{tr ? "KONSEPT ARAYÜZ · GELİŞİYOR" : "INTERFACE CONCEPT · IN PROGRESS"}</span>
      </div>
      <div className={`grid items-end gap-5 sm:grid-cols-[1.1fr_.9fr] ${compact ? "sm:gap-8" : "sm:gap-10"}`}>
        <div>
          <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.24em] text-[#E8A96B]"><Sparkles className="h-4 w-4" aria-hidden="true" />{tr ? "HİSSETTİĞİN YERİ BUL" : "FIND THE PLACE YOU FEEL"}</p>
          <p className={`font-semibold leading-[1.03] tracking-[-.06em] text-[#F6EFE8] ${compact ? "text-[clamp(1.65rem,4vw,2.8rem)]" : "text-[clamp(2.1rem,4vw,3.6rem)]"}`}>{tr ? "Bir yer değil, bir his ara." : "Search for a feeling, not a category."}</p>
          <div className={`mt-5 flex items-start gap-3 rounded-2xl border border-white/25 bg-[#F6EFE8] p-3 text-[#1E2330] shadow-[0_20px_55px_-25px_rgba(0,0,0,.7)] sm:items-center sm:p-4 ${compact ? "text-xs sm:text-sm" : "text-sm sm:text-base"}`}><Search className="mt-0.5 h-4 w-4 shrink-0 text-[#B97347] sm:mt-0" aria-hidden="true" /><span className="font-medium">{tr ? "Kadıköy’de sakin, samimi bir buluşma yeri" : "A calm, intimate place to meet in Kadıköy"}</span><ArrowUpRight className="ml-auto hidden h-4 w-4 shrink-0 text-[#B97347] sm:block" aria-hidden="true" /></div>
        </div>
        <div className="hidden rounded-[1.5rem] border border-white/20 bg-[#17212B]/90 p-5 shadow-[0_24px_65px_-30px_rgba(0,0,0,.8)] backdrop-blur-sm sm:block">
          <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#B8AAB7]">{tr ? "NİYETTEN ÖNERİYE" : "FROM INTENT TO DISCOVERY"}</p>
          <div className="mt-5 space-y-3 text-xs text-[#F6EFE8]">
            <p className="flex items-center gap-3 border-b border-white/15 pb-3"><MapPin className="h-4 w-4 text-[#E8A96B]" aria-hidden="true" /><span>Kadıköy</span><span className="ml-auto text-[#B8AAB7]">01</span></p>
            <p className="flex items-center gap-3 border-b border-white/15 pb-3"><span className="grid h-4 w-4 place-items-center text-[#E8A96B]">✦</span><span>{tr ? "Sakin · Samimi" : "Calm · Intimate"}</span><span className="ml-auto text-[#B8AAB7]">02</span></p>
            <p className="flex items-center gap-3"><Search className="h-4 w-4 text-[#E8A96B]" aria-hidden="true" /><span>{tr ? "Bağlamsal keşif" : "Contextual discovery"}</span><span className="ml-auto text-[#B8AAB7]">03</span></p>
          </div>
        </div>
      </div>
      <p className="border-t border-white/20 pt-4 text-[9px] font-semibold uppercase tracking-[.2em] text-[#B8AAB7] sm:text-[10px]">{tr ? "Kavramsal görsel · Gerçek uygulama ekranı değildir" : "Concept visual · Not a live product screen"}</p>
    </div>
  </div>;
}
