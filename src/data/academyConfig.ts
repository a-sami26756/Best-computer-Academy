import { AcademyInfo, Course, Testimonial, FAQItem } from '../types';

/**
 * =========================================================================
 * BEST COMPUTER ACADEMY (BCA) - MASTER CONFIGURATION
 * =========================================================================
 * Updated with exact details from the official academy admission posters:
 * 1. Graphic Designing (4 Months) [Ps, Ai, Id, CorelDRAW, Canva]
 * 2. CIT Course (6 Months) [MS Office, Internet, Typing, Computer Basics]
 * 3. AI Basic Course (4 Months) [ChatGPT, Machine Learning, Python, Data Science, Automation]
 * 4. Academic Tuition for Class 9th & 10th (Matric) [Math, Physics, Chemistry, Bio, English, CS]
 *
 * Official Motto: LEARN • SKILL • GROW | LEARN • PRACTICE • GROW • SUCCEED
 * =========================================================================
 */

export const ACADEMY_CONFIG: AcademyInfo = {
  name: "Best Computer Academy",
  shortName: "BCA",
  tagline: "LEARN • SKILL • GROW | LEARN • PRACTICE • GROW • SUCCEED",
  establishedYear: 2014,

  // Editable Contact Numbers (Placeholders as per specifications)
  phone: "+15552345678",               // Clickable tel link format
  displayPhone: "+1 (555) 234-5678",   // Human-readable format shown on site
  whatsappNumber: "15552345678",       // WhatsApp number without '+' or symbols
  displayWhatsapp: "+1 (555) 234-5678",
  email: "admissions@bestcomputeracademy.example.com",

  // Physical Location & Navigation
  address: {
    street: "Plot # 42-A, Education Avenue, Main Knowledge Boulevard",
    area: "Academic Zone, Block 5",
    city: "Metropolis City",
    fullAddress: "Plot # 42-A, Education Avenue, Main Knowledge Boulevard, Academic Zone, Block 5 [Academy Location Placeholder]",
    landmark: "Opposite City Central Library & Metro Station Gate # 2",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.4447472492167!2d67.0315488150033!3d24.88283308404285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f1122334455%3A0xabcdef1234567890!2sBest%20Computer%20Academy!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s",
    googleMapsDirectionUrl: "https://maps.google.com/?q=Best+Computer+Academy+Main+Campus"
  },

  officeHours: {
    weekdays: "Monday – Saturday: 8:00 AM – 9:00 PM",
    sunday: "Sunday: 10:00 AM – 3:00 PM (Admission Desk Open)"
  },

  currencySymbol: "$",
  currencyCode: "USD",

  socialLinks: {
    facebook: "https://facebook.com/BestComputerAcademyOfficial",
    youtube: "https://youtube.com/@BestComputerAcademy",
    instagram: "https://instagram.com/best_computer_academy",
    whatsapp: "https://wa.me/15552345678"
  }
};

/**
 * -------------------------------------------------------------------------
 * 4 OFFICIAL POSTER BANNERS (From Uploaded Photos)
 * -------------------------------------------------------------------------
 */
