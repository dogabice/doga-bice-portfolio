"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Check, Search } from "lucide-react";
import { useLanguage } from "@/components/ui/language-provider";

const phases = [
  {
    number: "01",
    title: { tr: "Önce doğru soruyu bulurum.", en: "First, I find the right question." },
    text: {
      tr: "Kimin hangi anda neye ihtiyaç duyduğunu anlamadan ekrana başlamam. Problemi, kullanıcıyı ve ürün hedefini aynı çerçevede netleştiririm.",
      en: "Before drawing a screen, I understand who needs what and when. I frame the user problem and product goal together.",
    },
    output: { tr: "Çıktı · Net problem", en: "Outcome · Clear problem" },
  },
  {
    number: "02",
    title: { tr: "Deneyimi bir sisteme dönüştürürüm.", en: "Then I shape the experience into a system." },
    text: {
      tr: "Ekranları tek tek değil, aralarındaki ilişkiyle tasarlarım. Keşiften karara, karardan iletişime uzanan akışı arayüz ve teknik mimariyle birlikte kurarım.",
      en: "I design the relationships between screens. I build the journey from discovery to decision and contact alongside the interface and architecture.",
    },
    output: { tr: "Çıktı · Tutarlı akış", en: "Outcome · Coherent flow" },
  },
  {
    number: "03",
    title: { tr: "Ürünü yayına taşır, geliştirmeye devam ederim.", en: "I launch the product and keep improving it." },
    text: {
      tr: "Detayı çalışan üründe sınarım. Yuvia’da ürün akışlarını ve arayüzü tasarladım, mobil ve web geliştirmesinde çalıştım; bugün de canlı ürünü ekip arkadaşımla sürdürüyorum.",
      en: "I test the details in a working product. For Yuvia, I designed the flows and interface and worked on mobile and web development; a teammate and I continue to maintain the live product.",
    },
    output: { tr: "Çıktı · Canlı ürün", en: "Outcome · Live product" },
  },
] as const;

function StoryVisual({ phase, tr }: { phase: number; tr: boolean }) {
  return (
    <div className="relative flex h-full min-h-[270px] flex-col overflow-hidden rounded-[2rem] border border-white/15 bg-[#1B1820] p-5 shadow-[0_36px_100px_-55px_rgba(0,0,0,.9)] sm:p-8 lg:rounded-[2.5rem] lg:p-10">
      <div className="flex items-center justify-between gap-3 border-b border-white/15 pb-4 text-[10px] font-semibold uppercase tracking-[.18em] text-[#E8A96B]">
        <span className="sm:hidden">Doğa Bice</span><span className="hidden sm:inline">Doğa Bice / {tr ? "Ürün pratiği" : "Product practice"}</span>
        <span className="shrink-0">{phases[phase].number} / 03</span>
      </div>

      {phase === 0 && (
        <div className="flex flex-1 flex-col justify-center py-6 lg:py-10">
          <p className="text-[10px] font-semibold uppercase tracking-[.25em] text-[#5EA7A0]">{tr ? "Başlangıç noktası" : "Starting point"}</p>
          <p className="mt-5 max-w-xl text-[clamp(1.7rem,3.4vw,3.7rem)] font-semibold leading-[1.05] tracking-[-.065em] text-[#F6EFE8]">
            {tr ? "İnsan neyi çözmeye çalışıyor?" : "What is the person trying to solve?"}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-12">
            <div className="border-t border-[#E8A96B]/50 pt-4"><span className="text-xs text-[#E8A96B]">01 / {tr ? "İhtiyaç" : "Need"}</span><p className="mt-2 text-sm leading-6 text-[#CFC3CB]">{tr ? "Gerçek bağlamı dinle" : "Listen to the real context"}</p></div>
            <div className="border-t border-[#E8A96B]/50 pt-4"><span className="text-xs text-[#E8A96B]">02 / {tr ? "Hedef" : "Goal"}</span><p className="mt-2 text-sm leading-6 text-[#CFC3CB]">{tr ? "Başarıyı tanımla" : "Define what success means"}</p></div>
          </div>
        </div>
      )}

      {phase === 1 && (
        <div className="flex flex-1 flex-col justify-center py-6 lg:py-10">
          <p className="text-[10px] font-semibold uppercase tracking-[.25em] text-[#5EA7A0]">{tr ? "Deneyim haritası" : "Experience map"}</p>
          <p className="mt-4 max-w-lg text-[clamp(1.5rem,2.8vw,3rem)] font-semibold leading-[1.08] tracking-[-.06em] text-[#F6EFE8]">{tr ? "Bir sonraki adım hep anlaşılır olmalı." : "The next step should always feel clear."}</p>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-stretch lg:mt-12">
            {[
              { icon: Search, tr: "Keşfet", en: "Discover", index: "01" },
              { icon: Check, tr: "Karar ver", en: "Decide", index: "02" },
              { icon: ArrowUpRight, tr: "Bağ kur", en: "Connect", index: "03" },
            ].map((step) => {
              const Icon = step.icon;
              return <div key={step.index} className="flex min-w-0 flex-1 items-center gap-3 rounded-[1.1rem] border border-white/15 bg-white/[.045] p-3 sm:block sm:p-4">
                <div className="flex items-center justify-between gap-3 sm:mb-8"><Icon className="h-4 w-4 text-[#E8A96B]" aria-hidden="true" /><span className="text-[10px] tracking-[.18em] text-white/35">{step.index}</span></div>
                <span className="text-sm font-semibold text-[#F6EFE8]">{tr ? step.tr : step.en}</span>
              </div>;
            })}
          </div>
        </div>
      )}

      {phase === 2 && (
        <div className="relative flex flex-1 items-center gap-4 overflow-hidden py-4 sm:gap-8 lg:py-8">
          <div className="relative z-10 min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-[.25em] text-[#5EA7A0]">{tr ? "Yayında ve gelişiyor" : "Live and evolving"}</p>
            <Image src="/work/yuvia/brand/logoname-white.webp" alt="Yuvia" width={900} height={270} sizes="(max-width: 640px) 130px, 220px" className="mt-5 h-auto w-[min(38vw,220px)]" />
            <p className="mt-5 max-w-[15rem] text-sm leading-6 text-[#CFC3CB]">{tr ? "Bitirme projesinden iOS, Android ve web’de yaşayan ürüne." : "From a capstone project to a live product on iOS, Android and web."}</p>
            <p className="mt-8 text-[10px] font-semibold uppercase tracking-[.12em] text-[#E8A96B]"><span className="block sm:inline">iOS · Android</span><span className="block sm:inline"> · Web</span></p>
          </div>
          <div className="relative h-[210px] w-[38%] shrink-0 overflow-hidden rounded-[1.5rem] border-[5px] border-[#09080B] bg-[#F8F5ED] shadow-[0_20px_45px_rgba(0,0,0,.55)] sm:h-[330px] sm:w-[34%] lg:h-[390px]">
            <Image src="/work/yuvia/screens/home.webp" alt={tr ? "Yuvia keşif ekranı" : "Yuvia discovery screen"} fill sizes="(max-width: 640px) 130px, 230px" className="object-cover object-top" />
          </div>
        </div>
      )}

      <div className="flex items-center justify-between border-t border-white/15 pt-4 text-[10px] uppercase tracking-[.18em] text-[#B8AAB7]">
        <span>{tr ? "Fikirden ürüne" : "From idea to product"}</span>
        <span className="flex gap-1.5" aria-hidden="true">{phases.map((item, index) => <i key={item.number} className={`h-1 rounded-full transition-all ${index === phase ? "w-6 bg-[#E8A96B]" : "w-2 bg-white/20"}`} />)}</span>
      </div>
    </div>
  );
}

