import { profile } from '../data'
import { SECTIONS } from '../sections'
import PixelIcon from './PixelIcon'

const MENU = [
  { icon: '📂', label: 'File' },
  { icon: '🔍', label: 'View' },
  { icon: '🗺️', label: 'Hunt' },
  { icon: '❓', label: 'Help' },
]

export default function Hub({ onOpen }) {
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
      <section className="hunt-frame">
        <div className="menu-bar">
          {MENU.map((m) => (
            <span key={m.label} className="menu-item">
              <span aria-hidden="true">{m.icon}</span> {m.label}
            </span>
          ))}
        </div>

        <div className="treasure-grid">
          {SECTIONS.map((s) => (
            <button key={s.id} className="treasure" onClick={() => onOpen(s.id)}>
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
    </main>
  )
}
