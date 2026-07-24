import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const magnetTarget = useRef(null);
  const rafId = useRef(null);
  const isHover = useRef(false);
  const onDark = useRef(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

      const el = e.target.closest("a, button, [role='button'], input, textarea, select, label, [tabindex]");
      magnetTarget.current = el;
      if (el && !isHover.current) {
        isHover.current = true;
        ringEl.classList.add("cursor-ring--hover");
        dot.classList.add("cursor-dot--hover");
      } else if (!el && isHover.current) {
        isHover.current = false;
        ringEl.classList.remove("cursor-ring--hover");
        dot.classList.remove("cursor-dot--hover");
      }

      // The default pink ring (mix-blend-mode: multiply) disappears against
      // dark surfaces — swap to a plain light ring while over the dark hero
      // photo, or the header while it's inverted over that hero (it's a
      // fixed sibling, not a descendant, so it needs its own check).
      const overDarkSurface = Boolean(
        e.target.closest(".kairuxs-hero--dark, .kairuxs-header--on-dark")
      );
      if (overDarkSurface !== onDark.current) {
        onDark.current = overDarkSurface;
        ringEl.classList.toggle("cursor-ring--on-dark", overDarkSurface);
        dot.classList.toggle("cursor-dot--on-dark", overDarkSurface);
      }
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      // Over an interactive element the ring eases toward its center
      // instead of the raw pointer position — a light magnetic pull.
      let targetX = mouse.current.x;
      let targetY = mouse.current.y;
      if (magnetTarget.current) {
        const rect = magnetTarget.current.getBoundingClientRect();
        targetX = rect.left + rect.width / 2;
        targetY = rect.top + rect.height / 2;
      }

      ring.current.x = lerp(ring.current.x, targetX, 0.12);
      ring.current.y = lerp(ring.current.y, targetY, 0.12);
      ringEl.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
