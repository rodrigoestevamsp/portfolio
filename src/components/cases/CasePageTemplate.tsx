import Link from 'next/link'
import ScrollReveal from '@/components/motion/ScrollReveal'
import MediaRenderer from '@/components/media/MediaRenderer'
import CaseBlocks from '@/components/cases/CaseBlocks'
import type { Project } from '@/types/project'
import styles from '@/app/work/[slug]/slug.module.css'

interface CasePageTemplateProps {
  project: Project
  nextProject: Project
}

export default function CasePageTemplate({ project, nextProject }: CasePageTemplateProps) {
  return (
    <main className={styles.page}>

      {/* ── Header: title + meta ── */}
      <div className={styles.hero}>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.meta}>
          <span className={styles.category}>{project.category}</span>
          <span className={styles.separator}>—</span>
          <span className={styles.year}>{project.year}</span>
        </div>
      </div>

      {/* ── Hero media ── */}
      <ScrollReveal variant="subtle">
        <div className={styles.imageWrapper}>
          <MediaRenderer
            imageUrl={project.imageUrl}
            mediaUrl={project.mediaUrl}
            mediaType={project.mediaType}
            alt={project.title}
            sizes="(max-width: 809px) 100vw, 90vw"
            priority
          />
        </div>
      </ScrollReveal>

      {/* ── Description ── */}
      <div className={styles.description}>
        <ScrollReveal variant="subtle">
          <p className={styles.descriptionText}>{project.description}</p>
        </ScrollReveal>
      </div>

      {/* ── Content blocks ── */}
      <CaseBlocks blocks={project.blocks} />

      {/* ── Next project ── */}
      <div className={styles.nextProject}>
        <ScrollReveal variant="subtle">
          <p className={styles.nextLabel}>next project</p>
        </ScrollReveal>
        <ScrollReveal variant="subtle" delay={0.06}>
          <Link href={`/work/${nextProject.slug}`} className={styles.nextLink}>
            <span className={styles.nextTitle}>{nextProject.title}</span>
            <span className={styles.nextArrow}>→</span>
          </Link>
        </ScrollReveal>
      </div>

      <div className={styles.back}>
        <Link href="/work" className={styles.backLink}>← all work</Link>
      </div>

    </main>
  )
}
