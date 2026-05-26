import { useMemo } from 'react'

// A field of twinkling stars; a slice of them slowly drift upward.
// Positions/sizes/timings are randomized once on mount (useMemo).
export default function Starfield({ count = 90 }) {
  const stars = useMemo(() => {
    const out = []
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 2 + 1 // 1–3px
      const roll = Math.random()
      const color = roll < 0.32 ? 'var(--plum)' : roll < 0.5 ? 'var(--teal)' : '#f0f0f0'
      const drifts = Math.random() < 0.25
      out.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size,
        drifts,
        color,
        dur: (Math.random() * 3 + 2).toFixed(2), // twinkle 2–5s
        delay: (Math.random() * 5).toFixed(2),
        drift: (Math.random() * 30 + 30).toFixed(0), // drift 30–60s
      })
    }
    return out
  }, [count])

  return (
    <>
      {stars.map((s) => (
        <span
          key={s.id}
          className={`star${s.drifts ? ' drift' : ''}`}
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: s.color,
            boxShadow: `0 0 ${s.size * 2}px ${s.color}`,
            '--dur': `${s.dur}s`,
            '--delay': `${s.delay}s`,
            '--drift': `${s.drift}s`,
          }}
        />
      ))}
    </>
  )
}
