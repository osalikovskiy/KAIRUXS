import { useEffect, useRef, useState } from "react";
import { lenis } from "./lib/lenis";

export default function HorizontalScrollSection({ children }) {
  const wrapperRef  = useRef(null);
  const trackRef    = useRef(null);
  const sectionRef  = useRef(null);
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
    if (!wrapper || !track || !section) return;

    let cachedWrapperTop = 0;
    const updateWrapperTop = () => {
      cachedWrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
    };

    const setWrapperHeight = () => {
      const scrollDist = track.scrollWidth - window.innerWidth;
      if (scrollDist > 0) wrapper.style.height = `calc(100vh + ${scrollDist}px)`;
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
          {children}
        </div>

        <div className="pscroll-bar" aria-hidden="true" />
      </section>
    </div>
  );
}