export const OFFICIAL_POSTERS = [
  {
    id: "poster-ai",
    badge: "ADMISSION OPEN",
    title: "Ai BASIC COURSE",
    duration: "4 Months",
    tagline: "LEARN • SKILL • GROW",
    subheading: "Learn AI Tools · Build Real Projects · Get Future Ready · Expert Guidance",
    highlights: [
      "ChatGPT & Conversational Tools",
      "Machine Learning Fundamentals",
      "Python Logic & AI Libraries",
      "Data Science Concepts",
      "No-Code AI Automation"
    ],
    tools: ["ChatGPT", "Machine Learning", "Python", "Data Science", "Automation"],
    accentColor: "from-blue-600 via-indigo-600 to-amber-500",
    glowColor: "shadow-blue-500/20",
    courseId: "ai-basic"
  },
  {
    id: "poster-graphic",
    badge: "ADMISSION OPEN",
    title: "Graphic Designing",
    duration: "4 Months",
    tagline: "Design Your Future",
    subheading: "Professional creative training with industry standard software tools",
    highlights: [
      "Photoshop (Ps) Retouching & Compositing",
      "Illustrator (Ai) Vector Logo & Icons",
      "InDesign (Id) Editorial & Page Layouts",
      "CorelDRAW Commercial Printing & Banners",
      "Canva Social Media Design & Brand Kits"
    ],
    tools: ["Photoshop (Ps)", "Illustrator (Ai)", "InDesign (Id)", "CorelDRAW", "Canva"],
    accentColor: "from-amber-500 via-orange-500 to-purple-600",
    glowColor: "shadow-amber-500/20",
    courseId: "cmp-graphic"
  },
  {
    id: "poster-cit",
    badge: "ADMISSION OPEN",
    title: "CIT Course",
    duration: "6 Months",
    tagline: "Better Skills · Brighter Future",
    subheading: "Certificate in Information Technology with Practical Training & Certificate Provided",
    highlights: [
      "MS Office (Word, Excel, PowerPoint)",
      "Internet Research & Online Safety",
      "Touch Typing Speed Drills",
      "Computer Hardware & Windows Basics",
      "Serialized Completion Certificate"
    ],
    tools: ["MS Office", "Internet", "Typing", "Computer Basics"],
    accentColor: "from-amber-400 via-amber-500 to-sky-600",
    glowColor: "shadow-sky-500/20",
    courseId: "cit-diploma"
  },
  {
    id: "poster-matric",
    badge: "ADMISSION OPEN",
    title: "Class: 9th & 10th",
    duration: "Full Academic Session",
    tagline: "LEARN • PRACTICE • GROW • SUCCEED",
    subheading: "Comprehensive Board Examination Science & Mathematics Tuition Preparation",
    highlights: [
      "Mathematics & Analytical Problem Solving",
      "Physics Mechanics & Numerical Proofs",
      "Chemistry Equations & Organic Mechanisms",
      "Biology Diagrams & Physiology Concepts",
      "Computer Science Theory & English Grammar"
    ],
    tools: ["Class 9th", "Class 10th", "Board Prep", "Weekly Tests", "Past Papers"],
    accentColor: "from-amber-400 via-amber-600 to-indigo-950",
    glowColor: "shadow-amber-500/20",
    courseId: "tui-matric"
  }
];

/**
 * -------------------------------------------------------------------------
 * ARTIFICIAL INTELLIGENCE (AI) COURSES
 * -------------------------------------------------------------------------
 */
export const AI_COURSES: Course[] = [
  {
    id: "ai-basic",
    title: "Ai BASIC COURSE",
    category: "ai",
    duration: "4 Months (Official Poster Duration)",
    level: "Beginner Level",
    levelTier: "Beginner",
    description: "Featured on official BCA admission poster. Discover ChatGPT, Machine Learning, Python, Data Science, and AI Automation to build real-world projects and get future-ready.",
    monthlyFee: 45,
    totalFee: 160,
    skillsLearned: [
      "ChatGPT & AI Prompt Tools",
      "Machine Learning Fundamentals",
      "Python for AI & Data Logic",
      "Data Science Concepts",
      "AI Workflow Automation"
    ],
    curriculum: [
      "Module 1: Everyday AI Tools & ChatGPT Power Use",
      "Module 2: Python Foundations for AI & Automation",
      "Module 3: Introduction to Machine Learning & Data Science",
      "Module 4: Building Real-World Projects & Automation"
    ],
    schedule: "Tue & Thu (5:00 PM - 6:30 PM) or Weekend Batch",
    prerequisites: "Basic interest in computers (Zero prior coding needed)",
    popular: true,
    featured: true,
    iconName: "Bot",
    softwareOrTools: ["ChatGPT", "Machine Learning", "Python", "Data Science", "Automation"]
  }
];

/**
 * -------------------------------------------------------------------------
 * COMPUTER & IT COURSES (Featuring CIT & Graphic Designing from Posters)
 * -------------------------------------------------------------------------
 */
