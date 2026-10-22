"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/ui/language-provider";
import InteractivePhone from "@/components/ui/interactive-phone";
import YuviaDestinationLinks from "@/components/project/yuvia-destination-links";
import YuviaProductIntro from "@/components/project/yuvia-product-intro";
import YuviaStoryCarousel from "@/components/project/yuvia-story-carousel";

const copy = {
  tr: {
    eyebrow: "Tasarladım · geliştirdim · yayında",
    title: "Bir bitirme projesinden canlı bir ürüne.",
    intro: "Yuvia, üniversiteden bir arkadaşımla başladığımız bitirme projesinden doğdu. Ürünü birlikte büyütüp iOS, Android ve web’de yayınladık. Ben ürün akışlarını ve arayüzünü tasarladım; mobil ve web geliştirmesinde çalıştım. Bugün de Yuvia’yı birlikte sürdürüyoruz.",
    role: "Ürün tasarımı · Mobil ve web geliştirme",
    platforms: "iOS · Android · Web",
    roleLabel: "Katkım",
    platformLabel: "Yayında",
    problemEyebrow: "Ürün kararı / 01",
    problemTitle: "Sahiplendirme sürecindeki parçaları tek yerde toplamak.",
    problem: "Bir ilanı görmek, hayvanın ihtiyaçlarını anlamak, ilan sahibiyle konuşmak ve süreci takip etmek birbiriyle bağlantılı işler. Yuvia’da bu adımları ayrı ekranlar gibi değil, devam eden tek bir yolculuk olarak tasarlayıp geliştirdik.",
    steps: [
      { title: "Keşfet", text: "Tür, konum ve ihtiyaç bilgileriyle doğru ilanı bulmayı kolaylaştıran bir keşif akışı." },
      { title: "Bağ kur", text: "İlan detaylarından uygulama içi iletişime uzanan açık ve güven veren bir geçiş." },
      { title: "Birlikte yönet", text: "İlan sahipleri ve topluluk ekipleri için ilan, ilgi ve iş birliğini görünür kılan alanlar." },
    ],
    endingEyebrow: "Ürün notu / 02",
    endingTitle: "Güven, tek bir ekranda kurulmaz.",
    endingText: "Sahiplendirme gibi hassas bir süreçte doğru ilanı göstermek yalnızca başlangıç. Açık bilgiler, güven veren bir ilk temas ve takip edilebilir adımlar aynı deneyimin parçaları. Yuvia’nın tasarım ve geliştirme kararlarını bu bütünlük etrafında verdik; ürün yayındayken de birlikte iyileştirmeyi sürdürüyoruz.",
    endingStatus: "Yuvia · gelişmeye devam eden canlı ürün",
    nextProject: "Diğer projelere bak",
    back: "Tüm projeler",
  },
  en: {
    eyebrow: "Designed · built · live",
    title: "From a university capstone to a live product.",
    intro: "Yuvia began as a university capstone project with a friend. Together, we grew it into a pet adoption platform live on iOS, Android and the web. I designed its product flows and interface and worked on the mobile and web development. We continue to improve Yuvia together today.",
    role: "Design · App and web development",
    platforms: "iOS · Android · Web",
    roleLabel: "My contribution",
    platformLabel: "Live on",
    problemEyebrow: "Product decision / 01",
    problemTitle: "Bring the pieces of adoption into one place.",
    problem: "Finding a listing, understanding a pet’s needs, contacting the owner and following the process are connected tasks. In Yuvia, we designed and built them as one continuous journey instead of a collection of separate screens.",
    steps: [
      { title: "Discover", text: "A focused way to find a relevant listing through species, location and practical details." },
      { title: "Connect", text: "A clear transition from listing details to conversation inside the app." },
      { title: "Manage together", text: "Shared spaces that help owners and community teams see listings, interest and collaboration." },
    ],
    endingEyebrow: "Product note / 02",
    endingTitle: "Trust is built across the whole journey.",
    endingText: "In a sensitive process like adoption, finding the right listing is only the beginning. Clear information, a reassuring first conversation and steps people can follow all belong to the same experience. We made Yuvia’s design and development decisions around that connection, and continue improving the live product together.",
    endingStatus: "Yuvia · a live product in progress",
    nextProject: "Explore other projects",
    back: "All projects",
  },
};

function ScreenshotPhone({ src, alt, className }: { src: string; alt: string; className: string }) {
  return <div className={className}>
    <div className="relative rounded-[2.25rem] border border-white/25 bg-gradient-to-br from-[#6D6870] via-[#27242A] to-[#090809] p-[6px] shadow-[0_30px_70px_-20px_rgba(0,0,0,.7)]">
      <div className="relative overflow-hidden rounded-[1.9rem] bg-[#F8F5ED]">
        <Image src={src} alt={alt} width={1170} height={2532} priority sizes="(max-width: 640px) 150px, (max-width: 1024px) 220px, 230px" className="block h-auto w-full" />
        <span aria-hidden="true" className="absolute left-1/2 top-[1.5%] h-[3%] w-[31%] -translate-x-1/2 rounded-full bg-[#090809]" />
      </div>
    </div>
  </div>;
}

