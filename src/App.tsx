import React, { useState } from 'react';
import { FastworkNav } from './components/FastworkNav';
import { FastworkHero } from './components/FastworkHero';
import { FastworkFuture } from './components/FastworkFuture';
import { FastworkPainAndCommission } from './components/FastworkPainAndCommission';
import { FastworkPlatform } from './components/FastworkPlatform';
import { FastworkDialog } from './components/FastworkDialog';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './data/portfolioData';

export function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleScrollToPeople = () => {
    const el = document.getElementById('people');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="start-selling">
      {/* 1. Fastwork Top Nav (Sticky Morphing Pill Bar) */}
      <FastworkNav onOpenWaitlist={() => setIsWaitlistOpen(true)} />

      <main>
        {/* 2. Hero Track: "Show the world what you can do" + 3D Orbit Cards Stage + Live Countdown */}
        <FastworkHero
          onOpenWaitlist={() => setIsWaitlistOpen(true)}
          onScrollToNext={handleScrollToPeople}
        />

        {/* 3. "People still need people": Profession Tabs & Interactive Profile Showcase */}
        <FastworkFuture onOpenWaitlist={() => setIsWaitlistOpen(true)} />

        {/* 4. Pain Points ("Freelancing is hard enough...") + Commission ("We let you keep more.") */}
        <FastworkPainAndCommission onOpenWaitlist={() => setIsWaitlistOpen(true)} />

        {/* 5. Platform Features: "One platform is everything you need" + Case Studies & Quotation */}
        <FastworkPlatform
          onOpenWaitlist={() => setIsWaitlistOpen(true)}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
      </main>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-200 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-900">Fastwork</span>
            <span>· Show the world what you can do</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#people" className="hover:text-blue-600 transition-colors">People</a>
            <a href="#platform" className="hover:text-blue-600 transition-colors">Platform</a>
            <button onClick={() => setIsWaitlistOpen(true)} className="hover:text-blue-600 transition-colors font-bold">
              Join waitlist
            </button>
          </div>
          <div>© {new Date().getFullYear()} Fastwork. All rights reserved.</div>
        </div>
      </footer>

      {/* Fastwork Waitlist / Brief Modal Dialog */}
      <FastworkDialog
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />

      {/* Case Study Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onHireForThis={() => {
          setSelectedProject(null);
          setIsWaitlistOpen(true);
        }}
      />
    </div>
  );
}

export default App;
