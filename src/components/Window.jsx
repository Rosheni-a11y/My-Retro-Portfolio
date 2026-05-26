import { useRef, useState, useCallback } from 'react'
import PixelIcon from './PixelIcon'

const TASKBAR_H = 44

// A draggable Win95-style window. Position/size/maximize are local state so
// they survive minimize (the window stays mounted, just hidden). On mobile we
// drop dragging and let CSS size it near-fullscreen.
export default function Window({
  win,
  active,
  isMobile,
  onFocus,
  onClose,
  onMinimize,
  children,
}) {
  const { id, title, icon, initial } = win
  const [pos, setPos] = useState({ x: initial.x, y: initial.y })
  const [size] = useState({ w: initial.w, h: initial.h })
  const [maxed, setMaxed] = useState(win.maximized ?? false)
  const drag = useRef(null)

  const onPointerDown = useCallback(
    (e) => {
      if (isMobile || maxed) return
      if (e.target.closest('.tb-btn')) return // don't drag from the buttons
      onFocus(id)
      drag.current = {
        startX: e.clientX,
        startY: e.clientY,
        baseX: pos.x,
        baseY: pos.y,
      }
      e.currentTarget.setPointerCapture(e.pointerId)
    },
    [id, isMobile, maxed, onFocus, pos.x, pos.y],
  )

  const onPointerMove = useCallback((e) => {
    if (!drag.current) return
    const dx = e.clientX - drag.current.startX
    const dy = e.clientY - drag.current.startY
    const maxX = window.innerWidth - 64
    const maxY = window.innerHeight - TASKBAR_H - 30
    setPos({
      x: Math.min(Math.max(drag.current.baseX + dx, -size.w + 120), maxX),
      y: Math.min(Math.max(drag.current.baseY + dy, 0), maxY),
    })
  }, [size.w])

  const onPointerUp = useCallback((e) => {
    drag.current = null
    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch {
      /* pointer already released */
    }
  }, [])

  const style = isMobile
    ? undefined // CSS handles mobile layout
    : maxed
      ? { left: 4, top: 4, width: 'calc(100vw - 8px)', height: `calc(100vh - ${TASKBAR_H + 8}px)`, zIndex: win.z }
      : { left: pos.x, top: pos.y, width: size.w, height: size.h, zIndex: win.z }

  const mobileStyle = isMobile
    ? { left: '3vw', top: 10, width: '94vw', height: `calc(100vh - ${TASKBAR_H + 20}px)`, zIndex: win.z }
    : undefined

  return (
    <section
      className={`window${active ? ' focused' : ''}`}
      style={style || mobileStyle}
      onPointerDown={() => onFocus(id)}
      hidden={win.minimized}
      role="dialog"
      aria-label={title}
    >
      <header
        className="titlebar"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onDoubleClick={() => !isMobile && setMaxed((m) => !m)}
      >
        <span className="tb-icon">
          <PixelIcon name={icon} size={18} />
        </span>
        <span className="tb-title">{title}</span>
        <div className="tb-btns">
          <button className="tb-btn" title="Minimize" onClick={() => onMinimize(id)}>
            _
          </button>
          {!isMobile && (
            <button className="tb-btn" title="Maximize" onClick={() => setMaxed((m) => !m)}>
              {maxed ? '🗗' : '☐'}
            </button>
          )}
          <button className="tb-btn close" title="Close" onClick={() => onClose(id)}>
            ✕
          </button>
        </div>
      </header>
      <div className="window-body">
        <div className="window-inner">{children}</div>
      </div>
    </section>
  )
}
