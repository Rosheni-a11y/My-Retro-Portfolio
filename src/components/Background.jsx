import Starfield from './Starfield'
import FloatingElements from './FloatingElements'

// All ambient back layers: gradient void + stars + floating glyphs.
// The CRT overlay lives separately so it can sit above the windows.
export default function Background() {
  return (
    <div className="bg-root" aria-hidden="true">
      <Starfield count={90} />
      <FloatingElements count={13} />
    </div>
  )
}
