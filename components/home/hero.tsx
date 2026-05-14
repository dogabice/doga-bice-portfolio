"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/reveal";
import PhoneFrame from "@/components/ui/phone-frame";
import { ArrowRight, BrainCircuit, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 md:px-8 lg:px-10 lg:pt-24"
    >
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative rounded-[2.4rem] border border-white/10 bg-[#120D13]/55 p-8 backdrop-blur-xl md:p-10">
          <Reveal>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.34em] text-[#C75C7C]">
              Hey, I’m Doğa
            </p>
          </Reveal>

          <Reveal delay={0.08}>
  <h1 className="max-w-[34rem] text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.06em] text-[#F6EFE8] md:text-[3.9rem] lg:text-[4.1rem]">
    Where product thinking meets intelligent systems.
  </h1>
</Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 max-w-xl text-[16px] leading-8 text-[#B8AAB7]">
              I combine product thinking, engineering and AI to create mobile
              and web experiences that feel useful, warm and technically real.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-[#F6EFE8] px-5 py-3 text-sm font-medium text-[#120D13] transition hover:-translate-y-1 hover:bg-[#E8A96B]"
              >
                View work
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#expertise"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-[#F6EFE8] backdrop-blur transition hover:border-[#C75C7C]/40"
              >
                Explore expertise
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative min-h-[520px]">
            <div className="absolute inset-0 rounded-[2.8rem] border border-white/10 bg-white/[0.025] backdrop-blur-xl" />
            <div className="absolute inset-8 rounded-[2.4rem] bg-[radial-gradient(circle_at_30%_20%,rgba(199,92,124,0.20),transparent_32%),radial-gradient(circle_at_80%_78%,rgba(232,169,107,0.14),transparent_34%)]" />

            {/* E-Paw mobile */}
            <motion.div
              animate={{ y: [0, -7, 0], rotate: [-7, -5, -7] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-10 top-16 z-10 w-[27%]"
            >
              <div className="mb-3 ml-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5EA7A0]" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#B8AAB7]">
                  Mobile AI
                </p>
              </div>
              <PhoneFrame src="/epaw/epaw-home.PNG" alt="E-Paw preview" />
            </motion.div>

            {/* Yuvio mobile */}
            <motion.div
              animate={{ y: [0, 8, 0], rotate: [2, 0, 2] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[33%] top-8 z-30 w-[31%]"
            >
              <div className="mb-3 ml-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E8A96B]" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#B8AAB7]">
                  Product app
                </p>
              </div>
              <PhoneFrame src="/yuvio/home.PNG" alt="Yuvio preview" priority />
            </motion.div>

            {/* Istanbul Vibe Finder wide card */}
            <motion.div
              animate={{ y: [0, -5, 0], rotate: [4, 2, 4] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-16 right-4 z-20 w-[48%]"
            >
              <div className="rounded-[2rem] border border-white/10 bg-[#120D13]/90 p-7 shadow-[0_30px_90px_-45px_rgba(0,0,0,0.9)] backdrop-blur-xl">
                <div className="mb-10 flex items-center justify-between">
                  <BrainCircuit className="h-8 w-8 text-[#E8A96B]" />
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#B8AAB7]">
                    Web / AI
                  </span>
                </div>

                <p className="text-[1.35rem] font-semibold leading-tight tracking-[-0.04em] text-[#F6EFE8]">
                  Istanbul Vibe Finder
                </p>

                <p className="mt-3 text-xs leading-6 text-[#B8AAB7]">
                  AI-powered venue discovery with semantic search and
                  recommendation logic.
                </p>
              </div>
            </motion.div>

            {/* small note */}
            <motion.div
              animate={{ opacity: [0.65, 1, 0.65] }}
              transition={{ duration: 3.2, repeat: Infinity }}
              className="absolute bottom-5 left-5 z-40 rounded-full border border-white/10 bg-[#211826]/80 px-4 py-3 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#E8A96B]" />
                <p className="text-xs font-medium text-[#F6EFE8]">
                  Mobile · Web · AI systems
                </p>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}