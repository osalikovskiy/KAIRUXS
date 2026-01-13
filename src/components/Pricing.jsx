import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Pricing({ t, cardVariants, sectionVariants }) {
  const sectionRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glowYLeft = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const glowYRight = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const packages = [
    {
      name: t("pricing_starter_name"),
      tagline: t("pricing_starter_tagline"),
      price: t("pricing_starter_price"),
      features: [
        t("pricing_starter_feat_1"),
        t("pricing_starter_feat_2"),
        t("pricing_starter_feat_3"),
        t("pricing_starter_feat_4"),
        t("pricing_starter_feat_5"),
        t("pricing_starter_feat_6"),
      ],
    },
    {
      name: t("pricing_premium_name"),
      tagline: t("pricing_premium_tagline"),
      price: t("pricing_premium_price"),
      features: [
        t("pricing_premium_feat_1"),
        t("pricing_premium_feat_2"),
        t("pricing_premium_feat_3"),
        t("pricing_premium_feat_4"),
        t("pricing_premium_feat_5"),
        t("pricing_premium_feat_6"),
      ],
      highlight: true,
    },
    {
      name: t("pricing_pro_name"),
      tagline: t("pricing_pro_tagline"),
      price: t("pricing_pro_price"),
      features: [
        t("pricing_pro_feat_1"),
        t("pricing_pro_feat_2"),
        t("pricing_pro_feat_3"),
        t("pricing_pro_feat_4"),
        t("pricing_pro_feat_5"),
        t("pricing_pro_feat_6"),
      ],
    },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.section
      ref={sectionRef}
      className="brndz-section pricing-section-new"
      id="pricing"
      initial={{ opacity: 0, visibility: "hidden" }}
      animate={isMounted ? { opacity: 1, visibility: "visible" } : { opacity: 0, visibility: "hidden" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
      <motion.div
        className="pricing-parallax-glow pricing-parallax-glow-left"
        style={{ y: glowYLeft }}
        aria-hidden="true"
      />
      <motion.div
        className="pricing-parallax-glow pricing-parallax-glow-right"
        style={{ y: glowYRight }}
        aria-hidden="true"
      />

      {/* Decorative Flowers */}
      <div className="decorative-flower flower-large flower-delay-1" style={{ top: '8%', left: '3%' }}>
        <img src="/flowers/flower4.PNG" alt="" />
      </div>
      <div className="decorative-flower flower-medium flower-delay-3" style={{ bottom: '5%', right: '6%' }}>
        <img src="/flowers/flower6.PNG" alt="" />
      </div>

      <div className="pricing-section-header">
        <h2 className="pricing-section-title">{t("pricing_title")}</h2>
        <p className="pricing-section-subtitle">
          {t("pricing_subtitle")}
        </p>
      </div>
      <div className="pricing-cards-grid">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.name}
            className={`pricing-card-new ${
              pkg.highlight ? "pricing-card-highlight-new" : ""
            }`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.3 + (index * 0.08)
            }}
          >
            <div className="pricing-card-metal-ring" />
            <div className="pricing-card-content">
              <div className="pricing-card-header">
                <span className="pricing-card-name">{pkg.name}</span>
                <span className="pricing-card-tagline">{pkg.tagline}</span>
              </div>
              <div className="pricing-card-price">{pkg.price}</div>
              <ul className="pricing-card-features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button
                className="pricing-card-cta"
                onClick={() => scrollToSection("contact")}
              >
                {t("pricing_btn")}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="pricing-additional-services">
        <div className="pricing-additional-content">
          <h3 className="pricing-additional-title">{t("pricing_additional_title")}</h3>
          <p className="pricing-additional-description">
            {t("pricing_additional_desc").split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < t("pricing_additional_desc").split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
          <button
            className="pricing-additional-cta"
            onClick={() => scrollToSection("contact")}
          >
            {t("pricing_additional_btn")}
          </button>
        </div>
      </div>
    </motion.section>
  );
}
