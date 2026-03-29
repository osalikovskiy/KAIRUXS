import { motion } from "framer-motion";
import {
  sectionRevealProps,
  sharedSectionVariants,
} from "../../lib/animations";

const MotionSection = motion.section;

function joinClassNames(values) {
  return values.filter(Boolean).join(" ");
}

export function RevealSection({
  children,
  className,
  revealProps = sectionRevealProps,
  ...props
}) {
  return (
    <MotionSection
      className={joinClassNames(["brndz-section", "section-shell", className])}
      {...revealProps}
      {...props}
    >
      {children}
    </MotionSection>
  );
}

export function VariantSection({
  children,
  className,
  viewport = { once: true, amount: 0.25 },
  ...props
}) {
  return (
    <MotionSection
      className={joinClassNames(["brndz-section", "section-shell", className])}
      variants={sharedSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      {...props}
    >
      {children}
    </MotionSection>
  );
}
