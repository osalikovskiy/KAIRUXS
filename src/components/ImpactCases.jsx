import { motion } from "framer-motion";
import DecorativeFlower from "./ui/DecorativeFlower";
import SectionHeader from "./ui/SectionHeader";
import { VariantSection } from "./ui/AnimatedSection";
import { sharedCardVariants } from "../lib/animations";
const MotionArticle = motion.article;

export default function ImpactCases({ t }) {
  const impactCases = [
    {
      id: "beauty-salon",
      label: t("results_case1_label"),
      period: t("results_case1_period"),
      kpi1Label: t("results_case1_kpi1_label"),
      kpi1Value: "+287%",
      kpi2Label: t("results_case1_kpi2_label"),
      kpi2Value: "+154%",
      description: t("results_case1_description"),
    },
    {
      id: "korean-cosmetic",
      label: t("results_case2_label"),
      period: t("results_case2_period"),
      kpi1Label: t("results_case2_kpi1_label"),
      kpi1Value: "+425%",
      kpi2Label: t("results_case2_kpi2_label"),
      kpi2Value: "+89%",
      description: t("results_case2_description"),
    },
    {
      id: "perfume-bar",
      label: t("results_case3_label"),
      period: t("results_case3_period"),
      kpi1Label: t("results_case3_kpi1_label"),
      kpi1Value: "+23%",
      kpi2Label: t("results_case3_kpi2_label"),
      kpi2Value: "+26k",
      description: t("results_case3_description"),
    },
    {
      id: "personal-brand",
      label: t("results_case4_label"),
      period: t("results_case4_period"),
      kpi1Label: t("results_case4_kpi1_label"),
      kpi1Value: "+10k subs",
      kpi2Label: t("results_case4_kpi2_label"),
      kpi2Value: "+5k people",
      description: t("results_case4_description"),
    },
    {
      id: "fitness-coach",
      label: t("results_case5_label"),
      period: t("results_case5_period"),
      kpi1Label: t("results_case5_kpi1_label"),
      kpi1Value: "+100k",
      kpi2Label: t("results_case5_kpi2_label"),
      kpi2Value: "3-4k",
      description: t("results_case5_description"),
    },
  ];

  return (
    <VariantSection className="impact-section" id="results">
      {/* Decorative Flowers */}
      <DecorativeFlower
        imageSrc="/flowers/flower4.PNG"
        sizeClass="flower-medium"
        delayClass="flower-delay-2"
        style={{ top: "8%", left: "6%" }}
      />
      <DecorativeFlower
        imageSrc="/flowers/flower8.PNG"
        sizeClass="flower-small"
        delayClass="flower-delay-4"
        style={{ bottom: "10%", right: "7%" }}
      />

      <SectionHeader
        className="impact-header"
        title={t("results_title")}
        description={t("results_subtitle")}
        titleClassName="impact-title"
        descriptionClassName="impact-subtitle"
      />

      <div className="impact-timeline">
        {impactCases.map((item, index) => (
          <div
            key={item.id}
            className={
              "impact-row " +
              (index % 2 === 0 ? "impact-row-left" : "impact-row-right")
            }
          >
            <MotionArticle
              className="metal-card impact-card"
              variants={sharedCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
            >
              <div className="impact-card-inner">
                <div className="impact-card-top">
                  <div className="impact-icon-wrap">
                    <span className="impact-icon" />
                  </div>
                  <div className="impact-title-block">
                    <h3 className="impact-case-label">{item.label}</h3>
                    <p className="impact-period">{item.period}</p>
                  </div>
                </div>

                <div className="impact-kpis">
                  <div className="impact-kpi">
                    <div className="impact-kpi-value">{item.kpi1Value}</div>
                    <div className="impact-kpi-label">{item.kpi1Label}</div>
                  </div>
                  <div className="impact-kpi">
                    <div className="impact-kpi-value">{item.kpi2Value}</div>
                    <div className="impact-kpi-label">{item.kpi2Label}</div>
                  </div>
                </div>

                <p className="impact-description">{item.description}</p>
              </div>
            </MotionArticle>
          </div>
        ))}
      </div>
    </VariantSection>
  );
}
