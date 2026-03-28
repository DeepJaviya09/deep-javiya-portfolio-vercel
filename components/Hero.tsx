import React from 'react';
import { TECH_STACK } from '../constants';
import avatar from '../assets/avatar.png';
import RevealOnScroll from './RevealOnScroll';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <RevealOnScroll>
               <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Available for projects
              </div>
            </RevealOnScroll>
           
            <RevealOnScroll delay={100}>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
                Scaling Solutions <br />
                For <span className="text-gradient text-gradient-animate">Modern Biz.</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="text-lg md:text-xl text-slate-400 max-w-lg mb-12 leading-relaxed font-light">
                I'm <strong className="text-slate-100 font-medium">Deep Javiya</strong>, a Full-Stack Engineer & AI Specialist. I build robust, self-healing digital ecosystems that drive automated growth.
              </p>
            </RevealOnScroll>

            {/* Expertise Chips */}
            <RevealOnScroll delay={300}>
              <div className="mb-6 text-xs font-bold text-slate-500 uppercase tracking-widest">Core Technologies</div>
              <div className="flex flex-wrap gap-3">
                {TECH_STACK.map((tech, index) => (
                  <span 
                    key={tech}
                    className="px-4 py-2.5 rounded-xl border border-white/5 bg-white/5 text-slate-300 text-sm font-medium hover:border-primary/40 hover:bg-primary/5 hover:text-white transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Visual Content - Floating Abstract */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end perspective-1000">
             <RevealOnScroll delay={400} className="w-full flex justify-center lg:justify-end">
                <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] animate-float">
                  
                  {/* Orbiting Elements */}
                  <div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
                  
                  {/* Floating 3D Card Container */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 md:w-96 md:h-96 bg-surfaceHighlight/50 backdrop-blur-xl rounded-[2.5rem] border border-white/10 relative overflow-hidden shadow-2xl shadow-primary/20 rotate-3 hover:rotate-0 transition-all duration-700 ease-out-expo group">
                      
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 opacity-50"></div>
                      
                      <img
                        src={avatar}
                        alt="Deep Javiya"
                        className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:scale-110 transition-transform duration-1000"
                      />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-20 animate-pulse"></div>
                  <div className="absolute bottom-10 -left-10 w-32 h-32 bg-accent rounded-full blur-3xl opacity-10"></div>
                </div>
             </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;