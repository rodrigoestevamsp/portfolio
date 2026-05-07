'use client'

import Image from 'next/image'
import { ProjectMediaType } from '@/types/project'

interface MediaRendererProps {
  imageUrl: string
  mediaUrl?: string
  mediaType?: ProjectMediaType
  alt: string
  sizes?: string
  priority?: boolean
  className?: string
}

const FILL_STYLE: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
}

export default function MediaRenderer({
  imageUrl,
  mediaUrl,
  mediaType,
  alt,
  sizes,
  priority,
  className,
}: MediaRendererProps) {
  if (mediaType === 'gif' && mediaUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={mediaUrl}
        alt={alt}
        className={className}
        style={FILL_STYLE}
      />
    )
  }

  if (mediaType === 'video' && mediaUrl) {
    return (
      <video
        src={mediaUrl}
        poster={imageUrl}
        autoPlay
        loop
        muted
        playsInline
        className={className}
        style={FILL_STYLE}
      />
    )
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      fill
      style={{ objectFit: 'cover', objectPosition: 'center' }}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  )
}
