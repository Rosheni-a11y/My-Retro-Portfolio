import { useState } from 'react'
import { about } from '../data'
import PixelIcon from '../components/PixelIcon'

export default function About({ onOpenSection }) {
  const [imgFailed, setImgFailed] = useState(false)
  const showPhoto = about.photo && !imgFailed
  // bio is one string; the "(boring professional version…)" line is split off into a hint
  const [bioMain, ...bioRest] = about.bio.split(/\n\n+/)
  const bioHint = bioRest.join(' ').replace(/^\(|\)\s*$/g, '').trim()

  return (
    <div className="section">
      <div className="sec-head">
        <PixelIcon name="about" size={30} />
        <h2>About Me</h2>
        <span className="spark">✦</span>
      </div>

      <div className="about-top">
        <div className="about-avatar">
          {showPhoto ? (
            <img
              className="about-photo"
              src={about.photo}
              alt={about.name}
              onError={() => setImgFailed(true)}
            />
          ) : (
            <span aria-hidden="true">👩‍💻</span>
          )}
        </div>
        <div>
          <h3 className="about-name">{about.name}</h3>
          <p className="about-title">{about.title}</p>
        </div>
      </div>

      {about.tagline && (
        <p className="about-tagline">
          <span className="spark" aria-hidden="true">✦</span> {about.tagline}
        </p>
      )}

      <p className="about-bio">{bioMain}</p>

      {bioHint && (
        <button className="about-hint" onClick={() => onOpenSection?.('resume')}>
          <PixelIcon name="resume" size={20} />
          <span>{bioHint}</span>
          <span className="about-hint-go" aria-hidden="true">→</span>
        </button>
      )}

      <div className="tag-row">
        {about.tags.map((t) => (
          <span key={t} className="tag">✦ {t}</span>
        ))}
      </div>

      <ul className="info-list">
        {about.info.map((row) => (
          <li key={row.label} className="info-row">
            <span className="info-icon" aria-hidden="true">{row.icon}</span>
            <span className="info-label">{row.label}</span>
            {row.link ? (
              <a className="info-value" href={row.link} target="_blank" rel="noreferrer">
                {row.value}
              </a>
            ) : (
              <span className="info-value">{row.value}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
