import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";
import { ArrowRight, BrainCircuit } from "lucide-react";

const projects = [
  {
    title: "Yuvio",
    href: "/projects/yuvio",
    type: "Mobile Product",
    description:
      "Pet adoption platform with discovery, messaging and listing management.",
    images: [
      "/yuvio/onboarding-1.PNG",
      "/yuvio/home.PNG",
      "/yuvio/dashboard.PNG",
    ],
    tags: ["React Native", "Supabase", "Realtime"],
  },
  {
    title: "E-Paw",
    href: "/projects/e-paw",
    type: "Mobile + AI",
    description:
      "Pet health tracking with vaccine recognition and matching logic.",
    images: [
      "/epaw/epaw-login.PNG",
      "/epaw/epaw-home.PNG",
      "/epaw/epaw-pet-details.PNG",
    ],
    tags: ["React Native", "Firebase", "YOLOv8"],
  },
  {
    title: "Istanbul Vibe Finder",
    href: "/projects/istanbul-vibe-finder",
    type: "AI Web System",
    description:
      "Venue discovery system using semantic search, embeddings and recommendations.",
    images: [],
    tags: ["Python", "FastAPI", "FAISS"],
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
            A small collection of mobile, AI and product systems I’ve built.
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
  images,
  tags,
  wide = false,
}: {
  title: string;
  href: string;
  type: string;
  description: string;
  images: string[];
  tags: string[];
  wide?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group block overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#E8A96B]/35 ${
        wide ? "lg:p-6" : ""
      }`}
    >
      <div
        className={`grid gap-6 ${
          wide ? "md:grid-cols-[1fr_1.05fr] md:items-center" : ""
        }`}
      >
        <div
          className={`relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#1A131D] ${
            wide ? "min-h-[300px]" : "h-[330px]"
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(199,92,124,0.18),transparent_32%),radial-gradient(circle_at_80%_82%,rgba(232,169,107,0.13),transparent_34%)]" />

          {images.length > 0 ? (
            <PhoneCluster images={images} title={title} />
          ) : (
            <AICard />
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

          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-[#CFC3CB]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#E8A96B] transition group-hover:gap-3">
            View case study
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

function PhoneCluster({ images, title }: { images: string[]; title: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative h-[285px] w-[82%] max-w-[430px]">
        <MiniPhone
          src={images[0]}
          alt={`${title} preview 1`}
          className="absolute left-[2%] top-[34px] z-10 w-[31%] rotate-[-8deg] opacity-70"
        />

        <MiniPhone
          src={images[1]}
          alt={`${title} preview 2`}
          className="absolute left-1/2 top-0 z-30 w-[38%] -translate-x-1/2"
          priority
        />

        <MiniPhone
          src={images[2]}
          alt={`${title} preview 3`}
          className="absolute right-[2%] top-[46px] z-20 w-[31%] rotate-[8deg] opacity-70"
        />
      </div>
    </div>
  );
}

function MiniPhone({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`${className} rounded-[1.45rem] bg-[#0D0B10] p-1.5 shadow-[0_26px_70px_-38px_rgba(0,0,0,0.9)] ring-1 ring-white/10`}
    >
      <div className="overflow-hidden rounded-[1.05rem] bg-[#F6EFE8]">
        <Image
          src={src}
          alt={alt}
          width={360}
          height={760}
          priority={priority}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

function AICard() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-[1.8rem] border border-white/10 bg-[#120D13]/85 p-8 shadow-[0_30px_90px_-45px_rgba(0,0,0,0.9)]">
        <div className="mb-12 flex items-center justify-between">
          <BrainCircuit className="h-9 w-9 text-[#E8A96B]" />
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#B8AAB7]">
            AI System
          </span>
        </div>

        <p className="max-w-md text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#F6EFE8]">
          AI-powered venue discovery for Istanbul.
        </p>
      </div>
    </div>
  );
}