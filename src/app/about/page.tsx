'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './about.module.css'
import { EASE_OUT } from '@/lib/constants'

export default function AboutPage() {
  return (
    <main className={styles.page}>

      {/* ── Left: scrolling bio ── */}
      <div className={styles.left}>
        <div className={styles.bio}>
          <motion.p
            className={styles.bioPara}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.1 }}
          >
            i&apos;m a product design manager with over 20 years of experience turning strategy
            into digital products that people actually use. i&apos;ve led design teams at companies
            across brazil and europe, working at the intersection of brand, product, and growth.
          </motion.p>

          <motion.p
            className={styles.bioPara}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.2 }}
          >
            i believe good design is about clarity — knowing what matters, what to cut,
            and how to make complex systems feel effortless. i&apos;ve built and scaled
            design practices, defined visual languages from scratch, and shipped products
            used by millions.
          </motion.p>

          <motion.p
            className={styles.bioPara}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.3 }}
          >
            i hold a degree in graphic design and have spent years leading cross-functional
            teams — bridging the gap between business goals, user needs, and the craft of
            making things look and feel right.
          </motion.p>
        </div>

        <motion.div
          className={styles.links}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.5 }}
        >
          <a href="mailto:hello@rodrigoestevam.com" className={styles.socialLink}>e-mail me</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>linkedin</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>instagram</a>
        </motion.div>
      </div>

      {/* ── Right: sticky portrait panel ── */}
      <div className={styles.right}>
        <motion.div
          className={styles.nameBlock}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 }}
        >
          <span className={styles.name}>rodrigo estevam</span>
          <span className={styles.role}>product design manager</span>
        </motion.div>

        <div className={styles.portrait}>
          <Image
            src="/images/profile.jpg"
            alt="Rodrigo Estevam"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            sizes="52vw"
            priority
          />
        </div>

        <motion.p
          className={styles.statement}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.3 }}
        >
          i turn design into growth — and i&apos;ve been doing it for 20+ years.
        </motion.p>
      </div>

    </main>
  )
}
