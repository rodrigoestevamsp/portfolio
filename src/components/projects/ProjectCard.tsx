'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './ProjectCard.module.css'
import { STAGGER_ITEM } from '@/lib/constants'
import { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      variants={STAGGER_ITEM}
      className={styles.card}
      layout
    >
      <Link href={`/work/${project.slug}`} className={styles.link}>
        {/* Image area */}
        <div className={styles.imageWrapper}>
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="(max-width: 809px) 100vw, 50vw"
            priority={index < 2}
          />

          {/* Gradient vignette */}
          <div className={styles.vignette} aria-hidden="true" />

          {/* Inner border */}
          <div className={styles.innerBorder} aria-hidden="true" />

          {/* Hover overlay */}
          <div className={styles.overlay} aria-hidden="true">
            <div className={styles.overlayContent}>
              <span className={styles.overlayLabel}>view project</span>
              <svg className={styles.overlayArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Metadata */}
        <div className={styles.meta}>
          <h2 className={styles.title}>{project.title}</h2>
          <div className={styles.tags}>
            <span className={styles.category}>{project.category}</span>
            <span className={styles.year}>{project.year}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
