'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { REVEAL_DRAMATIC, REVEAL_STANDARD, REVEAL_SUBTLE } from '@/lib/constants'

const VARIANTS = {
  dramatic: REVEAL_DRAMATIC,
  standard: REVEAL_STANDARD,
  subtle:   REVEAL_SUBTLE,
}

interface ScrollRevealProps {
  children: React.ReactNode
  variant?: keyof typeof VARIANTS
  delay?: number
  className?: string
}

export default function ScrollReveal({
  children,
  variant = 'standard',
  delay = 0,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()

  const { initial, animate, transition } = VARIANTS[variant]

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  )
}
