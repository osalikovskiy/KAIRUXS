import { useRef } from "react";
import { scrollToSection } from "../lib/navigation";
import { useKineticReveal } from "../lib/kineticReveal";
import { useCursorSpotlight } from "../lib/useCursorSpotlight";
import MagneticButton from "./ui/MagneticButton";

export default function Hero({ t }) {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  useKineticReveal(titleRef, { start: "top 95%", stagger: 0.08 });
  useCursorSpotlight(heroRef);

  const titleLines = [
    t("hero_title_line1"),
    t("hero_title_line2"),
    t("hero_title_line3"),
  ];

  return (
    <section className="kairuxs-hero kairuxs-hero--dark" id="hero" ref={heroRef}>
      <div className="hero-bg-photo hero-bg-photo--base" aria-hidden="true" />
      <div className="hero-bg-photo hero-bg-photo--spotlight" aria-hidden="true" />
      <div className="hero-scrim" aria-hidden="true" />

      <div className="hero-inner hero-inner--full">
        <span className="hero-kicker">{t("hero_kicker")}</span>

        <h1 ref={titleRef} className="hero-title-full">
          {titleLines.map((line, i) => (
            <span className="hero-line-mask" key={i}>
              <span className="hero-line" data-kinetic-line>{line}</span>
            </span>
          ))}
        </h1>

        <div className="hero-bottom-row">
          <p className="hero-sub">{t("hero_sub")}</p>
          <div className="hero-actions">
            <MagneticButton className="btn-primary" onClick={() => scrollToSection("services")}>
              {t("hero_btn_primary")}
            </MagneticButton>
            <MagneticButton className="btn-secondary btn-secondary--dark" onClick={() => scrollToSection("services")}>
              {t("hero_btn_secondary")}
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
