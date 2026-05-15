const ITEMS = [
  "SMM STRATEGY",
  "CONTENT CREATION",
  "VISUAL IDENTITY",
  "UGC CREATOR",
  "INSTAGRAM MANAGEMENT",
  "REELS & STORIES",
  "BRAND AESTHETICS",
  "DIGITAL GROWTH",
];

const doubled = [...ITEMS, ...ITEMS];

export default function Marquee() {
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
