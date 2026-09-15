import React from 'react';
import { PERSONAL_INFO, REPOSITORIES, LANGUAGE_DISTRIBUTION } from '../data/portfolioData';

export const GithubSection: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-28" id="opensource">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="font-label-code text-xs md:text-sm text-primary uppercase tracking-wider font-semibold">
              06 // Open Source
            </span>
            <span className="h-px w-12 bg-outline-variant/50" />
          </div>
          <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-on-surface">
            Building in Public
          </h2>
          <p className="font-body-md text-sm md:text-base text-on-surface-variant">
            Code repositories, algorithmic problem logs, and coursework implementations open for inspection.
          </p>
        </div>

        {/* GitHub Metrics & Language Stack Overview */}
        <div className="p-6 md:p-8 rounded-xl bg-surface-container flex flex-col gap-6 shadow-md border border-outline-variant/15">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-[28px]">terminal</span>
              <div>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface">
                  Language Distribution &amp; Code Cadence
                </h3>
                <span className="font-body-sm text-xs text-outline">
                  Aggregated across active academic and research repositories
                </span>
              </div>
            </div>
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-body-sm text-xs md:text-sm font-semibold border border-outline-variant/20 transition-colors self-start md:self-auto"
            >
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              <span>Visit GitHub Profile</span>
            </a>
          </div>

          {/* Language Distribution Bar */}
          <div className="flex flex-col gap-2">
            <div className="w-full h-3 rounded-full bg-surface-container-lowest overflow-hidden flex">
              {LANGUAGE_DISTRIBUTION.map((lang, idx) => (
                <div
                  key={idx}
                  className={`${lang.color} h-full transition-all`}
                  style={{ width: `${lang.percentage}%` }}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-1">
              {LANGUAGE_DISTRIBUTION.map((lang, idx) => (
                <div key={idx} className="flex items-center gap-1.5 font-label-badge text-xs">
                  <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                  <span className="text-on-surface-variant">{lang.name}</span>
                  <span className="text-outline font-semibold">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Git Credo Code Snippet */}
          <div className="p-3.5 rounded-lg bg-surface-container-lowest font-label-code text-xs text-on-surface-variant flex flex-col gap-1 border border-outline-variant/15">
            <div className="flex items-center gap-2 text-outline">
              <span className="text-secondary">$</span>
              <span className="text-primary font-medium">git commit</span>
              <span className="text-on-surface">
                -m "feat(core): implement deterministic state transitions and vector operations"
              </span>
            </div>
            <span className="text-outline text-[11px]">
              Writing semantic, verifiable code with daily cadence and clean commit histories.
            </span>
          </div>

          {/* Sample Repository Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {REPOSITORIES.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="group p-4 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-all flex flex-col justify-between gap-3 border border-outline-variant/15 hover:border-outline-variant/35"
              >
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className={`material-symbols-outlined text-[18px] ${repo.iconColor}`}>
                        folder_open
                      </span>
                      <span className="font-label-code text-xs md:text-sm font-bold text-on-surface group-hover:text-primary transition-colors truncate max-w-[180px]">
                        {repo.name}
                      </span>
                    </div>
                    <span className="font-label-badge text-[10px] text-outline px-1.5 py-0.5 rounded bg-surface-container uppercase">
                      Public
                    </span>
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] font-label-badge text-outline pt-2 border-t border-outline-variant/10">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${repo.languageColor}`} />
                    <span>{repo.language}</span>
                  </div>
                  <span>{repo.status}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
