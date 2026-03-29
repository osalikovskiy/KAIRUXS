export const sharedSectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const sharedCardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
      delay: 0.08 * index,
    },
  }),
};

export const sectionRevealProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export function createStaggerRevealProps(index, extra = {}) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.3 + index * 0.08,
    },
    ...extra,
  };
}

export const heroSectionVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export const heroPhotoFrameMotion = {
  initial: { opacity: 0, scale: 0.9, rotateY: -15 },
  animate: { opacity: 1, scale: 1, rotateY: 0 },
  transition: { duration: 1, delay: 0.2, ease: "easeOut" },
};

export function createHeroBubbleMotion(delay) {
  return {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.6,
      delay,
      ease: [0.34, 1.56, 0.64, 1],
    },
  };
}
