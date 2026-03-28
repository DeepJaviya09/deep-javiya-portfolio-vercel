import React, { useEffect } from 'react';
import { Project } from '../types';

interface Props {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<Props> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-navy text-slate-100">
      {/* Back Nav */}
      <div className="sticky top-0 z-50 bg-navy/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium group"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </button>
          <span className="text-white/10">/</span>
          <span className="text-slate-500 text-sm truncate">{project.title}</span>
          <div className="ml-auto flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              DJ
            </div>
            <span className="text-slate-400 text-xs hidden sm:block">Deep Javiya</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-16">

        {/* Hero */}
        <div className="space-y-6">
          {/* Scope + type tags */}
          <div className="flex flex-wrap items-center gap-3">
            {project.scope && project.scope.map((s) => (
              <span key={s.label} className="px-3 py-1 rounded-full bg-white/5 text-slate-400 text-xs font-medium border border-white/5">
                {s.value}
              </span>
            ))}
            {project.engagementType && (
              <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-medium border border-violet-500/20">
                {project.engagementType}
              </span>
            )}
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-gradient">{project.title}</span>
          </h1>

          {/* Problem Statement — lead with the "why" */}
          {project.problemStatement && (
            <div className="glass-panel rounded-2xl p-6 border-l-4 border-primary/60 bg-primary/5 max-w-3xl">
              <p className="text-slate-200 text-base md:text-lg leading-relaxed italic">
                "{project.problemStatement}"
              </p>
            </div>
          )}

          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl">
            {project.longDescription}
          </p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Key Technical Decisions */}
        {project.technicalDecisions && project.technicalDecisions.length > 0 && (
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold">Key Technical Decisions</h2>
              <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
            </div>
            <div className="space-y-5">
              {project.technicalDecisions.map((decision, i) => (
                <div key={i} className="glass-panel rounded-2xl p-6 border border-white/5 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-xs font-bold">{i + 1}</span>
                    </div>
                    <h3 className="text-white font-semibold text-base leading-snug">{decision.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed pl-9">{decision.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features — "What it does" */}
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-2xl font-bold">What It Does</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4 glass-panel p-5 rounded-2xl border border-white/5">
                <div className="mt-0.5 w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-6">
          <h2 className="font-display text-xs font-bold text-slate-500 uppercase tracking-widest">Built With</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-white/5 text-slate-200 text-sm font-medium border border-white/5 hover:border-primary/30 hover:text-white transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Lessons Learned */}
        {project.lessonsLearned && (
          <div className="glass-panel rounded-3xl p-8 border border-amber-500/10 bg-amber-500/5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="font-display font-bold text-lg text-amber-300">Lessons Learned</h2>
            </div>
            <p className="text-slate-400 leading-relaxed">{project.lessonsLearned}</p>
          </div>
        )}

        {/* CTA Footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm font-semibold">Available for similar work</span>
            </div>
            <p className="text-slate-500 text-sm">Need a custom build or technical consultation?</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={onBack}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-bold transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-lg shadow-primary/20"
            >
              Let's Talk
            </a>
            <button
              onClick={onBack}
              className="px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-sm font-bold transition-all duration-300 flex items-center gap-2 border border-white/5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
