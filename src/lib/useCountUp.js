import { useEffect, useRef, useState } from "react";

function parse(str) {
  const m = String(str).match(/^([+\-]?)(\d+(?:\.\d+)?)(.*)/);
  if (!m) return null;
  return { prefix: m[1], end: parseFloat(m[2]), suffix: m[3] };
}

export function useCountUp(value, duration = 1500) {
  const parsed = parse(value);
  const [display, setDisplay] = useState(
    parsed ? `${parsed.prefix}0${parsed.suffix}` : value,
  );
  const elRef = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (!parsed) return;
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || triggered.current) return;
        triggered.current = true;
        observer.disconnect();

        const start = performance.now();
        const { prefix, end, suffix } = parsed;

        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(`${prefix}${Math.round(eased * end)}${suffix}`);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [elRef, display];
}
