"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, useSyncExternalStore } from "react";

const subscribe = (onChange: () => void) => {
  window.addEventListener("portfolio-intro-change", onChange);
  return () => window.removeEventListener("portfolio-intro-change", onChange);
};

export default function IntroCurtain() {
  const showIntro = useSyncExternalStore(
    subscribe,
    () => !window.sessionStorage.getItem("intro-seen"),
    () => false,
  );
  const reduceMotion = useReducedMotion();
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (!showIntro || opened) return;
    const timer = window.setTimeout(() => setOpened(true), reduceMotion ? 450 : 4500);
    return () => window.clearTimeout(timer);
  }, [showIntro, reduceMotion, opened]);

  if (!showIntro) return null;

  return (
    <AnimatePresence
      onExitComplete={() => {
        window.sessionStorage.setItem("intro-seen", "true");
        window.dispatchEvent(new Event("portfolio-intro-change"));
      }}
    >
      {!opened && (
        <motion.div
          className="fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-[#1A0E19]"
          initial={{ opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: "-5%" }}
          transition={{ duration: reduceMotion ? 0.15 : 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_48%,rgba(100,38,66,.36),transparent_65%)]" aria-hidden="true" />
          {reduceMotion ? (
            <Image
              src="/doga-bice-signature-2026.png"
              alt="Doğa Bice imzası"
              width={1774}
              height={887}
              priority
              className="relative h-auto w-[min(82vw,48rem)] object-contain"
            />
          ) : (
            <video
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={() => setOpened(true)}
              aria-label="Doğa Bice imzasının çizilişi"
              className="relative h-auto w-[min(88vw,52rem)] mix-blend-screen"
            >
              <source src="/intro-signature.mp4" type="video/mp4" />
            </video>
          )}
          <button
            type="button"
            onClick={() => setOpened(true)}
            className="sr-only focus:not-sr-only focus:absolute focus:bottom-8 focus:left-1/2 focus:-translate-x-1/2 focus:rounded-full focus:bg-[#F6EFE8] focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-[#120D13]"
          >
            Tanıtımı geç
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
