import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const cvMarkdown = `# SOHEL RANA
Software Engineering Undergraduate | Aspiring AI/ML Developer
Dhaka, Bangladesh | ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.socials.github} | LinkedIn: ${PERSONAL_INFO.socials.linkedin}

---

## EDUCATION
**Daffodil International University (DIU)** | Dhaka, Bangladesh
Bachelor of Science in Software Engineering (B.Sc. SE) — Batch 44
2022 – Present (Expected Graduation: 2026)
- Core Coursework: OOP (Java), Data Structures & Algorithms (C/C++), DBMS (SQL), Software Architecture, AI & ML, OS.

**Higher Secondary Certificate (HSC) — Science**
Focused on Higher Mathematics, Physics, Chemistry, and ICT.

---

## TECHNICAL SKILLS
- **Programming Languages**: C, C++20, Java SE, Python 3, JavaScript (ES6+), SQL
- **AI & Machine Learning**: Scikit-Learn, PyTorch (Foundations), Pandas, NumPy, Streamlit
- **Web & Backend**: React, Node.js, Express, HTML5, CSS3/Tailwind, RESTful APIs
- **Databases**: PostgreSQL, MySQL, Relational Schema Normalization (3NF), Stored Procedures
- **Developer Tools**: Git, GitHub, Linux CLI, Bash, VS Code, Jupyter, Postman

---

## FEATURED PROJECTS
1. **Machine Learning Prediction & Analytics Engine**
   - Built an end-to-end predictive intelligence web app using Python, Scikit-Learn, and Streamlit.
   - Designed automated feature pipeline and achieved 94.62% cross-validation accuracy on 128k+ records.

2. **Java OOP Enterprise Management System**
   - Designed a 3-tier desktop enterprise architecture in Java SE using Factory, Singleton, and Observer patterns.
   - Enforced Role-Based Access Control (RBAC) and transactional audit logs.

3. **Scalable Relational Database Management System**
   - Engineered 3NF relational database schema in PostgreSQL/MySQL with audit triggers and parameterized procedures.
   - Attained 4.2x index acceleration through optimized multi-column composite B-Trees.

4. **Modern Full-Stack Web Application**
   - Developed responsive client application with JWT token authentication and Express REST APIs.

5. **C/C++ High-Performance Data Structures & Algorithms Library**
   - Implemented self-balancing AVL trees, Robin Hood hash maps, and Dijkstra graphs with zero Valgrind leaks.

---

## COMPETITIVE PROGRAMMING & HONORS
- Solved **250+ algorithmic challenges** across LeetCode, Codeforces, and HackerRank.
- Active participant in DIU intra-university hackathons and software prototyping sprints.
`;

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(cvMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div
        className="relative w-full max-w-3xl my-8 bg-surface-container rounded-2xl border border-outline-variant/30 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-surface-container-high border-b border-outline-variant/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-[24px]">description</span>
            <div>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">
                Curriculum Vitae — Sohel Rana
              </h3>
              <span className="font-label-badge text-xs text-secondary">
                Daffodil International University • Batch 44
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-highest text-on-surface text-xs font-medium flex items-center gap-1.5 transition-colors border border-outline-variant/20 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-highest text-on-surface flex items-center justify-center transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        {/* Scrollable CV Body */}
        <div className="p-6 sm:p-8 overflow-y-auto font-body-sm text-on-surface-variant flex flex-col gap-6 select-text bg-[#0a0e17]/60">
          {/* Top CV Header */}
          <div className="flex flex-col gap-1 pb-4 border-b border-outline-variant/15">
            <h1 className="font-headline-lg text-2xl sm:text-3xl font-bold text-on-surface">
              Sohel Rana
            </h1>
            <p className="text-secondary font-medium text-sm">
              Software Engineering Student &amp; Aspiring AI/ML Developer
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-outline pt-1 font-label-code">
              <span>{PERSONAL_INFO.location}</span>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-primary underline">
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="hover:text-primary underline">
                github.com/sohelrana
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="flex flex-col gap-2">
            <h4 className="font-label-badge text-xs uppercase text-primary font-bold tracking-wider">
              EDUCATION
            </h4>
            <div className="p-3.5 rounded-lg bg-surface-container border border-outline-variant/15 flex flex-col gap-1">
              <div className="flex justify-between items-start">
                <span className="font-bold text-on-surface text-sm">
                  Bachelor of Science in Software Engineering (B.Sc. SE)
                </span>
                <span className="text-xs text-secondary font-label-badge">2022 — Present</span>
              </div>
              <span className="text-xs text-on-surface-variant">
                Daffodil International University (DIU) • Dept. of Software Engineering (Batch 44)
              </span>
              <span className="text-xs text-outline pt-1">
                Relevant Coursework: OOP (Java), Data Structures &amp; Algorithms (C/C++), Database Systems (SQL), Software Architecture, Discrete Mathematics, AI Foundations.
              </span>
            </div>
          </div>

          {/* Technical Toolkit */}
          <div className="flex flex-col gap-2">
            <h4 className="font-label-badge text-xs uppercase text-primary font-bold tracking-wider">
              TECHNICAL COMPETENCIES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-lg bg-surface-container border border-outline-variant/15">
                <span className="font-bold text-on-surface block mb-1">Languages &amp; Core</span>
                <span>C, C++, Java SE, Python 3, JavaScript (ES6+), SQL</span>
              </div>
              <div className="p-3 rounded-lg bg-surface-container border border-outline-variant/15">
                <span className="font-bold text-on-surface block mb-1">AI &amp; Data Science</span>
                <span>Scikit-Learn, PyTorch (Basics), NumPy, Pandas, Streamlit</span>
              </div>
              <div className="p-3 rounded-lg bg-surface-container border border-outline-variant/15">
                <span className="font-bold text-on-surface block mb-1">Web &amp; Database</span>
                <span>React, Node.js, Express, HTML5, Tailwind CSS, PostgreSQL, MySQL</span>
              </div>
              <div className="p-3 rounded-lg bg-surface-container border border-outline-variant/15">
                <span className="font-bold text-on-surface block mb-1">Tools &amp; Environments</span>
                <span>Git, GitHub, Linux CLI, Bash, VS Code, Jupyter, Postman</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="flex flex-col gap-2">
            <h4 className="font-label-badge text-xs uppercase text-primary font-bold tracking-wider">
              FEATURED ENGINEERING PROJECTS
            </h4>
            <div className="flex flex-col gap-2 text-xs">
              <div className="p-3.5 rounded-lg bg-surface-container border border-outline-variant/15 flex flex-col gap-1">
                <span className="font-bold text-on-surface">
                  Machine Learning Prediction &amp; Analytics Engine
                </span>
                <span className="text-outline">Python, Scikit-Learn, Streamlit, Pandas</span>
                <p className="mt-1">
                  Built an end-to-end predictive intelligence web app with automated feature engineering, 5-fold cross validation tuning, and 94.62% validation accuracy.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-surface-container border border-outline-variant/15 flex flex-col gap-1">
                <span className="font-bold text-on-surface">
                  Java OOP Enterprise Management System
                </span>
                <span className="text-outline">Java SE, Clean Architecture, Design Patterns</span>
                <p className="mt-1">
                  Engineered 3-tier desktop workstation adhering to Factory, Singleton, and Observer design patterns with role-based access control.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-surface-container border border-outline-variant/15 flex flex-col gap-1">
                <span className="font-bold text-on-surface">
                  Scalable Relational Database Management System
                </span>
                <span className="text-outline">PostgreSQL, MySQL, Stored Procedures, 3NF</span>
                <p className="mt-1">
                  Designed normalized relational schema eliminating anomalies with audit triggers and 4.2x index acceleration.
                </p>
              </div>
            </div>
          </div>

          {/* Competitive Solves */}
          <div className="flex flex-col gap-2">
            <h4 className="font-label-badge text-xs uppercase text-primary font-bold tracking-wider">
              PROBLEM SOLVING
            </h4>
            <div className="p-3 rounded-lg bg-surface-container border border-outline-variant/15 text-xs">
              <span>
                Solved <strong>250+ algorithmic challenges</strong> across LeetCode and Codeforces covering dynamic programming, graphs, trees, and greedy approaches.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
