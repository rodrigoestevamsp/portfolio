'use client'

import { AnimatePresence, motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import StaggerParent from '@/components/motion/StaggerParent'
import styles from './ProjectGrid.module.css'
import { projects } from '@/data/projects'
import { EASE_OUT } from '@/lib/constants'


export default function ProjectGrid() {
  return (
    <section className={styles.section}>

      <StaggerParent className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {projects.map((project, i) => (
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
    </section>
  )
}
