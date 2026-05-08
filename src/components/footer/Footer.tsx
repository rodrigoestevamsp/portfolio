'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { EASE_OUT } from '@/lib/constants'
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
      <motion.div
        className={styles.cta}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px' }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        <p className={styles.ctaEyebrow}>let&apos;s work</p>
        <h2 className={styles.ctaHeading}>
          <span className={styles.ctaLeft}>together.</span>
        </h2>
        <Link href="/contact" className={styles.ctaButton}>
          Say hi
        </Link>
      </motion.div>

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
