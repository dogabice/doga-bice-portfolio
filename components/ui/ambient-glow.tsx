"use client";

import { motion } from "framer-motion";

export default function AmbientGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#120D13]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(199,92,124,0.20),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(232,169,107,0.16),transparent_32%),radial-gradient(circle_at_55%_35%,rgba(94,167,160,0.10),transparent_34%)]" />

      <motion.div
        animate={{ x: [0, 24, -12, 0], y: [0, -18, 12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-48 -top-48 h-[34rem] w-[34rem] rounded-full bg-[#C75C7C]/20 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -18, 18, 0], y: [0, 18, -12, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-52 left-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[#E8A96B]/18 blur-3xl"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(18,13,19,0.52)_78%)]" />
      <div className="absolute inset-0 opacity-[0.035] mix-blend-soft-light [background-image:url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20256%20256%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22noise%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.9%22%20numOctaves=%224%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
    </div>
  );
}