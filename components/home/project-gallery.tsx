import Link from "next/link";
import Reveal from "@/components/ui/reveal";
import PhoneFrame from "@/components/ui/phone-frame";
import { ArrowRight, BrainCircuit } from "lucide-react";

const projects = [
  {
    title: "Yuvio",
    href: "/projects/yuvio",
    type: "Mobile product",
    description: "Pet adoption platform with discovery, messaging and listing management.",
    image: "/yuvio/home.PNG",
    shape: "mobile",
  },
  {
    title: "E-Paw",
    href: "/projects/e-paw",
    type: "Mobile + AI",
    description: "Pet health tracking with vaccine recognition and matching logic.",
    image: "/epaw/epaw-home.PNG",
    shape: "mobile",
  },
  {
    title: "Istanbul Vibe Finder",
    href: "/projects/istanbul-vibe-finder",
    type: "AI web system",
    description: "Venue discovery system using semantic search, embeddings and recommendations.",
    image: null,
    shape: "web",
  },
];

export default function ProjectGallery() {
  return (
    <section
      id="work"
      className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10"
    >
      <Reveal>
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#C75C7C]">
              Work
            </p>
            <h2 className="mt-4 max-w-2xl text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#F6EFE8] md:text-[3rem]">
              Selected products and experiments.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#B8AAB7]">
            Mobile projects keep their tall frame, while web and AI systems get
            a wider showcase.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.slice(0, 2).map((project, index) => (
          <Reveal key={project.title} delay={index * 0.06}>
            <ProjectCard {...project} />
          </Reveal>
        ))}

        <Reveal delay={0.12} className="lg:col-span-2">
          <ProjectCard {...projects[2]} wide />
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  href,
  type,
  description,
  image,
  wide = false,
}: {
  title: string;
  href: string;
  type: string;
  description: string;
  image: string | null;
  shape: string;
  wide?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group block overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#E8A96B]/35 ${
        wide ? "lg:p-6" : ""
      }`}
    >
      <div
        className={`grid gap-6 ${
          wide ? "md:grid-cols-[1fr_1.1fr] md:items-center" : ""
        }`}
      >
        <div
          className={`relative flex items-center justify-center overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#1A131D] ${
            wide ? "min-h-[260px]" : "h-[260px]"
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(199,92,124,0.16),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(232,169,107,0.12),transparent_35%)]" />

          {image ? (
            <div className={wide ? "w-[32%] min-w-[130px]" : "w-[32%] min-w-[120px]"}>
              <PhoneFrame src={image} alt={title} />
            </div>
          ) : (
            <div className="relative w-[76%] max-w-xl rounded-[1.5rem] border border-white/10 bg-[#120D13]/80 p-8">
              <div className="mb-12 flex items-center justify-between">
                <BrainCircuit className="h-8 w-8 text-[#E8A96B]" />
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#B8AAB7]">
                  AI SYSTEM
                </span>
              </div>

              <p className="max-w-md text-2xl font-semibold leading-tight text-[#F6EFE8]">
                AI-powered venue discovery for Istanbul.
              </p>
            </div>
          )}
        </div>

        <div className={wide ? "md:px-4" : "pt-1"}>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#A78BA5]">
            {type}
          </p>

          <h3 className="mt-3 text-[1.85rem] font-semibold tracking-[-0.04em] text-[#F6EFE8]">
            {title}
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-7 text-[#B8AAB7]">
            {description}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#E8A96B] transition group-hover:gap-3">
            View case study
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}