export const COMPUTER_COURSES: Course[] = [
  {
    id: "cmp-graphic",
    title: "Graphic Designing",
    category: "computer",
    duration: "4 Months (Official Poster Duration)",
    level: "Beginner to Professional",
    levelTier: "Beginner",
    description: "Official Poster Course: 'Design Your Future'. Master Adobe Photoshop (Ps), Illustrator (Ai), InDesign (Id), CorelDRAW, and Canva with complete practical commercial design training.",
    monthlyFee: 50,
    totalFee: 180,
    skillsLearned: [
      "Adobe Photoshop (Ps) Retouching & Compositing",
      "Adobe Illustrator (Ai) Vector Logo & Pen Tool",
      "Adobe InDesign (Id) Editorial Magazines & Books",
      "CorelDRAW Commercial Printing, Banners & Signs",
      "Canva Pro Brand Kits & Social Media Ad Production"
    ],
    curriculum: [
      "Module 1: Visual Design Principles, Typography & Color Harmony",
      "Module 2: Photoshop (Ps): Photo Manipulation & Retouching",
      "Module 3: Illustrator (Ai) & CorelDRAW: Vector Branding & Print",
      "Module 4: InDesign (Id) & Canva: Multi-page Publications & Portfolio"
    ],
    schedule: "Mon to Fri (11:00 AM - 12:30 PM or 5:00 PM - 6:30 PM)",
    prerequisites: "Basic computer familiarity",
    popular: true,
    featured: true,
    iconName: "Palette",
    softwareOrTools: ["Photoshop (Ps)", "Illustrator (Ai)", "InDesign (Id)", "CorelDRAW", "Canva"]
  },
  {
    id: "cit-diploma",
    title: "CIT Course (Certificate in Information Technology)",
    category: "computer",
    duration: "6 Months (Official Poster Duration)",
    level: "Beginner Level (Complete IT Foundation)",
    levelTier: "Beginner",
    description: "Official Poster Course: 'Better Skills, Brighter Future'. Comprehensive 6-month certified diploma covering MS Office, Internet, Touch Typing, and Computer Basics with practical lab training.",
    monthlyFee: 40,
    totalFee: 220,
    skillsLearned: [
      "Microsoft Office (Word, Excel, PowerPoint)",
      "Internet Research, Email Protocols & Cyber Safety",
      "Professional Touch Typing Speed Mastery",
      "Computer Hardware Components & Windows OS",
      "Official Verified Completion Certificate Provided"
    ],
    curriculum: [
      "Module 1: Computer Basics: Hardware Architecture & Windows OS",
      "Module 2: Touch Typing Drills: Accuracy & Words-per-Minute Speed",
      "Module 3: MS Word Documentation & Advanced MS Excel Spreadsheets",
      "Module 4: MS PowerPoint Presentations, Internet & Cloud Tools"
    ],
    schedule: "Morning (9:00 AM - 10:30 AM) or Evening (6:30 PM - 8:00 PM)",
    prerequisites: "None (Open to all beginners)",
    popular: true,
    featured: true,
    iconName: "Laptop",
    softwareOrTools: ["MS Office", "Internet", "Typing", "Computer Basics", "Windows 11"]
  },
  {
    id: "cmp-office",
    title: "MS Office Professional",
    category: "computer",
    duration: "2 Months (Practical Hands-On)",
    level: "Beginner Level",
    levelTier: "Beginner",
    description: "Complete corporate training in Microsoft Word, Advanced Excel (VLOOKUP, Pivot, formulas), PowerPoint presentation design, and Outlook professional communication.",
    monthlyFee: 40,
    totalFee: 80,
    skillsLearned: [
      "Advanced Word Formatting & Documentation",
      "Excel Financial Formulas & VLOOKUP / XLOOKUP",
      "Excel Pivot Tables & Data Validation",
      "PowerPoint Infographics & Slide Design"
    ],
    curriculum: [
      "Module 1: MS Word: Advanced Formatting, Tables, Mail Merge",
      "Module 2: MS Excel: Financial Formulas, Data Filtering & VLOOKUP",
      "Module 3: MS Excel: Pivot Tables & Conditional Formatting",
      "Module 4: MS PowerPoint & Outlook Professional Workflows"
    ],
    schedule: "Daily Mon to Fri (10:00 AM - 11:30 AM or 4:00 PM - 5:30 PM)",
    prerequisites: "None (Zero experience needed)",
    popular: true,
    iconName: "FileSpreadsheet",
    softwareOrTools: ["Microsoft Word", "Microsoft Excel", "PowerPoint", "Outlook"]
  },
  {
    id: "cmp-basic",
    title: "Basic Computer Skills & Typing",
    category: "computer",
    duration: "1.5 Months (Foundation)",
    level: "Absolute Beginner",
    levelTier: "Beginner",
    description: "Perfect for students, seniors, and beginners. Learn touch typing, Windows operating system, file management, internet browsing, email etiquette, and cyber safety.",
    monthlyFee: 35,
    totalFee: 50,
    skillsLearned: [
      "Computer Hardware & Peripherals",
      "Windows Operating System Navigation",
      "Touch Typing Speed & Accuracy",
      "Safe Internet Research & Browsing"
    ],
    curriculum: [
      "Module 1: Hardware Components: CPU, Memory, Storage",
      "Module 2: Windows OS Navigation, Folder Organization",
      "Module 3: Touch Typing Mastery with Speed Drills",
      "Module 4: Internet Research, Email Etiquette & Cloud Drive"
    ],
    schedule: "Daily Mon to Fri (10:00 AM - 11:00 AM or 3:00 PM - 4:00 PM)",
    prerequisites: "None (Zero background required)",
    iconName: "Laptop",
    softwareOrTools: ["Windows 11", "Typing Master", "Google Chrome", "Google Drive"]
  }
];

