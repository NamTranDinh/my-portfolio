import React from 'react';
import { portfolioData } from '@/src/data/portfolioData';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 border-t border-white/5 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-display font-bold mb-8">
            {portfolioData.name.split(' ').map((word, i) => (
              <span key={i} className={i === 2 ? 'text-primary' : ''}>
                {word}{' '}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12 text-sm font-bold uppercase tracking-widest text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-all">About</a>
            <a href="#skills" className="hover:text-primary transition-all">Skills</a>
            <a href="#experience" className="hover:text-primary transition-all">Experience</a>
            <a href="#projects" className="hover:text-primary transition-all">Projects</a>
            <a href="#contact" className="hover:text-primary transition-all">Contact</a>
          </div>

          <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 text-sm text-muted-foreground font-medium">
            <div>
              © {currentYear} {portfolioData.name}. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <span>Designed & Developed with</span>
              <span className="text-primary animate-pulse">❤️</span>
              <span>by Nam</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
