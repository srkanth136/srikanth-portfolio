/**
 * Srikanth Bheemagani — Portfolio Data Configuration
 * 
 * NOTE FOR SRIKANTH:
 * To customize your portfolio, update the fields below.
 * Placeholders are marked with "YOUR_..." comments.
 */

export const personalInfo = {
  name: "Srikanth Bheemagani",
  role: "Python Full Stack Developer | Computer Science Engineering Student",
  shortRole: "Python Full Stack Developer",
  educationBadge: "B.Tech in CSE — 2026",
  heroDescription:
    "Computer Science Engineering student passionate about building scalable, user-friendly web applications using Python, React, Django, and SQL.",
  aboutText: [
    "I am a Computer Science Engineering student graduating in 2026 with a strong interest in software engineering and Python full-stack development. My technical journey centers around building scalable backend services, designing robust database schemas, and crafting responsive, accessible user interfaces.",
    "I actively work across both sides of web applications—from developing REST APIs with Django, Flask, and FastAPI to building interactive frontends with React.js. I value clean code architecture, efficient query design, and systematic problem solving."
  ],
  interests: [
    "Full-stack web development",
    "Python development",
    "React development",
    "Backend development",
    "SQL and databases",
    "Problem solving",
    "Learning new technologies"
  ],
  // Placeholders clearly marked for your social links:
  socialLinks: {
    github: "https://github.com/srkanth136",
    githubHandle: "srkanth136",
    linkedin: "https://www.linkedin.com/in/srikanth-bheemagani-a5258732b",
    linkedinHandle: "srikanth-bheemagani-a5258732b",
    email: "mailto:srikanthbeemagani584@gmail.com",
    emailRaw: "srikanthbeemagani584@gmail.com"
  },
  resumePath: "/resume.pdf"
};

export const whatIDo = [
  {
    id: "fullstack",
    title: "Full Stack Development",
    description:
      "Developing end-to-end web applications combining dynamic React.js client interfaces with high-performance Python and Node.js backends.",
    icon: "LayoutGrid"
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Architecting reliable RESTful APIs, business logic, authentication workflows, and system integrations using Django, Flask, and FastAPI.",
    icon: "Server"
  },
  {
    id: "database",
    title: "Database Development",
    description:
      "Modeling relational and document data stores with MySQL and MongoDB, crafting optimized queries, joins, triggers, and transactions.",
    icon: "Database"
  },
  {
    id: "problem-solving",
    title: "Problem Solving",
    description:
      "Applying core data structures, algorithms, and modular design patterns to break down complex challenges into efficient software solutions.",
    icon: "Brain"
  }
];

export const skillsData = {
  programmingLanguages: [
    { name: "Python", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "SQL", category: "Languages" },
    { name: "HTML", category: "Languages" },
    { name: "CSS", category: "Languages" }
  ],
  frontend: [
    { name: "React.js", category: "Frontend" },
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "Responsive Design", category: "Frontend" }
  ],
  backend: [
    { name: "Django", category: "Backend" },
    { name: "Flask", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" }
  ],
  databases: [
    { name: "MySQL", category: "Databases" },
    { name: "MongoDB", category: "Databases" }
  ],
  tools: [
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "VS Code", category: "Tools" },
    { name: "npm", category: "Tools" }
  ]
};

