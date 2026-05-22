import { useEffect, useRef, useState } from "react";
import { lenis } from "./lib/lenis";

export default function HorizontalScrollSection({ children }) {
  const wrapperRef = useRef(null);
  const trackRef   = useRef(null);
  const sectionRef = useRef(null);
  const svgRef     = useRef(null);
  const pathRef    = useRef(null);
  const dotRef     = useRef(null);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setIsCompact(rm.matches);
    sync();
    rm.addEventListener("change", sync);
    return () => rm.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (isCompact) return;

    const wrapper = wrapperRef.current;
    const track   = trackRef.current;
    const section = sectionRef.current;
    const svg     = svgRef.current;
    const path    = pathRef.current;
    const dot     = dotRef.current;
    if (!wrapper || !track || !section || !svg || !path) return;

    const buildWave = () => {
      const W  = track.scrollWidth;
      const H  = section.offsetHeight;
      const sw = W / 4; // one slide width in px
      const yC = H * 0.5;
      const yT = H * 0.22; // top (near kicker)
      const yB = H * 0.78; // bottom (near subtitle)

      // Update SVG viewport to match exact pixel dimensions
      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
      svg.setAttribute("width", W);
      svg.setAttribute("height", H);

      // Build wave path in screen pixels
      let d = `M 0,${yC}`;
      for (let i = 0; i < 4; i++) {
        const x0   = i * sw;
        const x3   = (i + 1) * sw;
        const yMid = i % 2 === 0 ? yT : yB;
        d += ` C ${x0 + sw * 0.25},${yMid} ${x0 + sw * 0.75},${yMid} ${x3},${yC}`;
      }
      path.setAttribute("d", d);

      const totalLen = path.getTotalLength();
      path.setAttribute("stroke-dasharray", totalLen);
      path.setAttribute("stroke-dashoffset", totalLen);

      return { W, H, sw, yC, yT, yB, totalLen };
    };

    let wave = buildWave();

    // Cache wrapperTop once — avoids getBoundingClientRect() on every scroll frame
    let cachedWrapperTop = 0;
    const updateWrapperTop = () => {
      cachedWrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
    };

    const setWrapperHeight = () => {
      const scrollDist = track.scrollWidth - window.innerWidth;
      if (scrollDist > 0) wrapper.style.height = `calc(100vh + ${scrollDist}px)`;
      wave = buildWave();
      updateWrapperTop();
    };

    setWrapperHeight();
    window.addEventListener("resize", setWrapperHeight);

    const applyTranslate = (scroll) => {
      const scrollDist = track.scrollWidth - window.innerWidth;
      if (scrollDist <= 0) return;

      const progress = Math.max(0, Math.min(1, (scroll - cachedWrapperTop) / scrollDist));

      track.style.transform = `translateX(${-scrollDist * progress}px)`;
      section.style.setProperty("--scroll-progress", progress);

      // Skip expensive SVG ops on mobile — wave/dot are hidden via CSS there anyway
      if (window.innerWidth > 768) {
        path.style.strokeDashoffset = wave.totalLen * (1 - progress);

        if (dot) {
          if (progress > 0.005 && progress < 0.995) {
            const pt   = path.getPointAtLength(wave.totalLen * progress);
            const dotX = pt.x - scrollDist * progress;
            const dotY = pt.y;
            dot.style.transform = `translate(${dotX - 5}px, ${dotY - 5}px)`;
            dot.style.opacity   = "1";
          } else {
            dot.style.opacity = "0";
          }
        }
      }
    };

    applyTranslate(window.scrollY);
    const onScroll = ({ scroll }) => applyTranslate(scroll);
    lenis.on("scroll", onScroll);

    return () => {
      window.removeEventListener("resize", setWrapperHeight);
      lenis.off("scroll", onScroll);
      if (track) track.style.transform = "";
    };
  }, [isCompact]);

  if (isCompact) {
    return (
      <section className="principles-section principles-section-static">
        <div className="principles-stack">{children}</div>
      </section>
    );
  }

  return (
    <div ref={wrapperRef} className="principles-wrapper">
      <section
        ref={sectionRef}
        className="principles-section principles-section-scroll"
        style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", "--scroll-progress": 0 }}
      >
        <div
          ref={trackRef}
          className="principles-track"
          style={{ display: "flex", height: "100%", willChange: "transform", position: "relative" }}
        >
          <svg
            ref={svgRef}
            aria-hidden="true"
            className="principles-wave-svg"
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              overflow: "visible",
              zIndex: 0,
            }}
          >
            <defs>
              <filter id="wave-glow" x="-2%" y="-100%" width="104%" height="300%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              ref={pathRef}
              fill="none"
              stroke="rgba(233, 166, 181, 0.65)"
              strokeWidth="1.5"
              filter="url(#wave-glow)"
            />
          </svg>

          {children}
        </div>

        <div
          ref={dotRef}
          aria-hidden="true"
          className="principles-wave-dot"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "rgba(233, 166, 181, 1)",
            boxShadow: "0 0 16px 6px rgba(233, 166, 181, 0.5), 0 0 4px 1px rgba(255,255,255,0.35)",
            opacity: 0,
            pointerEvents: "none",
            zIndex: 10,
            transition: "opacity 0.2s ease",
          }}
        />

        <div className="pscroll-bar" aria-hidden="true" />
      </section>
    </div>
  );
}
