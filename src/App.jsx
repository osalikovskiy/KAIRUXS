import React, { useState } from "react";
import { translations, LANGS } from "./i18n";
import { motion } from "framer-motion";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import ContentLibrary from "./components/ContentLibrary";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Principles from "./components/Principles";
import ImpactCases from "./components/ImpactCases";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.08 * i,
    },
  }),
};

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
      <motion.div
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
          <Services
            t={t}
            sectionVariants={sectionVariants}
            cardVariants={cardVariants}
          />

          {/* Portfolio */}

          {/* Principles */}
          <Principles />

          {/* Pricing */}
          <Pricing
            t={t}
            cardVariants={cardVariants}
            sectionVariants={sectionVariants}
          />

          {/* ImpactCases */}
          <ImpactCases t={t} />

          {/* Content Library */}
          <ContentLibrary t={t} />

          {/* Contact */}
          <Contact t={t} sectionVariants={sectionVariants} />
        </main>

        {/* Footer */}
        <Footer t={t} />
      </motion.div>
    </div>
  );
};

export default App;
