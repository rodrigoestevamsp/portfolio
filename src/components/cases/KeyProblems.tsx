'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { EASE_OUT } from '@/lib/constants'
import type { CaseBlockColumn } from '@/types/project'
import styles from './KeyProblems.module.css'

/* ── Icons ────────────────────────────────────────────────── */
const icons: Record<CaseBlockColumn['icon'], React.ReactNode> = {
  brand: (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M40 10 A30 30 0 0 1 70 40" />
      <path d="M70 40 A30 30 0 0 1 40 70" />
      <path d="M40 70 A30 30 0 0 1 10 40" />
      <path d="M10 40 A30 30 0 0 1 40 10" />
      <polyline points="55,10 40,10 40,25" />
      <polyline points="70,55 70,40 55,40" />
      <polyline points="25,70 40,70 40,55" />
      <polyline points="10,25 10,40 25,40" />
    </svg>
  ),
  digital: (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="8" y="16" width="64" height="42" rx="3" />
      <line x1="27" y1="68" x2="53" y2="68" />
      <line x1="40" y1="58" x2="40" y2="68" />
      <circle cx="40" cy="37" r="10" />
      <line x1="40" y1="27" x2="40" y2="22" />
      <line x1="40" y1="47" x2="40" y2="52" />
      <line x1="30" y1="37" x2="25" y2="37" />
      <line x1="50" y1="37" x2="55" y2="37" />
    </svg>
  ),
  scale: (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="40" cy="40" r="28" />
      <ellipse cx="40" cy="40" rx="14" ry="28" />
      <line x1="12" y1="40" x2="68" y2="40" />
      <path d="M18 24 Q40 32 62 24" />
      <path d="M18 56 Q40 48 62 56" />
    </svg>
  ),
  strategy: (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="12" width="22" height="22" />
      <rect x="46" y="12" width="22" height="22" />
      <rect x="12" y="46" width="22" height="22" />
      <rect x="46" y="46" width="22" height="22" />
      <line x1="23" y1="34" x2="23" y2="46" />
      <line x1="57" y1="34" x2="57" y2="46" />
      <line x1="34" y1="23" x2="46" y2="23" />
      <line x1="34" y1="57" x2="46" y2="57" />
    </svg>
  ),
  system: (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="30" width="20" height="20" />
      <rect x="46" y="14" width="20" height="20" />
      <rect x="46" y="46" width="20" height="20" />
      <line x1="34" y1="40" x2="46" y2="24" />
      <line x1="34" y1="40" x2="46" y2="56" />
    </svg>
  ),
  motion: (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M14 40 Q26 20 40 40 Q54 60 66 40" />
      <path d="M14 54 Q26 34 40 54 Q54 74 66 54" opacity="0.4" />
      <path d="M14 26 Q26 6 40 26 Q54 46 66 26" opacity="0.4" />
    </svg>
  ),
}

/* ── Column card ──────────────────────────────────────────── */
function Column({ col, delay }: { col: CaseBlockColumn; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      className={styles.column}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: EASE_OUT, delay }}
    >
      <div className={styles.icon}>{icons[col.icon]}</div>
      <h3 className={styles.colTitle}>{col.title}</h3>
      <ul className={styles.itemList}>
        {col.items.map((item) => (
          <li key={item} className={styles.item}>{item}</li>
        ))}
      </ul>
    </motion.div>
  )
}

/* ── Main ─────────────────────────────────────────────────── */
interface KeyProblemsProps {
  label?: string
  columns: CaseBlockColumn[]
}

export default function KeyProblems({ label = 'key problems', columns }: KeyProblemsProps) {
  const headingRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-40px' })

  return (
    <div className={styles.block}>
      <motion.h2
        ref={headingRef}
        className={styles.heading}
        initial={{ opacity: 0, y: 24 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        {label}
      </motion.h2>

      <div className={styles.grid}>
        {columns.map((col, i) => (
          <Column key={col.title} col={col} delay={i * 0.08} />
        ))}
      </div>
    </div>
  )
}
