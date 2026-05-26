import About from './About'
import Projects from './Projects'
import TechStack from './TechStack'
import Certifications from './Certifications'
import Education from './Education'
import Contact from './Contact'
import Achievements from './Achievements'
import Resume from './Resume'

// Treasure tiles, in hub grid order (3 / 3 / 2). `icon` is a PixelIcon name.
export const SECTIONS = [
  { id: 'about', title: 'About Me', icon: 'about', Component: About },
  { id: 'projects', title: 'Projects', icon: 'projects', Component: Projects },
  { id: 'tech', title: 'Tech Stack', icon: 'tech', Component: TechStack },
  { id: 'certifications', title: 'Certifications', icon: 'certifications', Component: Certifications },
  { id: 'education', title: 'Quest Log', icon: 'education', Component: Education },
  { id: 'contact', title: 'Contact', icon: 'contact', Component: Contact },
  { id: 'achievements', title: 'Achievements', icon: 'achievements', Component: Achievements },
  { id: 'resume', title: 'Resume', icon: 'resume', Component: Resume },
]
