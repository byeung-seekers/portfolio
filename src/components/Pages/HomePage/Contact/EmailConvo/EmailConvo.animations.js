export const fadeScaleVariant = {
  initial: { opacity: 0, scale: 0.7 },
  animate: { opacity: 1, scale: 1 },
}

export const fadeVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const typingVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delayChildren: 0.5, staggerChildren: 0.2 },
  },
}

export const dotVariant = {
  initial: { opacity: 1, y: 0 },
  animate: {
    opacity: 0.8,
    y: -2.5,
    transition: { duration: 0.28, ease: "easeOut", yoyo: 3 },
  },
}

export const responseContainerVariant = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
  leave: { opacity: 0 },
}
