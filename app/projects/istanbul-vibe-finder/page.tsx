import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  Database,
  MapPin,
  Search,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Natural language search",
    text: "Users can ask for places with contextual intent like mood, district, date plan or atmosphere.",
  },
  {
    icon: BrainCircuit,
    title: "Semantic matching",
    text: "Embeddings and vector search help connect vague human queries with relevant venue data.",
  },
  {
    icon: MapPin,
    title: "Istanbul-aware discovery",
    text: "The system is shaped around districts, local context and the way people actually describe places.",
  },
  {
    icon: Workflow,
    title: "Hybrid retrieval flow",
    text: "Keyword search, vector similarity and validation logic work together instead of relying on one method.",
  },
];

const pipeline = [
  "User writes a natural language vibe query",
  "Query is parsed for intent, district and atmosphere",
  "Hybrid search retrieves candidate venues",
  "Embeddings rank semantic similarity",
  "AI validation filters weak or irrelevant matches",
  "Results are returned as explainable recommendations",
];

const stack = [
  "Python",
  "FastAPI",
  "FAISS",
  "Sentence Transformers",
  "Embeddings",
  "SQLite Cache",
  "Semantic Search",
  "Recommendation Logic",
];

export default function IstanbulVibeFinderPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#130D12] text-[#F6EFE8]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(232,169,107,0.15),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(94,167,160,0.14),transparent_30%),radial-gradient(circle_at_45%_78%,rgba(199,92,124,0.12),transparent_38%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(19,13,18,0.50)_76%)]" />
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-8 md:px-8 lg:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-[#F6EFE8] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#E8A96B]/40"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="grid gap-14 pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#E8A96B]/20 bg-[#E8A96B]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#E8A96B]">
              <Sparkles className="h-4 w-4" />
              AI Discovery Agent
            </div>

            <p className="text-xs uppercase tracking-[0.34em] text-[#C75C7C]">
              Semantic search and recommendation system
            </p>

            <h1 className="mt-5 max-w-4xl text-[3.4rem] font-semibold leading-[0.92] tracking-[-0.075em] md:text-[5.8rem]">
              Istanbul Vibe Finder
            </h1>

            <p className="mt-7 max-w-xl text-[17px] leading-8 text-[#CFC3CB]">
              An AI-assisted venue discovery system for Istanbul, designed to
              understand natural language mood-based queries and return more
              relevant place recommendations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["AI Agent", "FastAPI", "FAISS", "Semantic Search"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-[#F6EFE8]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[2.8rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(232,169,107,0.16),transparent_32%),radial-gradient(circle_at_78%_80%,rgba(94,167,160,0.15),transparent_34%)]" />

            <div className="relative z-10 flex h-full min-h-[470px] flex-col justify-between rounded-[2.2rem] border border-white/10 bg-[#120D13]/70 p-6 shadow-[0_30px_90px_-55px_rgba(0,0,0,0.85)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#C75C7C]" />
                  <span className="h-3 w-3 rounded-full bg-[#E8A96B]" />
                  <span className="h-3 w-3 rounded-full bg-[#5EA7A0]" />
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#CFC3CB]">
                  Agent Preview
                </span>
              </div>

              <div className="my-10">
                <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs uppercase tracking-[0.26em] text-[#E8A96B]">
                    Query
                  </p>
                  <p className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.04em]">
                    “Find a calm date spot in Kadıköy that feels intimate but not overly expensive.”
                  </p>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {["district: Kadıköy", "mood: calm", "intent: date"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-[#211826]/65 px-4 py-4 text-sm text-[#CFC3CB]"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-[#E8A96B]/20 bg-[#E8A96B]/10 p-5">
                <p className="text-xs uppercase tracking-[0.26em] text-[#E8A96B]">
                  Recommendation logic
                </p>
                <p className="mt-3 text-sm leading-7 text-[#CFC3CB]">
                  Hybrid retrieval combines text search, vector similarity and
                  validation before returning venue suggestions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-2">
          <InfoCard
            label="Problem"
            title="Finding the right place is often more about vibe than category."
            text="Restaurant and venue search can feel stale, generic or too keyword-based. People usually search with soft context: mood, occasion, district, price expectation and social setting."
            accent="gold"
          />

          <InfoCard
            label="Solution"
            title="A discovery system that understands intent and atmosphere."
            text="Istanbul Vibe Finder explores how semantic search and AI validation can turn vague natural language requests into more relevant venue recommendations."
            accent="teal"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10">
        <div className="mb-10 grid gap-5 md:grid-cols-[0.9fr_1fr] md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#E8A96B]">
              System Flow
            </p>
            <h2 className="mt-4 max-w-2xl text-[2.3rem] font-semibold leading-[1.04] tracking-[-0.05em] md:text-[3.6rem]">
              From vague request to ranked recommendations.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#CFC3CB]">
            Instead of treating discovery as a simple search bar, the project
            explores a pipeline where intent, context and semantic similarity
            all shape the final result.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {pipeline.map((item, index) => (
            <div
              key={item}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#C75C7C]">
                Step {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-5 text-lg font-semibold leading-tight text-[#F6EFE8]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-10">
        <div className="grid gap-5 overflow-hidden rounded-[2.8rem] border border-white/10 bg-[#F6EFE8] p-6 text-[#171018] md:grid-cols-[0.85fr_1.15fr] md:p-8 lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#BD054C]">
              AI Spotlight
            </p>
            <h2 className="mt-4 max-w-xl text-[2.1rem] font-semibold leading-[1.05] tracking-[-0.05em] md:text-[3.4rem]">
              Search that starts from how people actually talk.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#6F6470]">
              The project focuses on translating everyday, mood-based language
              into retrievable signals that the system can search, rank and
              validate.
            </p>
          </div>

          <div className="rounded-[2.1rem] bg-[#E8E2D8] p-6">
            <div className="rounded-[1.8rem] bg-[#171018] p-7 text-[#F6EFE8]">
              <Terminal className="h-9 w-9 text-[#E8A96B]" />

              <div className="mt-8 space-y-4 font-mono text-sm leading-7 text-[#CFC3CB]">
                <p>{">"} parse_query(q)</p>
                <p>{">"} retrieve_candidates(text + vector)</p>
                <p>{">"} validate_with_agent(results)</p>
                <p>{">"} rank_by_context_and_similarity</p>
                <p>{">"} return_explainable_recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10">
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#5EA7A0]">
            Core Capabilities
          </p>
          <h2 className="mt-4 max-w-3xl text-[2.3rem] font-semibold leading-[1.04] tracking-[-0.05em] md:text-[3.6rem]">
            A venue search product shaped by context.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#5EA7A0]/35"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5EA7A0]/10 text-[#5EA7A0]">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-semibold text-[#F6EFE8]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#CFC3CB]">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2.6rem] border border-white/10 bg-[#211826]/72 p-8 backdrop-blur-xl md:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#E8A96B]">
              Technical Side
            </p>

            <h2 className="mt-5 text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.05em] md:text-[3.4rem]">
              Built as a retrieval and recommendation pipeline.
            </h2>

            <div className="mt-8 space-y-4">
              {[
                "FastAPI backend with search endpoints",
                "FAISS vector index for semantic retrieval",
                "Sentence-transformer embeddings",
                "SQLite cache for discovered venues",
                "Hybrid keyword and vector search",
                "Validation and ranking logic for recommendations",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-[#F6EFE8]"
                >
                  <Database className="h-5 w-5 shrink-0 text-[#E8A96B]" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.6rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#5EA7A0]">
              Stack
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {stack.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#120D13]/45 px-4 py-4 text-center text-sm font-medium text-[#F6EFE8]"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[2rem] border border-[#5EA7A0]/20 bg-[#5EA7A0]/10 p-6">
              <Workflow className="h-8 w-8 text-[#5EA7A0]" />

              <h3 className="mt-4 text-2xl font-semibold">
                Product decision
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#CFC3CB]">
                I focused on recommendations that feel explainable, not magical:
                users should understand why a place fits their request.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-10 md:px-8 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[2.6rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#C75C7C]">
              Back to Portfolio
            </p>

            <h2 className="mt-3 text-[2rem] font-semibold tracking-[-0.05em] md:text-[3rem]">
              Explore the full product space
            </h2>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#F6EFE8] px-6 py-4 text-sm font-medium text-[#120D13] transition hover:-translate-y-1 hover:bg-[#E8A96B]"
          >
            Back to home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function InfoCard({
  label,
  title,
  text,
  accent,
}: {
  label: string;
  title: string;
  text: string;
  accent: "teal" | "gold";
}) {
  return (
    <div
      className={`rounded-[2.6rem] border border-white/10 p-8 backdrop-blur-xl md:p-10 ${
        accent === "teal" ? "bg-white/[0.035]" : "bg-[#211826]/60"
      }`}
    >
      <p
        className={`text-xs font-medium uppercase tracking-[0.32em] ${
          accent === "teal" ? "text-[#5EA7A0]" : "text-[#E8A96B]"
        }`}
      >
        {label}
      </p>

      <h2 className="mt-5 text-[2rem] font-semibold leading-[1.08] tracking-[-0.045em] md:text-[3rem]">
        {title}
      </h2>

      <p className="mt-6 text-[15px] leading-8 text-[#CFC3CB]">{text}</p>
    </div>
  );
}