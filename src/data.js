// ╔══════════════════════════════════════════════════════════════╗
// ║  EDIT ME!  All of your portfolio content lives in this file.   ║
// ║  RosheniOS 95 ✦ — treasure-hunt edition.                       ║
// ╚══════════════════════════════════════════════════════════════╝

// ---- mini profile shown on the hub card (playful, keep the tone!) ----
export const profile = {
  name: 'Rosheni Bolonne',
  handle: 'rosheni.exe',
  avatar: '👩‍💻',
  title: 'Lvl 3 AI Explorer ✦',
  level: 3,
  xp: 78, // 0-100, fills the hub XP bar
  tagline: 'turning caffeine + curiosity into neural nets....',
  tags: ['AI / ML', 'Data Science', 'Computer Vision', 'NLP', 'MERN Stack', 'Python'],
}

// ---- ABOUT ME ----
export const about = {
  name: 'Rosheni Bolonne',
  photo: '/profile.png', // drop your photo in /public as profile.jpg (falls back to emoji if missing)
  title: 'Third-Year Undergraduate | IT — AI Specialization',
  bio: `Bio science kid turned AI nerd. I learn by building stuff nobody asked for, running into errors at 2AM, and mass consuming caffeine. Sometimes the code works. Sometimes it's art. Currently obsessed with making machines read emotions, answer exam questions, and predict sales ,basically everything I'm bad at doing myself.

(for the boring professional version, go hunt the Resume treasure )`,
  tags: ['AI / ML', 'Data Science', 'MERN Stack', 'Computer Vision', 'NLP', 'Coffee-Powered ☕'],
  tagline: "teaching machines to be smart so I don't have to be",
  info: [
    { icon: '📍', label: 'Location', value: 'Moratuwa, Sri Lanka' },
    { icon: '✉️', label: 'Email', value: 'roshenibolonne@gmail.com', link: 'https://mail.google.com/mail/?view=cm&fs=1&to=roshenibolonne@gmail.com' },
    { icon: '🐙', label: 'GitHub', value: 'Rosheni-a11y', link: 'https://github.com/Rosheni-a11y' },
    { icon: '💼', label: 'LinkedIn', value: 'Rosheni Bolonne', link: 'https://www.linkedin.com/in/roshenibolonne/' },
  ],
}

// ---- PROJECTS ---- (only names shown first; click to expand)
export const projects = [
  {
    id: 'p1',
    name: 'StudyBuddy AI',
    sub: 'RAG-Powered Study Assistant',
    status: 'In Progress',
    tech: ['Python', 'Flask', 'React', 'LangChain', 'ChromaDB', 'Ollama (Llama 3.1)'],
    desc: 'Ever wished you could ask your lecture slides a question and get an actual answer? That is what this does. Upload your PDFs, and a locally-hosted LLM reads through everything, chunks it into a vector database, and gives you context-aware answers with exact page citations. No API costs, full privacy, and it actually knows which slide that formula was on.',
    link: 'https://github.com/Rosheni-a11y/studybuddy-ai',
  },
  {
    id: 'p2',
    name: 'Real-Time Emotion Detection System',
    sub: 'Computer Vision · CNN',
    status: 'In Progress',
    tech: ['Python', 'OpenCV', 'TensorFlow/Keras', 'CNN', 'NumPy'],
    desc: 'Point your webcam at your face and this tells you how you are feeling — happy, sad, angry, surprised, fearful, disgusted, or neutral. Built with a CNN trained on 35K+ facial images from FER-2013. Runs at 15+ FPS with each frame processed in under 60ms, so it keeps up with your mood swings in real time.',
    link: 'https://github.com/Rosheni-a11y/Real-Time-Emotion-Detection',
  },
  {
    id: 'p3',
    name: 'Jewelry E-Commerce with AI Sales Prediction',
    sub: 'MERN · ML',
    status: 'Group Project',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Python', 'Scikit-learn'],
    desc: 'The project that got me into ML. Led the product management module for a 6-member team — full CRUD, image uploads, search, inventory tracking. Then built a Random Forest model that predicts monthly jewelry sales so store owners can stop guessing and start planning. Deployed on Vercel with the whole MERN stack talking to a Flask ML backend.',
    link: 'https://github.com/DevDilshan/Jewelry-Sales-Prediction/tree/dev',
  },
  {
    id: 'p4',
    name: 'AI-Powered Resume Analyzer',
    sub: 'NLP · TF-IDF',
    status: 'In Progress',
    tech: ['Python', 'Flask', 'React', 'spaCy / NLTK', 'Scikit-learn'],
    desc: 'Tired of wondering if your resume matches the job posting? This app scores the alignment using TF-IDF and cosine similarity, finds missing keywords, and tells you exactly what to fix. Upload a PDF or DOCX — spaCy NER parses out your skills, education, and experience automatically. Built because I needed it myself.',
    link: 'https://github.com/Rosheni-a11y/AI-Resume-Analyzer',
  },
 
]

