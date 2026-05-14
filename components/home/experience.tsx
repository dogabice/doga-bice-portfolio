import Reveal from "@/components/ui/reveal";

const experience = [
  {
    year: "2026",
    title: "Product & AI focused portfolio work",
    text: "Building Yuvio and AI-supported product experiments around discovery, matching and mobile experience.",
  },
  {
    year: "2025",
    title: "TÜBİTAK supported E-Paw project",
    text: "Senior design project focused on pet health tracking, adoption workflows and AI-based recognition.",
  },
  {
    year: "2024",
    title: "Backend Engineering Internship",
    text: "Built REST API systems with Spring Boot, PostgreSQL, Redis, Docker and Spring Security.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10"
    >
      <Reveal>
        <div className="mb-9">
          <p className="text-xs uppercase tracking-[0.32em] text-[#C75C7C]">
            Experience
          </p>
          <h2 className="mt-4 max-w-2xl text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#F6EFE8] md:text-[3rem]">
            A path shaped by products, systems and AI.
          </h2>
        </div>
      </Reveal>

      <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl md:p-7">
        <div className="space-y-4">
          {experience.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="grid gap-4 rounded-[1.6rem] border border-white/10 bg-[#211826]/45 p-5 md:grid-cols-[120px_1fr]">
                <p className="text-sm font-medium text-[#E8A96B]">
                  {item.year}
                </p>

                <div>
                  <h3 className="text-lg font-semibold text-[#F6EFE8]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#B8AAB7]">
                    {item.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}