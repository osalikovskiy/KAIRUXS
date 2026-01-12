import HorizontalScrollSection from "../ParallaxSection";

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
      <div className="decorative-flower flower-large flower-delay-1" style={{ position: 'absolute', top: '12%', left: '25vw', zIndex: 0 }}>
        <img src="/flowers/flower6.PNG" alt="" />
      </div>
      <div className="decorative-flower flower-large flower-delay-3" style={{ position: 'absolute', bottom: '15%', left: '150vw', zIndex: 0 }}>
        <img src="/flowers/flower4.PNG" alt="" />
      </div>
      <div className="decorative-flower flower-large flower-delay-2" style={{ position: 'absolute', top: '20%', left: '275vw', zIndex: 0 }}>
        <img src="/flowers/flower7.PNG" alt="" />
      </div>

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