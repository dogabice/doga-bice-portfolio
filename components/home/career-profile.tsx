"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/ui/language-provider";
import PageIntro from "@/components/home/page-intro";
import "./career-profile.css";

const experiences = [
  {
    company: "UnifyMatch",
    role: { tr: "Ürün Yöneticisi, Yapay Zekâ Çözümleri", en: "Product Manager, AI Solutions" },
    period: { tr: "2026 – Devam ediyor", en: "2026 – Present" },
    summary: {
      tr: "Şirketlerin iş ihtiyaçlarını ve mevcut süreçlerini analiz ederek uygulanabilir ürün ve yapay zekâ çözüm alanlarını belirliyorum. Müşteri tarafı ile teknik ekipler arasında kapsamı, öncelikleri ve sonraki adımları netleştiriyor; karmaşık teknolojiyi anlaşılır önerilere dönüştürüyorum.",
      en: "I study companies’ needs and existing processes to identify practical product and AI opportunities. I clarify scope, priorities and next steps between clients and technical teams, turning complex technology into understandable proposals.",
    },
  },
  {
    company: "İşinOlacak",
    role: { tr: "Yapay Zekâ Geliştiricisi", en: "AI Developer" },
    period: { tr: "Ağu – Kas 2025", en: "Aug – Nov 2025" },
    summary: {
      tr: "Yapay zekâ bileşenlerini gerçek zamanlı uygulama akışlarıyla birleştiren sistemler üzerinde çalıştım. Ölçeklenebilir backend mimarisi, servisler arası iletişim ve farklı AI bileşenlerinin üretime yakın bir deneyimde birlikte çalışması üzerine deneyim kazandım.",
      en: "I worked on systems that connect AI components with real-time application flows. I gained experience with scalable backend architecture, communication between services and bringing multiple AI components into a production-oriented experience.",
    },
  },
  {
    company: "RagHubs",
    role: { tr: "Yapay Zekâ Asistanı Geliştiricisi", en: "AI Assistant Developer" },
    period: { tr: "Nis – Haz 2025", en: "Apr – Jun 2025" },
    summary: {
      tr: "Belge tabanlı yapay zekâ asistanının yükleme, yönetim ve etkileşim akışlarında çalıştım. API ve RAG bileşenlerinin kullanıcı için tutarlı ve güvenilir bir deneyime dönüşmesine katkıda bulundum.",
      en: "I worked on upload, management and interaction flows for a document-based AI assistant. I helped turn its API and RAG components into a consistent, reliable user experience.",
    },
  },
  {
    company: "Mert Software & Electronics",
    role: { tr: "Backend Geliştiricisi", en: "Backend Developer" },
    period: { tr: "Eyl 2024", en: "Sep 2024" },
    summary: {
      tr: "Stok ve işlem yönetim sistemi için backend servisleri ve API’ler geliştirdim. Veritabanı yapısı, güvenlik ve önbellekleme gibi iş uygulamalarının temel ihtiyaçlarına odaklandım.",
      en: "I built backend services and APIs for a stock and transaction management system. The work focused on core business application needs, including data structures, security and caching.",
    },
  },
  {
    company: "Depixen Software & AI",
    role: { tr: "Yazılım Geliştirici Stajyeri", en: "Software Developer Intern" },
    period: { tr: "Tem – Ağu 2023", en: "Jul – Aug 2023" },
    summary: {
      tr: "UI/UX tasarımlarını duyarlı ve çalışan web arayüzlerine dönüştürdüm. Tasarım detaylarını uygulama kalitesiyle buluşturmayı profesyonel bir yazılım ekibinde deneyimlediğim ilk işimdi.",
      en: "I translated UI/UX designs into responsive, functional web interfaces. It was my first professional experience of bringing design detail and implementation quality together on a software team.",
    },
  },
];