// ---- TECH STACK ---- (RPG xp bars, grouped by category; all bars use the plum theme color)
export const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'Java', level: 65 },
      { name: 'SQL', level: 70 },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'HTML / CSS', level: 88 },
      { name: 'React', level: 78 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js / Express.js', level: 75 },
      { name: 'Flask', level: 70 },
      { name: 'SpringBoot', level: 45 },
      { name: 'REST APIs', level: 78 },
    ],
  },
  {
    category: 'Data Science & ML',
    items: [
      { name: 'Scikit-learn', level: 75 },
      { name: 'Pandas / NumPy', level: 78 },
      { name: 'TensorFlow / Keras', level: 60 },
      { name: 'Data Preprocessing & EDA', level: 80 },
    ],
  },
  {
    category: 'AI & NLP',
    items: [
      { name: 'LangChain / RAG', level: 58 },
      { name: 'OpenCV / MediaPipe', level: 65 },
      { name: 'spaCy / NLTK', level: 55 },
      { name: 'ChromaDB', level: 50 },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL', level: 68 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git / GitHub', level: 80 },
      { name: 'Jupyter / Colab', level: 82 },
      { name: 'Postman', level: 72 },
    ],
  },
]

// ---- CERTIFICATIONS ----
export const certifications = [
  {
    id: 'c1',
    icon: '🤖',
    name: 'ML Specialization — Supervised ML: Regression & Classification',
    issuer: 'Coursera | Andrew Ng',
    year: '2026',
  },
  {
    id: 'c2',
    icon: '🧠',
    name: 'GenAI 101 with Pieces',
    issuer: 'Generative AI, Prompt Engineering, LLM Applications',
    year: '2025',
  },
  {
    id: 'c3',
    icon: '📮',
    name: 'Postman API Fundamentals Student Expert',
    issuer: 'REST API Testing & Validation',
    year: '2025',
  },
  {
    id: 'c4',
    icon: '🐍',
    name: 'Programming in Python',
    issuer: 'University of Moratuwa',
    year: '2025',
  },
]

// ---- QUEST LOG (education) ----
export const education = [
  {
    id: 'e1',
    year: 'NOW',
    status: 'active',
    title: 'BSc (Hons) in Information Technology — AI Specialization',
    place: 'Sri Lanka Institute of Information Technology',
    period: '2024 – 2028',
    gpa: '3.92 / 4.0',
    coursework: [
      'Intro to Programming & OOP',
      'Data Structures and Algorithms',
      'Database Design',
      'AI and Machine Learning',
      'Probability & Statistics',
      'Discrete Mathematics',
      'Data Communication and Networking',
      'Software Engineering',
      'Web and Mobile Technologies',
    ],
    activitiesLabel: 'University Activities & Societies',
    activities: ['IEEE Society', 'Microsoft Club Alpha Member', 'SEDS Biotechnical Division Member'],
  },
  {
    id: 'e2',
    year: '2020 – 2023',
    status: 'complete',
    title: 'G.C.E. Advanced Level — Biological Science',
    place: "St. Bridget's Convent",
    period: '2020 – 2023',
    gpa: null,
    coursework: null,
    activitiesLabel: 'School Activities & Societies',
    activities: ['Science Society', 'Western Band', 'School Choir', 'Badminton Team'],
  },
]

// ---- ACHIEVEMENTS ----
export const achievements = [
  {
    id: 'a1',
    icon: '🏅',
    name: "Dean's List — Year 2 Semester 2",
    desc: 'GPA: 3.92 / 4.0',
    rarity: 'epic',
  },
  {
    id: 'a2',
    icon: '📢',
    name: 'LeadSpring 2025 — IEEE IAS & PES, SLIIT Student Branch',
    desc: 'Publicity Team Member (Emerging Member). Drove digital outreach campaigns for IEEE LeadSpring 2025, increasing event awareness across the student community. Collaborated with a multidisciplinary team under tight deadlines to deliver timely promotional content.',
    rarity: 'rare',
  },
]

// ---- CONTACT ---- (icon = PixelIcon name)
export const contact = [
  { id: 'g', icon: 'github', label: 'GitHub', handle: 'Rosheni-a11y', link: 'https://github.com/Rosheni-a11y' },
  { id: 'l', icon: 'linkedin', label: 'LinkedIn', handle: 'Rosheni Bolonne', link: 'https://www.linkedin.com/in/roshenibolonne/' },
  { id: 'm', icon: 'mail', label: 'Email', handle: 'roshenibolonne@gmail.com', link: 'https://mail.google.com/mail/?view=cm&fs=1&to=roshenibolonne@gmail.com' },
  { id: 'p', icon: 'phone', label: 'Phone', handle: '+94 70 145 0088', link: 'tel:+94701450088' },
]

// ---- RESUME ---- (file lives in /public)
export const resumeUrl = '/ROSHENI_BOLONNE_CV.pdf'
