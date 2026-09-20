import { Project, SkillCategory, TimelineItem, Milestone, Repository } from '../types';

export const PERSONAL_INFO = {
  name: 'Sohel Rana',
  role: 'Software Engineering Student & Aspiring AI/ML Developer',
  tagline: 'Architecting Systems • Training Models',
  department: 'Dept. of Software Engineering',
  university: 'Daffodil International University (DIU)',
  batch: 'Batch 44',
  location: 'Dhaka, Bangladesh',
  availability: 'Open to Internships & Research Collaborations',
  email: '251-35-485@diu.edu.bd',
  bio: "I'm a Software Engineering undergraduate driven by the intersection of mathematically grounded machine learning and resilient production architectures. I focus on clean systems, algorithmic efficiency, and building real-world intelligent software.",
  avatarUrl: '/avatar.jpg',
  monogramUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1UbDnMK1CabYWpWpbmCUn6TxSz5Lt8hcjUcoxq0z6e4Qt_O6opolct-jMBthqQOLvRpIFqv3EGPNv-g03dlnTOZbaU3FcFJ583vmJYaspdwTdtg8JOkFXupT22pFKDTBrTntJzRi_-3jau_H3XZyHERcLdnJZGDrmo4Bsj56Xb2lRtmyDUmhMNF-uMtZNwqII1Z6vOD14DvDo6E20WmFNfkNVKz_2s5i9ai7T1PAu-K8y5QRUsdwlFypHE',
  socials: {
    github: 'https://github.com/sohelrana587129-glitch',
    linkedin: '',
    kaggle: '',
    leetcode: 'https://judge.beecrowd.com/en/profile/1266792',
    beecrowd: 'https://judge.beecrowd.com/en/profile/1266792',
    email: 'mailto:sohelrana587129@gmail.com',
  },
  metrics: [
    { label: 'Problems', value: '100+', subtext: 'Algorithms Solved', color: 'text-primary' },
    { label: 'Academic', value: 'Batch 44', subtext: 'DIU Software Eng.', color: 'text-secondary' },
    { label: 'Focus Area', value: 'AI / SWE', subtext: 'Applied Pipeline', color: 'text-on-surface' },
  ],
  devProfile: {
    academicDegree: 'B.Sc. in Software Engineering',
    institution: 'Daffodil International University',
    departmentAndBatch: 'Dept. of SWE • Batch 44',
    currentStanding: '2rd Year Undergraduate',
    competitiveSolves: '100+ Algorithmic Challenges',
    currentResearchFocus: 'Supervised Learning & NLP(Starting)',
    baseLocation: 'Dhaka, Bangladesh (UTC+6)',
    quote: '“Master the fundamentals, decompose complexity, ship reliable software.”',
  },
};

