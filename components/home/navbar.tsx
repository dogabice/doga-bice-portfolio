import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-50 mx-auto max-w-7xl px-5 pt-6 md:px-8 lg:px-10">
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 shadow-[0_16px_60px_-46px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F6EFE8] text-[#120D13]">
            <Sparkles className="h-4 w-4" />
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#F6EFE8]">
              Doğa Bice
            </p>
            <p className="text-xs text-[#B8AAB7]">
              Product-minded engineer
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-[#B8AAB7] md:flex">
          <a href="#home" className="transition hover:text-[#F6EFE8]">
            Home
          </a>
          <a href="#expertise" className="transition hover:text-[#F6EFE8]">
            Expertise
          </a>
          <a href="#work" className="transition hover:text-[#F6EFE8]">
            Work
          </a>
          <a href="#experience" className="transition hover:text-[#F6EFE8]">
            Experience
          </a>
          <a href="#contact" className="transition hover:text-[#F6EFE8]">
            Contact
          </a>
        </div>

        <a
          href="mailto:dogabice15@gmail.com"
          className="rounded-full bg-[#F6EFE8] px-5 py-3 text-sm font-medium text-[#120D13] transition hover:-translate-y-0.5 hover:bg-[#E8A96B]"
        >
          Let’s talk
        </a>
      </nav>
    </header>
  );
}