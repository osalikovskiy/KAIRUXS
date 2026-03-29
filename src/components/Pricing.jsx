import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import DecorativeFlower from "./ui/DecorativeFlower";
import SectionHeader from "./ui/SectionHeader";
import { RevealSection } from "./ui/AnimatedSection";
import { createStaggerRevealProps, sectionRevealProps } from "../lib/animations";
import { scrollToSection } from "../lib/navigation";

const MotionDiv = motion.div;

export default function Pricing({ t }) {
  const sectionRef = useRef(null);

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

  return (
    <RevealSection
      ref={sectionRef}
      className="pricing-section-new"
      id="pricing"
      revealProps={sectionRevealProps}
    >
      <MotionDiv
        className="pricing-parallax-glow pricing-parallax-glow-left"
        style={{ y: glowYLeft }}
        aria-hidden="true"
      />
      <MotionDiv
        className="pricing-parallax-glow pricing-parallax-glow-right"
        style={{ y: glowYRight }}
        aria-hidden="true"
      />

      {/* Decorative Flowers */}
      <DecorativeFlower
        imageSrc="/flowers/flower4.PNG"
        sizeClass="flower-large"
        delayClass="flower-delay-1"
        style={{ top: "8%", left: "3%" }}
      />
      <DecorativeFlower
        imageSrc="/flowers/flower6.PNG"
        sizeClass="flower-medium"
        delayClass="flower-delay-3"
        style={{ bottom: "5%", right: "6%" }}
      />

      <SectionHeader
        className="pricing-section-header"
        title={t("pricing_title")}
        description={t("pricing_subtitle")}
        titleClassName="pricing-section-title"
        descriptionClassName="pricing-section-subtitle"
      />
      <div className="pricing-cards-grid">
        {packages.map((pkg, index) => (
          <MotionDiv
            key={pkg.name}
            className={`pricing-card-new ${
              pkg.highlight ? "pricing-card-highlight-new" : ""
            }`}
            {...createStaggerRevealProps(index)}
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
          </MotionDiv>
        ))}
      </div>
      <div className="pricing-additional-services">
        <div className="pricing-additional-content">
          <h3 className="pricing-additional-title">{t("pricing_additional_title")}</h3>
          <p className="pricing-additional-description">
            {t("pricing_additional_desc").split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < t("pricing_additional_desc").split("\n").length - 1 && <br />}
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
    </RevealSection>
  );
}
