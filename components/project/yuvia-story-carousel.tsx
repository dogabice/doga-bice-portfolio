"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/components/ui/language-provider";

type Copy = { title: string; description: string };
type Card = { file: string; tr: Copy; en: Copy };

const journeys: { tr: string; en: string; cards: Card[] }[] = [
  { tr: "Keşfet & sahiplen", en: "Discover & adopt", cards: [
    { file: "07-discover", tr: { title: "Tüm ilanları keşfet", description: "Kedi, köpek ve kuş ilanlarını tek akışta; tür, konum ve ihtiyaç bilgileriyle hızlıca filtrelemeyi tasarladım. Kullanıcı hangi dostun yaşamına uygun olduğunu daha ilk ekranda anlayabiliyor." }, en: { title: "Access every listing in one place", description: "I designed one calm discovery flow for cat, dog and bird listings, with useful filters for type, location and needs. It helps people understand compatibility before a conversation even begins." } },
    { file: "08-communities", tr: { title: "Güvendiğin toplulukları bul", description: "İlanların arkasındaki toplulukları görünür kılan bu akış, kullanıcıların yalnızca bir profil değil, sahiplendirme sürecinde destek olacak güvenilir bir ağ bulmasını sağlıyor." }, en: { title: "Find communities you can trust", description: "This flow makes the communities behind each listing visible, so people find more than a profile: they find a reliable support network for the adoption journey." } },
    { file: "09-favorites", tr: { title: "Favorilerine ekle, sonra karar ver", description: "Acele karar vermek yerine kullanıcıların ilgisini çeken ilanları kaydetmesini, detayları yeniden incelemesini ve doğru zamanda iletişime geçmesini sağlayan favori deneyimini kurguladım." }, en: { title: "Save favorites, decide in your own time", description: "I created a considered saving experience that lets people return to the listings they care about, compare details and start a conversation when they are ready." } },
  ] },
  { tr: "İlan ver & sahiplendir", en: "List & rehome", cards: [
    { file: "04-create-listing", tr: { title: "Dostun için ilan oluştur", description: "Evcil hayvanın hikâyesi, ihtiyaçları ve konumu adım adım ekleniyor. Böylece ilan, yalnızca bir fotoğraf değil; doğru adayın karar vermesine yardım eden anlamlı bir profil oluyor." }, en: { title: "Create a listing for your friend", description: "The pet’s story, needs and location are added step by step. The result is not simply a photo—it is a meaningful profile that helps the right person make an informed decision." } },
    { file: "05-listing-manage", tr: { title: "İlanlarını kolayca yönet", description: "Aktif, sahiplendirilen ve yayından kaldırılan ilanları tek merkezde topladım. Kullanıcılar ilan durumlarını ve gelen ilgiyi dağınık mesajlar yerine tek ekrandan yönetebiliyor." }, en: { title: "Manage listings with ease", description: "I brought active, rehomed and removed listings into one clear workspace. Owners can follow status and incoming interest without losing the story across scattered messages." } },
    { file: "06-insights", tr: { title: "İlgiyi takip et, doğru yuvayı bul", description: "Görüntülenme, favori ve mesaj verilerini görünür hâle getirerek ilan sahibinin hangi ilanın ilgi gördüğünü anlamasına ve sahiplendirme yolculuğunu daha bilinçli ilerletmesine yardımcı oldum." }, en: { title: "Track interest, find the right home", description: "By making views, favorites and messages easy to read, I gave listing owners a practical way to understand interest and move the rehoming journey forward with more confidence." } },
  ] },
  { tr: "Topluluğunu yönet", en: "Manage your community", cards: [
    { file: "01-community-manage", tr: { title: "Topluluğunu tek yerden yönet", description: "Toplulukların ilanları, üyeleri ve günlük operasyonları için merkezi bir çalışma alanı tasarladım. Böylece bakım ve sahiplendirme süreci farklı kanallara dağılmadan ilerliyor." }, en: { title: "Run your community from one place", description: "I designed a central workspace for listings, members and everyday operations, keeping care and rehoming work connected instead of spread across disconnected channels." } },
    { file: "02-community-invite", tr: { title: "Ekibini davet et", description: "Yönetici, ekip arkadaşlarını davet ederek sorumlulukları paylaşabiliyor. Bu akış, güveni korurken büyüyen toplulukların birlikte çalışmasını kolaylaştırıyor." }, en: { title: "Invite your team", description: "Community owners can bring trusted teammates into the workflow and share responsibilities. The invitation flow supports growth without losing the confidence that makes collaboration work." } },
    { file: "03-team-manage", tr: { title: "Ekip koordinasyonunu görünür kıl", description: "Ekip üyelerinin yetkilerini, görevlerini ve ortak süreci tek noktada takip etmelerini sağladım; önemli ilanlar ve iletişim anları hiç gözden kaçmıyor." }, en: { title: "Keep your team in sync", description: "I made roles, permissions and shared work visible in one place, so teams can coordinate around important listings and conversations without the important moments slipping through." } },
  ] },
];

