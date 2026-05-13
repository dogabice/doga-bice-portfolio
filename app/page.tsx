import Link from "next/link";
import { ArrowRight, Heart, Code2, Sparkles, Layers3, Moon, SunMedium } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "E-Paw",
    subtitle: "AI-supported adoption matching platform",
    description:
      "A trust-centered mobile experience designed to improve pet adoption, onboarding, and health follow-up.",
    link: "View case study",
    href: "/projects/e-paw",
    gradient: "from-[#102032] via-[#173447] to-[#EDB700]/90",
    preview: "epaw",
  },
  {
    id: "02",
    title: "Istanbul Vibe Finder",
    subtitle: "AI agent for place discovery",
    description:
      "An intelligent discovery product that helps people find places faster with real-time, neighborhood-aware recommendations.",
    link: "View case study",
    href: "/projects/istanbul-vibe-finder",
    gradient: "from-[#EDE4D4] via-[#F7F3EA] to-[#8FD5D5]/40",
    preview: "vibe",
  },
  {
    id: "03",
    title: "Rhythm",
    subtitle: "Personal wellness and habit planning",
    description:
      "A softer, more sustainable fitness experience focused on consistency, reduced friction, and better routines.",
    link: "View case study",
    href: "/projects/rhythm",
    gradient: "from-[#102032] via-[#163040] to-[#46B2B5]/70",
    preview: "rhythm",
  },
];
const strengths = [
  {
    icon: Heart,
    title: "Product Mindset",
    text: "I care about the why as much as the how.",
  },
  {
    icon: Code2,
    title: "Full-Stack Skills",
    text: "From interface to backend logic, I build end-to-end.",
  },
  {
    icon: Sparkles,
    title: "AI-Native Builder",
    text: "I integrate AI where it creates real value.",
  },
  {
    icon: Layers3,
    title: "Human-Centered",
    text: "I design with empathy, clarity, and impact.",
  },
];

const tools = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "Node.js",
  "Tailwind",
  "Firebase",
  "PostgreSQL",
];

