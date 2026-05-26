import { useCallback, useEffect, useState } from 'react'
import Background from './components/Background'
import MouseTrail from './components/MouseTrail'
import BootScreen from './components/BootScreen'
import Hub from './components/Hub'
import Popup from './components/Popup'
import ProjectDetail from './components/ProjectDetail'
import { SECTIONS } from './sections'
import { projects } from './data'

// accent palettes the "Vibes" menu button cycles through
const THEMES = [
  { name: 'plum', vars: {
    '--plum': '#dda0dd', '--plum-bright': '#efc4ef', '--plum-deep': '#9a5fa0',
    '--plum-glow': 'rgba(221, 160, 221, 0.45)', '--plum-soft': 'rgba(221, 160, 221, 0.12)',
    '--titlebar': 'linear-gradient(90deg, #6a3a8c 0%, #9a5fa0 55%, #c77ec9 100%)',
  } },
  { name: 'teal', vars: {
    '--plum': '#9ad1d4', '--plum-bright': '#c8eef0', '--plum-deep': '#4a8b8e',
    '--plum-glow': 'rgba(154, 209, 212, 0.45)', '--plum-soft': 'rgba(154, 209, 212, 0.12)',
    '--titlebar': 'linear-gradient(90deg, #2e6b6b 0%, #4a8b8e 55%, #7ec9cc 100%)',
  } },
  { name: 'pink', vars: {
    '--plum': '#ffb3c6', '--plum-bright': '#ffd6e0', '--plum-deep': '#c46a82',
    '--plum-glow': 'rgba(255, 179, 198, 0.45)', '--plum-soft': 'rgba(255, 179, 198, 0.12)',
    '--titlebar': 'linear-gradient(90deg, #8c3a55 0%, #c46a82 55%, #ff9fb5 100%)',
  } },
  { name: 'gold', vars: {
    '--plum': '#f6d365', '--plum-bright': '#fbe9a7', '--plum-deep': '#b8923a',
    '--plum-glow': 'rgba(246, 211, 101, 0.45)', '--plum-soft': 'rgba(246, 211, 101, 0.12)',
    '--titlebar': 'linear-gradient(90deg, #8c6a2a 0%, #b8923a 55%, #f0cf6a 100%)',
  } },
]

export default function App() {
  const [started, setStarted] = useState(false)
  const [themeIdx, setThemeIdx] = useState(0)
  // a stack of open windows: { kind: 'section' | 'project', id }
  const [stack, setStack] = useState([])

  // apply the active palette by overriding the plum CSS vars on :root
  useEffect(() => {
    const root = document.documentElement
    for (const [k, v] of Object.entries(THEMES[themeIdx].vars)) root.style.setProperty(k, v)
  }, [themeIdx])
  const cycleTheme = useCallback(() => setThemeIdx((i) => (i + 1) % THEMES.length), [])

  const openSection = useCallback((id) => setStack([{ kind: 'section', id }]), [])
  const openProject = useCallback((id) => setStack((s) => [...s, { kind: 'project', id }]), [])
  const closeTop = useCallback(() => setStack((s) => s.slice(0, -1)), [])
  const goHome = useCallback(() => {
    setStack([])
    setStarted(false)
  }, [])

  // Escape closes the topmost window
  useEffect(() => {
    if (stack.length === 0) return
    const onKey = (e) => e.key === 'Escape' && closeTop()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [stack.length, closeTop])

  return (
    <>
      <Background />
      <MouseTrail />

      {!started ? (
        <BootScreen onStart={() => setStarted(true)} />
      ) : (
        <Hub onOpen={openSection} onHome={goHome} onCycleTheme={cycleTheme} />
      )}

      {stack.map((w, i) => {
        const z = 8000 + i * 20
        if (w.kind === 'section') {
          const sec = SECTIONS.find((s) => s.id === w.id)
          if (!sec) return null
          return (
            <Popup key={`s-${w.id}`} title={sec.title} icon={sec.icon} onClose={closeTop} style={{ zIndex: z }}>
              <sec.Component onOpenProject={openProject} onOpenSection={openSection} />
            </Popup>
          )
        }
        const p = projects.find((x) => x.id === w.id)
        if (!p) return null
        return (
          <Popup key={`p-${w.id}-${i}`} title={p.name} icon="projects" onClose={closeTop} style={{ zIndex: z }}>
            <ProjectDetail project={p} />
          </Popup>
        )
      })}

      <div className="crt" aria-hidden="true" />
    </>
  )
}
