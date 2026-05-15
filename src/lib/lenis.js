import Lenis from 'lenis';

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

export const lenis = new Lenis({
  duration: isSafari ? 0.9 : 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: !isSafari,
  smoothTouch: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
