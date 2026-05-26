import { projects } from '../data'
import PixelIcon from '../components/PixelIcon'

export default function Projects() {
  return (
    <div>
      <div className="sec-head">
        <PixelIcon name="projects" size={28} />
        <h2>Projects</h2>
        <span className="spark">✦</span>
      </div>

      <div className="proj-grid">
        {projects.map((p) => (
          <article
            key={p.id}
            className="proj-card"
            style={{ '--card-accent': p.accent }}
          >
            <div className="proj-top">
              <div className="proj-iconbox">
                <PixelIcon name={p.icon} size={32} />
              </div>
              <h3>{p.name}</h3>
            </div>
            <p className="blurb">{p.blurb}</p>
            <div className="proj-tech">
              {p.tech.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <a className="proj-link" href={p.link} target="_blank" rel="noreferrer">
              View quest →
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}
