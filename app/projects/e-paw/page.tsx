import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const screens = [
    { src: "/epaw/epaw-login.png", title: "Login" },
    { src: "/epaw/epaw-register.png", title: "Register" },
    { src: "/epaw/epaw-home.png", title: "Home" },
    { src: "/epaw/epaw-pets.png", title: "Pets" },
    { src: "/epaw/epaw-pet-details.png", title: "Pet Details" },
    { src: "/epaw/epaw-appointments.png", title: "Appointments" },
    { src: "/epaw/epaw-new-appointment.png", title: "New Appointment" },
    { src: "/epaw/epaw-adoption-intro.png", title: "Adoption Intro" },
    { src: "/epaw/epaw-adoption-flow.png", title: "Adoption Flow" },
];

const features = [
    "Digital pet passport",
    "Vaccination and health record tracking",
    "Appointment scheduling",
    "AI-assisted vaccine sticker recognition",
    "Pet-owner matching logic for adoption",
    "Veterinarian and owner synchronization",
];

const techStack = [
    "React Native",
    "Expo",
    "Firebase Authentication",
    "Firestore",
    "Python",
    "Flask API",
    "YOLOv8",
    "OpenCV",
    "Figma",
];

export default function EPawPage() {
    return (
        <main className="min-h-screen bg-[#F6F1E8] text-[#102032] dark:bg-[#0F1D27] dark:text-[#F7F1E8]">
            <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 lg:px-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full border border-[#102032]/10 bg-white/70 px-4 py-2 text-sm transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to home
                </Link>

                <section className="pt-10">
                    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#2F8E93]">
                                Case Study
                            </p>

                            <h1 className="mt-4 font-serif text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
                                E-Paw
                            </h1>

                            <p className="mt-6 max-w-xl text-lg leading-9 text-[#4D6373] dark:text-[#C9D6DE]">
                                An AI-supported pet health tracking and adoption platform designed
                                to digitize pet records, improve care coordination, and create
                                more thoughtful adoption matches.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {["AI", "Mobile App", "Health Tracking", "Adoption", "React Native"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-[#102032]/10 bg-white/70 px-4 py-2 text-sm dark:border-white/10 dark:bg-white/5"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-10 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-[1.5rem] border border-[#102032]/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
                                    <p className="text-sm uppercase tracking-[0.22em] text-[#2F8E93]">
                                        My Role
                                    </p>
                                    <p className="mt-3 text-[15px] leading-8 text-[#4D6373] dark:text-[#C9D6DE]">
                                        UI/UX design, mobile development, AI integration, matching
                                        logic, and product thinking.
                                    </p>
                                </div>

                                <div className="rounded-[1.5rem] border border-[#102032]/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
                                    <p className="text-sm uppercase tracking-[0.22em] text-[#2F8E93]">
                                        Focus
                                    </p>
                                    <p className="mt-3 text-[15px] leading-8 text-[#4D6373] dark:text-[#C9D6DE]">
                                        Animal welfare, health record digitization, and more suitable
                                        adoption outcomes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[2rem] border border-[#102032]/10 bg-white/75 p-4 shadow-[0_16px_50px_-28px_rgba(16,32,50,0.22)] dark:border-white/10 dark:bg-white/5">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="overflow-hidden rounded-[1.5rem] bg-[#e9f7f7]">
                                    <Image
                                        src="/epaw/epaw-home.png"
                                        alt="E-Paw home screen"
                                        width={600}
                                        height={1200}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="overflow-hidden rounded-[1.5rem] bg-[#fff3e8]">
                                    <Image
                                        src="/epaw/epaw-pet-details.png"
                                        alt="E-Paw pet details screen"
                                        width={600}
                                        height={1200}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-20">
                    <div className="grid gap-6 lg:grid-cols-2">
                        <div className="rounded-[2rem] bg-[#102032] p-8 text-white">
                            <p className="text-sm uppercase tracking-[0.22em] text-[#8FD5D5]">
                                Problem
                            </p>
                            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em]">
                                Pet health and adoption are still fragmented, manual, and hard to manage.
                            </h2>
                            <p className="mt-5 text-[15px] leading-8 text-white/80">
                                Pet owners often depend on physical records, veterinarians and owners
                                are not always synchronized, and adoption decisions can be based on
                                incomplete or overly surface-level information.
                            </p>
                        </div>

                        <div className="rounded-[2rem] border border-[#102032]/10 bg-white/70 p-8 dark:border-white/10 dark:bg-white/5">
                            <p className="text-sm uppercase tracking-[0.22em] text-[#2F8E93]">
                                Solution
                            </p>
                            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em]">
                                A mobile platform that combines health tracking, appointments, and adoption.
                            </h2>
                            <p className="mt-5 text-[15px] leading-8 text-[#4D6373] dark:text-[#C9D6DE]">
                                E-Paw brings together digital pet profiles, health records,
                                appointment scheduling, and an adoption flow designed around
                                compatibility rather than only visual choice.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="pt-20">
                    <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#2F8E93]">
                        Core Features
                    </p>
                    <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-[-0.05em]">
                        What the product offers
                    </h2>

                    <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div
                                key={feature}
                                className="rounded-[1.5rem] border border-[#102032]/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5"
                            >
                                <p className="text-[15px] leading-8 text-[#102032] dark:text-white">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="pt-20">
                    <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#2F8E93]">
                        Product Flow
                    </p>
                    <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-[-0.05em]">
                        Key screens and experience
                    </h2>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {screens.map((screen) => (
                            <div
                                key={screen.title}
                                className="rounded-[1.75rem] border border-[#102032]/10 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                            >
                                <div className="overflow-hidden rounded-[1.25rem] bg-[#f1f1f1]">
                                    <Image
                                        src={screen.src}
                                        alt={screen.title}
                                        width={500}
                                        height={1000}
                                        className="h-auto w-full object-cover"
                                    />
                                </div>
                                <p className="mt-4 text-sm font-medium text-[#4D6373] dark:text-[#C9D6DE]">
                                    {screen.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="pt-20">
                    <div className="grid gap-6 lg:grid-cols-2">
                        <div className="rounded-[2rem] border border-[#102032]/10 bg-white/70 p-8 dark:border-white/10 dark:bg-white/5">
                            <p className="text-sm uppercase tracking-[0.22em] text-[#2F8E93]">
                                AI & Matching
                            </p>
                            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em]">
                                Intelligence is used for both health record automation and adoption logic.
                            </h2>
                            <p className="mt-5 text-[15px] leading-8 text-[#4D6373] dark:text-[#C9D6DE]">
                                E-Paw includes vaccine sticker recognition using an image detection
                                pipeline and an adoption model that evaluates compatibility between
                                pets and potential adopters.
                            </p>
                            <p className="mt-4 text-[15px] leading-8 text-[#4D6373] dark:text-[#C9D6DE]">
                                A key idea in the project is that the system should not only reflect
                                what a user wants, but also what the pet actually needs.
                            </p>
                        </div>

                        <div className="rounded-[2rem] bg-[linear-gradient(135deg,#102032,#17384b,#D9A84D)] p-[1px]">
                            <div className="rounded-[calc(2rem-1px)] bg-[#102032] p-8 text-white">
                                <p className="text-sm uppercase tracking-[0.22em] text-[#8FD5D5]">
                                    Technical Flow
                                </p>
                                <div className="mt-6 space-y-4 text-[15px] leading-8 text-white/85">
                                    <p>Photo capture / upload</p>
                                    <p>→ Flask API</p>
                                    <p>→ YOLO-based detection</p>
                                    <p>→ vaccine type identified</p>
                                    <p>→ health record updated in the system</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-20">
                    <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#2F8E93]">
                        Tech Stack
                    </p>
                    <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-[-0.05em]">
                        Built with
                    </h2>

                    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                        {techStack.map((item) => (
                            <div
                                key={item}
                                className="rounded-[1.4rem] border border-[#102032]/10 bg-white/70 px-4 py-5 text-center text-sm font-medium dark:border-white/10 dark:bg-white/5"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="pt-20">
                    <div className="rounded-[2rem] border border-[#102032]/10 bg-white/70 p-8 dark:border-white/10 dark:bg-white/5">
                        <p className="text-sm uppercase tracking-[0.22em] text-[#2F8E93]">
                            Why it matters
                        </p>
                        <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em]">
                            More than a pet app, this is a care and adoption system with social value.
                        </h2>
                        <p className="mt-5 max-w-3xl text-[15px] leading-8 text-[#4D6373] dark:text-[#C9D6DE]">
                            E-Paw aims to make pet care more accessible, reduce friction in record
                            keeping, and support more responsible adoption decisions. It also shows
                            how AI can be embedded into a product in a way that serves practical,
                            real-world needs.
                        </p>
                    </div>
                </section>

                <section className="pt-20">
                    <div className="flex flex-wrap items-center justify-between gap-4 rounded-[2rem] bg-[#102032] px-8 py-8 text-white">
                        <div>
                            <p className="text-sm uppercase tracking-[0.22em] text-[#8FD5D5]">
                                Next Project
                            </p>
                            <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">
                                Continue to Istanbul Vibe Finder
                            </h2>
                        </div>

                        <Link
                            href="/projects/istanbul-vibe-finder"
                            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#102032]"
                        >
                            Open next case study
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}