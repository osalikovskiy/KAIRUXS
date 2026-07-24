import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DecorativeFlower from "./ui/DecorativeFlower";
import { VariantSection } from "./ui/AnimatedSection";
import CountUpValue from "./ui/CountUpValue";
import { useKineticReveal } from "../lib/kineticReveal";

const AUTO_ADVANCE_MS = 5500;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function ImpactCases({ t }) {
  const cases = [
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
      kpi1Value: "+10k",
      kpi2Label: t("results_case4_kpi2_label"),
      kpi2Value: "+5k",
      description: t("results_case4_description"),
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

  const [active, setActive] = useState(0);
  const headlineRef = useRef(null);
  useKineticReveal(headlineRef, { start: "top 88%", stagger: 0.09, repeat: true });

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const timer = setInterval(() => {
      setActive((a) => (a + 1) % cases.length);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(timer);
  }, [active, cases.length]);

  const current = cases[active];
  const goPrev = () => setActive((a) => (a - 1 + cases.length) % cases.length);
  const goNext = () => setActive((a) => (a + 1) % cases.length);

  return (
    <VariantSection className="impact-section" id="results">
      <DecorativeFlower
        imageSrc="/flowers/flower4.webp"
        sizeClass="flower-medium"
        delayClass="flower-delay-2"
        style={{ top: "6%", left: "4%" }}
      />
      <DecorativeFlower
        imageSrc="/flowers/flower8.webp"
        sizeClass="flower-small"
        delayClass="flower-delay-4"
        style={{ bottom: "8%", right: "5%" }}
      />

      <div className="results-header">
        <span className="results-kicker">{t("results_title")}</span>

        <div className="results-headline-row">
          <h2 ref={headlineRef} className="results-headline">
            <span className="results-headline-mask">
              <span className="results-headline-line" data-kinetic-line>
                {t("results_headline_line1")}
              </span>
            </span>
            <span className="results-headline-mask">
              <span className="results-headline-line" data-kinetic-line>
                {t("results_headline_line2")}
              </span>
            </span>
          </h2>

          <p className="results-header-sub">{t("results_subtitle")}</p>
        </div>
      </div>

      <div className="results-showcase">
        <div key={active} className="results-stage">
          <span className="results-stage-ghost" aria-hidden="true">
            {String(active + 1).padStart(2, "0")}
          </span>

          <div className="results-stage-stats">
            <div className="results-stat">
              <CountUpValue value={current.kpi1Value} className="results-stat-value" />
              <span className="results-stat-label">{current.kpi1Label}</span>
            </div>
            <div className="results-stat results-stat--secondary">
              <CountUpValue value={current.kpi2Value} className="results-stat-value" />
              <span className="results-stat-label">{current.kpi2Label}</span>
            </div>
          </div>

          <div className="results-stage-meta">
            <div className="results-stage-meta-top">
              <h3 className="results-stage-brand">{current.label}</h3>
              <span className="results-stage-period">{current.period}</span>
            </div>
            <p className="results-stage-desc">{current.description}</p>
          </div>
        </div>

        <div className="results-switcher" role="tablist">
          {cases.map((c, i) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={active === i}
              className={`results-switcher-item ${active === i ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="results-switcher-name">{c.label}</span>
              <span
                className="results-switcher-bar"
                aria-hidden="true"
                style={active === i ? { animationDuration: `${AUTO_ADVANCE_MS}ms` } : undefined}
              />
            </button>
          ))}
        </div>

        {/* Mobile only (CSS-swapped with .results-switcher above): names
            get cut off at this width, so plain prev/next arrows replace
            them instead of a truncated scrolling list. */}
        <div className="results-mobile-nav">
          <button type="button" className="results-nav-btn" onClick={goPrev} aria-label="Previous result">
            <ChevronLeft size={20} />
          </button>
          <button type="button" className="results-nav-btn" onClick={goNext} aria-label="Next result">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </VariantSection>
  );
}
