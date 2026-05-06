'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import styles from './Hero.module.css'
import { EASE_OUT } from '@/lib/constants'

interface HeroLine {
  text: string
  align: 'left' | 'right'
}

const lines: HeroLine[] = [
  { text: 'Rodrigo Estevam', align: 'left' },
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className={styles.hero} ref={ref}>
      <div className={styles.inner}>
        {lines.map((line, i) => (
          <motion.h1
            key={i}
            className={`${styles.line} ${styles[line.align]}`}
            initial={prefersReducedMotion ? false : { opacity: 0.9, y: 1500 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.9, y: 1500 }}
            transition={{
              duration: 1.1,
              ease: EASE_OUT,
              delay: i * 0.1,
            }}
          >
            {line.text}
          </motion.h1>
        ))}
      </div>

      <motion.div
        className={styles.scrollHint}
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.4, ease: EASE_OUT }}
      >
        <span>scroll</span>
        <span className={styles.scrollLine} />
      </motion.div>
    </section>
  )
}
