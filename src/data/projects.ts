import { Project } from '@/types/project'

export const projects: Project[] = [

  /* ── Decathlon — Brand Identity ───────────────────────────── */
  {
    slug: 'decathlon-brand-identity',
    title: 'Revamp Decathlons Digital Experience',
    category: 'branding',
    year: 2024,
    imageUrl: '/images/projects/decathlon-brand-identity/thumbnail.png',
    description: 'We set out on a new challenge to complete reboot our app in South America.',
    featured: true,
    blocks: [
      {
        layout: 'full',
        media: { imageUrl: '/images/projects/decathlon-brand-identity/hero.png', alt: 'decathlon brand identity' },
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
        media:  { imageUrl: '/images/projects/decathlon-brand-identity/overlay-bg.png',   alt: 'context background' },
        media2: { imageUrl: '/images/projects/decathlon-brand-identity/overlay-card.png', alt: 'detail overlay' },
      },
      {
        layout: 'split',
        media:  { imageUrl: '/images/projects/decathlon-brand-identity/split-left.png',  alt: 'brand detail' },
        media2: { imageUrl: '/images/projects/decathlon-brand-identity/split-right.png', alt: 'campaign application' },
      },
      {
        layout: 'feature',
        label: 'identity',
        text: 'a flexible visual system built to work across every sport and every market.',
        media: { imageUrl: '/images/projects/decathlon-brand-identity/feature.png', alt: 'visual system detail' },
      },
      {
        layout: 'feature-reverse',
        label: 'applications',
        text: 'from digital touchpoints to physical spaces — consistency at every scale.',
        media: { imageUrl: '/images/projects/decathlon-brand-identity/feature-reverse.png', alt: 'brand applications' },
      },
      {
        layout: 'overlay-reverse',
        label: 'digital',
        text: 'seamless across every screen and every surface.',
        media:  { imageUrl: '/images/projects/decathlon-brand-identity/overlay-reverse-bg.png',   alt: 'digital background' },
        media2: { imageUrl: '/images/projects/decathlon-brand-identity/overlay-reverse-card.png', alt: 'digital detail' },
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
    imageUrl: '/images/projects/decathlon-campaign/thumbnail.png',
    description: 'campaign identity for decathlon\'s seasonal sport activation, bridging performance and everyday accessibility.',
    featured: true,
    blocks: [
      {
        layout: 'full',
        media: { imageUrl: '/images/projects/decathlon-campaign/hero.png', alt: 'decathlon sport campaign' },
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
        media:  { imageUrl: '/images/projects/decathlon-campaign/overlay-bg.png',   alt: 'campaign background' },
        media2: { imageUrl: '/images/projects/decathlon-campaign/overlay-card.png', alt: 'campaign detail' },
      },
      {
        layout: 'split',
        media:  { imageUrl: '/images/projects/decathlon-campaign/split-left.png',  alt: 'campaign visual a' },
        media2: { imageUrl: '/images/projects/decathlon-campaign/split-right.png', alt: 'campaign visual b' },
      },
      {
        layout: 'feature',
        label: 'motion',
        text: 'a visual language built for speed — from billboard to reel in one system.',
        media: { imageUrl: '/images/projects/decathlon-campaign/feature.png', alt: 'motion identity' },
      },
      {
        layout: 'feature-reverse',
        label: 'in-store',
        text: 'the campaign lives on every surface — physical and digital, seamlessly.',
        media: { imageUrl: '/images/projects/decathlon-campaign/feature-reverse.png', alt: 'in-store application' },
      },
      {
        layout: 'overlay-reverse',
        label: 'impact',
        text: 'one idea, every channel, every athlete.',
        media:  { imageUrl: '/images/projects/decathlon-campaign/overlay-reverse-bg.png',   alt: 'impact background' },
        media2: { imageUrl: '/images/projects/decathlon-campaign/overlay-reverse-card.png', alt: 'impact detail' },
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

  /* ── Brand Project ─────────────────────────────────────────── */
  {
    slug: 'brand-project',
    title: 'brand project',
    category: 'branding',
    year: 2024,
    imageUrl: '/images/projects/brand-project/thumbnail.png',
    description: 'a comprehensive brand identity built from the ground up — strategy, visual language, and system.',
    featured: true,
    blocks: [
      {
        layout: 'full',
        media: { imageUrl: '/images/projects/brand-project/hero.png', alt: 'brand project hero' },
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
        media:  { imageUrl: '/images/projects/brand-project/overlay-bg.png',   alt: 'brand direction background' },
        media2: { imageUrl: '/images/projects/brand-project/overlay-card.png', alt: 'brand detail' },
      },
      {
        layout: 'split',
        media:  { imageUrl: '/images/projects/brand-project/split-left.png',  alt: 'brand detail a' },
        media2: { imageUrl: '/images/projects/brand-project/split-right.png', alt: 'brand detail b' },
      },
      {
        layout: 'feature',
        label: 'identity',
        text: 'every element earns its place — type, color, form, and motion in one system.',
        media: { imageUrl: '/images/projects/brand-project/feature.png', alt: 'identity system' },
      },
      {
        layout: 'feature-reverse',
        label: 'applications',
        text: 'the system tested across every format — digital, print, and space.',
        media: { imageUrl: '/images/projects/brand-project/feature-reverse.png', alt: 'brand applications' },
      },
      {
        layout: 'overlay-reverse',
        label: 'launch',
        text: 'a brand ready to grow.',
        media:  { imageUrl: '/images/projects/brand-project/overlay-reverse-bg.png',   alt: 'launch background' },
        media2: { imageUrl: '/images/projects/brand-project/overlay-reverse-card.png', alt: 'launch detail' },
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
    imageUrl: '/images/projects/geekie/thumbnail.png',
    description: 'product design for a leading brazilian edtech platform — making personalised learning accessible to millions of students.',
    featured: true,
    blocks: [
      {
        layout: 'full',
        media: { imageUrl: '/images/projects/geekie/hero.png', alt: 'geekie platform' },
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
        media:  { imageUrl: '/images/projects/geekie/overlay-bg.png',   alt: 'product background' },
        media2: { imageUrl: '/images/projects/geekie/overlay-card.png', alt: 'product detail' },
      },
      {
        layout: 'split',
        media:  { imageUrl: '/images/projects/geekie/split-left.png',  alt: 'geekie screen a' },
        media2: { imageUrl: '/images/projects/geekie/split-right.png', alt: 'geekie screen b' },
      },
      {
        layout: 'feature',
        label: 'design system',
        text: 'a shared component library that let design and engineering ship faster.',
        media: { imageUrl: '/images/projects/geekie/feature.png', alt: 'design system' },
      },
      {
        layout: 'feature-reverse',
        label: 'personalisation',
        text: 'adaptive learning paths designed to feel intuitive, not algorithmic.',
        media: { imageUrl: '/images/projects/geekie/feature-reverse.png', alt: 'personalisation ui' },
      },
      {
        layout: 'overlay-reverse',
        label: 'impact',
        text: 'millions of students. one coherent experience.',
        media:  { imageUrl: '/images/projects/geekie/overlay-reverse-bg.png',   alt: 'impact background' },
        media2: { imageUrl: '/images/projects/geekie/overlay-reverse-card.png', alt: 'impact detail' },
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
    imageUrl: '/images/projects/reframe-pixelate/thumbnail.png',
    description: 'experimental visual tool for image manipulation, exploring pixel art aesthetics in contemporary design contexts.',
    blocks: [
      {
        layout: 'full',
        media: { imageUrl: '/images/projects/reframe-pixelate/hero.png', alt: 'reframe pixelate' },
      },
      {
        layout: 'text',
        label: 'concept',
        text: 'pixel art as a contemporary visual language — not retro, but radically present.',
      },
      {
        layout: 'key-problems',
        label: 'key problems',
        columns: [
          {
            icon: 'digital',
            title: 'image fidelity.',
            items: [
              'lossy compression destroying pixel intent',
              'no tool preserving pixel-perfect aesthetics',
              'inconsistent rendering across screens',
            ],
          },
          {
            icon: 'system',
            title: 'workflow friction.',
            items: [
              'manual pixel editing is slow and brittle',
              'no real-time preview of pixelation output',
              'no scalable export pipeline',
            ],
          },
          {
            icon: 'brand',
            title: 'aesthetic language.',
            items: [
              'pixel art seen as retro rather than contemporary',
              'no design system built around the aesthetic',
              'lack of creative constraint tooling',
            ],
          },
        ],
      },
      {
        layout: 'overlay',
        label: 'in context',
        text: 'an interface that turns any image into something entirely new.',
        media:  { imageUrl: '/images/projects/reframe-pixelate/overlay-bg.png',   alt: 'context background' },
        media2: { imageUrl: '/images/projects/reframe-pixelate/overlay-card.png', alt: 'tool detail' },
      },
      {
        layout: 'split',
        media:  { imageUrl: '/images/projects/reframe-pixelate/split-left.png',  alt: 'pixelate detail a' },
        media2: { imageUrl: '/images/projects/reframe-pixelate/split-right.png', alt: 'pixelate detail b' },
      },
      {
        layout: 'feature',
        label: 'output',
        text: 'every image becomes a grid — deliberate, structured, and visually charged.',
        media: { imageUrl: '/images/projects/reframe-pixelate/feature.png', alt: 'pixelate output' },
      },
      {
        layout: 'feature-reverse',
        label: 'tool',
        text: 'an interface that turns any image into something entirely new.',
        media: { imageUrl: '/images/projects/reframe-pixelate/feature-reverse.png', alt: 'tool interface' },
      },
      {
        layout: 'overlay-reverse',
        label: 'system',
        text: 'pixel art as a scalable, contemporary visual system.',
        media:  { imageUrl: '/images/projects/reframe-pixelate/overlay-reverse-bg.png',   alt: 'system background' },
        media2: { imageUrl: '/images/projects/reframe-pixelate/overlay-reverse-card.png', alt: 'system detail' },
      },
      {
        layout: 'results',
        label: 'the results.',
        stats: [
          { value: '10×', description: 'faster pixelation workflow versus manual editing.' },
          { value: '40+', description: 'export formats supported across web and print.' },
          { value: '100%', description: 'pixel-perfect output at any scale.' },
        ],
      },
    ],
  },

  /* ── Reframe — Wood Shade ─────────────────────────────────── */
  {
    slug: 'reframe-wood-shade',
    title: 'reframe — wood shade',
    category: 'digital',
    year: 2023,
    imageUrl: '/images/projects/reframe-wood-shade/thumbnail.png',
    description: 'material-driven design system inspired by natural wood textures and organic shadow play.',
    blocks: [
      {
        layout: 'full',
        media: { imageUrl: '/images/projects/reframe-wood-shade/hero.png', alt: 'reframe wood shade' },
      },
      {
        layout: 'text',
        label: 'material',
        text: 'nature as the starting point — grain, shadow, and warmth as design principles.',
      },
      {
        layout: 'key-problems',
        label: 'key problems',
        columns: [
          {
            icon: 'brand',
            title: 'texture in digital.',
            items: [
              'organic materials feel flat on screen',
              'no system for translating tactile into visual',
              'warmth lost in translation to digital surfaces',
            ],
          },
          {
            icon: 'system',
            title: 'design consistency.',
            items: [
              'wood textures applied ad-hoc, no system',
              'inconsistent grain direction and tone',
              'no scalable material token library',
            ],
          },
          {
            icon: 'scale',
            title: 'shadow language.',
            items: [
              'shadow depth undefined across components',
              'no relationship between light source and material',
              'harsh digital shadows breaking organic feel',
            ],
          },
        ],
      },
      {
        layout: 'overlay',
        label: 'direction',
        text: 'organic textures translated into a rigorous, scalable design language.',
        media:  { imageUrl: '/images/projects/reframe-wood-shade/overlay-bg.png',   alt: 'material background' },
        media2: { imageUrl: '/images/projects/reframe-wood-shade/overlay-card.png', alt: 'material detail' },
      },
      {
        layout: 'split',
        media:  { imageUrl: '/images/projects/reframe-wood-shade/split-left.png',  alt: 'wood texture detail' },
        media2: { imageUrl: '/images/projects/reframe-wood-shade/split-right.png', alt: 'material contrast' },
      },
      {
        layout: 'feature',
        label: 'system',
        text: 'organic textures translated into a rigorous, scalable design language.',
        media: { imageUrl: '/images/projects/reframe-wood-shade/feature.png', alt: 'system detail' },
      },
      {
        layout: 'feature-reverse',
        label: 'shadow',
        text: 'light and depth defined by material — not convention.',
        media: { imageUrl: '/images/projects/reframe-wood-shade/feature-reverse.png', alt: 'shadow system' },
      },
      {
        layout: 'overlay-reverse',
        label: 'application',
        text: 'warmth at every scale — from component to campaign.',
        media:  { imageUrl: '/images/projects/reframe-wood-shade/overlay-reverse-bg.png',   alt: 'application background' },
        media2: { imageUrl: '/images/projects/reframe-wood-shade/overlay-reverse-card.png', alt: 'application detail' },
      },
      {
        layout: 'results',
        label: 'the results.',
        stats: [
          { value: '3×', description: 'faster material application with the token system.' },
          { value: '60+', description: 'components built on the wood shade system.' },
          { value: '100%', description: 'design–dev consistency across all surfaces.' },
        ],
      },
    ],
  },

  /* ── Reframe — Zoom Blur ──────────────────────────────────── */
  {
    slug: 'reframe-zoom-blur',
    title: 'reframe — zoom blur',
    category: 'digital',
    year: 2023,
    imageUrl: '/images/projects/reframe-zoom-blur/thumbnail.png',
    description: 'motion-inspired series exploring zoom blur as a visual language for speed and transformation.',
    blocks: [
      {
        layout: 'full',
        media: { imageUrl: '/images/projects/reframe-zoom-blur/hero.png', alt: 'reframe zoom blur' },
      },
      {
        layout: 'text',
        label: 'motion',
        text: 'speed, energy, and transformation captured in a single frame.',
      },
      {
        layout: 'key-problems',
        label: 'key problems',
        columns: [
          {
            icon: 'motion',
            title: 'static design.',
            items: [
              'still images failing to convey speed',
              'motion missing from brand visual language',
              'no technique for energy in a single frame',
            ],
          },
          {
            icon: 'digital',
            title: 'blur as tool.',
            items: [
              'blur seen as error, not compositional device',
              'no standardised zoom blur workflow',
              'inconsistent depth of field across assets',
            ],
          },
          {
            icon: 'system',
            title: 'visual system.',
            items: [
              'no motion language across campaign assets',
              'speed cues disconnected between formats',
              'art direction unclear on blur intensity',
            ],
          },
        ],
      },
      {
        layout: 'overlay',
        label: 'in motion',
        text: 'blur as a compositional tool — not a flaw, but the whole point.',
        media:  { imageUrl: '/images/projects/reframe-zoom-blur/overlay-bg.png',   alt: 'motion background' },
        media2: { imageUrl: '/images/projects/reframe-zoom-blur/overlay-card.png', alt: 'motion detail' },
      },
      {
        layout: 'split',
        media:  { imageUrl: '/images/projects/reframe-zoom-blur/split-left.png',  alt: 'zoom blur detail a' },
        media2: { imageUrl: '/images/projects/reframe-zoom-blur/split-right.png', alt: 'zoom blur detail b' },
      },
      {
        layout: 'feature',
        label: 'technique',
        text: 'speed, energy, and transformation — all captured in a single frame.',
        media: { imageUrl: '/images/projects/reframe-zoom-blur/feature.png', alt: 'technique detail' },
      },
      {
        layout: 'feature-reverse',
        label: 'system',
        text: 'a motion language that scales from social to billboard.',
        media: { imageUrl: '/images/projects/reframe-zoom-blur/feature-reverse.png', alt: 'motion system' },
      },
      {
        layout: 'overlay-reverse',
        label: 'output',
        text: 'one technique — infinite applications.',
        media:  { imageUrl: '/images/projects/reframe-zoom-blur/overlay-reverse-bg.png',   alt: 'output background' },
        media2: { imageUrl: '/images/projects/reframe-zoom-blur/overlay-reverse-card.png', alt: 'output detail' },
      },
      {
        layout: 'results',
        label: 'the results.',
        stats: [
          { value: '5×', description: 'engagement uplift on motion assets versus static.' },
          { value: '20+', description: 'campaign executions using the zoom blur system.' },
          { value: '0.3s', description: 'average attention captured in the first frame.' },
        ],
      },
    ],
  },

]
