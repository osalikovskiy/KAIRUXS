import { useState } from "react";
import DecorativeFlower from "./ui/DecorativeFlower";
import SectionHeader from "./ui/SectionHeader";
import { RevealSection } from "./ui/AnimatedSection";

const NUMS = ["01", "02", "03", "04"];

export default function Services({ t }) {
  const [active, setActive] = useState(0);

  const services = [
    { key: "services_brand",    titleKey: "services_brand_title",    descKey: "services_brand_desc"    },
    { key: "services_digital",  titleKey: "services_digital_title",  descKey: "services_digital_desc"  },
    { key: "services_smm",      titleKey: "services_smm_title",      descKey: "services_smm_desc"      },
    { key: "services_strategy", titleKey: "services_strategy_title", descKey: "services_strategy_desc" },
  ];

  const current = services[active];

  return (
    <RevealSection id="services">
      <DecorativeFlower
        imageSrc="/flowers/flower3.PNG"
        sizeClass="flower-small"
        delayClass="flower-delay-2"
        style={{ top: "5%", right: "4%" }}
      />

      <SectionHeader
        title={t("section_services_title")}
        description={t("section_services_sub")}
      />

      <div className="srv-layout">

        {/* ── Left: tab list ── */}
        <ul className="srv-tabs" role="list">
          {services.map((s, i) => (
            <li
              key={s.key}
              className={`srv-tab ${i === active ? "srv-tab--active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <span className="srv-tab-num">{NUMS[i]}</span>
              <span className="srv-tab-title">{t(s.titleKey)}</span>
              <span className="srv-tab-line" aria-hidden="true" />
            </li>
          ))}
        </ul>

        {/* ── Right: showcase ── */}
        <div className="srv-showcase">
          <span key={`ghost-${active}`} className="srv-ghost-num" aria-hidden="true">{NUMS[active]}</span>
          <div key={active} className="srv-showcase-inner">
            <div className="srv-showcase-content">
              <p className="srv-showcase-index">{NUMS[active]} / 04</p>
              <h2 className="srv-showcase-title">{t(current.titleKey)}</h2>
              <div className="srv-showcase-divider" />
              <p className="srv-showcase-desc">{t(current.descKey)}</p>
            </div>
          </div>
        </div>

      </div>
    </RevealSection>
  );
}
