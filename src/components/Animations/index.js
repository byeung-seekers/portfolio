// custom spring physics
export const physics = { damping: 15, mass: 0.27, stiffness: 55 }

// cursor appearing first time
export const cursorVariant = {
  hidden: { opacity: 0, scale: 0 },
  default: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", damping: 9.3 },
  },
  scaleL: {
    scale: 3,
    transition: { type: "spring", damping: 9.3 },
  },
  scaleM: {
    scale: 2.2,
    transition: { type: "spring", damping: 9.3 },
  },
  scaleS: {
    scale: 1.6,
    transition: { type: "spring", damping: 9.3 },
  },
}

// status dot changes from yellow to green once all images have loaded
export const statusDotVariant = {
  imagesStillLoading: {
    backgroundColor: `#ffe200`,
    boxShadow: `-3px -6px 13px #ffe200`,
  },
  imagesLoaded: {
    backgroundColor: `#00ff3a`,
    boxShadow: `-3px -6px 13px #00ff3a`,
  },
}

// spooky msg on hover over avatar
export const spookyVariant = {
  incoming: { opacity: 0, scale: 0.5, rotate: 12, x: 0 },
  hovered: { opacity: 1, scale: 1, rotate: 0, x: 0 },
  leaving: { opacity: 0, scale: 0.85, rotate: 0, x: -5 },
}

// name
export const nameVariant = {
  appear: { transition: { delayChildren: 0.3, staggerChildren: 0.025 } },
}

export const spanVariant = {
  hidden: { y: "120%" },
  appear: { y: 0, transition: { type: "spring", physics } },
}

// profile
export const profileVariant = {
  appear: { transition: { delayChildren: 1.11, staggerChildren: 0.12 } },
}

export const infoVariant = {
  hidden: { opacity: 0 },
  appear: { opacity: 1, transition: { type: "spring", physics } },
}

// modal
export const modalContainerVariant = {
  animate: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.075, staggerDirection: -1 } },
}

export const overlayVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const modalVariant = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
}

export const buttonsVariant = {
  entered: { transition: { delayChildren: 0.3, staggerChildren: 0.11 } },
  leaving: { transition: { staggerChildren: 0.097, staggerDirection: -1 } },
}

// modal prev & next buttons
export const buttonVariant = {
  entering: { opacity: 0, scale: 0 },
  entered: { opacity: 1, scale: 1 },
  leaving: { opacity: 0, scale: 0 },
  hover: { scale: 1.09 },
  tap: { scale: 0.9 },
}

// modal socials
export const modalSocialsVariant = {
  revealed: { transition: { delayChildren: 0.2, staggerChildren: 0.04 } },
  leaving: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
}

export const modalSocialVariant = {
  hidden: { opacity: 0 },
  revealed: { opacity: 1 },
  leaving: { opacity: 0 },
}

// thumbnails on mount fade in and bounce
export const thumbnailsVariant = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { delay: 1.12 } },
}

// thumbnail tags
export const tagsVariant = {
  notHovered: { transition: { staggerChildren: 0.025, staggerDirection: -1 } },
  hovered: { transition: { staggerChildren: 0.1 } },
}

export const tagVariant = {
  notHovered: { opacity: 0, y: 30, scale: 0.8 },
  hovered: { opacity: 1, y: 0, scale: 1 },
}

// social
export const socialsVariant = {
  onScreen: { transition: { delayChildren: 0.05, staggerChildren: 0.05 } },
}

export const socialVariant = {
  notOnScreen: { opacity: 0, y: "120%" },
  onScreen: {
    opacity: 1,
    y: "0%",
    transition: { type: "spring", physics },
  },
  hover: { scale: 1.15, y: -3 },
  tap: { scale: 0.9, y: 0 },
}

// speech bubble
export const speechBubbleVariant = {
  appearing: { scale: 0.5, opacity: 0, y: 20 },
  appeared: { scale: 1, opacity: 1, y: 0 },
  leaving: { scale: 0.85, opacity: 0, y: 10, transition: { duration: 0.09 } },
}
