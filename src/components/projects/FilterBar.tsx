'use client'

import { motion, LayoutGroup } from 'framer-motion'
import styles from './FilterBar.module.css'
import { CATEGORIES } from '@/lib/constants'
import { EASE_OUT } from '@/lib/constants'

interface FilterBarProps {
  active: string
  onChange: (cat: string) => void
}

export default function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <LayoutGroup>
      <div className={styles.bar} role="group" aria-label="filter projects">
        {CATEGORIES.map((cat) => {
          const isActive = active === cat
          return (
            <button
              key={cat}
              className={`${styles.chip} ${isActive ? styles.chipActive : ''}`}
              onClick={() => onChange(cat)}
              aria-pressed={isActive}
            >
              {isActive && (
                <motion.span
                  layoutId="filter-pill"
                  className={styles.chipBg}
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                />
              )}
              <span className={styles.chipLabel}>{cat}</span>
            </button>
          )
        })}
      </div>
    </LayoutGroup>
  )
}
