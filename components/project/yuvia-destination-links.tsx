import Image from "next/image";

const destinations = [
  { href: "https://yuviaapp.com/", tr: "Web sitesi", en: "Website", kind: "web" },
  { href: "https://apps.apple.com/tr/app/yuvia/id6799771485?l=tr", tr: "App Store", en: "App Store", kind: "apple" },
  { href: "https://play.google.com/store/apps/details?id=com.yuvia.app", tr: "Google Play", en: "Google Play", kind: "google" },
];

function DestinationIcon({ kind, compact }: { kind: string; compact: boolean }) {
  if (kind === "apple") {
    return <svg viewBox="0 0 24 24" className={compact ? "h-5 w-5 shrink-0 fill-current" : "h-6 w-6 shrink-0 fill-current"} aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.06 2.47-1.34.03-1.77-.8-3.29-.8-1.53 0-2.01.78-3.29.83-1.32.05-2.32-1.33-3.16-2.56C4.19 16.97 2.94 12.45 4.68 9.39a4.89 4.89 0 0 1 4.12-2.51c1.28-.03 2.49.87 3.29.87.79 0 2.28-1.08 3.84-.92.65.03 2.48.26 3.65 1.98-.09.06-2.18 1.28-2.15 3.82.03 3.04 2.66 4.05 2.69 4.07-.03.07-.42 1.45-1.41 2.8ZM15.8 4.8c.7-.85 1.17-2.02 1.04-3.19-1.01.04-2.24.67-2.98 1.56-.65.77-1.23 1.97-1.08 3.11 1.12.09 2.25-.57 3.02-1.48Z" /></svg>;
  }
  if (kind === "google") {
    return <svg viewBox="0 0 24 24" className={compact ? "h-5 w-5 shrink-0" : "h-6 w-6 shrink-0"} aria-hidden="true"><path d="M3.5 2.5v19L13.8 12Z" fill="#39C5F3" /><path d="M3.5 2.5 17.1 10l-3.3 2Z" fill="#55C878" /><path d="M3.5 21.5 17.1 14l-3.3-2Z" fill="#F7C94B" /><path d="m13.8 12 3.3-2 3.4 1.9a.13.13 0 0 1 0 .2L17.1 14Z" fill="#F56B66" /></svg>;
  }
  return <Image src="/work/yuvia/brand/logo.png" alt="" width={517} height={505} className={compact ? "h-7 w-7 shrink-0 object-contain" : "h-9 w-9 shrink-0 object-contain"} aria-hidden="true" />;
}

export default function YuviaDestinationLinks({ language, compact = false }: { language: "tr" | "en"; compact?: boolean }) {
  return (
    <div className={compact ? "mt-5 grid w-full grid-cols-2 gap-2 xl:grid-cols-3" : "mt-6 grid max-w-[540px] grid-cols-2 gap-3 sm:grid-cols-3"}>
      {destinations.map((destination) => (
        <a key={destination.href} href={destination.href} target="_blank" rel="noopener noreferrer" aria-label={`${destination[language]} — Yuvia`} className={`group inline-flex min-w-0 items-center justify-center rounded-full border border-[#B8C2D0] bg-[#F9FAFC] text-[#162136] shadow-[0_10px_25px_-18px_rgba(0,0,0,.65)] transition duration-200 hover:-translate-y-0.5 hover:border-[#F36E2B] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F36E2B] ${compact ? "min-h-[50px] gap-1.5 px-2" : "min-h-[64px] gap-2 px-3"} ${destination.kind === "web" ? compact ? "col-span-2 xl:col-span-1" : "col-span-2 sm:col-span-1" : ""}`}>
          <DestinationIcon kind={destination.kind} compact={compact} />
          <span className={`whitespace-nowrap font-semibold tracking-[-.025em] ${compact ? "text-xs" : "text-[13px] sm:text-sm"}`}>{destination[language]}</span>
        </a>
      ))}
    </div>
  );
}
