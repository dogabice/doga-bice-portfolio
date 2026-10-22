export type Language = "tr" | "en";
export type Localized = Record<Language, string>;

export type ProjectStory = {
  slug: string;
  number: string;
  title: string;
  kind: "website" | "mobile" | "system";
  accent: string;
  liveHref?: string;
  cover?: string;
  screenshots?: { src: string; label: Localized; alt: Localized }[];
  stack: string[];
  copy: Record<Language, {
    category: string;
    status: string;
    headline: string;
    intro: string;
    role: string;
    coverLine: string;
    challenge: string;
    challengeText: string;
    decisions: { title: string; text: string }[];
    showcaseTitle: string;
    showcaseIntro: string;
    systemsTitle: string;
    systemsText: string;
    systems: { title: string; text: string }[];
    closingTitle: string;
    closingText: string;
  }>;
};

export const projectStories: ProjectStory[] = [
  {
    slug: "ala-wellness", number: "02", title: "Studio Alâ", kind: "website", accent: "#D7AF8C",
    liveHref: "https://alawellnessclub.com/", cover: "/work/ala/site-home.png",
    screenshots: [
      { src: "/work/ala/site-home.png", label: { tr: "Marka ve stüdyo deneyimi", en: "Brand and studio experience" }, alt: { tr: "Studio Alâ ana sayfası", en: "Studio Alâ homepage" } },
      { src: "/work/ala/site-schedule.png", label: { tr: "Haftalık ders programı", en: "Weekly class schedule" }, alt: { tr: "Studio Alâ haftalık program ekranı", en: "Studio Alâ weekly schedule" } },
      { src: "/work/ala/site-booking.png", label: { tr: "Pratikten rezervasyona", en: "From practice to booking" }, alt: { tr: "Studio Alâ rezervasyon akışı", en: "Studio Alâ booking flow" } },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Drizzle ORM", "Cloudflare Workers"],
    copy: {
      tr: {
        category: "Stüdyo sitesi · Rezervasyon sistemi", status: "Yayında", headline: "Marka deneyiminden günlük operasyona.",
        intro: "Studio Alâ için iki dilli bir dijital deneyim tasarlayıp geliştirdim. Ziyaretçiler dersleri keşfedip uygun seansa rezervasyon yaparken, ekip takvimi ve başvuruları yönetim panelinden takip edebiliyor.",
        role: "Ürün ve arayüz tasarımı · Web geliştirme · Yönetim paneli", coverLine: "Stüdyonun ritmi, dijitalde de sürüyor.",
        challenge: "Güzel görünen bir site, tek başına rezervasyon sorununu çözmez.",
        challengeText: "Stüdyonun sıcak karakterini aktarırken, ders seçimi ve rezervasyonun gerçekten kolay işlemesi gerekiyordu. Aynı deneyimin arkasında ekip için yönetilebilir bir takvim ve rezervasyon düzeni kurdum.",
        decisions: [
          { title: "Pratiği anlaşılır kıl", text: "Ders türlerini, eğitmenleri ve haftalık akışı ziyaretçinin karar verebileceği açık bir sıraya yerleştirdim." },
          { title: "Rezervasyonu adımlara ayır", text: "Pratik, gün, eğitmen ve saat seçimini tek bir yolculuğa bağladım; onay, iptal ve bekleme listesi durumlarını da ele aldım." },
          { title: "Ekibin işini kolaylaştır", text: "Korumalı yönetim ekranlarında takvim, seans ve rezervasyon takibini aynı operasyon akışında topladım." },
        ],
        showcaseTitle: "Ziyaretçinin gördüğü yüz, ekibin yürüttüğü iş.",
        showcaseIntro: "Marka sayfasından haftalık programa ve rezervasyona uzanan akışı gerçek site ekranları üzerinden inceleyebilirsin.",
        systemsTitle: "Yönetim paneli, stüdyonun günlük işine hizmet ediyor.",
        systemsText: "Kamuya açık sitedeki rezervasyon akışını, ekibin kullandığı korumalı yönetim alanıyla birlikte ele aldım. Böylece ders ve seans bilgileri, rezervasyonlar ve değişiklikler farklı kanallarda kaybolmadan takip edilebiliyor.",
        systems: [
          { title: "Takvim ve seanslar", text: "Ders saatlerini ve seansları düzenlemek için tek çalışma alanı." },
          { title: "Rezervasyon takibi", text: "Başvuruları, doluluk durumlarını ve katılım akışını görünür kılan ekranlar." },
          { title: "Değişiklik yönetimi", text: "İptal ve bekleme listesi gibi durumları operasyonun parçası olarak ele alan yapı." },
        ],
        closingTitle: "İyi deneyim iki tarafta da çalışmalı.",
        closingText: "Studio Alâ’da tasarım kararı, ziyaretçinin kendine uygun pratiği rahatça bulması kadar ekibin günü yönetebilmesiydi. Site, rezervasyon ve yönetim panelini bu bütünlükle geliştirdim.",
      },
      en: {
        category: "Studio website · Booking system", status: "Live", headline: "From brand experience to daily operations.",
        intro: "I designed and built a bilingual digital experience for Studio Alâ. Visitors can discover classes and book a suitable session, while the team follows schedules and reservations in an administration panel.",
        role: "Product and interface design · Web development · Admin panel", coverLine: "The studio's rhythm continues online.",
        challenge: "A beautiful website alone does not solve booking.",
        challengeText: "The site needed to express the studio's warm identity while making class selection and booking genuinely simple. Behind it, I built a manageable schedule and reservation workflow for the team.",
        decisions: [
          { title: "Clarify the practices", text: "I arranged class types, instructors and the weekly schedule in an order that helps visitors make a decision." },
          { title: "Make booking a journey", text: "I connected practice, day, instructor and time selection, including confirmation, cancellation and waitlist states." },
          { title: "Support the team", text: "Protected admin screens bring schedules, sessions and reservations into one operational flow." },
        ],
        showcaseTitle: "What visitors see, and what the team runs.",
        showcaseIntro: "Explore the real site screens from the brand homepage to the weekly schedule and booking flow.",
        systemsTitle: "An admin panel built for everyday studio work.",
        systemsText: "I designed the public booking flow alongside a protected staff workspace, keeping classes, reservations and changes visible in one place.",
        systems: [
          { title: "Schedules and sessions", text: "A shared place to organize class times and sessions." },
          { title: "Reservation tracking", text: "Views that clarify bookings, capacity and participation." },
          { title: "Change management", text: "Cancellation and waitlist states handled as part of normal operations." },
        ],
        closingTitle: "The experience has to work on both sides.",
        closingText: "For Studio Alâ, I made finding a suitable practice easy for visitors while giving the team a clearer way to run the day. The site, booking flow and admin panel were built as one system.",
      },
    },
  },
  {
    slug: "unifymatch", number: "03", title: "UnifyMatch", kind: "website", accent: "#91B9E8",
    liveHref: "https://unifymatch.tech/", cover: "/work/unifymatch/site-process.png",
    screenshots: [
      { src: "/work/unifymatch/site-home.png", label: { tr: "Konumlandırma ve ilk mesaj", en: "Positioning and first message" }, alt: { tr: "UnifyMatch ana sayfası", en: "UnifyMatch homepage" } },
      { src: "/work/unifymatch/site-process.png", label: { tr: "Dört adımlı çalışma modeli", en: "Four-step working model" }, alt: { tr: "UnifyMatch nasıl çalışıyoruz sayfası", en: "UnifyMatch process page" } },
      { src: "/work/unifymatch/site-services.png", label: { tr: "İhtiyaç ve uzmanlık eşleşmesi", en: "Matching needs and expertise" }, alt: { tr: "UnifyMatch hizmetler sayfası", en: "UnifyMatch services page" } },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Spline", "shadcn/ui"],
    copy: {
      tr: {
        category: "B2B teknoloji sitesi", status: "Yayında", headline: "Karmaşık bir hizmeti, anlaşılır bir karara dönüştürmek.",
        intro: "UnifyMatch’in teknoloji danışmanlığı ve çözüm ortaklığı yaklaşımını dijitalde yeniden kurguladım. Kurumların ihtiyacını, çalışma modelini ve uzmanlık alanlarını tek bakışta anlamasını sağlayan bir site tasarlayıp geliştirdim.",
        role: "Bilgi mimarisi · Arayüz tasarımı · Web geliştirme", coverLine: "İhtiyaçtan uygulamaya net bir yol.",
        challenge: "AI ve otomasyon anlatısını, kurumsal bir karar yolculuğuna çevirmek.",
        challengeText: "Farklı hizmet başlıkları tek bir teknoloji listesi gibi göründüğünde ziyaretçi nereden başlayacağını bilemeyebilir. Siteyi hizmetlerden önce problemi ve UnifyMatch’in çalışma biçimini anlatarak yapılandırdım.",
        decisions: [
          { title: "Değer önerisini netleştir", text: "İlk ekranda şirketin teknoloji ihtiyacını doğru uzmanlıkla eşleştirme rolünü görünür kıldım." },
          { title: "Süreci somutlaştır", text: "Analizden uygulama yönetimine uzanan çalışma modelini takip edilebilir bir anlatıya dönüştürdüm." },
          { title: "Uzmanlığı keşfedilir yap", text: "AI, RPA ve diğer alanları sektör ihtiyaçlarıyla ilişkilendiren hizmet mimarisi kurdum." },
        ],
        showcaseTitle: "Her ekran, bir sonraki soruyu yanıtlıyor.",
        showcaseIntro: "Konumlandırma, çalışma modeli ve hizmet keşfini ayrı sayfalar gibi değil, aynı karar yolculuğunun parçaları olarak tasarladım.",
        systemsTitle: "B2B ziyaretçiye doğru sırada bilgi vermek.",
        systemsText: "UnifyMatch bir yazılım ürününden çok bir hizmet ve iş birliği modeli anlatıyor. Bu nedenle deneyimin odağı, ziyaretçinin 'ne yapıyorlar?', 'nasıl çalışıyorlar?' ve 'bana nasıl yardımcı olurlar?' sorularını sırasıyla yanıtlamak oldu.",
        systems: [
          { title: "Konumlandırma", text: "Teknoloji acentası rolünü kısa ve açık bir değer önerisine indirdim." },
          { title: "Güven veren süreç", text: "Çalışma adımlarını ve çözüm ortağı yaklaşımını görünür kıldım." },
          { title: "Harekete geçiş", text: "Hizmet keşfinden görüşme planlamaya uzanan açık bağlantılar kurdum." },
        ],
        closingTitle: "Karmaşıklığı saklamak değil, yön vermek.",
        closingText: "UnifyMatch için görsel dil, hareket ve içerik mimarisi aynı amaca hizmet ediyor: ziyaretçi kendi ihtiyacını tanısın, yaklaşımı anlasın ve doğru görüşmeye güvenle geçsin.",
      },
      en: {
        category: "B2B technology website", status: "Live", headline: "Turn a complex service into a clear decision.",
        intro: "I translated UnifyMatch's technology advisory and partner matching approach into a digital experience. I designed and built a site that helps organizations understand their needs, the working model and the available expertise.",
        role: "Information architecture · Interface design · Web development", coverLine: "A clear path from need to implementation.",
        challenge: "Make AI and automation meaningful in a B2B decision journey.",
        challengeText: "When diverse services look like one long list, visitors may not know where to start. I structured the site around the problem and the working model before the service catalogue.",
        decisions: [
          { title: "Clarify the promise", text: "The first screen makes the partner matching role immediately understandable." },
          { title: "Show the process", text: "I turned the path from analysis to implementation management into a readable story." },
          { title: "Make expertise discoverable", text: "I related AI, RPA and other capabilities to the needs of different organizations." },
        ],
        showcaseTitle: "Each screen answers the next question.",
        showcaseIntro: "Positioning, process and service discovery form one decision journey across the site.",
        systemsTitle: "Give B2B visitors information in the right order.",
        systemsText: "UnifyMatch presents a service and partnership model. I focused the experience on answering what it does, how it works and how it can help a visitor's organization.",
        systems: [
          { title: "Positioning", text: "A concise value proposition for the technology agency role." },
          { title: "Trust in the process", text: "Visible steps and a clear partner evaluation approach." },
          { title: "A next step", text: "Direct paths from service exploration to a conversation." },
        ],
        closingTitle: "Give complexity a direction.",
        closingText: "The visual language, motion and content architecture work together so visitors can recognize their need, understand the approach and move confidently toward a conversation.",
      },
    },
  },
  {
    slug: "e-paw", number: "04", title: "E-Paw", kind: "mobile", accent: "#70D5C8",
    cover: "/epaw/epaw-home.PNG",
    screenshots: [
      { src: "/epaw/epaw-home.PNG", label: { tr: "Bakımın ana ekranı", en: "Care at a glance" }, alt: { tr: "E-Paw ana ekranı", en: "E-Paw home screen" } },
      { src: "/epaw/epaw-pet-details.PNG", label: { tr: "Dijital hayvan profili", en: "Digital pet profile" }, alt: { tr: "E-Paw hayvan detay ekranı", en: "E-Paw pet details" } },
      { src: "/epaw/epaw-appointments.PNG", label: { tr: "Randevu takibi", en: "Appointment tracking" }, alt: { tr: "E-Paw randevular ekranı", en: "E-Paw appointments" } },
      { src: "/epaw/epaw-adoption-flow.PNG", label: { tr: "Sahiplendirme akışı", en: "Adoption flow" }, alt: { tr: "E-Paw sahiplendirme ekranı", en: "E-Paw adoption flow" } },
    ],
    stack: ["React Native", "Expo", "Firebase Auth", "Firestore", "Python", "Flask", "YOLOv8", "OpenCV"],
    copy: {
      tr: {
        category: "Mobil ürün · AI destekli sağlık", status: "Prototip", headline: "Bir evcil hayvanın bakım geçmişini cebine taşımak.",
        intro: "E-Paw’da sağlık kayıtları, aşı geçmişi, randevular ve sahiplendirme akışlarını tek mobil deneyimde bir araya getirdim. Aşı etiketi tanıma fikrini de kayıt girişini kolaylaştıran bir AI akışına dönüştürdüm.",
        role: "Mobil ürün geliştirme · Veri akışı · AI entegrasyonu", coverLine: "Bakım, kayıt ve sahiplendirme bir arada.",
        challenge: "Bakım bilgisi farklı yerlerde kaldığında takip zorlaşıyor.",
        challengeText: "Fiziksel aşı kartları, ayrı randevu notları ve eksik evcil hayvan profilleri günlük bakımın bütününü görmeyi zorlaştırıyor. Mobil akışı bu bilgileri erişilebilir bir hayvan profili çevresinde toplamak için kurguladım.",
        decisions: [
          { title: "Profili merkez al", text: "Kimlik, sağlık ve bakım bilgisini tek hayvan profiline bağladım." },
          { title: "Takibi görünür kıl", text: "Aşı geçmişi ve randevuları, sonraki bakım adımını kolaylaştıracak biçimde düzenledim." },
          { title: "AI’ı somut bir işe ver", text: "Görüntüden aşı etiketi tanıma akışını kayıt güncelleme göreviyle ilişkilendirdim." },
        ],
        showcaseTitle: "Günlük bakımın farklı anları, aynı ürün içinde.",
        showcaseIntro: "Gerçek uygulama ekranları profil, randevu ve sahiplendirme yollarının nasıl birleştiğini gösteriyor.",
        systemsTitle: "Görsel tanımadan düzenli kayda.",
        systemsText: "E-Paw’ın teknik tarafında mobil istemci, Firebase verileri ve görsel işleme API’sini bir araya getirdim. Aşı etiketi fotoğrafı, YOLO tabanlı tanımadan sonra yapılandırılmış sağlık kaydına bağlanacak şekilde tasarlandı.",
        systems: [
          { title: "Mobil veri", text: "Kimlik, hayvan profili ve sağlık kayıtları için Firebase tabanlı yapı." },
          { title: "Görüntü işleme", text: "Flask API ve YOLOv8 ile aşı etiketi tanıma akışı." },
          { title: "Eşleştirme", text: "Sahiplendirmede tercih ve uyumu dikkate alan karar mantığı." },
        ],
        closingTitle: "Teknoloji, bakımın küçük işlerini azaltmalı.",
        closingText: "Bu prototipte AI’ı gösterişli bir ek özellik olarak değil, kayıt tutmayı kolaylaştıran bir araç olarak konumlandırdım. Ürünün geri kalanını da sahiplerin bilgiyi bulması ve sonraki adımı görmesi için sade tuttum.",
      },
      en: {
        category: "Mobile product · AI-assisted health", status: "Prototype", headline: "Bring a pet's care history into your pocket.",
        intro: "In E-Paw I brought health records, vaccinations, appointments and adoption flows into one mobile experience. I shaped the vaccine sticker recognition idea into an AI flow that could simplify record entry.",
        role: "Mobile development · Data flows · AI integration", coverLine: "Care, records and adoption together.",
        challenge: "Care becomes harder to follow when information is scattered.",
        challengeText: "Paper vaccination cards, separate appointment notes and incomplete profiles make it difficult to see the full care picture. I centered the mobile flow on an accessible pet profile.",
        decisions: [
          { title: "Center the profile", text: "Identity, health and care details meet in one pet profile." },
          { title: "Make follow-up clear", text: "Vaccinations and appointments help owners see the next care step." },
          { title: "Give AI a real job", text: "Sticker recognition is connected to the task of updating a health record." },
        ],
        showcaseTitle: "Everyday care moments in one product.",
        showcaseIntro: "Actual app screens show how profiles, appointments and adoption fit together.",
        systemsTitle: "From image recognition to a usable record.",
        systemsText: "I connected the mobile client, Firebase data and an image processing API. The vaccine sticker photo flows through YOLO-based detection toward a structured health entry.",
        systems: [
          { title: "Mobile data", text: "Firebase-backed identity, pet profiles and health records." },
          { title: "Image processing", text: "A Flask API and YOLOv8 sticker recognition flow." },
          { title: "Matching", text: "Decision logic that considers preferences and compatibility in adoption." },
        ],
        closingTitle: "Technology should reduce the small work of care.",
        closingText: "I treated AI as a practical aid to record keeping. The rest of the prototype stays focused on finding information and understanding the next step.",
      },
    },
  },
  {
    slug: "istanbul-vibe-finder", number: "05", title: "Istanbul Vibe Finder", kind: "system", accent: "#E8A96B",
    stack: ["Python", "FastAPI", "FAISS", "Sentence Transformers", "SQLite", "Semantic Search"],
    copy: {
      tr: {
        category: "AI destekli mekân keşfi", status: "Gelişmekte", headline: "Mekânı kategoriyle değil, hisle aramak.",
        intro: "İstanbul’da bir mekân ararken insanlar çoğu zaman kategori değil atmosfer tarif ediyor. Istanbul Vibe Finder’da bu dili anlayıp bağlama uygun önerilere dönüştüren bir keşif deneyimi üzerinde çalışıyorum.",
        role: "AI sistem tasarımı · Backend · Öneri mantığı", coverLine: "Aradığın his, aramanın başlangıcı.",
        challenge: "“Sakin ama sıkıcı olmayan” bir yeri filtreyle bulmak zor.",
        challengeText: "Semt, bütçe ve kategori önemli; ancak sosyal bağlam ve atmosfer çoğu zaman serbest cümlelerle anlatılıyor. Geliştirmekte olduğum sistemin çıkış noktası bu dili aranabilir sinyallere çevirmek.",
        decisions: [
          { title: "Niyeti ayrıştır", text: "Sorgudan semt, amaç, atmosfer ve fiyat beklentisi gibi ipuçlarını çıkar." },
          { title: "İki aramayı birleştir", text: "Anahtar kelime ve vektör benzerliğini birlikte kullanarak adayları bul." },
          { title: "Öneriyi doğrula", text: "Zayıf eşleşmeleri ele, sıralamayı bağlamla iyileştir ve neden önerildiğini anlaşılır kıl." },
        ],
        showcaseTitle: "Bir cümleden açıklanabilir öneriye.",
        showcaseIntro: "Konsept görsel ve aşağıdaki akış tasarımın yönünü anlatıyor; tamamlanmış bir uygulama ekranı veya canlı kullanıcı sonucu değil.",
        systemsTitle: "Arama altyapısı, niyeti anlamak üzerine kurulu.",
        systemsText: "Üzerinde çalıştığım mimaride FastAPI sorguyu karşılıyor; FAISS ve cümle gömüleri semantik adayları bulmak için kullanılıyor. Anahtar kelime araması, yerel veri önbelleği ve doğrulama adımıyla sıralama mantığını geliştirmeyi sürdürüyorum.",
        systems: [
          { title: "Sorgu katmanı", text: "Doğal dili semt, atmosfer ve kullanım amacına ayırma." },
          { title: "Erişim katmanı", text: "FAISS vektör araması ile metin eşleştirmesini birleştirme." },
          { title: "Sıralama katmanı", text: "Adayları bağlam ve benzerliğe göre değerlendirme." },
        ],
        closingTitle: "Daha iyi keşif, daha iyi soru anlamakla başlıyor.",
        closingText: "Istanbul Vibe Finder’da insanın tarif ettiği niyeti anlayan bir keşif sistemi geliştiriyorum. Şu anki çalışma, doğal dil aramasıyla açıklanabilir önerileri tek bir deneyimde birleştirmeye odaklanıyor.",
      },
      en: {
        category: "AI-assisted place discovery", status: "In development", headline: "Search for a place by feeling, not category.",
        intro: "People often describe an atmosphere rather than a venue category. I am developing a discovery experience that interprets that language and turns it into context-aware suggestions.",
        role: "AI system design · Backend · Recommendation logic", coverLine: "The feeling you want becomes the search.",
        challenge: "A filter struggles with 'calm but not boring'.",
        challengeText: "District, budget and category matter, but social context and atmosphere usually arrive in free-form language. The system I am developing translates that language into searchable signals.",
        decisions: [
          { title: "Parse intent", text: "Extract hints like district, purpose, atmosphere and price expectation." },
          { title: "Combine retrieval", text: "Use keyword and vector similarity together to find candidates." },
          { title: "Validate the suggestion", text: "Filter weak matches, improve context ranking and make the reason understandable." },
        ],
        showcaseTitle: "From one sentence to an explainable suggestion.",
        showcaseIntro: "The concept visual and the flow below show the design direction; they are not finished product screens or live user results.",
        systemsTitle: "The search stack starts with understanding intent.",
        systemsText: "In the architecture I am developing, FastAPI receives queries while FAISS and sentence embeddings help retrieve semantic candidates. I am continuing to refine keyword retrieval, local caching and validation for contextual ranking.",
        systems: [
          { title: "Query layer", text: "Separate natural language into place, mood and intent signals." },
          { title: "Retrieval layer", text: "Combine FAISS vector search with text matching." },
          { title: "Ranking layer", text: "Evaluate candidates by context and similarity." },
        ],
        closingTitle: "Better discovery starts with understanding the question.",
        closingText: "I am developing a discovery system that interprets human intent. The current work focuses on bringing natural-language search and explainable suggestions into one experience.",
      },
    },
  },
];

export function getProjectStory(slug: string) {
  const project = projectStories.find((item) => item.slug === slug);
  if (!project) throw new Error(`Unknown project: ${slug}`);
  return project;
}
