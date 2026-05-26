import About from './About'
import Projects from './Projects'
import TechStack from './TechStack'
import Achievements from './Achievements'
import Education from './Education'
import Resume from './Resume'
import Contact from './Contact'

// The desktop programs. `icon` keys map to PixelIcon art; `Component` is the
// window body. Order here = order of desktop icons & Start-menu entries.
export const SECTIONS = [
  { id: 'about', title: 'About Me', icon: 'about', Component: About },
  { id: 'projects', title: 'Projects', icon: 'projects', Component: Projects },
  { id: 'tech', title: 'Tech Stack', icon: 'tech', Component: TechStack },
  { id: 'achievements', title: 'Achievements', icon: 'achievements', Component: Achievements },
  { id: 'education', title: 'Quest Log', icon: 'education', Component: Education },
  { id: 'resume', title: 'Resume', icon: 'resume', Component: Resume },
  { id: 'contact', title: 'Contact', icon: 'contact', Component: Contact },
]
