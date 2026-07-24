import { useEffect } from "react";

/**
 * Scales `ref`'s font-size (via a binary search) to the largest value in
 * [min, max] px at which the element still fits its parent's box — both
 * height and width. Used for the hero headline so long translations
 * (SK/RU wrap to many more lines than EN) shrink to stay fully visible
 * on one screen instead of overflowing and pushing the page down.
 *
 * The parent is treated as the budget, so give the target a wrapper with a
 * bounded height (flex child with `min-height: 0; overflow: hidden`).
 * Re-runs on resize, after web fonts load, and whenever `dep` changes
 * (pass the current title text so a language switch re-fits).
 */
export function useFitText(ref, { min = 24, max = 160, dep } = {}) {
  useEffect(() => {
    const el = ref.current;
    const box = el?.parentElement;
    if (!el || !box) return undefined;

    let frame = 0;

    const fit = () => {
      const budgetH = box.clientHeight;
      const budgetW = box.clientWidth;
      if (budgetH <= 0 || budgetW <= 0) return;

      let lo = min;
      let hi = max;
      let best = min;
      // 12 iterations → sub-pixel precision across the [min,max] range.
      for (let i = 0; i < 12; i += 1) {
        const mid = (lo + hi) / 2;
        el.style.fontSize = `${mid}px`;
        const fits = el.scrollHeight <= budgetH && el.scrollWidth <= budgetW;
        if (fits) {
          best = mid;
          lo = mid;
        } else {
          hi = mid;
        }
      }
      el.style.fontSize = `${best}px`;
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(fit);
    };

    schedule();

    const ro = new ResizeObserver(schedule);
    ro.observe(box);
    window.addEventListener("resize", schedule);
    if (document.fonts?.ready) document.fonts.ready.then(schedule);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      window.removeEventListener("resize", schedule);
    };
  }, [ref, min, max, dep]);
}
