import { certifications } from '../data'
import PixelIcon from '../components/PixelIcon'

export default function Certifications() {
  return (
    <div className="section">
      <div className="sec-head">
        <PixelIcon name="certifications" size={30} />
        <h2>Certifications</h2>
        <span className="spark">✦</span>
      </div>
      <p className="sec-intro">Scrolls collected along the way 📜</p>

      <div className="cert-grid">
        {certifications.map((c) => (
          <article className="cert-card" key={c.id}>
            <div className="cert-icon" aria-hidden="true">{c.icon}</div>
            <div className="cert-body">
              <h4 className="cert-name">{c.name}</h4>
              <p className="cert-issuer">{c.issuer}</p>
            </div>
            <span className="cert-year">{c.year}</span>
          </article>
        ))}
      </div>
    </div>
  )
}
