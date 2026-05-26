import { useCallback, useEffect, useRef, useState } from 'react'
import Background from './components/Background'
import MouseTrail from './components/MouseTrail'
import BootScreen from './components/BootScreen'
import Desktop from './components/Desktop'
import Taskbar from './components/Taskbar'
import { SECTIONS } from './sections'

const TASKBAR_H = 44

// preferred window sizes per program (clamped to the viewport when opened)
const SIZES = {
  about: { w: 660, h: 470 },
  projects: { w: 700, h: 540 },
  tech: { w: 540, h: 470 },
  achievements: { w: 620, h: 480 },
  education: { w: 620, h: 500 },
  resume: { w: 480, h: 480 },
  contact: { w: 560, h: 500 },
}

function useIsMobile() {
  const [mobile, setMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 720px)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 720px)')
    const on = () => setMobile(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return mobile
}

export default function App() {
  const [booted, setBooted] = useState(false)
  const [windows, setWindows] = useState([]) // { id, z, minimized, initial }
  const [activeId, setActiveId] = useState(null)
  const [startOpen, setStartOpen] = useState(false)
  const [visitors, setVisitors] = useState(() => {
    if (typeof localStorage === 'undefined') return 1337
    return Number(localStorage.getItem('rosheni_visits') || '1337')
  })
  const topZ = useRef(10)
  const isMobile = useIsMobile()

  // visitor counter — bump once per browser session
  useEffect(() => {
    try {
      const KEY = 'rosheni_visits'
      const total = Number(localStorage.getItem(KEY) || '1337')
      if (!sessionStorage.getItem('rosheni_counted')) {
        const next = total + 1
        localStorage.setItem(KEY, String(next))
        sessionStorage.setItem('rosheni_counted', '1')
        setVisitors(next)
      } else {
        setVisitors(total)
      }
    } catch {
      /* storage may be blocked — counter just stays put */
    }
  }, [])

  const focus = useCallback((id) => {
    topZ.current += 1
    const z = topZ.current
    setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, z, minimized: false } : w)))
    setActiveId(id)
  }, [])

  const open = useCallback((id) => {
    setStartOpen(false)
    topZ.current += 1
    // restore-size (used only if the user un-maximizes) is centered on screen
    const size = SIZES[id] || { w: 600, h: 460 }
    const w = Math.min(size.w, window.innerWidth - 24)
    const h = Math.min(size.h, window.innerHeight - TASKBAR_H - 24)
    const x = Math.max(8, Math.round((window.innerWidth - w) / 2))
    const y = Math.max(8, Math.round((window.innerHeight - TASKBAR_H - h) / 2))
    // single-window desktop: opening a program replaces whatever's open and
    // fills the screen (maximized)
    setWindows([{ id, z: topZ.current, minimized: false, maximized: true, initial: { x, y, w, h } }])
    setActiveId(id)
  }, [])

  const topmost = (ws) =>
    ws.filter((w) => !w.minimized).sort((a, b) => b.z - a.z)[0]?.id ?? null

  const close = useCallback((id) => {
    setWindows((ws) => {
      const next = ws.filter((w) => w.id !== id)
      setActiveId((cur) => (cur === id ? topmost(next) : cur))
      return next
    })
  }, [])

  const minimize = useCallback((id) => {
    setWindows((ws) => {
      const next = ws.map((w) => (w.id === id ? { ...w, minimized: true } : w))
      setActiveId((cur) => (cur === id ? topmost(next) : cur))
      return next
    })
  }, [])

  const taskClick = useCallback(
    (id) => {
      setStartOpen(false)
      const w = windows.find((x) => x.id === id)
      if (!w) return
      if (w.minimized) focus(id)
      else if (activeId === id) minimize(id)
      else focus(id)
    },
    [windows, activeId, focus, minimize],
  )

  const restart = useCallback(() => {
    setStartOpen(false)
    setWindows([])
    setActiveId(null)
    topZ.current = 10
    setBooted(false)
  }, [])

  // open About automatically once the desktop appears
  useEffect(() => {
    if (booted && windows.length === 0) {
      const t = setTimeout(() => open('about'), 350)
      return () => clearTimeout(t)
    }
  }, [booted]) // eslint-disable-line react-hooks/exhaustive-deps

  const openWindows = windows.map((w) => {
    const sec = SECTIONS.find((s) => s.id === w.id)
    return { ...w, title: sec.title, icon: sec.icon, Component: sec.Component }
  })

  return (
    <div onClick={() => startOpen && setStartOpen(false)}>
      <Background />
      <MouseTrail />

      {!booted && <BootScreen onDone={() => setBooted(true)} />}

      {booted && (
        <>
          <Desktop
            sections={SECTIONS}
            openWindows={openWindows}
            activeId={activeId}
            isMobile={isMobile}
            onOpen={open}
            onFocus={focus}
            onClose={close}
            onMinimize={minimize}
          />
          <Taskbar
            sections={SECTIONS}
            windows={openWindows}
            activeId={activeId}
            startOpen={startOpen}
            onToggleStart={() => setStartOpen((s) => !s)}
            onOpen={open}
            onTaskClick={taskClick}
            onRestart={restart}
            visitors={visitors}
          />
        </>
      )}

      <div className="crt" aria-hidden="true" />
    </div>
  )
}
