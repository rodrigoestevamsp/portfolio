import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects } from '@/data/projects'
import ScrollReveal from '@/components/motion/ScrollReveal'
import MediaRenderer from '@/components/media/MediaRenderer'
import styles from './slug.module.css'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  return { title: project ? `${project.title} — Portfolio` : 'Project' }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <main className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <ScrollReveal variant="dramatic">
          <h1 className={styles.title}>{project.title}</h1>
        </ScrollReveal>
        <ScrollReveal variant="subtle" delay={0.3}>
          <div className={styles.meta}>
            <span className={styles.category}>{project.category}</span>
            <span className={styles.separator}>—</span>
            <span className={styles.year}>{project.year}</span>
          </div>
        </ScrollReveal>
      </div>

      {/* Main media */}
      <ScrollReveal variant="standard" delay={0.2}>
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

      {/* Description */}
      <div className={styles.content}>
        <ScrollReveal variant="standard">
          <p className={styles.description}>{project.description}</p>
        </ScrollReveal>
      </div>

      {/* Next project */}
      <div className={styles.nextProject}>
        <ScrollReveal variant="subtle">
          <p className={styles.nextLabel}>next project</p>
        </ScrollReveal>
        <ScrollReveal variant="standard" delay={0.1}>
          <Link href={`/work/${next.slug}`} className={styles.nextLink}>
            <span className={styles.nextTitle}>{next.title}</span>
            <span className={styles.nextArrow}>→</span>
          </Link>
        </ScrollReveal>
      </div>

      {/* Back */}
      <div className={styles.back}>
        <Link href="/work" className={styles.backLink}>
          ← all work
        </Link>
      </div>
    </main>
  )
}
