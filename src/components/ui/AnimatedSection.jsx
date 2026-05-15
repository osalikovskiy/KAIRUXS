import { useReveal } from "../../lib/reveal";

function joinClassNames(values) {
  return values.filter(Boolean).join(" ");
}

export function RevealSection({ children, className, threshold = 0.2, ...props }) {
  const [ref, visible] = useReveal({ threshold });

  return (
    <section
      ref={ref}
      className={joinClassNames([
        "kairuxs-section",
        "section-shell",
        "reveal-section",
        visible && "is-visible",
        className,
      ])}
      {...props}
    >
      {children}
    </section>
  );
}

export function VariantSection({ children, className, ...props }) {
  return (
    <RevealSection className={className} {...props}>
      {children}
    </RevealSection>
  );
}
