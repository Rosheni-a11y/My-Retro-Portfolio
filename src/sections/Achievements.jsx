import { achievements } from '../data'
import PixelIcon from '../components/PixelIcon'

const RARITY = {
  common: '#8888aa',
  rare: '#9ad1d4',
  epic: '#dda0dd',
  legendary: '#f6e05e',
}

export default function Achievements() {
  return (
    <div className="section">
      <div className="sec-head">
        <PixelIcon name="achievements" size={30} />
        <h2>Achievements</h2>
        <span className="spark">✦</span>
      </div>
      <p className="sec-intro">Trophies unlocked on the hunt 🏆</p>

      <div className="ach-list">
        {achievements.map((a) => (
          <article className="ach-card" key={a.id} style={{ '--rar': RARITY[a.rarity] }}>
            <div className="ach-medal" aria-hidden="true">{a.icon}</div>
            <div className="ach-body">
              <div className="ach-top">
                <h4 className="ach-name">{a.name}</h4>
                <span className="rar-tag">{a.rarity}</span>
              </div>
              <p className="ach-desc">{a.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
