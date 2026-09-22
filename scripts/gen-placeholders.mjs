import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(__dirname, '../public/images/projects')

// Correct sizes per slot type:
//   full / overlay-bg  → 16:9 → 3200 × 1800
//   split slot         → 3:4  → 1600 × 2133
//   feature slot       → 4:3  → 1600 × 1200
//   overlay card       → 4:3  → 1600 × 1200

const images = [
  // Was 1401×978 landscape — needs to cover 16:9 full + 4:3 feature + 3:4 split
  // Using 3200×1800 so objectFit:cover handles all layouts gracefully
  { file: 'decathlon-brand.png',    w: 3200, h: 1800, color: [40, 60, 90]  },

  // Was 716×930 — used in split right slot (3:4 portrait)
  { file: 'banner.png',             w: 1600, h: 2133, color: [30, 80, 60]  },

  // Was 383×859 — used in feature slot (4:3 landscape)
  { file: 'mask-group.png',         w: 1600, h: 1200, color: [80, 55, 30]  },

  // Already correct 16:9 — keep
  { file: 'reframe-wood-shade.png', w: 3200, h: 1800, color: [90, 70, 40]  },
  { file: 'reframe-zoom-blur.png',  w: 3200, h: 1800, color: [20, 30, 90]  },

  // Square — used as overlay card (4:3) and feature — keep square at high res
  { file: 'reframe-pixelate.png',   w: 2160, h: 2160, color: [60, 20, 80]  },
]

async function generate({ file, w, h, color: [r, g, b] }) {
  const labelSize = Math.round(w / 18)
  const dimSize   = Math.round(w / 28)

  const svg = `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${w}" height="${h}" fill="rgb(${r},${g},${b})" opacity="0.25"/>
    <text x="50%" y="47%" font-family="sans-serif" font-size="${labelSize}" fill="white"
      opacity="0.5" text-anchor="middle" dominant-baseline="middle">
      ${file.replace('.png', '')}
    </text>
    <text x="50%" y="56%" font-family="sans-serif" font-size="${dimSize}" fill="white"
      opacity="0.35" text-anchor="middle" dominant-baseline="middle">
      ${w} × ${h}
    </text>
  </svg>`

  await sharp(Buffer.from(svg)).png().toFile(path.join(OUT, file))
  console.log(`✓  ${file.padEnd(28)} ${w} × ${h}`)
}

for (const img of images) await generate(img)
console.log('\nDone — all placeholders at correct slot dimensions.')
