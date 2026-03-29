import HorizontalScrollSection from "../ParallaxSection";
import DecorativeFlower from "./ui/DecorativeFlower";

const slides = [
  {
    kicker: "I MAKE",
    title: "SOCIAL AESTHETICS.",
    subtitle: "Clean content and strategy made to fit your brand."
  },
  {
    kicker: "DIGITAL MARKETING",
    title: "CONTENT. PRESENCE.",
    subtitle: "Social media, UGC and visual content built naturally for brands."
  },
  {
    kicker: "UNSKIPPABLE",
    title: "BRAND FEEL.",
    subtitle: "A calm, clear and consistent online presence."
  },
  {
    kicker: "KAIRUXS METHOD",
    title: "STRATEGY • DESIGN • SMM.",
    subtitle: "One pipeline: from brand core to daily social presence."
  }
];

export default function Principles() {
  return (
    <HorizontalScrollSection>
      {/* Decorative Flowers for horizontal scroll */}
      <DecorativeFlower
        imageSrc="/flowers/flower6.PNG"
        sizeClass="flower-large"
        delayClass="flower-delay-1"
        style={{ position: "absolute", top: "12%", left: "25vw", zIndex: 0 }}
      />
      <DecorativeFlower
        imageSrc="/flowers/flower4.PNG"
        sizeClass="flower-large"
        delayClass="flower-delay-3"
        style={{ position: "absolute", bottom: "15%", left: "150vw", zIndex: 0 }}
      />
      <DecorativeFlower
        imageSrc="/flowers/flower7.PNG"
        sizeClass="flower-large"
        delayClass="flower-delay-2"
        style={{ position: "absolute", top: "20%", left: "275vw", zIndex: 0 }}
      />

      {slides.map((slide, index) => (
        <div className="principles-slide" key={index}>
          <div className="principles-inner">
            <span className="principles-kicker">{slide.kicker}</span>
            <h2 className="principles-title">{slide.title}</h2>
            <p className="principles-subtitle">{slide.subtitle}</p>
          </div>
        </div>
      ))}
    </HorizontalScrollSection>
  );
}
