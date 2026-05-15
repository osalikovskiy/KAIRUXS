import HorizontalScrollSection from "../ParallaxSection";

const slides = [
  {
    kicker: "I MAKE",
    title: "SOCIAL\nAESTHETICS.",
    subtitle: "Clean content and strategy made to fit your brand.",
    accent: "01",
  },
  {
    kicker: "DIGITAL PRESENCE",
    title: "CONTENT\nTHAT WORKS.",
    subtitle: "UGC and visual content built naturally — not forced.",
    accent: "02",
  },
  {
    kicker: "UNSKIPPABLE",
    title: "BRAND\nFEEL.",
    subtitle: "Calm, clear and consistent across every platform.",
    accent: "03",
  },
  {
    kicker: "KAIRUXS METHOD",
    title: "STRATEGY\n& DESIGN.",
    subtitle: "One pipeline from brand core to daily social presence.",
    accent: "04",
  },
];

export default function Principles() {
  return (
    <HorizontalScrollSection>
      {slides.map((slide, index) => (
        <div className="principles-slide" key={index}>
          {/* Glow orb */}
          <div className="pslide-orb" aria-hidden="true" />

          {/* Ghost number */}
          <span className="pslide-ghost" aria-hidden="true">{slide.accent}</span>

          {/* Top */}
          <div className="pslide-top">
            <span className="principles-kicker">{slide.kicker}</span>
            <span className="pslide-counter">{slide.accent} / 04</span>
          </div>

          {/* Title */}
          <h2 className="principles-title">
            {slide.title.split("\n").map((line, i) => (
              <span key={i} className="pslide-line">{line}</span>
            ))}
          </h2>

          {/* Bottom */}
          <div className="pslide-bottom">
            <div className="pslide-divider" />
            <p className="principles-subtitle">{slide.subtitle}</p>
          </div>
        </div>
      ))}
    </HorizontalScrollSection>
  );
}
