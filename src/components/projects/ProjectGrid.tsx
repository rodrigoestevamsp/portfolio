'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FilterBar from './FilterBar'
import ProjectCard from './ProjectCard'
import StaggerParent from '@/components/motion/StaggerParent'
import styles from './ProjectGrid.module.css'
import { projects } from '@/data/projects'
import { EASE_OUT } from '@/lib/constants'

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section className={styles.section}>
      <FilterBar active={activeFilter} onChange={setActiveFilter} />

      <StaggerParent className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </StaggerParent>

      {filtered.length === 0 && (
        <motion.p
          className={styles.empty}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          no projects found
        </motion.p>
      )}
    </section>
  )
}