function ProjectPreview({ type }: { type: string }) {
  if (type === "epaw") {
    return (
      <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[1.2rem] border border-white/20 bg-[linear-gradient(180deg,rgba(8,27,43,0.88),rgba(18,46,61,0.70))] p-4 backdrop-blur-[2px]">
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#EDB700]/25 blur-2xl" />
        <div className="absolute -left-6 bottom-0 h-24 w-24 rounded-full bg-[#46B2B5]/20 blur-2xl" />

        <div className="relative flex w-full items-end justify-center gap-4">
          <div className="relative h-[170px] w-[88px] rounded-[1.7rem] border border-white/12 bg-[#0e2433] p-2 shadow-2xl shadow-black/25">
            <div className="mb-2 mx-auto h-4 w-10 rounded-full bg-white/10" />
            <div className="rounded-[1.2rem] bg-[#f4efe8] p-2">
              <div className="mb-2 h-14 rounded-[0.9rem] bg-[linear-gradient(135deg,#EDB700,#F3906B)]" />
              <div className="space-y-1.5">
                <div className="h-2 rounded-full bg-[#102032]/15" />
                <div className="h-2 w-4/5 rounded-full bg-[#102032]/10" />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="h-10 rounded-xl bg-[#8FD5D5]/60" />
                <div className="h-10 rounded-xl bg-[#102032]/8" />
              </div>
            </div>
          </div>

          <div className="relative z-10 h-[210px] w-[108px] rounded-[2rem] border border-white/15 bg-[#0d2130] p-2 shadow-2xl shadow-black/30">
            <div className="mb-2 mx-auto h-4 w-12 rounded-full bg-white/10" />
            <div className="h-full rounded-[1.35rem] bg-[#f7f1e8] p-3">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-[linear-gradient(135deg,#EDB700,#F3906B)]" />
                <div>
                  <div className="h-2.5 w-16 rounded-full bg-[#102032]/15" />
                  <div className="mt-1 h-2 w-10 rounded-full bg-[#102032]/8" />
                </div>
              </div>
              <div className="rounded-[1rem] bg-[#102032] p-3 text-white">
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">Best Match</div>
                <div className="mt-2 h-20 rounded-[0.9rem] bg-[linear-gradient(135deg,#46B2B5,#8FD5D5)]" />
                <div className="mt-2 h-2.5 w-3/4 rounded-full bg-white/15" />
              </div>
              <div className="mt-3 flex gap-2">
                <div className="h-9 flex-1 rounded-xl bg-[#102032]/8" />
                <div className="h-9 flex-1 rounded-xl bg-[#EDB700]/45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "vibe") {
    return (
      <div className="relative flex h-full overflow-hidden rounded-[1.2rem] border border-white/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,255,255,0.10))] p-4 backdrop-blur-[2px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(143,213,213,0.45),transparent_30%)]" />
        <div className="relative grid w-full grid-cols-[0.95fr_1.05fr] gap-3">
          <div className="rounded-[1.4rem] border border-[#102032]/8 bg-[#fffaf1]/95 p-2 shadow-sm">
            <div className="mb-2 mx-auto h-4 w-10 rounded-full bg-[#102032]/8" />
            <div className="h-full rounded-[1rem] bg-white p-2">
              <div className="h-7 rounded-xl bg-[#102032]" />
              <div className="mt-3 space-y-2">
                <div className="rounded-xl bg-[#f5efe5] p-2">
                  <div className="h-12 rounded-lg bg-[linear-gradient(135deg,#46B2B5,#8FD5D5)]" />
                  <div className="mt-2 h-2.5 w-4/5 rounded-full bg-[#102032]/12" />
                </div>
                <div className="rounded-xl bg-[#f5efe5] p-2">
                  <div className="h-2.5 w-3/4 rounded-full bg-[#102032]/12" />
                  <div className="mt-2 h-2 w-1/2 rounded-full bg-[#102032]/8" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.4rem] border border-white/45 bg-[linear-gradient(135deg,#ece7da,#d9e5e4)] p-3">
            <div className="relative h-full overflow-hidden rounded-[1rem] bg-[#efe8da]">
              <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(16,32,50,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,32,50,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />
              <span className="absolute left-[18%] top-[24%] h-4 w-4 rounded-full border-2 border-white bg-[#46B2B5] shadow" />
              <span className="absolute left-[60%] top-[35%] h-4 w-4 rounded-full border-2 border-white bg-[#F3906B] shadow" />
              <span className="absolute left-[42%] top-[62%] h-4 w-4 rounded-full border-2 border-white bg-[#EDB700] shadow" />
              <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/90 p-3 shadow-lg">
                <div className="h-2.5 w-24 rounded-full bg-[#102032]/12" />
                <div className="mt-2 h-2 w-16 rounded-full bg-[#102032]/8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[1.2rem] border border-white/20 bg-[linear-gradient(180deg,rgba(8,27,43,0.90),rgba(17,53,62,0.72))] p-4 backdrop-blur-[2px]">
      <div className="absolute -right-6 top-2 h-24 w-24 rounded-full bg-[#46B2B5]/25 blur-2xl" />
      <div className="absolute bottom-0 left-4 h-24 w-24 rounded-full bg-[#8FD5D5]/15 blur-2xl" />

      <div className="relative w-full max-w-[270px] rounded-[1.8rem] border border-white/12 bg-[#0d2230] p-3 shadow-2xl shadow-black/30">
        <div className="mb-2 mx-auto h-4 w-12 rounded-full bg-white/10" />
        <div className="rounded-[1.3rem] bg-[#f4efe8] p-3">
          <div className="flex items-center justify-between rounded-[1rem] bg-[#102032] p-3 text-white">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/55">Today</div>
              <div className="mt-1 text-sm font-medium">Full Body</div>
            </div>
            <div className="h-10 w-10 rounded-2xl bg-[linear-gradient(135deg,#46B2B5,#8FD5D5)]" />
          </div>
          <div className="mt-3 rounded-[1rem] bg-white p-3">
            <div className="mb-2 flex items-center justify-between">
              <div className="h-2.5 w-20 rounded-full bg-[#102032]/14" />
              <div className="h-2.5 w-8 rounded-full bg-[#46B2B5]/50" />
            </div>
            <div className="h-3 rounded-full bg-[#102032]/8" />
            <div className="mt-2 h-3 w-4/5 rounded-full bg-[#102032]/6" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="h-16 rounded-xl bg-[#102032]/7" />
              <div className="h-16 rounded-xl bg-[#EDB700]/35" />
              <div className="h-16 rounded-xl bg-[#46B2B5]/28" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioHomepage() {
  return (
    <main className="min-h-screen bg-[#F6F1E8] text-[#102032] selection:bg-[#46B2B5]/20 selection:text-[#102032] dark:bg-[#0F1D27] dark:text-[#F7F1E8] transition-colors duration-300 overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(70,178,181,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(243,144,107,0.08),transparent_25%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(143,213,213,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(237,183,0,0.06),transparent_22%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#102032_1px,transparent_1px),linear-gradient(to_bottom,#102032_1px,transparent_1px)] [background-size:40px_40px] dark:opacity-[0.04]" />
      </div>

      <section className="relative mx-auto max-w-7xl px-5 pb-10 pt-8 md:px-8 lg:px-10">
        <nav className="sticky top-4 z-30 mx-auto flex max-w-6xl items-center justify-between rounded-[2rem] border border-[#102032]/10 bg-white/70 px-4 py-3 shadow-[0_16px_50px_-25px_rgba(16,32,50,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-white/6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#46B2B5]/25 bg-[#46B2B5]/12 text-[#46B2B5] shadow-sm">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[15px] font-semibold tracking-[0.28em] uppercase">Doga.Bice</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm text-[#30485B] md:flex dark:text-[#D8E2E9]">
            <a href="#about" className="transition hover:text-[#46B2B5]">About</a>
            <a href="#projects" className="transition hover:text-[#46B2B5]">Projects</a>
            <a href="#stack" className="transition hover:text-[#46B2B5]">Stack</a>
            <a href="#contact" className="transition hover:text-[#46B2B5]">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#102032]/10 bg-white/70 text-[#102032] md:flex dark:border-white/10 dark:bg-white/8 dark:text-white">
              <SunMedium className="h-4 w-4" />
            </button>
            <a
              href="#contact"
              className="rounded-full border border-[#102032]/15 bg-[#F7F1E8] px-5 py-2.5 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/8"
            >
              Resume
            </a>
          </div>
        </nav>

        <div className="grid gap-12 pt-14 lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:pt-16">
          <div>
            <p className="mb-5 text-sm font-medium tracking-[0.28em] uppercase text-[#2F8E93]">
              Hey, I’m Doğa
            </p>

            <h1 className="max-w-3xl font-serif text-[3.4rem] leading-[0.96] tracking-[-0.05em] md:text-[5.2rem] text-balance">
              I build intelligent <span className="italic text-[#2F8E93]">digital products</span> that make sense.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-9 text-[#425A6E] dark:text-[#C9D6DE]">
              I combine product thinking with engineering and AI to create experiences people love and systems that actually matter.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#102032] px-6 py-4 text-sm font-medium text-white shadow-[0_18px_36px_-18px_rgba(16,32,50,0.55)] transition hover:-translate-y-1"
              >
                Explore My Work <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#102032]/18 bg-transparent px-6 py-4 text-sm font-medium transition hover:-translate-y-1 dark:border-white/12"
              >
                Let&apos;s Connect <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#46B2B5]" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[650px]">
            <div className="absolute inset-0 rounded-[2.8rem] bg-[linear-gradient(135deg,rgba(70,178,181,0.35),rgba(237,183,0,0.22),rgba(243,144,107,0.18))] blur-2xl opacity-60" />
            <div className="relative rounded-[2.7rem] border border-white/50 bg-[linear-gradient(135deg,rgba(70,178,181,0.32),rgba(255,255,255,0.18),rgba(237,183,0,0.30))] p-[14px] shadow-[0_26px_80px_-28px_rgba(16,32,50,0.38)] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(70,178,181,0.20),rgba(255,255,255,0.05),rgba(237,183,0,0.16))]">
              <div className="rounded-[2.25rem] bg-[linear-gradient(180deg,rgba(16,32,50,0.98),rgba(14,36,49,0.94))] p-8 text-white">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm tracking-[0.26em] uppercase text-white/55">Portfolio Snapshot</p>
                    <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight tracking-[-0.04em]">
                      Product-first, technically real
                    </h2>
                  </div>
                  <span className="rounded-full bg-[#46B2B5] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#46B2B5]/25">
                    evolving
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ["Focus", "Intelligent user experiences", true],
                    ["Edge", "Frontend + backend + product sense", false],
                    ["Best Fit", "AI-native digital products", true],
                    ["Goal", "Build work that feels thoughtful", false],
                  ].map(([label, value, dark]) => (
                    <div
                      key={String(label)}
                      className={`rounded-[1.9rem] p-6 ${dark ? "bg-[#0D2740]" : "bg-white/14"}`}
                    >
                      <p className="text-sm tracking-[0.22em] uppercase text-white/60">{label}</p>
                      <p className="mt-5 text-[1.05rem] leading-9 text-white/96">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[1.9rem] border border-dashed border-white/16 bg-white/8 p-6 text-[1.02rem] leading-9 text-white/78">
                  This area can later become an animated product collage, live preview, or rotating showcase once we add visuals and motion.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-6 md:px-8 lg:px-10">
        <div className="grid gap-4 rounded-[2rem] border border-[#102032]/10 bg-white/55 p-5 shadow-[0_12px_40px_-24px_rgba(16,32,50,0.16)] backdrop-blur md:grid-cols-4 dark:border-white/10 dark:bg-white/5">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-4 rounded-[1.4rem] p-4 transition hover:bg-white/55 dark:hover:bg-white/6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] border border-[#102032]/10 bg-[#F7F1E8] text-[#2F8E93] dark:border-white/10 dark:bg-white/6">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-[#4D6373] dark:text-[#C4D2DB]">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="text-sm font-medium tracking-[0.28em] uppercase text-[#2F8E93]">Featured Work</p>
            <h2 className="mt-4 max-w-2xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-balance md:text-6xl">
              Things I’m building
            </h2>
          </div>

          <a href="#" className="inline-flex items-center gap-2 text-[15px] text-[#2F8E93] transition hover:gap-3">
            View all projects <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
        >
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group block h-full"
            >
              <article className="flex h-full flex-col rounded-[2rem] border border-[#102032]/10 bg-white/72 p-4 shadow-[0_16px_50px_-28px_rgba(16,32,50,0.22)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(16,32,50,0.30)] dark:border-white/10 dark:bg-white/5">
                <div
                  className={`h-[240px] rounded-[1.5rem] bg-gradient-to-br ${project.gradient} p-3 md:h-[260px]`}
                >
                  <ProjectPreview type={project.preview} />
                </div>

                <div className="flex flex-1 flex-col px-1 pb-2 pt-5">
                  <p className="text-sm text-[#718696] dark:text-[#AFC0CB]">
                    {project.id}
                  </p>

                  <h3 className="mt-2 font-serif text-[2rem] leading-tight tracking-[-0.04em] md:text-[2.2rem]">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-[32ch] text-[15px] leading-8 text-[#4D6373] dark:text-[#C7D4DC]">
                    {project.description}
                  </p>

                  <div className="mt-auto inline-flex items-center gap-2 pt-6 text-[15px] text-[#2F8E93] transition group-hover:gap-3">
                    {project.link}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="overflow-hidden rounded-[2.2rem] bg-[linear-gradient(135deg,#0F2537,#193A4E,#D9A84D)] p-[1px] shadow-[0_20px_70px_-28px_rgba(16,32,50,0.34)]">
            <div className="flex h-full min-h-[370px] flex-col justify-between rounded-[2.15rem] bg-[linear-gradient(135deg,#102032,#17384b,#193747)] p-8 text-white">
              <div>
                <p className="text-sm tracking-[0.26em] uppercase text-[#8FD5D5]">About Me</p>
                <h2 className="mt-6 max-w-md font-serif text-6xl leading-[0.95] tracking-[-0.05em] text-balance">
                  Curious mind. Problem solver. Product builder.
                </h2>
              </div>

              <div className="max-w-md text-[17px] leading-9 text-white/84">
                I love turning ideas into real, usable things. Currently focused on AI-powered products that create meaningful impact.
              </div>

              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/16 px-5 py-3 text-sm font-medium transition hover:-translate-y-1"
                >
                  More about me <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div id="stack" className="rounded-[2.2rem] border border-[#102032]/10 bg-white/72 p-8 shadow-[0_16px_50px_-28px_rgba(16,32,50,0.18)] backdrop-blur dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-medium tracking-[0.28em] uppercase text-[#2F8E93]">Tech Stack & Tools</p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="flex min-h-[100px] items-center justify-center rounded-[1.4rem] border border-[#102032]/10 bg-[#FBF7F0] px-3 text-center text-[15px] font-medium shadow-sm transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/6"
                >
                  {tool}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-[#102032]/10 bg-[#FBF7F0] px-5 py-4 text-[15px] text-[#4D6373] dark:border-white/10 dark:bg-white/6 dark:text-[#D1DCE3]">
              Plus: Figma, Git, Docker, VS Code, and more
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-7xl px-5 pb-20 pt-14 md:px-8 lg:px-10">
        <div className="rounded-[2.2rem] border border-[#102032]/10 bg-white/72 px-7 py-8 shadow-[0_16px_50px_-28px_rgba(16,32,50,0.18)] backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-medium tracking-[0.28em] uppercase text-[#2F8E93]">Contact</p>
              <h2 className="mt-4 max-w-2xl font-serif text-5xl leading-[0.98] tracking-[-0.05em] text-balance">
                Let’s turn thoughtful ideas into real products.
              </h2>
              <p className="mt-5 max-w-xl text-[16px] leading-8 text-[#4D6373] dark:text-[#CCD8DF]">
                Next, we can replace placeholders with your real project visuals and turn this into a portfolio that feels properly yours.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:hello@example.com"
                className="rounded-2xl bg-[#F3906B] px-6 py-4 text-sm font-semibold text-white shadow-[0_16px_36px_-16px_rgba(243,144,107,0.65)] transition hover:-translate-y-1"
              >
                Say Hello
              </a>
              <a
                href="#"
                className="rounded-2xl border border-[#102032]/14 px-6 py-4 text-sm font-medium transition hover:-translate-y-1 dark:border-white/10"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
