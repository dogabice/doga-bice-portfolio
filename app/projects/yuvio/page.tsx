import Image from "next/image";
import Link from "next/link";
import ScreenCarousel from "@/components/project/screen-carousel";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Database,
  Filter,
  Heart,
  MessageCircle,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Discovery-first flow",
    text: "A feed experience where adopters can browse pets through clear cards, categories and search.",
  },
  {
    icon: Filter,
    title: "Soft filtering UX",
    text: "A filter modal for pet type, breed, city, age and sorting without making the interface feel heavy.",
  },
  {
    icon: Heart,
    title: "Favorites",
    text: "Users can save pets they are interested in and revisit them through a dedicated favorites flow.",
  },
  {
    icon: MessageCircle,
    title: "Listing-based messaging",
    text: "Conversations are connected to a specific listing so the adoption context stays clear.",
  },
  {
    icon: Bell,
    title: "Notifications",
    text: "Important actions such as favorites and messages are surfaced with a simple activity system.",
  },
  {
    icon: ShieldCheck,
    title: "Owner tools",
    text: "Owners can manage listings, track active/adopted status and understand listing performance.",
  },
];

const stack = [
  "React Native",
  "Expo",
  "TypeScript",
  "Supabase Auth",
  "Supabase Database",
  "Realtime Channels",
  "Product Design",
  "Figma",
];

const technical = [
  "Authentication and profile completion flow",
  "Realtime messaging between adopters and owners",
  "Favorites and notification data model",
  "Owner listing management and status updates",
  "Dynamic filters for discovery",
  "Reusable mobile UI components",
];

export default function YuvioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#130D12] text-[#F6EFE8]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(199,92,124,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(232,169,107,0.12),transparent_30%),radial-gradient(circle_at_45%_78%,rgba(94,167,160,0.12),transparent_38%)]" />
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
              Featured Case Study
            </div>

            <p className="text-xs uppercase tracking-[0.34em] text-[#C75C7C]">
              Mobile adoption platform
            </p>

            <h1 className="mt-5 text-[4rem] font-semibold leading-[0.9] tracking-[-0.075em] md:text-[6.4rem]">
              Yuvio
            </h1>

            <p className="mt-7 max-w-xl text-[17px] leading-8 text-[#CFC3CB]">
              A warm mobile pet adoption platform designed around trust,
              discovery, messaging and owner-side listing management.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Mobile App", "Product Design", "Realtime", "Supabase"].map(
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

          <div className="relative min-h-[560px] overflow-hidden rounded-[2.8rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(199,92,124,0.18),transparent_32%),radial-gradient(circle_at_78%_80%,rgba(232,169,107,0.15),transparent_34%)]" />

            <Phone
              src="/yuvio/onboarding-1.PNG"
              className="absolute left-8 top-20 w-[29%] rotate-[-8deg]"
            />
            <Phone
              src="/yuvio/home.PNG"
              className="absolute left-[33%] top-8 z-20 w-[34%]"
              priority
            />
            <Phone
              src="/yuvio/dashboard.PNG"
              className="absolute bottom-14 right-8 w-[30%] rotate-[8deg]"
            />

            <div className="absolute bottom-7 left-7 rounded-full border border-white/10 bg-[#211826]/75 px-4 py-3 backdrop-blur-xl">
              <p className="text-xs font-medium text-[#F6EFE8]">
                Discovery · Messaging · Owner tools
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-2">
          <InfoCard
            label="Problem"
            title="Pet adoption often feels scattered and low-trust."
            text="Users need to discover suitable pets, compare details, contact owners safely and follow the adoption process without feeling lost. Owners also need a clear way to manage listings."
            accent="pink"
          />

          <InfoCard
            label="Solution"
            title="A friendlier flow for adopters and owners."
            text="Yuvio brings onboarding, authentication, listing discovery, favorites, messaging, notifications and owner dashboards into one consistent mobile experience."
            accent="gold"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10">
        <div className="mb-10 grid gap-5 md:grid-cols-[0.9fr_1fr] md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#C75C7C]">
              Product Flow
            </p>
            <h2 className="mt-4 max-w-2xl text-[2.3rem] font-semibold leading-[1.04] tracking-[-0.05em] md:text-[3.6rem]">
              Designed around trust, not just screens.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#CFC3CB]">
            The app experience is grouped around key adoption moments:
            onboarding, discovery, owner management and communication.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
  <ShowcaseBlock
    className="lg:col-span-6"
    title="Onboarding"
    text="A warm first impression that introduces the adoption experience with friendly visuals."
    images={[
      "/yuvio/onboarding-1.PNG",
      "/yuvio/onboarding-2.PNG",
      "/yuvio/onboarding-3.PNG",
    ]}
  />

  <ShowcaseBlock
    className="lg:col-span-6"
    title="Discovery"
    text="A mobile-first feed where users can browse, search, filter and understand listings quickly."
    images={[
      "/yuvio/home.PNG",
      "/yuvio/home-dog-selected.PNG",
      "/yuvio/filter.PNG",
    ]}
  />

  <ShowcaseBlock
    className="lg:col-span-6"
    title="Owner tools"
    text="Dashboard and listing screens help owners track adoption status and manage listings."
    images={["/yuvio/dashboard.PNG", "/yuvio/my-listings.PNG"]}
  />

  <ShowcaseBlock
    className="lg:col-span-6"
    title="Communication"
    text="Favorites, messages and notifications support the trust layer of the adoption journey."
    images={[
      "/yuvio/favorites.PNG",
      "/yuvio/messages-1.PNG",
      "/yuvio/notifications.PNG",
    ]}
  />