export const projectsData = [
  {
    id: "ecommerce-website",
    title: "E-Commerce Website",
    featured: true,
    techSubtitle: "MERN Stack",
    description:
      "Built an e-commerce website using the MERN stack with login, product pages, and admin features. Added shopping cart, checkout, and online payment options for users.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    features: [
      "User authentication with secure token-based login and registration",
      "Dynamic product catalog pages with search and category filtering",
      "Comprehensive admin dashboard for inventory and product management",
      "Interactive shopping cart with quantity adjustments and price tallying",
      "Streamlined checkout flow integrated with online payment processing",
      "Fully responsive and mobile-optimized interface across all devices"
    ],
    // Replace with your actual repository and live URLs when ready:
    githubUrl: "https://github.com/srkanth136/YOUR_GITHUB_PROJECT_URL",
    liveUrl: "https://YOUR_LIVE_DEMO_URL.vercel.app"
  },
  {
    id: "voice-desk-assistant",
    title: "Voice Desk Assistant",
    featured: false,
    techSubtitle: "Python Desktop Automation",
    description:
      "A voice-based assistant designed to interact with users through voice commands and perform useful desktop or application-related tasks.",
    technologies: ["Python", "Speech Recognition", "PyAudio", "OS Automation", "Text-to-Speech"],
    features: [
      "Real-time voice input capture with microphone sensitivity adaptation",
      "Natural voice command processing and intent matching",
      "Interactive two-way user interaction with spoken audio feedback",
      "Desktop task automation including opening applications and handling system utilities",
      "Reliable synthesized response generation for queries and status updates"
    ],
    githubUrl: "https://github.com/srkanth136/YOUR_GITHUB_PROJECT_URL",
    liveUrl: "" // Voice desktop assistant runs locally; left empty so button gracefully hides or shows repo
  },
  {
    id: "chrome-extension-time-tracking",
    title: "Time Tracking & Productivity Analytics Chrome Extension",
    featured: false,
    techSubtitle: "Chrome Extension & Analytics",
    description:
      "Developed a Chrome extension that tracks time spent on websites and provides productivity analytics by classifying website usage.",
    technologies: ["JavaScript", "Chrome Extension APIs", "HTML", "CSS", "Storage API"],
    features: [
      "Automated active tab website time tracking with background event listeners",
      "Intelligent classification of URLs into productive vs unproductive categories",
      "Background lifecycle tracking maintaining minimal memory footprint",
      "Local browser storage persistence preserving user privacy and session metrics",
      "Interactive productivity dashboard with daily visual breakdowns",
      "Weekly productivity report summaries comparing trends over time"
    ],
    githubUrl: "https://github.com/srkanth136/YOUR_GITHUB_PROJECT_URL",
    liveUrl: "https://chrome.google.com/webstore/detail/YOUR_EXTENSION_ID"
  },
  {
    id: "student-course-management",
    title: "Student Course Management System",
    featured: false,
    techSubtitle: "MySQL / Relational Database",
    description:
      "Designed and implemented a relational database system for managing students, courses, enrollments, and academic information.",
    technologies: ["MySQL", "SQL", "Database Design", "Stored Procedures", "Triggers"],
    features: [
      "Normalized relational schema for student profiles, course catalogs, and enrollments",
      "Complex SQL JOIN queries combining multiple academic tables efficiently",
      "Analytical aggregations using GROUP BY, HAVING, and subqueries",
      "Custom SQL Views for student grade summaries and instructor workloads",
      "Automated Stored Procedures and Triggers for enrollment prerequisites and seat limits",
      "Window functions for academic rankings and transactional integrity for student registrations"
    ],
    githubUrl: "https://github.com/srkanth136/YOUR_GITHUB_PROJECT_URL",
    liveUrl: "" // Database backend project; GitHub button provided
  }
];

export const educationData = [
  {
    id: "btech-cse",
    degree: "B.Tech — Computer Science Engineering",
    period: "2022 — 2026",
    status: "Graduating 2026",
    description:
      "Undergraduate studies in Computer Science and Engineering with foundational coursework in Data Structures, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering. Focused on modern web technologies and full-stack software development."
  }
];

export const certificationsData = [
  {
    id: "gen-ai-essentials",
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft and LinkedIn",
    issuedDate: "Issued Certificate",
    description:
      "Foundational program covering generative AI concepts, ethical considerations, prompt engineering fundamentals, and practical applications in modern software workflows.",
    credentialUrl: "https://www.linkedin.com/learning/certificates/YOUR_CERTIFICATE_ID"
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];
