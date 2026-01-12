// src/i18n.js

export const LANGS = [
  { code: "en", label: "EN" },
  { code: "sk", label: "SK" },
  { code: "de", label: "DE" },
  { code: "ru", label: "RU" },
];

export const translations = {
  en: {
    // Header / Nav
    nav_services: "Services",
    nav_cases: "CONTENT LIBRARY",
    nav_pricing: "SMM Plans",
    nav_contact: "Contact",
    nav_results: "Results",

    // Hero
    hero_kicker: "SOCIAL MEDIA SPECIALIST",
    hero_title_line1: "NOT JUST SMM",
    hero_title_line2: "I BUILD SOCIAL",
    hero_title_line3: "MEDIA THAT WORKS",
    hero_sub: "I create SMM strategies and content that build trust and bring clients.",
    hero_btn_primary: "Discover more",
    hero_btn_secondary: "View services",


    // Sections titles
    section_services_title: "Services",
    section_services_sub: "Only what amplifies your brand in digital reality.",

    section_contact_title: "Contact",
    section_contact_sub:
      "Tell us about your project.",


    // Services
    services_brand_title: "UGC & CREATOR",
    services_brand_desc: "UGC content for brands. Filmed on phone. On-camera presence.",
    services_digital_title: "SMM",
    services_digital_desc:
      "Instagram management. Strategy & content planning.",
    services_smm_title: "VIDEO CONTENT",
    services_smm_desc: "Short-form videos. Simple phone filming.",
    services_strategy_title: "DESIGN & VISUALS",
    services_strategy_desc:
      "Logos, business cards, social visuals.",


    // Cases
    case1_title: "CASE: Beauty Studio",
    case1_client: "Beauty / Skincare",
    case1_result: "From procedure to booking — through visual storytelling.",
    case1_mtext:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    case2_title: "CASE: Price List Nail",
    case2_client: "Nail / Price",
    case2_result: "Premium nail services. Fair pricing.",
    case3_title: "CASE: K.Beauty",
    case3_client: "Beauty / Korean",
    case3_result: "Soft textures. Real results. K-beauty mood.",
    case4_title: "CASE: Nail Studio",
    case4_client: "Beauty / Nail",
    case4_result: "Minimal design for a modern nail studio.",
    case_view_btn: "View case →",

    // Pricing
    pricing_title: "SMM PLANS",
    pricing_subtitle: "Monthly social media management tailored for businesses.",

    pricing_starter_name: "STARTER",
    pricing_starter_tagline: "Basic introduction to SMM",
    pricing_starter_price: "350€",
    pricing_starter_feat_1: "Marketing strategy & analytics",
    pricing_starter_feat_2: "Monthly content plan",
    pricing_starter_feat_3: "60 stories per month",
    pricing_starter_feat_4: "Feed grid design — 9 posts",
    pricing_starter_feat_5: "Copywriting",
    pricing_starter_feat_6: "1 shoot per month",

    pricing_premium_name: "PREMIUM",
    pricing_premium_tagline: "Advanced management",
    pricing_premium_price: "550€",
    pricing_premium_feat_1: "Marketing strategy & analytics",
    pricing_premium_feat_2: "Monthly content plan",
    pricing_premium_feat_3: "90 stories per month (weekends off)",
    pricing_premium_feat_4: "Feed grid design — 12 posts",
    pricing_premium_feat_5: "Copywriting",
    pricing_premium_feat_6: "2 shoots per month",

    pricing_pro_name: "PRO",
    pricing_pro_tagline: "Full-scale brand growth",
    pricing_pro_price: "750€",
    pricing_pro_feat_1: "Marketing strategy & analytics",
    pricing_pro_feat_2: "Monthly content plan",
    pricing_pro_feat_3: "140+ stories per month",
    pricing_pro_feat_4: "Feed grid design — 15 posts + advanced/animated reels",
    pricing_pro_feat_5: "Copywriting",
    pricing_pro_feat_6: "3+ shoots per month",

    pricing_btn: "Get started",

    pricing_additional_title: "ADDITIONAL SUPPORT",
    pricing_additional_desc: "I also help with visual tasks, simple design and video edits when needed.\n\nFor specific requests or one-off tasks — feel free to reach out.",
    pricing_additional_btn: "Discuss your project →",

    // Contact
    contact_start_title: "Start a project",
    contact_start_text:
      "Brief us: industry, goals, timelines. We’ll come back with a proposal and structure.",

    contact_form_name_placeholder: "Name / brand",
    contact_form_email_placeholder: "E-mail",
    contact_form_message_placeholder:
      "Short project description (in any language you prefer)",
    contact_form_submit: "Send request →",
    contact_form_submit_loading: "Sending…",
    contact_form_submit_success: "We'll be in touch",

    // Content Library
    content_library_title: "CONTENT LIBRARY",
    content_library_subtitle: "Visual systems. Stories. Reels that convert.",
    content_library_tab_visual: "Visual",
    content_library_tab_stories: "Stories",
    content_library_tab_reels: "Reels",

    // KAIRUXS Results
    results_title: "KAIRUXS RESULTS",
    results_subtitle: "Real metrics from our clients — numbers behind digital branding.",
    
    // Case 1: Beauty Salon
    results_case1_label: "Beauty Salon",
    results_case1_period: "3 months collaboration",
    results_case1_kpi1_label: "Reach",
    results_case1_kpi2_label: "Engagement",
    results_case1_description: "In 3 months we grew the brand's reach by 287% and engagement by 154% through futuristic motion content and targeted campaigns.",
    
    // Case 2: Korean Cosmetic
    results_case2_label: "Korean Cosmetic",
    results_case2_period: "8 months collaboration",
    results_case2_kpi1_label: "Leads",
    results_case2_kpi2_label: "Conversion",
    results_case2_description: "Premium K-beauty brand grew lead generation by 425% and increased conversion by 89% through educational content and a refined, minimalist visual system.",
    
    // Case 3: Perfume Bar
    results_case3_label: "Perfume Bar",
    results_case3_period: "2 months collaboration",
    results_case3_kpi1_label: "CTR",
    results_case3_kpi2_label: "Views",
    results_case3_description: "Created visual content and social media presence for a perfume bar. Helped customers better understand the products and encouraged offline visits.",
    
    // Case 4: Personal Brand
    results_case4_label: "Personal Brand",
    results_case4_period: "3 months collaboration",
    results_case4_kpi1_label: "Telegram",
    results_case4_kpi2_label: "Trust",
    results_case4_description: "Built a clear content structure and communication style for a personal brand in crypto. Focused on explanations, trust and consistency across platforms.",

    contact_quick_title: "Quick contact",
    contact_note_label: "Mode:",
    contact_note_value: "project-based / retainer / consulting",

    // Footer
    footer_right: "FUTURISTIC LUXE / AESTHETIC",
  },

  // Русский
  ru: {
    nav_services: "Услуги",
    nav_cases: "Кейсы",
    nav_pricing: "Пакеты",
    nav_contact: "Контакты",
    nav_results: "Результаты",

    hero_kicker: "SOCIAL MEDIA SPECIALIST",
    hero_title_line1: "НЕ ПРОСТО SMM",
    hero_title_line2: "Я СОЗДАЮ",
    hero_title_line3: "СОЦСЕТИ, КОТОРЫЕ РАБОТАЮТ",
    hero_sub: "Я создаю SMM-стратегии и контент, которые строят доверие и приводят клиентов.",
    hero_btn_primary: "Узнать больше",
    hero_btn_secondary: "Посмотреть услуги",



    section_services_title: "Услуги",
    section_services_sub: "Только то, что усиливает ваш бренд в цифровой реальности.",

    section_contact_title: "Контакты",
    section_contact_sub: "Расскажите нам о вашем проекте.",


    services_brand_title: "UGC & CREATOR",
    services_brand_desc: "UGC-контент для брендов. Съёмка на телефон. Работа в кадре.",
    services_digital_title: "SMM",
    services_digital_desc: "Ведение Instagram. Стратегия и контент-планирование.",
    services_smm_title: "ВИДЕОКОНТЕНТ",
    services_smm_desc: "Короткие видео. Простая съёмка на телефон.",
    services_strategy_title: "ДИЗАЙН И ВИЗУАЛ",
    services_strategy_desc: "Логотипы, визитки, визуалы для соцсетей.",


    case1_title: "CASE: LUXE VOID",
    case1_client: "Beauty / Skincare",
    case1_result:
      "Премиальная digital-айдентика и система контента для глобального запуска.",
    case2_title: "CASE: CHROME SIGNAL",
    case2_client: "Tech / SaaS",
    case2_result:
      "Футуристическая бренд-платформа с 3D-металлом, адаптивными визуалами и social-экосистемой.",
    case3_title: "CASE: METAL VERSE",
    case3_client: "Web3 / Community",
    case3_result:
      "Визуальный язык для метавселенной: 3D-манекены, liquid chrome и модульные паттерны.",
    case_view_btn: "Смотреть кейс →",

    pricing_title: "SMM ПЛАНЫ",
    pricing_subtitle: "Ежемесячное ведение соцсетей для бизнеса.",

    pricing_starter_name: "STARTER",
    pricing_starter_tagline: "Базовое введение в SMM",
    pricing_starter_price: "350€",
    pricing_starter_feat_1: "Маркетинговая стратегия и аналитика",
    pricing_starter_feat_2: "Ежемесячный контент-план",
    pricing_starter_feat_3: "60 сторис в месяц",
    pricing_starter_feat_4: "Дизайн ленты — 9 постов",
    pricing_starter_feat_5: "Копирайтинг",
    pricing_starter_feat_6: "1 съёмка в месяц",

    pricing_premium_name: "PREMIUM",
    pricing_premium_tagline: "Продвинутое ведение",
    pricing_premium_price: "550€",
    pricing_premium_feat_1: "Маркетинговая стратегия и аналитика",
    pricing_premium_feat_2: "Ежемесячный контент-план",
    pricing_premium_feat_3: "90 сторис в месяц (выходные отдых)",
    pricing_premium_feat_4: "Дизайн ленты — 12 постов",
    pricing_premium_feat_5: "Копирайтинг",
    pricing_premium_feat_6: "2 съёмки в месяц",

    pricing_pro_name: "PRO",
    pricing_pro_tagline: "Полноценный рост бренда",
    pricing_pro_price: "750€",
    pricing_pro_feat_1: "Маркетинговая стратегия и аналитика",
    pricing_pro_feat_2: "Ежемесячный контент-план",
    pricing_pro_feat_3: "140+ сторис в месяц",
    pricing_pro_feat_4: "Дизайн ленты — 15 постов + продвинутые/анимированные reels",
    pricing_pro_feat_5: "Копирайтинг",
    pricing_pro_feat_6: "3+ съёмки в месяц",

    pricing_btn: "Начать",

    pricing_additional_title: "ДОПОЛНИТЕЛЬНАЯ ПОДДЕРЖКА",
    pricing_additional_desc: "Я также помогаю с визуальными задачами, простым дизайном и монтажом видео при необходимости.\n\nДля конкретных запросов или разовых задач — свяжитесь со мной.",
    pricing_additional_btn: "Обсудить проект →",

    contact_start_title: "Начать проект",
    contact_start_text:
      "Опишите проект: ниша, цели, сроки. Мы вернёмся с предложением и структурой.",

    contact_form_name_placeholder: "Имя / бренд",
    contact_form_email_placeholder: "E-mail",
    contact_form_message_placeholder:
      "Краткое описание проекта (на любом удобном языке)",
    contact_form_submit: "Отправить заявку →",
    contact_form_submit_loading: "Отправляем…",
    contact_form_submit_success: "Мы с вами свяжемся",

    // Content Library
    content_library_title: "Кейсы",
    content_library_subtitle: "Визуальные системы. Сторис. Рилсы, которые конвертируют.",
    content_library_tab_visual: "Визуал",
    content_library_tab_stories: "Сторис",
    content_library_tab_reels: "Рилсы",

    // KAIRUXS Results
    results_title: "РЕЗУЛЬТАТЫ KAIRUXS",
    results_subtitle: "Реальные метрики наших клиентов — цифры за цифровым брендингом.",
    
    // Case 1: Beauty Salon
    results_case1_label: "Салон красоты",
    results_case1_period: "3 месяца сотрудничества",
    results_case1_kpi1_label: "Охват",
    results_case1_kpi2_label: "Вовлеченность",
    results_case1_description: "За 3 месяца мы увеличили охват бренда на 287% и вовлеченность на 154% благодаря футуристичному motion-контенту и таргетированным кампаниям.",
    
    // Case 2: Korean Cosmetic
    results_case2_label: "Корейская косметика",
    results_case2_period: "8 месяцев сотрудничества",
    results_case2_kpi1_label: "Лиды",
    results_case2_kpi2_label: "Конверсия",
    results_case2_description: "Премиальный K-beauty бренд увеличил генерацию лидов на 425% и конверсию на 89% благодаря образовательному контенту и утончённой минималистичной визуальной системе.",
    
    // Case 3: Perfume Bar
    results_case3_label: "Парфюмерный бар",
    results_case3_period: "2 месяца сотрудничества",
    results_case3_kpi1_label: "CTR",
    results_case3_kpi2_label: "Просмотры",
    results_case3_description: "Создали визуальный контент и присутствие в социальных сетях для парфюмерного бара. Помогли клиентам лучше понять продукты и стимулировали оффлайн-визиты.",
    
    // Case 4: Personal Brand
    results_case4_label: "Личный бренд",
    results_case4_period: "3 месяца сотрудничества",
    results_case4_kpi1_label: "Telegram",
    results_case4_kpi2_label: "Доверие",
    results_case4_description: "Построили чёткую структуру контента и стиль коммуникации для личного бренда в крипто. Фокус на объяснениях, доверии и последовательности на всех платформах.",

    contact_quick_title: "Быстрый контакт",
    contact_note_label: "Mode:",
    contact_note_value: "project-based / retainer / consulting",

    footer_right: "FUTURISTIC LUXE / AESTHETIC",
  },

  // Словацкий (черновой — лучше дать носителю вычитать позже)
  sk: {
    nav_services: "Služby",
    nav_cases: "Príklady",
    nav_pricing: "Balíčky",
    nav_contact: "Kontakt",
    nav_results: "Výsledky",



    hero_kicker: "Špecialista sociálnych médií",
    hero_title_line1: "NIE JE TO LEN SMM",
    hero_title_line2: "TVORÍM SOCIÁLNE",
    hero_title_line3: "MÉDIÁ, KTORÉ FUNGUJÚ",
    hero_sub: "Vytváram SMM stratégie a obsah, ktoré budujú dôveru a prinášajú klientov.",
    hero_btn_primary: "Zistiť viac",
    hero_btn_secondary: "Pozrieť služby",


    section_services_title: "Služby",
    section_services_sub: "Len to, čo posilňuje vašu značku v digitálnej realite.",

    section_contact_title: "Kontakt",
    section_contact_sub: "Povedzte nám o svojom projekte.",


    services_brand_title: "UGC & CREATOR",
    services_brand_desc: "UGC obsah pre značky. Natáčané na telefón. Práca pred kamerou.",
    services_digital_title: "SMM",
    services_digital_desc: "Správa Instagramu. Stratégia a plánovanie obsahu.",
    services_smm_title: "VIDEO OBSAH",
    services_smm_desc: "Krátke videá. Jednoduché natáčanie na telefón.",
    services_strategy_title: "DIZAJN & VIZUÁLY",
    services_strategy_desc: "Logá, vizitky, vizuály pre sociálne siete.",

    pricing_title: "SMM PLÁNY",
    pricing_subtitle: "Mesačné spravovanie sociálnych médií pre podnikanie.",

    pricing_starter_name: "STARTER",
    pricing_starter_tagline: "Základy SMM",
    pricing_starter_price: "350€",
    pricing_starter_feat_1: "Marketingová stratégia a analytika",
    pricing_starter_feat_2: "Mesačný plán obsahu",
    pricing_starter_feat_3: "60 stories mesačne",
    pricing_starter_feat_4: "Dizajn feedu — 9 príspevkov",
    pricing_starter_feat_5: "Copywriting",
    pricing_starter_feat_6: "1 natáčanie mesačne",

    pricing_premium_name: "PREMIUM",
    pricing_premium_tagline: "Pokročilá správa",
    pricing_premium_price: "550€",
    pricing_premium_feat_1: "Marketingová stratégia a analytika",
    pricing_premium_feat_2: "Mesačný plán obsahu",
    pricing_premium_feat_3: "90 stories mesačne (víkendy voľno)",
    pricing_premium_feat_4: "Dizajn feedu — 12 príspevkov",
    pricing_premium_feat_5: "Copywriting",
    pricing_premium_feat_6: "2 natáčanie mesačne",

    pricing_pro_name: "PRO",
    pricing_pro_tagline: "Plnohodnotný rast značky",
    pricing_pro_price: "750€",
    pricing_pro_feat_1: "Marketingová stratégia a analytika",
    pricing_pro_feat_2: "Mesačný plán obsahu",
    pricing_pro_feat_3: "140+ stories mesačne",
    pricing_pro_feat_4: "Dizajn feedu — 15 príspevkov + pokročilé/animované reels",
    pricing_pro_feat_5: "Copywriting",
    pricing_pro_feat_6: "3+ natáčanie mesačne",

    pricing_btn: "Začať",

    pricing_additional_title: "DODATOČNÁ PODPORA",
    pricing_additional_desc: "Pomáham aj s vizuálnymi úlohami, jednoduchým dizajnom a strihom videa pri potrebe.\n\nPre konkrétne požiadavky alebo jednorazové úlohy — neváhajte ma kontaktovať.",
    pricing_additional_btn: "Prediskutovať projekt →",

    contact_start_title: "Začať projekt",
    contact_start_text:
      "Pošlite nám brief: odvetvie, ciele, časový plán. Ozveme sa s návrhom a štruktúrou.",

    contact_form_name_placeholder: "Meno / značka",
    contact_form_email_placeholder: "E-mail",
    contact_form_message_placeholder:
      "Stručný popis projektu (v ľubovoľnom jazyku)",
    contact_form_submit: "Odoslať dopyt →",
    contact_form_submit_loading: "Odosielajú sa…",
    contact_form_submit_success: "Ozveme sa vám",

    // Content Library
    content_library_title: "Príklady",
    content_library_subtitle: "Vizuálne systémy. Stories. Reels, ktoré konvertujú.",
    content_library_tab_visual: "Vizuál",
    content_library_tab_stories: "Stories",
    content_library_tab_reels: "Reels",

    // KAIRUXS Results
    results_title: "VÝSLEDKY KAIRUXS",
    results_subtitle: "Reálne metriky našich klientov — čísla za digitálnym brandingom.",
    
    // Case 1: Beauty Salon
    results_case1_label: "Salón krásy",
    results_case1_period: "3 mesiace spolupráce",
    results_case1_kpi1_label: "Dosah",
    results_case1_kpi2_label: "Zapojenie",
    results_case1_description: "Za 3 mesiace sme zvýšili dosah značky o 287% a zapojenie o 154% prostredníctvom futuristického motion obsahu a cielených kampaní.",
    
    // Case 2: Korean Cosmetic
    results_case2_label: "Kórejská kozmetika",
    results_case2_period: "8 mesiacov spolupráce",
    results_case2_kpi1_label: "Leady",
    results_case2_kpi2_label: "Konverzia",
    results_case2_description: "Prémiová K-beauty značka zvýšila generovanie leadov o 425% a konverziu o 89% prostredníctvom vzdelávacieho obsahu a rafinovaného, minimalistického vizuálneho systému.",
    
    // Case 3: Perfume Bar
    results_case3_label: "Parfumový bar",
    results_case3_period: "2 mesiace spolupráce",
    results_case3_kpi1_label: "CTR",
    results_case3_kpi2_label: "Zobrazenia",
    results_case3_description: "Vytvorili sme vizuálny obsah a prítomnosť na sociálnych sieťach pre parfumový bar. Pomohli sme zákazníkom lepšie pochopiť produkty a povzbudili offline návštevy.",
    
    // Case 4: Personal Brand
    results_case4_label: "Osobná značka",
    results_case4_period: "3 mesiace spolupráce",
    results_case4_kpi1_label: "Telegram",
    results_case4_kpi2_label: "Dôvera",
    results_case4_description: "Vytvorili sme jasnú štruktúru obsahu a komunikačný štýl pre osobnú značku v krypto. Zameranie na vysvetlenia, dôveru a konzistentnosť naprieč platformami.",

    contact_quick_title: "Rýchly kontakt",
    contact_note_label: "Mode:",
    contact_note_value: "project-based / retainer / consulting",

    footer_right: "FUTURISTIC LUXE / AESTHETIC",
  },

  // Немецкий (тоже как черновик)
  de: {
    nav_services: "Services",
    nav_cases: "Content Library",
    nav_pricing: "SMM-Pakete",
    nav_contact: "Kontakt",
    nav_results: "Ergebnisse",


    hero_kicker: "Social Media Spezialist",
    hero_title_line1: "NICHT NUR SMM",
    hero_title_line2: "ICH BAUE SOCIAL",
    hero_title_line3: "MEDIA, DIE FUNKTIONIEREN",
    hero_sub: "Ich entwickle SMM-Strategien und Inhalte, die Vertrauen aufbauen und Kunden gewinnen.",
    hero_btn_primary: "Mehr entdecken",
    hero_btn_secondary: "Services ansehen",


    section_services_title: "Services",
    section_services_sub: "Nur das, was Ihre Marke in der digitalen Realität verstärkt.",

    section_contact_title: "Kontakt",
    section_contact_sub: "Erzählen Sie uns von Ihrem Projekt.",


    services_brand_title: "UGC & CREATOR",
    services_brand_desc: "UGC-Content für Marken. Mit dem Smartphone gefilmt. Präsenz vor der Kamera.",
    services_digital_title: "SMM",
    services_digital_desc: "Instagram-Management. Strategie und Content-Planung.",
    services_smm_title: "VIDEO CONTENT",
    services_smm_desc: "Kurzvideos. Einfache Smartphone-Aufnahmen.",
    services_strategy_title: "DESIGN & VISUALS",
    services_strategy_desc: "Logos, Visitenkarten, Visuals für Social Media.",

    pricing_title: "SMM PLÄNE",
    pricing_subtitle: "Monatliches Social-Media-Management für Unternehmen.",

    pricing_starter_name: "STARTER",
    pricing_starter_tagline: "Grundlagen des SMM",
    pricing_starter_price: "350€",
    pricing_starter_feat_1: "Marketingstrategie & Analytik",
    pricing_starter_feat_2: "Monatlicher Content-Plan",
    pricing_starter_feat_3: "60 Stories pro Monat",
    pricing_starter_feat_4: "Feed-Design — 9 Beiträge",
    pricing_starter_feat_5: "Copywriting",
    pricing_starter_feat_6: "1 Shooting pro Monat",

    pricing_premium_name: "PREMIUM",
    pricing_premium_tagline: "Erweitertes Management",
    pricing_premium_price: "550€",
    pricing_premium_feat_1: "Marketingstrategie & Analytik",
    pricing_premium_feat_2: "Monatlicher Content-Plan",
    pricing_premium_feat_3: "90 Stories pro Monat (Wochenenden frei)",
    pricing_premium_feat_4: "Feed-Design — 12 Beiträge",
    pricing_premium_feat_5: "Copywriting",
    pricing_premium_feat_6: "2 Shootings pro Monat",

    pricing_pro_name: "PRO",
    pricing_pro_tagline: "Umfassendes Markenwachstum",
    pricing_pro_price: "750€",
    pricing_pro_feat_1: "Marketingstrategie & Analytik",
    pricing_pro_feat_2: "Monatlicher Content-Plan",
    pricing_pro_feat_3: "140+ Stories pro Monat",
    pricing_pro_feat_4: "Feed-Design — 15 Beiträge + fortgeschrittene/animierte Reels",
    pricing_pro_feat_5: "Copywriting",
    pricing_pro_feat_6: "3+ Shootings pro Monat",

    pricing_btn: "Loslegen",

    pricing_additional_title: "ZUSÄTZLICHE UNTERSTÜTZUNG",
    pricing_additional_desc: "Ich helfe auch bei visuellen Aufgaben, einfachem Design und Videobearbeitung bei Bedarf.\n\nFür spezielle Anfragen oder einmalige Aufgaben — kontaktieren Sie mich gerne.",
    pricing_additional_btn: "Projekt besprechen →",

    contact_start_title: "Projekt starten",
    contact_start_text:
      "Senden Sie uns ein Briefing: Branche, Ziele, Zeitrahmen. Wir melden uns mit einem Vorschlag und einer klaren Struktur.",

    contact_form_name_placeholder: "Name / Marke",
    contact_form_email_placeholder: "E-Mail",
    contact_form_message_placeholder:
      "Kurze Projektbeschreibung (in jeder gewünschten Sprache)",
    contact_form_submit: "Anfrage senden →",
    contact_form_submit_loading: "Wird gesendet…",
    contact_form_submit_success: "Wir melden uns",

    // Content Library
    content_library_title: "Content Library",
    content_library_subtitle: "Visuelle Systeme. Stories. Reels, die konvertieren.",
    content_library_tab_visual: "Visuell",
    content_library_tab_stories: "Stories",
    content_library_tab_reels: "Reels",

    // KAIRUXS Results
    results_title: "KAIRUXS ERGEBNISSE",
    results_subtitle: "Echte Kennzahlen unserer Kunden — Zahlen hinter digitalem Branding.",
    
    // Case 1: Beauty Salon
    results_case1_label: "Schönheitssalon",
    results_case1_period: "3 Monate Zusammenarbeit",
    results_case1_kpi1_label: "Reichweite",
    results_case1_kpi2_label: "Engagement",
    results_case1_description: "In 3 Monaten haben wir die Reichweite der Marke um 287% und das Engagement um 154% durch futuristischen Motion-Content und gezielte Kampagnen gesteigert.",
    
    // Case 2: Korean Cosmetic
    results_case2_label: "Koreanische Kosmetik",
    results_case2_period: "8 Monate Zusammenarbeit",
    results_case2_kpi1_label: "Leads",
    results_case2_kpi2_label: "Konversion",
    results_case2_description: "Premium K-Beauty-Marke steigerte Lead-Generierung um 425% und Konversion um 89% durch Bildungsinhalte und ein raffiniertes, minimalistisches visuelles System.",
    
    // Case 3: Perfume Bar
    results_case3_label: "Parfümbar",
    results_case3_period: "2 Monate Zusammenarbeit",
    results_case3_kpi1_label: "CTR",
    results_case3_kpi2_label: "Aufrufe",
    results_case3_description: "Erstellten visuellen Content und Social-Media-Präsenz für eine Parfümbar. Halfen Kunden, die Produkte besser zu verstehen und ermutigten zu Offline-Besuchen.",
    
    // Case 4: Personal Brand
    results_case4_label: "Persönliche Marke",
    results_case4_period: "3 Monate Zusammenarbeit",
    results_case4_kpi1_label: "Telegram",
    results_case4_kpi2_label: "Vertrauen",
    results_case4_description: "Bauten eine klare Content-Struktur und Kommunikationsstil für eine persönliche Marke in Krypto auf. Fokus auf Erklärungen, Vertrauen und Konsistenz über Plattformen hinweg.",

    contact_quick_title: "Schnellkontakt",
    contact_note_label: "Mode:",
    contact_note_value: "project-based / retainer / consulting",

    footer_right: "FUTURISTIC LUXE / AESTHETIC",
  },
};
