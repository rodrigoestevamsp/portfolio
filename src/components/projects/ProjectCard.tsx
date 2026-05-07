'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './ProjectCard.module.css'
import { STAGGER_ITEM } from '@/lib/constants'
import { Project } from '@/types/project'
import MediaRenderer from '@/components/media/MediaRenderer'

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
        <div className={styles.imageWrapper}>
          <MediaRenderer
            imageUrl={project.imageUrl}
            mediaUrl={project.mediaUrl}
            mediaType={project.mediaType}
            alt={project.title}
            sizes="(max-width: 809px) 100vw, 50vw"
            priority={index < 2}
            className={styles.image}
          />
        </div>

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
