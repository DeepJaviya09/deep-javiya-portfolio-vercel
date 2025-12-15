import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          <div className="flex flex-col justify-center">
            <RevealOnScroll>
              <h2 className="font-display text-5xl md:text-6xl font-bold mb-8">
                Ready to <br/>
                <span className="text-gradient">Scale Up?</span>
              </h2>
              <p className="text-xl text-slate-400 mb-12 max-w-md leading-relaxed">
                Whether you need a custom AI agent or a complete platform overhaul, I bring the engineering rigor to make it happen.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-surfaceHighlight border border-white/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Email Me</div>
                    <a href="mailto:hello@deepjaviya.dev" className="text-lg text-white hover:text-primary transition-colors">hello@deepjaviya.dev</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-surfaceHighlight border border-white/5 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-lg">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                   <div>
                    <div className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Location</div>
                    <span className="text-lg text-white">Remote / Worldwide</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={200}>
            <form className="glass-panel rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-xs font-bold text-primary uppercase tracking-widest mb-3 ml-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-navy/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300" 
                    placeholder="Jane Cooper" 
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-xs font-bold text-primary uppercase tracking-widest mb-3 ml-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-navy/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300" 
                    placeholder="jane@company.com" 
                  />
                </div>
                <div className="group">
                  <label htmlFor="message" className="block text-xs font-bold text-primary uppercase tracking-widest mb-3 ml-1">Project Details</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full bg-navy/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none" 
                    placeholder="Tell me about your vision..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-5 rounded-xl hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.5)] transform hover:-translate-y-1 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default Contact;