/**
 * -------------------------------------------------------------------------
 * ACADEMIC TUITION COURSES (Featuring 9th & 10th from Poster + All Subjects)
 * Philosophy: LEARN • PRACTICE • GROW • SUCCEED
 * -------------------------------------------------------------------------
 */
export const TUITION_COURSES: Course[] = [
  {
    id: "tui-matric",
    title: "Class: 9th & 10th (Matric Science & Math Tuition)",
    category: "tuition",
    duration: "Full Academic Session (Official Poster Program)",
    level: "SSC Part 1 & 2 (9th & 10th Grade)",
    levelTier: "Intermediate",
    description: "Official Poster Program: 'LEARN • PRACTICE • GROW • SUCCEED'. Comprehensive board examination preparation for 9th & 10th science group in Mathematics, Physics, Chemistry, Biology, and Computer Science.",
    monthlyFee: 50,
    totalFee: 300,
    skillsLearned: [
      "Board Examination Pattern Past Paper Solved Drills",
      "Chapter-wise Conceptual Diagnostic Testing",
      "Accurate Physics & Chemistry Numerical Methods",
      "Biology Scientific Diagrams & Anatomy Lab Prep",
      "Weekly Progress Reporting Sent to Parents"
    ],
    curriculum: [
      "Module 1: Core Mathematics (Algebra, Geometry, Matrices, Trigonometry)",
      "Module 2: Physics Concepts, Mechanics & Numerical Formulas",
      "Module 3: Chemistry Reactions, Equations & Periodic Table",
      "Module 4: Biology Diagrams / Computer Science Theory & English Grammar"
    ],
    schedule: "Daily Mon to Fri (3:30 PM - 6:30 PM) / Separate Batches",
    prerequisites: "Enrolled in Class 9th or 10th",
    popular: true,
    featured: true,
    iconName: "BookOpen",
    softwareOrTools: ["Board Exam Workbooks", "Past Paper Series", "Interactive Whiteboard"]
  },
  {
    id: "tui-math",
    title: "Mathematics (Tuition)",
    category: "tuition",
    duration: "Full Academic Session / 3-Month Fast-Track",
    level: "Middle, Matric, Intermediate (FSc/ICS) & O/A Levels",
    levelTier: "Intermediate",
    description: "Master foundational algebra, geometry, trigonometry, calculus, and board-level analytical problem solving with daily practice worksheets.",
    monthlyFee: 45,
    totalFee: 240,
    skillsLearned: [
      "Algebraic & Quadratic Problem Solving",
      "Coordinate Geometry & Trigonometric Proofs",
      "Differential & Integral Calculus Mastery",
      "Board Examination Past Paper Techniques"
    ],
    curriculum: [
      "Algebra & Quadratic Equations",
      "Matrices & Determinants",
      "Coordinate Geometry & Trigonometry",
      "Differential & Integral Calculus",
      "Vectors & Probability",
      "Past Paper Analysis & Board Exam Mock Tests"
    ],
    schedule: "Mon to Thu (4:00 PM - 5:30 PM / 6:00 PM - 7:30 PM)",
    prerequisites: "Previous grade mathematics foundation",
    popular: true,
    iconName: "Calculator",
    softwareOrTools: ["GeoGebra", "Formula Worksheets", "Interactive Whiteboard"]
  },
  {
    id: "tui-phys",
    title: "Physics (Tuition)",
    category: "tuition",
    duration: "Full Academic Session / Fast-Track",
    level: "Matric (9th & 10th), Intermediate (Part 1 & 2), O/A Levels",
    levelTier: "Intermediate",
    description: "Deep conceptual grounding in classical mechanics, thermodynamics, wave optics, electromagnetism, and numerical problem mastery with experimental demonstrations.",
    monthlyFee: 45,
    totalFee: 240,
    skillsLearned: [
      "Kinematics & Force Dynamics",
      "Energy Conservation & Thermodynamics",
      "Optics & Wave Motion",
      "Nuclear Physics & Experimental Calculations"
    ],
    curriculum: [
      "Kinematics, Dynamics & Circular Motion",
      "Work, Energy & Gravitational Law",
      "Fluid Dynamics & Thermodynamics",
      "Waves, Sound & Optical Reflection",
      "Electrostatics & Current Electricity",
      "Electromagnetism & Modern Nuclear Physics"
    ],
    schedule: "Mon to Thu (5:30 PM - 7:00 PM)",
    prerequisites: "Basic arithmetic & interest in physical science",
    iconName: "Atom",
    softwareOrTools: ["PhET Interactive Physics Labs", "Apparatus Demonstrations"]
  },
  {
    id: "tui-chem",
    title: "Chemistry (Tuition)",
    category: "tuition",
    duration: "Full Academic Session / Fast-Track",
    level: "SSC (9th-10th), HSSC (Pre-Medical/Pre-Engineering)",
    levelTier: "Intermediate",
    description: "Clear understanding of periodic trends, stoichiometry, chemical equilibrium, organic reaction mechanisms, and practical laboratory concepts.",
    monthlyFee: 45,
    totalFee: 240,
    skillsLearned: [
      "Atomic Models & Periodic Trends",
      "Chemical Stoichiometry & Molar Mass Calculations",
      "Chemical Equilibrium & Reaction Rates",
      "Hydrocarbon Functional Groups & Mechanisms"
    ],
    curriculum: [
      "Atomic Structure & Periodic Classification",
      "Chemical Bonding & Molecular Shapes",
      "Stoichiometry & Gas Laws",
      "Thermochemistry & Chemical Equilibrium",
      "Organic Chemistry: Hydrocarbons & Functional Groups",
      "Analytical & Industrial Chemistry Concepts"
    ],
    schedule: "Mon, Wed, Fri (3:30 PM - 5:00 PM)",
    prerequisites: "General science background",
    iconName: "FlaskConical",
    softwareOrTools: ["Molecular 3D Models", "Reaction Simulation Kits"]
  },
  {
    id: "tui-bio",
    title: "Biology (Tuition)",
    category: "tuition",
    duration: "Full Academic Session / Medical Entry Prep",
    level: "Matric (9th & 10th), FSc Pre-Medical, O/A Levels",
    levelTier: "Intermediate",
    description: "Cell biology, genetics, human anatomy, physiology, plant biology, and diagram mastery tailored for top board marks and medical entrance exams.",
    monthlyFee: 45,
    totalFee: 240,
    skillsLearned: [
      "Cell Structure & Cellular Energetics",
      "Human Physiological Systems & Organs",
      "Genetics, DNA Replication & Inheritance",
      "Accurate Scientific Diagram Drawing"
    ],
    curriculum: [
      "Cell Structure, Mitosis & Meiosis",
      "Biological Molecules & Enzymes",
      "Bioenergetics: Photosynthesis & Respiration",
      "Human Circulation, Respiration & Nervous Coordination",
      "Reproduction & Developmental Biology",
      "Genetics, Inheritance & Biotechnology"
    ],
    schedule: "Tue, Thu, Sat (5:30 PM - 7:00 PM)",
    prerequisites: "General science interest",
    iconName: "Dna",
    softwareOrTools: ["Microscope Projections", "Anatomical Charts & Models"]
  },
  {
    id: "tui-eng",
    title: "English (Tuition)",
    category: "tuition",
    duration: "Academic Session + Spoken Booster",
    level: "Grades 6–12 & Cambridge Curriculum",
    levelTier: "Beginner",
    description: "Comprehensive English grammar, analytical essay writing, comprehension reading, literature reviews, and confident spoken communication skills.",
    monthlyFee: 40,
    totalFee: 200,
    skillsLearned: [
      "Structural Grammar Mastery & Tenses",
      "Academic Essay & Report Architecture",
      "Reading Comprehension & Critical Analysis",
      "Spoken English Fluency & Presentation"
    ],
    curriculum: [
      "Advanced Functional Grammar & Tenses",
      "Vocabulary Expansion & Contextual Reading",
      "Formal Letters, Reports & Argumentative Essays",
      "Poetry & Prose Analytical Critique",
      "Phonetics, Pronunciation & Spoken Fluency",
      "Exam Comprehension & Summary Writing Techniques"
    ],
    schedule: "Tue, Thu, Sat (4:00 PM - 5:30 PM)",
    prerequisites: "Basic English reading ability",
    iconName: "BookOpen",
    softwareOrTools: ["Language Lab Audio", "Vocabulary Flashcards"]
  },
  {
    id: "tui-cs",
    title: "Computer Science (Board Tuition)",
    category: "tuition",
    duration: "Full Academic Session / Exam Booster",
    level: "Matric (Computer Group), ICS Part 1 & 2, O/A Levels",
    levelTier: "Intermediate",
    description: "Board curriculum computer theory, computational logic, binary number systems, hardware architecture, and relational database fundamentals.",
    monthlyFee: 50,
    totalFee: 260,
    skillsLearned: [
      "Computer Architecture & System Buses",
      "Binary, Octal & Hexadecimal Number Logic",
      "Flowchart & Algorithm Problem Decomposition",
      "Relational Databases & SQL Conceptual Queries"
    ],
    curriculum: [
      "Fundamentals of Computer Hardware & Architecture",
      "Operating Systems & Number Systems (Binary/Hex)",
      "Algorithms, Flowcharts & Computational Logic",
      "Data Communication & Network Topologies",
      "Database Management Systems & Information Systems",
      "Board Exam Syllabus Mock Tests & Practical Files"
    ],
    schedule: "Mon, Wed, Fri (6:00 PM - 7:30 PM)",
    prerequisites: "Enrolled in school/college computer science group",
    iconName: "Binary",
    softwareOrTools: ["Flowchart Tools", "SQL Simulator", "Board Exam Workbooks"]
  }
];

