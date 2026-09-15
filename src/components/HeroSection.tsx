import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenCv: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCv }) => {
  const [isTraining, setIsTraining] = useState<boolean>(false);
  const [epoch, setEpoch] = useState<number>(50);
  const [accuracy, setAccuracy] = useState<number>(94.62);
  const [loss, setLoss] = useState<number>(0.0418);
  const [activeTab, setActiveTab] = useState<'simulation' | 'cli'>('simulation');
  const [cliInput, setCliInput] = useState<string>('');
  const [cliLogs, setCliLogs] = useState<string[]>([
    'Type "help" for a list of available commands.',
  ]);

  // Handle simulated training execution
  const runTrainingSimulation = () => {
    if (isTraining) return;
    setIsTraining(true);
    setEpoch(1);
    setAccuracy(52.1);
    setLoss(0.684);

    let currentEpoch = 1;
    const interval = setInterval(() => {
      currentEpoch += 2;
      if (currentEpoch >= 50) {
        setEpoch(50);
        setAccuracy(94.62);
        setLoss(0.0418);
        setIsTraining(false);
        clearInterval(interval);
      } else {
        setEpoch(currentEpoch);
        // Smoothly interpolate accuracy and loss
        const progress = currentEpoch / 50;
        const currentAcc = (52.1 + (94.62 - 52.1) * Math.sin((progress * Math.PI) / 2)).toFixed(2);
        const currentLoss = (0.684 - (0.684 - 0.0418) * Math.sin((progress * Math.PI) / 2)).toFixed(4);
        setAccuracy(parseFloat(currentAcc));
        setLoss(parseFloat(currentLoss));
      }
    }, 80);
  };

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = cliInput.trim().toLowerCase();
    if (!cmd) return;

    let response = '';
    switch (cmd) {
      case 'help':
        response = 'Available commands: about, skills, projects, contact, train, clear';
        break;
      case 'about':
        response = 'Sohel Rana — Software Engineering Student (Batch 44) at Daffodil International University.';
        break;
      case 'skills':
        response = 'Core: C/C++, Java, Python, Scikit-Learn, PyTorch, SQL, React, Node.js.';
        break;
      case 'projects':
        response = '5 Projects: ML Prediction Engine, Java OOP Enterprise, Scalable DBMS, Full-Stack Web, DSA Library.';
        break;
      case 'contact':
        response = 'Email: sohel.rana@diu.edu.bd | Dept. of SE, DIU, Dhaka, Bangladesh.';
        break;
      case 'train':
        setActiveTab('simulation');
        runTrainingSimulation();
        setCliInput('');
        return;
      case 'clear':
        setCliLogs([]);
        setCliInput('');
        return;
      default:
        response = `Command not recognized: "${cmd}". Type "help" for options.`;
    }

    setCliLogs((prev) => [...prev, `$ ${cliInput}`, response]);
    setCliInput('');
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Top Ambient Glow Aura */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-gradient-to-b from-primary-container/20 via-secondary/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-96 right-[-100px] w-80 h-80 bg-secondary/10 blur-3xl rounded-full pointer-events-none -z-10" />

      {/* HERO SECTION (#home) */}
      <section
        className="w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 pt-10 md:pt-16 pb-20 md:pb-28"
        id="home"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Hero Left Column (Narrative & CTAs) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface-container-high/80 backdrop-blur-md shadow-sm border border-outline-variant/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
              </span>
              <span className="font-label-badge text-xs tracking-wider uppercase text-secondary font-semibold">
                {PERSONAL_INFO.availability}
              </span>
            </div>

            {/* Main Intro & Name */}
            <div className="flex flex-col gap-1 mt-2">
              <span className="font-label-code text-xs md:text-sm text-primary uppercase tracking-widest font-semibold">
                {PERSONAL_INFO.tagline}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary-fixed">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <p className="font-headline-sm text-lg md:text-xl text-on-surface-variant font-medium mt-1">
                {PERSONAL_INFO.role}
              </p>
            </div>

            {/* University Credential Pill */}
            <div className="flex flex-wrap items-center gap-2 p-2.5 rounded-lg bg-surface-container-low text-on-surface-variant font-body-sm text-xs md:text-sm shadow-sm border border-outline-variant/15">
              <span className="material-symbols-outlined text-primary text-[18px]">school</span>
              <span className="font-medium text-on-surface">{PERSONAL_INFO.university}</span>
              <span className="text-outline-variant">•</span>
              <span className="text-primary font-label-badge font-semibold">{PERSONAL_INFO.batch}</span>
              <span className="text-outline-variant">•</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>

            {/* Bio Paragraph */}
            <p className="font-body-lg text-base md:text-lg text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* Primary / Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                id="hero-view-projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-headline-sm text-[15px] font-semibold bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container shadow-[0_0_24px_rgba(208,188,255,0.25)] transition-all cursor-pointer"
              >
                <span>View My Projects</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <button
                onClick={onOpenCv}
                id="hero-download-cv"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-headline-sm text-[15px] font-semibold bg-surface-container text-on-surface hover:bg-surface-container-high transition-all shadow-sm border border-outline-variant/20 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">description</span>
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Channels Strip */}
            <div className="flex items-center gap-2 pt-3">
              <span className="font-label-badge text-xs uppercase text-on-surface-variant mr-1">
                Profiles:
              </span>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="group relative p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-all border border-outline-variant/15"
              >
                <span className="material-symbols-outlined text-[20px]">terminal</span>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-surface-container-highest text-on-surface font-label-badge text-[10px] px-2 py-0.5 rounded pointer-events-none whitespace-nowrap shadow-md">
                  GitHub
                </span>
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="group relative p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-secondary transition-all border border-outline-variant/15"
              >
                <span className="material-symbols-outlined text-[20px]">share</span>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-surface-container-highest text-on-surface font-label-badge text-[10px] px-2 py-0.5 rounded pointer-events-none whitespace-nowrap shadow-md">
                  LinkedIn
                </span>
              </a>
              <a
                href={PERSONAL_INFO.socials.kaggle}
                target="_blank"
                rel="noreferrer"
                aria-label="Kaggle Datasets"
                className="group relative p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-all border border-outline-variant/15"
              >
                <span className="material-symbols-outlined text-[20px]">analytics</span>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-surface-container-highest text-on-surface font-label-badge text-[10px] px-2 py-0.5 rounded pointer-events-none whitespace-nowrap shadow-md">
                  Kaggle
                </span>
              </a>
              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode Profile"
                className="group relative p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-secondary transition-all border border-outline-variant/15"
              >
                <span className="material-symbols-outlined text-[20px]">code_blocks</span>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-surface-container-highest text-on-surface font-label-badge text-[10px] px-2 py-0.5 rounded pointer-events-none whitespace-nowrap shadow-md">
                  LeetCode
                </span>
              </a>
              <a
                href={PERSONAL_INFO.socials.email}
                aria-label="Direct Email"
                className="group relative p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-all border border-outline-variant/15"
              >
                <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-surface-container-highest text-on-surface font-label-badge text-[10px] px-2 py-0.5 rounded pointer-events-none whitespace-nowrap shadow-md">
                  Email
                </span>
              </a>
            </div>
          </div>

          {/* Hero Right Column (Live Terminal / Engineering Matrix) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Glass Terminal Component */}
            <div className="w-full rounded-xl bg-[#0a0e17]/95 backdrop-blur-xl p-5 shadow-2xl border border-outline-variant/20">
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 bg-surface-container-low px-3 py-2 rounded-lg border border-outline-variant/15">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-error inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#fde047] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#4ade80] inline-block" />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('simulation')}
                    className={`font-label-code text-xs px-2 py-0.5 rounded transition-colors ${
                      activeTab === 'simulation'
                        ? 'text-on-surface bg-surface-container font-semibold'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    model_train.py — zsh
                  </button>
                  <button
                    onClick={() => setActiveTab('cli')}
                    className={`font-label-code text-xs px-2 py-0.5 rounded transition-colors ${
                      activeTab === 'cli'
                        ? 'text-on-surface bg-surface-container font-semibold'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    bash (interactive)
                  </button>
                </div>
                <span className="font-label-badge text-[10px] uppercase text-secondary px-2 py-0.5 rounded bg-surface-container font-semibold">
                  DIU_NODE_01
                </span>
              </div>

              {/* Terminal Body */}
              {activeTab === 'simulation' ? (
                <div className="font-label-code text-xs md:text-sm flex flex-col gap-2 text-on-surface-variant leading-snug select-text">
                  <div className="flex items-center justify-between text-outline">
                    <div className="flex items-center gap-2">
                      <span className="text-secondary">$</span>
                      <span className="text-on-surface">python -m engine.train --epochs 50 --batch 64</span>
                    </div>
                    <button
                      onClick={runTrainingSimulation}
                      disabled={isTraining}
                      title="Re-run training simulation"
                      className="text-[11px] px-2 py-0.5 rounded bg-surface-container hover:bg-surface-container-high text-secondary border border-secondary/30 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        {isTraining ? 'sync' : 'replay'}
                      </span>
                      <span>{isTraining ? 'Training...' : 'Re-run'}</span>
                    </button>
                  </div>

                  <div className="text-on-surface-variant/90 pl-3 py-1 border-l-2 border-primary/40 flex flex-col gap-1">
                    <p>
                      <span className="text-primary font-semibold">&gt;</span> Initializing pipeline: PyTorch,
                      Pandas, Scikit-Learn
                    </p>
                    <p>
                      <span className="text-secondary font-semibold">&gt;</span> Dataset: 128,400 samples |
                      Features: 32 dimensional
                    </p>
                    <p>
                      <span className="text-primary font-semibold">&gt;</span> Architecture: Multi-Layer
                      Perceptron + Dropout(0.2)
                    </p>
                  </div>

                  {/* Inline Micro Progress Metric */}
                  <div className="p-3 my-1 rounded-lg bg-surface-container flex flex-col gap-2 border border-outline-variant/15">
                    <div className="flex justify-between items-center font-label-badge text-xs">
                      <span className="text-on-surface font-semibold">
                        Epoch {epoch}/50 {epoch === 50 ? '[Completed]' : '[In Progress]'}
                      </span>
                      <span className="text-secondary font-bold">Validation Acc: {accuracy}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-150"
                        style={{ width: `${(epoch / 50) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between items-center text-[11px] text-outline">
                      <span>Loss: {loss}</span>
                      <span>F1-Score: {(accuracy / 100 * 0.995).toFixed(3)}</span>
                      <span>Inference: 1.4ms</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1 text-secondary">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span className="text-on-surface font-semibold text-xs md:text-sm">
                      Checkpoint serialized: model_v2_diu.pt
                    </span>
                  </div>
                </div>
              ) : (
                /* Interactive CLI Mode */
                <div className="font-label-code text-xs md:text-sm flex flex-col gap-2 h-44 overflow-y-auto">
                  <div className="text-on-surface-variant/80 text-xs">
                    Welcome to Sohel Rana's portfolio terminal emulator.
                  </div>
                  {cliLogs.map((log, idx) => (
                    <div
                      key={idx}
                      className={log.startsWith('$') ? 'text-secondary font-medium' : 'text-on-surface'}
                    >
                      {log}
                    </div>
                  ))}
                  <form onSubmit={handleCliSubmit} className="flex items-center gap-2 mt-auto pt-2">
                    <span className="text-primary font-bold">&gt;</span>
                    <input
                      type="text"
                      value={cliInput}
                      onChange={(e) => setCliInput(e.target.value)}
                      placeholder="Type a command (e.g. skills, projects, train)..."
                      className="flex-1 bg-transparent text-on-surface outline-none border-none text-xs"
                      autoFocus
                    />
                  </form>
                </div>
              )}
            </div>

            {/* Quick Metrics Bento Strip */}
            <div className="grid grid-cols-3 gap-3">
              {PERSONAL_INFO.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-surface-container flex flex-col gap-0.5 shadow-sm border border-outline-variant/15 hover:border-outline-variant/35 transition-colors"
                >
                  <span className="font-label-badge text-[11px] text-on-surface-variant uppercase font-medium">
                    {metric.label}
                  </span>
                  <span className={`font-headline-sm text-xl font-bold ${metric.color}`}>
                    {metric.value}
                  </span>
                  <span className="font-body-sm text-[11px] text-outline">{metric.subtext}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
