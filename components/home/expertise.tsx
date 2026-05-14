import Reveal from "@/components/ui/reveal";
import { BrainCircuit, Code2, Layers3, Smartphone } from "lucide-react";

const items = [
  {
    icon: Layers3,
    title: "Product Engineering",
    text: "Turning ideas into flows, features and usable product systems.",
  },
  {
    icon: Smartphone,
    title: "Mobile Experiences",
    text: "Building warm, polished mobile interfaces with real product logic.",
  },
  {
    icon: Code2,
    title: "Full-stack Systems",
    text: "Connecting UI, auth, APIs, databases and realtime interactions.",
  },
  {
    icon: BrainCircuit,
    title: "AI-powered Products",
    text: "Exploring matching, discovery, recognition and intelligent workflows.",
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10"
    >
      <Reveal>
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#C75C7C]">
              Expertise
            </p>
            <h2 className="mt-4 max-w-2xl text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#F6EFE8] md:text-[3rem]">
              Where product sense meets technical depth.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#B8AAB7]">
            I like building beyond screens: the logic, decisions and systems
            that make a product feel reliable.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          const accent = index % 2 === 0 ? "#C75C7C" : "#E8A96B";

          return (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#E8A96B]/30">
                <div
                  className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${accent}18`, color: accent }}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-semibold text-[#F6EFE8]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#B8AAB7]">
                  {item.text}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}