import Reveal from "@/components/ui/reveal";
import { ExternalLink, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-5 pb-24 pt-16 md:px-8 lg:px-10"
    >
      <Reveal>
        <div className="overflow-hidden rounded-[2.6rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl md:p-10">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#C75C7C]">
                Contact
              </p>

              <h2 className="mt-5 max-w-3xl text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.05em] text-[#F6EFE8] md:text-[3.5rem]">
                Let’s build something thoughtful.
              </h2>

              <p className="mt-5 max-w-xl text-[16px] leading-8 text-[#B8AAB7]">
                Open to product, AI, mobile and full-stack opportunities where
                design and engineering meet.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:dogabice15@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-[#F6EFE8] px-5 py-3 text-sm font-medium text-[#120D13] transition hover:-translate-y-1 hover:bg-[#E8A96B]"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>

              <a
                href="https://github.com/dogabice"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-[#F6EFE8] transition hover:border-[#C75C7C]/40"
              >
                GitHub
                <ExternalLink className="h-4 w-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-[#F6EFE8] transition hover:border-[#E8A96B]/40"
              >
                LinkedIn
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}