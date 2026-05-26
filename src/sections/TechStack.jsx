import { useEffect, useState } from 'react'
import { skills } from '../data'
import PixelIcon from '../components/PixelIcon'

export default function TechStack() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 120)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="section">
      <div className="sec-head">
        <PixelIcon name="tech" size={30} />
        <h2>Tech Stack</h2>
        <span className="spark">✦</span>
      </div>
      <p className="sec-intro">Skills leveled up through many quests — XP bars fill as you train ⚔️</p>

      {skills.map((group) => (
        <div className="skill-group" key={group.category}>
          <h3 className="skill-cat">{group.category}</h3>
          <div className="skill-list">
            {group.items.map((s) => (
              <div className="skill" key={s.name}>
                <div className="skill-meta">
                  <span className="nm">
                    <span className="skill-dot" />
                    {s.name}
                  </span>
                  <span className="lv">{s.level}%</span>
                </div>
                <div className="xp-track">
                  <div
                    className="xp-fill"
                    style={{ width: ready ? `${s.level}%` : 0 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
