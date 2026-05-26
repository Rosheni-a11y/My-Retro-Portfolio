import { useEffect, useRef } from 'react'

const SPARKS = ['✦', '⋆', '✧', '⟡']

// Drops a tiny sparkle behind the cursor, throttled so it stays subtle.
// Skipped on touch devices and when the user prefers reduced motion.
export default function MouseTrail() {
  const last = useRef(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarse = window.matchMedia('(pointer: coarse)').matches
    if (reduce || coarse) return

    function onMove(e) {
      const now = performance.now()
      if (now - last.current < 60) return // throttle ~16/sec
      last.current = now

      const s = document.createElement('span')
      s.className = 'trail-spark'
      s.textContent = SPARKS[Math.floor(Math.random() * SPARKS.length)]
      const jitter = (Math.random() * 10 - 5).toFixed(0)
      s.style.left = `${e.clientX + Number(jitter)}px`
      s.style.top = `${e.clientY + Number(jitter)}px`
      s.style.fontSize = `${Math.random() * 8 + 10}px`
      document.body.appendChild(s)
      // remove after the fade animation completes
      window.setTimeout(() => s.remove(), 750)
    }

    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return null
}
