import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0a0e17] border-t border-outline-variant/20 py-12 text-on-surface-variant">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-outline-variant/10">
          <div className="flex items-center gap-3">
            <img
              src={PERSONAL_INFO.monogramUrl}
              alt="Sohel Rana Monogram"
              className="h-8 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-base font-bold text-on-surface">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-body-sm text-xs text-outline">
                {PERSONAL_INFO.department} • {PERSONAL_INFO.university} ({PERSONAL_INFO.batch})
              </span>
            </div>
          </div>

          {/* Footer Quick Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-label-badge">
            <a href="#home" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#education" className="hover:text-primary transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors border border-outline-variant/20 cursor-pointer self-start md:self-auto"
            title="Back to top"
            aria-label="Back to top"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body-sm text-outline">
          <div>
            © {new Date().getFullYear()} Sohel Rana. All rights reserved. Built with modern React &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="font-label-badge text-[11px] text-secondary">
              DIU // ML_SWE.v2 ACTIVE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
