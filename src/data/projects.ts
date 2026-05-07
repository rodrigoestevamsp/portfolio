import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'decathlon-brand-identity',
    title: 'decathlon brand identity',
    category: 'branding',
    year: 2024,
    imageUrl: '/images/projects/decathlon-brand.png',
    description: 'a full rebrand of decathlon\'s visual identity, exploring new typographic systems and color languages across all touchpoints.',
    featured: true,
    blocks: [
      {
        layout: 'full',
        media: { imageUrl: '/images/projects/decathlon-brand.png', alt: 'decathlon brand identity' },
      },
      {
        layout: 'text',
        label: 'approach',
        text: 'redefining a global sports brand through type, color, and system thinking.',
      },
      {
        layout: 'overlay',
        label: 'in context',
        text: 'a brand system that performs at every scale.',
        media:  { imageUrl: '/images/projects/reframe-wood-shade.png', alt: 'context background' },
        media2: { imageUrl: '/images/projects/decathlon-brand.png',    alt: 'detail overlay' },
      },
      {
        layout: 'split',
        media:  { imageUrl: '/images/projects/decathlon-brand.png', alt: 'brand detail' },
        media2: { imageUrl: '/images/projects/banner.png', alt: 'campaign application' },
      },
      {
        layout: 'feature',
        label: 'identity',
        text: 'a flexible visual system built to work across every sport and every market.',
        media: { imageUrl: '/images/projects/mask-group.png', alt: 'visual system detail' },
      },
      {
        layout: 'feature-reverse',
        label: 'applications',
        text: 'from digital touchpoints to physical spaces — consistency at every scale.',
        media: { imageUrl: '/images/projects/decathlon-brand.png', alt: 'brand applications' },
      },
    ],
  },
  {
    slug: 'reframe-pixelate',
    title: 'reframe — pixelate',
    category: 'digital',
    year: 2024,
    imageUrl: '/images/projects/reframe-pixelate.png',
    description: 'experimental visual tool for image manipulation, exploring pixel art aesthetics in contemporary design contexts.',
    blocks: [
      {
        layout: 'full',
        media: { imageUrl: '/images/projects/reframe-pixelate.png', alt: 'reframe pixelate' },
      },
      {
        layout: 'text',
        label: 'concept',
        text: 'pixel art as a contemporary visual language — not retro, but radically present.',
      },
      {
        layout: 'split',
        media:  { imageUrl: '/images/projects/reframe-pixelate.png', alt: 'pixelate detail a' },
        media2: { imageUrl: '/images/projects/reframe-wood-shade.png', alt: 'pixelate detail b' },
      },
      {
        layout: 'feature-reverse',
        label: 'tool',
        text: 'an interface that turns any image into something entirely new.',
        media: { imageUrl: '/images/projects/reframe-pixelate.png', alt: 'tool interface' },
      },
    ],
  },
  {
    slug: 'reframe-wood-shade',
    title: 'reframe — wood shade',
    category: 'digital',
    year: 2023,
    imageUrl: '/images/projects/reframe-wood-shade.png',
    description: 'material-driven design system inspired by natural wood textures and organic shadow play.',
    blocks: [
      {
        layout: 'full',
        media: { imageUrl: '/images/projects/reframe-wood-shade.png', alt: 'reframe wood shade' },
      },
      {
        layout: 'split',
        media:  { imageUrl: '/images/projects/reframe-wood-shade.png', alt: 'wood texture detail' },
        media2: { imageUrl: '/images/projects/reframe-pixelate.png', alt: 'material contrast' },
      },
      {
        layout: 'text',
        label: 'material',
        text: 'nature as the starting point — grain, shadow, and warmth as design principles.',
      },
      {
        layout: 'feature',
        label: 'system',
        text: 'organic textures translated into a rigorous, scalable design language.',
        media: { imageUrl: '/images/projects/reframe-wood-shade.png', alt: 'system detail' },
      },
    ],
  },
  {
    slug: 'reframe-zoom-blur',
    title: 'reframe — zoom blur',
    category: 'digital',
    year: 2023,
    imageUrl: '/images/projects/reframe-zoom-blur.png',
    description: 'motion-inspired series exploring zoom blur as a visual language for speed and transformation.',
    blocks: [
      {
        layout: 'full',
        media: { imageUrl: '/images/projects/reframe-zoom-blur.png', alt: 'reframe zoom blur' },
      },
      {
        layout: 'text',
        label: 'motion',
        text: 'speed, energy, and transformation captured in a single frame.',
      },
      {
        layout: 'split',
        media:  { imageUrl: '/images/projects/reframe-zoom-blur.png', alt: 'zoom blur detail a' },
        media2: { imageUrl: '/images/projects/reframe-pixelate.png', alt: 'zoom blur detail b' },
      },
      {
        layout: 'feature-reverse',
        label: 'technique',
        text: 'blur as a compositional tool — not a flaw, but the whole point.',
        media: { imageUrl: '/images/projects/reframe-zoom-blur.png', alt: 'technique detail' },
      },
    ],
  },
  {
    slug: 'decathlon-campaign',
    title: 'decathlon — sport campaign',
    category: 'branding',
    year: 2025,
    imageUrl: '/images/projects/banner.png',
    description: 'campaign identity for decathlon\'s seasonal sport activation, bridging performance and everyday accessibility.',
    featured: true,
    blocks: [
      {
        layout: 'full',
        media: { imageUrl: '/images/projects/banner.png', alt: 'decathlon campaign' },
      },
      {
        layout: 'text',
        label: 'campaign',
        text: 'sport for everyone — a campaign that speaks to performance and accessibility at once.',
      },
      {
        layout: 'split',
        media:  { imageUrl: '/images/projects/banner.png', alt: 'campaign visual a' },
        media2: { imageUrl: '/images/projects/decathlon-brand.png', alt: 'campaign visual b' },
      },
      {
        layout: 'feature',
        label: 'activation',
        text: 'seasonal energy translated into bold visuals across every channel.',
        media: { imageUrl: '/images/projects/banner.png', alt: 'activation detail' },
      },
    ],
  },
  {
    slug: 'visual-systems',
    title: 'visual systems',
    category: 'branding',
    year: 2024,
    imageUrl: '/images/projects/mask-group.png',
    description: 'design system exploration merging geometric structure with typographic expressiveness.',
    blocks: [
      {
        layout: 'full',
        media: { imageUrl: '/images/projects/mask-group.png', alt: 'visual systems' },
      },
      {
        layout: 'split',
        media:  { imageUrl: '/images/projects/mask-group.png', alt: 'system detail a' },
        media2: { imageUrl: '/images/projects/decathlon-brand.png', alt: 'system detail b' },
      },
      {
        layout: 'text',
        label: 'structure',
        text: 'geometry and typography as equal partners in a unified design language.',
      },
      {
        layout: 'feature',
        label: 'expression',
        text: 'rigid grids, expressive type — structure that sets creativity free.',
        media: { imageUrl: '/images/projects/mask-group.png', alt: 'expression detail' },
      },
    ],
  },
]
