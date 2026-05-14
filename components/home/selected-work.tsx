import Link from "next/link";
import Reveal from "@/components/ui/reveal";
import PhoneFrame from "@/components/ui/phone-frame";
import { ArrowRight, BrainCircuit } from "lucide-react";

const projects = [
  {
    title: "Yuvio",
    href: "/projects/yuvio",
    type: "Mobile adoption platform",
    description:
      "A warm adoption experience focused on trust, discovery, messaging and owner-side flows.",
    image: "/yuvio/home.PNG",
  },
  {
    title: "E-Paw",
    href: "/projects/e-paw",
    type: "AI pet health system",
    description:
      "AI-supported pet health tracking with vaccine recognition and matching logic.",
    image: "/epaw/epaw-home.PNG",
  },
  {
    title: "Istanbul Vibe Finder",
    href: "/projects/istanbul-vibe-finder",
    type: "AI discovery engine",
    description:
      "Semantic venue discovery using embeddings, validation and recommendations.",
    image: null,
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10">
      <Reveal>
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#C75C7C]">
              Selected Work
            </p>
            <h2 className="mt-4 max-w-2xl text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#F6EFE8] md:text-[3rem]">
              A few things I’ve built.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#B8AAB7]">
            Main projects live on their own case-study pages, so this section
            stays compact.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.06}>
            <Link
              href={project.href}
              className="group block rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#C75C7C]/35"
            >
              <div className="mb-5 flex h-[190px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#1A131D]">
                <div className="absolute h-32 w-32 rounded-full bg-[#E8A96B]/10 blur-2xl" />

                {project.image ? (
                  <div className="w-[34%] min-w-[110px]">
                    <PhoneFrame src={project.image} alt={project.title} />
                  </div>
                ) : (
                  <div className="relative rounded-[1.4rem] border border-white/10 bg-black/20 p-6">
                    <BrainCircuit className="h-8 w-8 text-[#E8A96B]" />
                    <p className="mt-5 max-w-[180px] text-lg font-medium leading-tight text-[#F6EFE8]">
                      AI-powered venue discovery
                    </p>
                  </div>
                )}
              </div>

              <p className="text-[11px] uppercase tracking-[0.26em] text-[#A78BA5]">
                {project.type}
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#F6EFE8]">
                {project.title}
              </h3>

              <p className="mt-3 min-h-[72px] text-sm leading-7 text-[#B8AAB7]">
                {project.description}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#E8A96B] transition group-hover:gap-3">
                View case study
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}