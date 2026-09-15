import React from 'react';
import { TIMELINE } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-28" id="education">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="font-label-code text-xs md:text-sm text-primary uppercase tracking-wider font-semibold">
              04 // Academics
            </span>
            <span className="h-px w-12 bg-outline-variant/50" />
          </div>
          <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-on-surface">
            Education &amp; Journey
          </h2>
          <p className="font-body-md text-sm md:text-base text-on-surface-variant">
            Formal foundations in software engineering, mathematics, and computation that underpin my technical work.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative pl-6 md:pl-8 border-l-2 border-outline-variant/30 flex flex-col gap-12 ml-2 md:ml-4">
          {TIMELINE.map((item, idx) => (
            <div key={idx} className="relative flex flex-col gap-3 group">
              {/* Pulsing Timeline Node */}
              <div
                className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full ${
                  item.dotColor || 'bg-primary'
                } ring-4 ring-surface shadow-md transition-transform group-hover:scale-125`}
              />

              {/* Time Period Badge */}
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-secondary font-label-badge text-xs font-semibold border border-outline-variant/20">
                  {item.period}
                </span>
                <span className="font-body-sm text-xs text-outline hidden sm:inline">
                  {item.location}
                </span>
              </div>

              {/* Card Container */}
              <div className="p-6 md:p-8 rounded-xl bg-surface-container flex flex-col gap-4 shadow-md hover:bg-surface-container-high transition-colors border border-outline-variant/15">
                <div className="flex flex-col gap-1">
                  <h3 className="font-headline-sm text-xl md:text-2xl font-bold text-on-surface">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-xs md:text-sm text-primary font-medium">
                    {item.institution}
                  </p>
                </div>

                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>

                {/* Relevant Coursework Pills */}
                {item.coursework && (
                  <div className="pt-2 flex flex-col gap-2">
                    <span className="font-label-code text-xs text-outline uppercase font-semibold">
                      Key Coursework &amp; Competencies:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2.5 py-1 rounded bg-surface-container-lowest font-body-sm text-xs text-on-surface border border-outline-variant/15"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