export default function CareerProfile() {
  const { language } = useLanguage();
  const tr = language === "tr";

  return (
    <div className="career-page mx-auto max-w-7xl px-5 pb-24 md:px-8 lg:px-10">
      <div className="career-intro">
        <PageIntro
          number="04"
          label={tr ? "Kariyer yolculuğum" : "My career journey"}
          title={tr ? <>Kariyer <span className="font-serif font-normal italic text-[#E8A96B]">yolculuğum.</span></> : <>My career <span className="font-serif font-normal italic text-[#E8A96B]">journey.</span></>}
          description={tr
            ? "Bilgisayar mühendisliğinden ürün, tasarım ve yapay zekâ çalışmalarına uzanan yolum. Eğitimimi ve bu yolu şekillendiren iş deneyimlerimi burada bir araya getirdim."
            : "From computer engineering to product, design and AI. Here are the studies and roles that shaped the way I work."}
        />
      </div>

      <section className="career-chapter" aria-labelledby="career-education-heading">
        <div className="career-chapter-label"><span>01</span><h2 id="career-education-heading">{tr ? "Eğitim" : "Education"}</h2></div>
        <article className="career-entry career-education">
          <p className="career-period">{tr ? "2025 – Devam ediyor" : "2025 – Present"}</p>
          <div>
            <h3>Anadolu Üniversitesi</h3>
            <p className="career-role">{tr ? "İşletme" : "Business Administration"}</p>
            <p className="career-summary">
              {tr
                ? "2025’ten beri İşletme eğitimimi sürdürüyorum. Teknik ürün çalışmalarımı iş, yönetim ve kullanıcı ihtiyacı perspektifiyle birlikte düşünmeme yardımcı oluyor."
                : "I have been studying Business Administration since 2025. It helps me consider the business, management and user needs behind the technical products I build."}
            </p>
          </div>
        </article>
        <article className="career-entry career-education">
          <p className="career-period">2020 – 2025</p>
          <div>
            <h3>İstanbul Bilgi Üniversitesi</h3>
            <p className="career-role">{tr ? "Bilgisayar Mühendisliği" : "Computer Engineering"}</p>
            <p className="career-summary">
              {tr ? (
                <>
                  Bitirme projemiz <Link href="/projects/e-paw">E-Paw</Link> ile evcil hayvan sağlığı ve sahiplendirmeyi tek bir mobil deneyimde buluşturduk. Projemiz{" "}
                  <a href="https://www.bilgi.edu.tr/en/news/12578/tubitak-support-for-29-projects-carried-out-by-bilgi-students/" target="_blank" rel="noopener noreferrer">TÜBİTAK 2209-A desteği</a>{" "}
                  aldı ve bölümümüzde <a href="https://tr.linkedin.com/posts/do%C4%9Fa-bice-3937881ba_dolu-dolu-ge%C3%A7en-d%C3%B6rt-y%C4%B1l%C4%B1n-ard%C4%B1ndan-i%CC%87stanbul-activity-7355647342072492032-EF6F" target="_blank" rel="noopener noreferrer">Best Senior Design Project</a> ödülüne layık görüldü.
                </>
              ) : (
                <>
                  With our senior project <Link href="/projects/e-paw">E-Paw</Link>, we brought pet health and adoption into one mobile experience. Our project received{" "}
                  <a href="https://www.bilgi.edu.tr/en/news/12578/tubitak-support-for-29-projects-carried-out-by-bilgi-students/" target="_blank" rel="noopener noreferrer">TÜBİTAK 2209-A support</a>{" "}
                  and the <a href="https://tr.linkedin.com/posts/do%C4%9Fa-bice-3937881ba_dolu-dolu-ge%C3%A7en-d%C3%B6rt-y%C4%B1l%C4%B1n-ard%C4%B1ndan-i%CC%87stanbul-activity-7355647342072492032-EF6F" target="_blank" rel="noopener noreferrer">Best Senior Design Project</a> award in our department.
                </>
              )}
            </p>
          </div>
        </article>
      </section>

      <section className="career-chapter" aria-labelledby="career-experience-heading">
        <div className="career-chapter-label"><span>02</span><h2 id="career-experience-heading">{tr ? "Deneyim" : "Experience"}</h2></div>
        <div>
          {experiences.map((experience) => (
            <article className="career-entry" key={experience.company}>
              <p className="career-period">{experience.period[language]}</p>
              <div>
                <h3>{experience.company}</h3>
                <p className="career-role">{experience.role[language]}</p>
                <p className="career-summary">{experience.summary[language]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="career-footer">
        <p>{tr ? "Birlikte iyi bir şey üretelim." : "Let’s make something good together."}</p>
        <Link href="/contact">
          {tr ? "İletişime geç" : "Get in touch"}
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </footer>
    </div>
  );
}
