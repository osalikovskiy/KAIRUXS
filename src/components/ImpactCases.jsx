import { useState } from "react";
import DecorativeFlower from "./ui/DecorativeFlower";
import SectionHeader from "./ui/SectionHeader";
import { VariantSection } from "./ui/AnimatedSection";
import CountUpValue from "./ui/CountUpValue";
import { useReveal } from "../lib/reveal";

function RevealRow({ children, className, isOpen, onToggle }) {
  const [ref, visible] = useReveal({ threshold: 0.12 });
  return (
    <article
      ref={ref}
      className={`impact-jrow ${className || ""} ${visible ? "row-visible" : ""} ${isOpen ? "is-open" : ""}`}
      onClick={onToggle}
    >
      {children}
    </article>
  );
}

export default function ImpactCases({ t }) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i);
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
      metaFlip: true,
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
      kpi1Value: "+10k",
      kpi2Label: t("results_case4_kpi2_label"),
      kpi2Value: "+5k",
      description: t("results_case4_description"),
      metaFlip: true,
    },
    {
      id: "fitness-coach",
      label: t("results_case5_label"),
      period: t("results_case5_period"),
      kpi1Label: t("results_case5_kpi1_label"),
      kpi1Value: "+100k",
      kpi2Label: t("results_case5_kpi2_label"),
      kpi2Value: "3–4k",
      description: t("results_case5_description"),
    },
  ];

  return (
    <VariantSection className="impact-section" id="results">
      <DecorativeFlower
        imageSrc="/flowers/flower4.PNG"
        sizeClass="flower-medium"
        delayClass="flower-delay-2"
        style={{ top: "6%", left: "4%" }}
      />
      <DecorativeFlower
        imageSrc="/flowers/flower8.PNG"
        sizeClass="flower-small"
        delayClass="flower-delay-4"
        style={{ bottom: "8%", right: "5%" }}
      />

      <SectionHeader
        className="impact-header"
        title={t("results_title")}
        description={t("results_subtitle")}
        titleClassName="impact-title"
        descriptionClassName="impact-subtitle"
      />

      <div className="impact-journal">
        {impactCases.map((item, index) => (
          <RevealRow
            key={item.id}
            className={index % 2 === 0 ? "impact-jrow--flip" : ""}
            isOpen={openIndex === index}
            onToggle={() => toggle(index)}
          >
            <div className="impact-jnum">
              <div className="impact-jkpi">
                <CountUpValue value={item.kpi1Value} className="impact-jvalue" />
                <span className="impact-jlabel">{item.kpi1Label}</span>
              </div>
              <div className="impact-jsep" aria-hidden="true" />
              <div className="impact-jkpi">
                <CountUpValue value={item.kpi2Value} className="impact-jvalue" />
                <span className="impact-jlabel">{item.kpi2Label}</span>
              </div>
            </div>
            <div className="impact-jcontent">
              <div className={`impact-jmeta ${item.metaFlip ? "impact-jmeta--flip" : ""}`}>
                {item.metaFlip ? (
                  <>
                    <span className="impact-jperiod">{item.period}</span>
                    <h3 className="impact-jbrand">{item.label}</h3>
                  </>
                ) : (
                  <>
                    <h3 className="impact-jbrand">{item.label}</h3>
                    <span className="impact-jperiod">{item.period}</span>
                  </>
                )}
              </div>
              <p className="impact-jdesc">{item.description}</p>
            </div>
            <span className="impact-jtoggle" aria-hidden="true" />
          </RevealRow>
        ))}
      </div>
    </VariantSection>
  );
}
