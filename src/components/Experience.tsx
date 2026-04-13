import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '@/src/data/portfolioData';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Work <span className="text-primary">Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            My professional journey and the impact I've made at various organizations.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2" />

          <div className="space-y-16">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />

                <div className="pl-12 md:pl-0 md:w-[45%]">
                  <div className={`p-8 rounded-3xl glass border border-white/5 hover:border-primary/20 transition-all duration-500 group ${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}>
                    <div className={`flex items-center gap-2 mb-2 text-primary font-bold text-lg ${
                      index % 2 === 0 ? 'justify-start' : 'md:justify-end'
                    }`}>
                      <Briefcase className="w-5 h-5" />
                      <span>{exp.company}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{exp.role}</h3>
                    <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-6 ${
                      index % 2 === 0 ? 'justify-start' : 'md:justify-end'
                    }`}>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-3">
                        {exp.responsibilities.map((resp, i) => (
                          <div key={i} className={`flex gap-3 text-sm text-muted-foreground leading-relaxed ${
                            index % 2 === 0 ? 'text-left' : 'md:flex-row-reverse md:text-right'
                          }`}>
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                            <p>{resp}</p>
                          </div>
                        ))}
                      </div>
                      
                      {exp.achievements.length > 0 && (
                        <div className="pt-4 border-t border-white/5">
                          <p className={`text-xs font-bold uppercase tracking-widest text-primary mb-3 ${
                            index % 2 === 0 ? 'text-left' : 'md:text-right'
                          }`}>Key Achievements</p>
                          <div className="space-y-2">
                            {exp.achievements.map((ach, i) => (
                              <p key={i} className={`text-sm font-medium ${
                                index % 2 === 0 ? 'text-left' : 'md:text-right'
                              }`}>• {ach}</p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:w-[10%]" />
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
