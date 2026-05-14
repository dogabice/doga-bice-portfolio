import Image from "next/image";
import Link from "next/link";
import ScreenCarousel from "@/components/project/screen-carousel";
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  CalendarDays,
  Database,
  HeartHandshake,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Digital pet profile",
    text: "Owners can keep pet identity, health and care details in one accessible mobile profile.",
  },
  {
    icon: Syringe,
    title: "Vaccination tracking",
    text: "Health records and vaccination history are organized to reduce dependency on paper-based tracking.",
  },
  {
    icon: CalendarDays,
    title: "Appointments",
    text: "Appointment flows help owners follow upcoming veterinary visits and care moments.",
  },
  {
    icon: ScanLine,
    title: "Sticker recognition",
    text: "AI-assisted vaccine sticker recognition supports faster health record updates.",
  },
  {
    icon: HeartHandshake,
    title: "Adoption matching",
    text: "Matching logic considers compatibility between pets and potential adopters.",
  },
  {
    icon: ShieldCheck,
    title: "Care coordination",
    text: "The product idea connects owners, veterinarians and adoption flows around responsible care.",
  },
];

const stack = [
  "React Native",
  "Expo",
  "Firebase Auth",
  "Firestore",
  "Python",
  "Flask API",
  "YOLOv8",
  "OpenCV",
  "Figma",
];

const technical = [
  "Firebase authentication and user profiles",
  "Firestore-based pet and health records",
  "Appointment and care flow management",
  "YOLO-based vaccine sticker detection",
  "Flask API integration for image processing",
  "Preference-based adoption matching logic",
];

