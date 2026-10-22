"use client";

import Reveal from "@/components/ui/reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/ui/language-provider";

export default function Contact() {
  const { language } = useLanguage();
  const tr = language === "tr";

  return (
    <section id="contact" className="relative px-5 pb-16 pt-2 md:px-8 lg:px-10 lg:pb-20 lg:pt-4">
      <Reveal>
        <div className="relative mx-auto max-w-7xl py-10 md:py-12 lg:py-16">
          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.18fr)_minmax(22rem,.62fr)] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[.34em] text-[#C75C7C]">05 · {tr ? "İletişim" : "Contact"}</p>
              <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[.94] tracking-[-.07em] text-[#E9DFD9] md:text-7xl">
                {tr ? <>Birlikte <span className="font-serif font-normal italic text-[#E8A96B]">iyi bir ürün</span> çıkaralım.</> : <>Let’s build <span className="font-serif font-normal italic text-[#E8A96B]">something useful</span> together.</>}
              </h2>
              <p className="mt-8 max-w-2xl text-[17px] leading-8 text-[#C9BEC4]">
                {tr ? "Yeni bir ürün fikri, mevcut bir deneyimde çözülmesi gereken bir problem veya birlikte çalışma ihtimali için yazabilirsin." : "Reach out about a new product idea, a problem in an existing experience or a chance to work together."}
              </p>
              <p className="mt-10 text-xs uppercase tracking-[.3em] text-white/45">Doğa Bice · İstanbul</p>
            </div>
            <div className="w-full text-[#D9D0CC] lg:mb-1">
              <p className="mb-6 text-xs font-medium uppercase tracking-[.28em] text-[#E8A96B]">{tr ? "Bir merhaba bırak" : "Start a conversation"}</p>
              <div className="border-t border-[#E8A96B]/55">
                <a href="mailto:bicedoga@gmail.com" className="group grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-b border-white/15 py-6 transition hover:border-[#E8A96B]/75"><span className="text-xs tracking-[.2em] text-[#E8A96B]">01</span><span><strong className="block text-lg font-medium text-[#E9DFD9] transition group-hover:text-[#E8A96B]">Email</strong><small className="mt-1.5 block text-sm text-white/50">bicedoga@gmail.com</small></span><ArrowUpRight className="h-5 w-5 text-[#E8A96B] transition group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
                <a href="https://github.com/dogabice" target="_blank" rel="noreferrer" className="group grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-b border-white/15 py-6 transition hover:border-[#E8A96B]/75"><span className="text-xs tracking-[.2em] text-[#E8A96B]">02</span><span><strong className="block text-lg font-medium text-[#E9DFD9] transition group-hover:text-[#E8A96B]">GitHub</strong><small className="mt-1.5 block text-sm text-white/50">github.com/dogabice</small></span><ArrowUpRight className="h-5 w-5 text-[#E8A96B] transition group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
                <a href="https://www.linkedin.com/in/dogabice" target="_blank" rel="noreferrer" className="group grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-b border-white/15 py-6 transition hover:border-[#E8A96B]/75"><span className="text-xs tracking-[.2em] text-[#E8A96B]">03</span><span><strong className="block text-lg font-medium text-[#E9DFD9] transition group-hover:text-[#E8A96B]">LinkedIn</strong><small className="mt-1.5 block text-sm text-white/50">linkedin.com/in/dogabice</small></span><ArrowUpRight className="h-5 w-5 text-[#E8A96B] transition group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
              </div>
            </div>
          </div>
          <div className="mt-16 grid gap-7 border-t border-white/15 pt-8 text-[15px] md:grid-cols-3 md:gap-10">
            <div>
              <p className="text-[10px] uppercase tracking-[.26em] text-[#E8A96B]">{tr ? "Müsaitlik" : "Availability"}</p>
              <p className="mt-3 flex items-center gap-2 text-[#D9D0CC]"><span className="h-2 w-2 rounded-full bg-[#5EA7A0] shadow-[0_0_12px_rgba(94,167,160,.8)]" />{tr ? "Yeni ürün iş birliklerine açığım" : "Open to thoughtful product collaborations"}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[.26em] text-[#E8A96B]">{tr ? "Odak" : "Focus"}</p>
              <p className="mt-3 text-[#D9D0CC]">Product strategy · Mobile · AI systems</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[.26em] text-[#E8A96B]">{tr ? "Çalışma biçimi" : "Working mode"}</p>
              <p className="mt-3 text-[#D9D0CC]">İstanbul · Remote friendly</p>
            </div>
          </div>
          <div className="mt-16 flex flex-col gap-5 border-t border-[#E8A96B]/45 pt-6 text-[10px] font-medium uppercase tracking-[.26em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>Doğa Bice · Product engineer</p>
            <p>© 2026 · İstanbul</p>
            <Link href="/" className="group inline-flex items-center gap-2 transition hover:text-[#E8A96B]">{tr ? "Ana sayfaya dön" : "Back home"}<ArrowUpRight className="h-3.5 w-3.5 -rotate-45 transition group-hover:-translate-y-1" /></Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
