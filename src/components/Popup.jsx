import PixelIcon from './PixelIcon'

// A centered Win95-style modal window. The dark overlay behind closes on
// click; the window itself stops propagation. Scales up on open. `style`
// lets the parent stack multiple popups via z-index.
export default function Popup({ title, icon, onClose, style, children }) {
  return (
    <div className="overlay" style={style} onClick={onClose}>
      <section
        className="popup"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="popup-bar">
          <span className="pb-icon">
            <PixelIcon name={icon} size={18} />
          </span>
          <span className="pb-title">{title}</span>
          <button className="pb-close" title="Close" aria-label="Close" onClick={onClose}>
            ✕
          </button>
        </header>
        <div className="popup-body">
          <div className="popup-inner">{children}</div>
        </div>
      </section>
    </div>
  )
}
