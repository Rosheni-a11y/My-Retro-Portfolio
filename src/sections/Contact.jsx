import { contact } from '../data'
import PixelIcon from '../components/PixelIcon'

export default function Contact() {
  return (
    <div className="section">
      <div className="sec-head">
        <PixelIcon name="contact" size={30} />
        <h2>Contact</h2>
        <span className="spark">✦</span>
      </div>
      <p className="sec-intro">Send a signal — I'd love to hear from you ✦</p>

      <div className="contact-grid">
        {contact.map((c) => (
          <a
            className="contact-card"
            key={c.id}
            href={c.link}
            target={c.link.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
          >
            <span className="contact-icon">
              <PixelIcon name={c.icon} size={28} />
            </span>
            <span className="contact-text">
              <span className="contact-label">{c.label}</span>
              <span className="contact-handle">{c.handle}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
