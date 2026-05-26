import { useState } from 'react'
import { resumeUrl, profile } from '../data'
import PixelIcon from '../components/PixelIcon'

export default function Resume() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className="sec-head">
        <PixelIcon name="resume" size={28} />
        <h2>Resume</h2>
        <span className="spark">✦</span>
      </div>

      <div className="resume-wrap">
        <p>
          {open
            ? 'You found the loot! Grab my resume below ✨'
            : 'A treasure chest awaits. Click it to reveal the goods!'}
        </p>

        <button
          className={`chest${open ? ' open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close chest' : 'Open chest'}
        >
          <span className="chest-glow" style={glowStyle} aria-hidden="true" />
          <PixelIcon
            name={open ? 'chestOpen' : 'resume'}
            size={120}
            style={{ position: 'relative', zIndex: 1 }}
          />
        </button>

        {open && (
          <a
            className="treasure-btn"
            href={resumeUrl}
            download={`${profile.name}-resume.pdf`}
          >
            <PixelIcon name="star" size={20} />
            Download Resume
          </a>
        )}

        <p className="faint" style={{ fontSize: 13 }}>
          Tip: drop your PDF at <code>/public/resume.pdf</code> to wire up the download.
        </p>
      </div>
    </div>
  )
}

const glowStyle = {
  position: 'absolute',
  inset: '-24px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(246,211,101,0.45), rgba(221,160,221,0.25) 50%, transparent 70%)',
  filter: 'blur(6px)',
  zIndex: 0,
}
