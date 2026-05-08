'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { EASE_OUT } from '@/lib/constants'
import type { CaseBlockStat } from '@/types/project'
import styles from './Results.module.css'

function StatRow({ stat, index }: { stat: CaseBlockStat; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      className={styles.row}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE_OUT, delay: index * 0.1 }}
    >
      <span className={styles.value}>{stat.value}</span>
      <span className={styles.description}>{stat.description}</span>
    </motion.div>
  )
}

interface ResultsProps {
  label?: string
  stats: CaseBlockStat[]
}

export default function Results({ label = 'the results.', stats }: ResultsProps) {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-40px' })

  return (
    <section className={styles.section}>
      <motion.div
        ref={headerRef}
        className={styles.header}
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        <span className={styles.label}>{label}</span>
      </motion.div>

      <div className={styles.list}>
        {stats.map((stat, i) => (
          <StatRow key={i} stat={stat} index={i} />
        ))}
      </div>
    </section>
  )
}
