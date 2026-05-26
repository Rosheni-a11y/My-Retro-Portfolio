import { about } from '../data'
import PixelIcon from '../components/PixelIcon'

export default function About() {
  return (
    <div className="section">
      <div className="sec-head">
        <PixelIcon name="about" size={30} />
        <h2>About Me</h2>
        <span className="spark">✦</span>
      </div>

      <div className="about-top">
        <div className="about-avatar" aria-hidden="true">👩‍💻</div>
        <div>
          <h3 className="about-name">{about.name}</h3>
          <p className="about-title">{about.title}</p>
        </div>
      </div>

      <p className="about-bio">{about.bio}</p>

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