export const ALL_COURSES: Course[] = [
  ...AI_COURSES,
  ...COMPUTER_COURSES,
  ...TUITION_COURSES
];

/**
 * -------------------------------------------------------------------------
 * TESTIMONIALS (Attributable Student Experiences)
 * -------------------------------------------------------------------------
 */
export const STUDENT_TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    studentName: "Hamza Rehman",
    courseTaken: "Ai BASIC COURSE (4 Months)",
    year: "Batch 2025",
    rating: 5,
    feedback: "The practical AI labs at BCA completely changed how I work. Learning ChatGPT, Python automation, and Machine Learning concepts helped me build real projects and land freelance work.",
    achievement: "Secured AI-Assisted Freelance Contracts"
  },
  {
    id: "test-2",
    studentName: "Fatima Noor",
    courseTaken: "Class 9th & 10th Matric Science Tuition",
    year: "Session 2024–2025",
    rating: 5,
    feedback: "I was struggling with Physics numericals and Chemistry equations before joining Best Computer Academy. The weekly test series and conceptual guidance were transformative. I scored 94% in my board examinations!",
    achievement: "Achieved A-1 Grade (94%) in Board Exams"
  },
  {
    id: "test-3",
    studentName: "Bilal Ashfaq",
    courseTaken: "CIT Course (6 Months) & Graphic Designing",
    year: "Batch 2025",
    rating: 5,
    feedback: "The CIT course gave me comprehensive practical training in MS Office, typing speed, and Photoshop/CorelDRAW. The certificates provided by BCA helped me get promoted to Senior Operations Assistant.",
    achievement: "Promoted to Senior Operations Assistant"
  },
  {
    id: "test-4",
    studentName: "Sarah Javaid",
    courseTaken: "Class 10th Tuition (Biology, Chemistry, Physics)",
    year: "Session 2024",
    rating: 5,
    feedback: "The biology diagram lectures and physics problem drills were the reason I cleared my matriculation with distinction. BCA provides a disciplined, respectful, and motivating environment for girls and boys.",
    achievement: "Admitted into Top Pre-Medical College"
  }
];

