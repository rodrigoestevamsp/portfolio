import ScrollReveal from '@/components/motion/ScrollReveal'
import styles from './contact.module.css'

export const metadata = { title: 'Contact — Portfolio' }

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <ScrollReveal variant="dramatic">
          <h1 className={styles.heading}>start a project</h1>
        </ScrollReveal>
        <ScrollReveal variant="standard" delay={0.2}>
          <p className={styles.subheading}>
            tell me about what you&apos;re working on. i&apos;ll get back to you within 48 hours.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal variant="standard" delay={0.3} className={styles.formWrapper}>
        <form className={styles.form} action="#" method="post">
          <div className={styles.field}>
            <label className={styles.label} htmlFor="name">your name</label>
            <input className={styles.input} id="name" name="name" type="text" placeholder="full name" required />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">email address</label>
            <input className={styles.input} id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="project">project type</label>
            <input className={styles.input} id="project" name="project" type="text" placeholder="branding, packaging, identity..." />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="message">tell me more</label>
            <textarea className={styles.textarea} id="message" name="message" rows={6} placeholder="describe the project, timeline, and budget..." required />
          </div>
          <button type="submit" className={styles.submit}>
            send message →
          </button>
        </form>
      </ScrollReveal>
    </main>
  )
}
