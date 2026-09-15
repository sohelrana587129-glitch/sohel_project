import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv }) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#0f131c]/85 backdrop-blur-xl border-b border-outline-variant/15 shadow-[0_1px_12px_rgba(0,0,0,0.4)]">
      <div className="h-16 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Monogram & Name */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={PERSONAL_INFO.monogramUrl}
            alt="Sohel Rana Dev Monogram"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex items-center gap-2">
            <span className="font-headline-sm text-lg md:text-xl font-bold tracking-tight text-on-surface">
              {PERSONAL_INFO.name}
            </span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full font-label-badge text-[11px] uppercase bg-surface-container-high text-primary border border-outline-variant/30">
              SE @ DIU
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 p-1 rounded-xl bg-surface-container-lowest/70 border border-outline-variant/20">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-1.5 transition-all text-sm font-medium rounded-lg ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container font-semibold shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Socials */}
        <div className="flex items-center gap-3">
          {/* Quick Social Buttons */}
          <div className="hidden md:flex items-center gap-1">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">terminal</span>
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-secondary hover:bg-surface-container-high transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
            </a>
            <a
              href={PERSONAL_INFO.socials.email}
              aria-label="Email Communication"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">alternate_email</span>
            </a>
          </div>

          {/* CV / Connect Button */}
          <button
            onClick={onOpenCv}
            id="nav-cv-button"
            className="relative inline-flex items-center justify-center px-3.5 py-2 rounded-lg font-body-sm text-xs md:text-sm font-semibold bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container shadow-[0_0_20px_rgba(160,120,255,0.3)] transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined mr-1.5 text-[18px]">download</span>
            <span>CV / Connect</span>
          </button>

          {/* Profile Avatar */}
          <div className="pl-1">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-full object-cover object-top ring-1 ring-outline-variant/40 hover:ring-primary/60 transition-all"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('googleusercontent')) {
                  target.src = 'https://lh3.googleusercontent.com/d/1AEaFOi5EAHpTFhvI9r_F-z115xZOdvYe';
                }
              }}
            />
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest/95 backdrop-blur-xl border-b border-outline-variant/20 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2.5 rounded-lg text-sm transition-colors ${
                activeSection === link.id
                  ? 'bg-primary-container text-on-primary-container font-semibold'
                  : 'text-on-surface-variant hover:bg-surface-container-high text-on-surface'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between text-xs text-on-surface-variant">
            <span>Daffodil International University</span>
            <span className="text-secondary font-medium">Batch 44</span>
          </div>
        </div>
      )}
    </header>
  );
};
