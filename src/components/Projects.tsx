import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData, Project } from '@/src/data/portfolioData';
import { 
  Github, 
  ExternalLink, 
  ArrowUpRight, 
  ArrowRight, 
  Globe, 
  Play, 
  Apple, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Monitor, 
  Calendar, 
  Users, 
  Briefcase,
  X,
  Trophy
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Trophy className="w-4 h-4" />
            Career Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight"
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed"
          >
            A chronological journey through my professional experience, showcasing 
            leadership, technical depth, and impactful delivery.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-24 md:space-y-32">
            {portfolioData.projects.map((project, index) => (
              <TimelineItem 
                key={project.id} 
                project={project} 
                index={index} 
                onViewDetails={() => setSelectedProject(project)} 
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}

interface TimelineItemProps {
  project: Project;
  index: number;
  onViewDetails: () => void;
  key?: React.Key;
}

function TimelineItem({ project, index, onViewDetails }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline Node */}
      <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 hidden md:block">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]"
        />
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-16">
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card 
            className="group relative overflow-hidden rounded-[2rem] border-white/5 bg-white/[0.02] backdrop-blur-xl hover:border-primary/30 transition-all duration-500 cursor-pointer"
            onClick={onViewDetails}
          >
            <CardContent className="p-0">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
                
                <div className="absolute top-6 right-6 flex gap-2">
                  {project.role.includes('Team Leader') && (
                    <Badge className="bg-primary text-white border-none px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-primary/20">
                      Team Leader
                    </Badge>
                  )}
                  <Badge variant="outline" className="bg-black/40 backdrop-blur-md border-white/10 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {project.platform.join(' • ')}
                  </Badge>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                  <Calendar className="w-4 h-4" />
                  {project.time}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  {project.company}
                </p>

                <p className="text-muted-foreground text-base leading-relaxed mb-8 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-[10px] uppercase tracking-widest border-white/5 px-3 py-1 rounded-lg bg-white/5">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-[10px] uppercase tracking-widest border-white/5 px-3 py-1 rounded-lg bg-white/5">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{project.teamSize.split(',')[0]}</span>
                  </div>
                  <Button variant="ghost" className="rounded-full hover:bg-primary/10 hover:text-primary group/btn h-10 px-6">
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Empty Side for Desktop */}
      <div className="hidden md:block md:w-1/2" />
    </div>
  );
}

function ProjectModal({ project, isOpen, onClose }: { project: Project | null, isOpen: boolean, onClose: () => void }) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-7xl w-[95vw] max-h-[90vh] overflow-y-auto rounded-[1.5rem] md:rounded-[2.5rem] bg-background border-white/10 p-0 shadow-2xl scrollbar-hide">
        <div className="flex flex-col relative">
          {/* Close Button - Fixed position for better UX */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-primary transition-all z-50"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Modal Header/Image */}
          <div className="relative h-60 md:h-[400px] shrink-0">
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
              <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                {project.role.includes('Team Leader') && (
                  <Badge className="bg-primary text-white border-none px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    Team Leader
                  </Badge>
                )}
                <Badge variant="outline" className="bg-white/10 backdrop-blur-md border-white/20 text-white px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest">
                  {project.time}
                </Badge>
              </div>
              <DialogTitle className="text-3xl md:text-6xl font-display font-bold text-white tracking-tight mb-2 md:mb-4">
                {project.name}
              </DialogTitle>
              <p className="text-base md:text-xl text-white/80 font-medium flex items-center gap-2">
                <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                {project.company}
              </p>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 md:p-16 space-y-12 md:space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
              <div className="lg:col-span-2 space-y-10 md:space-y-12">
                <section>
                  <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-4 md:mb-6 flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Project Overview
                  </h4>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-6 md:mt-8 p-5 md:p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <p className="text-primary font-bold text-[10px] md:text-sm uppercase tracking-widest mb-2">Key Highlight</p>
                    <p className="text-foreground text-base md:text-lg font-medium italic">"{project.highlight}"</p>
                  </div>
                </section>

                <section>
                  <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-6 md:mb-8 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Key Responsibilities
                  </h4>
                  <div className="grid grid-cols-1 gap-3 md:gap-4">
                    {project.responsibilities.map((resp, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                      >
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-primary text-[10px] md:text-xs font-bold">{i + 1}</span>
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{resp}</p>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="space-y-10 md:space-y-12">
                <section>
                  <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-4 md:mb-6 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Team & Scale
                  </h4>
                  <div className="p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Team Composition</p>
                      <p className="text-xs md:text-sm font-medium">{project.teamSize}</p>
                    </div>
                    <div className="pt-4 border-t border-white/5">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Target Platforms</p>
                      <div className="flex flex-wrap gap-2">
                        {project.platform.map(p => (
                          <Badge key={p} variant="secondary" className="bg-primary/10 text-primary border-none text-[10px]">
                            {p}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-4 md:mb-6 flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    Tech Stack
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Languages</p>
                      <div className="flex flex-wrap gap-2">
                        {project.languages.map(lang => (
                          <Badge key={lang} variant="secondary" className="bg-white/5 border-white/5 text-[10px] md:text-xs py-1 px-3">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <Badge key={tech} variant="secondary" className="bg-white/5 border-white/5 text-[10px] md:text-xs py-1 px-3">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {project.links && (
                  <section>
                    <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary mb-4 md:mb-6">Project Links</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {project.links.web && (
                        <a href={project.links.web} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all group">
                          <div className="flex items-center gap-3">
                            <Globe className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span className="text-sm font-medium">Live Website</span>
                          </div>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                        </a>
                      )}
                      {project.links.googlePlay && (
                        <a href={project.links.googlePlay} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all group">
                          <div className="flex items-center gap-3">
                            <Play className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span className="text-sm font-medium">Google Play</span>
                          </div>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                        </a>
                      )}
                      {project.links.appStore && (
                        <a href={project.links.appStore} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all group">
                          <div className="flex items-center gap-3">
                            <Apple className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span className="text-sm font-medium">App Store</span>
                          </div>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                        </a>
                      )}
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
