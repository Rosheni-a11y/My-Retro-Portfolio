import { education } from '../data'
import PixelIcon from '../components/PixelIcon'

export default function Education() {
  return (
    <div className="section">
      <div className="sec-head">
        <PixelIcon name="education" size={30} />
        <h2>Quest Log</h2>
        <span className="spark">✦</span>
      </div>
      <p className="sec-intro">The journey so far — active quests &amp; completed chapters 📖</p>

      <div className="quest-log">
        {education.map((e) => (
          <div className={`quest ${e.status}`} key={e.id}>
            <div className="quest-rail">
              <span className={`quest-dot ${e.status}`} aria-hidden="true" />
            </div>

            <div className="quest-card">
              <div className="quest-top">
                <span className="year-pill">{e.year}</span>
                <span className={`quest-status ${e.status}`}>
                  {e.status === 'active' ? 'ACTIVE' : 'COMPLETE'}
                </span>
              </div>

              <h4 className="quest-title">{e.title}</h4>
              <p className="quest-place">{e.place}</p>
              <p className="quest-meta">
                <span>🗓 {e.period}</span>
                {e.gpa && <span className="quest-gpa">⭐ GPA: {e.gpa}</span>}
              </p>

              {e.coursework && (
                <div className="quest-block">
                  <h5 className="quest-sublabel">Relevant Coursework</h5>
                  <div className="course-tags">
                    {e.coursework.map((c) => (
                      <span key={c} className="course-tag">{c}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="quest-block">
                <h5 className="quest-sublabel">{e.activitiesLabel}</h5>
                <ul className="activity-list">
                  {e.activities.map((a) => (
                    <li key={a}>⚑ {a}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
