import type { ReactNode } from "react";

type PageIntroProps = {
  number: string;
  label: string;
  title: ReactNode;
  description: string;
  as?: "h1" | "h2";
};

export default function PageIntro({ number, label, title, description, as = "h1" }: PageIntroProps) {
  const Heading = as;

  return (
    <header className="grid gap-7 lg:grid-cols-[minmax(0,1.25fr)_minmax(19rem,.75fr)] lg:items-end lg:gap-20">
      <div>
        <p className="text-xs uppercase tracking-[.34em] text-[#C75C7C]">{number} · {label}</p>
        <Heading className="mt-5 max-w-4xl text-5xl font-semibold leading-[.94] tracking-[-.07em] text-[#F6EFE8] md:text-7xl">
          {title}
        </Heading>
      </div>
      <p className="max-w-lg text-base leading-7 text-[#C9BEC4]">{description}</p>
    </header>
  );
}
