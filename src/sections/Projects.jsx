import { projects } from '../data'
import PixelIcon from '../components/PixelIcon'

export default function Projects({ onOpenProject }) {
  return (
    <div className="section">
      <div className="sec-head">
        <PixelIcon name="projects" size={30} />
        <h2>Projects</h2>
        <span className="spark">✦</span>
      </div>
      <p className="sec-intro">A chest of builds — click a treasure to open it ✦</p>

      <ul className="proj-list">
        {projects.map((p) => (
          <li key={p.id}>
            <button className="proj-row" onClick={() => onOpenProject?.(p.id)}>
              <span className="proj-gem">
                <PixelIcon name="projects" size={26} />
              </span>
              <span className="proj-name">{p.name}</span>
              {p.status && <span className="proj-status">{p.status}</span>}
              <span className="proj-open" aria-hidden="true">↗</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
