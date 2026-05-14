"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type ScreenCarouselProps = {
  images: string[];
  alt: string;
  priority?: boolean;
};

export default function ScreenCarousel({
  images,
  alt,
  priority = false,
}: ScreenCarouselProps) {
  const [active, setActive] = useState(0);

  const prev = (active - 1 + images.length) % images.length;
  const next = (active + 1) % images.length;

  const goPrev = () => {
    setActive((current) => (current - 1 + images.length) % images.length);
  };

  const goNext = () => {
    setActive((current) => (current + 1) % images.length);
  };

  const visibleScreens =
    images.length === 1
      ? [{ src: images[active], position: "center" as const }]
      : [
          { src: images[prev], position: "left" as const },
          { src: images[active], position: "center" as const },
          { src: images[next], position: "right" as const },
        ];

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="relative flex min-h-[470px] w-full items-center justify-center overflow-hidden rounded-[1.7rem]">
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#F6EFE8]/90 text-[#171018] shadow-lg transition hover:scale-105"
              aria-label="Previous screen"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={goNext}
              className="absolute right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#F6EFE8]/90 text-[#171018] shadow-lg transition hover:scale-105"
              aria-label="Next screen"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {visibleScreens.map((screen) => (
          <motion.div
            key={`${screen.src}-${screen.position}`}
            layout
            initial={{ opacity: 0, scale: 0.86, y: 18 }}
            animate={{
              opacity: screen.position === "center" ? 1 : 0.34,
              scale: screen.position === "center" ? 1 : 0.82,
              x:
                screen.position === "left"
                  ? "-82%"
: screen.position === "right"
? "82%"
                  : "0%",
              y: screen.position === "center" ? 0 : 22,
              filter:
                screen.position === "center" ? "blur(0px)" : "blur(1.6px)",
              zIndex: screen.position === "center" ? 30 : 10,
            }}
            transition={{
  duration: 2.2,
  ease: [0.16, 1, 0.3, 1],
}}
            className="absolute w-[44%] max-w-[215px] rounded-[2rem] bg-[#0D0B10] p-2.5 shadow-[0_32px_90px_-42px_rgba(0,0,0,0.9)] ring-1 ring-white/10"
          >
            <div className="overflow-hidden rounded-[1.45rem] bg-[#F6EFE8]">
              <Image
                src={screen.src}
                alt={alt}
                width={420}
                height={900}
                priority={priority && screen.position === "center"}
                className="h-auto w-full"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex items-center gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all ${
                active === index
                  ? "w-10 bg-[#E8A96B]"
                  : "w-3 bg-[#F6EFE8]/25 hover:bg-[#F6EFE8]/45"
              }`}
              aria-label={`Show screen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}