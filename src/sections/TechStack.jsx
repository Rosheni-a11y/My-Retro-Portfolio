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

      <div className="skill-list">
        {skills.map((s) => (
          <div className="skill" key={s.name}>
            <div className="skill-meta">
              <span className="nm">
                <span
                  className="skill-dot"
                  style={{ background: s.color, boxShadow: `0 0 6px ${s.color}` }}
                />
                {s.name}
              </span>
              <span className="lv" style={{ color: s.color }}>{s.level}%</span>
            </div>
            <div className="xp-track">
              <div
                className="xp-fill"
                style={{
                  width: ready ? `${s.level}%` : 0,
                  background: `linear-gradient(90deg, ${s.color}, color-mix(in srgb, ${s.color} 55%, #fff))`,
                  boxShadow: `0 0 10px ${s.color}`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
