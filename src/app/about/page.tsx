import ScrollReveal from '@/components/motion/ScrollReveal'
import styles from './about.module.css'

export const metadata = { title: 'About — Portfolio' }

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <ScrollReveal variant="dramatic">
          <h1 className={styles.heading}>about me</h1>
        </ScrollReveal>
      </div>

      <div className={styles.content}>
        <ScrollReveal variant="standard">
          <p className={styles.bio}>
            i&apos;m a graphic designer focused on brand identity, packaging, and visual systems.
            i find inspiration in everyday objects — vintage typography at a flea market, color
            combinations in nature, the grain of a well-aged photograph.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="standard" delay={0.15}>
          <p className={styles.bio}>
            currently available for freelance projects. if you have something interesting in mind,
            let&apos;s talk.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="subtle" delay={0.3}>
          <div className={styles.details}>
            <div className={styles.detailGroup}>
              <span className={styles.detailLabel}>based in</span>
              <span className={styles.detailValue}>brazil</span>
            </div>
            <div className={styles.detailGroup}>
              <span className={styles.detailLabel}>available for</span>
              <span className={styles.detailValue}>branding · packaging · identity · print</span>
            </div>
            <div className={styles.detailGroup}>
              <span className={styles.detailLabel}>contact</span>
              <a href="mailto:hello@portfolio.com" className={styles.emailLink}>
                hello@portfolio.com
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  )
}
