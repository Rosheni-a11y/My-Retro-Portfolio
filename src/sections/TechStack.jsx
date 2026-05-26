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
    <div>
      <div className="sec-head">
        <PixelIcon name="tech" size={28} />
        <h2>Tech Stack</h2>
        <span className="spark">✦</span>
      </div>
      <p className="muted" style={{ marginBottom: 16, fontSize: 15 }}>
        Skills leveled up through many quests. EXP bars fill as you train ⚔️
      </p>

      <div className="skill-list">
        {skills.map((s) => (
          <div className="skill" key={s.name}>
            <div className="skill-meta">
              <span className="nm">
                <span style={{ width: 10, height: 10, borderRadius: 2, background: s.color, display: 'inline-block', boxShadow: `0 0 6px ${s.color}` }} />
                {s.name}
              </span>
              <span className="lv">Lv {Math.round(s.level / 10)} · {s.level}%</span>
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
