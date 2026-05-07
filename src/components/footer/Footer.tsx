import Link from 'next/link'
import ScrollReveal from '@/components/motion/ScrollReveal'
import styles from './Footer.module.css'

const socialLinks = [
  { href: 'https://instagram.com', label: 'instagram' },
  { href: 'https://x.com', label: 'x (twitter)' },
  { href: 'https://linkedin.com', label: 'linkedin' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* CTA section */}
      <div className={styles.cta}>
        <ScrollReveal variant="standard">
          <p className={styles.ctaEyebrow}>let&apos;s create something</p>
        </ScrollReveal>
        <ScrollReveal variant="dramatic" delay={0.1}>
          <h2 className={styles.ctaHeading}>
            <span className={styles.ctaLeft}>together.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="subtle" delay={0.3}>
          <Link href="/contact" className={styles.ctaButton}>
            Say hi
          </Link>
        </ScrollReveal>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={styles.social}>
          {socialLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          ))}
        </div>
        <p className={styles.copy}>
          © {new Date().getFullYear()} — all rights reserved
        </p>
      </div>
    </footer>
  )
}
