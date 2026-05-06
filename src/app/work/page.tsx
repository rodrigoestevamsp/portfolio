import ProjectGrid from '@/components/projects/ProjectGrid'
import ScrollReveal from '@/components/motion/ScrollReveal'
import styles from './work.module.css'

export const metadata = {
  title: 'Work — Portfolio',
}

export default function WorkPage() {
  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <ScrollReveal variant="dramatic">
          <h1 className={styles.heading}>selected work</h1>
        </ScrollReveal>
      </div>
      <ProjectGrid />
    </main>
  )
}
