import React from 'react';
import { CASE_STUDIES } from '../constants';
import { CaseStudy } from '../types';
import RevealOnScroll from './RevealOnScroll';

interface Props {
  onViewStudy: (study: CaseStudy) => void;
}

const CaseStudies: React.FC<Props> = ({ onViewStudy }) => {
  return (
    <section id="work" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <RevealOnScroll>
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
            <p className="text-slate-400 max-w-md text-right hidden md:block text-sm">
              Strategic solutions delivering measurable business impact.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          {/* Single Unified Container */}
          <div className="glass-panel rounded-[2.5rem] border border-white/5 bg-navy/40 overflow-hidden shadow-2xl relative">
            {/* Background decoration inside the container */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

            <div className="divide-y divide-white/10">
              {CASE_STUDIES.map((study, index) => (
                <div
                  key={study.id}
                  className={`group relative flex flex-col lg:flex-row items-center gap-12 p-8 md:p-16 hover:bg-white/[0.02] transition-colors duration-500 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2">
                     <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-primary/30 transition-all duration-500 aspect-[4/3] group-hover:shadow-[0_0_50px_-12px_rgba(99,102,241,0.25)]">
                        <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out-expo"
                        />
                        {/* Floating Badge */}
                        <div className="absolute top-6 left-6 z-20">
                            <span className="px-4 py-2 rounded-full bg-surface/90 backdrop-blur-md border border-white/10 text-xs font-bold text-accent uppercase tracking-wider shadow-lg">
                              {study.category}
                            </span>
                         </div>
                     </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                     <div className="mb-6">
                        <span className="text-slate-500 font-mono text-xs mb-2 block">0{index + 1}</span>
                        <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                          {study.title}
                        </h3>
                     </div>

                     <div className="space-y-8 text-slate-400 mb-10">
                        <div>
                           <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Challenge</h4>
                           <p className="leading-relaxed text-sm md:text-base">{study.challenge}</p>
                        </div>
                        <div>
                           <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Outcome</h4>
                           <p className="text-slate-100 font-medium leading-relaxed text-lg">{study.result}</p>
                        </div>
                     </div>

                     <div>
                       <button
                         onClick={() => onViewStudy(study)}
                         className="px-6 py-3 rounded-full bg-white/5 text-white font-bold text-sm hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 group/btn border border-white/5 hover:border-primary/20"
                       >
                          View Case Study
                          <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                       </button>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default CaseStudies;
