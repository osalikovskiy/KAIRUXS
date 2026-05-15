import { lenis } from './lenis';

export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    lenis.scrollTo(element, { offset: 0 });
  }
}
