import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSection({ children }) {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;

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
            trigger: containerRef.current,
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
      // Убиваем все ScrollTrigger для этого компонента
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars?.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, []); // Убираем children из зависимостей, чтобы не пересоздавать ScrollTrigger при смене языка

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        ref={wrapperRef}
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