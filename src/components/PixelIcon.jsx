// Tiny pixel-art icons defined as ASCII grids. Each character maps to a
// colour in PAL ('.' = transparent). Rendered as crisp SVG <rect>s so they
// scale to any size without blurring. Add new art by adding a grid below.

const PAL = {
  '.': null,
  W: '#f0f0f0', // white
  k: '#15151c', // near-black ink
  K: '#0a0a0f',
  P: '#dda0dd', // plum
  p: '#9a5fa0', // deep plum
  Y: '#f6d365', // gold
  G: '#8be28b', // green
  B: '#3a6ea5', // linkedin blue
  C: '#9ad1d4', // cyan
  R: '#ffb3c6', // pink
  O: '#f0a868', // orange (flame)
  N: '#a06a43', // wood
  n: '#6e4422', // dark wood
  S: '#f3c9a0', // skin
  g: '#9a9aab', // gray
  d: '#4a4a5a', // dark gray
}

const ICONS = {
  // ---- sections ----
  about: [
    '............',
    '...PPPPPP...',
    '..PPPPPPPP..',
    '..PSSSSSSP..',
    '..PSkSSkSP..',
    '..PSSSSSSP..',
    '..PSSppSSP..',
    '...SSSSSS...',
    '..PPPPPPPP..',
    '.PPPPPPPPPP.',
    '.PPPPPPPPPP.',
    '.PP......PP.',
  ],
  projects: [
    '............',
    '..pppp......',
    '.pPPPPp.....',
    '.pPPPPPPPPp.',
    '.pPPPPPPPPp.',
    '.pPPPPPPPPp.',
    '.pPPPPPPPPp.',
    '.pPPPPPPPPp.',
    '.pPPPPPPPPp.',
    '.pppppppppp.',
    '............',
    '............',
  ],
  tech: [
    '...g..g..g..',
    '.kkkkkkkkkk.',
    '.kPPPPPPPPk.',
    '.kPkkkkkkPk.',
    'gkPkPPPPkPkg',
    '.kPkPPPPkPk.',
    'gkPkPPPPkPkg',
    '.kPkkkkkkPk.',
    '.kPPPPPPPPk.',
    '.kkkkkkkkkk.',
    '...g..g..g..',
    '............',
  ],
  achievements: [
    '.YYYYYYYYYY.',
    'YYYYYYYYYYYY',
    'YYYYYYYYYYYY',
    '.YYYYYYYYYY.',
    '..YYYYYYYY..',
    '...YYYYYY...',
    '.....YY.....',
    '.....YY.....',
    '....YYYY....',
    '...YYYYYY...',
    '..pppppppp..',
    '............',
  ],
  education: [
    '..pppppppp..',
    '.pPPPPPPPPp.',
    '.pPWWWWWWPp.',
    '.pPWkkkkWPp.',
    '.pPWWWWWWPp.',
    '.pPWkkkkWPp.',
    '.pPWWWWWWPp.',
    '.pPWkkkkWPp.',
    '.pPPPPPPPPp.',
    '..pppppppp..',
    '.....RR.....',
    '.....RR.....',
  ],
  resume: [
    '............',
    '..NNNNNNNN..',
    '.NnNNNNNNnN.',
    '.NNNNNNNNNN.',
    '.YYYYYYYYYY.',
    '.NNNNYYNNNN.',
    '.NNNNYYNNNN.',
    '.NNNNNNNNNN.',
    '.NNNNYYNNNN.',
    '.NnNNNNNNnN.',
    '..NNNNNNNN..',
    '............',
  ],
  contact: [
    '............',
    '.pppppppppp.',
    '.pWWWWWWWWp.',
    '.pWkWWWWkWp.',
    '.pWWkWWkWWp.',
    '.pWWWkkWWWp.',
    '.pWWWWWWWWp.',
    '.pWWWWWWWWp.',
    '.pWWWWWWWWp.',
    '.pppppppppp.',
    '............',
    '............',
  ],
  chestOpen: [
    '..NNNNNNNN..',
    '.NNNNNNNNNN.',
    '.NnNNNNNNnN.',
    '.NNNNNNNNNN.',
    '...YYYYYY...',
    '..YYWWWWYY..',
    '.NNYYYYYYNN.',
    '.NNNNNNNNNN.',
    '.NNNNYYNNNN.',
    '.NnNNNNNNnN.',
    '..NNNNNNNN..',
    '............',
  ],

  // ---- projects ----
  rocket: [
    '.....WW.....',
    '....WPPW....',
    '....WPPW....',
    '...WPCCPW...',
    '...WPCCPW...',
    '...WPPPPW...',
    '..WWPPPPWW..',
    '.W.WPPPPW.W.',
    '...WPPPPW...',
    '....OOOO....',
    '.....OO.....',
    '............',
  ],
  game: [
    '............',
    '............',
    '..PPPPPPPP..',
    '.PPPPPPPPPP.',
    '.PWPPPPPPYP.',
    '.WWWPPPPGPR.',
    '.PWPPPPPPYP.',
    '.PPPPPPPPPP.',
    '..PP....PP..',
    '.PP......PP.',
    '............',
    '............',
  ],
  chart: [
    '............',
    '.......PP...',
    '....CC.PP...',
    '....CC.PP...',
    '.RR.CC.PP...',
    '.RR.CC.PP...',
    '.RR.CC.PP...',
    '.RR.CC.PP...',
    'kkkkkkkkkkkk',
    '............',
    '............',
    '............',
  ],
  globe: [
    '....CCCC....',
    '..CCCCCCCC..',
    '.CCGGCCCCCC.',
    '.CGGGCCCGCC.',
    'CCGGCCCCGGCC',
    'CCCCCCGGGGCC',
    'CCGGCCCGGCCC',
    'CGGGCCCCCCCC',
    '.CCCCCCCCCC.',
    '.CCCCCCCCCC.',
    '..CCCCCCCC..',
    '....CCCC....',
  ],

  // ---- socials ----
  github: [
    '............',
    '.W......W...',
    '.WW....WW...',
    '.WWWWWWWWWW.',
    'WWWWWWWWWWWW',
    'WWkWWWWWWkWW',
    'WWWWWWWWWWWW',
    'WWWWWkkWWWWW',
    '.WWWWWWWWWW.',
    '..WWWWWWWW..',
    '............',
    '............',
  ],
  linkedin: [
    '............',
    '.BBBBBBBBBB.',
    '.BWBBBBBBBB.',
    '.BBBBBBBBBB.',
    '.BWBBWWWBBB.',
    '.BWBBWBBWBB.',
    '.BWBBWBBWBB.',
    '.BWBBWBBWBB.',
    '.BBBBBBBBBB.',
    '.BBBBBBBBBB.',
    '............',
    '............',
  ],
  twitter: [
    '............',
    '.......CC...',
    '......CCC...',
    '...CCCCCC...',
    '..CCCCCCCCC.',
    '.CCCCCCCCCC.',
    'CCCCCCCCCC..',
    '.CCCCCCCC...',
    '..CCCCCC....',
    '...CCCC.....',
    '............',
    '............',
  ],
  mail: [
    '............',
    '.pppppppppp.',
    '.pWWWWWWWWp.',
    '.pWkWWWWkWp.',
    '.pWWkWWkWWp.',
    '.pWWWkkWWWp.',
    '.pWWWWWWWWp.',
    '.pWWWWWWWWp.',
    '.pWWWWWWWWp.',
    '.pppppppppp.',
    '............',
    '............',
  ],

  // ---- decorations ----
  computer: [
    '............',
    '.dddddddddd.',
    '.dCCCCCCCCd.',
    '.dCkkkkkkCd.',
    '.dCkPPPPkCd.',
    '.dCkPPPPkCd.',
    '.dCkkkkkkCd.',
    '.dddddddddd.',
    '...dd..dd...',
    '..dddddddd..',
    '.dddddddddd.',
    '............',
  ],
  coffee: [
    '............',
    '...P..P.....',
    '..P..P......',
    '...P..P.....',
    '.WWWWWWWW...',
    '.WNNNNNNW.W.',
    '.WNNNNNNWWW.',
    '.WNNNNNNW.W.',
    '.WNNNNNNW...',
    '.WWWWWWWW...',
    '..WWWWWW....',
    '............',
  ],
  heart: [
    '............',
    '...PP..PP...',
    '..PPPPPPPP..',
    '..PPPPPPPP..',
    '..PPPPPPPP..',
    '...PPPPPP...',
    '....PPPP....',
    '.....PP.....',
    '............',
    '............',
    '............',
    '............',
  ],
  sparkle: [
    '.....PP.....',
    '.....PP.....',
    '....PPPP....',
    '..PPPPPPPP..',
    'PPPPPPPPPPPP',
    'PPPPPPPPPPPP',
    '..PPPPPPPP..',
    '....PPPP....',
    '.....PP.....',
    '.....PP.....',
    '............',
    '............',
  ],
  star: [
    '.....YY.....',
    '.....YY.....',
    '....YYYY....',
    'YYYYYYYYYYYY',
    '.YYYYYYYYYY.',
    '..YYYYYYYY..',
    '..YYYYYYYY..',
    '.YYYY..YYYY.',
    '.YYY....YYY.',
    'YY........YY',
    '............',
    '............',
  ],
}

export function PixelIcon({ name, size = 32, className, style, title }) {
  const grid = ICONS[name]
  if (!grid) return null
  const rows = grid.length
  const cols = grid[0].length
  const rects = []
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const c = PAL[grid[y][x]]
      if (!c) continue
      rects.push(
        // 1.02 sizing closes the hairline seams between adjacent rects
        <rect key={`${x}-${y}`} x={x} y={y} width={1.02} height={1.02} fill={c} />,
      )
    }
  }
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox={`0 0 ${cols} ${rows}`}
      shapeRendering="crispEdges"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      {rects}
    </svg>
  )
}

export const ICON_NAMES = Object.keys(ICONS)
export default PixelIcon
