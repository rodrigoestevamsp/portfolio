'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { EASE_OUT } from '@/lib/constants'

interface CaseTemplateProps {
  children: ReactNode
}

export default function CaseTemplate({ children }: CaseTemplateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.28, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  )
}
