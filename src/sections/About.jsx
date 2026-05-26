import { useEffect, useState } from 'react'
import { profile } from '../data'
import PixelIcon from '../components/PixelIcon'

export default function About() {
  const [xp, setXp] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setXp(profile.xp), 120)
    return () => clearTimeout(t)
  }, [])

  return (
    <div>
      <div className="sec-head">
        <PixelIcon name="about" size={28} />
        <h2>About Me</h2>
        <span className="spark">✦</span>
      </div>

      <div className="about-grid">
        <div className="avatar-wrap">
          <div className="avatar-frame">
            <PixelIcon name="about" size={120} />
          </div>
          <span className="lvl-badge">★ Level {profile.level}</span>
        </div>

        <div>
          <h1 className="about-name">{profile.name}</h1>
          <div className="about-title">
            <PixelIcon name="sparkle" size={14} />
            {profile.title}
          </div>
          <p className="about-bio">{profile.bio}</p>

          <div className="tag-row">
            {profile.tags.map((t) => (
              <span className="tag" key={t}>
                <span className="spark">✦</span>
                {t}
              </span>
            ))}
          </div>

          <div className="xp-line">
            <div className="xp-meta">
              <span>EXP to Level {profile.level + 1}</span>
              <span>{profile.xp} / 100</span>
            </div>
            <div className="xp-track">
              <div
                className="xp-fill"
                style={{ width: `${xp}%`, background: 'linear-gradient(90deg, var(--plum-deep), var(--plum), var(--plum-bright))' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
