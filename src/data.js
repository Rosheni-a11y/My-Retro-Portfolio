// ╔══════════════════════════════════════════════════════════════╗
// ║  EDIT ME!  All of your portfolio content lives in this file.   ║
// ║  Swap the placeholder text/links for your own and you're done. ║
// ╚══════════════════════════════════════════════════════════════╝

export const profile = {
  name: 'Rosheni',
  handle: 'rosheni.exe',
  title: 'Level 2 Developer',
  level: 2,
  xp: 65, // 0-100, fills the header XP bar
  tagline: 'building cozy little corners of the internet ✦',
  bio: `Hi! I'm a developer who loves turning caffeine into pixels.
I build playful, polished web experiences and get way too excited
about tiny animations. When I'm not coding you'll find me collecting
sticker packs and replaying retro games.`,
  tags: ['Frontend', 'UI/UX', 'Pixel Art', 'Coffee ☕', 'Cats 🐱'],
  email: 'roshenibolonne@gmail.com',
}

export const projects = [
  {
    id: 'p1',
    icon: 'rocket',
    name: 'Starlight CMS',
    blurb: 'A cozy headless CMS with a drag-and-drop editor and live preview.',
    tech: ['React', 'Node', 'Postgres'],
    link: '#',
    accent: '#DDA0DD',
  },
  {
    id: 'p2',
    icon: 'game',
    name: 'Pixel Quest',
    blurb: 'A tiny browser RPG built in vanilla canvas with hand-drawn sprites.',
    tech: ['JavaScript', 'Canvas', 'Web Audio'],
    link: '#',
    accent: '#9ad1d4',
  },
  {
    id: 'p3',
    icon: 'chart',
    name: 'Bloom Analytics',
    blurb: 'Friendly dashboards that make boring metrics feel delightful.',
    tech: ['TypeScript', 'D3', 'Vite'],
    link: '#',
    accent: '#ffb3c6',
  },
  {
    id: 'p4',
    icon: 'globe',
    name: 'Wander Map',
    blurb: 'An interactive travel journal with pins, photos & little stories.',
    tech: ['React', 'Mapbox', 'Firebase'],
    link: '#',
    accent: '#c3f584',
  },
]

export const skills = [
  { name: 'HTML / CSS', level: 95, color: '#ffb3c6' },
  { name: 'JavaScript', level: 90, color: '#f6e05e' },
  { name: 'React', level: 88, color: '#9ad1d4' },
  { name: 'TypeScript', level: 78, color: '#7aa2f7' },
  { name: 'Node.js', level: 72, color: '#c3f584' },
  { name: 'Pixel Art', level: 85, color: '#DDA0DD' },
]

export const achievements = [
  { id: 'a1', icon: '🏆', name: 'First Commit', desc: 'Pushed your very first line of code.', rarity: 'common' },
  { id: 'a2', icon: '🌟', name: '100 Day Streak', desc: 'Coded every day for 100 days straight.', rarity: 'rare' },
  { id: 'a3', icon: '🚀', name: 'Shipped It', desc: 'Launched a project used by real humans.', rarity: 'epic' },
  { id: 'a4', icon: '🐛', name: 'Bug Slayer', desc: 'Squashed 500+ bugs and counting.', rarity: 'rare' },
  { id: 'a5', icon: '🎨', name: 'Pixel Perfect', desc: 'Matched a design 1:1, down to the pixel.', rarity: 'epic' },
  { id: 'a6', icon: '💎', name: 'Open Source Hero', desc: 'Merged into a project with 1k+ stars.', rarity: 'legendary' },
]

export const education = [
  {
    id: 'e1',
    year: '2024',
    title: 'B.Sc. Computer Science',
    place: 'University of the Internet',
    desc: 'Graduated with honors. Focused on web systems & HCI.',
    status: 'complete',
  },
  {
    id: 'e2',
    year: '2023',
    title: 'Frontend Engineering Cert',
    place: 'Codédex Academy',
    desc: 'Completed the full interactive frontend track.',
    status: 'complete',
  },
  {
    id: 'e3',
    year: '2022',
    title: 'Hackathon Winner',
    place: 'CozyHacks',
    desc: 'Won "Best Design" for a pixel-art productivity app.',
    status: 'complete',
  },
  {
    id: 'e4',
    year: 'NOW',
    title: 'Lifelong Learning',
    place: 'Everywhere',
    desc: 'Currently leveling up in 3D & shaders. The quest continues!',
    status: 'active',
  },
]

export const socials = [
  { id: 's1', label: 'GitHub', handle: '@rosheni', icon: 'github', link: 'https://github.com' },
  { id: 's2', label: 'LinkedIn', handle: '/in/rosheni', icon: 'linkedin', link: 'https://linkedin.com' },
  { id: 's3', label: 'Twitter', handle: '@rosheni', icon: 'twitter', link: 'https://twitter.com' },
  { id: 's4', label: 'Email', handle: 'roshenibolonne@gmail.com', icon: 'mail', link: 'mailto:roshenibolonne@gmail.com' },
]

// The resume "download". Drop a real PDF at /public/resume.pdf to wire it up.
export const resumeUrl = '/resume.pdf'
