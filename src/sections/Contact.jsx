import { socials, profile } from '../data'
import PixelIcon from '../components/PixelIcon'

export default function Contact() {
  return (
    <div>
      <div className="sec-head">
        <PixelIcon name="contact" size={28} />
        <h2>Say Hi!</h2>
        <span className="spark">✦</span>
      </div>

      <div className="contact-wrap">
        <PixelIcon name="mail" size={84} className="envelope" />
        <p className="contact-sub">
          Got a quest for me, or just want to chat about pixel art?
          <br />
          My inbox is always open ✦
        </p>

        <div className="social-grid">
          {socials.map((s) => (
            <a
              className="social"
              key={s.id}
              href={s.link}
              target={s.icon === 'mail' ? undefined : '_blank'}
              rel="noreferrer"
            >
              <span className="s-icon">
                <PixelIcon name={s.icon} size={26} />
              </span>
              <span className="s-text">
                <span className="s-label">{s.label}</span>
                <span className="s-handle">{s.handle}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
