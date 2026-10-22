"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ContactRound, Globe2, Mail, RotateCcw, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type PointerEvent as ReactPointerEvent } from "react";
import Reveal from "@/components/ui/reveal";
import { useLanguage } from "@/components/ui/language-provider";

function LinkedInMark({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={className}><path fill="currentColor" d="M5.35 8.33A2.33 2.33 0 1 0 5.35 3.67a2.33 2.33 0 0 0 0 4.66ZM3.33 9.98h4.04V21H3.33V9.98Zm6.57 0h3.87v1.5h.06c.54-1.02 1.86-2.1 3.83-2.1 4.1 0 4.86 2.7 4.86 6.2V21h-4.03v-4.8c0-1.15-.02-2.62-1.6-2.62-1.6 0-1.84 1.25-1.84 2.54V21H9.9V9.98Z" /></svg>;
}

export default function Hero() {
  const { language, setLanguage } = useLanguage();
  const tr = language === "tr";
  const [connectOpen, setConnectOpen] = useState(false);
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });
  const handleCardPointerMove = (event: ReactPointerEvent<HTMLButtonElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setCardTilt({ x: y * -12, y: x * 14 });
  };
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setConnectOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
    <section id="home" className="relative isolate mx-auto max-w-[1500px] px-5 pb-14 pt-0 md:px-8 lg:-mt-14 lg:px-10 lg:pb-16" aria-labelledby="hero-heading">
      <div className="hero-satin pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true" />
      <div className="relative z-10">
        <div className="hero-intro mx-auto mt-8 max-w-[1280px] text-center sm:mt-10 lg:mt-0">
          <Reveal delay={0.05}><p className="text-xs uppercase tracking-[.34em] text-[#E8A96B]">{tr ? "Ürün mühendisi · İstanbul" : "Product engineer · Istanbul"}</p></Reveal>
          <Reveal delay={0.1}>
            <h1 id="hero-heading" className="hero-headline mx-auto mt-5 max-w-[1280px] text-[clamp(3.15rem,5vw,5.7rem)] font-semibold leading-[.94] tracking-[-.075em] text-[#F6EFE8]">
              {tr ? <>Fikirleri <span className="font-serif font-normal italic tracking-[-.055em] text-[#E8A96B]">yaşayan ürünlere</span> dönüştürüyorum.</> : <>I shape ideas into <span className="font-serif font-normal italic tracking-[-.055em] text-[#E8A96B]">thoughtful digital products.</span></>}
            </h1>
          </Reveal>
          <Reveal delay={0.16}><p className="hero-summary mx-auto mt-5 max-w-[690px] text-[15px] leading-7 text-[#D5C8D0] sm:text-base sm:leading-8">{tr ? "Araştırmadan arayüze, koddan canlı ürüne kadar tüm süreci sahipleniyorum. İnsanların kolayca kullanabildiği, özenle düşünülmüş deneyimler üretiyorum." : "From research and interface design to code and launch, I take ownership of the whole journey and build considered products that feel easy to use."}</p></Reveal>
          <Reveal delay={0.2}><div className="hero-actions mt-5 flex flex-wrap items-center justify-center gap-3"><Link href="/work" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#F6EFE8] px-6 text-sm font-semibold text-[#120D13] transition hover:-translate-y-1 hover:bg-[#E8A96B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A96B]">{tr ? "İşlerimi gör" : "Explore work"}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link><Link href="/expertise" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#E8A96B]/35 px-6 text-sm text-[#F6EFE8] transition hover:border-[#E8A96B] hover:text-[#E8A96B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A96B]">{tr ? "Nasıl çalışıyorum" : "How I work"}</Link></div></Reveal>
        </div>

        <div className="hero-card-stage relative mx-auto mt-8 max-w-[850px] sm:mt-9 lg:mt-5">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 items-center justify-between text-[10px] uppercase tracking-[.24em] text-[#D8B884]/65 xl:flex" aria-hidden="true"><span className="-translate-x-10 -rotate-90">01 / {tr ? "Tanışalım" : "Meet me"}</span><span className="translate-x-10 rotate-90">{tr ? "Kartı aç" : "Open card"} ↗</span></div>
          <Reveal delay={0.12} className="hero-card relative mx-auto w-full max-w-[500px]">
            <figure className="relative ml-auto w-full pt-2" style={{ perspective: "1200px" }}>
              <div className="hero-business-card group relative aspect-[1.58/1] w-full" style={{ transformStyle: "preserve-3d" }}>
              <button type="button" onPointerMove={handleCardPointerMove} onPointerLeave={() => setCardTilt({ x: 0, y: 0 })} onClick={() => setConnectOpen(true)} aria-haspopup="dialog" aria-expanded={connectOpen} aria-label={tr ? "Bağlantı kartını aç" : "Open connect card"} className="relative h-full w-full rounded-[1.5rem] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#E8A96B]" style={{ transformStyle: "preserve-3d", transform: `translate3d(${cardTilt.y * 0.7}px, ${cardTilt.x * 0.5}px, 0) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`, transition: "transform 180ms ease-out" }}>
                <div className="absolute inset-0 overflow-hidden rounded-[1.5rem] border border-[#E8A96B]/45 bg-[#181018] shadow-[0_30px_80px_-35px_rgba(0,0,0,.9)]" style={{ backfaceVisibility: "hidden" }}>
                  <div className="absolute inset-y-0 right-0 w-[57%]"><Image src="/doga-bice-portrait.jpeg" alt="Doğa Bice" fill priority sizes="400px" className="object-cover object-[56%_28%]" /></div>
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,#181018_0%,#181018_34%,rgba(24,16,24,.82)_54%,rgba(24,16,24,.08)_100%)]" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_28%,rgba(255,255,255,.22)_48%,transparent_68%)] opacity-0 transition duration-500 group-hover:translate-x-[35%] group-hover:opacity-100" />
                  <div className="absolute inset-y-0 left-0 flex w-[57%] flex-col justify-between p-6">
                    <p className="text-[9px] uppercase tracking-[.27em] text-[#E8A96B]">{tr ? "Dijital kartvizit" : "Digital calling card"}</p>
                    <div><p className="text-3xl font-semibold leading-[.9] tracking-[-.07em] text-[#F6EFE8]">Doğa <span className="font-serif font-normal italic text-[#E8A96B]">Bice</span></p><p className="mt-3 text-[9px] uppercase tracking-[.22em] text-[#D9CDD4]">{tr ? "Ürün mühendisi" : "Product engineer"}</p></div>
                    <div className="flex items-end justify-between border-t border-[#E8A96B]/45 pt-3"><p className="text-[9px] uppercase tracking-[.2em] text-white/60">Istanbul · Türkiye</p><RotateCcw className="h-4 w-4 text-[#E8A96B] transition group-hover:rotate-[-45deg]" /></div>
                  </div>
                </div>
              </button>
              </div>
              <figcaption className="sr-only">{tr ? "Merakla tasarla · Özenle inşa et" : "Design with curiosity · Build with care"}</figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal delay={0.22}>
          <div className="hero-footer mx-auto mt-6 flex max-w-[1140px] flex-col items-center justify-between gap-5 border-t border-[#E8A96B]/30 pt-4 text-center md:flex-row md:text-left">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[10px] uppercase tracking-[.25em] text-white/45 md:justify-start"><span>Product thinking</span><span>Interface systems</span><span>Full-stack craft</span></div>
            <a href="#expertise" className="inline-flex min-h-11 items-center gap-2 text-[11px] uppercase tracking-[.2em] text-[#E8A96B] transition hover:text-[#F6EFE8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A96B]">{tr ? "Hikâyeyi keşfet" : "Explore the story"}<ArrowRight className="h-4 w-4 rotate-90" aria-hidden="true" /></a>
          </div>
        </Reveal>
      </div>
    </section>
    <AnimatePresence>
      {connectOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] grid place-items-center bg-[#120D13]/88 px-4 py-6 backdrop-blur-xl" role="dialog" aria-modal="true" aria-label={tr ? "Bağlantı kartı" : "Connect card"} onMouseDown={() => setConnectOpen(false)}>
        <motion.div initial={{ opacity: 0, scale: 0.88, y: 28 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.92, y: 20 }} transition={{ type: "spring", stiffness: 190, damping: 22 }} className="relative h-[min(43rem,calc(100vh-2rem))] w-full max-w-[26rem]" onMouseDown={(event) => event.stopPropagation()}>
          <div className="absolute inset-0 flex flex-col overflow-hidden rounded-[2.4rem] bg-[radial-gradient(circle_at_10%_5%,rgba(186,52,88,.52),transparent_32%),radial-gradient(circle_at_90%_84%,rgba(232,169,107,.12),transparent_30%),linear-gradient(145deg,#35172A,#120D13_68%)] p-5 shadow-[0_40px_120px_rgba(0,0,0,.7)] sm:p-6">
            <div className="relative flex flex-col items-center border-b border-[#E8A96B]/35 pb-6 text-center"><div className="absolute left-0 top-0 flex rounded-full bg-white/[.07] p-1 text-[10px] font-medium"><button type="button" onClick={() => setLanguage("tr")} className={`rounded-full px-2.5 py-1.5 transition ${tr ? "bg-[#E8A96B] text-[#120D13]" : "text-[#D8C5AB]"}`}>TR</button><button type="button" onClick={() => setLanguage("en")} className={`rounded-full px-2.5 py-1.5 transition ${!tr ? "bg-[#E8A96B] text-[#120D13]" : "text-[#D8C5AB]"}`}>EN</button></div><button type="button" onClick={() => setConnectOpen(false)} className="absolute right-0 top-0 grid h-10 w-10 place-items-center rounded-full bg-white/[.07] text-[#F6EFE8] transition hover:bg-[#E8A96B] hover:text-[#120D13]" aria-label={tr ? "Kapat" : "Close"}><X className="h-4 w-4" /></button><div className="relative h-28 w-28 overflow-hidden rounded-[2rem] shadow-[0_18px_42px_rgba(0,0,0,.35)]"><Image src="/doga-bice-portrait.jpeg" alt="Doğa Bice" fill sizes="112px" className="object-cover object-[50%_24%]" /></div><p className="mt-4 text-[9px] uppercase tracking-[.3em] text-[#E8A96B]">{tr ? "Bağlantı kartı" : "Connect card"}</p><h2 className="mt-2 text-[2.15rem] font-semibold leading-none tracking-[-.07em] text-[#F6EFE8]">Doğa Bice</h2><p className="mt-2 text-[10px] uppercase tracking-[.24em] text-[#D8C5AB]/75">{tr ? "Ürün mühendisi · İstanbul" : "Product engineer · Istanbul"}</p></div>
            <div className="mt-5 text-center"><p className="text-[15px] leading-6 text-[#E6D9DF]">{tr ? "Bir fikri konuşmak ya da birlikte üretmek için bağlanalım." : "Let’s connect for a good idea or a thoughtful collaboration."}</p></div>
            <div className="connect-sheet mt-6 space-y-3">
              <motion.a whileHover={{ y: -3, scale: 1.015 }} whileTap={{ scale: 0.97 }} href="mailto:bicedoga@gmail.com" className="group flex min-h-[72px] items-center gap-3 rounded-2xl border border-[#E8A96B]/30 bg-white/[.055] p-3 text-[#F6EFE8]"><motion.span whileHover={{ rotate: -8, scale: 1.08 }} className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[linear-gradient(135deg,#FFD89A,#E8A96B)] text-[#120D13] shadow-[0_8px_18px_rgba(232,169,107,.25)]"><Mail className="h-5 w-5" /></motion.span><span className="grid min-w-0 gap-0.5"><strong className="text-sm">{tr ? "E-posta" : "Email"}</strong><small className="truncate text-xs text-[#D9CDD4]">bicedoga@gmail.com</small></span><ArrowRight className="ml-auto h-4 w-4 shrink-0 text-[#E8A96B] transition group-hover:translate-x-1" /></motion.a>
              <motion.a whileHover={{ y: -3, scale: 1.015 }} whileTap={{ scale: 0.97 }} href="https://www.linkedin.com/in/dogabice" target="_blank" rel="noreferrer" className="group flex min-h-[72px] items-center gap-3 rounded-2xl border border-[#E8A96B]/30 bg-white/[.055] p-3 text-[#F6EFE8]"><motion.span whileHover={{ scale: 1.08 }} className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#0A66C2] text-white shadow-[0_8px_18px_rgba(10,102,194,.28)]"><LinkedInMark className="h-6 w-6" /></motion.span><span className="grid min-w-0 gap-0.5"><strong className="text-sm">LinkedIn</strong><small className="truncate text-xs text-[#D9CDD4]">linkedin.com/in/dogabice</small></span><ArrowRight className="ml-auto h-4 w-4 shrink-0 text-[#E8A96B] transition group-hover:translate-x-1" /></motion.a>
              <motion.div whileHover={{ y: -3, scale: 1.015 }} whileTap={{ scale: 0.97 }}><Link href="/" className="group flex min-h-[72px] items-center gap-3 rounded-2xl border border-[#E8A96B]/30 bg-white/[.055] p-3 text-[#F6EFE8]"><motion.span whileHover={{ rotate: 12, scale: 1.08 }} className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[linear-gradient(135deg,#82D1C8,#5EA7A0)] text-[#120D13] shadow-[0_8px_18px_rgba(94,167,160,.22)]"><Globe2 className="h-5 w-5" /></motion.span><span className="grid min-w-0 gap-0.5"><strong className="text-sm">{tr ? "Web sitesi" : "Website"}</strong><small className="truncate text-xs text-[#D9CDD4]">{tr ? "Portfolyomu ziyaret et" : "Visit my portfolio"}</small></span><ArrowRight className="ml-auto h-4 w-4 shrink-0 text-[#E8A96B] transition group-hover:translate-x-1" /></Link></motion.div>
              <motion.a whileHover={{ y: -3, scale: 1.015 }} whileTap={{ scale: 0.97 }} href="/doga-bice.vcf" download className="group flex min-h-[72px] items-center gap-3 rounded-2xl border border-[#E8A96B]/30 bg-white/[.055] p-3 text-[#F6EFE8]"><motion.span whileHover={{ rotate: -8, scale: 1.08 }} className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[linear-gradient(135deg,#E7769A,#C75C7C)] text-white shadow-[0_8px_18px_rgba(199,92,124,.25)]"><ContactRound className="h-5 w-5" /></motion.span><span className="grid min-w-0 gap-0.5"><strong className="text-sm">{tr ? "Kartviziti kaydet" : "Save contact"}</strong><small className="truncate text-xs text-[#D9CDD4]">{tr ? "Rehberine ekle" : "Add to your address book"}</small></span><ArrowRight className="ml-auto h-4 w-4 shrink-0 text-[#E8A96B] transition group-hover:translate-x-1" /></motion.a>
            </div>
            <p className="mt-auto pt-5 text-center text-[9px] uppercase tracking-[.25em] text-[#D8C5AB]/70">Product · Mobile · AI · Istanbul</p>
          </div>
        </motion.div>
      </motion.div>}
    </AnimatePresence>
    </>
  );
}
