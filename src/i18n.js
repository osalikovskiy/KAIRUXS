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
    services_brand_desc: "Authentic mobile content built for brand trust. On-camera presence that feels native — not staged.",
    services_digital_title: "SMM",
    services_digital_desc: "End-to-end Instagram management. Strategy, content planning, and consistent execution aligned with your brand.",
    services_smm_title: "VIDEO CONTENT",
    services_smm_desc: "Short-form video for Reels and Stories. Optimized for reach, retention, and platform algorithms.",
    services_strategy_title: "DESIGN & VISUALS",
    services_strategy_desc: "Visual identity for social media — logos, brand kits, and feed aesthetics that communicate before a word is read.",


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

    pricing_badge: "BEST VALUE",
    pricing_btn: "Get started",

    pricing_additional_title: "ADDITIONAL SUPPORT",
    pricing_additional_desc: "I also help with visual tasks, simple design and video edits when needed.\n\nFor specific requests or one-off tasks — feel free to reach out.",
    pricing_additional_desc_short: "Need something outside the plans?",
    pricing_additional_desc_full: "Visual tasks, one-off shoots, design edits — anything that doesn't fit a package. Reach out and we'll figure it out.",
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
    contact_form_submit_error: "Something went wrong. Please try again.",

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

    // Case 5: Fitness Coach
    results_case5_label: "Fitness Coach",
    results_case5_period: "2 months collaboration",
    results_case5_kpi1_label: "Views",
    results_case5_kpi2_label: "Reels",
    results_case5_description: "Built a strong content system and visual identity for a fitness coach. Increased profile visibility, audience engagement and consistency through Reels and structured content.",

    contact_quick_title: "Quick contact",
    contact_note_label: "Mode:",
    contact_note_value: "project-based / retainer / consulting",

    // About
    about_kicker: "About me",
    about_name: "KIRA",
    about_role: "SMM Specialist · Content Creator · UGC",
    about_quote: "I don't just run accounts. I build brands people actually stop and look at.",
    about_bio: "From Kyiv. Since 2020 I've built social presence for brands across UA, SK and DE.",
    about_stat1_value: "3+",
    about_stat1_label: "Years",
    about_stat2_value: "7",
    about_stat2_label: "Industries",
    about_stat3_value: "4",
    about_stat3_label: "Countries",
    about_cta: "Let's work together →",

    // Footer
    footer_right: "FUTURISTIC LUXE / AESTHETIC",
    footer_cta_kicker: "Ready to grow?",
    footer_cta_line1: "LET'S CREATE",
    footer_cta_line2: "SOMETHING REAL",
    footer_cta_btn: "Start a project →",
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
    services_brand_desc: "Аутентичный мобильный контент для укрепления доверия к бренду. Работа в кадре — нативно, без постановки.",
    services_digital_title: "SMM",
    services_digital_desc: "Полное ведение Instagram. Стратегия, контент-план и системное исполнение в рамках вашего бренда.",
    services_smm_title: "ВИДЕОКОНТЕНТ",
    services_smm_desc: "Короткие видео для Reels и Stories. Оптимизировано под охваты, удержание и алгоритмы платформ.",
    services_strategy_title: "ДИЗАЙН И ВИЗУАЛ",
    services_strategy_desc: "Визуальная идентичность для соцсетей — логотипы, брендкиты и эстетика ленты, которая говорит раньше слов.",


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
    case4_title: "CASE: SIGNAL FLOW",
    case4_client: "Personal Brand / Crypto",
    case4_result:
      "Контент-система и визуальная подача для личного бренда с упором на доверие и ясность.",
    case1_mtext:
      "Проектный текст кейса можно расширить позже, когда раздел кейсов снова вернется в интерфейс.",
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

    pricing_badge: "ЛУЧШИЙ ВЫБОР",
    pricing_btn: "Начать",

    pricing_additional_title: "ДОПОЛНИТЕЛЬНАЯ ПОДДЕРЖКА",
    pricing_additional_desc: "Я также помогаю с визуальными задачами, простым дизайном и монтажом видео при необходимости.\n\nДля конкретных запросов или разовых задач — свяжитесь со мной.",
    pricing_additional_desc_short: "Нужно что-то вне планов?",
    pricing_additional_desc_full: "Визуальные задачи, разовые съёмки, правки дизайна — всё, что не входит в пакет. Напишите, и разберёмся.",
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
    contact_form_submit_error: "Что-то пошло не так. Попробуйте еще раз.",

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

    // Case 5: Fitness Coach
    results_case5_label: "Фитнес-коуч",
    results_case5_period: "2 месяца сотрудничества",
    results_case5_kpi1_label: "Просмотры",
    results_case5_kpi2_label: "Reels",
    results_case5_description: "Построили сильную контент-систему и визуальную идентичность для фитнес-коуча. Увеличили видимость профиля, вовлечённость аудитории и консистентность через Reels и структурированный контент.",

    contact_quick_title: "Быстрый контакт",
    contact_note_label: "Mode:",
    contact_note_value: "project-based / retainer / consulting",

    // About
    about_kicker: "Обо мне",
    about_name: "KIRA",
    about_role: "SMM-специалист · Контент-криэйтор · UGC",
    about_quote: "Я не просто веду аккаунты. Я строю бренды, на которых люди останавливаются в ленте.",
    about_bio: "Из Киева. С 2020 года развиваю присутствие брендов в соцсетях по всей UA, SK и DE.",
    about_stat1_value: "3+",
    about_stat1_label: "Лет опыта",
    about_stat2_value: "7",
    about_stat2_label: "Отраслей",
    about_stat3_value: "4",
    about_stat3_label: "Страны",
    about_cta: "Начать работу →",

    footer_right: "FUTURISTIC LUXE / AESTHETIC",
    footer_cta_kicker: "Готовы к росту?",
    footer_cta_line1: "ДАВАЙТЕ СОЗДАДИМ",
    footer_cta_line2: "ЧТО-ТО НАСТОЯЩЕЕ",
    footer_cta_btn: "Начать проект →",
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
    services_brand_desc: "Autentický mobilný obsah pre budovanie dôvery k značke. Prirodzená práca pred kamerou — bez inscenovania.",
    services_digital_title: "SMM",
    services_digital_desc: "Kompletná správa Instagramu. Stratégia, plán obsahu a konzistentná realizácia v duchu vašej značky.",
    services_smm_title: "VIDEO OBSAH",
    services_smm_desc: "Krátke videá pre Reels a Stories. Optimalizované pre dosah, udržanie pozornosti a algoritmy platforiem.",
    services_strategy_title: "DIZAJN & VIZUÁLY",
    services_strategy_desc: "Vizuálna identita pre sociálne siete — logá, brand kity a estetika feedu, ktorá hovorí skôr než slová.",

    case1_title: "CASE: Beauty Studio",
    case1_client: "Beauty / Skincare",
    case1_result: "From procedure to booking — through visual storytelling.",
    case1_mtext:
      "Case text can be expanded later if the legacy portfolio section returns.",
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

    pricing_badge: "NAJLEPŠIA VOĽBA",
    pricing_btn: "Začať",

    pricing_additional_title: "DODATOČNÁ PODPORA",
    pricing_additional_desc: "Pomáham aj s vizuálnymi úlohami, jednoduchým dizajnom a strihom videa pri potrebe.\n\nPre konkrétne požiadavky alebo jednorazové úlohy — neváhajte ma kontaktovať.",
    pricing_additional_desc_short: "Potrebujete niečo mimo plánov?",
    pricing_additional_desc_full: "Vizuálne úlohy, jednorazové natáčania, úpravy dizajnu — čokoľvek, čo nezapadá do balíka. Napíšte a vyriešime to.",
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
    contact_form_submit_error: "Niečo sa pokazilo. Skúste to znova.",

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

    // Case 5: Fitness Coach
    results_case5_label: "Fitness Coach",
    results_case5_period: "2 mesiace spolupráce",
    results_case5_kpi1_label: "Zobrazenia",
    results_case5_kpi2_label: "Reels",
    results_case5_description: "Vytvorili sme silný systém obsahu a vizuálnu identitu pre fitness coacha. Zvýšili sme viditeľnosť profilu, zapojenie publika a konzistentnosť cez Reels a štruktúrovaný obsah.",

    contact_quick_title: "Rýchly kontakt",
    contact_note_label: "Mode:",
    contact_note_value: "project-based / retainer / consulting",

    // About
    about_kicker: "O mne",
    about_name: "KIRA",
    about_role: "SMM špecialistka · Tvorkyňa obsahu · UGC",
    about_quote: "Nespravujem len účty. Budujem značky, pri ktorých ľudia zastavia palec.",
    about_bio: "Z Kyjeva. Od roku 2020 budуjem prítomnosť značiek na sociálnych sieťach v UA, SK a DE.",
    about_stat1_value: "3+",
    about_stat1_label: "Roky",
    about_stat2_value: "7",
    about_stat2_label: "Odvetvia",
    about_stat3_value: "4",
    about_stat3_label: "Krajiny",
    about_cta: "Začnime spolupracovať →",

    footer_right: "FUTURISTIC LUXE / AESTHETIC",
    footer_cta_kicker: "Pripravení rásť?",
    footer_cta_line1: "POĎME VYTVORIŤ",
    footer_cta_line2: "NIEČO SKUTOČNÉ",
    footer_cta_btn: "Začať projekt →",
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
    services_brand_desc: "Authentischer Mobile-Content für nachhaltiges Markenvertrauen. Natürliche Präsenz vor der Kamera — ohne Inszenierung.",
    services_digital_title: "SMM",
    services_digital_desc: "Vollständiges Instagram-Management. Strategie, Content-Plan und konsequente Umsetzung im Sinne Ihrer Marke.",
    services_smm_title: "VIDEO CONTENT",
    services_smm_desc: "Kurzvideos für Reels und Stories. Optimiert für Reichweite, Retention und Plattform-Algorithmen.",
    services_strategy_title: "DESIGN & VISUALS",
    services_strategy_desc: "Visuelle Identität für Social Media — Logos, Brand Kits und Feed-Ästhetik, die kommuniziert bevor ein Wort gelesen wird.",

    case1_title: "CASE: Beauty Studio",
    case1_client: "Beauty / Skincare",
    case1_result: "From procedure to booking — through visual storytelling.",
    case1_mtext:
      "Case text can be expanded later if the legacy portfolio section returns.",
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

    pricing_badge: "BESTE WAHL",
    pricing_btn: "Loslegen",

    pricing_additional_title: "ZUSÄTZLICHE UNTERSTÜTZUNG",
    pricing_additional_desc: "Ich helfe auch bei visuellen Aufgaben, einfachem Design und Videobearbeitung bei Bedarf.\n\nFür spezielle Anfragen oder einmalige Aufgaben — kontaktieren Sie mich gerne.",
    pricing_additional_desc_short: "Brauchen Sie etwas außerhalb der Pakete?",
    pricing_additional_desc_full: "Visuelle Aufgaben, einmalige Shootings, Design-Korrekturen — alles, was nicht in ein Paket passt. Schreiben Sie uns.",
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
    contact_form_submit_error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",

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

    // Case 5: Fitness Coach
    results_case5_label: "Fitness Coach",
    results_case5_period: "2 Monate Zusammenarbeit",
    results_case5_kpi1_label: "Aufrufe",
    results_case5_kpi2_label: "Reels",
    results_case5_description: "Aufgebaut wurde ein starkes Content-System und eine visuelle Identität für einen Fitness-Coach. Die Sichtbarkeit des Profils, das Engagement der Zielgruppe und die Konsistenz wurden durch Reels und strukturierten Content gesteigert.",

    contact_quick_title: "Schnellkontakt",
    contact_note_label: "Mode:",
    contact_note_value: "project-based / retainer / consulting",

    // About
    about_kicker: "Über mich",
    about_name: "KIRA",
    about_role: "SMM-Spezialistin · Content Creatorin · UGC",
    about_quote: "Ich verwalte nicht nur Accounts. Ich baue Marken, bei denen man wirklich innehält.",
    about_bio: "Aus Kyiv. Seit 2020 baue ich die Social-Media-Präsenz von Marken in UA, SK und DE auf.",
    about_stat1_value: "3+",
    about_stat1_label: "Jahre",
    about_stat2_value: "7",
    about_stat2_label: "Branchen",
    about_stat3_value: "4",
    about_stat3_label: "Länder",
    about_cta: "Zusammenarbeiten →",

    footer_right: "FUTURISTIC LUXE / AESTHETIC",
    footer_cta_kicker: "Bereit zu wachsen?",
    footer_cta_line1: "LASS UNS ETWAS",
    footer_cta_line2: "ECHTES SCHAFFEN",
    footer_cta_btn: "Projekt starten →",
  },
};
