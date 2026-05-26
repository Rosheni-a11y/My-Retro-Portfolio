import PixelIcon from './PixelIcon'

export default function ProjectDetail({ project: p }) {
  const hasRepo = p.link && p.link !== '#'
  return (
    <div className="section pd">
      <div className="pd-head">
        <span className="pd-gem">
          <PixelIcon name="projects" size={40} />
        </span>
        <div>
          <h2 className="pd-title">{p.name}</h2>
          {p.sub && <p className="pd-sub">{p.sub}</p>}
        </div>
        {p.status && <span className="proj-status">{p.status}</span>}
      </div>

      <h3 className="pd-label">⚔ Tech Stack</h3>
      <div className="proj-tech">
        {p.tech.map((t) => (
          <span key={t} className="pill">{t}</span>
        ))}
      </div>

      <h3 className="pd-label">📜 Description</h3>
      <p className="pd-desc">{p.desc}</p>

      <h3 className="pd-label">🔗 Repository</h3>
      {hasRepo ? (
        <a className="repo-btn" href={p.link} target="_blank" rel="noreferrer">
          <PixelIcon name="github" size={20} />
          View on GitHub →
        </a>
      ) : (
        <span className="repo-btn disabled" aria-disabled="true">
          🔒 Repo coming soon
        </span>
      )}
    </div>
  )
}
