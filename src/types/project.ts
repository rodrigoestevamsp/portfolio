export type ProjectCategory = 'branding' | 'digital'
export type ProjectMediaType = 'gif' | 'video'

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  year: number
  imageUrl: string
  description: string
  featured?: boolean
  mediaType?: ProjectMediaType
  mediaUrl?: string
}
