import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lenis } from "./lenis";

gsap.registerPlugin(ScrollTrigger);

// Keep ScrollTrigger's measurements in sync with Lenis' smooth-scroll position
// instead of the native (unsmoothed) scroll position.
lenis.on("scroll", ScrollTrigger.update);

// GSAP's ticker becomes the single rAF loop driving Lenis (recommended Lenis
// + ScrollTrigger integration) — avoids running two competing rAF loops.
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

export { gsap, ScrollTrigger };
