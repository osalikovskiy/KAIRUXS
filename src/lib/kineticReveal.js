import { useEffect } from "react";
import { gsap, ScrollTrigger } from "./gsap";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Splits the target element's direct text-bearing children (elements
 * carrying the `data-kinetic-line` attribute, or the element itself if none
 * are marked) into masked lines and reveals them on scroll: each line sits
 * inside an `overflow: hidden` wrapper and animates in on `y` + `opacity`,
 * staggered line-by-line — the "purposeful motion" editorial reveal used
 * across Hero / Principles headings.
 *
 * Any descendant tagged `data-reveal-block` (e.g. a kicker row, a divider +
 * subtitle group) fades/rises in on the same timeline, so a whole card's
 * supporting copy appears together with the kinetic title lines instead of
 * just the title animating alone.
 *
 * By default the reveal plays once. Pass `repeat: true` to make it toggle
 * every time the trigger point is crossed — plays scrolling down into view,
 * reverses (hides) scrolling back up past it, plays again scrolling back
 * down. Used for the Principles rows; Hero/Results headlines keep the
 * default one-shot behavior.
 *
 * Usage: give each line its own wrapper with `overflow:hidden` in the JSX
 * (see Principles.jsx), tag the inner line with `data-kinetic-line`, and
 * point this hook at the containing ref (an ancestor of both the lines and
 * any `data-reveal-block` elements).
 */
export function useKineticReveal(ref, { start = "top 85%", stagger = 0.08, repeat = false } = {}) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;

    const lines = root.querySelectorAll("[data-kinetic-line]");
    const lineTargets = lines.length ? lines : [root];
    const blockTargets = root.querySelectorAll("[data-reveal-block]");

    if (prefersReducedMotion()) {
      gsap.set(lineTargets, { y: 0, opacity: 1 });
      if (blockTargets.length) gsap.set(blockTargets, { y: 0, opacity: 1 });
      return undefined;
    }

    gsap.set(lineTargets, { y: "110%", opacity: 0 });
    if (blockTargets.length) gsap.set(blockTargets, { y: 16, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start,
        toggleActions: repeat ? "play none none reverse" : "play none none none",
      },
    });

    if (blockTargets.length) {
      tl.to(blockTargets, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.06 }, 0);
    }
    tl.to(lineTargets, { y: "0%", opacity: 1, duration: 0.9, ease: "power4.out", stagger }, 0);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [ref, start, stagger, repeat]);
}

/**
 * Generic scroll-triggered fade/rise for non-text elements (cards, KPI
 * blocks, etc). Thin GSAP wrapper kept separate from the IntersectionObserver
 * based `useReveal` (lib/reveal.js) which remains the default for simple
 * CSS-driven section reveals.
 */
export function useScrollFade(ref, { y = 32, start = "top 85%", delay = 0 } = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (prefersReducedMotion()) {
      gsap.set(el, { y: 0, opacity: 1 });
      return undefined;
    }

    gsap.set(el, { y, opacity: 0 });

    const tween = gsap.to(el, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [ref, y, start, delay]);
}

export { ScrollTrigger };