export default function Approach() {
  const { language } = useLanguage();
  const tr = language === "tr";
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(Number((visible[0].target as HTMLElement).dataset.storyStep));
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    stepRefs.current.forEach((element) => { if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="approach" className="continuous-section relative mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-10 lg:py-28" aria-labelledby="approach-heading">
      <div className="grid gap-7 border-t border-white/10 pt-7 md:grid-cols-[0.72fr_1.28fr] md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[.34em] text-[#5EA7A0]">02 · {tr ? "Çalışma biçimim" : "How I work"}</p>
          <p className="mt-5 max-w-xs text-sm leading-7 text-[#B8AAB7]">{tr ? "Bir ürünün hikâyesi, ilk ekrandan önce başlar." : "A product story begins before its first screen."}</p>
        </div>
        <h2 id="approach-heading" className="max-w-4xl text-4xl font-semibold leading-[.97] tracking-[-.065em] md:text-6xl">
          {tr ? <>Bir fikir nasıl <span className="font-serif font-normal italic text-[#E8A96B]">çalışan ürüne</span> dönüşür?</> : <>How does an idea become <span className="font-serif font-normal italic text-[#E8A96B]">a working product?</span></>}
        </h2>
      </div>

      <div className="mt-12 grid gap-8 lg:mt-20 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)] lg:gap-16">
        <div className="hidden lg:block">
          <div className="sticky top-[12vh] h-[min(72vh,650px)] min-h-[500px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={active} className="h-full" initial={reducedMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={reducedMotion ? undefined : { opacity: 0, y: -18 }} transition={{ duration: reducedMotion ? 0 : .35, ease: "easeOut" }}>
                <StoryVisual phase={active} tr={tr} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="border-t border-white/15 lg:border-t-0">
          {phases.map((phase, index) => (
            <article key={phase.number} ref={(element) => { stepRefs.current[index] = element; }} data-story-step={index} className={`relative flex flex-col justify-center border-b border-white/15 py-10 lg:min-h-[78vh] lg:py-20 ${index === active ? "lg:opacity-100" : "lg:opacity-55"} transition-opacity duration-500`}>
              <div className="flex items-center justify-between gap-4"><span className={`font-serif text-6xl italic leading-none transition-colors duration-500 sm:text-7xl ${index === active ? "text-[#E8A96B]" : "text-white/25"}`}>{phase.number}</span><ArrowDownRight className="h-5 w-5 text-[#E8A96B]" aria-hidden="true" /></div>
              <div className="my-7 h-[460px] sm:h-[390px] lg:hidden"><StoryVisual phase={index} tr={tr} /></div>
              <h3 className="max-w-lg text-3xl font-semibold leading-[1.08] tracking-[-.055em] sm:text-4xl lg:mt-10 lg:text-[clamp(2.3rem,3.1vw,3.6rem)]">{tr ? phase.title.tr : phase.title.en}</h3>
              <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#CFC3CB]">{tr ? phase.text.tr : phase.text.en}</p>
              <p className="mt-8 text-[10px] font-semibold uppercase tracking-[.25em] text-[#5EA7A0]">{tr ? phase.output.tr : phase.output.en}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
