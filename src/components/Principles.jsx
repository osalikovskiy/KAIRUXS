import HorizontalScrollSection from "../ParallaxSection";

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

export default function Principles({ t }) {
  const slides = getSlides(t);

  return (
    <HorizontalScrollSection>
      {slides.map((slide, index) => (
        <div className="principles-slide" key={index}>
          <div className="pslide-orb" aria-hidden="true" />
          <span className="pslide-ghost" aria-hidden="true">{accents[index]}</span>

          <div className="pslide-top">
            <span className="principles-kicker">{slide.kicker}</span>
            <span className="pslide-counter">{accents[index]} / 04</span>
          </div>

          <h2 className="principles-title">
            {slide.title.split("\n").map((line, i) => (
              <span key={i} className="pslide-line">{line}</span>
            ))}
          </h2>

          <div className="pslide-bottom">
            <div className="pslide-divider" />
            <p className="principles-subtitle">{slide.subtitle}</p>
          </div>
        </div>
      ))}
    </HorizontalScrollSection>
  );
}
