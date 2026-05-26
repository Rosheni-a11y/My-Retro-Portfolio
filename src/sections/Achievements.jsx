import { achievements } from '../data'
import PixelIcon from '../components/PixelIcon'

const RARITY = {
  common: '#9a9aab',
  rare: '#9ad1d4',
  epic: '#dda0dd',
  legendary: '#f6d365',
}

export default function Achievements() {
  return (
    <div>
      <div className="sec-head">
        <PixelIcon name="achievements" size={28} />
        <h2>Achievements</h2>
        <span className="spark">✦</span>
      </div>
      <p className="muted" style={{ marginBottom: 16, fontSize: 15 }}>
        {achievements.length} of many unlocked — gotta collect 'em all!
      </p>

      <div className="badge-grid">
        {achievements.map((a) => (
          <div className="badge" key={a.id} style={{ '--rar': RARITY[a.rarity] }}>
            <div className="medal">{a.icon}</div>
            <h4>{a.name}</h4>
            <span className="rar-tag">{a.rarity}</span>
            <p className="desc">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
