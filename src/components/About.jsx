import { useEffect, useRef } from "react";
import DecorativeFlower from "./ui/DecorativeFlower";
import CountUpValue from "./ui/CountUpValue";
import { useReveal } from "../lib/reveal";
import { scrollToSection } from "../lib/navigation";
import { lenis } from "../lib/lenis";

export default function About({ t }) {
  const [ref, visible] = useReveal({ threshold: 0.05 });
  const bgRef = useRef(null);
  const photoAreaRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    const onScroll = () => {
      const photoArea = photoAreaRef.current;
      if (!photoArea) return;
      const rect = photoArea.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
      // Clamp to ±160px so the photo never exits the bleed zone
      const offset = Math.max(-160, Math.min(160, centerOffset * 0.12));
      bg.style.transform = `translateY(${offset}px)`;
    };

    onScroll();
    lenis.on("scroll", onScroll);
    return () => lenis.off("scroll", onScroll);
  }, []);

  return (
    <section
      ref={ref}
      className={`about-section section-shell reveal-section ${visible ? "is-visible" : ""}`}
      id="about"
    >
      {/* ── Photo area with parallax ── */}
      <div ref={photoAreaRef} className="about-photo-area">
        <div ref={bgRef} className="about-bg" aria-hidden="true">
          <img
            src="/about/photo.jpg"
            alt=""
            className="about-bg-photo"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </div>

        <div className="about-backdrop-text" aria-hidden="true">KAIRUXS</div>

        <DecorativeFlower
          imageSrc="/flowers/flower2.PNG"
          sizeClass="flower-large"
          delayClass="flower-delay-1"
          style={{ top: "8%", right: "6%", opacity: 0.55 }}
        />
        <DecorativeFlower
          imageSrc="/flowers/flower7.PNG"
          sizeClass="flower-medium"
          delayClass="flower-delay-3"
          style={{ bottom: "14%", left: "5%", opacity: 0.4 }}
        />
      </div>

      {/* ── Info area below the photo ── */}
      <div className="about-info-area">
        <div className="about-info-inner">

          {/* Col 1 — branding */}
          <div className="about-info-col about-info-col--brand">
            <span className="about-kicker">{t("about_kicker")}</span>
            <h2 className="about-name">{t("about_name")}</h2>
            <p className="about-role">{t("about_role")}</p>
          </div>

          {/* Col 2 — text */}
          <div className="about-info-col about-info-col--text">
            <div className="about-divider" />
            <blockquote className="about-quote">{t("about_quote")}</blockquote>
            <p className="about-bio">{t("about_bio")}</p>
          </div>

          {/* Col 3 — stats + CTA */}
          <div className="about-info-col about-info-col--stats">
            <div className="about-stats">
              <div className="about-stat">
                <CountUpValue value={t("about_stat1_value")} className="about-stat-value" />
                <span className="about-stat-label">{t("about_stat1_label")}</span>
              </div>
              <div className="about-stat">
                <CountUpValue value={t("about_stat2_value")} className="about-stat-value" />
                <span className="about-stat-label">{t("about_stat2_label")}</span>
              </div>
              <div className="about-stat">
                <CountUpValue value={t("about_stat3_value")} className="about-stat-value" />
                <span className="about-stat-label">{t("about_stat3_label")}</span>
              </div>
            </div>
            <button
              className="btn-primary about-cta"
              onClick={() => scrollToSection("contact")}
            >
              {t("about_cta")}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
