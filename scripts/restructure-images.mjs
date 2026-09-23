import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = path.join(__dirname, '../public/images/projects')

// Slot sizes reference:
//   thumbnail / full / overlay-bg  → 16:9 → 3200 × 1800
//   split-left / split-right       → 3:4  → 1600 × 2133
//   feature / feature-reverse
//   overlay-card / overlay-reverse-card → 4:3 → 1600 × 1200
//   overlay-reverse-bg              → 16:9 → 3200 × 1800

const SLOTS = {
  thumbnail:            { w: 3200, h: 1800 },
  'hero':               { w: 3200, h: 1800 },
  'overlay-bg':         { w: 3200, h: 1800 },
  'overlay-card':       { w: 1600, h: 1200 },
  'split-left':         { w: 1600, h: 2133 },
  'split-right':        { w: 1600, h: 2133 },
  'feature':            { w: 1600, h: 1200 },
  'feature-reverse':    { w: 1600, h: 1200 },
  'overlay-reverse-bg': { w: 3200, h: 1800 },
  'overlay-reverse-card': { w: 1600, h: 1200 },
}

// Per-project slot → placeholder color [r,g,b]
const projects = [
  { slug: 'decathlon-brand-identity', color: [28, 52, 90] },
  { slug: 'decathlon-campaign',       color: [20, 80, 50] },
  { slug: 'brand-project',            color: [60, 30, 80] },
  { slug: 'geekie',                   color: [80, 40, 20] },
  { slug: 'reframe-pixelate',         color: [50, 20, 90] },
  { slug: 'reframe-wood-shade',       color: [90, 65, 25] },
  { slug: 'reframe-zoom-blur',        color: [15, 25, 90] },
]

async function generatePlaceholder(outPath, w, h, [r, g, b], label) {
  const labelSize = Math.round(w / 20)
  const dimSize   = Math.round(w / 32)
  const svg = `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${w}" height="${h}" fill="rgb(${r},${g},${b})" opacity="0.3"/>
    <text x="50%" y="46%" font-family="sans-serif" font-size="${labelSize}" fill="white"
      opacity="0.55" text-anchor="middle" dominant-baseline="middle">${label}</text>
    <text x="50%" y="56%" font-family="sans-serif" font-size="${dimSize}" fill="white"
      opacity="0.35" text-anchor="middle" dominant-baseline="middle">${w} × ${h}</text>
  </svg>`
  await sharp(Buffer.from(svg)).png().toFile(outPath)
}

for (const { slug, color } of projects) {
  const dir = path.join(BASE, slug)
  fs.mkdirSync(dir, { recursive: true })

  for (const [slot, { w, h }] of Object.entries(SLOTS)) {
    const file = path.join(dir, `${slot}.png`)
    if (fs.existsSync(file)) {
      console.log(`  skip  ${slug}/${slot}.png  (already exists)`)
      continue
    }
    await generatePlaceholder(file, w, h, color, `${slug} / ${slot}`)
    console.log(`  ✓  ${slug}/${slot}.png  ${w}×${h}`)
  }
}

console.log('\nDone — per-project image folders created.')
