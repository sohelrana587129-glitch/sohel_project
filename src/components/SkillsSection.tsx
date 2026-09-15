import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-28" id="skills">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="font-label-code text-xs md:text-sm text-primary uppercase tracking-wider font-semibold">
              02 // Stack
            </span>
            <span className="h-px w-12 bg-outline-variant/50" />
          </div>
          <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-on-surface">
            Technical Toolkit
          </h2>
          <p className="font-body-md text-sm md:text-base text-on-surface-variant">
            Technologies and tools honed through rigorous academic coursework, independent systems
            programming, and applied ML research.
          </p>
        </div>

        {/* 5 Structured Category Cards Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className={`p-6 rounded-xl bg-surface-container flex flex-col justify-between gap-4 shadow-md hover:bg-surface-container-high transition-all border border-outline-variant/15 ${
                cat.colSpan || ''
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center border border-outline-variant/20">
                    <span className={`material-symbols-outlined text-[24px] ${cat.iconColor}`}>
                      {cat.icon}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-headline-sm text-lg font-semibold text-on-surface">
                      {cat.title}
                    </h3>
                    <span className="font-label-code text-xs text-outline font-medium">
                      {cat.subtitle}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cat.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded bg-surface-container-lowest font-label-badge text-xs font-semibold border border-outline-variant/15 ${
                        tag.colorClass || 'text-on-surface'
                      }`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bullet Points */}
              <div
                className={`pt-3 border-t border-outline-variant/15 text-on-surface-variant font-body-sm text-xs md:text-[13px] leading-relaxed ${
                  cat.colSpan ? 'grid grid-cols-1 sm:grid-cols-2 gap-2' : 'flex flex-col gap-1.5'
                }`}
              >
                {cat.bulletPoints.map((point, idx) => (
                  <span key={idx} className="hover:text-on-surface transition-colors">
                    {point}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
