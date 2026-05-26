import { useEffect, useRef, useState } from 'react'
import PixelIcon from './PixelIcon'

// Each line types out char-by-char. `tail` renders after the typed `text`
// (used for the coloured ✓ checks / values so the cursor lands cleanly).
const LINES = [
  { text: '> RosheniOS BIOS v4.20 — Neural Core Edition™', plum: true },
  { text: '> Power-on self test...', tail: ' ✓ CPU ✓ GPU ✓ Caffeine', ok: true },
  { text: '> import numpy, torch, cv2...', tail: ' modules loaded', ok: true },
  { text: '> Mounting C:\\PROJECTS...', tail: ' 6 treasures found', ok: true },
  { text: '> model.fit(dataset=curiosity)...', tail: ' loss 0.0042 · acc 99%', ok: true },
  { text: '> Compiling dreams.py...', tail: ' build passed', ok: true },
  { text: '> Welcome to RosheniOS 95 ✦', plum: true },
]

const SPEED = 22 // ms per character

export default function BootScreen({ onStart }) {
  const [li, setLi] = useState(0) // current line index
  const [ci, setCi] = useState(0) // char index within current line
  const finished = li >= LINES.length
  const timer = useRef(null)

  // type out lines character-by-character
  useEffect(() => {
    if (finished) return
    const line = LINES[li]
    if (ci < line.text.length) {
      timer.current = setTimeout(() => setCi((c) => c + 1), SPEED)
    } else {
      timer.current = setTimeout(() => {
        setLi((l) => l + 1)
        setCi(0)
      }, 220)
    }
    return () => clearTimeout(timer.current)
  }, [li, ci, finished])

  return (
    <div className="boot" role="region" aria-label="Boot sequence">
      <div className="boot-logo">
        <PixelIcon name="computer" size={48} />
        RosheniOS 95
      </div>

      <div className="boot-term">
        {LINES.map((line, i) => {
          if (i > li) return null
          const typing = i === li && !finished
          const shown = i < li ? line.text : line.text.slice(0, ci)
          const doneTyping = i < li
          return (
            <div key={i} className={`boot-line${line.plum ? ' plum' : ''}`}>
              {shown}
              {doneTyping && line.tail ? (
                <span className={line.ok ? 'ok' : ''}>{line.tail}</span>
              ) : null}
              {typing ? <span className="boot-cursor" /> : null}
            </div>
          )
        })}
      </div>

      {finished && (
        <button className="hunt-start" onClick={onStart} autoFocus>
          Start Treasure Hunt ✦
        </button>
      )}
    </div>
  )
}
