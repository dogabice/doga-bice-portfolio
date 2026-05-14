import Reveal from "@/components/ui/reveal";

const principles = [
  "Human-centered systems",
  "Warm digital experiences",
  "Thoughtful interaction design",
  "AI with real purpose",
];

export default function Philosophy() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-10"
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
        <Reveal>
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-[#C75C7C]">
              Philosophy
            </p>

            <h2 className="mt-5 max-w-2xl text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.05em] text-[#F6EFE8] md:text-[3.5rem]">
              Good products should feel inevitable.
            </h2>

            <p className="mt-7 max-w-2xl text-[16px] leading-8 text-[#B8AAB7]">
              I care about interfaces that feel intuitive, systems that feel
              reliable and AI that solves actual problems — not just flashy
              experiences.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-[2.5rem] border border-white/10 bg-[#211826]/70 p-8 backdrop-blur-xl md:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-[#E8A96B]">
              What I care about
            </p>

            <div className="mt-8 space-y-4">
              {principles.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-medium text-[#F6EFE8]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}