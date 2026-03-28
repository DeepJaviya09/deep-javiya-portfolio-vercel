import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import RevealOnScroll from './RevealOnScroll';

interface Props {
  onViewProject: (project: Project) => void;
}

const Projects: React.FC<Props> = ({ onViewProject }) => {
  return (
    <section id="projects" className="py-20 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <RevealOnScroll>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Labs & Experiments</h2>
            <p className="text-slate-400">Open source contributions and side projects.</p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 50}>
              <div className="group glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/30 hover:bg-surfaceHighlight/50 transition-all duration-300 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onViewProject(project)}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-primary text-white text-sm font-semibold border border-white/5 hover:border-primary/20 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  View Details
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
