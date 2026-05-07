export type ProjectCategory = 'branding' | 'digital'
export type ProjectMediaType = 'gif' | 'video'
export type CaseBlockLayout = 'full' | 'split' | 'text' | 'feature' | 'feature-reverse'

export interface CaseBlockMedia {
  imageUrl: string        // static image or poster for video/gif
  mediaUrl?: string       // gif or video file (overrides imageUrl for playback)
  type?: ProjectMediaType
  alt?: string
}

export interface CaseBlock {
  layout: CaseBlockLayout
  media?: CaseBlockMedia   // primary media
  media2?: CaseBlockMedia  // second slot (split layout)
  text?: string            // statement or feature body text
  label?: string           // small eyebrow label
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
