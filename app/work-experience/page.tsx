import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Navbar from "@/components/home/navbar";
import Reveal from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Work Experience",
  description: "Professional experience across product, AI and software development.",
};

const experiences = [
  {
    company: "UnifyMatch",
    role: "Product Manager, AI Solutions",
    period: "2026 – Present",
    summary: "I partner with companies to understand their business challenges and turn them into practical technology and AI initiatives. The role has strengthened how I connect business needs with technical direction, align stakeholders and make complex technologies feel clear and useful.",
    skills: ["Product thinking", "Business analysis", "AI solution design", "Client communication", "Stakeholder management", "Project coordination", "Business development"],
    current: true,
  },
  {
    company: "İşinOlacak",
    role: "AI Developer",
    period: "Aug 2025 – Nov 2025",
    summary: "I worked on AI-driven systems and real-time application workflows, learning to shape scalable architectures and bring multiple AI components into production-oriented experiences.",
    skills: ["AI system design", "Backend architecture", "Scalability thinking", "Microservices", "Problem solving", "Production AI"],
  },
  {
    company: "RagHubs",
    role: "AI Assistant Developer",
    period: "Apr 2025 – Jun 2025",
    summary: "I contributed to a document-based AI assistant, focusing on how people upload, manage and meaningfully interact with their documents through AI.",
    skills: ["RAG systems", "API development", "Document workflows", "AI product thinking", "Reliable AI interactions"],
  },
  {
    company: "Mert Software & Electronics",
    role: "Backend Developer",
    period: "Sep 2024",
    summary: "I developed backend services for a stock and transaction management system, building hands-on experience with structured and secure business applications.",
    skills: ["Backend development", "API design", "Database management", "Security", "Caching", "Architecture fundamentals"],
  },
  {
    company: "Depixen Software & AI",
    role: "Software Developer Intern",
    period: "Jul 2023 – Aug 2023",
    summary: "I translated UI/UX designs into functional web interfaces—my first professional experience turning design concepts into working digital products inside a software team.",
    skills: ["Frontend development", "UI implementation", "Attention to detail", "Responsive design", "Team collaboration"],
  },
];

export default function WorkExperiencePage() {
  return (
    <main className="min-h-screen overflow-hidden text-[#E9DFD9]">
      <Navbar />

      <section className="relative mx-auto max-w-[1500px] px-5 pb-20 pt-3 md:px-8 lg:px-10 lg:pb-28 lg:pt-4">
        <Reveal>
          <div className="border-y border-[#E8A96B]/55 py-5 text-[11px] font-medium uppercase tracking-[.3em] text-[#D6C1AF] md:flex md:items-center md:justify-between">
            <span>05 · Professional journey</span>
            <span className="mt-2 block text-[#E8A96B] md:mt-0">Product · AI · Engineering</span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="grid gap-10 pb-16 pt-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,.55fr)] lg:items-end lg:pb-20 lg:pt-12">
            <div>
              <p className="text-xs uppercase tracking-[.34em] text-[#C75C7C]">Work experience</p>
              <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[.92] tracking-[-.07em] text-[#E9DFD9] md:text-7xl lg:text-8xl">
                Building the bridge between <span className="font-serif font-normal italic text-[#E8A96B]">possibility</span> and practice.
              </h1>
            </div>
            <p className="max-w-md text-[17px] leading-8 text-[#C9BEC4] lg:mb-2">
              A growing practice across product, AI and engineering—shaped by the problems I have helped teams make clearer, more useful and ready to move forward.
            </p>
          </div>
        </Reveal>

        <div className="relative border-t border-[#E8A96B]/65">
          {experiences.map((experience, index) => (
            <Reveal key={experience.company} delay={Math.min(index * 0.04, 0.18)}>
              <article className={`group relative grid gap-7 border-b border-white/15 py-10 transition-colors duration-500 md:grid-cols-[5.5rem_minmax(0,1fr)] lg:grid-cols-[7rem_minmax(0,1.05fr)_minmax(15rem,.52fr)] lg:gap-10 lg:py-14 ${experience.current ? "lg:py-16" : ""}`}>
                <div className="flex items-center gap-3 text-xs font-medium tracking-[.24em] text-[#E8A96B] md:block">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="md:mt-4 md:block md:leading-5">{experience.period}</span>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-xs uppercase tracking-[.26em] text-white/45">{experience.role}</p>
                    {experience.current && <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E8A96B]/40 bg-[#E8A96B]/10 px-2.5 py-1 text-[10px] uppercase tracking-[.18em] text-[#F2C681]"><Sparkles className="h-3 w-3" /> Current focus</span>}
                  </div>
                  <h2 className={`mt-3 font-semibold leading-none tracking-[-.045em] text-[#E9DFD9] ${experience.current ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"}`}>{experience.company}</h2>
                  <p className={`mt-6 max-w-3xl leading-7 text-[#C9BEC4] ${experience.current ? "text-lg" : "text-[16px]"}`}>{experience.summary}</p>
                </div>
                <aside className="self-end border-t border-[#E8A96B]/45 pt-4 lg:mb-1" aria-label={`Key areas at ${experience.company}`}>
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[.25em] text-[#E8A96B]">Key areas</p>
                  <div className="space-y-2.5 text-sm leading-5 text-[#D6CCD0]">
                    {experience.skills.slice(0, 3).map((skill) => (
                      <p key={skill} className="border-b border-white/10 pb-2.5">{skill}</p>
                    ))}
                  </div>
                </aside>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="flex flex-col gap-7 border-b border-[#E8A96B]/55 py-10 sm:flex-row sm:items-center sm:justify-between lg:py-14">
            <p className="max-w-xl text-lg leading-8 text-[#C9BEC4]">The thread throughout: use technology to make a real problem easier to understand, solve and move through.</p>
            <Link href="/#contact" className="group inline-flex w-fit items-center gap-3 rounded-full border border-[#E8A96B]/50 px-5 py-3 text-sm font-medium text-[#F2E4D8] transition hover:-translate-y-0.5 hover:border-[#E8A96B] hover:bg-[#E8A96B]/10">
              Start a conversation <ArrowUpRight className="h-4 w-4 text-[#E8A96B] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
