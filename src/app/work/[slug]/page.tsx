import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import CasePageTemplate from '@/components/cases/CasePageTemplate'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  return { title: project ? `${project.title} — Portfolio` : 'Project' }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const next = projects[(currentIndex + 1) % projects.length]

  return <CasePageTemplate project={project} nextProject={next} />
}