export default function YuviaStoryCarousel() {
  const { language } = useLanguage();
  const [journey, setJourney] = useState(0);
  const [step, setStep] = useState(0);
  const reducedMotion = useReducedMotion();
  const tr = language === "tr";
  const cards = journeys[journey].cards;
  const active = cards[step];
  const previous = cards[(step + cards.length - 1) % cards.length];
  const next = cards[(step + 1) % cards.length];
  const copy = active[language];
  const source = (card: Card) => `/work/yuvia/stories/${tr ? `${card.file}.jpg` : `en/${card.file}.png`}`;
  const go = (direction: number) => {
    const target = step + direction;
    if (target >= cards.length) { setJourney((journey + 1) % journeys.length); setStep(0); }
    else if (target < 0) { setJourney((journey + journeys.length - 1) % journeys.length); setStep(cards.length - 1); }
    else setStep(target);
  };

  return (
    <section className="py-16 text-[#F6EFE8]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <p className="text-xs uppercase tracking-[.3em] text-[#E8A96B]">{tr ? "Yuvia ürün hikâyesi" : "Yuvia product story"}</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-[-.06em] md:text-5xl">{tr ? "Her yolculuk, doğru yuvaya çıkar." : "Every journey leads to the right home."}</h2>
        <div className="mt-9 grid grid-cols-3 border-b border-white/10">
          {journeys.map((item, index) => (
            <button type="button" aria-pressed={journey === index} onClick={() => { setJourney(index); setStep(0); }} className={`min-h-16 border-b-2 px-1 py-3 text-left text-[11px] leading-4 transition hover:text-[#E8A96B] focus-visible:outline-2 focus-visible:outline-[#E8A96B] sm:text-sm md:text-base ${journey === index ? "border-[#E8A96B]" : "border-transparent text-[#B8AAB7]"}`} key={item.en}>0{index + 1} · {item[language]}</button>
          ))}
        </div>
        <div className="mt-7 grid items-center gap-7 lg:grid-cols-[1.25fr_.75fr]">
          <div className="relative flex min-h-[470px] flex-col items-center justify-center pb-14 sm:min-h-[630px]">
            <Image src={source(previous)} alt="" width={1122} height={1402} className="absolute left-0 hidden w-64 rounded-3xl opacity-50 lg:block" />
            <AnimatePresence mode="wait">
              <motion.div key={`${language}-${journey}-${step}`} initial={reducedMotion ? false : { opacity: 0, scale: .9, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={reducedMotion ? undefined : { opacity: 0, scale: .95, x: -30, filter: "blur(8px)" }} transition={{ duration: reducedMotion ? 0 : .45 }} className="relative z-10 w-[min(68vw,430px)]">
                <Image src={source(active)} alt={copy.title} width={1122} height={1402} className="w-full rounded-[2rem] shadow-2xl" />
              </motion.div>
            </AnimatePresence>
            <Image src={source(next)} alt="" width={1122} height={1402} className="absolute right-0 hidden w-64 rounded-3xl opacity-50 lg:block" />
            <div className="absolute bottom-0 z-20 flex items-center gap-3">
              <button type="button" aria-label={tr ? "Önceki kart" : "Previous card"} onClick={() => go(-1)} className="grid h-12 w-12 place-items-center rounded-full border border-[#E8A96B]/40 bg-[#211826] text-[#F6EFE8] transition hover:border-[#E8A96B] focus-visible:outline-2 focus-visible:outline-[#E8A96B]"><ChevronLeft /></button>
              <span className="text-xs tracking-[.18em] text-[#E8A96B]">0{step + 1} / 03</span>
              <button type="button" aria-label={tr ? "Sonraki kart" : "Next card"} onClick={() => go(1)} className="grid h-12 w-12 place-items-center rounded-full border border-[#E8A96B]/40 bg-[#211826] text-[#F6EFE8] transition hover:border-[#E8A96B] focus-visible:outline-2 focus-visible:outline-[#E8A96B]"><ChevronRight /></button>
            </div>
          </div>
          <motion.article key={`copy-${language}-${journey}-${step}`} initial={reducedMotion ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : .3 }} className="rounded-[2rem] border border-[#E8A96B]/25 bg-[#211826] p-7 sm:p-8">
            <p className="text-xs tracking-[.24em] text-[#E8A96B]">{tr ? "YOLCULUK" : "JOURNEY"} 0{journey + 1} · {tr ? "ADIM" : "STEP"} 0{step + 1}</p>
            <h3 className="mt-5 text-3xl font-semibold tracking-[-.05em] text-[#F6EFE8]">{copy.title}</h3>
            <p className="mt-5 text-[15px] leading-8 text-[#CFC3CB]">{copy.description}</p>
            <div className="mt-8 border-t border-white/15 pt-5 text-sm text-[#E8A96B]">{tr ? "Yuvia’da daha güvenli, daha görünür bir sahiplendirme deneyimi." : "A safer, more visible adoption experience with Yuvia."}</div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