export default function EPawPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#130D12] text-[#F6EFE8]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(94,167,160,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(232,169,107,0.12),transparent_30%),radial-gradient(circle_at_45%_78%,rgba(199,92,124,0.12),transparent_38%)]" />
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
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#5EA7A0]/25 bg-[#5EA7A0]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#5EA7A0]">
              <Sparkles className="h-4 w-4" />
              AI + Pet Health
            </div>

            <p className="text-xs uppercase tracking-[0.34em] text-[#C75C7C]">
              Mobile health and adoption system
            </p>

            <h1 className="mt-5 text-[4rem] font-semibold leading-[0.9] tracking-[-0.075em] md:text-[6.4rem]">
              E-Paw
            </h1>

            <p className="mt-7 max-w-xl text-[17px] leading-8 text-[#CFC3CB]">
              An AI-supported pet health tracking and adoption platform designed
              to digitize pet records, improve care coordination and create more
              thoughtful adoption matches.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Mobile App", "AI Recognition", "Pet Health", "Firebase"].map(
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(94,167,160,0.18),transparent_32%),radial-gradient(circle_at_78%_80%,rgba(232,169,107,0.15),transparent_34%)]" />

            <Phone
              src="/epaw/epaw-login.PNG"
              className="absolute left-8 top-20 w-[29%] rotate-[-8deg]"
            />
            <Phone
              src="/epaw/epaw-home.PNG"
              className="absolute left-[33%] top-8 z-20 w-[34%]"
              priority
            />
            <Phone
              src="/epaw/epaw-pet-details.PNG"
              className="absolute bottom-14 right-8 w-[30%] rotate-[8deg]"
            />

            <div className="absolute bottom-7 left-7 rounded-full border border-white/10 bg-[#211826]/75 px-4 py-3 backdrop-blur-xl">
              <p className="text-xs font-medium text-[#F6EFE8]">
                Health records · AI recognition · Matching
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-2">
          <InfoCard
            label="Problem"
            title="Pet health and adoption are still fragmented."
            text="Pet owners often depend on physical records, veterinarians and owners are not always synchronized, and adoption decisions can be based on incomplete or surface-level information."
            accent="teal"
          />

          <InfoCard
            label="Solution"
            title="A mobile system for care, records and adoption."
            text="E-Paw brings together digital pet profiles, health records, appointment scheduling, AI-assisted vaccine sticker recognition and adoption compatibility logic."
            accent="gold"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10">
        <div className="mb-10 grid gap-5 md:grid-cols-[0.9fr_1fr] md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#5EA7A0]">
              Product Flow
            </p>
            <h2 className="mt-4 max-w-2xl text-[2.3rem] font-semibold leading-[1.04] tracking-[-0.05em] md:text-[3.6rem]">
              Designed for everyday pet care moments.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#CFC3CB]">
            The experience is grouped around account access, pet profiles,
            appointments and adoption-oriented decision flows.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          <ShowcaseBlock
            className="lg:col-span-6"
            title="Access"
            text="Login and registration screens create the entry point for owners and users."
            images={["/epaw/epaw-login.PNG", "/epaw/epaw-register.PNG"]}
          />

          <ShowcaseBlock
            className="lg:col-span-6"
            title="Pet Health"
            text="Home, pet list and detail screens help users follow pet records and health context."
            images={[
              "/epaw/epaw-home.PNG",
              "/epaw/epaw-pets.PNG",
              "/epaw/epaw-pet-details.PNG",
            ]}
          />

          <ShowcaseBlock
            className="lg:col-span-6"
            title="Appointments"
            text="Appointment screens support care planning and veterinary follow-up moments."
            images={[
              "/epaw/epaw-appointments.PNG",
              "/epaw/epaw-new-appointment.PNG",
            ]}
          />

          <ShowcaseBlock
            className="lg:col-span-6"
            title="Adoption"
            text="Adoption screens introduce matching-oriented flows for more suitable outcomes."
            images={[
              "/epaw/epaw-adoption-intro.PNG",
              "/epaw/epaw-adoption-flow.PNG",
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-10">
        <div className="grid gap-5 overflow-hidden rounded-[2.8rem] border border-white/10 bg-[#F6EFE8] p-6 text-[#171018] md:grid-cols-[0.85fr_1.15fr] md:p-8 lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#BD054C]">
              AI Spotlight
            </p>
            <h2 className="mt-4 max-w-xl text-[2.1rem] font-semibold leading-[1.05] tracking-[-0.05em] md:text-[3.4rem]">
              Intelligence used for practical care tasks.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#6F6470]">
              E-Paw includes a vaccine sticker recognition idea using an image
              detection pipeline, connecting captured visuals to structured
              health records.
            </p>
          </div>

          <div className="rounded-[2.1rem] bg-[#E8E2D8] p-6">
            <div className="rounded-[1.8rem] bg-[#171018] p-7 text-[#F6EFE8]">
              <BrainCircuit className="h-9 w-9 text-[#E8A96B]" />

              <div className="mt-8 space-y-4 text-sm leading-7 text-[#CFC3CB]">
                <p>Photo capture / upload</p>
                <p>→ Flask API</p>
                <p>→ YOLO-based detection</p>
                <p>→ vaccine type identified</p>
                <p>→ health record updated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10">
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#5EA7A0]">
            Core Features
          </p>
          <h2 className="mt-4 max-w-3xl text-[2.3rem] font-semibold leading-[1.04] tracking-[-0.05em] md:text-[3.6rem]">
            A product system for care, records and matching.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
              Systems behind health and adoption flows.
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
              <ScanLine className="h-8 w-8 text-[#5EA7A0]" />

              <h3 className="mt-4 text-2xl font-semibold">
                Product decision
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#CFC3CB]">
                A key idea in E-Paw is that adoption should not only reflect
                what a user wants, but also what the pet actually needs.
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
              Continue to Istanbul Vibe Finder
            </h2>
          </div>

          <Link
            href="/projects/istanbul-vibe-finder"
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

function ShowcaseBlock({
  title,
  text,
  images,
  className = "",
}: {
  title: string;
  text: string;
  images: string[];
  className?: string;
}) {
  return (
    <div
      className={`${className} overflow-hidden rounded-[2.35rem] border border-[#4A3341]/35 bg-[#241821]/82 p-6 text-[#F6EFE8] shadow-[0_24px_80px_-62px_rgba(0,0,0,0.75)] backdrop-blur-xl`}
    >
      <div className="mb-4 min-h-[76px]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5EA7A0]">
          {title}
        </p>

        <p className="mt-3 max-w-xl text-sm leading-7 text-[#CFC3CB]">
          {text}
        </p>
      </div>

      <div className="flex min-h-[500px] items-center justify-center rounded-[1.9rem] border border-[#4A3341]/35 bg-[#1A1118]/72 px-5 py-5">
        <ScreenCarousel images={images} alt={`${title} E-Paw screens`} />
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
          alt="E-Paw app screen"
          width={420}
          height={900}
          className="h-auto w-full"
          priority={priority}
        />
      </div>
    </div>
  );
}