export const PROJECTS: Project[] = [
  {
    id: 'Ml-prediction-engine',
    title: 'Machine Learning Prediction & Analytics Engine',
    category: 'ai',
    featured: true,
    featuredBadge: 'Featured Flagship',
    tagline: 'Scikit-Learn • Streamlit',
    description:
      'An end-to-end predictive intelligence web application. Features automated feature engineering, outlier detection, cross-validation tuning, and real-time interactive model inference with graphical probability breakdowns.',
    fullDetails: {
      overview:
        'A comprehensive machine learning deployment platform built with Python, Scikit-Learn, and Streamlit. It orchestrates high-throughput statistical modeling, feature transformation, hyperparameter sweeps, and real-time probabilistic scoring with interactive visual feedback.',
      architecture: [
        'Modular Data Preprocessing Pipeline (Imputation, MinMax/Standard Scaling, One-Hot Encoding)',
        'Multi-model ensemble comparison (Random Forest, XGBoost, Logistic Regression, SVM)',
        'Automated 5-fold cross-validation tuning with Bayesian optimization',
        'Streamlit reactive dashboard with live inference sandbox and dynamic ROC/PR curves',
      ],
      metrics: [
        { label: 'Dataset Capacity', value: '128k+ records' },
        { label: 'Validation Accuracy', value: '94.62%' },
        { label: 'Inference Latency', value: '1.4ms' },
        { label: 'F1-Score', value: '0.941' },
      ],
      features: [
        'Interactive feature correlation heatmaps',
        'Real-time single-sample and batch prediction',
        'Model serialization using joblib / PyTorch state dicts',
        'Confidence score interval calculation',
      ],
    },
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Streamlit', 'NumPy'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhnQW0Y5N_NoOqJsRqDHrfFsge3Vli0Gtwgio6VWkL9_-bsCQRYAe8Pn3oh1eGHpqFX2DhP-_Sonpz1O4BiLX8PypCkVEwDcPHwFtT0wAbJfJp6Ikj8lA-EYKlsulNe66FoyPNOHvbaYGGfdvh970YVhtWrdJVRmDhqInKZ7K3JZhB6DmT2RVfYihR-HrZZIf1TsYu_qeiFXBJYu10I4-LRZQjqq4jd_3GfVZpNXHlc4-RGCYi3lqj',
    imageAlt:
      'Dark high-tech cybernetic machine learning dashboard UI with real-time neural network graph, data scatter plots, and telemetry readouts in neon purple and cyan on obsidian background.',
    academicTag: 'DIU Academic • Research Project',
    githubUrl: 'https://github.com/sohelrana587129-glitch',
    demoUrl: '#',
  },
  {
    id: 'java-oop-enterprise',
    title: 'Java OOP Enterprise Management System',
    category: 'systems',
    tagline: 'Java • OOP Design',
    description:
      'Enterprise-grade desktop system implementing strict OOP design patterns (Factory, Singleton, Observer), comprehensive role-based access, and transactional data logging.',
    fullDetails: {
      overview:
        'A resilient desktop enterprise software suite constructed in Java SE following strict SOLID design principles and clean architecture boundaries. Employs multi-tier separation between data access objects (DAO), business logic services, and user interaction layers.',
      architecture: [
        'Creational Factory Pattern for polymorphic entity generation',
        'Singleton Service Container for shared state & configuration',
        'Observer Pattern for decoupled transactional notifications & event logs',
        'Thread-safe concurrent data synchronization with mutex locks',
      ],
      metrics: [
        { label: 'Architecture', value: 'Clean 3-Tier OOP' },
        { label: 'Design Patterns', value: '6 Patterns' },
        { label: 'Test Coverage', value: '92% JUnit' },
      ],
      features: [
        'Role-Based Access Control (RBAC) with hashed credentials',
        'Automated persistent transaction audit trails',
        'Exportable CSV and PDF summary report generation',
      ],
    },
    technologies: ['Java SWE', 'Design Patterns', 'File I/O'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4t8fyGSVDqQA0Kem0g2Zh3TNchBGWKb4HVblgmIQgRDGz5wVU3PSJohurezwvItw8uKUSsYR2Iy1b6wSg0nfa6otxdIyJ5XolLIoy99cgX1-0cAK0I__ALOuyjYuii86xDkHrFEfSjI9ma40Uy6jfddxbBT32Pisk-Y0-t-B626xcODvlVFbzz7ijx-HA0B40r33Mvrbo5Hby4LeGOKZH1KE0PzDdq1IO1DvyVUryfMrQmJkql2Q1',
    imageAlt:
      'Minimalist enterprise software management screen in dark mode with tabular record sets, hierarchical tree diagrams, and transaction status logs with soft purple lighting.',
    academicTag: 'DIU Coursework',
    githubUrl: 'https://github.com/sohelrana587129-glitch',
    hasSource: true,
  },
  {
    id: 'scalable-database-management',
    title: 'Scalable Database Management System',
    category: 'web',
    tagline: 'SQL • Schema Design',
    description:
      'Normalized 3NF relational schema, stored procedures, audit triggers, and indexed views optimized for multi-tenant data queries and financial reporting.',
    fullDetails: {
      overview:
        'A comprehensive relational database engineering project designed to eliminate insertion, update, and deletion anomalies while achieving high transaction throughput and sub-millisecond query latency.',
      architecture: [
        'Strict 3rd Normal Form (3NF) relational integrity mapping',
        'Automated trigger functions for transactional auditing & changelogs',
        'Composite B-Tree index optimization for multi-column joins',
        'ACID-compliant stored procedures for concurrent fund settlement',
      ],
      metrics: [
        { label: 'Normalization', value: '3NF Compliant' },
        { label: 'Query Speedup', value: '4.2x Index Gain' },
        { label: 'Tables / Entities', value: '24 Relations' },
      ],
      features: [
        'Financial audit trails and trigger-based validation',
        'Parameterized stored procedures for safe data operations',
        'Complex analytic window functions (OVER, PARTITION BY)',
      ],
    },
    technologies: ['PostgreSQL', 'MySQL', 'Stored Procedures'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD92LTKoqT57cXObYA3ati3P1Akc2TPrZKEOgRIRp4yVrBV_H576gb5N_M8kmmxo_i23PTYl81eeiK4ni0epdKorawA_EnGEkGAL7tflPvIYi5hYKU2SGd8VBDebkbD3z6qm4K5dA33F8NWrA56A-KM98fmq620X7Ot5vQGo2xliBtMPVGzKbEjITvad-EtNpRisHbbS3rrlGxwv-5YRaks9uL94P-ppqj6BA2nGSaU0GuHqaAu47FC',
    imageAlt:
      'Relational database schema diagram visualization with entity relationship models, SQL syntax query analyzer, and latency metrics in deep blue and indigo tones.',
    academicTag: 'DBMS Project',
    githubUrl: 'https://github.com',
    hasQueries: true,
  },
  {
    id: 'modern-fullstack-web',
    title: 'Modern Full-Stack Web Application',
    category: 'web',
    tagline: 'React • REST API',
    description:
      'Responsive single-page application with JWT authentication, asynchronous REST API endpoints, real-time client state caching, and responsive UI components.',
    fullDetails: {
      overview:
        'Modern, mobile-responsive full-stack web platform built with React, Node.js, and Tailwind CSS. Emphasizes clean UI state separation, optimistic updates, and resilient network error boundaries.',
      architecture: [
        'Stateless JWT authentication with secure httpOnly cookie storage',
        'Express REST API routing with structured Joi payload validation',
        'Optimistic client-side caching with custom reactive hooks',
        'Tailwind utility layout with dark-mode aesthetic parity',
      ],
      metrics: [
        { label: 'Lighthouse Score', value: '98 / 100' },
        { label: 'API Response Time', value: '< 45ms' },
        { label: 'Bundle Footprint', value: 'Optimized SPA' },
      ],
      features: [
        'JWT Auth flow with protected client routing',
        'Dynamic data filtering, sorting, and pagination',
        'Debounced search queries with auto-complete hints',
      ],
    },
    technologies: ['React', 'Node.js', 'Tailwind'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCg8mUgTBFCrDdGTD2ZWOClzbB4Ewm6IfyGU3wYb9HgQD8PlYFkjA2UDPPu_-SJOjKGDevJ_yStaG86vuK-dc-XBL13HdDNoXSJ0nFH0DSVEzJBfk2mulnrHigdSS0WLsQ6tuZY52HOQBNFdgdtshUuEPB8AqSkfNrCzzRKp-SQ7mwh21GS1mI3ppy7UBZB7jFFF75LMOBU0KKgGZl69kd6Px--_BrTc_DlwXuUUCNP_dkH9tIapwIK',
    imageAlt:
      'Modern web application UI showing dark-themed analytics dashboard, data cards, responsive layout cards, and clean typography in purple and cyan accents.',
    academicTag: 'Full-Stack',
    githubUrl: 'https://github.com',
    demoUrl: '#',
  },
  {
    id: 'cpp-high-performance-dsa',
    title: 'C/C++ High-Performance DSA Library',
    category: 'systems',
    tagline: 'C / C++ • DSA',
    description:
      'Custom self-balancing AVL trees, open-addressing Hash Maps, Dijkstra graph traversals, and memory-safe cache implementations benchmarked with Valgrind.',
    fullDetails: {
      overview:
        'A high-performance algorithmic library written in modern C++20. Emphasizes mechanical sympathy, cache locality, pointer hygiene, and custom memory arena allocators without memory leaks.',
      architecture: [
        'Self-balancing AVL Tree with O(log N) worst-case insertion and rebalancing',
        'Open-addressing Robin Hood Hash Table reducing primary clustering',
        'Dijkstra & A* pathfinding utilizing min-priority heaps',
        'Zero memory leak verification validated via Valgrind Memcheck',
      ],
      metrics: [
        { label: 'Standard', value: 'C++20' },
        { label: 'Valgrind Leaks', value: '0 bytes lost' },
        { label: 'Lookup Time', value: 'O(1) Avg Hash' },
      ],
      features: [
        'Generic template architecture for custom data structs',
        'Comprehensive benchmark suite with execution timer micro-benchmarks',
        'Rigorous unit tests for edge conditions (empty trees, cyclic graphs)',
      ],
    },
    technologies: ['C++20', 'Algorithms', 'Benchmarking'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCfojsKO3gcyFVRNTifcVrFCB96pA---farhBDlh15-rG7pUd9lgT4-m3a9Z6ZWV9IfysoGJ5PTHZf2WCC4YxKJllfqf8G4k46A1MwAtkoynCCaPCIDWxgBxqR2LlKox5iQD6-W97W0QccW7UfURldv1zhXl5xk9hvJXM6bK1sttfkRycZqAmWBZdyLuNObdqh7rfL14gHG9F5aZ5O67kNTaux6pj1IubBoHEVkU2TlZwkPTQDN7oUz',
    imageAlt:
      'Abstract computational data structure visualization with balanced binary tree nodes, glowing memory pointers, and terminal benchmark results in cyan and violet.',
    academicTag: 'Systems • Algorithms',
    githubUrl: 'https://github.com',
    hasSource: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Core Languages',
    icon: 'data_object',
    iconColor: 'text-primary',
    tags: [
      { name: 'C', highlight: true, colorClass: 'text-primary' },
      { name: 'C++', highlight: true, colorClass: 'text-primary' },
      { name: 'Java', highlight: true, colorClass: 'text-primary' },
      { name: 'Python', highlight: true, colorClass: 'text-secondary' },
    ],
    bulletPoints: [
      '• Data Structures & Complexity Analysis',
      '• Object-Oriented Principles & Design Patterns',
      '• Memory Management & Pointers in C/C++',
    ],
  },
  {
    id: 'web-engineering',
    title: 'Web Engineering(Loading..)',
    subtitle: 'Frontend & Backend',
    icon: 'web',
    iconColor: 'text-secondary',
    tags: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript (ES6+)', highlight: true, colorClass: 'text-secondary' },
      { name: 'React', highlight: true, colorClass: 'text-primary' },
      { name: 'Node.js' },
    ],
    bulletPoints: [
      '• RESTful Architecture & API Integration',
      '• Responsive Component-driven UI',
      '• Asynchronous Operations & State Handlers',
    ],
  },
  {
    id: 'Ai-Ml',
    title: 'AI & Machine Learning',
    subtitle: 'Applied Data Science',
    icon: 'smart_toy',
    iconColor: 'text-primary-fixed',
    tags: [
      { name: 'Python', highlight: true, colorClass: 'text-secondary' },
      { name: 'NumPy' },
      { name: 'Pandas' },
      { name: 'Scikit-learn', highlight: true, colorClass: 'text-primary' },
      { name: 'PyTorch (Basics)', colorClass: 'text-primary-fixed' },
    ],
    bulletPoints: [
      '• Feature Engineering & Normalization',
      '• Supervised Regression & Classification',
      '• Model Evaluation (F1, Precision, ROC-AUC)',
    ],
  },
  {
    id: 'databases',
    title: 'Database Systems',
    subtitle: 'Relational & Querying',
    icon: 'database',
    iconColor: 'text-secondary',
    tags: [
      { name: 'SQL', highlight: true, colorClass: 'text-primary' },
      { name: 'MySQL', highlight: true, colorClass: 'text-secondary' },
      { name: 'PostgreSQL' },
    ],
    bulletPoints: [
      '• Schema Design & Normalization (1NF - 3NF)',
      '• Complex Joins, Subqueries & Triggers',
      '• Indexing & Query Performance Diagnostics',
    ],
  },
  {
    id: 'tools-workflow',
    title: 'Tools, Environment & Workflow',
    subtitle: 'Productivity & DevOps Basics',
    icon: 'construction',
    iconColor: 'text-primary',
    colSpan: 'md:col-span-2 lg:col-span-2',
    tags: [
      { name: 'Git', highlight: true, colorClass: 'text-secondary' },
      { name: 'GitHub', highlight: true, colorClass: 'text-secondary' },
      { name: 'VS Code' },
      { name: 'Jupyter Notebook', highlight: true, colorClass: 'text-primary' },
      { name: 'Postman' },
      { name: 'Linux CLI / Bash', colorClass: 'text-primary-fixed' },
    ],
    bulletPoints: [
      '• Semantic Git commit hygiene & branching',
      '• Automated virtual environment configurations',
      '• API endpoint unit tests via Postman',
      '• Shell scripting & Unix process debugging',
    ],
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    period: '2022 — Present • In Progress',
    statusBadge: '2022 — Present • In Progress',
    title: 'Bachelor of Science in Software Engineering (B.Sc in SWE)',
    institution: 'Daffodil International University (DIU) • Department of Software Engineering (Batch 44) •  Avg_SGPA: 3.79',
    location: 'Dhaka, Bangladesh',
    description:
      'Comprehensive undergraduate curriculum emphasizing the entire software engineering lifecycle, from rigorous mathematical analysis to production-readiness, system testing, and artificial intelligence foundations.',
    coursework: [
      'Object-Oriented Programming (Java)',
      'Data Structures & Algorithms (C/C++)',
      'Database Management Systems (SQL)',
      'Software Architecture & Design',
      'Discrete Mathematics',
      'Operating Systems',
      'Introduction to AI & Machine Learning',
    ],
    dotColor: 'bg-primary',
  },
  {
    period: 'Higher Secondary Education',
    title: 'Higher Secondary Certificate (HSC) — Science Background with GPA:- 4.75',
    institution: 'Rigorous focus on Higher Mathematics, Physics, Chemistry, and Information & Communication Technology (ICT).',
    location: 'Bangladesh',
    description:
      'Formed the mathematical foundation in differential calculus, linear equations, probability, and introductory computational logic that now fuels my machine learning investigations.',
    dotColor: 'bg-secondary',
  },
];

export const MILESTONES: Milestone[] = [
  {
    icon: 'insights',
    iconColor: 'text-primary',
    title: 'Applied ML Roadmap',
    tag: 'Active Progress',
    tagColor: 'text-secondary',
    description:
      'Transitioning from classical scikit-learn models (Ensembles, SVMs) into PyTorch deep neural networks, transformer foundations, and computer vision pipelines.',
  },
  {
    icon: 'military_tech',
    iconColor: 'text-secondary',
    title: 'Competitive Solves',
    tag: '100+ Problems',
    tagColor: 'text-primary',
    description:
      'Consistent participation across algorithmic platforms (LeetCode, Codeforces, HackerRank) practicing dynamic programming, graphs, and greedy paradigms.',
  },
  {
    icon: 'event_available',
    iconColor: 'text-primary-fixed',
    title: 'Hackathons & DIU Contests',
    tag: 'Intra-University',
    tagColor: 'text-outline',
    description:
      'Collaborative team(Do or Die) hackathons at Daffodil International University, building rapid prototypes, APIs, and real-time interactive problem solutions under strict deadlines.',
  },
  {
    icon: 'target',
    iconColor: 'text-secondary',
    title: 'Research Aspirations',
    tag: 'Undergraduate Goal',
    tagColor: 'text-secondary',
    description:
      'Aiming to co-author undergraduate research papers examining efficient predictive models for regional NLP and low-resource edge intelligence.',
  },
];

export const REPOSITORIES: Repository[] = [
  {
    name: 'Ml-predictive-modeling-pipeline',
    isPublic: true,
    description: 'Modular feature scaling, classifier benchmarks, and Streamlit telemetry front-end.',
    language: 'Python',
    languageColor: 'bg-secondary',
    status: 'Updated recently',
    url: 'https://github.com/sohelrana587129-glitch/Ml_practise/blob/main/Ml.ipynb',
    iconColor: 'text-secondary',
  },
  {
    name: 'oop-enterprise-management-java',
    isPublic: true,
    description: 'Role-based administrative workstation featuring robust design pattern hierarchy.',
    language: 'Java',
    languageColor: 'bg-primary',
    status: 'Active',
    url: 'https://github.com',
    iconColor: 'text-primary',
  },
  {
    name: 'competitive-programming-solutions',
    isPublic: true,
    description: 'Curated repository of 250+ solved challenges with O(N) complexity notes.',
    language: 'C++',
    languageColor: 'bg-primary-fixed',
    status: 'Regular pushes',
    url: 'https://github.com',
    iconColor: 'text-secondary',
  },
];

export const LANGUAGE_DISTRIBUTION = [
  { name: 'Python', percentage: 42, color: 'bg-secondary', textClass: 'text-secondary' },
  { name: 'C / C++', percentage: 28, color: 'bg-primary', textClass: 'text-primary' },
  { name: 'JavaScript', percentage: 18, color: 'bg-primary-fixed', textClass: 'text-primary-fixed' },
  { name: 'Java', percentage: 12, color: 'bg-tertiary', textClass: 'text-tertiary' },
];
