"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroCurtain() {
  const [showIntro, setShowIntro] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("intro-seen");

    if (!seen) {
      setShowIntro(true);
    }
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem("intro-seen", "true");
    setOpened(true);
  };

  if (!showIntro) return null;

  return (
    <AnimatePresence>
      {!opened && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden bg-[#12070D]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          onAnimationComplete={() => {
            if (opened) setShowIntro(false);
          }}
        >
          <div className="absolute left-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-[#BD054C]/20 blur-[120px]" />
          <div className="absolute right-[-10%] bottom-[10%] h-[420px] w-[420px] rounded-full bg-[#5EA7A0]/10 blur-[120px]" />
          <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8A96B]/10 blur-[120px]" />

          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 1.5,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative flex flex-col items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.28, 0.4, 0.28],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-[280px] w-[280px] rounded-full bg-[#BD054C]/20 blur-3xl"
              />

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-10 text-center"
              >
                <p className="mb-4 text-[15px] uppercase tracking-[0.48em] text-[#E8A96B] drop-shadow-[0_0_18px_rgba(232,169,107,0.28)]">
                  Doğa Bice
                </p>

                <p className="text-[11px] uppercase tracking-[0.35em] text-[#D67A97]">
                  Product · Engineering · AI
                </p>
              </motion.div>

              <motion.button
                onClick={handleEnter}
                whileHover={{ scale: 1.08, rotate: [-1, 1, -1] }}
                whileTap={{ scale: 0.94, y: 10 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-full bg-[#E8A96B]/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <Image
                    src="/door-knocker.png"
                    alt="Open portfolio"
                    width={200}
                    height={250}
                    priority
                    className="object-contain drop-shadow-[0_22px_46px_rgba(0,0,0,0.7)]"
                  />
                </motion.div>
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.55 }}
                transition={{ delay: 1.2 }}
                className="mt-9 text-[11px] uppercase tracking-[0.38em] text-[#E8A96B]/55"
              >
                enter
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}