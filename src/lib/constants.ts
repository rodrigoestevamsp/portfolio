export const CATEGORIES = ['all', 'branding', 'identity', 'packaging', 'digital', 'print'] as const

export const EASE_OUT = [0.25, 0.46, 0.45, 0.94] as const
export const EASE_IN_OUT = [0.45, 0, 0.55, 1] as const

export const REVEAL_DRAMATIC = {
  initial: { opacity: 0.9, y: 1500 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, ease: EASE_OUT },
}

export const REVEAL_STANDARD = {
  initial: { opacity: 0.001, y: 120 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE_OUT },
}

export const REVEAL_SUBTLE = {
  initial: { opacity: 0.001, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: EASE_OUT },
}

export const STAGGER_CONTAINER = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

export const STAGGER_ITEM = {
  hidden: { opacity: 0.001, y: 120 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
}
