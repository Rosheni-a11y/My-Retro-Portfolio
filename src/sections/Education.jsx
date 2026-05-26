import { education } from '../data'
import PixelIcon from '../components/PixelIcon'

export default function Education() {
  return (
    <div>
      <div className="sec-head">
        <PixelIcon name="education" size={28} />
        <h2>Quest Log</h2>
        <span className="spark">✦</span>
      </div>
      <p className="muted" style={{ marginBottom: 18, fontSize: 15 }}>
        The journey so far — completed quests &amp; the one still in progress.
      </p>

      <div className="quest-log">
        {education.map((e) => (
          <div className={`quest ${e.status}`} key={e.id}>
            <div className="quest-rail">
              <div className="quest-node">{e.status === 'active' ? '⚔' : '✓'}</div>
            </div>
            <div className="quest-card">
              <h4>
                {e.title}
                <span className="year-pill">{e.year}</span>
                <span className={`quest-status ${e.status}`}>
                  {e.status === 'active' ? 'IN PROGRESS' : 'COMPLETE'}
                </span>
              </h4>
              <div className="place">{e.place}</div>
              <p className="desc">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
