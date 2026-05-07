export type ProjectCategory = 'branding' | 'digital'

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  year: number
  imageUrl: string
  description: string
  featured?: boolean
}
