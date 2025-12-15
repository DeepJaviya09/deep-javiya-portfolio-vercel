import React from 'react';
import { TESTIMONIALS } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const Testimonials: React.FC = () => {
  // Quadruple the items to ensure smooth infinite scroll on wide screens
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <RevealOnScroll>
          <div>
            <h2 className="font-display text-4xl font-bold mb-4">Client Feedback</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full">
        {/* Gradient Masks for fade effect */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
          {marqueeItems.map((t, index) => (
            <div 
              key={`${t.id}-${index}`} 
              className="w-[350px] md:w-[450px] flex-shrink-0 px-4"
            >
              <div className="h-full glass-panel p-8 rounded-[2rem] border border-white/5 relative group hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                {/* Decorative Quote */}
                <div className="absolute top-8 right-8 text-white/5 group-hover:text-primary/10 transition-colors duration-500">
                   <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.096 15.341 14.536 17.202 14.536H19.202C19.864 14.536 20.202 14.198 20.202 13.536V11.536C20.202 10.874 19.864 10.536 19.202 10.536H17.202C15.82 10.536 14.702 9.418 14.702 8.036V5.036C14.702 3.654 15.82 2.536 17.202 2.536H20.202C21.584 2.536 22.702 3.654 22.702 5.036V13.536C22.702 17.653 19.356 21 15.202 21H14.017V21ZM5.01699 21L5.01699 18C5.01699 16.096 6.34099 14.536 8.20199 14.536H10.202C10.864 14.536 11.202 14.198 11.202 13.536V11.536C11.202 10.874 10.864 10.536 10.202 10.536H8.20199C6.82003 10.536 5.70199 9.418 5.70199 8.036V5.036C5.70199 3.654 6.82003 2.536 8.20199 2.536H11.202C12.584 2.536 13.702 3.654 13.702 5.036V13.536C13.702 17.653 10.356 21 6.20199 21H5.01699V21Z" /></svg>
                </div>

                <div className="flex items-center gap-4 mb-6 relative z-10">
                   <img 
                    src={t.avatar} 
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/10 group-hover:border-accent transition-colors duration-300"
                   />
                   <div>
                      <div className="font-bold text-white text-base">{t.name}</div>
                      <div className="text-xs font-bold text-primary uppercase tracking-wide">{t.company}</div>
                   </div>
                </div>

                <p className="text-slate-300 leading-relaxed text-sm relative z-10">
                  "{t.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;