import { useEffect, useRef } from "react";
import { lenis } from "./lenis";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const lerp = (a, b, t) => a + (b - a) * t;

/**
 * Tracks the pointer within `ref`'s element and eases `--mx`/`--my` CSS
 * custom properties (percentages) toward it — used to drive a radial-mask
 * "spotlight" that reveals a colorized layer under the cursor. Hand-rolled
 * rAF lerp (GSAP's CSSPlugin doesn't reliably tween percentage-valued
 * custom properties — mirrors the same pattern as ui/Cursor.jsx). Falls
 * back to a fixed, pleasant position on touch devices and under
 * prefers-reduced-motion (no listener, no motion).
 */
export function useCursorSpotlight(ref, { restX = 50, restY = 42 } = {}) {
  const target = useRef({ x: restX, y: restY });
  const current = useRef({ x: restX, y: restY });
  const rafId = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    el.style.setProperty("--mx", `${restX}%`);
    el.style.setProperty("--my", `${restY}%`);

    if (prefersReducedMotion() || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return undefined;
    }

    // Cache the element's rect and only recompute it on resize/scroll, so
    // mousemove (fires every pixel) no longer triggers a forced layout each
    // time. The rect only actually changes when the hero moves/resizes.
    let rect = el.getBoundingClientRect();
    const measure = () => { rect = el.getBoundingClientRect(); };

    const onMove = (e) => {
      target.current = {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      };
    };

    const onLeave = () => {
      target.current = { x: restX, y: restY };
    };

    const tick = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.08);
      current.current.y = lerp(current.current.y, target.current.y, 0.08);
      el.style.setProperty("--mx", `${current.current.x}%`);
      el.style.setProperty("--my", `${current.current.y}%`);
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", measure);
    lenis.on("scroll", measure);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", measure);
      lenis.off("scroll", measure);
      cancelAnimationFrame(rafId.current);
    };
  }, [ref, restX, restY]);
}
