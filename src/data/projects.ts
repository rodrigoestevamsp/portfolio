import { Project } from '@/types/project'

export const projects: Project[] = [

  /* ── Decathlon — Brand Identity ───────────────────────────── */
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
        layout: 'key-problems',
        label: 'key problems',
        columns: [
          {
            icon: 'brand',
            title: 'brand fragmentation.',
            items: [
              'inconsistent identity across markets',
              'no unified visual language',
              'disconnected touchpoints',
            ],
          },
          {
            icon: 'digital',
            title: 'digital experience.',
            items: [
              'outdated ui patterns across platforms',
              'no scalable design system',
              'poor mobile performance',
            ],
          },
          {
            icon: 'scale',
            title: 'global scale.',
            items: [
              'identity failing at large format',
              'multi-language visual inconsistency',
              'localisation without coherence',
            ],
          },
        ],
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
      {
        layout: 'overlay-reverse',
        label: 'digital',
        text: 'seamless across every screen and every surface.',
        media:  { imageUrl: '/images/projects/reframe-zoom-blur.png', alt: 'digital background' },
        media2: { imageUrl: '/images/projects/reframe-pixelate.png',  alt: 'digital detail' },
      },
      {
        layout: 'results',
        label: 'the results.',
        stats: [
          { value: '40+ markets', description: 'brand system rolled out across europe and beyond.' },
          { value: '3× faster', description: 'design production time after system implementation.' },
          { value: '98% adoption', description: 'of new identity across all decathlon touchpoints.' },
        ],
      },
    ],
  },

  /* ── Decathlon — Sport Campaign ───────────────────────────── */
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
        media: { imageUrl: '/images/projects/banner.png', alt: 'decathlon sport campaign' },
      },
      {
        layout: 'text',
        label: 'campaign',
        text: 'sport for everyone — a campaign that speaks to performance and accessibility at once.',
      },
      {
        layout: 'key-problems',
        label: 'key problems',
        columns: [
          {
            icon: 'strategy',
            title: 'audience reach.',
            items: [
              'campaign not resonating with casual athletes',
              'gap between performance and lifestyle messaging',
              'low seasonal activation recall',
            ],
          },
          {
            icon: 'motion',
            title: 'visual energy.',
            items: [
              'static assets lacking urgency',
              'no motion language for digital channels',
              'inconsistent art direction across formats',
            ],
          },
          {
            icon: 'system',
            title: 'channel coherence.',
            items: [
              'social, ooh and in-store disconnected',
              'no shared visual rhythm across media',
              'localised versions drifting from master',
            ],
          },
        ],
      },
      {
        layout: 'overlay',
        label: 'activation',
        text: 'seasonal energy translated into bold visuals across every channel.',
        media:  { imageUrl: '/images/projects/banner.png', alt: 'campaign background' },
        media2: { imageUrl: '/images/projects/decathlon-brand.png', alt: 'campaign detail' },
      },
      {
        layout: 'split',
        media:  { imageUrl: '/images/projects/banner.png', alt: 'campaign visual a' },
        media2: { imageUrl: '/images/projects/mask-group.png', alt: 'campaign visual b' },
      },
      {
        layout: 'feature',
        label: 'motion',
        text: 'a visual language built for speed — from billboard to reel in one system.',
        media: { imageUrl: '/images/projects/reframe-zoom-blur.png', alt: 'motion identity' },
      },
      {
        layout: 'feature-reverse',
        label: 'in-store',
        text: 'the campaign lives on every surface — physical and digital, seamlessly.',
        media: { imageUrl: '/images/projects/banner.png', alt: 'in-store application' },
      },
      {
        layout: 'overlay-reverse',
        label: 'impact',
        text: 'one idea, every channel, every athlete.',
        media:  { imageUrl: '/images/projects/reframe-wood-shade.png', alt: 'impact background' },
        media2: { imageUrl: '/images/projects/banner.png',             alt: 'impact detail' },
      },
      {
        layout: 'results',
        label: 'the results.',
        stats: [
          { value: '+24%', description: 'increase in campaign recall across key markets.' },
          { value: '12M+', description: 'impressions across digital and out-of-home channels.' },
          { value: '2× roas', description: 'return on ad spend versus previous seasonal campaign.' },
        ],
      },
    ],
  },

  /* ── Brand Project (placeholder — update slug, title, images) */
  {
    slug: 'brand-project',
    title: 'brand project',
    category: 'branding',
    year: 2024,
    imageUrl: '/images/projects/mask-group.png',
    description: 'a comprehensive brand identity built from the ground up — strategy, visual language, and system.',
    featured: true,
    blocks: [
      {
        layout: 'full',
        media: { imageUrl: '/images/projects/mask-group.png', alt: 'brand project hero' },
      },
      {
        layout: 'text',
        label: 'challenge',
        text: 'building a brand that earns trust from day one.',
      },
      {
        layout: 'key-problems',
        label: 'key problems',
        columns: [
          {
            icon: 'brand',
            title: 'no identity.',
            items: [
              'starting from zero — no brand equity',
              'undefined tone of voice',
              'no visual direction',
            ],
          },
          {
            icon: 'strategy',
            title: 'positioning.',
            items: [
              'unclear competitive space',
              'audience not yet defined',
              'no differentiation strategy',
            ],
          },
          {
            icon: 'system',
            title: 'scalability.',
            items: [
              'brand must work across all formats',
              'team needs a usable design system',
              'future product lines to accommodate',
            ],
          },
        ],
      },
      {
        layout: 'overlay',
        label: 'direction',
        text: 'a brand that communicates clarity and ambition at every touchpoint.',
        media:  { imageUrl: '/images/projects/reframe-wood-shade.png', alt: 'brand direction background' },
        media2: { imageUrl: '/images/projects/mask-group.png',         alt: 'brand detail' },
      },
      {
        layout: 'split',
        media:  { imageUrl: '/images/projects/mask-group.png',       alt: 'brand detail a' },
        media2: { imageUrl: '/images/projects/decathlon-brand.png',  alt: 'brand detail b' },
      },
      {
        layout: 'feature',
        label: 'identity',
        text: 'every element earns its place — type, color, form, and motion in one system.',
        media: { imageUrl: '/images/projects/mask-group.png', alt: 'identity system' },
      },
      {
        layout: 'feature-reverse',
        label: 'applications',
        text: 'the system tested across every format — digital, print, and space.',
        media: { imageUrl: '/images/projects/reframe-pixelate.png', alt: 'brand applications' },
      },
      {
        layout: 'overlay-reverse',
        label: 'launch',
        text: 'a brand ready to grow.',
        media:  { imageUrl: '/images/projects/reframe-zoom-blur.png', alt: 'launch background' },
        media2: { imageUrl: '/images/projects/mask-group.png',        alt: 'launch detail' },
      },
      {
        layout: 'results',
        label: 'the results.',
        stats: [
          { value: '01', description: 'brand built from zero to market-ready in 8 weeks.' },
          { value: '+40%', description: 'increase in inbound leads in the first quarter post-launch.' },
          { value: '100%', description: 'design system adoption across product and marketing teams.' },
        ],
      },
    ],
  },

  /* ── Geekie ───────────────────────────────────────────────── */
  {
    slug: 'geekie',
    title: 'geekie',
    category: 'digital',
    year: 2023,
    imageUrl: '/images/projects/reframe-pixelate.png',
    description: 'product design for a leading brazilian edtech platform — making personalised learning accessible to millions of students.',
    featured: true,
    blocks: [
      {
        layout: 'full',
        media: { imageUrl: '/images/projects/reframe-pixelate.png', alt: 'geekie platform' },
      },
      {
        layout: 'text',
        label: 'context',
        text: 'designing for education means designing for every student, everywhere.',
      },
      {
        layout: 'key-problems',
        label: 'key problems',
        columns: [
          {
            icon: 'digital',
            title: 'product complexity.',
            items: [
              'fragmented feature set with no clear ux flow',
              'inconsistent ui across web and mobile',
              'high cognitive load for students',
            ],
          },
          {
            icon: 'scale',
            title: 'scale & access.',
            items: [
              'millions of concurrent users',
              'low-bandwidth environments',
              'wide device and os fragmentation',
            ],
          },
          {
            icon: 'system',
            title: 'design system.',
            items: [
              'no unified component library',
              'design and engineering out of sync',
              'slow iteration cycles',
            ],
          },
        ],
      },
      {
        layout: 'overlay',
        label: 'approach',
        text: 'a product that feels as personal as a great teacher.',
        media:  { imageUrl: '/images/projects/reframe-wood-shade.png', alt: 'product background' },
        media2: { imageUrl: '/images/projects/reframe-pixelate.png',   alt: 'product detail' },
      },
      {
        layout: 'split',
        media:  { imageUrl: '/images/projects/reframe-pixelate.png',   alt: 'geekie screen a' },
        media2: { imageUrl: '/images/projects/reframe-zoom-blur.png',  alt: 'geekie screen b' },
      },
      {
        layout: 'feature',
        label: 'design system',
        text: 'a shared component library that let design and engineering ship faster.',
        media: { imageUrl: '/images/projects/mask-group.png', alt: 'design system' },
      },
      {
        layout: 'feature-reverse',
        label: 'personalisation',
        text: 'adaptive learning paths designed to feel intuitive, not algorithmic.',
        media: { imageUrl: '/images/projects/reframe-pixelate.png', alt: 'personalisation ui' },
      },
      {
        layout: 'overlay-reverse',
        label: 'impact',
        text: 'millions of students. one coherent experience.',
        media:  { imageUrl: '/images/projects/reframe-zoom-blur.png', alt: 'impact background' },
        media2: { imageUrl: '/images/projects/reframe-pixelate.png',  alt: 'impact detail' },
      },
      {
        layout: 'results',
        label: 'the results.',
        stats: [
          { value: '2M+', description: 'students using the redesigned platform.' },
          { value: '+26%', description: 'increase in average session engagement time.' },
          { value: '4× faster', description: 'design-to-engineering handoff with the new component library.' },
        ],
      },
    ],
  },

  /* ── Reframe — Pixelate ───────────────────────────────────── */
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

  /* ── Reframe — Wood Shade ─────────────────────────────────── */
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

  /* ── Reframe — Zoom Blur ──────────────────────────────────── */
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

]
