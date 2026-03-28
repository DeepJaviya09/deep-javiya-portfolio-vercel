import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Spotlight from './components/Spotlight';
import CaseStudyDetail from './components/CaseStudyDetail';
import ProjectDetail from './components/ProjectDetail';
import { CaseStudy, Project } from './types';

type View =
  | { page: 'home' }
  | { page: 'case-study'; data: CaseStudy }
  | { page: 'project'; data: Project };

const App: React.FC = () => {
  const [view, setView] = useState<View>({ page: 'home' });

  if (view.page === 'case-study') {
    return <CaseStudyDetail study={view.data} onBack={() => setView({ page: 'home' })} />;
  }

  if (view.page === 'project') {
    return <ProjectDetail project={view.data} onBack={() => setView({ page: 'home' })} />;
  }

  return (
    <div className="bg-navy min-h-screen text-slate-100 selection:bg-primary selection:text-white relative overflow-hidden">
      {/* Global Effects */}
      <Spotlight />

      {/* Ambient Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
         <div className="absolute top-0 -left-40 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
         <div className="absolute top-40 right-0 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
         <div className="absolute -bottom-40 left-20 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Structure */}
      <Header />

      <main className="relative z-10">
        <Hero />
        <CaseStudies onViewStudy={(study: CaseStudy) => setView({ page: 'case-study', data: study })} />
        <Projects onViewProject={(project: Project) => setView({ page: 'project', data: project })} />
        <Testimonials />
        <Contact />
      </main>

      <footer className="relative z-10 py-12 text-center text-slate-500 text-sm border-t border-white/5 bg-navy/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
           <p>© {new Date().getFullYear()} Deep Javiya. Crafted with precision.</p>
           <div className="flex gap-8">
             <a href="#" className="hover:text-primary transition-colors hover:scale-105 transform">GitHub</a>
             <a href="#" className="hover:text-primary transition-colors hover:scale-105 transform">LinkedIn</a>
             <a href="#" className="hover:text-primary transition-colors hover:scale-105 transform">Twitter</a>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
