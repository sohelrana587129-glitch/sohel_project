import React from 'react';
import { MILESTONES } from '../data/portfolioData';

export const MilestonesSection: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-lowest/50 py-20 md:py-28" id="milestones">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="font-label-code text-xs md:text-sm text-secondary uppercase tracking-wider font-semibold">
              05 // Trajectory
            </span>
            <span className="h-px w-12 bg-outline-variant/50" />
          </div>
          <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-on-surface">
            Milestones &amp; Learning Roadmap
          </h2>
          <p className="font-body-md text-sm md:text-base text-on-surface-variant">
            Key accomplishments, active research pursuits, and practical milestones on the path to production-grade engineering.
          </p>
        </div>

        {/* 4 Bento Cards Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MILESTONES.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-surface-container flex flex-col justify-between gap-4 shadow-md hover:bg-surface-container-high transition-all border border-outline-variant/15 hover:border-outline-variant/35"
            >
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center border border-outline-variant/15">
                  <span className={`material-symbols-outlined text-[24px] ${m.iconColor}`}>
                    {m.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className={`font-label-badge text-xs uppercase font-bold ${m.tagColor}`}>
                    {m.tag}
                  </span>
                  <h3 className="font-headline-sm text-lg font-semibold text-on-surface">
                    {m.title}
                  </h3>
                </div>
              </div>

              <p className="font-body-sm text-xs md:text-sm text-on-surface-variant leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
