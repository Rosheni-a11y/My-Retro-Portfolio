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
  tagline: 'turning caffeine + curiosity into neural nets ✦',
  tags: ['AI / ML', 'Computer Vision', 'NLP', 'MERN', 'Python'],
}

// ---- ABOUT ME ----
export const about = {
  name: 'Rosheni Bolonne',
  title: 'Third-Year Undergraduate | IT — AI Specialization',
  bio: `Third-year IT undergraduate at SLIIT specializing in Artificial Intelligence. Currently building skills in Python, machine learning, computer vision, NLP, and full-stack development with the MERN stack — learning best by building real projects. A quick learner who enjoys figuring things out and isn't afraid to start something new. Seeking an internship in AI/ML, data science, or full-stack development.`,
  tags: ['AI / ML', 'Data Science', 'Full-Stack Dev', 'MERN Stack', 'NLP', 'Computer Vision'],
  info: [
    { icon: '📍', label: 'Location', value: 'Moratuwa, Sri Lanka' },
    { icon: '✉️', label: 'Email', value: 'roshenibolonne@gmail.com', link: 'https://mail.google.com/mail/?view=cm&fs=1&to=roshenibolonne@gmail.com' },
    { icon: '🐙', label: 'GitHub', value: 'Rosheni-a11y', link: 'https://github.com/Rosheni-a11y' },
    { icon: '💼', label: 'LinkedIn', value: 'Rosheni Bolonne', link: 'https://linkedin.com' },
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
    desc: 'Full-stack AI study assistant using Retrieval-Augmented Generation. Upload lecture PDFs and get instant, context-aware answers. Document ingestion pipeline with 500-char chunks, ChromaDB vector search, locally hosted Llama 3.1 via Ollama. React chat interface with source attribution tracing answers back to exact PDF pages.',
    link: '#',
  },
  {
    id: 'p2',
    name: 'Real-Time Emotion Detection System',
    sub: 'Computer Vision · CNN',
    status: 'In Progress',
    tech: ['Python', 'OpenCV', 'TensorFlow/Keras', 'CNN', 'NumPy'],
    desc: 'Webcam-based app detecting 7 facial emotions (happy, sad, angry, surprise, fear, disgust, neutral) in real-time at 15+ FPS. Transfer learning on FER-2013 dataset (35K+ labelled images). OpenCV Haar Cascade face detection with ROI extraction, processing each frame in under 60ms.',
    link: '#',
  },
  {
    id: 'p3',
    name: 'Jewelry E-Commerce with AI Sales Prediction',
    sub: 'MERN · ML',
    status: 'Group Project',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Python', 'Scikit-learn', 'Vercel'],
    desc: 'Led product management module in 6-member team — full CRUD with image uploads, categorization, search, and inventory tracking. AI-powered sales prediction using Random Forest regression on historical transaction data for monthly revenue forecasting. Integrated with 5 other modules through RESTful APIs with role-based auth.',
    link: '#',
  },
  {
    id: 'p4',
    name: 'AI-Powered Resume Analyzer',
    sub: 'NLP · TF-IDF',
    status: 'In Progress',
    tech: ['Python', 'Flask', 'React', 'spaCy / NLTK', 'Scikit-learn'],
    desc: 'Web app scoring resume-to-job-description alignment using TF-IDF vectorization and cosine similarity. PDF/DOCX text extraction with spaCy NER to parse education, skills, and experience. React dashboard with match scores and tailored improvement suggestions.',
    link: '#',
  },
  {
    id: 'p5',
    name: 'Air Canvas',
    sub: 'Gesture-Controlled Drawing',
    status: null,
    tech: ['Python', 'MediaPipe', 'OpenCV'],
    desc: 'Computer vision project — draw in the air using hand gestures. Real-time hand landmark detection with MediaPipe and rendering with OpenCV.',
    link: '#',
  },
  {
    id: 'p6',
    name: 'SafeReport Sri Lanka',
    sub: 'Business Analysis Case Study',
    status: null,
    tech: ['Business Analysis', 'SRS', 'Wireframing'],
    desc: 'National SGBV case management platform. Produced full SRS document and wireframe prototype as Business Analyst intern case study for Loons Lab.',
    link: '#',
  },
]

// ---- TECH STACK ---- (RPG xp bars)
export const skills = [
  { name: 'Python', level: 88, color: '#f6e05e' },
  { name: 'JavaScript', level: 85, color: '#f6e05e' },
  { name: 'Java', level: 75, color: '#7aa2f7' },
  { name: 'SQL', level: 75, color: '#f6e05e' },
  { name: 'HTML / CSS', level: 90, color: '#ffb3c6' },
  { name: 'React', level: 82, color: '#9ad1d4' },
  { name: 'Node.js / Express.js', level: 80, color: '#c3f584' },
  { name: 'Flask', level: 72, color: '#8888aa' },
  { name: 'MongoDB / MySQL', level: 78, color: '#c3f584' },
  { name: 'TensorFlow / Keras', level: 70, color: '#dda0dd' },
  { name: 'Scikit-learn / Pandas / NumPy', level: 78, color: '#dda0dd' },
  { name: 'OpenCV / MediaPipe', level: 72, color: '#9ad1d4' },
  { name: 'LangChain / ChromaDB', level: 65, color: '#7aa2f7' },
  { name: 'spaCy / NLTK', level: 65, color: '#ffb3c6' },
  { name: 'Git / GitHub', level: 82, color: '#9ad1d4' },
  { name: 'SpringBoot', level: 60, color: '#c3f584' },
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
  { id: 'l', icon: 'linkedin', label: 'LinkedIn', handle: 'Rosheni Bolonne', link: 'https://linkedin.com' },
  { id: 'm', icon: 'mail', label: 'Email', handle: 'roshenibolonne@gmail.com', link: 'https://mail.google.com/mail/?view=cm&fs=1&to=roshenibolonne@gmail.com' },
  { id: 'p', icon: 'phone', label: 'Phone', handle: '+94 70 145 0088', link: 'tel:+94701450088' },
]

// ---- RESUME ---- (file lives in /public)
export const resumeUrl = '/Rosheni%20Bolonne_CV.pdf'