/**
 * -------------------------------------------------------------------------
 * FREQUENTLY ASKED QUESTIONS (FAQ)
 * -------------------------------------------------------------------------
 */
export const FAQS: FAQItem[] = [
  {
    question: "Which courses are currently open for admission at Best Computer Academy?",
    answer: "Admissions are currently open for all 4 featured poster programs: (1) Ai BASIC COURSE (4 Months), (2) Graphic Designing (4 Months), (3) CIT Course (6 Months), and (4) Academic Tuition for Class 9th & 10th (Matric).",
    category: "general"
  },
  {
    question: "What software tools are taught in the 4-Month Graphic Designing course?",
    answer: "As displayed on our official poster, you will master: Adobe Photoshop (Ps), Adobe Illustrator (Ai), Adobe InDesign (Id), CorelDRAW, and Canva with 100% practical lab assignments.",
    category: "computer"
  },
  {
    question: "What is included in the 6-Month CIT Course?",
    answer: "The CIT (Certificate in Information Technology) course covers Microsoft Office, Internet research & online safety, touch typing speed drills, and foundational computer hardware/Windows basics. A verified serialized certificate is provided upon passing.",
    category: "computer"
  },
  {
    question: "Do I need coding background for the 4-Month Ai BASIC COURSE?",
    answer: "No! The Ai Basic Course is designed for beginners. It covers ChatGPT, Machine Learning intuition, Python fundamentals, Data Science, and practical AI automation with step-by-step guidance.",
    category: "computer"
  },
  {
    question: "How does tuition for Class 9th and 10th work?",
    answer: "Our Matric tuition follows the principle 'LEARN • PRACTICE • GROW • SUCCEED'. We cover all core science subjects (Math, Physics, Chemistry, Biology, Computer Science, English) with daily practice worksheets, weekly tests, and past board paper solutions.",
    category: "tuition"
  },
  {
    question: "How do I apply online for admission?",
    answer: "Fill out the online admission form on this website with your name, father's name, phone, address, and selected course. You will instantly receive a printable Admission Token Slip, and you can send your application details directly to our WhatsApp desk with one click!",
    category: "general"
  }
];

/**
 * -------------------------------------------------------------------------
 * ACADEMY KEY HIGHLIGHTS & AMENITIES
 * -------------------------------------------------------------------------
 */
export const ACADEMY_FACILITIES = [
  {
    title: "100% Practical Computer Labs",
    description: "One student per PC policy with high-performance workstations, licensed graphic tools, and fiber internet."
  },
  {
    title: "Official Serialized Certificates",
    description: "Verified certificates provided for CIT (6 Months), Graphic Designing (4 Months), and AI courses."
  },
  {
    title: "Uninterrupted Power Backup",
    description: "Heavy-duty UPS and automatic generator backup ensuring zero downtime during lectures and lab sessions."
  },
  {
    title: "Flexible Shift Timings",
    description: "Morning, afternoon, evening, and weekend batches tailored for school students, college goers, and job holders."
  },
  {
    title: "Matric 9th & 10th Test Series",
    description: "Board pattern weekly tests, chapter-wise diagnostic worksheets, and monthly progress cards sent to parents."
  },
  {
    title: "Experienced Subject Mentors",
    description: "Certified educators and practical IT professionals dedicated to student growth and academic distinction."
  }
];
