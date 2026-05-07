'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { EASE_OUT } from '@/lib/constants'
import styles from './ExperienceTimeline.module.css'

interface ExperienceEntry {
  company: string
  role: string
  description: string
  years: string
}

const experience: ExperienceEntry[] = [
  {
    company: 'company a',
    role: 'product design manager',
    description: 'leading cross-functional design teams across brand, product, and digital — building scalable systems used by millions.',
    years: '2020 — now',
  },
  {
    company: 'company b',
    role: 'senior design lead',
    description: 'defined visual languages from scratch and shipped end-to-end digital products across web and mobile.',
    years: '2016 — 2020',
  },
  {
    company: 'company c',
    role: 'ux & brand designer',
    description: 'worked at the intersection of brand strategy and product design for clients across europe and brazil.',
    years: '2012 — 2016',
  },
  {
    company: 'company d',
    role: 'designer',
    description: 'built and launched digital experiences for growth-stage companies in retail and e-commerce.',
    years: '2008 — 2012',
  },
  {
    company: 'company e',
    role: 'junior designer',
    description: 'started my career in graphic design, developing brand identities and communication systems.',
    years: '2004 — 2008',
  },
]

function Row({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={styles.row}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE_OUT, delay: index * 0.06 }}
    >
      <div className={styles.colLeft}>
        <span className={styles.company}>{entry.company}</span>
        <span className={styles.role}>{entry.role}</span>
      </div>

      <p className={styles.description}>{entry.description}</p>

      <span className={styles.years}>{entry.years}</span>
    </motion.div>
  )
}

export default function ExperienceTimeline() {
  const headingRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' })

  return (
    <section className={styles.section}>
      <motion.div
        ref={headingRef}
        className={styles.heading}
        initial={{ opacity: 0, y: 32 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: EASE_OUT }}
      >
        my experience
      </motion.div>

      <div className={styles.list}>
        {experience.map((entry, i) => (
          <Row key={entry.company} entry={entry} index={i} />
        ))}
        <div className={styles.dividerBottom} />
      </div>
    </section>
  )
}
