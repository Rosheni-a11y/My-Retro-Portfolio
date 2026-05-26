import { useMemo } from 'react'

const GLYPHS = ['✦', '⟡', '⋆', '♥', '◆', '✧', '❉', '✩']

// Semi-transparent pixel glyphs that drift up and across the screen.
export default function FloatingElements({ count = 13 }) {
  const items = useMemo(() => {
    const out = []
    for (let i = 0; i < count; i++) {
      out.push({
        id: i,
        glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
        left: Math.random() * 100,
        size: Math.random() * 16 + 12, // 12–28px
        dur: (Math.random() * 16 + 14).toFixed(1), // 14–30s
        delay: (Math.random() * 18).toFixed(1),
        dx: (Math.random() * 160 - 80).toFixed(0), // horizontal drift
        rot: (Math.random() * 360 - 180).toFixed(0),
        peak: (Math.random() * 0.3 + 0.25).toFixed(2), // peak opacity
      })
    }
    return out
  }, [count])

  return (
    <>
      {items.map((it) => (
        <span
          key={it.id}
          className="floatie"
          style={{
            left: `${it.left}%`,
            fontSize: `${it.size}px`,
            '--dur': `${it.dur}s`,
            '--delay': `${it.delay}s`,
            '--dx': `${it.dx}px`,
            '--rot': `${it.rot}deg`,
            '--peak': it.peak,
          }}
        >
          {it.glyph}
        </span>
      ))}
    </>
  )
}
