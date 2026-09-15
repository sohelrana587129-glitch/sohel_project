import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects (5)' },
    { id: 'ai', label: 'AI / ML' },
    { id: 'web', label: 'Web & Database' },
    { id: 'systems', label: 'Systems & OOP' },
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'all') return true;
    return proj.category === activeFilter;
  });

  return (
    <section className="w-full bg-surface-container-lowest/50 py-20 md:py-28" id="projects">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-10">
        {/* Section Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="font-label-code text-xs md:text-sm text-secondary uppercase tracking-wider font-semibold">
                03 // Portfolio
              </span>
              <span className="h-px w-12 bg-outline-variant/50" />
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-on-surface">
              Featured Projects
            </h2>
            <p className="font-body-md text-sm md:text-base text-on-surface-variant">
              End-to-end applications demonstrating machine learning pipelines, system architecture,
              and modern full-stack development.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-surface-container-high self-start md:self-auto shadow-inner border border-outline-variant/15">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg font-label-badge text-xs transition-all cursor-pointer ${
                    isActive
                      ? 'bg-primary text-on-primary font-semibold shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest/50'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isFlagship = project.featured;

            return (
              <div
                key={project.id}
                className={`project-card rounded-xl bg-surface-container overflow-hidden flex flex-col shadow-lg transition-all hover:-translate-y-1 duration-300 border border-outline-variant/15 hover:border-outline-variant/35 ${
                  isFlagship ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Image Cover */}
                <div
                  className={`relative w-full ${
                    isFlagship ? 'h-56 md:h-64' : 'h-48'
                  } bg-surface-container-high overflow-hidden cursor-pointer group`}
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/40 to-transparent" />

                  {/* Badges on Image */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.featured && (
                      <span className="px-2.5 py-1 rounded bg-primary-container text-on-primary-container font-label-badge text-xs font-bold uppercase shadow-sm">
                        {project.featuredBadge || 'Featured Flagship'}
                      </span>
                    )}
                    {project.tagline && (
                      <span className="px-2.5 py-1 rounded bg-surface-container-lowest/80 backdrop-blur-md text-secondary font-label-badge text-xs uppercase border border-outline-variant/20">
                        {project.tagline}
                      </span>
                    )}
                  </div>

                  {/* Hover Quick View Pill */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity px-2.5 py-1 rounded-md bg-surface-container-lowest/90 text-on-surface font-label-badge text-[11px] flex items-center gap-1 border border-outline-variant/30">
                    <span className="material-symbols-outlined text-[14px]">visibility</span>
                    <span>Quick Specs</span>
                  </div>
                </div>

                {/* Card Body */}
                <div
                  className={`p-6 ${
                    isFlagship ? 'md:p-8' : ''
                  } flex flex-col justify-between flex-1 gap-4`}
                >
                  <div className="flex flex-col gap-2">
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className={`font-headline-sm font-bold text-on-surface cursor-pointer hover:text-primary transition-colors ${
                        isFlagship ? 'text-xl md:text-2xl' : 'text-lg md:text-[19px]'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="font-body-md text-xs md:text-sm text-on-surface-variant leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded bg-surface-container-low text-primary font-label-code text-xs border border-outline-variant/15"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-outline-variant/15 mt-2">
                    <span className="font-label-badge text-[11px] text-outline uppercase font-medium">
                      {project.academicTag}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.hasQueries ? (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-3.5 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-body-sm text-[13px] font-medium flex items-center gap-1 transition-colors border border-outline-variant/20 cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[16px]">terminal</span>
                          <span>Queries</span>
                        </button>
                      ) : project.hasSource ? (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-3.5 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-body-sm text-[13px] font-medium flex items-center gap-1 transition-colors border border-outline-variant/20 cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[16px]">code</span>
                          <span>
                            {project.category === 'systems' && project.id.includes('dsa')
                              ? 'Source'
                              : 'Codebase'}
                          </span>
                        </button>
                      ) : (
                        <>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3.5 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-body-sm text-[13px] font-medium flex items-center gap-1.5 transition-colors border border-outline-variant/20"
                          >
                            <span className="material-symbols-outlined text-[16px]">code</span>
                            <span className="hidden sm:inline">GitHub</span>
                          </a>
                          {project.demoUrl && (
                            <button
                              onClick={() => setSelectedProject(project)}
                              className={`px-3.5 py-1.5 rounded-lg font-body-sm text-[13px] font-semibold flex items-center gap-1 transition-colors shadow-sm cursor-pointer ${
                                project.id === 'modern-fullstack-web'
                                  ? 'bg-secondary text-on-secondary hover:bg-secondary-fixed-dim'
                                  : 'bg-primary text-on-primary hover:bg-primary-container'
                              }`}
                            >
                              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                              <span>{isFlagship ? 'Live Demo' : 'Demo'}</span>
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Specs Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
