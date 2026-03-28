import React, { useEffect } from 'react';
import { CaseStudy } from '../types';
import { TESTIMONIALS } from '../constants';

interface Props {
  study: CaseStudy;
  onBack: () => void;
}

const CaseStudyDetail: React.FC<Props> = ({ study, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const testimonial = study.testimonialId
    ? TESTIMONIALS.find((t) => t.id === study.testimonialId)
    : null;

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
            Back to Work
          </button>
          <span className="text-white/10">/</span>
          <span className="text-slate-500 text-sm truncate">{study.title}</span>
          <div className="ml-auto flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              DJ
            </div>
            <span className="text-slate-400 text-xs hidden sm:block">Deep Javiya</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-20">

        {/* Hero */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
              {study.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
              {study.industry}
            </span>
            <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-medium border border-violet-500/20">
              {study.engagementType}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-slate-400 text-xs font-medium border border-white/5">
              {study.timeline}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-slate-400 text-xs font-medium border border-white/5">
              {study.role}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-gradient">{study.title}</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl">
            {study.overview}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/9]">
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent z-10 pointer-events-none" />
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Business Impact — The Most Important Section */}
        <div className="relative rounded-3xl overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent p-8 md:p-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative space-y-3">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest">What This Means For Your Business</span>
            </div>
            <p className="text-slate-200 text-lg md:text-xl leading-relaxed font-medium max-w-3xl">
              {study.businessImpact}
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div>
          <h2 className="font-display text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Results at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {study.metrics.map((m) => (
              <div key={m.label} className="glass-panel rounded-2xl p-6 border border-white/5 text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">{m.value}</div>
                <div className="text-slate-500 text-xs uppercase tracking-wide">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Before / After */}
        {study.beforeAfter && study.beforeAfter.length > 0 && (
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold">Before / After</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {study.beforeAfter.map((item) => (
                <div key={item.label} className="glass-panel rounded-2xl border border-white/5 overflow-hidden">
                  <div className="px-5 pt-4 pb-2">
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{item.label}</span>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-white/5">
                    <div className="px-5 py-4 bg-red-500/5">
                      <div className="text-xs text-red-400 font-bold uppercase tracking-wide mb-1">Before</div>
                      <div className="text-slate-300 font-semibold text-sm leading-snug">{item.before}</div>
                    </div>
                    <div className="px-5 py-4 bg-emerald-500/5">
                      <div className="text-xs text-emerald-400 font-bold uppercase tracking-wide mb-1">After</div>
                      <div className="text-emerald-300 font-semibold text-sm leading-snug">{item.after}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Challenge / Key Result */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel rounded-3xl p-8 border border-white/5 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-red-500/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
              </div>
              <h2 className="font-display font-bold text-lg">The Challenge</h2>
            </div>
            <p className="text-slate-400 leading-relaxed">{study.challenge}</p>
          </div>

          <div className="glass-panel rounded-3xl p-8 border border-white/5 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="font-display font-bold text-lg">Key Result</h2>
            </div>
            <p className="text-slate-300 font-medium leading-relaxed text-lg">{study.result}</p>
          </div>
        </div>

        {/* Solution */}
        <div className="space-y-4">
          <h2 className="font-display text-2xl font-bold">The Solution</h2>
          <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
          <p className="text-slate-400 leading-relaxed text-base md:text-lg max-w-3xl">{study.solution}</p>
        </div>

        {/* Process Timeline */}
        {study.process && study.process.length > 0 && (
          <div className="space-y-8">
            <h2 className="font-display text-2xl font-bold">Process</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-primary/40 via-accent/20 to-transparent hidden md:block" />
              <div className="space-y-6">
                {study.process.map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center z-10">
                      <span className="text-primary text-xs font-bold">{i + 1}</span>
                    </div>
                    <div className="glass-panel rounded-2xl p-5 border border-white/5 flex-1">
                      <div className="text-white font-semibold text-sm mb-1">{item.step}</div>
                      <div className="text-slate-400 text-sm leading-relaxed">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* My Role */}
        {study.myRole && study.myRole.length > 0 && (
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold">My Role</h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {study.myRole.map((item, i) => (
                <div key={i} className="flex items-start gap-3 glass-panel p-4 rounded-xl border border-white/5">
                  <div className="mt-0.5 w-5 h-5 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="space-y-6">
          <h2 className="font-display text-xs font-bold text-slate-500 uppercase tracking-widest">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {study.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-white/5 text-slate-200 text-sm font-medium border border-white/5 hover:border-primary/30 hover:text-white transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* What I'd do differently */}
        {study.differently && (
          <div className="glass-panel rounded-3xl p-8 border border-amber-500/10 bg-amber-500/5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="font-display font-bold text-lg text-amber-300">What I'd Do Differently</h2>
            </div>
            <p className="text-slate-400 leading-relaxed">{study.differently}</p>
          </div>
        )}

        {/* Testimonial */}
        {testimonial && (
          <div className="glass-panel rounded-3xl p-8 md:p-10 border border-white/5 space-y-6">
            <svg className="w-10 h-10 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-slate-200 text-lg md:text-xl leading-relaxed italic">"{testimonial.text}"</p>
            <div className="flex items-center gap-4 pt-2 border-t border-white/5">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border border-white/10"
              />
              <div>
                <div className="text-white font-semibold">{testimonial.name}</div>
                <div className="text-slate-500 text-sm">{testimonial.role}, {testimonial.company}</div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm font-semibold">Available for similar work</span>
            </div>
            <p className="text-slate-500 text-sm">Looking for a partner on your next {study.industry} project?</p>
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
              All Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
