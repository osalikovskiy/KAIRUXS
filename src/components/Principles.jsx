import { useRef } from "react";
import { useKineticReveal } from "../lib/kineticReveal";

const accents = ["01", "02", "03", "04"];

const getSlides = (t) => [
  {
    kicker: t("principles_slide1_kicker"),
    title: t("principles_slide1_title"),
    subtitle: t("principles_slide1_subtitle"),
  },
  {
    kicker: t("principles_slide2_kicker"),
    title: t("principles_slide2_title"),
    subtitle: t("principles_slide2_subtitle"),
  },
  {
    kicker: t("principles_slide3_kicker"),
    title: t("principles_slide3_title"),
    subtitle: t("principles_slide3_subtitle"),
  },
  {
    kicker: t("principles_slide4_kicker"),
    title: t("principles_slide4_title"),
    subtitle: t("principles_slide4_subtitle"),
  },
];

function PrincipleRow({ slide, accent, flip }) {
  const rowRef = useRef(null);
  // repeat: true — the whole row (kicker, counter, title, divider,
  // subtitle) reveals scrolling down into it and hides again scrolling
  // back up past it, re-revealing every time you cross back down.
  useKineticReveal(rowRef, { start: "top 85%", stagger: 0.07, repeat: true });

  return (
    <article ref={rowRef} className={`principle-row ${flip ? "principle-row--flip" : ""}`}>
      <span className="principle-ghost" aria-hidden="true">{accent}</span>

      <div className="principle-row-top" data-reveal-block>
        <span className="principle-kicker">{slide.kicker}</span>
        <span className="principle-counter">{accent} / 04</span>
      </div>

      <h2 className="principle-title">
        {slide.title.split("\n").map((line, i) => (
          <span className="principle-line-mask" key={i}>
            <span className="principle-line" data-kinetic-line>{line}</span>
          </span>
        ))}
      </h2>

      <div className="principle-bottom" data-reveal-block>
        <div className="principle-divider" aria-hidden="true" />
        <p className="principle-subtitle">{slide.subtitle}</p>
      </div>
    </article>
  );
}

export default function Principles({ t }) {
  const slides = getSlides(t);

  return (
    <section className="principles-section" id="principles">
      <div className="principles-list">
        {slides.map((slide, index) => (
          <PrincipleRow
            key={index}
            slide={slide}
            accent={accents[index]}
            flip={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