</div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-10">
        <div className="grid gap-5 overflow-hidden rounded-[2.8rem] border border-white/10 bg-[#F6EFE8] p-6 text-[#171018] md:grid-cols-[0.85fr_1.15fr] md:p-8 lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#BD054C]">
              Spotlight
            </p>
            <h2 className="mt-4 max-w-xl text-[2.1rem] font-semibold leading-[1.05] tracking-[-0.05em] md:text-[3.4rem]">
              Search, filter and decide with less friction.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#6F6470]">
              Discovery is the heart of Yuvio. I focused on making listings feel
              easy to scan, compare and save before starting a conversation.
            </p>
          </div>

          <div className="flex items-center justify-center gap-5 rounded-[2.1rem] bg-[#E8E2D8] p-6">
            <Phone
              src="/yuvio/home.PNG"
              className="w-[28%] max-w-[150px]"
              priority
            />
            <Phone
              src="/yuvio/filter.PNG"
              className="w-[28%] max-w-[150px]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10">
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#C75C7C]">
            Core Features
          </p>
          <h2 className="mt-4 max-w-3xl text-[2.3rem] font-semibold leading-[1.04] tracking-[-0.05em] md:text-[3.6rem]">
            Product flows designed to feel clear and human.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#E8A96B]/30"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8A96B]/10 text-[#E8A96B]">
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
              Systems behind the interface.
            </h2>

            <div className="mt-8 space-y-4">
              {technical.map((item) => (
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
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#C75C7C]">
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

            <div className="mt-8 rounded-[2rem] border border-[#E8A96B]/20 bg-[#E8A96B]/10 p-6">
              <Smartphone className="h-8 w-8 text-[#E8A96B]" />

              <h3 className="mt-4 text-2xl font-semibold">
                Product decision
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#CFC3CB]">
                I focused on making the app feel friendly and trustworthy while
                still supporting practical adoption actions like searching,
                filtering, messaging and owner-side management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-10 md:px-8 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[2.6rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#C75C7C]">
              Next Project
            </p>

            <h2 className="mt-3 text-[2rem] font-semibold tracking-[-0.05em] md:text-[3rem]">
              Continue to E-Paw
            </h2>
          </div>

          <Link
            href="/projects/e-paw"
            className="inline-flex items-center gap-2 rounded-full bg-[#F6EFE8] px-6 py-4 text-sm font-medium text-[#120D13] transition hover:-translate-y-1 hover:bg-[#E8A96B]"
          >
            Open case study
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
  accent: "pink" | "gold";
}) {
  return (
    <div
      className={`rounded-[2.6rem] border border-white/10 p-8 backdrop-blur-xl md:p-10 ${
        accent === "pink" ? "bg-white/[0.035]" : "bg-[#211826]/60"
      }`}
    >
      <p
        className={`text-xs font-medium uppercase tracking-[0.32em] ${
          accent === "pink" ? "text-[#C75C7C]" : "text-[#E8A96B]"
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

function ShowcaseBlock({
  title,
  text,
  images,
  className = "",
  featured = false,
}: {
  title: string;
  text: string;
  images: string[];
  className?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`${className} overflow-hidden rounded-[2.35rem] border border-[#4A3341]/35 bg-[#241821]/82 p-6 text-[#F6EFE8] shadow-[0_24px_80px_-62px_rgba(0,0,0,0.75)] backdrop-blur-xl`}
    >
      <div className="mb-4 min-h-[76px]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C75C7C]">
          {title}
        </p>

        <p className="mt-3 max-w-xl text-sm leading-7 text-[#CFC3CB]">
          {text}
        </p>
      </div>

      <div className="flex min-h-[500px] items-center justify-center rounded-[1.9rem] border border-[#4A3341]/35 bg-[#1A1118]/72 px-5 py-5">
  <ScreenCarousel images={images} alt={`${title} Yuvio screens`} />
</div>
    </div>
  );
}

function Phone({
  src,
  className = "",
  priority = false,
}: {
  src: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`${className} rounded-[1.65rem] bg-[#0D0B10] p-2 shadow-[0_22px_60px_-36px_rgba(0,0,0,0.8)] ring-1 ring-white/10`}
    >
      <div className="overflow-hidden rounded-[1.15rem] bg-[#F6EFE8]">
        <Image
          src={src}
          alt="Yuvio app screen"
          width={420}
          height={900}
          className="h-auto w-full"
          priority={priority}
        />
      </div>
    </div>
  );
}