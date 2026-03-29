import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSection({ children }) {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [useStaticLayout, setUseStaticLayout] = useState(false);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactViewportQuery = window.matchMedia("(max-width: 900px)");

    const syncLayoutMode = () => {
      setUseStaticLayout(
        reducedMotionQuery.matches || compactViewportQuery.matches,
      );
    };

    syncLayoutMode();
    reducedMotionQuery.addEventListener("change", syncLayoutMode);
    compactViewportQuery.addEventListener("change", syncLayoutMode);

    return () => {
      reducedMotionQuery.removeEventListener("change", syncLayoutMode);
      compactViewportQuery.removeEventListener("change", syncLayoutMode);
    };
  }, []);

  useEffect(() => {
    if (useStaticLayout || !containerRef.current || !wrapperRef.current) return;

    const containerElement = containerRef.current;
    let ctx = null;
    let timeoutId = null;

    // Ждем, пока DOM полностью загрузится и размеры будут правильными
    const initScroll = () => {
      const sections = wrapperRef.current;
      if (!sections) return;

      // Принудительно пересчитываем размеры
      const viewportWidth = window.innerWidth;
      const totalWidth = sections.scrollWidth;
      
      if (totalWidth <= viewportWidth) {
        // Если контент не шире экрана, не делаем горизонтальный скролл
        return;
      }

      const scrollDistance = totalWidth - viewportWidth;

      ctx = gsap.context(() => {
        gsap.to(sections, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: containerElement,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            scrub: 0.5,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            refreshPriority: 1,
          },
        });
      }, containerRef);
    };

    // Даем время на рендер
    timeoutId = setTimeout(() => {
      initScroll();
    }, 100);

    // Также инициализируем при изменении размера окна
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
      if (ctx) ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars?.trigger === containerElement) {
          trigger.kill();
        }
      });
    };
  }, [useStaticLayout]);

  if (useStaticLayout) {
    return (
      <section ref={containerRef} className="principles-section principles-section-static">
        <div ref={wrapperRef} className="principles-stack">
          {children}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="principles-section principles-section-scroll"
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        ref={wrapperRef}
        className="principles-track"
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          height: "100%",
        }}
      >
        {children}
      </div>
    </section>
  );
}
