import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyProfile = () => {
    const jsonStr = JSON.stringify(PERSONAL_INFO.devProfile, null, 2);
    navigator.clipboard.writeText(jsonStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full bg-surface-container-lowest/50 py-20 md:py-28" id="about">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="font-label-code text-xs md:text-sm text-secondary uppercase tracking-wider font-semibold">
              01 // Profile
            </span>
            <span className="h-px w-12 bg-outline-variant/50" />
          </div>
          <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-on-surface">
            About Me
          </h2>
          <p className="font-body-md text-sm md:text-base text-on-surface-variant">
            Bridging foundational computer science rigor with applied machine learning and scalable web systems.
          </p>
        </div>

        {/* Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Deep Bio & Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-6 md:p-8 rounded-xl bg-surface-container flex flex-col gap-4 shadow-md border border-outline-variant/15">
              <h3 className="font-headline-sm text-xl text-on-surface font-semibold">
                Engineering Philosophy
              </h3>
              <p className="font-body-md text-sm md:text-base text-on-surface-variant leading-relaxed">
                As a dedicated Software Engineering student at{' '}
                <strong className="text-on-surface font-medium">
                  Daffodil International University (Batch 44)
                </strong>
                , I approach computer science as both an engineering craft and an experimental science.
                My journey started with deterministic systems in C/C++ and Java, honing object-oriented
                design and algorithmic problem-solving before expanding into the probabilistic paradigm
                of Machine Learning.
              </p>
              <p className="font-body-md text-sm md:text-base text-on-surface-variant leading-relaxed">
                I believe modern software is increasingly intelligent: systems require both predictable
                backend resilience and adaptive machine learning models that extract insight from messy
                real-world data. My goal is to build end-to-end architectures where data pipelines, backend
                APIs, and ML models operate seamlessly in production.
              </p>
            </div>

            {/* Highlight Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-surface-container flex flex-col gap-2 shadow-sm hover:bg-surface-container-high transition-colors border border-outline-variant/15">
                <span className="material-symbols-outlined text-primary text-[28px]">terminal</span>
                <h4 className="font-headline-sm text-[16px] font-semibold text-on-surface">
                  Core Software Dev
                </h4>
                <p className="font-body-sm text-xs md:text-sm text-on-surface-variant leading-relaxed">
                  Object-Oriented Design, algorithmic rigor, data structures, modular clean code practices.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-surface-container flex flex-col gap-2 shadow-sm hover:bg-surface-container-high transition-colors border border-outline-variant/15">
                <span className="material-symbols-outlined text-secondary text-[28px]">neurology</span>
                <h4 className="font-headline-sm text-[16px] font-semibold text-on-surface">
                  Applied ML / AI
                </h4>
                <p className="font-body-sm text-xs md:text-sm text-on-surface-variant leading-relaxed">
                  Statistical modeling, data pre-processing, Scikit-learn pipelines, PyTorch tensor mechanics.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-surface-container flex flex-col gap-2 shadow-sm hover:bg-surface-container-high transition-colors border border-outline-variant/15">
                <span className="material-symbols-outlined text-primary-fixed text-[28px]">dns</span>
                <h4 className="font-headline-sm text-[16px] font-semibold text-on-surface">
                  Web &amp; Databases
                </h4>
                <p className="font-body-sm text-xs md:text-sm text-on-surface-variant leading-relaxed">
                  Relational schema design, normalization, RESTful APIs, modern frontend integrations.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Terminal Bio Spec Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-xl bg-surface-container-low p-6 flex flex-col gap-4 shadow-xl border border-outline-variant/15">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/15">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">badge</span>
                  <span className="font-label-code text-sm text-on-surface font-semibold">
                    dev_profile.json
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyProfile}
                    className="text-[11px] font-label-badge text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                    title="Copy profile JSON"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      {copied ? 'check' : 'content_copy'}
                    </span>
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                  <span className="font-label-badge text-xs text-primary bg-primary/10 px-2 py-0.5 rounded font-semibold border border-primary/20">
                    DIU.SE.44
                  </span>
                </div>
              </div>

              {/* Key Metric Rows */}
              <div className="flex flex-col gap-2 font-body-sm text-xs md:text-sm">
                <div className="flex items-start justify-between py-2 border-b border-outline-variant/10">
                  <span className="text-on-surface-variant font-label-code">Academic Degree</span>
                  <span className="text-on-surface font-medium text-right">
                    {PERSONAL_INFO.devProfile.academicDegree}
                  </span>
                </div>
                <div className="flex items-start justify-between py-2 border-b border-outline-variant/10">
                  <span className="text-on-surface-variant font-label-code">Institution</span>
                  <span className="text-on-surface font-medium text-right">
                    {PERSONAL_INFO.devProfile.institution}
                  </span>
                </div>
                <div className="flex items-start justify-between py-2 border-b border-outline-variant/10">
                  <span className="text-on-surface-variant font-label-code">Department &amp; Batch</span>
                  <span className="text-primary font-medium text-right">
                    {PERSONAL_INFO.devProfile.departmentAndBatch}
                  </span>
                </div>
                <div className="flex items-start justify-between py-2 border-b border-outline-variant/10">
                  <span className="text-on-surface-variant font-label-code">Current Standing</span>
                  <span className="text-on-surface font-medium text-right">
                    {PERSONAL_INFO.devProfile.currentStanding}
                  </span>
                </div>
                <div className="flex items-start justify-between py-2 border-b border-outline-variant/10">
                  <span className="text-on-surface-variant font-label-code">Competitive Solves</span>
                  <span className="text-secondary font-label-badge text-xs font-bold text-right">
                    {PERSONAL_INFO.devProfile.competitiveSolves}
                  </span>
                </div>
                <div className="flex items-start justify-between py-2 border-b border-outline-variant/10">
                  <span className="text-on-surface-variant font-label-code">Current Research Focus</span>
                  <span className="text-on-surface font-medium text-right">
                    {PERSONAL_INFO.devProfile.currentResearchFocus}
                  </span>
                </div>
                <div className="flex items-start justify-between py-2">
                  <span className="text-on-surface-variant font-label-code">Base Location</span>
                  <span className="text-on-surface font-medium text-right">
                    {PERSONAL_INFO.devProfile.baseLocation}
                  </span>
                </div>
              </div>

              {/* Quick Quote */}
              <div className="mt-2 p-3 rounded-lg bg-surface-container flex items-center gap-3 border border-outline-variant/15">
                <span className="material-symbols-outlined text-primary text-[24px]">psychology</span>
                <span className="font-body-sm text-xs md:text-sm text-on-surface-variant italic">
                  {PERSONAL_INFO.devProfile.quote}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