export default function YuviaCaseStudy() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <main className="min-h-screen overflow-hidden text-[#F6EFE8]">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-8 md:px-8 lg:px-10 lg:pb-28">
        <Link href="/work" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-sm text-[#E9DFD9] transition hover:border-[#E8A96B] hover:text-[#E8A96B] focus-visible:outline-2 focus-visible:outline-[#E8A96B]">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />{content.back}
        </Link>

        <div className="mt-6 grid gap-12 lg:mt-4 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.3em] text-[#F36E2B]">{content.eyebrow}</p>
            <h1 className="mt-5">
              <Image
                src="/work/yuvia/brand/logoname-white.webp"
                alt="Yuvia"
                width={900}
                height={270}
                priority
                sizes="(max-width: 640px) 78vw, 430px"
                className="h-auto w-[min(78vw,430px)] max-w-full"
              />
            </h1>
            <p className="mt-6 max-w-xl text-[clamp(1.6rem,3vw,2.35rem)] font-semibold leading-[1.1] tracking-[-.045em]">{content.title}</p>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#CFC3CB]">{content.intro}</p>
            <YuviaDestinationLinks language={language} />
            <div className="mt-8 grid gap-4 border-t border-white/15 pt-6 xl:grid-cols-[minmax(0,1fr)_auto] xl:gap-5">
              <div><p className="text-[10px] uppercase tracking-[.25em] text-[#E8A96B]">{content.roleLabel}</p><p className="mt-2 whitespace-nowrap text-[13px] leading-6 text-[#E9DFD9] sm:text-sm">{content.role}</p></div>
              <div><p className="text-[10px] uppercase tracking-[.25em] text-[#E8A96B]">{content.platformLabel}</p><p className="mt-2 whitespace-nowrap text-[13px] leading-6 text-[#E9DFD9] sm:text-sm">{content.platforms}</p></div>
            </div>
          </div>

          <div className="relative isolate min-h-[470px] sm:min-h-[640px] lg:min-h-[720px]" aria-label={language === "tr" ? "Yuvia uygulaması videosu ve gerçek ekran görüntüleri" : "Yuvia app video and real screenshots"}>
            <ScreenshotPhone src="/work/yuvia/screens/home.webp" alt={language === "tr" ? "Yuvia keşif ekranı" : "Yuvia discovery screen"} className="absolute left-[2%] top-1/2 w-[31%] -translate-y-1/2 -rotate-[8deg] sm:left-[6%] sm:w-[29%] lg:left-[3%] lg:w-[30%]" />
            <ScreenshotPhone src="/work/yuvia/screens/favorites.webp" alt={language === "tr" ? "Yuvia favoriler ekranı" : "Yuvia favorites screen"} className="absolute right-[2%] top-1/2 w-[31%] -translate-y-1/2 rotate-[8deg] sm:right-[6%] sm:w-[29%] lg:right-[3%] lg:w-[30%]" />
            <InteractivePhone videoSrc="/work/yuvia/videos/hero-demo.mp4" videoFit="contain" label={language === "tr" ? "Yuvia uygulama demosu" : "Yuvia app demo"} className="absolute left-1/2 top-1/2 z-10 h-[435px] w-[205px] -translate-x-1/2 -translate-y-1/2 sm:h-[565px] sm:w-[268px] lg:h-[610px] lg:w-[289px]" />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[.025] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:px-10">
          <div><p className="text-xs uppercase tracking-[.3em] text-[#F36E2B]">{content.problemEyebrow}</p><h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[.98] tracking-[-.06em] md:text-5xl">{content.problemTitle}</h2><p className="mt-7 max-w-xl text-[15px] leading-8 text-[#CFC3CB]">{content.problem}</p></div>
          <div className="border-t border-white/15">
            {content.steps.map((step, index) => <div key={step.title} className="group grid grid-cols-[4rem_1fr] gap-4 border-b border-white/15 py-8 sm:grid-cols-[5.5rem_1fr] sm:gap-6"><span className="font-serif text-4xl italic leading-none text-white/25 transition duration-300 group-hover:text-[#E8A96B]/80 sm:text-5xl" aria-hidden="true">0{index + 1}</span><div><h3 className="text-xl font-semibold tracking-[-.035em]">{step.title}</h3><p className="mt-2 max-w-lg text-sm leading-7 text-[#B8AAB7]">{step.text}</p></div></div>)}
          </div>
        </div>
      </section>

      <YuviaProductIntro />
      <YuviaStoryCarousel />

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-12 md:px-8 lg:px-10 lg:pb-32">
        <div className="grid gap-10 border-t border-[#F36E2B]/50 pt-10 md:pt-14 lg:grid-cols-[.52fr_1.48fr] lg:gap-16">
          <p className="text-xs font-semibold uppercase tracking-[.3em] text-[#F36E2B]">{content.endingEyebrow}</p>
          <div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[.98] tracking-[-.06em] md:text-6xl">{content.endingTitle}</h2>
            <p className="mt-7 max-w-2xl text-[15px] leading-8 text-[#CFC3CB]">{content.endingText}</p>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-white/15 pt-6">
              <span className="text-xs uppercase tracking-[.2em] text-[#E8A96B]">{content.endingStatus}</span>
              <Link href="/work" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#F6EFE8] underline-offset-4 transition hover:text-[#E8A96B] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8A96B]">{content.nextProject}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
