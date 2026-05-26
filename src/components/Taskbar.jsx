import { useEffect, useState } from 'react'
import PixelIcon from './PixelIcon'

function useClock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])
  return now
}

export default function Taskbar({
  sections,
  windows,
  activeId,
  startOpen,
  onToggleStart,
  onOpen,
  onTaskClick,
  onRestart,
  visitors,
}) {
  const now = useClock()
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const pad = String(visitors).padStart(6, '0')

  return (
    <>
      {startOpen && (
        <nav className="start-menu" onClick={(e) => e.stopPropagation()}>
          <div className="start-rail">rosheni.exe</div>
          <div className="start-list">
            {sections.map((s) => (
              <button key={s.id} className="start-row" onClick={() => onOpen(s.id)}>
                <PixelIcon name={s.icon} size={22} />
                {s.title}
              </button>
            ))}
            <div className="start-sep" />
            <button className="start-row" onClick={onRestart}>
              <PixelIcon name="sparkle" size={22} />
              Restart
            </button>
          </div>
        </nav>
      )}

      <footer className="taskbar">
        <button
          className={`start-btn${startOpen ? ' active' : ''}`}
          onClick={(e) => {
            e.stopPropagation()
            onToggleStart()
          }}
        >
          <PixelIcon name="sparkle" size={20} />
          <span className="lbl">Start</span>
        </button>

        <div className="tb-divider" />

        <div className="task-items">
          {windows.map((w) => (
            <button
              key={w.id}
              className={`task-item${w.id === activeId && !w.minimized ? ' active' : ''}`}
              onClick={() => onTaskClick(w.id)}
              title={w.title}
            >
              <PixelIcon name={w.icon} size={16} />
              <span>{w.title}</span>
            </button>
          ))}
        </div>

        <div className="tray">
          <div className="visitors" title="Visitor counter">
            <PixelIcon name="heart" size={16} />
            <b>{pad}</b>
          </div>
          <div className="tray-sep" />
          <div className="clock" title={now.toLocaleDateString()}>
            {time}
          </div>
        </div>
      </footer>
    </>
  )
}
