import { Suspense, lazy, useState } from "react";
import { translations, LANGS } from "./i18n";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
const Services = lazy(() => import("./components/Services"));
const Principles = lazy(() => import("./components/Principles"));
const Pricing = lazy(() => import("./components/Pricing"));
const ImpactCases = lazy(() => import("./components/ImpactCases"));
const ContentLibrary = lazy(() => import("./components/ContentLibrary"));
const Contact = lazy(() => import("./components/Contact"));
const MotionDiv = motion.div;

function SectionFallback() {
  return <div className="section-fallback" aria-hidden="true" />;
}

const App = () => {
  const [lang, setLang] = useState("en");

  const t = (key) => translations[lang]?.[key] ?? translations.en[key] ?? key;

  // Функция смены языка с сохранением позиции скролла
  const handleLangChange = (newLang) => {
    // Сохраняем текущую позицию скролла
    const scrollPosition = window.scrollY || window.pageYOffset;
    
    // Меняем язык
    setLang(newLang);
    
    // Восстанавливаем позицию скролла после небольшой задержки
    // (чтобы дать время на перерендеринг)
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollPosition);
    });
  };

  return (
    <div className="brndz-app">
      <MotionDiv
        className="brndz-app-inner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.1,
        }}
      >
        {/* Header */}
        <Header t={t} LANGS={LANGS} lang={lang} setLang={handleLangChange} />

        <main>
          {/* Hero Section */}
          <Hero t={t} />

          {/* Services */}
          <Suspense fallback={<SectionFallback />}>
            <Services t={t} />
          </Suspense>

          {/* Principles */}
          <Suspense fallback={<SectionFallback />}>
            <Principles />
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
      </MotionDiv>
    </div>
  );
};

export default App;
