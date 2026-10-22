"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/components/ui/language-provider";
import "./opening.css";

export default function Hero() {
  const { language } = useLanguage();
  const tr = language === "tr";
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 112]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const auroraX = useTransform(scrollYProgress, [0, 1], ["-4%", "12%"]);
  const auroraY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section id="home" ref={heroRef} className="stage relative isolate overflow-hidden" aria-labelledby="hero-heading">
      <motion.div className="stage-aurora" aria-hidden="true" style={reduceMotion ? undefined : { x: auroraX, y: auroraY }} />
      {!reduceMotion && <motion.div className="stage-darkness" aria-hidden="true" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: .95, ease: "easeOut" }} />}
      <div className="stage-inner mx-auto max-w-[1800px] px-5 md:px-8 lg:px-10">
        <div className="stage-scene">
          <motion.div className="stage-avatar" initial={reduceMotion ? false : { opacity: 0, y: 42 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .95, delay: .1, ease: [0.22, 1, 0.36, 1] }}>
            <motion.div style={reduceMotion ? undefined : { y: portraitY, scale: portraitScale }}>
              <Image
                src="/doga-bice-cutout.png"
                alt={tr ? "Doğa Bice portresi" : "Portrait of Doğa Bice"}
                width={1254}
                height={1254}
                priority
                sizes="(max-width: 639px) 91vw, (max-width: 1023px) 70vw, 50vw"
                className="h-auto w-full"
              />
            </motion.div>
          </motion.div>

          <h1 id="hero-heading" className="stage-name" aria-label={tr ? "Merhaba, ben Doğa Bice" : "Hello, I’m Doğa Bice"}>
            <motion.span className="stage-name-first" initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .15, ease: "easeOut" }}>{tr ? "Merhaba," : "Hello,"}</motion.span>
            <motion.span className="stage-name-last" initial={reduceMotion ? false : { opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .35, ease: "easeOut" }}>{tr ? "ben Doğa Bice." : "I’m Doğa Bice."}</motion.span>
          </h1>
        </div>

        <motion.div className="stage-outro" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .55, ease: "easeOut" }}>
          <p>{tr ? "Fikirleri yaşayan ürünlere dönüştürüyorum." : "I turn ideas into products people use."}</p>
          <Link href="/#expertise" className="stage-main-link">
            <span>{tr ? "Neler yapıyorum" : "What I do"}</span>
            <ArrowDownRight size={19} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
