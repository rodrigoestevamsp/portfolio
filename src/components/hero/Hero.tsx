'use client'

import { useRef, useState } from 'react'
import {
  motion,
  useInView,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useVelocity,
  useTransform,
} from 'framer-motion'
import Image from 'next/image'
import styles from './Hero.module.css'
import { EASE_OUT } from '@/lib/constants'

const SPRING = { stiffness: 180, damping: 22, mass: 0.4 }

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })
  const prefersReducedMotion = useReducedMotion()
  const [hovered, setHovered] = useState(false)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, SPRING)
  const y = useSpring(rawY, SPRING)
  const vx = useVelocity(x)
  const vy = useVelocity(y)
  const skewX = useTransform(vx, [-1200, 1200], [-18, 18])
  const skewY = useTransform(vy, [-1200, 1200], [-6, 6])

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.closest('section')!.getBoundingClientRect()
    rawX.set(e.clientX - rect.left)
    rawY.set(e.clientY - rect.top)
  }

  return (
    <section className={styles.hero} ref={ref}>

      {/* ── Name with clip reveal ── */}
      <div
        className={styles.nameWrapper}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={onMouseMove}
      >
        {['rodrigo', 'estevam'].map((word, i) => (
          <span key={word} className={styles.clipMask}>
            <motion.span
              className={styles.nameWord}
              initial={prefersReducedMotion ? false : { y: 300 }}
              animate={isInView ? { y: 0 } : { y: 300 }}
              transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.2 + i * 0.12 }}
            >
              {word}
            </motion.span>
          </span>
        ))}

        {/* ── Cursor-follow image ── */}
        <motion.div
          className={styles.cursorImage}
          style={{ x, y, skewX, skewY }}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.85 }}
          transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.3, ease: EASE_OUT } }}
          aria-hidden
        >
          <Image
            src="/images/profile.jpg"
            alt="Rodrigo Estevam"
            fill
            style={{ objectFit: 'cover' }}
            sizes="320px"
          />
        </motion.div>
      </div>

      {/* ── Tagline — below the name ── */}
      <motion.p
        className={styles.tagline}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.5 }}
      >
        i turn design into growth — and i&apos;ve been doing it for 20+ years.
        leading teams, shaping digital experiences, and finding that sweet spot where
        people, strategy, and design click together to build something that lasts.
      </motion.p>

    </section>
  )
}
