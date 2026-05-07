'use client'

import { motion } from 'framer-motion'
import MediaRenderer from '@/components/media/MediaRenderer'
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

          default:
            return null
        }
      })}
    </div>
  )
}
