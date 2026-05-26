import { useCallback, useEffect, useState } from 'react'
import Background from './components/Background'
import MouseTrail from './components/MouseTrail'
import BootScreen from './components/BootScreen'
import Hub from './components/Hub'
import Popup from './components/Popup'
import ProjectDetail from './components/ProjectDetail'
import { SECTIONS } from './sections'
import { projects } from './data'

export default function App() {
  const [started, setStarted] = useState(false)
  // a stack of open windows: { kind: 'section' | 'project', id }
  const [stack, setStack] = useState([])

  const openSection = useCallback((id) => setStack([{ kind: 'section', id }]), [])
  const openProject = useCallback((id) => setStack((s) => [...s, { kind: 'project', id }]), [])
  const closeTop = useCallback(() => setStack((s) => s.slice(0, -1)), [])

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
        <Hub onOpen={openSection} />
      )}

      {stack.map((w, i) => {
        const z = 8000 + i * 20
        if (w.kind === 'section') {
          const sec = SECTIONS.find((s) => s.id === w.id)
          if (!sec) return null
          return (
            <Popup key={`s-${w.id}`} title={sec.title} icon={sec.icon} onClose={closeTop} style={{ zIndex: z }}>
              <sec.Component onOpenProject={openProject} />
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
