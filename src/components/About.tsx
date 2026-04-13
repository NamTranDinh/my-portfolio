import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '@/src/data/portfolioData';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-square max-w-md mx-auto border-8 border-white/5 shadow-2xl">
              <img
                src="https://picsum.photos/seed/developer/800/800"
                alt="Tran Dinh Nam"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/5 rounded-[4rem] -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              Crafting <span className="text-primary">Digital Experiences</span> with Purpose
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-12">
              <p>
                {portfolioData.summary}
              </p>
              <p>
                My approach combines technical excellence with a deep understanding of product goals. I don't just write code; I build solutions that solve real problems and provide value to users.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all group">
                <div className="text-4xl font-display font-bold text-primary mb-2 group-hover:scale-110 transition-transform origin-left">
                  {portfolioData.stats.yearsOfExperience}+
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all group">
                <div className="text-4xl font-display font-bold text-primary mb-2 group-hover:scale-110 transition-transform origin-left">
                  {portfolioData.stats.projectsCompleted}+
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Projects Delivered</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
