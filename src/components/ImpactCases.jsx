import React from "react";
import { motion } from "framer-motion";

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
      duration: 0.55,
      ease: "easeOut",
      delay: 0.08 * i,
    },
  }),
};

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
  ];

  return (
    <motion.section
      className="brndz-section impact-section"
      id="results"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      style={{ position: 'relative' }}
    >
      {/* Decorative Flowers */}
      <div className="decorative-flower flower-medium flower-delay-2" style={{ top: '8%', left: '6%' }}>
        <img src="/flowers/flower4.PNG" alt="" />
      </div>
      <div className="decorative-flower flower-small flower-delay-4" style={{ bottom: '10%', right: '7%' }}>
        <img src="/flowers/flower8.PNG" alt="" />
      </div>

      <div className="impact-header">
        <h2 className="impact-title">{t("results_title")}</h2>
        <p className="impact-subtitle">
          {t("results_subtitle")}
        </p>
      </div>

      <div className="impact-timeline">
        {impactCases.map((item, index) => (
          <div
            key={item.id}
            className={
              "impact-row " +
              (index % 2 === 0 ? "impact-row-left" : "impact-row-right")
            }
          >
            <motion.article
              className="metal-card impact-card"
              variants={cardVariants}
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
            </motion.article>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
