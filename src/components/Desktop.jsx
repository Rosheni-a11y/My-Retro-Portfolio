import Window from './Window'
import PixelIcon from './PixelIcon'

export default function Desktop({
  sections,
  openWindows,
  activeId,
  isMobile,
  onOpen,
  onFocus,
  onClose,
  onMinimize,
}) {
  return (
    <main className="desktop" id="desktop">
      {/* clickable program icons */}
      <div className="icon-layer">
        {sections.map((s) => (
          <button key={s.id} className="desk-icon" onDoubleClick={() => onOpen(s.id)} onClick={(e) => {
            // single click opens too (friendlier than strict dbl-click)
            if (e.detail === 1) onOpen(s.id)
          }}>
            <span className="icon-art">
              <PixelIcon name={s.icon} size={44} />
            </span>
            <span className="label">{s.title}</span>
          </button>
        ))}
      </div>

      {/* ambient desktop decorations */}
      {!isMobile && (
        <>
          <PixelIcon name="coffee" size={40} className="desk-deco" style={{ right: 26, bottom: 30 }} />
          <PixelIcon name="sparkle" size={20} className="desk-deco" style={{ right: 120, bottom: 90 }} />
          <PixelIcon name="heart" size={22} className="desk-deco" style={{ right: 60, top: 40 }} />
          <PixelIcon name="star" size={18} className="desk-deco" style={{ right: 200, top: 120 }} />
        </>
      )}

      {/* open windows */}
      {openWindows.map((w) => {
        const Body = w.Component
        return (
          <Window
            key={w.id}
            win={w}
            active={w.id === activeId}
            isMobile={isMobile}
            onFocus={onFocus}
            onClose={onClose}
            onMinimize={onMinimize}
          >
            <Body />
          </Window>
        )
      })}
    </main>
  )
}
