export type ProjectCategory = 'branding' | 'digital'
export type ProjectMediaType = 'gif' | 'video'
export type CaseBlockLayout = 'full' | 'split' | 'text' | 'feature' | 'feature-reverse' | 'overlay' | 'overlay-reverse' | 'key-problems' | 'results'

export interface CaseBlockStat {
  value: string        // e.g. "30+ sites", "12.58%"
  description: string  // short explanation on the right
}

export interface CaseBlockColumn {
  icon: 'brand' | 'digital' | 'scale' | 'strategy' | 'system' | 'motion'
  title: string
  items: string[]
}

export interface CaseBlockMedia {
  imageUrl: string        // static image or poster for video/gif
  mediaUrl?: string       // gif or video file (overrides imageUrl for playback)
  type?: ProjectMediaType
  alt?: string
}

export interface CaseBlock {
  layout: CaseBlockLayout
  media?: CaseBlockMedia
  media2?: CaseBlockMedia
  text?: string
  label?: string
  columns?: CaseBlockColumn[]
  stats?: CaseBlockStat[]
}

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  year: number
  imageUrl: string
  caseImageUrl?: string
  description: string
  featured?: boolean
  mediaType?: ProjectMediaType
  mediaUrl?: string
  blocks?: CaseBlock[]
}
