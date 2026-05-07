'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import MediaRenderer from '@/components/media/MediaRenderer'
import KeyProblems from '@/components/cases/KeyProblems'
import type { CaseBlock, CaseBlockMedia } from '@/types/project'
import { EASE_OUT } from '@/lib/constants'
import styles from './CaseBlocks.module.css'

interface CaseBlocksProps {
  blocks?: CaseBlock[]
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  )
}

function MediaSlot({ media, className }: { media: CaseBlockMedia; className?: string }) {
  return (
    <div className={className ?? styles.slot}>
      <MediaRenderer
        imageUrl={media.imageUrl}
        mediaUrl={media.mediaUrl}
        mediaType={media.type}
        alt={media.alt ?? ''}
        sizes="(max-width: 809px) 100vw, 70vw"
      />
    </div>
  )
}

/* ── Overlay block: full-bg + rising card ─────────────────── */
function OverlayBlock({ block, reverse = false }: { block: CaseBlock; reverse?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Background drifts upward slowly — subtle parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ['0px', '-80px'])

  // Card travels a much larger distance — intense parallax, feels fast vs bg
  const cardY       = useTransform(scrollYProgress, [0, 1],       ['140px', '-220px'])
  const cardOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1])

  return (
    <div ref={ref} className={styles.overlayBlock}>

      {/* Background image with parallax */}
      <div className={styles.overlayBg}>
        <motion.div className={styles.overlayBgInner} style={{ y: bgY }}>
          {block.media && (
            <MediaRenderer
              imageUrl={block.media.imageUrl}
              mediaUrl={block.media.mediaUrl}
              mediaType={block.media.type}
              alt={block.media.alt ?? ''}
              sizes="100vw"
            />
          )}
        </motion.div>

        <div className={styles.overlayScrim} aria-hidden />

        {(block.label || block.text) && (
          <div className={reverse ? styles.overlayTextBoxRight : styles.overlayTextBox}>
            {block.label && <p className={styles.textLabel}>{block.label}</p>}
            {block.text  && <p className={styles.overlayTitle}>{block.text}</p>}
          </div>
        )}
      </div>

      {/* Floating card — left when reversed, right otherwise */}
      {block.media2 && (
        <motion.div
          className={reverse ? styles.overlayCardLeft : styles.overlayCard}
          style={{ y: cardY, opacity: cardOpacity }}
        >
          <div className={styles.overlayCardInner}>
            <MediaRenderer
              imageUrl={block.media2.imageUrl}
              mediaUrl={block.media2.mediaUrl}
              mediaType={block.media2.type}
              alt={block.media2.alt ?? ''}
              sizes="(max-width: 809px) 90vw, 40vw"
            />
          </div>
        </motion.div>
      )}
    </div>
  )
}

/* ── Main renderer ────────────────────────────────────────── */
export default function CaseBlocks({ blocks }: CaseBlocksProps) {
  if (!blocks?.length) return null

  return (
    <div className={styles.blocks}>
      {blocks.map((block, i) => {
        switch (block.layout) {

          case 'full':
            return (
              <FadeUp key={i}>
                <div className={styles.full}>
                  {block.media && <MediaSlot media={block.media} className={styles.fullSlot} />}
                </div>
              </FadeUp>
            )

          case 'split':
            return (
              <FadeUp key={i}>
                <div className={styles.split}>
                  {block.media  && <MediaSlot media={block.media}  className={styles.splitSlot} />}
                  {block.media2 && <MediaSlot media={block.media2} className={styles.splitSlot} />}
                </div>
              </FadeUp>
            )

          case 'text':
            return (
              <FadeUp key={i}>
                <div className={styles.text}>
                  {block.label && <p className={styles.textLabel}>{block.label}</p>}
                  {block.text  && <p className={styles.textStatement}>{block.text}</p>}
                </div>
              </FadeUp>
            )

          case 'feature':
          case 'feature-reverse':
            return (
              <FadeUp key={i}>
                <div className={block.layout === 'feature-reverse' ? styles.featureReverse : styles.feature}>
                  <div className={styles.featureText}>
                    {block.label && <p className={styles.textLabel}>{block.label}</p>}
                    {block.text  && <p className={styles.featureBody}>{block.text}</p>}
                  </div>
                  {block.media && <MediaSlot media={block.media} className={styles.featureSlot} />}
                </div>
              </FadeUp>
            )

          case 'overlay':
            return <OverlayBlock key={i} block={block} />

          case 'overlay-reverse':
            return <OverlayBlock key={i} block={block} reverse />

          case 'key-problems':
            return block.columns?.length ? (
              <KeyProblems key={i} label={block.label} columns={block.columns} />
            ) : null

          default:
            return null
        }
      })}
    </div>
  )
}
