"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type InteractivePhoneProps = {
  videoSrc: string;
  label: string;
  className?: string;
  videoFit?: "cover" | "contain";
};

export default function InteractivePhone({ videoSrc, label, className = "", videoFit = "cover" }: InteractivePhoneProps) {
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 150, damping: 22, mass: 0.7 });
  const smoothY = useSpring(pointerY, { stiffness: 150, damping: 22, mass: 0.7 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const glareX = useTransform(smoothX, [-0.5, 0.5], [20, 80]);
  const glareY = useTransform(smoothY, [-0.5, 0.5], [20, 80]);
  const glare = useTransform([glareX, glareY], ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,.24), transparent 34%)`);

  return (
    <div
      className={cn("relative [perspective:1200px]", className)}
      onPointerMove={(event) => {
        if (reducedMotion) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
        pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
      }}
      onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, rotateZ: 2 }}
        animate={{ opacity: 1, y: 0, rotateZ: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={reducedMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full rounded-[3.2rem] bg-gradient-to-br from-[#777078] via-[#1A171B] to-[#030303] p-[7px] shadow-[0_45px_100px_rgba(0,0,0,.7),0_0_60px_rgba(232,169,107,.13)] will-change-transform"
      >
        <span className="absolute -left-[9px] top-28 h-12 w-1.5 rounded-l bg-[#312C32]" />
        <span className="absolute -left-[9px] top-44 h-20 w-1.5 rounded-l bg-[#312C32]" />
        <span className="absolute -right-[9px] top-36 h-24 w-1.5 rounded-r bg-[#312C32]" />
        <div className="relative h-full overflow-hidden rounded-[2.75rem] bg-black ring-1 ring-white/10">
          <video autoPlay={!reducedMotion} controls={!!reducedMotion} muted loop={!reducedMotion} playsInline preload="metadata" className={cn("h-full w-full", videoFit === "contain" ? "object-contain" : "object-cover")} aria-label={label}>
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/25 to-transparent" />
          <div className="pointer-events-none absolute left-1/2 top-2.5 h-6 w-24 -translate-x-1/2 rounded-full bg-[#050405] shadow-[inset_0_1px_2px_rgba(255,255,255,.09)]" />
          <div className="pointer-events-none absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/75" />
          {!reducedMotion && <motion.div className="pointer-events-none absolute inset-0 mix-blend-screen" style={{ background: glare }} />}
        </div>
        <div className="pointer-events-none absolute inset-0 translate-z-[-24px] rounded-[3.2rem] bg-black/80 blur-xl [transform:translateZ(-24px)]" />
      </motion.div>
    </div>
  );
}
