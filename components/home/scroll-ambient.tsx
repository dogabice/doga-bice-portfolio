"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function ScrollAmbient() {
  const { scrollYProgress } = useScroll();
  const reducedMotion = useReducedMotion();
  const roseX = useTransform(scrollYProgress, [0, 0.5, 1], ["-10%", "18%", "-4%"]);
  const roseY = useTransform(scrollYProgress, [0, 0.5, 1], ["-8%", "14%", "-3%"]);
  const amberX = useTransform(scrollYProgress, [0, 0.5, 1], ["10%", "-16%", "5%"]);
  const amberY = useTransform(scrollYProgress, [0, 0.5, 1], ["8%", "-12%", "6%"]);
  const tealOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.2, 0.45, 0.8, 0.4, 0.2]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div className="absolute -left-[24vw] -top-[30vh] h-[100vh] w-[95vw] rounded-full bg-[radial-gradient(ellipse,rgba(199,92,124,.20),transparent_68%)] blur-[28px]" style={reducedMotion ? undefined : { x: roseX, y: roseY }} />
      <motion.div className="absolute -right-[27vw] top-[12vh] h-[100vh] w-[95vw] rounded-full bg-[radial-gradient(ellipse,rgba(232,169,107,.13),transparent_68%)] blur-[34px]" style={reducedMotion ? undefined : { x: amberX, y: amberY }} />
      <motion.div className="absolute bottom-[-48vh] left-[10vw] h-[90vh] w-[80vw] rounded-full bg-[radial-gradient(ellipse,rgba(94,167,160,.11),transparent_68%)] blur-[40px]" style={reducedMotion ? { opacity: 0.3 } : { opacity: tealOpacity }} />
    </div>
  );
}
