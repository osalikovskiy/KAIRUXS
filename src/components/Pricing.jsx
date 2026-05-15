import DecorativeFlower from "./ui/DecorativeFlower";
import SectionHeader from "./ui/SectionHeader";
import { RevealSection } from "./ui/AnimatedSection";
import { scrollToSection } from "../lib/navigation";

export default function Pricing({ t }) {
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
    <RevealSection className="pricing-section-new" id="pricing">
      <div className="pricing-parallax-glow pricing-parallax-glow-left" aria-hidden="true" />
      <div className="pricing-parallax-glow pricing-parallax-glow-right" aria-hidden="true" />

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
          <div
            key={pkg.name}
            className={`pricing-card-new reveal-card ${pkg.highlight ? "pricing-card-highlight-new" : ""}`}
            style={{ "--i": index }}
          >
            <div className="pricing-card-metal-ring" />
            {pkg.highlight && (
              <div className="pricing-badge">{t("pricing_badge")}</div>
            )}
            <div className="pricing-card-content">
              <div className="pricing-card-header">
                <span className="pricing-card-name">{pkg.name}</span>
                <span className="pricing-card-tagline">{pkg.tagline}</span>
              </div>
              <div className="pricing-card-price">{pkg.price}</div>
              <ul className="pricing-card-features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feat-dot" aria-hidden="true" />
                    <span className="feat-text">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="pricing-card-cta" onClick={() => scrollToSection("contact")}>
                {t("pricing_btn")}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="pricing-additional-services">
        <span className="pricing-add-ghost" aria-hidden="true">CUSTOM</span>
        <p className="pricing-add-kicker">{t("pricing_additional_title")}</p>
        <h3 className="pricing-add-heading">{t("pricing_additional_desc_short")}</h3>
        <div className="pricing-add-divider" />
        <p className="pricing-add-desc">{t("pricing_additional_desc_full")}</p>
        <button className="pricing-additional-cta" onClick={() => scrollToSection("contact")}>
          {t("pricing_additional_btn")}
        </button>
      </div>
    </RevealSection>
  );
}
