import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div
        className="relative w-full max-w-3xl my-8 bg-surface-container rounded-2xl border border-outline-variant/30 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="relative w-full h-56 sm:h-72 bg-surface-container-high overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/60 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container-lowest/80 text-on-surface hover:bg-surface-container-high flex items-center justify-center transition-colors border border-outline-variant/20 cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {/* Badges on image */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center gap-2">
            {project.featured && (
              <span className="px-2.5 py-1 rounded bg-primary-container text-on-primary-container font-label-badge text-xs font-bold uppercase">
                {project.featuredBadge || 'Featured Flagship'}
              </span>
            )}
            {project.tagline && (
              <span className="px-2.5 py-1 rounded bg-surface-container-lowest/80 backdrop-blur-md text-secondary font-label-badge text-xs uppercase border border-outline-variant/20">
                {project.tagline}
              </span>
            )}
            <span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-badge text-xs ml-auto">
              {project.academicTag}
            </span>
          </div>
        </div>

        {/* Content area */}
        <div className="p-6 sm:p-8 flex flex-col gap-6 max-h-[60vh] overflow-y-auto">
          <div>
            <h3 className="font-headline-sm text-2xl font-bold text-on-surface">
              {project.title}
            </h3>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
              {project.fullDetails?.overview || project.description}
            </p>
          </div>

          {/* Architecture Highlights */}
          {project.fullDetails?.architecture && (
            <div className="flex flex-col gap-3">
              <h4 className="font-headline-sm text-sm font-semibold uppercase tracking-wider text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">account_tree</span>
                <span>System Architecture &amp; Methodology</span>
              </h4>
              <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/15 flex flex-col gap-2">
                {project.fullDetails.architecture.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface-variant">
                    <span className="text-secondary font-bold">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Metrics Bento */}
          {project.fullDetails?.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.fullDetails.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/15 flex flex-col"
                >
                  <span className="font-label-badge text-[11px] text-outline uppercase font-medium">
                    {m.label}
                  </span>
                  <span className="font-headline-sm text-base sm:text-lg font-bold text-secondary mt-1">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Technologies used */}
          <div className="flex flex-col gap-2">
            <span className="font-label-badge text-xs uppercase tracking-wider text-outline font-medium">
              Technologies &amp; Libraries
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded bg-surface-container-lowest text-primary font-label-code text-xs border border-outline-variant/20 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:px-8 sm:py-4 border-t border-outline-variant/15 bg-surface-container-low flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-outline font-body-sm">
            Daffodil International University • Dept. of SE
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-xs font-semibold flex items-center gap-1.5 transition-colors border border-outline-variant/20"
            >
              <span className="material-symbols-outlined text-[16px]">code</span>
              <span>View Codebase</span>
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                onClick={(e) => {
                  if (project.demoUrl === '#') {
                    e.preventDefault();
                    alert(`Demo for "${project.title}" is deployed locally or in simulation.`);
                  }
                }}
                className="px-4 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                <span>Launch Demo</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant text-xs font-medium cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
