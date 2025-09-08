import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden">
      {/* Dark Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-slate-900 opacity-40"></div>
      <div className="container mx-auto px-6 text-right relative z-10">
        <div className="max-w-4xl ml-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 animate-fade-in">
            <span className="text-transparent bg-clip-text bg-sky-600 "> &lt;Mohamed /&gt; </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in-delay">
            Web Developer | Video Creator | Tech Enthusiast
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl ml-auto animate-fade-in-delay-2">
            Passionate about creating innovative digital solutions and bringing ideas to life through code.
          </p>
          <button
            onClick={() => scrollToSection('projects')}
            className="bg bg-sky-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fade-in-delay-3 shadow-lg"
          >
            View My Work
          </button>
        </div>
        <div className="absolute bottom-6 right-8 animate-bounce">
          <ChevronDown size={32} className="text-slate-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;