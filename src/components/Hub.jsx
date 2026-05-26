import { useEffect, useRef, useState } from 'react'
import { profile } from '../data'
import { SECTIONS } from '../sections'
import PixelIcon from './PixelIcon'
import Popup from './Popup'

export default function Hub({ onOpen, onHome, onCycleTheme }) {
  const huntRef = useRef(null)
  const litTimer = useRef(null)
  const [helpOpen, setHelpOpen] = useState(false)
  const [lit, setLit] = useState(false)

  useEffect(() => () => clearTimeout(litTimer.current), [])

  // scroll down to the grid and spotlight the Resume treasure
  const huntForTreasure = () => {
    huntRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setLit(true)
    clearTimeout(litTimer.current)
    litTimer.current = setTimeout(() => setLit(false), 2200)
  }

  const MENU = [
    { icon: '⏻', label: 'Respawn', onClick: onHome },
    { icon: '🎨', label: 'Vibes', onClick: onCycleTheme },
    { icon: '🗺️', label: 'Hunt', onClick: huntForTreasure },
    { icon: '🧭', label: 'Clues', onClick: () => setHelpOpen(true) },
  ]

  return (
    <main className="hub">
     <div className="hub-inner">
      <header className="hub-head">
        <h1 className="hub-title">✦ Choose Your Hunt ✦</h1>
        <p className="hub-sub">click a treasure to explore</p>
      </header>

      {/* mini profile card */}
      <section className="profile-card">
        <div className="pc-avatar" aria-hidden="true">{profile.avatar}</div>
        <div className="pc-body">
          <div className="pc-toprow">
            <h2 className="pc-name">{profile.name}</h2>
            <span className="pc-handle">{profile.handle}</span>
          </div>
          <p className="pc-title">{profile.title}</p>
          <p className="pc-tagline">{profile.tagline}</p>

          <div className="pc-tags">
            {profile.tags.map((t) => (
              <span key={t} className="pc-tag">{t}</span>
            ))}
          </div>

          <div className="xp-line">
            <div className="xp-meta">
              <span>LVL {profile.level}</span>
              <span>{profile.xp} / 100 XP</span>
            </div>
            <div className="xp-track">
              <div className="xp-fill" style={{ width: `${profile.xp}%`, background: 'linear-gradient(90deg,#9ad1d4,#dda0dd)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* treasure grid container with retro menu bar */}
      <section className="hunt-frame" ref={huntRef}>
        <div className="menu-bar">
          {MENU.map((m) => (
            <button key={m.label} className="menu-item" onClick={m.onClick}>
              <span aria-hidden="true">{m.icon}</span> {m.label}
            </button>
          ))}
        </div>

        <div className="treasure-grid">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              className={`treasure${s.id === 'resume' && lit ? ' lit' : ''}`}
              onClick={() => onOpen(s.id)}
            >
              <span className="t-icon">
                <PixelIcon name={s.icon} size={48} />
              </span>
              <span className="t-label">{s.title}</span>
            </button>
          ))}
        </div>
      </section>

      <footer className="hub-foot">
        <span>✦</span> press ESC to close a treasure · made with pixels &amp; curiosity <span>✦</span>
      </footer>
     </div>

      {helpOpen && (
        <Popup title="Clues" icon="sparkle" onClose={() => setHelpOpen(false)}>
          <div className="section">
            <div className="sec-head">
              <PixelIcon name="sparkle" size={30} />
              <h2>How to Hunt</h2>
              <span className="spark">✦</span>
            </div>
            <p className="sec-intro">Lost, explorer? Here are your clues for navigating RosheniOS 95.</p>
            <ul className="help-list">
              <li><b>Click a treasure</b> in the grid to open it.</li>
              <li>Press <b>ESC</b> (or the ✕) to close any window.</li>
              <li><b>⏻ Respawn</b> — reboot back to the start screen.</li>
              <li><b>🎨 Vibes</b> — shuffle the whole site's color theme.</li>
              <li><b>🗺️ Hunt</b> — jump to the grid &amp; spotlight the Resume treasure.</li>
              <li><b>🧭 Clues</b> — open this guide anytime.</li>
            </ul>
          </div>
        </Popup>
      )}
    </main>
  )
}
