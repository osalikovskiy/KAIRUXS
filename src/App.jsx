import { Suspense, lazy, useEffect, useState } from "react";
import { translations, LANGS } from "./i18n";

const LANG_STORAGE_KEY = "kairuxs-lang";
const LANG_CODES = LANGS.map((l) => l.code);

function getInitialLang() {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
  return LANG_CODES.includes(stored) ? stored : "en";
}
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cursor from "./components/ui/Cursor";
import Grain from "./components/ui/Grain";
import Marquee from "./components/Marquee";
const Services = lazy(() => import("./components/Services"));
const About = lazy(() => import("./components/About"));
const Principles = lazy(() => import("./components/Principles"));
const Pricing = lazy(() => import("./components/Pricing"));
const ImpactCases = lazy(() => import("./components/ImpactCases"));
const ContentLibrary = lazy(() => import("./components/ContentLibrary"));
const Contact = lazy(() => import("./components/Contact"));

function SectionFallback() {
  return <div className="section-fallback" aria-hidden="true" />;
}

const App = () => {
  const [lang, setLang] = useState(getInitialLang);

  const t = (key) => translations[lang]?.[key] ?? translations.en[key] ?? key;

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  }, [lang]);

  const handleLangChange = (newLang) => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    setLang(newLang);
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollPosition);
    });
  };

  return (
    <div className="kairuxs-app">
      <Cursor />
      <Grain />
      <div className="kairuxs-app-inner">
        {/* Header */}
        <Header t={t} LANGS={LANGS} lang={lang} setLang={handleLangChange} />

        <main>
          {/* Hero Section */}
          <Hero t={t} />

          <Marquee />

          {/* Services */}
          <Suspense fallback={<SectionFallback />}>
            <Services t={t} />
          </Suspense>

          {/* About */}
          <Suspense fallback={<SectionFallback />}>
            <About t={t} />
          </Suspense>

          {/* Principles */}
          <Suspense fallback={<SectionFallback />}>
            <Principles t={t} />
          </Suspense>

          {/* Pricing */}
          <Suspense fallback={<SectionFallback />}>
            <Pricing t={t} />
          </Suspense>

          {/* ImpactCases */}
          <Suspense fallback={<SectionFallback />}>
            <ImpactCases t={t} />
          </Suspense>

          {/* Content Library */}
          <Suspense fallback={<SectionFallback />}>
            <ContentLibrary t={t} />
          </Suspense>

          {/* Contact */}
          <Suspense fallback={<SectionFallback />}>
            <Contact t={t} />
          </Suspense>
        </main>

        {/* Footer */}
        <Footer t={t} />
      </div>
    </div>
  );
};

export default App;
