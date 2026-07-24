import Lenis from 'lenis';

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

export const lenis = new Lenis({
  duration: isSafari ? 0.9 : 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: !isSafari,
  smoothTouch: false,
});

// The rAF loop that actually ticks `lenis` lives in ./gsap.js (gsap.ticker
// drives it, kept in sync with ScrollTrigger). This module only owns the
// singleton instance so it can be imported independently without pulling
// in GSAP.
