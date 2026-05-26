import { useEffect, useRef, useState } from 'react'
import PixelIcon from './PixelIcon'

const LINES = [
  { text: 'RosheniOS  [Version 9.8.7 — Cozy Edition]', plum: true },
  { text: '(c) 2026 cozy systems inc.  all hearts reserved.' },
  { text: '' },
  { text: 'Booting kernel.....................', ok: true },
  { text: 'Mounting /dev/sparkles.............', ok: true },
  { text: 'Loading pixel art..................', ok: true },
  { text: 'Brewing coffee.....................', ok: true },
  { text: 'Summoning good vibes...............', ok: true },
  { text: '' },
  { text: 'Welcome back. Starting desktop ✦', plum: true },
]

const TOTAL_CHARS = LINES.reduce((n, l) => n + l.text.length, 0)
const SPEED = 14 // ms per character

export default function BootScreen({ onDone }) {
  const [li, setLi] = useState(0) // current line index
  const [ci, setCi] = useState(0) // char index within current line
  const [leaving, setLeaving] = useState(false)
  const finished = li >= LINES.length
  const timer = useRef(null)

  // type out lines character-by-character
  useEffect(() => {
    if (finished) return
    const line = LINES[li]
    if (ci < line.text.length) {
      timer.current = setTimeout(() => setCi((c) => c + 1), SPEED)
    } else {
      // pause briefly at end of line, then advance
      timer.current = setTimeout(() => {
        setLi((l) => l + 1)
        setCi(0)
      }, line.text ? 130 : 60)
    }
    return () => clearTimeout(timer.current)
  }, [li, ci, finished])

  // once typing is done, hold a beat then fade out
  useEffect(() => {
    if (!finished) return
    const t1 = setTimeout(() => setLeaving(true), 700)
    const t2 = setTimeout(() => onDone(), 1300)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [finished, onDone])

  function skip() {
    if (leaving) return
    setLeaving(true)
    setTimeout(() => onDone(), 500)
  }

  // progress: typed chars / total
  const typed = LINES.slice(0, li).reduce((n, l) => n + l.text.length, 0) + ci
  const pct = Math.min(100, Math.round((typed / TOTAL_CHARS) * 100))

  return (
    <div
      className={`boot${leaving ? ' leaving' : ''}`}
      onClick={skip}
      onKeyDown={skip}
      tabIndex={0}
      role="button"
      aria-label="Boot screen, click to skip"
    >
      <div className="boot-logo">
        <PixelIcon name="computer" size={48} />
        rosheni.exe
      </div>

      {LINES.map((line, i) => {
        if (i > li) return null
        const shown = i < li ? line.text : line.text.slice(0, ci)
        const lineDone = i < li
        return (
          <div key={i} className={`boot-line${line.plum ? ' plum' : ''}`}>
            {shown}
            {lineDone && line.ok ? <span className="ok">  [ OK ]</span> : null}
            {i === li && !finished ? <span className="boot-cursor" /> : null}
          </div>
        )
      })}

      <div className="boot-bar" aria-hidden="true">
        <i style={{ width: `${pct}%` }} />
      </div>
      <div className="boot-hint">{finished ? 'ready ✦' : 'click anywhere to skip'}</div>
    </div>
  )
}
