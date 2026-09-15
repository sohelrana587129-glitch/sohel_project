import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { MilestonesSection } from './components/MilestonesSection';
import { GithubSection } from './components/GithubSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export function App() {
  const [isCvOpen, setIsCvOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#0f131c] text-[#dfe2ef] font-body-md selection:bg-primary-container selection:text-on-primary-container flex flex-col">
      {/* Navigation Header */}
      <Navbar onOpenCv={() => setIsCvOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full pt-16">
        <HeroSection onOpenCv={() => setIsCvOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <MilestonesSection />
        <GithubSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive CV Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </div>
  );
}

export default App;
